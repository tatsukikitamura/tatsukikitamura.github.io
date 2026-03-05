import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

const ICONS = {
  location: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  edu: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
  lang: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>`,
  idea: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
  refresh: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7A9.003 9.003 0 0112 14.97m0 0a6.006 6.006 0 010-5.94"/></svg>`,
};

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const TECH_STACK = {
  languages: [
    { name: 'Ruby',       icon: `${DI}/ruby/ruby-original.svg`,           bg: 'bg-red-50',    text: 'text-red-700' },
    { name: 'Python',     icon: `${DI}/python/python-original.svg`,       bg: 'bg-blue-50',   text: 'text-blue-700' },
    { name: 'JavaScript', icon: `${DI}/javascript/javascript-original.svg`, bg: 'bg-yellow-50', text: 'text-yellow-700' },
    { name: 'C++',        icon: `${DI}/cplusplus/cplusplus-original.svg`, bg: 'bg-gray-100',  text: 'text-gray-700' },
  ],
  frameworks: [
    { name: 'Ruby on Rails', icon: `${DI}/rails/rails-plain.svg`,       bg: 'bg-red-50',    text: 'text-red-700' },
    { name: 'FastAPI',       icon: `${DI}/fastapi/fastapi-original.svg`, bg: 'bg-green-50',  text: 'text-green-700' },
    { name: 'React',         icon: `${DI}/react/react-original.svg`,     bg: 'bg-cyan-50',   text: 'text-cyan-700' },
    { name: 'Stimulus',      icon: null,                                  bg: 'bg-orange-50', text: 'text-orange-700' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: `${DI}/postgresql/postgresql-original.svg`, bg: 'bg-blue-50',  text: 'text-blue-700' },
    { name: 'SQLite3',    icon: `${DI}/sqlite/sqlite-original.svg`,         bg: 'bg-gray-100', text: 'text-gray-700' },
  ],
  infra: [
    { name: 'Docker',         icon: `${DI}/docker/docker-original.svg`, bg: 'bg-blue-50',   text: 'text-blue-700' },
    { name: 'Docker Compose', icon: `${DI}/docker/docker-original.svg`, bg: 'bg-gray-100',  text: 'text-gray-700' },
    { name: 'Git',            icon: `${DI}/git/git-original.svg`,        bg: 'bg-orange-50', text: 'text-orange-700' },
    { name: 'GitHub',         icon: `${DI}/github/github-original.svg`,  bg: 'bg-gray-100',  text: 'text-gray-700' },
    { name: 'Cursor',         icon: null,                                 bg: 'bg-purple-50', text: 'text-purple-700' },
  ],
  ai: [
    { name: 'OpenAI API', icon: `${DI}/openai/openai-original.svg`, bg: 'bg-green-50',  text: 'text-green-700' },
    { name: 'LangChain',  icon: null,                                bg: 'bg-orange-50', text: 'text-orange-700' },
  ],
};

function techTag({ name, icon, bg, text }) {
  const img = icon
    ? `<img src="${icon}" class="w-3.5 h-3.5 flex-shrink-0" alt="" loading="lazy">`
    : '';
  return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 ${bg} ${text} rounded text-xs font-medium">${img}${name}</span>`;
}

function techGroup(label, items) {
  return `
    <div>
      <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2.5">${label}</h3>
      <div class="flex flex-wrap gap-2">${items.map(techTag).join('')}</div>
    </div>
  `;
}

