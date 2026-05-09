import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FireParticles({ count = 100 }) {
  const points = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.5
      pos[i * 3 + 1] = Math.random() * 2
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.5
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += 0.02
        if (positions[i * 3 + 1] > 2) {
          positions[i * 3 + 1] = 0
          positions[i * 3] = (Math.random() - 0.5) * 0.5
          positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5
        }
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#E67E22"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function ForgeGlow() {
  const lightRef = useRef()

  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.intensity = 1.5 + Math.sin(state.clock.getElapsedTime() * 10) * 0.5
    }
  })

  return (
    <pointLight 
      ref={lightRef}
      position={[0, 0, 0]} 
      intensity={2} 
      color="#C0392B" 
      distance={5}
    />
  )
}

export default function ForgeFireScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <color attach="background" args={['#0A0805']} />
        <FireParticles />
        <ForgeGlow />
      </Canvas>
    </div>
  )
}
