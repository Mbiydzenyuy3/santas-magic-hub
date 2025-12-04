/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useRef, useEffect } from 'react'

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
      text: 'Ho ho ho! 🎅 Welcome, my friend! What would you like to tell Santa today?'
    }
  ])

  const [input, setInput] = useState('')
  const [nextId, setNextId] = useState(2)
  const nextIdRef = useRef(nextId)

  // Keep the ref in sync with the state
  useEffect(() => {
    nextIdRef.current = nextId
  }, [nextId])

  function handleSend() {
    if (!input.trim()) return

    const currentId = nextId
    setNextId((prev) => prev + 1)

    const userMessage: Message = {
      id: currentId,
      sender: 'user',
      text: input.trim()
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')

    // Mock Santa reply
    setTimeout(() => {
      const replyId = nextIdRef.current
      setNextId((prev) => prev + 1)

      const santaReply: Message = {
        id: replyId,
        sender: 'santa',
        text: generateSantaReply(input.trim())
      }
      setMessages((prev) => [...prev, santaReply])
    }, 600)
  }

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')

      const newDay = 2

      if (!stored.includes(newDay)) {
        const updated = [...stored, newDay]
        localStorage.setItem('completedDays', JSON.stringify(updated))
      }
    } catch (error) {
      console.error('Failed to update completedDays:', error)
    }
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function generateSantaReply(userText: string) {
    const cheerfulReplies = [
      `Ho ho ho! That sounds wonderful! 🎄`,
      `Oh my candy canes! 🍭 That's delightful!`,
      `You’ve made Santa’s beard wiggle with joy! 😂`,
      `Such Christmas spirit! ⭐`,
      `I’ll add that to my North Pole notes! 📝`
    ]

    return cheerfulReplies[Math.floor(Math.random() * cheerfulReplies.length)]
  }

  return (
    <div className="flex flex-col h-screen bg-white relative">
      <div className="p-4 bg-red-600 text-white flex items-center gap-3 shadow-md">
        <img
          src="/images/santa.jpg"
          width={40}
          height={40}
          alt="Santa"
          className="rounded-full"
        />
        <h1 className="text-lg font-semibold">Chat with Santa 🎅</h1>
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
              className={`max-w-[70%] px-4 py-2 rounded-xl shadow 
              ${
                msg.sender === 'user'
                  ? 'bg-green-200 text-gray-900'
                  : 'bg-white text-gray-800 border'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-2 bg-white border-t">
        <input
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
          placeholder="Say something to Santa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Send
        </button>
      </div>
    </div>
  )
}
