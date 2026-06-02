'use client';

import dynamic from 'next/dynamic';

const SocialFloat = dynamic(() => import('./SocialFloat'), { ssr: false });

export default function ClientWidgets() {
  return <SocialFloat />;
}
