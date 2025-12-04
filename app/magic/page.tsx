export default function MagicHub() {
  return (
    <div className="max-w-4xl mx-auto py-20 text-center bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        🎁 Welcome to the Magic Hub
      </h1>
      <p className="text-gray-900 mb-10 font-medium">
        Explore the magical Christmas tools unlocked so far
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          href="/magic/santa-chat"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            🎅 Santa Chat
          </div>
          <p className="text-xs text-gray-700 mt-2 font-medium">
            Day 2 unlocked
          </p>
        </a>

        <a
          href="/magic/countdown"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            ⏳ Christmas Countdown
          </div>
        </a>

        <a
          href="/magic/elf-name"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            🧝‍♂️ Elf Name Generator
          </div>
        </a>

        <a
          href="/magic/greeting-cards"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            💌 Greeting Card Maker
          </div>
        </a>

        <a
          href="/magic/tree-decorator"
          className="p-5 rounded-xl shadow-lg hover:shadow-xl bg-white border border-gray-200 transition-all duration-200 hover:border-green-300"
        >
          <div className="text-gray-900 font-semibold text-lg">
            🎄 Tree Decorator
          </div>
        </a>
      </div>
    </div>
  )
}
