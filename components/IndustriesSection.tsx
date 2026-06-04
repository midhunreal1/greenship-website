'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon';
import Section from '@/components/Section';
import { Industry } from '@/types';

interface IndustriesSectionProps {
  industries: Industry[];
  title?: string;
  subtitle?: string;
}

function IndustryCard({ industry, priority = false }: { industry: Industry; priority?: boolean }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
      {industry.image && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            sizes="(max-width: 768px) calc(100vw - 5rem), (max-width: 1024px) 50vw, 25vw"
            quality={75}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal to-ocean" />
        </div>
      )}

      <div className="p-5">
        <div className="w-12 h-12 bg-white border-2 border-medium-grey shadow-md rounded-xl flex items-center justify-center mb-3 -mt-9 relative z-10">
          <Icon name={industry.icon} size={22} className="text-teal" />
        </div>
        <h3 className="text-base font-bold text-navy mb-2">{industry.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
      </div>
    </div>
  );
}

export default function IndustriesSection({
  industries,
  title = 'Industries We Serve',
  subtitle = 'Delivering tailored maritime solutions across diverse sectors'
}: IndustriesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setIsSmallScreen(window.innerWidth < 1024), 150);
    };
    timer = setTimeout(() => setIsSmallScreen(window.innerWidth < 1024), 0);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => { window.removeEventListener('resize', handleResize); clearTimeout(timer); };
  }, []);

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === industries.length - 1 ? 0 : prev + 1));

  return (
    <Section background="grey">
      <div className="text-center mb-10 sm:mb-12" data-reveal="">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 sm:mb-4">{title}</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      {isSmallScreen ? (
        <div className="relative">
          <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal hover:text-white transition-[background-color,color] duration-300" aria-label="Previous">
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal hover:text-white transition-[background-color,color] duration-300" aria-label="Next">
            <Icon name="ChevronRight" size={20} />
          </button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {industries.map((industry) => (
                <div key={industry.id} className="w-full shrink-0 px-6">
                  <IndustryCard industry={industry} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {industries.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className="flex items-center justify-center min-w-11 min-h-11" aria-label={`Go to industry ${index + 1}`}>
                <span className={`block h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-teal w-6' : 'bg-gray-300 w-2'}`} />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {industries.map((industry, i) => (
            <div key={industry.id} data-reveal="" data-delay={String(i * 75)}>
              <IndustryCard industry={industry} />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
