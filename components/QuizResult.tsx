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
  return (
    <div className='bg-white p-6 rounded-xl shadow-lg text-center max-w-2xl mx-auto'>
      <h2 className='text-2xl font-bold mb-2'>🎄 Quiz Complete!</h2>
      <p className='mb-4 font-medium'>
        You scored {score} / {total}
      </p>

      <p className='mb-6 text-lg'>{reaction}</p>

      <button
        onClick={onRestart}
        className='px-5 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 transition'
      >
        Play Again
      </button>
    </div>
  );
}
