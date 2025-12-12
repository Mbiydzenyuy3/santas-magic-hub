'use client'

import { useState } from 'react'
import { getRating } from '@/lib/naughtyMeter'
import RatingResult from './RatingResult'

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">🎅</span>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold text-red-600 animate-pulse">
        Santa is checking the list...
      </p>
      <p className="text-sm text-gray-600 mt-2">
        Please wait, this will take a moment
      </p>
    </div>
  )
}

export default function NaughtyNiceForm() {
  const [name, setName] = useState('')
  const [result, setResult] = useState<{ label: string; score: number } | null>(
    null
  )
  const [loading, setLoading] = useState(false)

  const handleCheck = async () => {
    if (!name.trim()) return

    // Start loading animation
    setLoading(true)
    setResult(null)

    // Simulate Santa thinking time (2-3 seconds)
    await new Promise((resolve) => setTimeout(resolve, 2500))

    // Get the rating and show result
    setResult(getRating(name))
    setLoading(false)
  }

  return (
    <div className="w-full max-w-md p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg text-center">
      <h1 className="text-2xl font-bold text-red-600 mb-4">
        🎅 Naughty or Nice Meter
      </h1>

      <label htmlFor="name-input" className="sr-only">
        Your name
      </label>
      <input
        id="name-input"
        className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-red-500 disabled:opacity-50"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />

      <button
        onClick={handleCheck}
        disabled={loading || !name.trim()}
        className="w-full py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200 font-semibold"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Checking...
          </span>
        ) : (
          'Check My Rating'
        )}
      </button>

      {loading && <LoadingSpinner />}
      {!loading && result && <RatingResult rating={result} name={name} />}
    </div>
  )
}
