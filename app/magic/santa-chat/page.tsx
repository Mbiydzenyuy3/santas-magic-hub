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
  const [msgCounter, setMsgCounter] = useState(2)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
      if (!stored.includes(2)) {
        localStorage.setItem('completedDays', JSON.stringify([...stored, 2]))
      }
    } catch {}
  }, [])

  async function handleSend() {
    const text = input.trim()
    if (!text) return

    const userMessage: Message = {
      id: msgCounter,
      sender: 'user',
      text
    }

    setMessages((prev) => [...prev, userMessage])
    setMsgCounter((prev) => prev + 1)
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/santa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      })

      const data = await response.json()

      const santaReply =
        data.reply ??
        "Ho ho ho! 🎅 Santa's workshop is busy right now. Try again shortly!"

      const santaMessage: Message = {
        id: msgCounter + 1,
        sender: 'santa',
        text: santaReply
      }

      setMessages((prev) => [...prev, santaMessage])
      setMsgCounter((prev) => prev + 1)
    } catch (e) {
      console.error('Santa chat error:', e)

      const errorMessage: Message = {
        id: msgCounter + 1,
        sender: 'santa',
        text: "Ho ho ho! 🎅 Santa's workshop is having trouble connecting. Please try again!"
      }

      setMessages((prev) => [...prev, errorMessage])
      setMsgCounter((prev) => prev + 1)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-white">
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
