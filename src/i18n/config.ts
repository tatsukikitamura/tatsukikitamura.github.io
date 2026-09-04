// Locale configuration shared by astro.config.mjs, layouts, components and pages.
//
// URL scheme (prefixDefaultLocale: false):
//   ja (default)  /about
//   en            /en/about
//   zh            /zh/about
//   ko            /ko/about

export const LOCALES = ['ja', 'en', 'zh', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ja';

export type LocaleMeta = {
  /** Native-language label shown in the language switcher. */
  label: string;
  /** Compact label for tight layouts. */
  short: string;
  /** Value for <html lang>. */
  htmlLang: string;
  /** Value for <link hreflang> and the sitemap. */
  hreflang: string;
  /** Value for og:locale. */
  ogLocale: string;
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  ja: { label: '日本語', short: 'JA', htmlLang: 'ja', hreflang: 'ja', ogLocale: 'ja_JP' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US' },
  zh: { label: '简体中文', short: '中文', htmlLang: 'zh-CN', hreflang: 'zh-CN', ogLocale: 'zh_CN' },
  ko: { label: '한국어', short: 'KO', htmlLang: 'ko', hreflang: 'ko', ogLocale: 'ko_KR' },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/**
 * `getStaticPaths()` body for every page under `src/pages/[...lang]/`.
 * The default locale maps to `undefined` so it is emitted at the site root.
 */
export function localePaths() {
  return LOCALES.map((lang) => ({
    params: { lang: lang === DEFAULT_LOCALE ? undefined : lang },
    props: { locale: lang },
  }));
}

/** Locale from the `[...lang]` route param (undefined → default locale). */
export function localeFromParam(lang: string | undefined): Locale {
  return isLocale(lang) ? lang : DEFAULT_LOCALE;
}

/**
 * Prefix a locale-less path with the locale segment.
 *   localizePath('/about', 'en') → '/en/about'
 *   localizePath('/', 'en')      → '/en'
 *   localizePath('/about', 'ja') → '/about'
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  if (locale === DEFAULT_LOCALE) return clean || '/';
  return `/${locale}${clean}`;
}

/**
 * Split a pathname into its locale and the locale-less path.
 *   stripLocale('/en/about') → { locale: 'en', path: '/about' }
 *   stripLocale('/about')    → { locale: 'ja', path: '/about' }
 *   stripLocale('/en')       → { locale: 'en', path: '/' }
 */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const match = pathname.match(/^\/([a-z]{2})(?=\/|$)/);
  if (match && isLocale(match[1]) && match[1] !== DEFAULT_LOCALE) {
    const rest = pathname.slice(match[0].length).replace(/\/$/, '');
    return { locale: match[1], path: rest || '/' };
  }
  const path = pathname.replace(/\/$/, '') || '/';
  return { locale: DEFAULT_LOCALE, path };
}

/** Resolve the locale for the current request from its URL. */
export function getLocale(astro: { url: URL }): Locale {
  return stripLocale(astro.url.pathname).locale;
}

/** Pick one locale's entry out of a `{ ja, en, zh, ko }` dictionary. */
export function pick<T>(dict: Record<Locale, T>, locale: Locale): T {
  return dict[locale];
}
