import './style.css';
import { createHeader, initHeaderEvents } from './components/header.js';
import { getFooterHTML } from './components/footer.js';

function createStartPage() {
  const container = document.createElement('div');
  container.className = 'hero-bg grid-pattern min-h-screen relative overflow-hidden';
  
  // ヘッダーを追加
  container.appendChild(createHeader());
  
  const content = document.createElement('div');
  content.innerHTML = `
    <!-- Decorative Orbs (position: fixed でスクロール時の再描画を防止) -->
    <div class="orb w-96 h-96 bg-indigo-500 animate-float" style="position: fixed; top: -10%; left: -10%;"></div>
    <div class="orb w-80 h-80 bg-purple-500 animate-float-delayed" style="position: fixed; bottom: 10%; right: -5%;"></div>
    <div class="orb w-64 h-64 bg-blue-500 animate-float" style="position: fixed; top: 60%; left: 10%; animation-delay: -2s;"></div>
    
    <!-- Typing Intro Section (最初に表示) -->
    <section id="typing-intro" class="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div class="text-center">
        <div class="inline-block rounded-2xl px-4 py-3 md:px-6 md:py-4 text-left">
          <div class="font-mono text-xs md:text-lg lg:text-2xl" id="typing-container">
            <span class="text-indigo-500 cursor-blink">|</span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Main Content (タイピング完了後に表示) -->
    <div id="main-content" class="hidden">
      <!-- Hero Section -->
      <main class="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div class="max-w-4xl mx-auto text-center">
          
          <!-- Main Heading -->
          <h1 class="opacity-0 animate-on-show">
            <span class="block text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-700 mt-10 mb-10">
              👋 Hello, Bonjour, こんにちは,<br><br> 안녕하세요, 你好, 你好
            </span>
          </h1>
          
          <!-- Tagline -->
          <p class="opacity-0 animate-on-show mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            <span class="gradient-text font-semibold">I'm a Software Engineer</span>
          </p>
          
       
    
          <!-- CTA Buttons -->
          <div class="opacity-0 animate-on-show mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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
          <a href="/pages/projects/mbti-app.html" class="rounded-3xl p-8 card-hover group block border border-black">
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
          
          <!-- OpenData App -->
          <a href="/pages/projects/opendata.html" class="rounded-3xl p-8 card-hover group block border border-black">
            <div class="text-4xl mb-6">🚃</div>
            <h3 class="text-xl font-bold text-zinc-600 mb-3">ノー遅延乗り換え</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-6">
              未来の遅延リスクを予測するルート検索アプリ。公共交通オープンデータチャレンジ2025出品。
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="text-xs px-3 py-1 bg-blue-500/20 text-blue-500 rounded-full">Python</span>
              <span class="text-xs px-3 py-1 bg-green-500/20 text-green-500 rounded-full">FastAPI</span>
              <span class="text-xs px-3 py-1 bg-sky-500/20 text-sky-500 rounded-full">Vite</span>
            </div>
            <div class="text-sm text-indigo-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              詳しく見る
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </a>
          
          <!-- AtCoder -->
          <a href="/pages/projects/atcoder.html" class="rounded-3xl p-8 card-hover group block md:col-span-2 lg:col-span-1 border border-black">
            <div class="text-4xl mb-6">⚡</div>
            <h3 class="text-xl font-bold text-zinc-600 mb-3">Competitive Programming</h3>
            <p class="text-zinc-400 text-sm leading-relaxed mb-6">
              AtCoder Algorithm(茶色)・Heuristic(緑色)。1年半継続中。
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="text-xs px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full">Algorithm 茶色</span>
              <span class="text-xs px-3 py-1 bg-green-500/20 text-green-500 rounded-full">Heuristic 緑色</span>
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
    
      ${getFooterHTML()}
    </div>
  `;
  
  container.appendChild(content);
  
  return container;
}

// タイピングエフェクト用のコード行
const codeLines = [
  { text: '定義 ', color: 'text-purple-500' },
  { text: 'Software.Developer()', color: 'text-blue-500' },
  { text: ' = ', color: 'text-zinc-700' },
  { text: '{', color: 'text-zinc-500' },
  { text: '\n\n' },
  { text: '  できること: ', color: 'text-zinc-700' },
  { text: '["Ruby on Rails", "Python", "JavaScript"]', color: 'text-green-500' },
  { text: ',', color: 'text-zinc-500' },
  { text: '\n\n' },
  { text: '  好きなこと: ', color: 'text-zinc-700' },
  { text: '"Creating with code"', color: 'text-amber-500' },
  { text: ',', color: 'text-zinc-500' },
  { text: '\n\n' },
  { text: '  場所: ', color: 'text-zinc-700' },
  { text: '"Japan"', color: 'text-red-500' },
  { text: ',', color: 'text-zinc-500' },
  { text: '\n\n' },
  { text: '}', color: 'text-zinc-700' },
  { text: '\n\n' },
  { text: 'TatsukiKitamura = new ', color: 'text-zinc-700' },
  { text: 'Software.Developer()', color: 'text-blue-500' },
];

function showMainContent() {
  const typingIntro = document.getElementById('typing-intro');
  const mainContent = document.getElementById('main-content');
  
  // タイピングセクションをフェードアウト
  typingIntro.style.transition = 'opacity 0.5s ease-out';
  typingIntro.style.opacity = '0';
  
  setTimeout(() => {
    // タイピングセクションを非表示にする
    typingIntro.style.display = 'none';
    
    // メインコンテンツを表示
    mainContent.classList.remove('hidden');
    
    // 子要素のアニメーションを順番にトリガー
    const animatedElements = mainContent.querySelectorAll('.animate-on-show');
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in-up');
        el.style.opacity = '1';
      }, index * 100);
    });
  }, 500);
}

function typeCode() {
  const container = document.getElementById('typing-container');
  if (!container) return;
  
  let lineIndex = 0;
  let charIndex = 0;
  let currentSpan = null;
  
  function type() {
    if (lineIndex >= codeLines.length) {
      // タイピング完了時、少し待ってからメインコンテンツを表示
      setTimeout(showMainContent, 800);
      return;
    }
    
    const line = codeLines[lineIndex];
    const text = line.text;
    
    // 新しいspanを作成（色がある場合）
    if (charIndex === 0) {
      // 既存のカーソルを削除
      const cursor = container.querySelector('.cursor-blink');
      if (cursor) cursor.remove();
      
      currentSpan = document.createElement('span');
      if (line.color) {
        currentSpan.className = line.color;
      }
      container.appendChild(currentSpan);
    }
    
    // 1文字追加
    if (charIndex < text.length) {
      const char = text[charIndex];
      if (char === '\n') {
        container.appendChild(document.createElement('br'));
      } else {
        currentSpan.textContent += char;
      }
      charIndex++;
      
      // カーソルを追加
      const existingCursor = container.querySelector('.cursor-blink');
      if (existingCursor) existingCursor.remove();
      const cursor = document.createElement('span');
      cursor.className = 'text-indigo-500 cursor-blink';
      cursor.textContent = '|';
      container.appendChild(cursor);
      
      // 次の文字へ（ランダムな遅延でよりリアルに）
      const delay = char === '\n' ? 100 : Math.random() * 50 + 30;
      setTimeout(type, delay);
    } else {
      // 次の行へ
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 50);
    }
  }
  
  // 少し遅延してからタイピング開始
  setTimeout(type, 800);
}

function init() {
  const app = document.getElementById('app');
  app.appendChild(createStartPage());
  initHeaderEvents();
  typeCode();
}

document.addEventListener('DOMContentLoaded', init);
