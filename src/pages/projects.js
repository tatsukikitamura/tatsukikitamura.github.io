import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

const projects = [
  {
    id: 'mbti-app',
    title: 'MBTI × 生成AI体験アプリ',
    description: 'MBTI診断と生成AIを組み合わせた体験型Webアプリ。物語形式の診断モードで、無意識の価値観を引き出す新しいアプローチを実装。',
    period: '2024年6月〜2024年8月（3ヵ月）',
    tags: ['Ruby on Rails', 'OpenAI API', 'Redis', 'Heroku'],
    icon: null,
    featured: true,
    link: '/pages/projects/mbti-app.html'
  },
  {
    id: 'opendata',
    title: 'ノー遅延乗り換え（Open Data Challenge 2025）',
    description: '未来の遅延リスクを予測し、「絶対に遅刻できない人」を安全に目的地まで送り届けるルート検索アプリ。公共交通オープンデータチャレンジ2025出品作品。',
    period: '2025年10月〜現在（個人開発）',
    tags: ['Python (FastAPI)', 'Vite + Vanilla JS', 'PostgreSQL', 'OpenAI API'],
    icon: null,
    featured: true,
    link: '/pages/projects/opendata.html'
  },
  {
    id: 'atcoder',
    title: 'AtCoder（競技プログラミング）',
    description: 'Algorithm・Heuristic両部門で茶色ランク到達。約1年半継続的に取り組み中。',
    period: '2024年4月〜2025年11月（約1年半）',
    tags: ['Python', 'C++', 'アルゴリズム'],
    icon: null,
    featured: false,
    link: '/pages/projects/atcoder.html'
  }
];

function createProjectsPage() {
  const main = document.createElement('main');
  main.className = 'pt-20 pb-8 px-4 max-w-4xl mx-auto';
  
  const projectCards = projects.map((project, index) => `
    <a href="${project.link}" class="bg-white rounded-3xl border border-gray-200 p-6 hover:border-gray-300 hover:bg-gray-50/50 transition-all opacity-0 animate-fade-in-up" style="animation-delay: ${(index + 1) * 100}ms">
      <div>
        <div class="flex-1">
          <h3 class="font-bold text-lg tracking-tight">${project.title}</h3>
          <p class="text-gray-500 text-sm mt-1">${project.period}</p>
          <p class="text-gray-600 mt-3 text-sm leading-relaxed">${project.description}</p>
          <div class="flex flex-wrap gap-2 mt-4">
            ${project.tags.map(tag => `<span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    </a>
  `).join('');
  
  main.innerHTML = `
    <!-- Page Header -->
    <div class="mb-12 opacity-0 animate-fade-in-up mt-16 ">
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Projects</h1>
      <p class="text-gray-500 mt-2">開発したプロジェクト</p>
    </div>
    
    <!-- Projects Grid -->
    <div class="grid grid-cols-1 gap-6">
      ${projectCards}
    </div>
    
    <!-- GitHub Link -->
    <div class="mt-12 text-center opacity-0 animate-fade-in-up animation-delay-500">
      <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" 
         class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View all on GitHub
      </a>
    </div>
  `;
  
  return main;
}

function init() {
  const app = document.getElementById('app');
  
  app.appendChild(createHeader());
  app.appendChild(createProjectsPage());
  app.appendChild(createFooter());
  
  initHeaderEvents();
}

document.addEventListener('DOMContentLoaded', init);

