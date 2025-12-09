'use client'

import { useState, useEffect } from 'react'
import { cardMessages } from '@/lib/cardMessages'
import { Mood } from '@/lib/cardMoods'
import MoodSelector from '@/components/MoodSelector'
import MessageInput from '@/components/MessageInput'
import CardPreview from '@/components/CardPreview'

export default function GreetingCardsPage() {
  const [mood, setMood] = useState<Mood | null>(null)
  const [message, setMessage] = useState('')

  const pickRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * cardMessages.length)
    setMessage(cardMessages[randomIndex])
  }

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
    <div className="min-h-screen p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        🎨 North Pole Card Maker 🎁
      </h1>

      <h2 className="text-lg font-semibold mb-3">1️⃣ Choose a mood</h2>
      <MoodSelector selected={mood} onSelect={setMood} />

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">2️⃣ Write your message</h2>
        <MessageInput
          message={message}
          setMessage={setMessage}
          onPickTemplate={pickRandomMessage}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">
          3️⃣ Let Santa’s elves build it
        </h2>
        <CardPreview mood={mood} message={message} />
      </div>
    </div>
  )
}
