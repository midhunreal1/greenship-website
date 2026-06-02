'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Section from '@/components/Section';
import { Service } from '@/types';

interface ServicesSectionProps {
  services: Service[];
  title?: string;
  subtitle?: string;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-2 border border-gray-100 hover:border-teal/40">
      {service.image && (
        <div className="relative h-44 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) calc(100vw - 5rem), (max-width: 1024px) 50vw, 25vw"
            quality={75}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
        </div>
      )}

      <div className="p-5 sm:p-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 -mt-9 relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #0077b6, #2d9e2d)' }}>
          <Icon name={service.icon} size={22} className="text-white" />
        </div>

        <h3 className="text-base sm:text-lg font-bold text-navy mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

        <Link
          href={`/services#${service.slug}`}
          className="inline-flex items-center gap-1.5 text-teal-dark font-semibold text-sm hover:gap-2.5 transition-all duration-200"
        >
          Learn More
          <Icon name="ArrowRight" size={15} />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection({
  services,
  title = 'Our Services',
  subtitle = 'Comprehensive maritime solutions to keep your fleet and business moving forward'
}: ServicesSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setIsSmallScreen(window.innerWidth < 1024), 150);
    };
    setIsSmallScreen(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => { window.removeEventListener('resize', handleResize); clearTimeout(timer); };
  }, []);

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));

  return (
    <Section background="white">
      <div className="text-center mb-10 sm:mb-12" data-reveal="">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-3 sm:mb-4">{title}</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      {isSmallScreen ? (
        <div className="relative">
          <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal hover:text-white transition-[background-color,color] duration-300" aria-label="Previous service">
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal hover:text-white transition-[background-color,color] duration-300" aria-label="Next service">
            <Icon name="ChevronRight" size={20} />
          </button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {services.map((service) => (
                <div key={service.id} className="w-full shrink-0 px-6">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className="flex items-center justify-center min-w-11 min-h-11" aria-label={`Go to service ${index + 1}`}>
                <span className={`block h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-teal w-6' : 'bg-gray-300 w-2'}`} />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {services.map((service, i) => (
            <div key={service.id} data-reveal="" data-delay={String(i * 75)}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
