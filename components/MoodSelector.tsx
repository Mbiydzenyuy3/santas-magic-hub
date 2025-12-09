'use client'

import { cardMoods, Mood } from '@/lib/cardMoods'

interface MoodSelectorProps {
  selected: Mood | string | null
  onSelect: (mood: Mood) => void
}

export default function MoodSelector({
  selected,
  onSelect
}: MoodSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
      {Object.entries(cardMoods).map(([key, mood]) => (
        <button
          key={key}
          onClick={() => onSelect(key as Mood)}
          className={`p-4 rounded-lg border transition transform ${
            selected === key
              ? 'border-red-600 scale-105 shadow-lg'
              : 'border-gray-300 hover:scale-105'
          }`}
        >
          <p className="font-semibold">{mood.name}</p>
        </button>
      ))}
    </div>
  )
}
