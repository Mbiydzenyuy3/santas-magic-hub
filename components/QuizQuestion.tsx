type Props = {
  question: string;
  options: string[];
  onAnswer: (index: number) => void;
};

export default function QuizQuestion({ question, options, onAnswer }: Props) {
  return (
    <div className='bg-white p-6 rounded-xl  shadow-lg max-w-2xl mx-auto'>
      <h2 className='text-xl font-bold mb-4'>{question}</h2>

      <div className='grid gap-3'>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className='px-4 py-2 rounded-lg border border-gray-400 hover:bg-green-50 transition font-medium'
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
