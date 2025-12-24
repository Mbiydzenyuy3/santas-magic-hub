"use client";
import { useEffect, useState } from "react";

export default function SantaLaughButton() {
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!muted) {
      const audio = new Audio("/audio/Angels-We-Have-Heard-chosic.com_.mp3");
      audio.volume = 0.3; // Soft volume
      audio.play().catch(() => {}); // Ignore if autoplay blocked
    }
  }, [muted]);

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <button
      onClick={toggleMute}
      className='px-4 py-2 mt-4 bg-red-500 text-white rounded-lg shadow hover:scale-105 transition'
    >
      {muted ? "🔇 Muted" : "🔊 Santa Laugh"}
    </button>
  );
}
