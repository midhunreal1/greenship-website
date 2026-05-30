'use client';

import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';

const clientLogos = [
  '1.png', '2-1.png', '3-1.png', '4-1.png', '5-1.png', '6-1.png',
  '7.png', '8.png', '9.png', '10.png', '11.png', '12.png',
  '13.png', '14.png', '15.png', '16.png', '17.png', '18.png',
  '19.png', '20.png', '73.png', '22.png', '23.png', '24.png',
  '25.png', '26.png', '27.png', '28.png', '29.png', '30.png',
  '31.png', '32.png', '33.png', '34.png', '35.png', '36.png',
];

/* Duplicate array for seamless infinite loop */
const doubled = [...clientLogos, ...clientLogos];

export default function ClientLogoCarousel() {
  return (
    <section className="bg-light-grey py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy">Client Portfolio</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Trusted by 200+ maritime companies across the globe
        </p>
      </div>

      {/* Marquee container */}
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-linear-to-r from-light-grey to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-linear-to-l from-light-grey to-transparent" />

        <div
          className="marquee-track flex gap-5 w-max"
          style={{
            animation: 'marquee 40s linear infinite',
          }}
        >
          {doubled.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="w-36 h-24 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center p-3 shrink-0 hover:shadow-md transition-shadow"
            >
              <Image
                src={`/clients/${logo}`}
                alt={`Client ${i + 1}`}
                width={120}
                height={60}
                quality={85}
                loading="lazy"
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      {/* View More */}
      <div className="text-center mt-8">
        <Link
          href="/client-portfolio"
          className="inline-flex items-center gap-2 bg-linear-to-r from-teal to-teal-dark text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
        >
          View More
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
    </section>
  );
}
