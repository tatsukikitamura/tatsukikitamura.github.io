import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

function createProjectPage() {
  const main = document.createElement('main');
  main.className = 'pt-20 pb-8 px-4 max-w-4xl mx-auto';
  
  main.innerHTML = `
    <!-- Back Link -->
    <a href="/pages/projects/" class="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8 opacity-0 animate-fade-in-up">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      <span>Projects</span>
    </a>
    
    <!-- Project Header -->
    <div class="mb-12 opacity-0 animate-fade-in-up">
      <div class="flex items-start gap-4">
        <div class="text-5xl">�</div>
        <div>
          <div class="flex items-center gap-3">
            <h1 class="text-3xl md:text-4xl font-bold tracking-tight">ノー遅延乗り換え</h1>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">公共交通オープンデータチャレンジ2025</span>
          </div>
          <p class="text-gray-500 mt-2">2025年10月〜現在（個人開発）</p>
        </div>
      </div>
    </div>
    
    <!-- Overview -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
      <h2 class="text-xl font-bold tracking-tight mb-4">概要</h2>
      <p class="text-gray-600 leading-relaxed mb-4">
        「今の時間は平常通りです」...その言葉を信じて遅刻したことはありませんか？
      </p>
      <p class="text-gray-600 leading-relaxed">
        既存の乗換案内は「現在」の遅延しか教えてくれません。本アプリは、<strong>未来の遅延リスクを予測</strong>し、「絶対に遅刻できない人」を安全に目的地まで送り届けるルート検索アプリです。
        数ヶ月分のリアルタイム運行データを蓄積・解析し、統計的リスクを可視化します。
      </p>
    </section>
    
    <!-- Tech Stack -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
      <h2 class="text-xl font-bold tracking-tight mb-4">使用技術</h2>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">Python 3.12</span>
        <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">FastAPI</span>
        <span class="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm">PostgreSQL</span>
        <span class="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">OpenAI API</span>
        <span class="px-3 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-sm">Vite + Vanilla JS</span>
        <span class="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm">Tailwind CSS v4</span>
        <span class="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm">GitHub Actions</span>
      </div>
    </section>
    
    <!-- Features -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
      <h2 class="text-xl font-bold tracking-tight mb-4">主な機能・技術的工夫</h2>
      <div class="space-y-6 text-gray-600">
        
        <div class="bg-gray-50 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-3">1. 独自グラフ探索エンジン（フルスクラッチ実装）</h3>
          <p class="text-sm mb-3">既存APIに頼らず、Dijkstra法を応用した経路探索エンジンを独自に実装。</p>
          <ul class="list-disc list-inside text-sm space-y-1 ml-2">
            <li><strong>可変トランスファーバッファ</strong>: 乗り換え時間を動的に変化させ、リスク許容度に応じたルートを提示</li>
            <li><strong>ペナルティ法による迂回路探索</strong>: 主要ルートにペナルティを与え、物理的に異なる代替ルートを強制的に導出</li>
          </ul>
        </div>

        <div class="bg-gray-50 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-3">2. 未来の遅延リスク予測</h3>
          <p class="text-sm mb-3">ODPT API等から収集した数ヶ月分の運行データを蓄積・解析。</p>
          <ul class="list-disc list-inside text-sm space-y-1 ml-2">
            <li>「金曜日18時台のXX線は遅延確率が30%高い」といった傾向を統計的に導出</li>
            <li>現在正常運行でも、将来のリスクが高い場合は警告を表示</li>
          </ul>
        </div>
        
        <div class="bg-gray-50 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-3">3. AIコンシェルジュ</h3>
          <p class="text-sm">
            GPT-4o-miniを統合し、数値データだけでは伝わらない定性的なアドバイス（例：「イベント終了後の混雑回避」）を提供。
          </p>
        </div>

      </div>
    </section>
    
    <!-- Links -->
    <section class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-4">リンク</h2>
      <div class="flex flex-wrap gap-4">
        <a href="https://opendata.tatsuki.dev" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          デモサイト
        </a>
        <a href="https://challenge2025.odpt.org/" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          コンテスト
        </a>
      </div>
    </section>
  `;
  
  return main;
}

function init() {
  const app = document.getElementById('app');
  
  app.appendChild(createHeader());
  app.appendChild(createProjectPage());
  app.appendChild(createFooter());
  
  initHeaderEvents();
}

document.addEventListener('DOMContentLoaded', init);

