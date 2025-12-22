"use client";

import ShareButton from "./ShareButton";

type Props = {
  score: number;
  total: number;
  reaction: string;
  onRestart: () => void;
};

export default function QuizResult({
  score,
  total,
  reaction,
  onRestart
}: Props) {
  const percentage = Math.round((score / total) * 100);
  const resultText = `You scored ${score}/${total} (${percentage}%) on this Christmas quiz: ${reaction}`;

  return (
    <div className='bg-white p-6 rounded-xl shadow-lg text-center max-w-2xl mx-auto'>
      <h2 className='text-2xl font-bold mb-2'>🎄 Quiz Complete!</h2>
      <p className='mb-4 font-medium'>
        You scored {score} / {total} ({percentage}%)
      </p>

      <p className='mb-6 text-lg'>{reaction}</p>

      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
        <button
          onClick={onRestart}
          className='px-5 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 transition'
        >
          Play Again
        </button>

        <ShareButton type='quiz' content={resultText} />
      </div>
    </div>
  );
}
