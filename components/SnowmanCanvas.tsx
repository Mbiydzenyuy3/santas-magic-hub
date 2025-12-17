"use client";

import { forwardRef } from "react";

type Props = {
  eyes: string;
  nose: string;
  hat: string;
  scarf: string;
};

const SnowmanCanvas = forwardRef<HTMLDivElement, Props>(
  ({ eyes, nose, hat, scarf }, ref) => {
    return (
      <div
        ref={ref}
        className='relative w-64 h-80 mx-auto bg-blue-50 rounded-xl flex flex-col items-center justify-end p-4'
      >
        {hat !== "none" && (
          <div className='absolute top-2 text-3xl'>
            {hat === "top-hat" ? "🎩" : "🎅"}
          </div>
        )}

        <div className='relative w-24 h-24 bg-white rounded-full border'>
          {eyes && <div className='absolute top-7 left-6'>👀</div>}
          {nose && <div className='absolute top-11 left-11'>🥕</div>}
        </div>

        {scarf !== "none" && (
          <div className='text-xl mt-1'>
            {scarf === "red" ? "🟥🟥" : "🟩🟩"}
          </div>
        )}

        <div className='w-32 h-32 bg-white rounded-full border mt-2' />
      </div>
    );
  }
);

SnowmanCanvas.displayName = "SnowmanCanvas";

export default SnowmanCanvas;
