'use client';

import { useRef, useState } from 'react';

const VIDEOS = ['/video1.mp4', '/video2.mp4'];

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  const handleEnded = () => {
    const next = (index + 1) % VIDEOS.length;
    setIndex(next);
    if (videoRef.current) {
      videoRef.current.src = VIDEOS[next];
      videoRef.current.play();
    }
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-130">
      <video
        ref={videoRef}
        key={VIDEOS[index]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={VIDEOS[index]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent rounded-3xl pointer-events-none" />
    </div>
  );
}
