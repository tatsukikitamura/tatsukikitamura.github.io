import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tatsuki.dev',
  trailingSlash: 'never',
  // GitHub Pages が /about/index.html を /about/ へ 301 するため、
  // about.html 形式で出力して canonical (末尾スラッシュなし) と一致させる
  build: { format: 'file' },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
