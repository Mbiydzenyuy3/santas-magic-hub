"use client";

export default function MusicVisualizer({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className='flex items-end justify-center gap-1 h-10 mt-4'>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`w-1 bg-green-600 rounded transition-all duration-300 ${
            isPlaying ? "animate-pulse h-full" : "h-2"
          }`}
        />
      ))}
    </div>
  );
}
