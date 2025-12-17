type Props = {
  setEyes: (v: string) => void;
  setNose: (v: string) => void;
  setHat: (v: string) => void;
  setScarf: (v: string) => void;
};

export default function SnowmanControls({
  setEyes,
  setNose,
  setHat,
  setScarf
}: Props) {
  return (
    <div className='grid grid-cols-2 gap-3 mt-6'>
      <button onClick={() => setEyes("classic")} className='btn'>
        Add Eyes 👀
      </button>
      <button onClick={() => setNose("carrot")} className='btn'>
        Add Nose 🥕
      </button>
      <button onClick={() => setHat("top-hat")} className='btn'>
        Add Hat 🎩
      </button>
      <button onClick={() => setScarf("red")} className='btn'>
        Add Scarf 🧣
      </button>
    </div>
  );
}
