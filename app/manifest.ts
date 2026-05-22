import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Green Ship Technologies',
    short_name: 'GST',
    description: 'Marine, Offshore & Industrial Services — Your Partner in Maritime Innovation',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0077b6',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/logo.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
