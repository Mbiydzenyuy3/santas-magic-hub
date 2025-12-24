"use client";

import { useState } from "react";
import { generatePalette } from "@/lib/paletteColors";
import PaletteCard from "./PaletteCard";
import ShareButton from "./ShareButton";

export default function PaletteGenerator() {
  const [palette, setPalette] = useState<string[]>(generatePalette());

  const paletteString = palette.join(", ");

  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='flex gap-4 flex-wrap justify-center'>
        {palette.map((color, index) => (
          <PaletteCard key={index} color={color} />
        ))}
      </div>

      <div className='text-center text-gray-700'>
        <p className='text-sm mb-2'>Palette Colors:</p>
        <code className='bg-gray-100 px-2 py-1 rounded text-xs'>
          {paletteString}
        </code>
      </div>

      <div className='flex gap-4'>
        <button
          onClick={() => setPalette(generatePalette())}
          className='px-6 py-3 bg-green-800 text-white rounded-xl font-medium hover:bg-green-700 transition'
        >
          Generate New Palette
        </button>

        <ShareButton type='palette' content={paletteString} />
      </div>
    </div>
  );
}
