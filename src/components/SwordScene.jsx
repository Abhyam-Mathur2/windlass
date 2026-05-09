import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Sword() {
  const swordRef = useRef()

  // Procedural Sword Geometry
  const bladeGeometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.02, 0.15, 3.5, 8)
    geo.scale(1, 1, 0.1) // Flatten the cylinder to look like a blade
    return geo
  }, [])

  const crossguardGeometry = useMemo(() => {
    return new THREE.BoxGeometry(1.2, 0.08, 0.2)
  }, [])

  const gripGeometry = useMemo(() => {
    return new THREE.CylinderGeometry(0.08, 0.08, 0.8, 16)
  }, [])

  const pommelGeometry = useMemo(() => {
    return new THREE.SphereGeometry(0.12, 16, 16)
  }, [])

  useFrame((state) => {
    if (swordRef.current) {
      // Slow rotation on Y
      swordRef.current.rotation.y += 0.003
      
      // Gentle bobbing on Y
      swordRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.08

      // Mouse tilt
      const mouseX = (state.mouse.x * Math.PI) / 12 // max ~15 degrees
      const mouseY = (state.mouse.y * Math.PI) / 12
      swordRef.current.rotation.x = THREE.MathUtils.lerp(swordRef.current.rotation.x, mouseY, 0.05)
      swordRef.current.rotation.z = THREE.MathUtils.lerp(swordRef.current.rotation.z, -mouseX, 0.05)
    }
  })

  return (
    <group ref={swordRef}>
      {/* Blade */}
      <mesh geometry={bladeGeometry} position={[0, 1.75, 0]}>
        <meshStandardMaterial 
          color="#D4D8DB" 
          metalness={0.95} 
          roughness={0.1} 
        />
      </mesh>
      
      {/* Crossguard */}
      <mesh geometry={crossguardGeometry} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#B8962E" 
          metalness={0.8} 
          roughness={0.3} 
        />
      </mesh>

      {/* Grip */}
      <mesh geometry={gripGeometry} position={[0, -0.4, 0]}>
        <meshStandardMaterial 
          color="#1E1C17" 
          metalness={0.2} 
          roughness={0.8} 
        />
      </mesh>

      {/* Pommel */}
      <mesh geometry={pommelGeometry} position={[0, -0.8, 0]}>
        <meshStandardMaterial 
          color="#B8962E" 
          metalness={0.8} 
          roughness={0.3} 
        />
      </mesh>
    </group>
  )
}

function Sparks({ count = 2000 }) {
  const points = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        // Drift upward
        positions[i * 3 + 1] += 0.005
        if (positions[i * 3 + 1] > 5) positions[i * 3 + 1] = -5
        
        // Horizontal jitter
        positions[i * 3] += Math.sin(state.clock.getElapsedTime() + i) * 0.001
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#E67E22"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function SwordScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#0A0805']} />
        <fogExp2 attach="fog" args={['#0A0805', 0.08]} />
        
        <ambientLight intensity={0.2} color="#1a1f2e" />
        <pointLight position={[-3, 5, 5]} intensity={50} color="#E67E22" />
        <pointLight position={[5, 2, -3]} intensity={10} color="#4a90d9" />
        <pointLight position={[0, -2, -6]} intensity={20} color="#D4D8DB" />
        
        <Sword />
        <Sparks />

        {/* Reflective Ground Plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial 
            color="#0A0805"
            roughness={0.05}
            metalness={0.9}
          />
        </mesh>

        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
