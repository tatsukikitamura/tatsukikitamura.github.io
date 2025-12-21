import './style.css';
import { createHeader, initHeaderEvents } from './components/header.js';

function createStartPage() {
  const container = document.createElement('div');
  container.className = 'hero-bg grid-pattern min-h-screen relative overflow-hidden';
  
  // ヘッダーを追加
  container.appendChild(createHeader());
  
  const content = document.createElement('div');
  content.innerHTML = `
    <!-- Decorative Orbs -->
    <div class="orb w-96 h-96 bg-indigo-500 top-[-10%] left-[-10%] animate-float"></div>
    <div class="orb w-80 h-80 bg-purple-500 bottom-[10%] right-[-5%] animate-float-delayed"></div>
    <div class="orb w-64 h-64 bg-blue-500 top-[60%] left-[10%] animate-float" style="animation-delay: -2s;"></div>
    
    <!-- Hero Section -->
    <main class="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div class="max-w-4xl mx-auto text-center">
        
        <!-- Status Badge -->

        
        <!-- Main Heading -->
        <h1 class="opacity-0 animate-fade-in-up animation-delay-100">
          <span class="block text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-400 mt-10 mb-10">
            Tatsuki Kitamura
          </span>
        </h1>
        
        <!-- Tagline -->
        <p class="opacity-0 animate-fade-in-up animation-delay-200 mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          <span class="gradient-text font-semibold">Software Engineer</span>
        </p>
        
        <!-- Code snippet -->
        <div class="opacity-0 animate-fade-in-up animation-delay-300 mt-10 inline-block glass rounded-2xl px-6 py-4 text-left">
          <div class="font-mono text-lg md:text-base">
            <span class="text-purple-400">const</span> <span class="text-blue-300">software developer</span> <span class="text-white">=</span> <span class="text-zinc-400">{</span><br>
            <span class="text-zinc-500 ml-4">stack:</span> <span class="text-green-300">["Rails", "Python", "JavaScript"]</span><span class="text-zinc-400">,</span><br>
            <span class="text-zinc-500 ml-4">passion:</span> <span class="text-amber-300">"Creating with code"</span><br>
            <span class="text-zinc-500 ml-4">location:</span> <span class="text-blue-300">"Japan"</span><br>
            <span class="text-zinc-400">}</span><span class="text-indigo-400 cursor-blink">|</span>
          </div>
        </div>
        
        
        
        <!-- CTA Buttons -->
        <div class="opacity-0 animate-fade-in-up animation-delay-400 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/pages/projects/" class="btn-primary px-8 py-4 rounded-full text-white font-medium flex items-center gap-2 group">
            <span>View Projects</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
          <a href="/pages/about.html" class="btn-secondary px-8 py-4 rounded-full text-zinc-600 font-medium">
            About Me
          </a>
        </div>
      </div>
    </main>
    <!-- Featured Section Preview -->
    <section class="relative z-10 py-4 px-6">
      <div class="max-w-6xl mx-auto">
        
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-zinc-600 mb-4">Featured Work</h2>
          <p class="text-zinc-400">アイデアを形にしたプロジェクト</p>
        </div>
        
        <!-- Project Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- MBTI App -->
          <a href="/pages/projects/mbti-app.html" class="glass rounded-3xl p-8 card-hover group block">
            <div class="text-4xl mb-6">🧠</div>
            <h3 class="text-xl font-bold text-zinc-600 mb-3">MBTI × 生成AI</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-6">
              物語形式のMBTI診断。生成AIで無意識の価値観を引き出す体験型アプリ。
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="text-xs px-3 py-1 bg-red-500/20 text-red-500 rounded-full">Rails</span>
              <span class="text-xs px-3 py-1 bg-green-500/20 text-green-500 rounded-full">OpenAI</span>
              <span class="text-xs px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full">Redis</span>
            </div>
            <div class="text-sm text-indigo-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              詳しく見る
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </a>
          
          <!-- PLATEAU Map -->
          <a href="/pages/projects/plateau.html" class="glass rounded-3xl p-8 card-hover group block">
            <div class="text-4xl mb-6">🗺️</div>
            <h3 class="text-xl font-bold text-zinc-600 mb-3">ちば観光マップ</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-6">
              PLATEAU 3D都市モデルとAIチャットを連携した観光案内システム。
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="text-xs px-3 py-1 bg-red-500/20 text-red-500 rounded-full">Rails</span>
              <span class="text-xs px-3 py-1 bg-green-500/20 text-green-500 rounded-full">FastAPI</span>
              <span class="text-xs px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full">CesiumJS</span>
            </div>
            <div class="text-sm text-indigo-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              詳しく見る
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </a>
          
          <!-- AtCoder -->
          <a href="/pages/projects/atcoder.html" class="glass rounded-3xl p-8 card-hover group block md:col-span-2 lg:col-span-1">
            <div class="text-4xl mb-6">⚡</div>
            <h3 class="text-xl font-bold text-zinc-600 mb-3">Competitive Programming</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-6">
              AtCoder Algorithm・Heuristic 両部門で茶色ランク。1年半継続中。
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="text-xs px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full">🏆 茶色</span>
              <span class="text-xs px-3 py-1 bg-zinc-500/20 text-zinc-500 rounded-full">Python</span>
              <span class="text-xs px-3 py-1 bg-zinc-500/20 text-zinc-500 rounded-full">C++</span>
            </div>
            <div class="text-sm text-indigo-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              詳しく見る
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </a>
          
        </div>
        
        <!-- View All Button -->
        <div class="text-center mt-12">
          <a href="/pages/projects/" class="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium">
            すべてのプロジェクトを見る
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
        
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="relative z-10 border-t border-white/10 py-12 px-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-zinc-500 text-sm">© 2025 Tatsuki Kitamura. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-white transition-colors text-sm">
            GitHub
          </a>
          <a href="https://atcoder.jp/users/oreccchi" target="_blank" rel="noopener noreferrer" class="text-zinc-500 hover:text-white transition-colors text-sm">
            AtCoder
          </a>
          <a href="/pages/contact.html" class="text-zinc-500 hover:text-white transition-colors text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  `;
  
  container.appendChild(content);
  
  return container;
}

function init() {
  const app = document.getElementById('app');
  app.appendChild(createStartPage());
  initHeaderEvents();
}

document.addEventListener('DOMContentLoaded', init);
