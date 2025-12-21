import '../../style.css';
import { createHeader, initHeaderEvents } from '../../components/header.js';
import { createFooter } from '../../components/footer.js';

/**
 * ブログ記事ページを作成する共通関数
 * @param {Object} post - ブログ記事データ
 * @returns {HTMLElement} main要素
 */
export function createBlogPostPage(post) {
  const main = document.createElement('main');
  main.className = 'pt-20 pb-8 px-4 max-w-4xl mx-auto';
  
  main.innerHTML = `
    <!-- Back Link -->
    <div class="mb-6 opacity-0 animate-fade-in-up mt-16">
      <a href="/pages/blog.html" class="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        ブログ一覧に戻る
      </a>
    </div>
    
    <!-- Article Header -->
    <article class="bg-white rounded-3xl border border-gray-200 p-8 md:p-12 opacity-0 animate-fade-in-up animation-delay-100">
      <div class="mb-6">
        <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <span class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">${post.category}</span>
          <span>${post.date}</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">${post.title}</h1>
        <p class="text-gray-600 text-lg">${post.excerpt}</p>
      </div>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200">
        ${post.tags.map(tag => `
          <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">#${tag}</span>
        `).join('')}
      </div>
      
      <!-- Article Content -->
      <div class="prose prose-lg max-w-none blog-content">
        ${post.content}
      </div>
    </article>
    
    <!-- Related Posts (将来の拡張用) -->
    <div class="mt-12 opacity-0 animate-fade-in-up animation-delay-200">
      <h2 class="text-xl font-bold tracking-tight mb-6">関連記事</h2>
      <p class="text-gray-500 text-sm">準備中...</p>
    </div>
  `;
  
  return main;
}

/**
 * ブログ記事ページを初期化する共通関数
 * @param {Object} post - ブログ記事データ
 */
export function initBlogPost(post) {
  const app = document.getElementById('app');
  
  app.appendChild(createHeader());
  app.appendChild(createBlogPostPage(post));
  app.appendChild(createFooter());
  
  initHeaderEvents();
}

