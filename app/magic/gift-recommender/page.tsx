"use client";

import { useState } from "react";
import GiftForm from "@/components/GiftForm";
import GiftResults from "@/components/GiftResults";
import { getGiftRecommendations } from "@/lib/giftRules";
import { useEffect } from "react";
import Link from "next/link";

export default function GiftRecommenderPage() {
  const [gifts, setGifts] = useState<string[]>([]);

  useEffect(() => {
    const parsed = JSON.parse(localStorage.getItem("completedDays") || "[]");
    const stored: number[] = Array.isArray(parsed) ? parsed : [];
    if (!stored.includes(12)) {
      localStorage.setItem("completedDays", JSON.stringify([...stored, 12]));
    }
  }, []);

  return (
    <div className='min-h-screen relative bg-gradient-to-b from-red-800 via-red-900 to-red-950 text-white overflow-hidden selection:bg-yellow-200 selection:text-red-900 p-6 flex flex-col items-center py-16 px-6'>
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
      <h1 className='text-3xl font-bold mb-4'>Christmas Gift Recommender</h1>
      <p className='mb-8 text-gray-300'>
        Tell us about your friend and we’ll suggest the perfect gifts.
      </p>

      <GiftForm
        onSubmit={(data) => {
          const results = getGiftRecommendations(data);
          setGifts(results);
        }}
      />

      {gifts.length > 0 && <GiftResults gifts={gifts} />}
    </div>
  );
}
