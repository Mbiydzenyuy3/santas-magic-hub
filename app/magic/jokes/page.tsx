'use client'

import { useState, useEffect } from 'react'
import { ChristmasJokes } from '@/lib/jokes'
import Link from 'next/link'

export default function JokesPage() {
  const [joke, setJoke] = useState<string>(() => {
    const index = Math.floor(Math.random() * ChristmasJokes.length)
    return ChristmasJokes[index]
  })
  const [loading, setLoading] = useState(false)

  const generateNewJoke = () => {
    setLoading(true)

    setTimeout(() => {
      const index = Math.floor(Math.random() * ChristmasJokes.length)
      const newJoke = ChristmasJokes[index]

      setJoke(newJoke)
      setLoading(false)
    }, 1200)
  }

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
      const newDay = 5

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
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-red-50 relative">
      <Link
        href="/magic"
        className="absolute top-2 left-8 inline-flex items-center gap-2 px-4 py-2 bg-red-200 hover:bg-red-100 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
      >
        ← Back
      </Link>
      <h1 className="text-3xl font-bold text-red-700 mb-6">
        🎅 Santa’s Christmas Joke Generator
      </h1>

      {loading ? (
        <div className="flex flex-col items-center animate-fadeIn">
          <div className="animate-bounce text-5xl">🔔</div>
          <p className="mt-2 text-red-700 font-medium">
            Santa is thinking of a funny joke... 🎄
          </p>
        </div>
      ) : (
        <div
          className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg max-w-xl text-lg leading-relaxed animate-fadeIn"
          key={joke}
        >
          {joke}
        </div>
      )}

      <button
        onClick={generateNewJoke}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-all duration-200"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Give Me a New Joke 🎁'}
      </button>
    </div>
  )
}
