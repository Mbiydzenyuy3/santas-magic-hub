"use client";
export default function SantaLaughButton() {
  const playLaugh = () => {
    const audio = new Audio("/audio/Angels-We-Have-Heard-chosic.com_.mp3");
    audio.play();
  };

  return (
    <button
      onClick={playLaugh}
      className='px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:scale-105 transition'
    >
      🎅 Hear Santa play
    </button>
  );
}
