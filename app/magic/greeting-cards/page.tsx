/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState, useEffect } from 'react'
import { cardMessages } from '@/lib/cardMessages'
import { Mood } from '@/lib/cardMoods'
import MoodSelector from '@/components/MoodSelector'
import MessageInput from '@/components/MessageInput'
import CardPreview from '@/components/CardPreview'
import ElfBuilderAnimation from '@/components/ElfBuilderAnimation'
import Link from 'next/link'

export default function GreetingCardsPage() {
  const [mood, setMood] = useState<Mood | null>(null)
  const [message, setMessage] = useState('')
  const [showCard, setShowCard] = useState(false)
  const [building, setBuilding] = useState(false)

  const pickRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * cardMessages.length)
    setMessage(cardMessages[randomIndex])
  }

  const generateCard = () => {
    if (mood && message.trim()) {
      setBuilding(true)
      setTimeout(() => {
        setBuilding(false)
        setShowCard(true)
      }, 1500)
    }
  }

  const isCustomMessage = message.trim().length > 0

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
      const newDay = 7
      if (!stored.includes(newDay)) {
        localStorage.setItem(
          'completedDays',
          JSON.stringify([...stored, newDay])
        )
      }
    } catch {}
  }, [])

  return (
    <div className="min-h-screen p-6 max-w-3xl mx-auto text-center relative">
      <Link
        href="/magic"
        className="absolute top-2 -left-64 mb-20 inline-flex items-center gap-2 px-4 py-2 bg-red-100 hover:bg-red-50 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
      >
        ← Back
      </Link>
      <h1 className="text-3xl font-bold text-red-600 mt-20 mb-6">
        🎨 Christmas Card Maker 🎁
      </h1>
      <p className="mb-6 mt-4 text-gray-700">
        Create a magical Christmas card in three simple steps: First choose a
        mood that matches your feelings, then either write your own heartfelt
        message or let Santa&apos;s elves generate one for you, and finally
        click "Generate Card" to bring your creation to life!
      </p>

      <h2 className="text-lg font-semibold mb-3">1️⃣ Choose a mood</h2>
      <MoodSelector selected={mood} onSelect={setMood} />

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">2️⃣ Write your message</h2>
        <MessageInput
          message={message}
          setMessage={setMessage}
          onPickTemplate={pickRandomMessage}
          isCustomMessage={isCustomMessage}
        />

        {mood && message.trim() && (
          <button
            onClick={generateCard}
            className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-colors"
          >
            Generate Card 🎁
          </button>
        )}
      </div>

      <div className="mt-8">
        {building ? (
          <ElfBuilderAnimation />
        ) : showCard ? (
          <>
            <h2 className="text-lg font-semibold mb-3">
              🎄 Your Christmas Card
            </h2>
            <CardPreview mood={mood} message={message} />
          </>
        ) : null}
      </div>
    </div>
  )
}
