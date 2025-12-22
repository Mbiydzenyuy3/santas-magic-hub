type Props = {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

export default function OrnamentTask({
  text,
  completed,
  onToggle,
  onDelete
}: Props) {
  return (
    <div
      className={`relative p-4 rounded-full shadow-md cursor-pointer transition 
      ${completed ? "bg-green-200 line-through" : "bg-red-200"}`}
      onClick={onToggle}
    >
      🎄 {text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className='absolute -top-2 -right-2 bg-white rounded-full px-2 text-sm'
      >
        ✖
      </button>
    </div>
  );
}
