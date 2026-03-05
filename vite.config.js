import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/', // GitHub Pages用（username.github.io形式なのでルート）
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        projects: resolve(__dirname, 'pages/projects/index.html'),
        'project-mbti': resolve(__dirname, 'pages/projects/mbti-app.html'),
        'project-opendata': resolve(__dirname, 'pages/projects/opendata.html'),
        'project-atcoder': resolve(__dirname, 'pages/projects/atcoder.html'),
        experience: resolve(__dirname, 'pages/experience.html'),
        blog: resolve(__dirname, 'pages/blog.html'),
        'blog-post': resolve(__dirname, 'pages/blog-post.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      },
    },
  },
});
