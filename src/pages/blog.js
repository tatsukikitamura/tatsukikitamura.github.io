import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

// ブログ記事一覧データ
const blogPosts = [
  {
    id: 'sample-blog',
    title: 'Ruby on Railsでの生成AI連携の実装方法',
    date: '2025年12月15日',
    category: '技術',
    tags: ['Ruby on Rails', 'OpenAI API', 'AI'],
    excerpt: 'MBTIアプリ開発で学んだ、RailsアプリケーションにOpenAI APIを統合する実践的な方法をまとめました。',
    link: '/pages/blogs/sample-blog.html'
  },
  {
    id: 'atcoder-blog',
    title: 'AtCoderで茶色になるまでにやったこと',
    date: '2025年12月10日',
    category: '競技プログラミング',
    tags: ['AtCoder', 'Python', 'アルゴリズム'],
    excerpt: '未経験から約1年半でAtCoder Algorithm・Heuristic両部門で茶色ランクに到達するまでの学習方法を振り返ります。',
    link: '/pages/blogs/atcoder-blog.html'
  },
  {
    id: 'microservices-blog',
    title: 'FastAPIとRailsのマイクロサービス構成',
    date: '2025年12月5日',
    category: '技術',
    tags: ['FastAPI', 'Ruby on Rails', 'アーキテクチャ'],
    excerpt: 'PLATEAUアプリ開発で採用した、RailsとFastAPIを組み合わせたマイクロサービス構成の設計思想と実装について。',
    link: '/pages/blogs/microservices-blog.html'
  },
  {
    id: 'learning-blog',
    title: '未経験から1年半でWeb開発を学んだ方法',
    date: '2025年12月1日',
    category: '学習',
    tags: ['学習方法', '独学', 'Web開発'],
    excerpt: '数学科の学生が独学でWeb開発を学び、個人開発までできるようになった学習ロードマップを公開します。',
    link: '/pages/blogs/learning-blog.html'
  }
];

function createBlogPage() {
  const main = document.createElement('main');
  main.className = 'pt-20 pb-8 px-4 max-w-4xl mx-auto';
  
  const blogCards = blogPosts.map((post, index) => `
    <article class="bg-white rounded-3xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all opacity-0 animate-fade-in-up" style="animation-delay: ${(index + 1) * 100}ms">
      <a href="${post.link}" class="block">
        <div class="flex items-start justify-between gap-4 mb-4">
          <span class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">${post.category}</span>
          <span class="text-sm text-gray-500">${post.date}</span>
        </div>
        <h2 class="text-xl font-bold tracking-tight mb-3 hover:text-indigo-600 transition-colors">${post.title}</h2>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">${post.excerpt}</p>
        <div class="flex flex-wrap gap-2">
          ${post.tags.map(tag => `
            <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">#${tag}</span>
          `).join('')}
        </div>
      </a>
    </article>
  `).join('');
  
  main.innerHTML = `
    <!-- Page Header -->
    <div class="mb-12 opacity-0 animate-fade-in-up mt-16">
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Blog</h1>
      <p class="text-gray-500 mt-2">技術記事・学習記録</p>
    </div>
    
    <!-- Blog Posts List -->
    <div class="space-y-6">
      ${blogCards}
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




