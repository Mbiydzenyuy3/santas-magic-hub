/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect, useRef } from 'react'
import { christmasQuotes } from '@/lib/christmasQuotes'
import Snowfall from '@/components/Snowfall'
import Link from 'next/link'

export default function QuotesPage() {
  const [randomQuote, setRandomQuote] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const index = Math.floor(Math.random() * christmasQuotes.length)
      setRandomQuote(christmasQuotes[index])
      setLoading(false)
    }, 1200)

    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
      const newDay = 4

      if (!stored.includes(newDay)) {
        localStorage.setItem(
          'completedDays',
          JSON.stringify([...stored, newDay])
        )
      }
    } catch (err) {
      console.error('Failed to update completedDays:', err)
    }

    return () => clearTimeout(timer)
  }, [])

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const generateRandomQuote = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setLoading(true)

    timeoutRef.current = setTimeout(() => {
      const index = Math.floor(Math.random() * christmasQuotes.length)
      setRandomQuote(christmasQuotes[index])
      setLoading(false)
    }, 1300)
  }

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
        🎁 Christmas Quote Generator 🎄
      </h1>

      {loading ? (
        <div className="flex flex-col items-center p-6 rounded-xl bg-white/70 shadow-lg max-w-xl">
          <img
            src="/images/santa.jpg"
            className="w-20 h-20 rounded-full santa-bounce"
            alt="Santa loading"
          />
          <p className="mt-4 text-lg text-gray-700">
            🎅 Santa is preparing a special quote just for you...
          </p>
        </div>
      ) : (
        <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg max-w-xl text-lg leading-relaxed fade-quote">
          {randomQuote}
        </div>
      )}

      <button
        onClick={generateRandomQuote}
        className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Another ✨'}
      </button>
    </div>
  )
}
