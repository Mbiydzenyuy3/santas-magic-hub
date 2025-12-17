"use client";

import { useRef, useState, useEffect } from "react";
import * as htmlToImage from "html-to-image";
import SnowmanCanvas from "@/components/SnowmanCanvas";
import SnowmanControls from "@/components/SnowmanControls";
import Link from "next/link";
import RealSnowfall from "@/components/Snow";

export default function SnowmanBuilderPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        return;
      }

      const parsed = JSON.parse(localStorage.getItem("completedDays") || "[]");
      const stored: number[] = Array.isArray(parsed) ? parsed : [];
      if (!stored.includes(15)) {
        localStorage.setItem("completedDays", JSON.stringify([...stored, 15]));
      }
    } catch (error) {
      console.error("Failed to update completed days:", error);
    }
  }, []);

  const [eyes, setEyes] = useState("");
  const [nose, setNose] = useState("");
  const [hat, setHat] = useState("none");
  const [scarf, setScarf] = useState("none");

  const saveImage = async () => {
    if (!ref.current) return;
    const dataUrl = await htmlToImage.toPng(ref.current);
    const link = document.createElement("a");
    link.download = "my-snowman.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className='min-h-screen relative bg-gradient-to-b from-red-700 via-red-800 to-red-900 text-white overflow-hidden selection:bg-yellow-200 selection:text-red-900 p-6 flex flex-col items-center py-16 px-6'>
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
      <h1 className='text-3xl font-bold mb-4'>⛄ Build Your Snowman</h1>
      <p className='text-gray-200 mb-8'>
        Customize your snowman and save it as an image!
      </p>

      <SnowmanCanvas
        ref={ref}
        eyes={eyes}
        nose={nose}
        hat={hat}
        scarf={scarf}
      />

      <SnowmanControls
        setEyes={setEyes}
        setNose={setNose}
        setHat={setHat}
        setScarf={setScarf}
      />

      <button
        onClick={saveImage}
        className='mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500'
      >
        Save Snowman ❄️
      </button>
    </div>
  );
}
