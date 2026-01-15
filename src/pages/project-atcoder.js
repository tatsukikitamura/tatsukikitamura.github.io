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
        <div class="text-5xl">⚡</div>
        <div>
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight">AtCoder</h1>
          <p class="text-gray-500 mt-2">2024年4月〜2025年11月（約1年半）</p>
        </div>
      </div>
    </div>
    
    <!-- Overview -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
      <h2 class="text-xl font-bold tracking-tight mb-4">概要</h2>
      <p class="text-gray-600 leading-relaxed">
        AtCoderは、プログラミングの問題を解くスピードと正確性を競うコンテスト。アルゴリズムやデータ構造の知識を活かして、制限時間内に問題を解く形式。約1年半にわたり継続的に取り組み、Algorithmで茶色、Heuristicで緑色ランクに到達。
      </p>
    </section>
    
    <!-- Results -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="bg-amber-50 rounded-3xl border border-amber-200 p-8 opacity-0 animate-fade-in-up animation-delay-200">
        <div class="text-center">
          <div class="text-4xl mb-2">🏆</div>
          <h3 class="font-bold text-lg text-amber-800">Algorithm部門</h3>
          <p class="text-amber-600 mt-2">茶色ランク到達</p>
        </div>
      </div>
      
      <div class="bg-green-50 rounded-3xl border border-green-200 p-8 opacity-0 animate-fade-in-up animation-delay-200">
        <div class="text-center">
          <div class="text-4xl mb-2">🏆</div>
          <h3 class="font-bold text-lg text-green-800">Heuristic部門</h3>
          <p class="text-green-600 mt-2">緑色ランク到達</p>
        </div>
      </div>
    </section>
    
    <!-- Tech Stack -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
      <h2 class="text-xl font-bold tracking-tight mb-4">使用言語</h2>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 18.062 0 29.674C7.473 86.746 12.545 93 21.026 93H32V79.952c0-9.629 8.333-18.127 18.33-18.127zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981c0 9.627-8.441 18.019-18.33 18.019H49.33c-8.099 0-14.33 6.968-14.33 15.176v27.798c0 7.912 6.879 12.564 14.555 14.854 9.2 2.746 18.023 3.242 29.074 0 7.349-2.163 14.371-6.521 14.371-14.854V96H63.83v-4h44.19c8.484 0 11.647-5.917 14.559-14.811 3.009-9.166 2.881-17.971 0-29.378zM79.97 105.11c3.026 0 5.479 2.479 5.479 5.545 0 3.079-2.453 5.581-5.479 5.581-3.015 0-5.479-2.502-5.479-5.581 0-3.066 2.465-5.545 5.479-5.545z"/>
          </svg>
          Python
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"/>
          </svg>
          C++
        </span>
      </div>
    </section>
    
    <!-- Approach -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-400">
      <h2 class="text-xl font-bold tracking-tight mb-4">取り組み方</h2>
      
      <div class="space-y-4 text-gray-600 text-sm">
        <ul class="space-y-2">
          <li>• 毎週開催されるコンテストに参加し、アルゴリズム問題に取り組む</li>
          <li>• Algorithm部門（アルゴリズムの正確性とスピードを競う）とHeuristic部門（試行錯誤で最適解を探す）の両方に挑戦</li>
          <li>• 当初は知らないアルゴリズムばかりで苦戦したが、継続的に学習を続けた</li>
        </ul>
      </div>
    </section>
    
    <!-- Key Points -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-4">工夫した点</h2>
      
      <div class="space-y-4 text-gray-600 text-sm">
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="text-lg">📚</span>
            <span>わからない部分はAIに質問したり、体系的な書籍（「競技プログラミングの鉄則」など）で学んだりして、効率的に知識を吸収</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-lg">🔄</span>
            <span>解けなかった問題は、解説を読んで理解した後に必ず自分で実装し直すことで、知識を定着</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-lg">🎯</span>
            <span>苦手な分野（グラフ、動的計画法など）を特定し、重点的に演習を積んだ</span>
          </li>
        </ul>
      </div>
    </section>
    
    <!-- Learnings -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-4">学び</h2>
      
      <div class="space-y-3 text-gray-600 text-sm">
        <p>• 「わからない」状態から、調べて・試して・理解するというサイクルを回し続けることで、着実に成長できることを実感</p>
        <p>• 問題を分解して考える力、効率的なアルゴリズムを選択する力が身についた</p>
        <p>• 制限時間内に正確なコードを書くプレッシャーの中で、冷静に思考を整理する力が鍛えられた</p>
      </div>
    </section>
    
    <!-- Links -->
    <section class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-4">リンク</h2>
      <div class="flex flex-wrap gap-4">
        <a href="https://atcoder.jp/users/oreccchi" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <span class="font-bold">A</span>
          AtCoder Profile
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

