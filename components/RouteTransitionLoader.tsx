'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function RouteTransitionLoader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [, startTransition] = useTransition();
  const prevPathRef = useRef(pathname);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTransitionRef = useRef(startTransition);
  startTransitionRef.current = startTransition;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/')) return;
      if (anchor.hasAttribute('download')) return;
      const targetPath = href.split('?')[0].split('#')[0];
      if (targetPath === pathname) return;
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      startTransitionRef.current(() => setIsVisible(true));
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  useEffect(() => {
    if (pathname === prevPathRef.current) return;
    prevPathRef.current = pathname;
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
      hideTimerRef.current = null;
    }, 400);
  }, [pathname]);

  useEffect(() => {
    return () => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      style={{ willChange: 'opacity, transform', transform: 'translateZ(0)' }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-white"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={80}
        height={80}
        priority
        className="animate-spin object-contain"
      />
    </div>
  );
}
