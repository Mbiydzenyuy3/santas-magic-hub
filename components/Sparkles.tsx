"use client";

import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle: Sparkle = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 2000 + 1000
      };
      setSparkles((prev) => [...prev, newSparkle]);

      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, newSparkle.duration);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none z-10'>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className='absolute animate-ping'
          style={{
            left: sparkle.x,
            top: sparkle.y,
            fontSize: sparkle.size,
            animationDuration: `${sparkle.duration}ms`
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
}
