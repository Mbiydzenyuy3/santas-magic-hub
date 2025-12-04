export default function MagicHub() {
  return (
    <div className="max-w-4xl mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold text-green-800 mb-6">
        🎁 Welcome to the Magic Hub
      </h1>
      <p className="text-gray-600 mb-10">
        Explore the magical Christmas tools unlocked so far
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          href="/magic/santa-chat"
          className="p-5 rounded-xl shadow hover:shadow-lg bg-white"
        >
          🎅 Santa Chat
          <p className="text-xs text-gray-500 mt-2">Day 2 unlocked</p>
        </a>

        <a
          href="/magic/countdown"
          className="p-5 rounded-xl shadow hover:shadow-lg bg-white"
        >
          ⏳ Christmas Countdown
        </a>

        <a
          href="/magic/elf-name"
          className="p-5 rounded-xl shadow hover:shadow-lg bg-white"
        >
          🧝‍♂️ Elf Name Generator
        </a>

        <a
          href="/magic/greeting-cards"
          className="p-5 rounded-xl shadow hover:shadow-lg bg-white"
        >
          💌 Greeting Card Maker
        </a>

        <a
          href="/magic/tree-decorator"
          className="p-5 rounded-xl shadow hover:shadow-lg bg-white"
        >
          🎄 Tree Decorator
        </a>
      </div>
    </div>
  )
}
