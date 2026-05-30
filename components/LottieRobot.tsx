'use client';

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

export default function LottieRobot() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch('/lottie/robot.json')
      .then((r) => r.ok ? r.json() : null)
      .then((data) => data && setAnimationData(data))
      .catch(() => null);
  }, []);

  if (!animationData) return null;

  return (
    <div className="w-20 h-20 sm:w-28 sm:h-28 pointer-events-none select-none drop-shadow-lg">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
