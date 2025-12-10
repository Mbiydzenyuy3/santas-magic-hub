'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
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
    try {
      const stored = JSON.parse(localStorage.getItem('completedDays') || '[]')
      if (!stored.includes(8)) {
        localStorage.setItem('completedDays', JSON.stringify([...stored, 8]))
      }
    } catch {}
  }, [])

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-red-800 via-red-900 to-red-950 text-white overflow-hidden selection:bg-yellow-200 selection:text-red-900">
      <div className="fixed inset-0 pointer-events-none z-0">
        <RealSnowfall />
      </div>

      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/magic"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white rounded-full transition-all duration-300 font-medium group shadow-lg"
        >
          <span className="group-hover:-translate-x-1 transition-transform">
            ←
          </span>{' '}
          Back
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        {/* Title - Glowing Gold Text */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] mb-4">
            📖 Christmas Story Maker
          </h1>
          <p className="text-white text-lg font-light tracking-wide">
            Weave your own holiday magic, one chapter at a time.
          </p>
        </div>

        <div className="bg-white backdrop-blur-sm border border-white/60 rounded-2xl p-6 md:p-8 shadow-2xl">
          <StoryBuilder onGenerate={handleGenerate} />
        </div>

        {chapters.length > 0 && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <StoryResult chapters={chapters} />
          </div>
        )}
      </div>
    </div>
  )
}
