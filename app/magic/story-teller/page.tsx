'use client'
import { useState, useEffect } from 'react'
import StoryBuilder from '@/components/StoryBuilder'
import StoryResult from '@/components/StoryResult'
import RealSnowfall from '@/components/Snow'
import { generateStory } from '@/lib/storyTemplates'

export default function StoryTellerPage() {
  const [chapters, setChapters] = useState<string[]>([])

  const handleGenerate = (c: string, s: string, f: string) => {
    const story = generateStory(c, s, f)
    setChapters(story)
  }

  useEffect(() => {
    // Mark Day 8 completed
    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
      if (!stored.includes(8)) {
        localStorage.setItem('completedDays', JSON.stringify([...stored, 8]))
      }
    } catch {}
  }, [])

  return (
    <div className="min-h-screen p-6 relative">
      <RealSnowfall />

      <h1 className="text-center text-3xl font-bold text-red-600 mb-8">
        📖 Christmas Story Maker
      </h1>

      <StoryBuilder onGenerate={handleGenerate} />

      {chapters.length > 0 && <StoryResult chapters={chapters} />}
    </div>
  )
}
