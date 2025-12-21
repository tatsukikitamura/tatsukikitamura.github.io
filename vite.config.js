import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        projects: resolve(__dirname, 'pages/projects/index.html'),
        'project-mbti': resolve(__dirname, 'pages/projects/mbti-app.html'),
        'project-plateau': resolve(__dirname, 'pages/projects/plateau.html'),
        'project-atcoder': resolve(__dirname, 'pages/projects/atcoder.html'),
        experience: resolve(__dirname, 'pages/experience.html'),
        blog: resolve(__dirname, 'pages/blog.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      },
    },
  },
});
