"use client";

import { useRef, useState } from "react";
import { christmasTracks } from "@/lib/christmasTracks";
import MusicVisualizer from "./MusicVisualizer";
import TrackList from "./TrackList";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
    if (audioRef.current) audioRef.current.pause();
  };

  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg text-center'>
      <h2 className='text-2xl font-bold text-green-700 mb-2'>
        🎧 Christmas Lofi Player
      </h2>

      <p className='text-gray-600'>{christmasTracks[currentTrack].title}</p>

      <audio ref={audioRef} src={christmasTracks[currentTrack].src} />

      <button
        onClick={togglePlay}
        className='mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition'
      >
        {isPlaying ? "Pause ⏸️" : "Play ▶️"}
      </button>

      <MusicVisualizer isPlaying={isPlaying} />
      <TrackList onSelect={selectTrack} />
    </div>
  );
}
