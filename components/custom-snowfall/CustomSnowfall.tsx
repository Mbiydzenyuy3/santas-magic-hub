'use client'

import { useMemo } from 'react'

interface Flake {
  id: number
  left: string
  size: string
  delay: string
}

interface CustomSnowfallProps {
  density: number
  speed: number
  shape: string | React.ReactNode
}

function createRandomGenerator(seed: number) {
  let state = seed
  return () => {
    state = (state * 1664525 + 1013904223) % Math.pow(2, 32)
    return state / Math.pow(2, 32)
  }
}

export default function CustomSnowfall({
  density,
  speed,
  shape
}: CustomSnowfallProps) {
  const flakes = useMemo<Flake[]>(() => {
    const random = createRandomGenerator(density * 1234567 + 89101112)

    return Array.from({ length: density }, (_, i) => ({
      id: i,
      left: `${random() * 100}%`,
      size: `${12 + random() * 16}px`,
      delay: `${random() * 5}s`
    }))
  }, [density])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[-1]">
      {flakes.map((f) => (
        <div
          key={f.id}
          className="absolute animate-snow text-white"
          style={{
            left: f.left,
            fontSize: f.size,
            animationDelay: f.delay,
            animationDuration: `${speed}s`
          }}
        >
          {shape}
        </div>
      ))}
    </div>
  )
}
