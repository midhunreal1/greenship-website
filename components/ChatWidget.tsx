'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, X, ArrowLeft, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const LottieRobot = dynamic(() => import('./LottieRobot'), { ssr: false });

type Option = {
  label: string;
  next?: string;
  href?: string;
  external?: boolean;
};

type Step = {
  message: string;
  options?: Option[];
  cta?: { label: string; href: string };
};

const flow: Record<string, Step> = {
  welcome: {
    message: "Hi! 👋 How can we help you today?",
    options: [
      { label: 'Our Services', next: 'services' },
      { label: 'Get a Quote', next: 'quote' },
      { label: 'Contact Us', next: 'contact' },
      { label: 'About GST', next: 'about' },
    ],
  },
  services: {
    message: 'Which service are you interested in?',
    options: [
      { label: 'Marine Software Services', href: '/services/marine-software-services' },
      { label: 'Ship Design & Engineering', href: '/services/ship-design-engineering' },
      { label: 'Survey & Certification', href: '/services/survey-certification' },
      { label: 'Renewable Energy & Oil Gas', href: '/services/renewable-energy-oil-gas' },
      { label: 'Ship Broking & Chartering', href: '/services/ship-broking-chartering' },
      { label: 'Flag Registration Services', href: '/services/flag-registration-services' },
    ],
  },
  quote: {
    message: "We'd love to help! Fill in our contact form and our team will get back to you shortly.",
    cta: { label: 'Open Contact Form →', href: '/contact' },
  },
  contact: {
    message: 'Choose how to reach us:',
    options: [
      { label: '✉️  Email Us', href: 'mailto:contact@greenshiptech.com', external: true },
      { label: '📞 Call Us', href: 'tel:+912249700617', external: true },
      { label: '💬 WhatsApp', href: 'https://wa.me/918828192100', external: true },
      { label: '📍 Visit Office', href: '/contact', external: false },
    ],
  },
  about: {
    message: 'Green Ship Technologies has been serving the maritime industry since 2009 — 200+ clients, 500+ projects across India, Middle East, Far East, and Europe.',
    cta: { label: 'Learn More About Us →', href: '/about' },
  },
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [stepKey, setStepKey] = useState('welcome');
  const [history, setHistory] = useState<string[]>([]);

  const step = flow[stepKey];

  const goTo = (next: string) => {
    setHistory((h) => [...h, stepKey]);
    setStepKey(next);
  };

  const goBack = () => {
    const prev = history[history.length - 1];
    if (prev) {
      setHistory((h) => h.slice(0, -1));
      setStepKey(prev);
    }
  };

  const reset = () => {
    setStepKey('welcome');
    setHistory([]);
  };

  const close = () => {
    setOpen(false);
    reset();
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
      {/* Popup */}
      {open && (
        <div className="w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-[#0a1e3c] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                <MessageCircle size={15} className="text-teal" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">GST Support</p>
                <p className="text-white/50 text-xs">Typically replies instantly</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {history.length > 0 && (
                <button
                  onClick={goBack}
                  aria-label="Go back"
                  className="p-1.5 text-white/50 hover:text-white transition-colors rounded"
                >
                  <ArrowLeft size={15} />
                </button>
              )}
              <button
                onClick={close}
                aria-label="Close chat"
                className="p-1.5 text-white/50 hover:text-white transition-colors rounded"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="bg-gray-50 rounded-xl px-3 py-2.5 mb-3">
              <p className="text-sm text-gray-700 leading-relaxed">{step.message}</p>
            </div>

            {step.options && (
              <div className="space-y-1.5">
                {step.options.map((opt) =>
                  opt.href ? (
                    <a
                      key={opt.label}
                      href={opt.href}
                      target={opt.external ? '_blank' : undefined}
                      rel={opt.external ? 'noopener noreferrer' : undefined}
                      onClick={opt.external ? undefined : close}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm text-navy font-medium rounded-lg border border-gray-200 hover:border-teal/40 hover:bg-teal/5 transition-all"
                    >
                      <span>{opt.label}</span>
                      <ChevronRight size={13} className="text-gray-400 shrink-0" />
                    </a>
                  ) : (
                    <button
                      key={opt.label}
                      onClick={() => opt.next && goTo(opt.next)}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm text-navy font-medium rounded-lg border border-gray-200 hover:border-teal/40 hover:bg-teal/5 transition-all text-left"
                    >
                      <span>{opt.label}</span>
                      <ChevronRight size={13} className="text-gray-400 shrink-0" />
                    </button>
                  )
                )}
              </div>
            )}

            {step.cta && (
              <Link
                href={step.cta.href}
                onClick={close}
                className="mt-3 flex items-center justify-center gap-2 w-full text-sm font-semibold text-white bg-linear-to-r from-teal to-teal-dark px-4 py-2.5 rounded-lg hover:shadow-md transition-all"
              >
                {step.cta.label}
              </Link>
            )}

            {history.length > 0 && (
              <button
                onClick={reset}
                className="mt-2 w-full text-xs text-gray-400 hover:text-gray-600 transition-colors text-center py-1"
              >
                ↩ Back to start
              </button>
            )}
          </div>
        </div>
      )}

      {/* Trigger button + robot overlay */}
      <div className="relative">
        {/* Pulse rings — only when closed */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-teal/40 animate-ping" />
            <span className="absolute inset-0 rounded-full bg-teal/20 animate-ping [animation-delay:0.4s]" />
          </>
        )}
        <button
          onClick={() => setOpen((p) => !p)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-teal to-teal-dark shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center"
          style={{ boxShadow: '0 0 0 3px #ffffff, 0 8px 24px rgba(0,180,160,0.4)' }}
        >
          {open
            ? <X size={20} className="text-white sm:hidden" />
            : <MessageCircle size={20} className="text-white sm:hidden" />
          }
          {open
            ? <X size={24} className="text-white hidden sm:block" />
            : <MessageCircle size={24} className="text-white hidden sm:block" />
          }
        </button>

        {/* Robot overlapping behind button at top-right */}
        {!open && (
          <div className="absolute -top-8 -left-14 w-16 h-16 sm:-top-12 sm:-right-12 sm:w-24 sm:h-24 pointer-events-none z-0">
            <LottieRobot />
          </div>
        )}
      </div>
    </div>
  );
}
