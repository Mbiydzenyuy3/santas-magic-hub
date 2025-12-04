import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <div className="max-w-md">
        <h2 className="text-xl font-semibold text-green-800 mb-6">
          We&apos;re sorry, but this Christmas magic isn&apos;t ready yet!
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Santa&apos;s workshop is still preparing this special feature.
          We&apos;re working around the clock to bring you the most magical
          Christmas experience
        </p>

        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Check back daily for new Christmas surprises
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 font-semibold"
          >
            🏠 Back to Home
          </Link>

          <Link
            href="/magic"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 font-semibold"
          >
            🎁 Enter Magic Hub
          </Link>
        </div>
      </div>
    </div>
  )
}
