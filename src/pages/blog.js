import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

function createBlogPage() {
  const main = document.createElement('main');
  main.className = 'pt-20 pb-8 px-4 max-w-4xl mx-auto';
  
  main.innerHTML = `
    <!-- Page Header -->
    <div class="mb-12 opacity-0 animate-fade-in-up">
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Blog</h1>
      <p class="text-gray-500 mt-2">技術記事・学習記録</p>
    </div>
    
    <!-- Coming Soon -->
    <div class="bg-white rounded-3xl border border-gray-200 p-12 text-center opacity-0 animate-fade-in-up animation-delay-100">
      <div class="text-6xl mb-6">📝</div>
      <h2 class="text-2xl font-bold tracking-tight mb-4">Coming Soon</h2>
      <p class="text-gray-600 max-w-md mx-auto">
        技術記事や学習記録を発信していく予定です。<br>
        もう少しお待ちください。
      </p>
    </div>
    
    <!-- Ideas -->
    <div class="mt-12 opacity-0 animate-fade-in-up animation-delay-200">
      <h2 class="text-xl font-bold tracking-tight mb-6">書く予定のトピック</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white rounded-2xl border border-gray-200 p-4">
          <span class="text-sm text-gray-500">#1</span>
          <p class="font-medium mt-1">Ruby on Railsでの生成AI連携の実装方法</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-200 p-4">
          <span class="text-sm text-gray-500">#2</span>
          <p class="font-medium mt-1">AtCoderで茶色になるまでにやったこと</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-200 p-4">
          <span class="text-sm text-gray-500">#3</span>
          <p class="font-medium mt-1">FastAPIとRailsのマイクロサービス構成</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-200 p-4">
          <span class="text-sm text-gray-500">#4</span>
          <p class="font-medium mt-1">未経験から1年半でWeb開発を学んだ方法</p>
        </div>
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



