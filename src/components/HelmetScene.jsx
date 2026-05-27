import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

function Helmet() {
  const ref = useRef()

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.4 // sway, don't spin
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
  })

  const steelMat = { color: '#2D2B25', metalness: 0.92, roughness: 0.18, envMapIntensity: 2 }
  const goldMat  = { color: '#B8962E', metalness: 0.85, roughness: 0.25 }
  const redMat   = { color: '#8B1A1A', metalness: 0.05, roughness: 0.9 }

  return (
    <group ref={ref} position={[0, 0, 0]}>
      {/* Dome — half sphere, correctly sized */}
      <mesh>
        <sphereGeometry args={[1, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshStandardMaterial {...steelMat} />
      </mesh>

      {/* Brow band */}
      <mesh position={[0, -0.46, 0]}>
        <torusGeometry args={[1.01, 0.06, 8, 64]} />
        <meshStandardMaterial {...goldMat} />
      </mesh>

      {/* Nasal guard — vertical bar down the face center */}
      <mesh position={[0, -0.7, 0.95]}>
        <boxGeometry args={[0.06, 0.55, 0.04]} />
        <meshStandardMaterial {...steelMat} />
      </mesh>

      {/* Cheekguards — left & right */}
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * 0.82, -0.85, 0.5]} rotation={[0, side * -0.4, 0]}>
          <boxGeometry args={[0.25, 0.5, 0.04]} />
          <meshStandardMaterial {...steelMat} />
        </mesh>
      ))}

      {/* Crest — properly on TOP of dome */}
      <mesh position={[0, 0.85, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.1, 0.4, 1.6]} />
        <meshStandardMaterial {...redMat} />
      </mesh>

      {/* Crest base */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[0.18, 0.12, 1.7]} />
        <meshStandardMaterial {...goldMat} />
      </mesh>
    </group>
  )
}

export default function HelmetScene() {
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <Canvas 
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.5, 4], fov: 38 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1 }}
      >
        <ambientLight intensity={0.08} />
        <directionalLight position={[-6, 4, 3]} intensity={12} castShadow />
        {/* Subtle ember glow from below-front */}
        <pointLight position={[0, -3, 4]} intensity={10} color="#E67E22" />
        {/* Cold blue rim from back */}
        <pointLight position={[3, 2, -5]} intensity={5} color="#4a90d9" />
        
        <Helmet />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
