'use client'

import { useRef, useState } from 'react'
import { Mood } from '@/lib/cardMoods'
import FinalCard from './FinalCard'

interface CardPreviewProps {
  mood: Mood | null
  message: string
}

export default function CardPreview({ mood, message }: CardPreviewProps) {
  const [downloading, setDownloading] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const downloadImage = async () => {
    if (!cardRef.current) {
      console.error('Card reference is not available')
      return
    }

    setDownloading(true)

    try {
      // Dynamically import html-to-image to avoid SSR bundle bloat
      const { toPng } = await import('html-to-image')

      // Get the actual dimensions of the card
      const cardElement = cardRef.current
      const rect = cardElement.getBoundingClientRect()

      // Ensure the card is fully visible before capturing
      cardElement.scrollIntoView({ behavior: 'instant', block: 'center' })

      // Wait a bit for any animations to complete
      await new Promise((resolve) => setTimeout(resolve, 500))

      const dataUrl = await toPng(cardElement, {
        quality: 1.0,
        pixelRatio: 2,
        width: rect.width + 20,
        height: rect.height + 20,
        style: {
          padding: '20px',
          boxSizing: 'content-box',
          backgroundColor: 'white',
          borderRadius: '12px'
        },
        cacheBust: true,
        backgroundColor: '#ffffff'
      })

      const link = document.createElement('a')
      link.download = 'christmas-card.png'
      link.href = dataUrl
      link.click()

      console.log(
        'Image generated successfully with dimensions:',
        rect.width + 20,
        'x',
        rect.height + 20
      )
    } catch (error) {
      console.error('Failed to generate image:', error)
      alert('Failed to generate image. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center mt-6">
      {mood && message && (
        <>
          <div className="mt-6 w-full">
            <FinalCard mood={mood} message={message} cardRef={cardRef} />
          </div>

          <button
            onClick={downloadImage}
            disabled={downloading}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {downloading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Generating...
              </>
            ) : (
              '⬇️ Download PNG'
            )}
          </button>
        </>
      )}
    </div>
  )
}
