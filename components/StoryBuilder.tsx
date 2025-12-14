'use client'
import { useState } from 'react'
import { characters, settings, conflicts } from '@/lib/storyOptions'

interface Props {
  onGenerate: (c: string, s: string, f: string) => void
}

export default function StoryBuilder({ onGenerate }: Props) {
  const [character, setCharacter] = useState('')
  const [setting, setSetting] = useState('')
  const [conflict, setConflict] = useState('')

  return (
    <div className="bg-white/90 p-6 rounded-xl shadow max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-bold text-red-600">✨ Build Your Story</h2>

      <select
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
        className="w-full p-2 border text-gray-500 rounded"
      >
        <option value="">Choose a character…</option>
        {characters.map((c, i) => (
          <option key={i}>{c}</option>
        ))}
      </select>

      <select
        value={setting}
        onChange={(e) => setSetting(e.target.value)}
        className="w-full p-2 border text-gray-500 rounded"
      >
        <option value="">Choose a setting…</option>
        {settings.map((s, i) => (
          <option key={i}>{s}</option>
        ))}
      </select>

      <select
        value={conflict}
        onChange={(e) => setConflict(e.target.value)}
        className="w-full p-2 border text-gray-500 rounded"
      >
        <option value="">Choose a conflict…</option>
        {conflicts.map((f, i) => (
          <option key={i}>{f}</option>
        ))}
      </select>

      <button
        disabled={!character || !setting || !conflict}
        onClick={() => onGenerate(character, setting, conflict)}
        className="w-full bg-red-600 text-white py-2 rounded disabled:opacity-50"
      >
        Generate Story✨
      </button>
    </div>
  )
}
