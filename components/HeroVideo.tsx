'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

const COVER = '/cover.png';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showCover, setShowCover] = useState(true);
  const [playing, setPlaying]   = useState(false); // play btn clicked
  const [loading, setLoading]   = useState(false); // waiting for buffer

  const handlePlay = () => {
    setPlaying(true);
    setLoading(true);
    videoRef.current?.play();
  };

  /* Browser has buffered enough — hide cover & loader */
  const handleCanPlay = () => {
    setLoading(false);
    setShowCover(false);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-130">
      {/* Video — only loads/plays when user clicks play */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="none"
        loop
        onCanPlay={handleCanPlay}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      {/* Cover image — fades out once video is ready */}
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
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-navy/40 rounded-3xl" />

        {/* Play button — shown before click */}
        {!playing && (
          <button
            onClick={handlePlay}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 border-2 border-white/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-2xl">
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}

        {/* Spinner — shown after click, while buffering */}
        {playing && loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              {/* Outer spinning ring */}
              <svg
                className="animate-spin w-full h-full text-white/30"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {/* Anchor icon centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a2 2 0 100 4 2 2 0 000-4zM12 7v10M7 21c0-2.761 2.239-5 5-5s5 2.239 5 5M3 12h4M17 12h4" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent rounded-3xl pointer-events-none" />
    </div>
  );
}
