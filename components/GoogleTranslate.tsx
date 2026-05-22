'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { LANG_KEY } from '@/lib/translate';

function enforceStoredLanguage(): () => void {
  const saved = localStorage.getItem(LANG_KEY) ?? 'en';
  if (saved === 'en') return () => {};

  const target = saved;
  let attempts = 0;
  const id = setInterval(() => {
    const el = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (!el) {
      if (++attempts >= 30) clearInterval(id);
      return;
    }
    if (el.value === target) { clearInterval(id); return; }
    el.value = target;
    if (el.value !== target) return;
    el.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
    clearInterval(id);
  }, 100);

  return () => clearInterval(id);
}

export default function GoogleTranslate() {
  const pathname = usePathname();

  useEffect(() => {
    const cancel = enforceStoredLanguage();
    return cancel;
  }, [pathname]);

  return (
    <div
      id="google_translate_element"
      aria-hidden="true"
      style={{ position: 'absolute', top: '-9999px', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
    />
  );
}
