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
      className={`p-8 rounded-xl shadow-xl w-full max-w-lg mx-auto ${style.bg} ${style.font} transition-all duration-500`}
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
