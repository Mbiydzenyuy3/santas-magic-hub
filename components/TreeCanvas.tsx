"use client";

import { useState } from "react";

interface PlacedOrnament {
  id: string;
  emoji: string;
  x: number;
  y: number;
}

export default function TreeCanvas() {
  const [placed, setPlaced] = useState<PlacedOrnament[]>([]);

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const emoji = e.dataTransfer.getData("text/plain");

    if (!emoji || emoji.length > 10) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();

    setPlaced((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        emoji,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    ]);
  }

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className='relative w-80 h-[420px] bg-green-50 rounded-xl flex items-center justify-center border-2 border-green-300'
    >
      {/* Tree */}
      <div className='text-9xl select-none'>🎄</div>

      {/* Ornaments */}
      {placed.map((o) => (
        <span
          key={o.id}
          className='absolute text-2xl'
          style={{ left: o.x, top: o.y }}
        >
          {o.emoji}
        </span>
      ))}
    </div>
  );
}
