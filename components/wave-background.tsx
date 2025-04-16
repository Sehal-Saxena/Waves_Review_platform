"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type * as THREE from "three"

function WaveMesh() {
  const mesh = useRef<THREE.Mesh>(null!)
  const geometry = useRef<THREE.PlaneGeometry>(null!)

  // Create the geometry
  const args = useMemo(() => [32, 32, 64, 64], [])

  // Animation
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    const position = geometry.current.attributes.position

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i)
      const y = position.getY(i)

      // Create wave effect
      const waveX1 = 0.1 * Math.sin(x * 2 + time * 0.7)
      const waveX2 = 0.15 * Math.sin(x * 3 + time * 0.5)
      const waveY1 = 0.1 * Math.sin(y * 2 + time * 0.7)
      const waveY2 = 0.15 * Math.sin(y * 3 + time * 0.5)

      const z = waveX1 + waveX2 + waveY1 + waveY2

      position.setZ(i, z)
    }

    position.needsUpdate = true
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 3, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry ref={geometry} args={args} />
      <meshStandardMaterial color="#0891b2" wireframe={true} transparent={true} opacity={0.6} />
    </mesh>
  )
}

export function WaveBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-cyan-50 to-white">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <WaveMesh />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
