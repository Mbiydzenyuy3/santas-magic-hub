'use client'

export default function MessageInput({
  message,
  setMessage,
  onPickTemplate
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
any) {
  return (
    <div className="w-full flex flex-col gap-3">
      <textarea
        className="w-full p-3 border rounded-lg h-32"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your Christmas message..."
      />

      <button
        onClick={onPickTemplate}
        className="px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Send Messages To Someone Special 🎁
      </button>
    </div>
  )
}
