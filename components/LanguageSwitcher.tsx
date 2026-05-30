'use client';

import { useState, useEffect, useRef } from 'react';
import { LANGUAGES, LANG_KEY, setGoogTransCookie } from '@/lib/translate';

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState('en');
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(LANG_KEY) ?? 'en';
    setCurrent(saved);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const select = (code: string) => {
    setCurrent(code);
    localStorage.setItem(LANG_KEY, code);
    setGoogTransCookie(code);
    setOpen(false);
    window.location.reload();
  };

  const active = LANGUAGES.find(l => l.code === current) ?? LANGUAGES[0];

  return (
    <div ref={containerRef} className="relative notranslate" translate="no">
      <button
        onClick={() => setOpen(p => !p)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-teal text-navy text-sm font-medium transition-all duration-200 hover:bg-teal/5"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://flagcdn.com/20x15/${active.country}.png`} width={20} height={15} alt={active.name} loading="lazy" className="rounded-sm flex-shrink-0" />
        <span className="hidden sm:inline">{active.code.split('-')[0].toUpperCase()}</span>
        <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        role="listbox"
        className={`absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-gray-200 shadow-xl z-[9999] overflow-hidden transition-all duration-200 origin-top-right ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {LANGUAGES.map((lang, i) => (
          <button
            key={lang.code}
            role="option"
            aria-selected={current === lang.code}
            onClick={() => select(lang.code)}
            style={{ transitionDelay: open ? `${i * 25}ms` : '0ms' }}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150 ${
              current === lang.code ? 'bg-teal/10 text-teal-dark font-semibold' : 'text-navy hover:bg-teal/5'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://flagcdn.com/20x15/${lang.country}.png`} width={20} height={15} alt={lang.name} loading="lazy" className="rounded-sm flex-shrink-0" />
            <span>{lang.name}</span>
            {current === lang.code && (
              <svg className="ml-auto w-3.5 h-3.5 text-teal flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
