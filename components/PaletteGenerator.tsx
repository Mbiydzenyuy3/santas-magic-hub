"use client";

import { useState } from "react";
import { generatePalette } from "@/lib/paletteColors";
import PaletteCard from "./PaletteCard";

export default function PaletteGenerator() {
  const [palette, setPalette] = useState<string[]>(generatePalette());

  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='flex gap-4 flex-wrap justify-center'>
        {palette.map((color, index) => (
          <PaletteCard key={index} color={color} />
        ))}
      </div>

      <button
        onClick={() => setPalette(generatePalette())}
        className='px-6 py-3 bg-green-800 text-white rounded-xl font-medium hover:bg-green-700 transition'
      >
        Generate New Palette
      </button>
    </div>
  );
}
