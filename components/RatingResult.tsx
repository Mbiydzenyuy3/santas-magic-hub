"use client";

import ShareButton from "./ShareButton";

export default function RatingResult({
  rating,
  name
}: {
  rating: { label: string; score: number };
  name: string;
}) {
  const resultText = `${name} got ${rating.score}% on Santa's naughty or nice list: ${rating.label}`;

  return (
    <div className='space-y-6'>
      <div className='mt-6 p-4 bg-green-50 border rounded-lg'>
        <h2 className='text-xl font-semibold text-green-700'>
          {name}, Santa says…
        </h2>

        <p className='text-2xl mt-2'>{rating.label}</p>

        <div className='w-full bg-gray-200 h-3 rounded-full mt-3'>
          <div
            className='h-3 bg-red-500 rounded-full transition-all duration-700'
            style={{ width: `${rating.score}%` }}
          ></div>
        </div>
      </div>

      <div className='text-center'>
        <ShareButton type='rating' content={resultText} />
      </div>
    </div>
  );
}
