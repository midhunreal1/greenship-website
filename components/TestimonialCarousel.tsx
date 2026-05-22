'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/Icon';
import Section from '@/components/Section';
import { Testimonial } from '@/types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  maxTestimonials?: number;
  defaultTestimonialsToShow?: number;
  responsive?: boolean;
  title?: string;
  subtitle?: string;
}

export default function TestimonialCarousel({
  testimonials,
  maxTestimonials = 6,
  defaultTestimonialsToShow = 3,
  responsive = false,
  title = 'Client Testimonials',
  subtitle = 'Hear from our satisfied maritime clients'
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsToShow, setTestimonialsToShow] = useState(defaultTestimonialsToShow);

  const displayed = testimonials.slice(0, maxTestimonials);

  useEffect(() => {
    if (!responsive) return;
    const handleResize = () => {
      if (window.innerWidth < 768) setTestimonialsToShow(1);
      else if (window.innerWidth < 1024) setTestimonialsToShow(2);
      else setTestimonialsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [responsive]);

  const handlePrev = () => setCurrentIndex((prev) => prev === 0 ? Math.max(0, displayed.length - testimonialsToShow) : prev - 1);
  const handleNext = () => setCurrentIndex((prev) => prev >= displayed.length - testimonialsToShow ? 0 : prev + 1);

  return (
    <Section background="grey">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">{title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      <div className="relative">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-teal hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-800"
          aria-label="Previous"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= displayed.length - testimonialsToShow}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-teal hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-800"
          aria-label="Next"
        >
          <Icon name="ChevronRight" size={24} />
        </button>

        <div className="overflow-x-hidden py-8">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / testimonialsToShow}%)` }}
          >
            {displayed.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 shrink-0"
                style={{ width: `calc((100% - ${(testimonialsToShow - 1) * 2}rem) / ${testimonialsToShow})` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{testimonial.message}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-teal to-ocean rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(displayed.length / testimonialsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * testimonialsToShow)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / testimonialsToShow) === index ? 'bg-teal w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
