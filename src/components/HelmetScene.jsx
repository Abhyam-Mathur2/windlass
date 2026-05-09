import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

function Helmet() {
  const helmetRef = useRef()

  useFrame((state) => {
    if (helmetRef.current) {
      helmetRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={helmetRef}>
      {/* Main Dome */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#2D2B25" metalness={0.9} roughness={0.2} />
      </mesh>
      
      {/* Visor / Face Guard */}
      <mesh position={[0, -0.3, 0.8]}>
        <boxGeometry args={[1.2, 0.8, 0.1]} />
        <meshStandardMaterial color="#1E1C17" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Crest */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.1, 0.5, 1.5]} />
        <meshStandardMaterial color="#8B1A1A" metalness={0.1} roughness={0.9} />
      </mesh>
    </group>
  )
}

export default function HelmetScene() {
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <Canvas camera={{ position: [0, 1, 4], fov: 40 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={5} castShadow />
        <pointLight position={[-5, -2, 2]} intensity={2} color="#E67E22" />
        
        <Helmet />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
