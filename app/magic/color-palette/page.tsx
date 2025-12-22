"use client";

import Link from "next/link";
import { useEffect } from "react";
import PaletteGenerator from "@/components/PaletteGenerator";

export default function ColorPalettePage() {
  useEffect(() => {
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        return;
      }

      const parsed = JSON.parse(localStorage.getItem("completedDays") || "[]");
      const stored: number[] = Array.isArray(parsed) ? parsed : [];
      if (!stored.includes(18)) {
        localStorage.setItem("completedDays", JSON.stringify([...stored, 18]));
      }
    } catch (error) {
      console.error("Failed to update completed days:", error);
    }
  }, []);

  return (
    <div className='min-h-screen max-w-4xl mx-auto py-20 text-center'>
      <div className='absolute top-6 left-6 z-20'>
        <Link
          href='/magic'
          className='inline-flex items-center gap-2 px-4 py-2 bg-red-800 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white rounded-full transition-all duration-300 font-medium group shadow-lg'
        >
          <span className='group-hover:-translate-x-1 transition-transform'>
            ←
          </span>{" "}
          Back
        </Link>
      </div>

      <h1 className='text-4xl font-bold text-green-800 mb-4'>
        🎨 Color Palette Generator
      </h1>

      <p className='text-gray-700 mb-12'>
        Instantly generate beautiful color combinations for your designs.
      </p>

      <PaletteGenerator />
    </div>
  );
}
