import Link from 'next/link'

export default function MagicHub() {
  return (
    <div className="h-screen max-w-4xl mx-auto py-20 text-center bg-white min-h-screen">
      <div className="top-0 left-8 p-4 absolute">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-200 hover:bg-red-100 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
        >
          <span>←</span>
          Back to Home
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        🎁 Welcome to the Magic Hub
      </h1>
      <p className="text-gray-900 mb-10 font-medium">
        Explore the magical Christmas tools unlocked so far
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/magic/santa-chat"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            🎅 Santa Chat
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">
            Day 2 unlocked
          </p>
        </Link>

        <Link
          href="/magic/countdown"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            ⏳ Christmas Countdown
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">
            Day 3 unlocked
          </p>
        </Link>
        <Link
          href="/magic/quotes"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            🎁 Christmas Quotes Generator
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">
            Day 4 unlocked
          </p>
        </Link>

        <Link
          href="/magic/jokes"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            🎅Christmas Jokes Generator🤣
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">
            Day 5 unlocked
          </p>
        </Link>

        <Link
          href="/magic/elf-name"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            🧝‍♂️ Elf Name Generator
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">
            Day 6 unlocked
          </p>
        </Link>

        <Link
          href="/magic/greeting-cards"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            💌 Greeting Card Maker
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">
            Day 7 unlocked
          </p>
        </Link>
        <Link
          href="/magic/story-teller"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            📖 Christmas Story Maker
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">
            Day 8 unlocked
          </p>
        </Link>

        <Link
          href="/magic/ornament-generator"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            Santa’s “Naughty or Nice” Rating Tool
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">
            Day 9 unlocked
          </p>
        </Link>

        <Link
          href="/magic/tree-decorator"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            🎄 Tree Decorator
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">Day 9</p>
        </Link>

        <Link
          href="/magic/wish-list"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            🍽️ Holiday Recipe Finder
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">Day 10</p>
        </Link>
      </div>
    </div>
  )
}
