export const LANG_KEY = 'greenship_lang';

export const LANGUAGES = [
  { code: 'en',    name: 'English',    country: 'us' },
  { code: 'hi',    name: 'Hindi',      country: 'in' },
  { code: 'ar',    name: 'Arabic',     country: 'ae' },
  { code: 'es',    name: 'Spanish',    country: 'es' },
  { code: 'fr',    name: 'French',     country: 'fr' },
  { code: 'de',    name: 'German',     country: 'de' },
  { code: 'ja',    name: 'Japanese',   country: 'jp' },
  { code: 'zh-CN', name: 'Chinese',    country: 'cn' },
  { code: 'pt',    name: 'Portuguese', country: 'br' },
] as const;

export type Language = typeof LANGUAGES[number];

export function setGoogTransCookie(code: string): void {
  if (typeof document === 'undefined') return;
  const host = window.location.hostname;
  const isLocal = host.includes('localhost') || host.includes('127.0.0.1');
  const expired = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';

  document.cookie = `googtrans=; ${expired}; path=/`;
  if (!isLocal) {
    document.cookie = `googtrans=; ${expired}; path=/; domain=${host}`;
    document.cookie = `googtrans=; ${expired}; path=/; domain=.${host}`;
  }

  const value = `/en/${code}`;
  document.cookie = `googtrans=${value}; path=/`;
  if (!isLocal) {
    document.cookie = `googtrans=${value}; path=/; domain=.${host}`;
  }
}
