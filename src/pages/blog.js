import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

// src/content/blogs/*.md を全て読み込む（_template.md は除外）
const rawFiles = import.meta.glob('../content/blogs/*.md', { query: '?raw', import: 'default', eager: true });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const meta = {};
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    meta[key] = key === 'tags' ? value.split(',').map(t => t.trim()) : value;
  });

  return { meta, content: match[2] };
}

const posts = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const slug = path.split('/').pop().replace('.md', '');
    const { meta } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title || 'Untitled',
      date: meta.date || '',
      category: meta.category || '',
      tags: Array.isArray(meta.tags) ? meta.tags : [],
      excerpt: meta.excerpt || '',
    };
  })
  .filter(p => !p.slug.startsWith('_'))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

function createBlogPage() {
  const main = document.createElement('main');
  main.className = 'pt-24 pb-16 px-6';

  const postsHTML = posts.length === 0
    ? `<p class="text-gray-400 text-sm">まだ記事がありません。</p>`
    : posts.map((post, i) => `
        <article class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow animate-fade-in" style="animation-delay: ${i * 80}ms">
          <a href="/pages/blog-post.html?slug=${post.slug}" class="block group">
            <div class="flex items-center justify-between gap-4 mb-3">
              <span class="px-2.5 py-0.5 bg-blue-50 text-[#0a66c2] rounded text-xs font-medium">${post.category}</span>
              <span class="text-xs text-gray-400">${post.date}</span>
            </div>
            <h2 class="font-semibold text-gray-900 mb-2 group-hover:text-[#0a66c2] transition-colors">${post.title}</h2>
            <p class="text-gray-500 text-sm leading-relaxed mb-3">${post.excerpt}</p>
            <div class="flex flex-wrap gap-1.5">
              ${post.tags.map(tag => `<span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded">#${tag}</span>`).join('')}
            </div>
          </a>
        </article>
      `).join('');

  main.innerHTML = `
    <div class="max-w-3xl mx-auto">
      <div class="mb-10 animate-fade-in">
        <h1 class="text-3xl font-bold text-gray-900">Blog</h1>
        <p class="text-gray-500 mt-1 text-sm">技術記事・学習記録</p>
      </div>
      <div class="space-y-4">
        ${postsHTML}
      </div>
    </div>
  `;

  return main;
}

function init() {
  const app = document.getElementById('app');
  app.appendChild(createHeader());
  app.appendChild(createBlogPage());
  app.appendChild(createFooter());
  initHeaderEvents();
}

document.addEventListener('DOMContentLoaded', init);
