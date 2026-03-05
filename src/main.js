import './style.css';
import { createHeader, initHeaderEvents } from './components/header.js';
import { getFooterHTML } from './components/footer.js';

const GITHUB_SVG = `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;

function createStartPage() {
  const container = document.createElement('div');
  container.className = 'min-h-screen bg-white';

  container.appendChild(createHeader());

  const content = document.createElement('div');
  content.innerHTML = `
    <!-- Hero Section -->
    <section class="pt-32 pb-16 px-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
          Tatsuki Kitamura
        </h1>
        <div class="text-lg font-medium mb-5 h-7 animate-fade-in animation-delay-100" style="color: #0a66c2;">
          <span id="typing-container"></span>
        </div>
        <p class="text-gray-500 text-sm mb-8 animate-fade-in animation-delay-200">
          早稲田大学 数学科 &nbsp;·&nbsp; Tokyo, Japan
        </p>
        <div class="flex flex-wrap items-center gap-3 animate-fade-in animation-delay-300">
          <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-500 text-sm font-medium transition-colors">
            ${GITHUB_SVG}
            GitHub
          </a>
          <a href="/pages/experience.html"
            class="px-5 py-2 rounded-lg text-white text-sm font-medium transition-colors"
            style="background: #0a66c2;" onmouseover="this.style.background='#004182'" onmouseout="this.style.background='#0a66c2'">
            Experience
          </a>
          <a href="/pages/projects/"
            class="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-500 text-sm font-medium transition-colors">
            Projects
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Work -->
    <section class="py-14 px-6 bg-gray-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-xl font-bold text-gray-900 mb-2">Featured Work</h2>
        <p class="text-gray-500 text-sm mb-8">アイデアを形にしたプロジェクト</p>

        <div class="grid md:grid-cols-3 gap-4">

          <!-- MBTI App -->
          <a href="/pages/projects/mbti-app.html" class="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-[#0a66c2] transition-colors text-sm">MBTI × 生成AI</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-4">
              物語形式のMBTI診断。生成AIで無意識の価値観を引き出す体験型アプリ。
            </p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-xs px-2 py-0.5 bg-red-50 text-red-600 rounded font-medium">Rails</span>
              <span class="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded font-medium">OpenAI</span>
              <span class="text-xs px-2 py-0.5 bg-purple-50 text-purple-600 rounded font-medium">Redis</span>
            </div>
            <span class="text-xs font-medium" style="color: #0a66c2;">詳しく見る →</span>
          </a>

          <!-- OpenData App -->
          <a href="/pages/projects/opendata.html" class="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-[#0a66c2] transition-colors text-sm">ノー遅延乗り換え</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-4">
              未来の遅延リスクを予測するルート検索アプリ。公共交通オープンデータチャレンジ2025出品。
            </p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded font-medium">Python</span>
              <span class="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded font-medium">FastAPI</span>
              <span class="text-xs px-2 py-0.5 bg-sky-50 text-sky-600 rounded font-medium">Vite</span>
            </div>
            <span class="text-xs font-medium" style="color: #0a66c2;">詳しく見る →</span>
          </a>

          <!-- AtCoder -->
          <a href="/pages/projects/atcoder.html" class="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group">
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-[#0a66c2] transition-colors text-sm">Competitive Programming</h3>
            <p class="text-gray-500 text-xs leading-relaxed mb-4">
              AtCoder Algorithm（茶色）・Heuristic（緑色）。1年半継続中。
            </p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 rounded font-medium">Algorithm 茶</span>
              <span class="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded font-medium">Heuristic 緑</span>
              <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">Python / C++</span>
            </div>
            <span class="text-xs font-medium" style="color: #0a66c2;">詳しく見る →</span>
          </a>

        </div>

        <div class="mt-6">
          <a href="/pages/projects/"
            class="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            style="color: #0a66c2;">
            すべてのプロジェクトを見る
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>

    ${getFooterHTML()}
  `;

  container.appendChild(content);
  return container;
}

const TYPING_TEXT = 'Software Engineer';

function typeIntro() {
  const container = document.getElementById('typing-container');
  if (!container) return;

  let i = 0;
  function type() {
    if (i < TYPING_TEXT.length) {
      container.textContent = TYPING_TEXT.slice(0, i + 1);
      i++;
      setTimeout(type, 80);
    } else {
      const cursor = document.createElement('span');
      cursor.className = 'cursor-blink';
      cursor.textContent = '|';
      container.appendChild(cursor);
    }
  }

  setTimeout(type, 700);
}

function init() {
  const app = document.getElementById('app');
  app.appendChild(createStartPage());
  initHeaderEvents();
  typeIntro();
}

document.addEventListener('DOMContentLoaded', init);
