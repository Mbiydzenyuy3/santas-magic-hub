"use client";

import OrnamentPalette from "@/components/OrnamentPalette";
import TreeCanvas from "@/components/TreeCanvas";
import Link from "next/link";
import { useEffect } from "react";
import RealSnowfall from "@/components/Snow";

export default function TreeDecoratorPage() {
  useEffect(() => {
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        return;
      }

      const parsed = JSON.parse(localStorage.getItem("completedDays") || "[]");
      const stored: number[] = Array.isArray(parsed) ? parsed : [];
      if (!stored.includes(14)) {
        localStorage.setItem("completedDays", JSON.stringify([...stored, 14]));
      }
    } catch (error) {
      console.error("Failed to update completed days:", error);
    }
  }, []);

  return (
    <div className='min-h-screen relative bg-gradient-to-b from-red-600 via-red-700 to-red-800 text-white overflow-hidden selection:bg-yellow-200 selection:text-red-900 p-6 flex flex-col items-center py-16 px-6'>
      <div className='fixed inset-0 pointer-events-none z-0'>
        <RealSnowfall />
      </div>
      <div className='absolute top-6 left-6 z-20'>
        <Link
          href='/magic'
          className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white rounded-full transition-all duration-300 font-medium group shadow-lg'
        >
          <span className='group-hover:-translate-x-1 transition-transform'>
            ←
          </span>{" "}
          Back
        </Link>
      </div>

      <h1 className='text-4xl font-bold text-green-800 mt-6 mb-4'>
        🎄 Christmas Tree Decorator
      </h1>

      <p className='text-gray-100 mb-8'>
        Drag ornaments onto the tree and decorate it your way!
      </p>

      <div className='flex flex-col items-center gap-6'>
        <OrnamentPalette />
        <TreeCanvas />
      </div>
    </div>
  );
}
