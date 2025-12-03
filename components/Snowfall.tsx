'use client'

import React, { useState } from 'react'

interface FlakeData {
  id: string
  left: string
  animationDelay: string
  animationDuration: string
  fontSize: string
}

function generateFlakes(): FlakeData[] {
  return Array.from({ length: 50 }, (_, i) => ({
    id: `flake-${i}`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${6 + Math.random() * 5}s`,
    fontSize: `${12 + Math.random() * 20}px`
  }))
}

export default function Snowfall() {
  const [flakes] = useState<FlakeData[]>(generateFlakes)

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[-1]">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snow opacity-60"
          style={{
            left: flake.left,
            animationDelay: flake.animationDelay,
            animationDuration: flake.animationDuration,
            fontSize: flake.fontSize
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
