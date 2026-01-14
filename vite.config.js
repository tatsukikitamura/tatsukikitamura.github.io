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
        contact: resolve(__dirname, 'pages/contact.html'),
        'blog-sample': resolve(__dirname, 'pages/blogs/sample-blog.html'),
        'blog-microservices': resolve(__dirname, 'pages/blogs/microservices-blog.html'),
        'blog-learning': resolve(__dirname, 'pages/blogs/learning-blog.html'),
        'blog-atcoder': resolve(__dirname, 'pages/blogs/atcoder-blog.html'),
      },
    },
  },
});
