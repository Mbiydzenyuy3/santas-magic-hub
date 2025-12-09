'use client'

import { useRef, useState } from 'react'
import htmlToImage from 'html-to-image'
import { Mood } from '@/lib/cardMoods'
import FinalCard from './FinalCard'
import ElfBuilderAnimation from './ElfBuilderAnimation'

interface CardPreviewProps {
  mood: Mood | null
  message: string
}

export default function CardPreview({ mood, message }: CardPreviewProps) {
  const [building, setBuilding] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleGenerate = async () => {
    setBuilding(true)
    setTimeout(() => setBuilding(false), 1500)
  }

  const downloadImage = async () => {
    if (!cardRef.current) {
      console.error('Card reference is not available')
      return
    }

    try {
      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 1.0,
        pixelRatio: 2
      })
      const link = document.createElement('a')
      link.download = 'christmas-card.png'
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error('Failed to generate image:', error)
      alert('Failed to generate image. Please try again.')
    }
  }

  return (
    <div className="w-full flex flex-col items-center mt-6">
      <button
        onClick={handleGenerate}
        className="px-6 py-3 bg-red-600 text-white rounded-lg shadow"
      >
        🎁 Generate Card
      </button>

      {building ? (
        <ElfBuilderAnimation />
      ) : (
        mood &&
        message && (
          <>
            <div className="mt-6 w-full">
              <FinalCard mood={mood} message={message} cardRef={cardRef} />
            </div>

            <button
              onClick={downloadImage}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              ⬇️ Download PNG
            </button>
          </>
        )
      )}
    </div>
  )
}
