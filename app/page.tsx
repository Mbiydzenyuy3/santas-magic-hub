import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Snowfall from '../components/Snowfall'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFAF4]">
      <Snowfall />
      <Navbar />

      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h1 className="text-5xl font-bold text-green-800 mb-4">
          🎄 Santa’s Magic Hub
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          22 Features in 22 Days. Pure Christmas Magic. A daily build challenge
          from Dec 3 Today → Dec 25.
        </p>

        <Link
          href="/magic"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow"
        >
          Enter the Magic Hub
        </Link>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 mt-20 max-w-5xl mx-auto">
        {Array.from({ length: 22 }).map((_, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl border shadow-sm text-center transition ${
              i === 0
                ? 'bg-green-100 border-green-400 shadow-green-200'
                : 'bg-white border-gray-200 opacity-50'
            }`}
          >
            <p className="font-semibold text-gray-700">Day {i + 1}</p>
            <p className="text-sm text-gray-500 mt-1">
              {i === 0 ? '🚀 Launch Day' : 'Coming soon...'}
            </p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  )
}
