'use client';

import { useState } from 'react';
import { FaWhatsapp, FaLinkedin, FaYoutube, FaPlus } from 'react-icons/fa';
import { socialMedia } from '@/data/company';

const WHATSAPP_NUMBER = '918828192100';

const socialIconMap: Record<string, { Icon: React.ComponentType<{ size?: number }>; bg: string }> = {
  linkedin: { Icon: FaLinkedin, bg: '#0A66C2' },
  youtube:  { Icon: FaYoutube,  bg: '#FF0000' },
};

export default function SocialFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-2 sm:gap-3">
      <div className={`flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 origin-bottom ${
        open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
      }`}>
        {socialMedia.map((social, i) => {
          const config = socialIconMap[social.icon];
          if (!config) return null;
          const { Icon, bg } = config;
          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              title={social.platform}
              style={{ background: bg, transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              className="group relative w-8 h-8 sm:w-11 sm:h-11 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-200"
            >
              <span className="text-[14px] sm:text-[19px] leading-none"><Icon /></span>
              <span className="absolute right-12 sm:right-14 bg-navy text-white text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none shadow">
                {social.platform}
              </span>
            </a>
          );
        })}
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close social links' : 'Show social links'}
        className="w-7 h-7 sm:w-10 sm:h-10 rounded-full shadow-lg flex items-center justify-center text-white bg-navy hover:bg-navy-dark transition-all duration-300"
        style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
      >
        <span className="text-[12px] sm:text-[16px] leading-none"><FaPlus /></span>
      </button>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white bg-[#25D366] hover:scale-110 transition-all duration-200"
        style={{ boxShadow: '0 0 0 4px #ffffff, 0 8px 24px rgba(0,0,0,0.25)' }}
      >
        <span className="text-[20px] sm:text-[28px] leading-none"><FaWhatsapp /></span>
      </a>
    </div>
  );
}
