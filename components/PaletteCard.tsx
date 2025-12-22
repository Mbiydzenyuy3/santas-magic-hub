interface PaletteCardProps {
  color: string;
}

export default function PaletteCard({ color }: PaletteCardProps) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div
        className='w-20 h-20 rounded-xl shadow-md border'
        style={{ backgroundColor: color }}
      />
      <span className='text-xs font-mono text-gray-700'>{color}</span>
    </div>
  );
}
