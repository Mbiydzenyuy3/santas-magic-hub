"use client";

import { useState, useEffect } from "react";
import SecretSantaForm from "@/components/SecretSantaForm";
import SecretSantaResults from "@/components/SecretSantaResults";
import { generateSecretSanta } from "@/lib/secretSanta";
import Link from "next/link";

export default function SecretSantaPage() {
  const [results, setResults] = useState<{ giver: string; receiver: string }[]>(
    []
  );

  useEffect(() => {
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        return;
      }

      const parsed = JSON.parse(localStorage.getItem("completedDays") || "[]");
      const stored: number[] = Array.isArray(parsed) ? parsed : [];
      if (!stored.includes(16)) {
        localStorage.setItem("completedDays", JSON.stringify([...stored, 16]));
      }
    } catch (error) {
      console.error("Failed to update completed days:", error);
    }
  }, []);

  return (
    <div className='min-h-screen relative bg-gradient-to-b from-red-700 via-red-900 to-red-950 text-white overflow-hidden selection:bg-yellow-200 selection:text-red-900 p-6 flex flex-col items-center py-16 px-6'>
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
      <h1 className='text-4xl font-bold text-white mb-4'>
        🎅 Secret Santa Randomizer
      </h1>

      <p className='text-gray-200 mb-8'>
        Enter names and let Santa secretly assign the gifts
      </p>

      <SecretSantaForm
        onGenerate={(names) => setResults(generateSecretSanta(names))}
      />

      <SecretSantaResults results={results} />
    </div>
  );
}
