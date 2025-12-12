'use client'

import { useState, useEffect } from 'react'
import CustomSnowfall from '@/components/custom-snowfall/CustomSnowfall'
import ControlsPanel from '@/components/custom-snowfall/ControlsPanel'
import Link from 'next/link'

export default function SnowfallCustomizerPage() {
  const [speed, setSpeed] = useState(8)
  const [density, setDensity] = useState(60)
  const [shape, setShape] = useState('❄')

  useEffect(() => {
    const parsed = JSON.parse(localStorage.getItem('completedDays') || '[]')
    const stored: number[] = Array.isArray(parsed) ? parsed : []
    if (!stored.includes(10)) {
      localStorage.setItem('completedDays', JSON.stringify([...stored, 10]))
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative text-center bg-red-800">
      <div className="fixed inset-0 pointer-events-none z-0">
        <CustomSnowfall speed={speed} density={density} shape={shape} />
      </div>
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/magic"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white rounded-full transition-all duration-300 font-medium group shadow-lg"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{' '}
          Back
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-white mb-6">
        ❄️ Snowfall Customizer
      </h1>

      <ControlsPanel
        speed={speed}
        density={density}
        shape={shape}
        onSpeedChange={setSpeed}
        onDensityChange={setDensity}
        onShapeChange={setShape}
      />
    </div>
  )
}
