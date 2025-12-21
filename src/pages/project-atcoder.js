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
        AtCoderは、プログラミングの問題を解くスピードと正確性を競うコンテスト。アルゴリズムやデータ構造の知識を活かして、制限時間内に問題を解く形式。約1年半にわたり継続的に取り組み、2部門で茶色ランクに到達。
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
      
      <div class="bg-amber-50 rounded-3xl border border-amber-200 p-8 opacity-0 animate-fade-in-up animation-delay-200">
        <div class="text-center">
          <div class="text-4xl mb-2">🏆</div>
          <h3 class="font-bold text-lg text-amber-800">Heuristic部門</h3>
          <p class="text-amber-600 mt-2">茶色ランク到達</p>
        </div>
      </div>
    </section>
    
    <!-- Tech Stack -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
      <h2 class="text-xl font-bold tracking-tight mb-4">使用言語</h2>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">Python</span>
        <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">C++</span>
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

