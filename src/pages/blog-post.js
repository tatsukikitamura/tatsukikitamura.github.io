import '../style.css';
import { marked } from 'marked';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

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

function createPostPage(slug) {
  const main = document.createElement('main');
  main.className = 'pt-24 pb-16 px-6';

  const entry = Object.entries(rawFiles).find(([path]) => path.endsWith(`/${slug}.md`));

  if (!entry) {
    main.innerHTML = `
      <div class="max-w-3xl mx-auto">
        <p class="text-gray-500">記事が見つかりませんでした。</p>
        <a href="/pages/blog.html" class="text-sm mt-4 inline-block" style="color: #0a66c2;">← ブログ一覧に戻る</a>
      </div>
    `;
    return main;
  }

  const { meta, content } = parseFrontmatter(entry[1]);
  const tags = Array.isArray(meta.tags) ? meta.tags : [];
  const bodyHTML = marked.parse(content);

  main.innerHTML = `
    <div class="max-w-3xl mx-auto">
      <a href="/pages/blog.html" class="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 animate-fade-in">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        ブログ一覧
      </a>

      <article class="animate-fade-in animation-delay-100">
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-4">
            <span class="px-2.5 py-0.5 bg-blue-50 text-[#0a66c2] rounded text-xs font-medium">${meta.category || ''}</span>
            <span class="text-xs text-gray-400">${meta.date || ''}</span>
          </div>
          <h1 class="text-3xl font-bold text-gray-900 mb-3">${meta.title || ''}</h1>
          <p class="text-gray-500 text-sm leading-relaxed">${meta.excerpt || ''}</p>
          <div class="flex flex-wrap gap-1.5 mt-4 pb-6 border-b border-gray-100">
            ${tags.map(tag => `<span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded">#${tag}</span>`).join('')}
          </div>
        </div>

        <div class="blog-content">
          ${bodyHTML}
        </div>
      </article>
    </div>
  `;

  return main;
}

function init() {
  const slug = new URLSearchParams(window.location.search).get('slug') || '';
  document.title = slug ? `${slug} - Tatsuki.dev` : 'Blog - Tatsuki.dev';

  const app = document.getElementById('app');
  app.appendChild(createHeader());
  app.appendChild(createPostPage(slug));
  app.appendChild(createFooter());
  initHeaderEvents();
}

document.addEventListener('DOMContentLoaded', init);
