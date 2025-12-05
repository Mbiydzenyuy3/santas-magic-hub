/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Message {
  id: number
  sender: 'user' | 'santa'
  text: string
}

export default function SantaChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'santa',
      text: "Ho ho ho! 🎅 Welcome to Santa's chat! What would you like for Christmas?"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [nextId, setNextId] = useState(2)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')

      if (!stored.includes(2)) {
        localStorage.setItem('completedDays', JSON.stringify([...stored, 2]))
      }
    } catch {}
  }, [])

  async function handleSend() {
    if (!input.trim()) return

    const userText = input.trim()
    setInput('')

    const userMessage: Message = {
      id: nextId,
      sender: 'user',
      text: userText
    }
    setNextId((prev: number) => prev + 1)
    setMessages((prev: Message[]) => [...prev, userMessage])

    setLoading(true)

    try {
      const res = await fetch('/api/santa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      })
      if (!res.ok) {
        throw new Error('Failed to get response from Santa')
      }
      const data = await res.json()
      const santaMessage: Message = {
        id: nextId + 1,
        sender: 'santa',
        text: data.reply || 'Ho ho ho! Santa is busy right now. Try again!'
      }
      setNextId((prev: number) => prev + 1)
      setMessages((prev: Message[]) => [...prev, santaMessage])
    } catch (err) {
      console.error('Santa chat error:', err)
      const errorMessage: Message = {
        id: nextId + 1,
        sender: 'santa',
        text: "Ho ho ho! 🎅 Santa's workshop is having some trouble. Please try again!"
      }
      setNextId((prev: number) => prev + 1)
      setMessages((prev: Message[]) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col h-screen bg-white relative">
      <div className="p-4 bg-red-600 text-white flex items-center gap-3 shadow-md">
        <div className="flex items-center gap-3 flex-1">
          <img
            src="/images/santa.jpg"
            width={40}
            height={40}
            alt="Santa"
            className="rounded-full"
          />
          <h1 className="text-lg font-semibold">Chat with Santa</h1>
        </div>

        <Link href="/magic" className="px-3 py-1 bg-red-700 rounded-lg">
          ← Back
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] px-4 py-2 rounded-xl shadow ${
                msg.sender === 'user'
                  ? 'bg-green-200 text-gray-900'
                  : 'bg-white text-gray-800 border'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border px-4 py-2 rounded-xl text-gray-700 italic animate-pulse">
              Santa is typing… 🎅
            </div>
          </div>
        )}
      </div>
      <div className="p-4 flex gap-2 border-t bg-white">
        <input
          className="flex-1 px-3 py-2 border rounded-lg"
          placeholder="Tell Santa something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-red-600 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  )
}
