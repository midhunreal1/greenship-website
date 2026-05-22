'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

const VIDEOS = ['/video1.mp4', '/video2.mp4'];
const COVER = '/cover.png';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);
  const [showCover, setShowCover] = useState(true);
  const [playing, setPlaying] = useState(false);

  const handleEnded = () => {
    const next = (index + 1) % VIDEOS.length;
    setIndex(next);
    if (videoRef.current) {
      videoRef.current.src = VIDEOS[next];
      videoRef.current.play();
    }
  };

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  /* Hide cover once video has buffered enough to display */
  const handleCanPlay = () => setShowCover(false);

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-130">
      {/* Video */}
      <video
        ref={videoRef}
        key={VIDEOS[index]}
        muted
        playsInline
        autoPlay
        onEnded={handleEnded}
        onCanPlay={handleCanPlay}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={VIDEOS[index]} type="video/mp4" />
      </video>

      {/* Cover image + play button — fades out once video is ready */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          showCover ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Image
          src={COVER}
          alt="Maritime operations"
          fill
          priority
          quality={90}
          className="object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-navy/40 rounded-3xl" />

        {/* Play button */}
        {!playing && (
          <button
            onClick={handlePlay}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 border-2 border-white/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-2xl">
              {/* Triangle play icon */}
              <svg
                className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent rounded-3xl pointer-events-none" />
    </div>
  );
}
