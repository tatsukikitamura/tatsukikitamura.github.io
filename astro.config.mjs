import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Keep in sync with src/i18n/config.ts.
const DEFAULT_LOCALE = 'ja';
const LOCALES = ['ja', 'en', 'zh', 'ko'];

export default defineConfig({
  site: 'https://tatsuki.dev',
  trailingSlash: 'never',
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: {
          ja: 'ja',
          en: 'en',
          zh: 'zh-CN',
          ko: 'ko',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
