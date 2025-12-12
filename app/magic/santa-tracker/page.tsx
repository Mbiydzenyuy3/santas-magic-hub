import SantaTracker from '@/components/SantaTracker'
import Link from 'next/link'

export default function SantaTrackerPage() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-red-800 via-red-900 to-red-950 text-white overflow-hidden selection:bg-yellow-200 selection:text-red-900 p-6 flex flex-col items-center py-16 px-6">
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
      <h1 className="text-4xl font-bold text-white mb-4 item-center justify-center">
        🎅 Santa Tracker Animation
      </h1>
      <p className="text-gray-300 mb-10 font-medium">
        Watch Santa fly from city to city delivering joy
      </p>

      <SantaTracker />
    </div>
  )
}
