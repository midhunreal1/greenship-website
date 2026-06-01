'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const CSS = `
[data-reveal]{opacity:0;transform:translateY(22px);transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1)}
[data-reveal][data-delay="50"]{transition-delay:50ms}
[data-reveal][data-delay="75"]{transition-delay:75ms}
[data-reveal][data-delay="100"]{transition-delay:100ms}
[data-reveal][data-delay="150"]{transition-delay:150ms}
[data-reveal][data-delay="200"]{transition-delay:200ms}
[data-reveal][data-delay="225"]{transition-delay:225ms}
[data-reveal][data-delay="250"]{transition-delay:250ms}
[data-reveal][data-delay="300"]{transition-delay:300ms}
[data-reveal][data-delay="350"]{transition-delay:350ms}
[data-reveal][data-delay="375"]{transition-delay:375ms}
[data-reveal][data-delay="400"]{transition-delay:400ms}
[data-reveal].revealed{opacity:1;transform:none}
`;

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (!document.getElementById('scroll-reveal-css')) {
      const s = document.createElement('style');
      s.id = 'scroll-reveal-css';
      s.textContent = CSS;
      document.head.appendChild(s);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add('revealed');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
