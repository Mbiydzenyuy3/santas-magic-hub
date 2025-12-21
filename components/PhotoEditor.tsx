"use client";
import Image from "next/image";
import { Filters } from "@/lib/filters";
import { useState, useEffect } from "react";

export default function PhotoEditor({
  image,
  filters
}: {
  image: string;
  filters: Filters;
}) {
  const [displayDimensions, setDisplayDimensions] = useState({
    width: 400,
    height: 300
  });

  useEffect(() => {
    const img = document.createElement("img");
    img.onload = () => {
      const aspectRatio = img.width / img.height;

      const maxWidth = 400;
      const maxHeight = 300;

      let width = maxWidth;
      let height = maxWidth / aspectRatio;

      if (height > maxHeight) {
        height = maxHeight;
        width = maxHeight * aspectRatio;
      }

      setDisplayDimensions({
        width: Math.round(width),
        height: Math.round(height)
      });
    };
    img.src = image;
  }, [image]);

  // TODO: Future 3D effects implementation
  // const apply3DEffects = () => {
  //   return {
  //     perspective: filters.perspective,
  //     transform: `rotateY(${filters.rotation3d}deg) ${filters.depth ? 'translateZ(20px)' : ''}`,
  //     transformStyle: 'preserve-3d' as const
  //   };
  // };

  return (
    <div className='relative inline-block max-w-md mx-auto'>
      <div
        className='relative'
        style={{
          width: displayDimensions.width,
          height: displayDimensions.height
        }}
      >
        <Image
          src={image}
          alt='Photo with glow and contrast effects'
          fill
          className='rounded-xl'
          style={{
            filter: `
              contrast(${filters.contrast}%)
              ${
                filters.glow
                  ? `
                brightness(1.4)
                saturate(1.8)
                hue-rotate(15deg)
              `
                  : ""
              }
            `
          }}
          sizes='(max-width: 768px) 100vw, 400px'
        />

        {/* TODO: Future 3D highlight overlay
        {filters.depth && (
          <div
            className='absolute inset-0 rounded-xl pointer-events-none'
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.2) 0%, 
                  transparent 30%, 
                  transparent 70%, 
                  rgba(0, 0, 0, 0.1) 100%)
              `,
              transform: 'translateZ(30px)'
            }}
          />
        )}
        */}
      </div>
    </div>
  );
}
