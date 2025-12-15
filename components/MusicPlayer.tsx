"use client";

import { useRef, useState, useEffect } from "react";
import { christmasTracks } from "@/lib/christmasTracks";
import MusicVisualizer from "./MusicVisualizer";
import TrackList from "./TrackList";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.7);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    try {
      setIsLoading(true);
      setError(null);
      
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      setError("Failed to play audio. Please try again.");
      console.error("Audio playback error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(false);
    setError(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); // Reset the audio element
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      
      const handleLoadStart = () => setIsLoading(true);
      const handleCanPlay = () => setIsLoading(false);
      const handleError = () => {
        setIsLoading(false);
        setError("Failed to load audio track.");
      };
      
      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      
      return () => {
        audio.removeEventListener('loadstart', handleLoadStart);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
      };
    }
  }, [volume]);

  return (
    <div className='max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg text-center'>
      <h2 className='text-2xl font-bold text-green-700 mb-2'>
        🎧 Christmas Music Player
      </h2>

      <p className='text-gray-600 mb-2'>{christmasTracks[currentTrack].title}</p>
      <p className='text-sm text-gray-500 mb-4'>{christmasTracks[currentTrack].artist}</p>

      {error && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4'>
          {error}
        </div>
      )}

      <audio 
        ref={audioRef} 
        src={christmasTracks[currentTrack].src}
        preload="metadata"
      />

      <button
        onClick={togglePlay}
        disabled={isLoading}
        className={`mt-4 px-6 py-2 rounded-full transition ${
          isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-red-500 hover:bg-red-600 text-white'
        }`}
      >
        {isLoading ? "Loading..." : isPlaying ? "Pause ⏸️" : "Play ▶️"}
      </button>

      <div className='mt-4 flex items-center justify-center gap-2'>
        <span className='text-sm text-gray-500'>🔊</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20"
        />
        <span className='text-sm text-gray-500'>🔊</span>
      </div>

      <MusicVisualizer isPlaying={isPlaying} />
      <TrackList onSelect={selectTrack} />
    </div>
  );
}
