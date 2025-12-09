'use client'

import { cardMoods, Mood } from '@/lib/cardMoods'

interface FinalCardProps {
  mood: Mood
  message: string
  cardRef: React.RefObject<HTMLDivElement | null>
}

export default function FinalCard({ mood, message, cardRef }: FinalCardProps) {
  const style = cardMoods[mood]

  return (
    <div
      ref={cardRef}
      className={`p-8 rounded-xl shadow-xl w-full min-w-[400px] max-w-[600px] mx-auto ${style.bg} ${style.font} transition-all duration-500`}
    >
      <div className="text-4xl mb-3 flex gap-2 justify-center">
        {style.decorations.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      <p className={`text-xl leading-relaxed ${style.accent}`}>{message}</p>
    </div>
  )
}
