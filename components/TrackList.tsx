import { christmasTracks } from "@/lib/christmasTracks";

export default function TrackList({
  onSelect
}: {
  onSelect: (index: number) => void;
}) {
  return (
    <div className='space-y-2 mt-6'>
      {christmasTracks.map((track, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className='w-full text-left p-3 rounded-lg border hover:bg-green-50 transition'
        >
          🎵 <strong>{track.title}</strong> — {track.artist}
        </button>
      ))}
    </div>
  );
}
