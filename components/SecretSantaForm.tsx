"use client";

import { useState } from "react";

export default function SecretSantaForm({
  onGenerate
}: {
  onGenerate: (names: string[]) => void;
}) {
  const [input, setInput] = useState("");

  const handleGenerate = () => {
    const names = input
      .split(",")
      .map((n) => n.trim())
      .filter(Boolean);

    onGenerate(names);
  };

  return (
    <div className='space-y-4'>
      <textarea
        className='w-full p-4 border rounded-lg'
        rows={4}
        placeholder='Enter names separated by commas'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition'
      >
        Generate Secret Santa
      </button>
    </div>
  );
}
