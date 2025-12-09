'use client'

interface MessageInputProps {
  message: string
  setMessage: (message: string) => void
  onPickTemplate: () => void
  isCustomMessage: boolean
}

export default function MessageInput({
  message,
  setMessage,
  onPickTemplate,
  isCustomMessage
}: MessageInputProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:border-purple-800"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your Christmas message..."
      />

      <button
        onClick={onPickTemplate}
        disabled={isCustomMessage}
        className={`px-4 py-2 rounded-lg transition-colors ${
          isCustomMessage
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
            : 'bg-green-600 text-white hover:bg-green-700'
        }`}
        title={
          isCustomMessage
            ? 'Clear the message to generate a new one'
            : 'Generate a random Christmas message'
        }
      >
        {isCustomMessage ? 'Message Locked ✍️' : 'Generate message 🎁'}
      </button>
    </div>
  )
}