function createAboutPage() {
  const main = document.createElement('main');
  main.className = 'pt-24 pb-16 px-6';

  main.innerHTML = `
    <div class="max-w-3xl mx-auto">

      <!-- Page Header -->
      <div class="mb-10 animate-fade-in">
        <h1 class="text-3xl font-bold text-gray-900">About</h1>
        <p class="text-gray-500 mt-1 text-sm">私について</p>
      </div>

      <!-- Profile Section -->
      <section class="bg-white border border-gray-200 rounded-xl p-6 mb-5 animate-fade-in animation-delay-100">
        <h2 class="font-semibold text-gray-900 mb-4">Profile</h2>
        <div class="space-y-2.5">
          <div class="flex items-center gap-2.5 text-sm text-gray-600">
            <span class="text-gray-400">${ICONS.location}</span>
            <span>日本在住</span>
          </div>
          <div class="flex items-center gap-2.5 text-sm text-gray-600">
            <span class="text-gray-400">${ICONS.edu}</span>
            <span>早稲田大学 数学科</span>
          </div>
          <div class="flex items-center gap-2.5 text-sm text-gray-600">
            <span class="text-gray-400">${ICONS.code}</span>
            <span>プログラミング歴：約1年半（独学）</span>
          </div>
          <div class="flex items-center gap-2.5 text-sm text-gray-600">
            <span class="text-gray-400">${ICONS.lang}</span>
            <span>TOEIC：700点</span>
          </div>
        </div>
        <div class="mt-5 flex items-center gap-4">
          <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer"
             class="text-gray-400 hover:text-gray-700 transition-colors" aria-label="GitHub">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://x.com/oreennginia" target="_blank" rel="noopener noreferrer"
             class="text-gray-400 hover:text-gray-700 transition-colors" aria-label="X (Twitter)">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://atcoder.jp/users/oreccchi" target="_blank" rel="noopener noreferrer"
             class="text-gray-400 hover:text-gray-700 transition-colors" aria-label="AtCoder">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z"/>
              <path d="M8.4 7.2h7.2v1.8H8.4V7.2zm0 3.6h7.2v1.8H8.4v-1.8zm0 3.6h4.8v1.8H8.4v-1.8z"/>
            </svg>
          </a>
        </div>
      </section>

      <!-- Values Section -->
      <section class="bg-white border border-gray-200 rounded-xl p-6 mb-5 animate-fade-in animation-delay-200">
        <h2 class="font-semibold text-gray-900 mb-4">いま大事にしていること</h2>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2] mt-0.5">${ICONS.idea}</span>
            <span class="text-sm text-gray-600 leading-relaxed">自分のアイデアを、動くサービスとして形にすること</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2] mt-0.5">${ICONS.refresh}</span>
            <span class="text-sm text-gray-600 leading-relaxed">作って終わりではなく、「ユーザーの手元でちゃんと動き続けること」</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2] mt-0.5">${ICONS.rocket}</span>
            <span class="text-sm text-gray-600 leading-relaxed">失敗を恐れずに試し、その結果から学び続けること</span>
          </li>
        </ul>
        <p class="mt-5 text-sm text-gray-800 font-medium border-l-2 pl-3" style="border-color: #0a66c2;">
          「技術を使って、新しい体験や価値をつくること」に一番ワクワクする。
        </p>
      </section>

      <!-- Tech Stack Section -->
      <section class="bg-white border border-gray-200 rounded-xl p-6 mb-5 animate-fade-in animation-delay-300">
        <h2 class="font-semibold text-gray-900 mb-5">技術スタック</h2>
        <div class="space-y-5">
          ${techGroup('言語', TECH_STACK.languages)}
          ${techGroup('フレームワーク・ライブラリ', TECH_STACK.frameworks)}
          ${techGroup('データベース', TECH_STACK.databases)}
          ${techGroup('インフラ・開発環境', TECH_STACK.infra)}
          ${techGroup('AI関連', TECH_STACK.ai)}
        </div>
      </section>

      <!-- Career Vision -->
      <section class="bg-white border border-gray-200 rounded-xl p-6 animate-fade-in animation-delay-400">
        <h2 class="font-semibold text-gray-900 mb-5">将来像</h2>

        <div class="space-y-4">
          <div class="flex gap-4 items-start">
            <div class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background: #0a66c2;">1</div>
            <div>
              <h3 class="font-medium text-gray-900 text-sm">エンジニアとして技術力を磨く</h3>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">バックエンドなどサービスを安定して動かし続けるための技術力を身につける</p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <div class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background: #0a66c2;">2</div>
            <div>
              <h3 class="font-medium text-gray-900 text-sm">技術がわかるPM（プロダクトマネージャー）になる</h3>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">ビジネスサイドとエンジニアの橋渡しができる存在を目指す</p>
            </div>
          </div>

          <div class="flex gap-4 items-start">
            <div class="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background: #0a66c2;">3</div>
            <div>
              <h3 class="font-medium text-gray-900 text-sm">経営者として事業をつくる</h3>
              <p class="text-gray-500 text-xs mt-1 leading-relaxed">他の誰かを幸せにできる事業を自分の手でつくりたい</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;

  return main;
}

function init() {
  const app = document.getElementById('app');

  app.appendChild(createHeader());
  app.appendChild(createAboutPage());
  app.appendChild(createFooter());

  initHeaderEvents();
}

document.addEventListener('DOMContentLoaded', init);
