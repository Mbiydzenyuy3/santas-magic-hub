'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { elfNames } from '@/lib/elfNames'
import Snowfall from '@/components/Snowfall'

export default function ElfNamePage() {
  const [elfName, setElfName] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const generateElfName = () => {
    setLoading(true)
    setElfName(null)

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * elfNames.length)
      setElfName(elfNames[randomIndex])
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
      const newDay = 6

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
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative">
      <Link
        href="/magic"
        className="absolute top-2 left-8 inline-flex items-center gap-2 px-4 py-2 bg-red-200 hover:bg-red-100 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
      >
        ← Back
      </Link>
      <Snowfall />

      <h1 className="text-3xl font-bold text-red-600 mb-6">
        🧝‍♂️ Elf Name Generator 🎄
      </h1>

      <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg max-w-xl text-xl leading-relaxed min-h-[120px] flex items-center justify-center">
        {loading && (
          <div className="animate-pulse text-gray-600">
             Santa is crafting your elf name... ✨
          </div>
        )}

        {!loading && elfName && (
          <div className="animate-fadeIn text-green-700 font-semibold">
            {elfName}
          </div>
        )}

        {!loading && !elfName && (
          <p className="text-gray-700">
            Click the button below to discover your elf identity!
          </p>
        )}
      </div>

      <button
        onClick={generateElfName}
        className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow transition"
      >
        Generate My Elf Name ✨
      </button>
    </div>
  )
}
