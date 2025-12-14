export default function SantaIcon({ x, y }: { x: number; y: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        transition: 'all 1.8s ease-in-out'
      }}
    >
      <span className="text-4xl">🛷🎅</span>
    </div>
  )
}
