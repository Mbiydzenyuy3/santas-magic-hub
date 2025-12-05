'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function ChristmasCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  const [snowflakeConfigs] = useState<
    Array<{ left: string; animationDelay: string; animationDuration: string }>
  >(generateSnowflakeConfigs)

  function calculateTimeLeft() {
    const now = new Date()
    const christmas = new Date(now.getFullYear(), 11, 25)

    const diff = christmas.getTime() - now.getTime()

    return {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60))
    }
  }

  function generateSnowflakeConfigs() {
    return [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${4 + Math.random() * 6}s`
    }))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
      const newDay = 3

      if (!stored.includes(newDay)) {
        localStorage.setItem(
          'completedDays',
          JSON.stringify([...stored, newDay])
        )
      }
    } catch (err) {
      console.error('Failed to update completedDays:', err)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center relative overflow-hidden">
      <Link
        href="/magic"
        className="absolute top-2 left-8 inline-flex items-center gap-2 px-4 py-2 bg-red-200 hover:bg-red-100 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
      >
        ← Back
      </Link>
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {snowflakeConfigs.length > 0 &&
          snowflakeConfigs.map((config, i) => (
            <div
              key={i}
              className="absolute animate-fall text-lg"
              style={config}
            >
              ❄
            </div>
          ))}
      </div>

      <h1 className="text-4xl font-bold text-red-700 drop-shadow mb-4 animate-fade-in">
        🎄 Christmas Countdown 🎄
      </h1>

      <p className="text-gray-600 mb-8 animate-fade-in">
        Counting down to the most magical day of the year
      </p>

      <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-red-50 rounded-2xl shadow-lg animate-pop">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="text-3xl font-bold text-red-700">{item.value}</div>
            <div className="text-sm text-gray-700">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
