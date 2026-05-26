'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Icon from '@/components/Icon';
import { services } from '@/data/services';
import type { Service, ServiceSubItem } from '@/types/service-subitem';

function DesktopNavLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
  return (
    <Link
      href={href}
      className={`font-medium text-sm whitespace-nowrap transition-colors duration-200 text-navy hover:text-teal ${
        isActive ? 'text-teal-dark border-b-2 border-teal' : ''
      }`}
    >
      {label}
    </Link>
  );
}

/* ── Main Navbar ── */

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<Service>(services[0]);
  const [hoveredSubItem, setHoveredSubItem] = useState<ServiceSubItem | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const isServicesActive = pathname.startsWith('/services');

  /* ── Preview panel data ── */
  const previewTitle = hoveredSubItem?.title ?? hoveredService.title;
  const previewDescription = hoveredSubItem?.description ?? hoveredService.description;
  const previewImage = hoveredService.image;
  const previewHref = hoveredSubItem
    ? `/services/${hoveredService.slug}/${hoveredSubItem.slug}`
    : `/services/${hoveredService.slug}`;

  /* ── Services mega dropdown ── */
  const servicesDropdown = (
    <div
      className="absolute top-full left-0 right-0 mt-2 mx-4 lg:mx-6 rounded-xl bg-white border border-gray-100 shadow-2xl z-50"
      onMouseEnter={openServices}
      onMouseLeave={closeServices}
    >
      <div className="px-6 lg:px-8 py-5">
        <div className="flex gap-8">

          {/* Left – 2-col service list */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">
              Our Services
            </p>
            <div className="grid grid-cols-2 gap-x-6">
              {/* Column 1: services 0–2 */}
              <div className="space-y-2 ">
                {services.slice(0, 3).map((service) => (
                  <div key={service.id} className='p-2 shadow-sm shadow-gray-400 rounded-lg'>
                    <Link
                      href={`/services/${service.slug}`}
                      onMouseEnter={() => { setHoveredService(service); setHoveredSubItem(null); }}
                      onClick={() => setServicesOpen(false)}
                      className={`flex items-center gap-2 py-1.5 px-2 rounded-lg group transition-colors ${
                        hoveredService.id === service.id && !hoveredSubItem
                          ? 'bg-teal/5'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-all duration-150 ${
                        hoveredService.id === service.id && !hoveredSubItem
                          ? 'bg-teal text-white'
                          : 'bg-navy text-white group-hover:bg-teal'
                      }`}>
                        <Icon name={service.icon} size={12} className="text-white" />
                      </div>
                      <span className={`font-semibold text-sm transition-colors duration-150 ${
                        hoveredService.id === service.id && !hoveredSubItem
                          ? 'text-teal-dark'
                          : 'text-navy group-hover:text-teal-dark'
                      }`}>
                        {service.title}
                      </span>
                    </Link>
                    {service.subItems && (
                      <ul className="ml-8 mt-0.5 space-y-0.5">
                        {service.subItems.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={sub.href ?? `/services/${service.slug}/${sub.slug}`}
                              onMouseEnter={() => { setHoveredService(service); setHoveredSubItem(sub); }}
                              onClick={() => setServicesOpen(false)}
                              className={`block text-xs py-0.5 px-1.5 rounded transition-colors ${
                                hoveredSubItem?.slug === sub.slug && hoveredService.id === service.id
                                  ? 'text-teal-dark bg-teal/5 font-medium'
                                  : ' hover:text-teal-dark hover:bg-teal/5'
                              }`}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              {/* Column 2: services 3–5 */}
              <div className="space-y-2">
                {services.slice(3).map((service) => (
                  <div key={service.id} className="p-2 shadow-sm shadow-gray-400 rounded-lg">
                    <Link
                      href={`/services/${service.slug}`}
                      onMouseEnter={() => { setHoveredService(service); setHoveredSubItem(null); }}
                      onClick={() => setServicesOpen(false)}
                      className={`flex items-center gap-2 py-1.5 px-2 rounded-lg group transition-colors ${
                        hoveredService.id === service.id && !hoveredSubItem
                          ? 'bg-teal/5'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-all duration-150 ${
                        hoveredService.id === service.id && !hoveredSubItem
                          ? 'bg-teal text-white'
                          : 'bg-navy text-white group-hover:bg-teal'
                      }`}>
                        <Icon name={service.icon} size={12} className="text-white" />
                      </div>
                      <span className={`font-semibold text-sm transition-colors duration-150 ${
                        hoveredService.id === service.id && !hoveredSubItem
                          ? 'text-teal-dark'
                          : 'text-navy group-hover:text-teal-dark'
                      }`}>
                        {service.title}
                      </span>
                    </Link>
                    {service.subItems && (
                      <ul className="ml-8 mt-0.5 space-y-0.5">
                        {service.subItems.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={sub.href ?? `/services/${service.slug}/${sub.slug}`}
                              onMouseEnter={() => { setHoveredService(service); setHoveredSubItem(sub); }}
                              onClick={() => setServicesOpen(false)}
                              className={`block text-xs py-0.5 px-1.5 rounded transition-colors ${
                                hoveredSubItem?.slug === sub.slug && hoveredService.id === service.id
                                  ? 'text-teal-dark bg-teal/5 font-medium'
                                  : ' hover:text-teal-dark hover:bg-teal/5'
                              }`}
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <Link
                href="/services"
                onClick={() => setServicesOpen(false)}
                className="text-sm font-semibold text-teal-dark hover:underline"
              >
                View all services →
              </Link>
            </div>
          </div>

          {/* Right – hovered item preview */}
          <div className="w-64 shrink-0 border-l border-gray-100 pl-6">
            {previewImage && (
              <div className="relative h-44 rounded-xl overflow-hidden mb-4">
                <Image
                  src={previewImage}
                  alt={previewTitle}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/70 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-white font-bold text-sm leading-snug">
                  {previewTitle}
                </span>
              </div>
            )}
            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4">
              {previewDescription}
            </p>
            <Link
              href={previewHref}
              onClick={() => setServicesOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-linear-to-r from-teal to-teal-dark px-4 py-2 rounded-lg hover:shadow-md transition-all"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  /* ── Desktop nav links ── */
  const desktopLinks = (compact: boolean) => (
    <div className="hidden min-[1114px]:flex items-center gap-6">
      <DesktopNavLink href="/" label="Home" pathname={pathname} />
      <DesktopNavLink href="/about" label="About Us" pathname={pathname} />

      {/* Services button */}
      <button
        onMouseEnter={openServices}
        onMouseLeave={closeServices}
        className={`flex items-center gap-1 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
          isServicesActive ? 'text-teal-dark border-b-2 border-teal' : 'text-navy hover:text-teal'
        }`}
        aria-haspopup="true"
        aria-expanded={servicesOpen}
      >
        Services
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <DesktopNavLink href="/client-portfolio" label="Client Portfolio" pathname={pathname} />
      <DesktopNavLink href="/blog" label="Blog" pathname={pathname} />
      <DesktopNavLink href="/contact" label="Contact Us" pathname={pathname} />
      <LanguageSwitcher />
      <Link
        href="/contact"
        className={`bg-linear-to-r from-teal to-teal-dark text-white rounded-md hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold text-sm whitespace-nowrap ${compact ? 'px-5 py-2' : 'px-6 py-2'}`}
      >
        Get In Touch
      </Link>
    </div>
  );

  /* ── Mobile accordion ── */
  const mobileMenuContent = (
    <div className="flex flex-col space-y-1">
      {[{ href: '/', label: 'Home' }, { href: '/about', label: 'About Us' }].map((link) => {
        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
        return (
          <Link key={link.href} href={link.href}
            className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all text-gray-900 hover:bg-teal/5 ${isActive ? 'border-l-4 border-teal bg-teal/5' : ''}`}
            onClick={closeMenu}>
            {link.label}
          </Link>
        );
      })}

      {/* Services accordion */}
      <button
        onClick={() => setMobileServicesOpen((p) => !p)}
        className={`w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors text-gray-900 hover:bg-teal/5 ${
          isServicesActive ? 'border-l-4 border-teal bg-teal/5' : ''
        }`}
      >
        Services
        <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {mobileServicesOpen && (
        <div className="ml-3 border-l-2 border-teal/20 pl-3 space-y-1">
          <Link href="/services" onClick={() => { closeMenu(); setMobileServicesOpen(false); }}
            className="block py-2 px-2 text-sm text-teal-dark font-semibold hover:bg-teal/5 rounded-lg">
            All Services
          </Link>
          {services.map((s) => (
            <div key={s.id}>
              <Link href={`/services/${s.slug}`} onClick={() => { closeMenu(); setMobileServicesOpen(false); }}
                className="flex items-center gap-2 py-2 px-2 text-sm text-navy hover:text-teal hover:bg-teal/5 rounded-lg font-medium">
                <Icon name={s.icon} size={14} className="text-teal-dark" />
                {s.title}
              </Link>
              {s.subItems && (
                <ul className="ml-7 mt-0.5 space-y-0.5">
                  {s.subItems.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        href={sub.href ?? `/services/${s.slug}/${sub.slug}`}
                        onClick={() => { closeMenu(); setMobileServicesOpen(false); }}
                        className="block py-1 px-2 text-xs  hover:text-teal-dark hover:bg-teal/5 rounded"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {[
        { href: '/client-portfolio', label: 'Client Portfolio' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact Us' },
      ].map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link key={link.href} href={link.href}
            className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all text-gray-900 hover:bg-teal/5 ${isActive ? 'border-l-4 border-teal bg-teal/5' : ''}`}
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

  const hamburgerIcon = (
    <button onClick={() => setIsMenuOpen((p) => !p)} className="text-navy p-2" aria-label="Toggle menu">
      <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
      </svg>
    </button>
  );

  return (
    <>
      {/* ── Sticky navbar (slides in after scroll) ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="relative max-w-8xl mx-auto bg-white/95 backdrop-blur-md shadow-lg border border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Green Ship Technologies" width={35} height={35} priority className="object-contain" />
              <span className="text-lg font-bold text-navy">Green Ship Technologies</span>
            </Link>
            {desktopLinks(true)}
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

        {/* Services dropdown — sticky nav */}
        {servicesOpen && isScrolled && servicesDropdown}
      </nav>

      {/* ── Original top navbar ── */}
      <nav className="relative top-0 z-40 px-2 bg-[#0a1e3c] pt-4">
        <div className="relative max-w-8xl mx-auto bg-white/95 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.svg" alt="Green Ship Technologies" width={45} height={45} priority className="object-contain" />
              <span className="text-lg font-bold text-navy">Green Ship Technologies</span>
            </Link>
            {desktopLinks(false)}
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

        {/* Services dropdown — original nav */}
        {servicesOpen && !isScrolled && servicesDropdown}
      </nav>
    </>
  );
}
