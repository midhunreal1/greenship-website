'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useTransition } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => startTransition(() => setTheme(isDark ? 'light' : 'dark'))}
      aria-label="Toggle light/dark theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '1.25rem',
        zIndex: 50,
        willChange: 'transform',
        width: '3rem',
        height: '3rem',
        borderRadius: '9999px',
        boxShadow: '0 0 0 4px #ffffff, 0 8px 24px rgba(0,0,0,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.2s',
        backgroundColor: isDark ? '#ffffff' : '#0a1e3c',
        color: isDark ? '#0a1e3c' : '#ffffff',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
