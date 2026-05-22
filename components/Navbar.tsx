'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { services } from '@/data/services';

/* ── All sub-components live at module scope (never inside render) ── */

function DesktopNavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={`font-medium text-sm whitespace-nowrap transition-opacity duration-200 text-gray-900 dark:text-white hover:opacity-70 ${
        isActive ? 'border-b-2 border-teal' : ''
      }`}
    >
      {label}
    </Link>
  );
}

function ServicesDropdown({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = pathname.startsWith('/services');

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className={`flex items-center gap-1 font-medium text-sm whitespace-nowrap transition-opacity duration-200 text-gray-900 dark:text-white hover:opacity-70 ${
          isActive ? 'border-b-2 border-teal' : ''
        }`}
      >
        Services
        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-xl border border-gray-100 shadow-2xl z-50 transition-all duration-200 origin-top-left ${
        open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="p-2">
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-teal-dark hover:bg-teal/5 border-b border-gray-100 mb-1 pb-3"
          >
            All Services →
          </Link>
          {services.map((s) => (
            <Link
              key={s.id}
              href={`/services/${s.slug}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-teal/5 group transition-colors"
            >
              <div className="w-7 h-7 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                <svg className="w-3.5 h-3.5 text-teal-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-sm text-navy group-hover:text-teal-dark transition-colors font-medium">{s.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileServicesAccordion({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname.startsWith('/services');

  return (
    <div>
      <button
        onClick={() => setOpen((p) => !p)}
        className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors text-gray-900 dark:text-white hover:bg-teal/5 ${
          isActive ? 'border-l-4 border-teal bg-teal/5' : ''
        }`}
      >
        Services
        <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="mt-1 ml-3 border-l-2 border-teal/20 pl-3 space-y-1">
          <Link href="/services" onClick={onClose}
            className="block py-2 px-2 text-sm text-teal-dark font-semibold hover:bg-teal/5 rounded-lg">
            All Services
          </Link>
          {services.map((s) => (
            <Link key={s.id} href={`/services/${s.slug}`} onClick={onClose}
              className="block py-2 px-2 text-sm text-navy hover:text-teal hover:bg-teal/5 rounded-lg">
              {s.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Navbar ── */

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const hamburgerIcon = (
    <button onClick={() => setIsMenuOpen((p) => !p)} className="text-navy p-2" aria-label="Toggle menu">
      <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
      </svg>
    </button>
  );

  const mobileLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
  ];
  const mobileLinksEnd = [
    { href: '/client-portfolio', label: 'Client Portfolio' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const mobileMenuContent = (
    <div className="flex flex-col space-y-1">
      {mobileLinks.map((link) => {
        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
        return (
          <Link key={link.href} href={link.href}
            className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all text-gray-900 dark:text-white hover:bg-teal/5 ${isActive ? 'border-l-4 border-teal bg-teal/5' : ''}`}
            onClick={closeMenu}>
            {link.label}
          </Link>
        );
      })}
      <MobileServicesAccordion onClose={closeMenu} />
      {mobileLinksEnd.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link key={link.href} href={link.href}
            className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all text-gray-900 dark:text-white hover:bg-teal/5 ${isActive ? 'border-l-4 border-teal bg-teal/5' : ''}`}
            onClick={closeMenu}>
            {link.label}
          </Link>
        );
      })}
      <Link href="/contact"
        className="mt-2 bg-linear-to-r from-teal to-teal-dark text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all text-center font-semibold text-sm"
        onClick={closeMenu}>
        Get In Touch
      </Link>
    </div>
  );

  return (
    <>
      {/* Sticky navbar — slides in after scroll */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="relative max-w-8xl mx-auto bg-white/95 backdrop-blur-md shadow-lg border border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Green Ship Technologies" width={35} height={35} priority className="object-contain" />
              <span className="text-lg font-bold text-navy">Green Ship <span className="text-teal-dark">Technologies</span></span>
            </Link>

            <div className="hidden min-[1114px]:flex items-center gap-6">
              <DesktopNavLink href="/" label="Home" pathname={pathname} />
              <DesktopNavLink href="/about" label="About Us" pathname={pathname} />
              <ServicesDropdown pathname={pathname} />
              <DesktopNavLink href="/client-portfolio" label="Client Portfolio" pathname={pathname} />
              <DesktopNavLink href="/blog" label="Blog" pathname={pathname} />
              <DesktopNavLink href="/contact" label="Contact Us" pathname={pathname} />
              <LanguageSwitcher />
              <Link href="/contact" className="bg-linear-to-r from-teal to-teal-dark text-white px-5 py-2 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold text-sm whitespace-nowrap">
                Get In Touch
              </Link>
            </div>

            <div className="min-[1114px]:hidden flex items-center gap-2">
              <LanguageSwitcher />
              {hamburgerIcon}
            </div>
          </div>

          {/* Sticky mobile dropdown */}
          <div className={`min-[1114px]:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg px-4 sm:px-6 py-4 z-50 transition-all duration-300 ease-out ${
            isMenuOpen && isScrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}>
            {mobileMenuContent}
          </div>
        </div>
      </nav>

      {/* Original top navbar */}
      <nav className="relative top-0 z-40 px-2 bg-[#0a1e3c] pt-4">
        <div className="relative max-w-8xl mx-auto bg-white/95 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.svg" alt="Green Ship Technologies" width={45} height={45} priority className="object-contain" />
              <span className="text-lg font-bold text-navy">Green Ship <span className="text-teal-dark">Technologies</span></span>
            </Link>

            <div className="hidden min-[1114px]:flex items-center gap-6">
              <DesktopNavLink href="/" label="Home" pathname={pathname} />
              <DesktopNavLink href="/about" label="About Us" pathname={pathname} />
              <ServicesDropdown pathname={pathname} />
              <DesktopNavLink href="/client-portfolio" label="Client Portfolio" pathname={pathname} />
              <DesktopNavLink href="/blog" label="Blog" pathname={pathname} />
              <DesktopNavLink href="/contact" label="Contact Us" pathname={pathname} />
              <LanguageSwitcher />
              <Link href="/contact" className="bg-linear-to-r from-teal to-teal-dark text-white px-6 py-2 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold whitespace-nowrap">
                Get In Touch
              </Link>
            </div>

            <div className="min-[1114px]:hidden flex items-center gap-2">
              <LanguageSwitcher />
              {hamburgerIcon}
            </div>
          </div>

          {/* Top mobile dropdown */}
          <div className={`min-[1114px]:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md rounded-b-2xl border border-t-0 border-gray-200 shadow-lg px-4 sm:px-6 py-4 z-50 transition-all duration-300 ease-out ${
            isMenuOpen && !isScrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}>
            {mobileMenuContent}
          </div>
        </div>
      </nav>
    </>
  );
}
