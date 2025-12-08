'use client'

import { useState, useEffect } from 'react'
import { elfFirstNames, elfMiddleNames, elfLastNames } from '@/lib/elfNames'

export default function ElfNamePage() {
  const [elfName, setElfName] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showName, setShowName] = useState(false)

  const generateElfName = () => {
    setLoading(true)
    setShowName(false)

    setTimeout(() => {
      const first =
        elfFirstNames[Math.floor(Math.random() * elfFirstNames.length)]
      const middle =
        elfMiddleNames[Math.floor(Math.random() * elfMiddleNames.length)]
      const last = elfLastNames[Math.floor(Math.random() * elfLastNames.length)]

      setElfName(`${first} ${middle} ${last}`)
      setLoading(false)

      setTimeout(() => setShowName(true), 150)
    }, 1200)
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
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-white relative">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        ✨ Discover Your Elf Name 🎄🧝‍♂️
      </h1>

      {loading && (
        <div className="text-lg text-red-600 animate-pulse">
          Crafting your magical elf identity... ✨
        </div>
      )}

      {elfName && !loading && (
        <div
          className={`mt-6 text-2xl font-semibold text-green-800 transition-all duration-700 ${
            showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {elfName}
        </div>
      )}

      <button
        onClick={generateElfName}
        className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow"
      >
        Generate My Elf Name
      </button>
    </div>
  )
}
