import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function randomAt(index, seed = 1) {
  const value = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453
  return value - Math.floor(value)
}

// ── Procedurally correct sword ──────────────────────────────
function Sword() {
  const group = useRef()

  // Blade using Shape + Extrude for proper sword profile
  const bladeGeo = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)          // tip
    shape.lineTo(-0.08, -0.3)   // left edge near tip
    shape.lineTo(-0.12, -1.8)   // left edge mid
    shape.lineTo(-0.07, -3.2)   // left edge base
    shape.lineTo(0, -3.4)       // base center
    shape.lineTo(0.07, -3.2)    // right edge base
    shape.lineTo(0.12, -1.8)    // right edge mid
    shape.lineTo(0.08, -0.3)    // right edge near tip
    shape.lineTo(0, 0)          // back to tip

    const settings = {
      depth: 0.025,
      bevelEnabled: true,
      bevelThickness: 0.005,
      bevelSize: 0.004,
      bevelSegments: 2
    }
    const geo = new THREE.ExtrudeGeometry(shape, settings)
    geo.center()
    return geo
  }, [])

  const crossguardGeo = useMemo(() => new THREE.BoxGeometry(1.4, 0.1, 0.22), [])
  const gripGeo       = useMemo(() => new THREE.CylinderGeometry(0.07, 0.085, 0.9, 16), [])
  const pommelGeo     = useMemo(() => new THREE.SphereGeometry(0.13, 16, 12), [])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()

    // Y-axis spin
    group.current.rotation.y += 0.003

    // Gentle vertical float
    group.current.position.y = Math.sin(t * 0.5) * 0.1

    // Mouse tracking — smooth lerp, capped at ±12°
    const targetX = (state.mouse.y * Math.PI) / 15
    const targetZ = (-state.mouse.x * Math.PI) / 15
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.04)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetZ, 0.04)
  })

  const bladeMat = (
    <meshStandardMaterial
      color="#C8CCCE"
      metalness={0.98}
      roughness={0.08}
      envMapIntensity={2.5}
    />
  )

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* Blade — centered, tip up */}
      <mesh geometry={bladeGeo} position={[0, 1.2, 0]}>
        {bladeMat}
      </mesh>

      {/* Fuller groove — inset narrow plane for depth */}
      <mesh position={[0, 0.8, 0.014]}>
        <boxGeometry args={[0.02, 2.2, 0.001]} />
        <meshStandardMaterial color="#8E9EAB" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Crossguard */}
      <mesh geometry={crossguardGeo} position={[0, -0.52, 0]}>
        <meshStandardMaterial color="#B8962E" metalness={0.85} roughness={0.25} envMapIntensity={1.5} />
      </mesh>

      {/* Grip */}
      <mesh geometry={gripGeo} position={[0, -1.06, 0]}>
        <meshStandardMaterial color="#2D1A0E" metalness={0.05} roughness={0.95} />
      </mesh>

      {/* Grip wrap lines */}
      {[-0.85, -0.95, -1.05, -1.15, -1.25].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <torusGeometry args={[0.09, 0.008, 8, 16]} />
          <meshStandardMaterial color="#B8962E" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}

      {/* Pommel — slightly squashed sphere */}
      <mesh geometry={pommelGeo} scale={[1, 0.75, 1]} position={[0, -1.56, 0]}>
        <meshStandardMaterial color="#B8962E" metalness={0.85} roughness={0.25} />
      </mesh>
    </group>
  )
}

// ── Ember particle field ──────────────────────────────────────
function Sparks({ count = 2500 }) {
  const ref = useRef()

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (randomAt(i, count) - 0.5) * 14
      pos[i*3+1] = (randomAt(i + count, count + 1) - 0.5) * 10
      pos[i*3+2] = (randomAt(i + count * 2, count + 2) - 0.5) * 6
      vel[i]     = 0.003 + randomAt(i + count * 3, count + 3) * 0.007
    }
    return [pos, vel]
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    const arr = ref.current.geometry.attributes.position.array
    const t = state.clock.getElapsedTime()
    const seed = Math.floor(t * 1000)
    for (let i = 0; i < count; i++) {
      arr[i*3+1] += velocities[i]
      arr[i*3]   += Math.sin(t * 0.5 + i * 0.1) * 0.0008
      if (arr[i*3+1] > 5.5) {
        arr[i*3+1] = -5.5
        arr[i*3]   = (randomAt(i + seed, count) - 0.5) * 14
        arr[i*3+2] = (randomAt(i + seed + 1, count + 4) - 0.5) * 6
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#E67E22"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.7}
      />
    </Points>
  )
}

// ── Ground plane with logo etching ──────────────────────────
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.2, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#0A0805" roughness={0.04} metalness={0.95} />
    </mesh>
  )
}

// ── Scene ────────────────────────────────────────────────────
export default function SwordScene() {
  const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 1000 : 2500
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.5, 7], fov: 42 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.85 }}
      >
        <color attach="background" args={['#0A0805']} />
        <fogExp2 attach="fog" color="#0A0805" density={0.055} />

        {/* Lighting rig */}
        <ambientLight intensity={0.12} color="#1a1d2e" />
        {/* Key — warm forge glow, front-left */}
        <pointLight position={[-4, 6, 5]} intensity={120} color="#E67E22" castShadow
          shadow-mapSize={[512, 512]} shadow-bias={-0.001} />
        {/* Fill — cool blue, back-right */}
        <pointLight position={[6, 2, -4]} intensity={25} color="#4a90d9" />
        {/* Rim — silver, low front */}
        <pointLight position={[0, -3, 6]} intensity={40} color="#D4D8DB" />
        {/* Subtle red from below — blood from the forge */}
        <pointLight position={[0, -5, 0]} intensity={15} color="#8B1A1A" />

        <Float speed={0.8} rotationIntensity={0} floatIntensity={0.3}>
          <Sword />
        </Float>
        <Sparks count={particleCount} />
        <Ground />

        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
