'use client'

import { useEffect, useState } from 'react'
import SantaIcon from './SantaIcon'
import MapPath from './MapPath'
import { santaCities } from '@/lib/santaCities'

export default function SantaTracker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % santaCities.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const currentCity = santaCities[index]

  return (
    <div className="relative w-full max-w-3xl h-[400px] bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow-lg overflow-hidden mx-auto">
      <div className="absolute inset-0 pointer-events-none animate-pulse opacity-20">
        ❄ ❄ ❄
      </div>

      <MapPath cities={santaCities} visited={index} />

      <SantaIcon x={currentCity.x} y={currentCity.y} />

      <div className="absolute bottom-4 w-full text-center">
        <p className="text-xl font-bold text-red-700">
          🎅 Santa is now flying over:
        </p>
        <p className="text-lg font-semibold text-green-800">
          {currentCity.name}
        </p>
      </div>
    </div>
  )
}
