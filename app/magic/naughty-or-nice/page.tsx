'use client'
import NaughtyNiceForm from '@/components/NaughtyNiceForm'
import RealSnowfall from '@/components/Snow'
import { useEffect } from 'react'
import Link from 'next/link'

export default function NaughtyOrNicePage() {
  useEffect(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem('completedDays') || '[]')
      const stored: number[] = Array.isArray(parsed) ? parsed : []
      if (!stored.includes(9)) {
        localStorage.setItem('completedDays', JSON.stringify([...stored, 9]))
      }
    } catch {}
  }, [])
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative bg-red-800">
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

      <NaughtyNiceForm />
    </div>
  )
}
