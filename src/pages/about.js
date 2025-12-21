import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

function createAboutPage() {
  const main = document.createElement('main');
  main.className = 'pt-20 pb-8 px-4 max-w-4xl mx-auto';
  
  main.innerHTML = `
    <!-- Page Header -->
    <div class="mb-12 opacity-0 animate-fade-in-up mt-16">
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight">About</h1>
      <p class="text-gray-500 mt-2">私について</p>
    </div>
    
    <!-- Profile Section -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
      <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img src="/images/main.jpg" alt="Profile" class="w-32 h-32 rounded-full">
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-bold tracking-tight">北村 健紀</h2>
          <p class="text-gray-500 mt-1">Kitamura Tatsuki</p>
          <div class="mt-4 space-y-2 text-sm text-gray-600">
            <p>📍 千葉県在住</p>
            <p>🎓 早稲田大学 教育学部 数学科 3年（2023年4月〜2027年3月予定）</p>
            <p>💻 プログラミング歴：約1年半（独学）</p>
            <p>🌐 TOEIC：700点</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Values Section -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
      <h2 class="text-xl font-bold tracking-tight mb-6">いま大事にしていること</h2>
      <ul class="space-y-4 text-gray-600">
        <li class="flex items-start gap-3">
          <span class="text-xl">💡</span>
          <span>自分のアイデアを、動くサービスとして形にすること</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-xl">🔄</span>
          <span>作って終わりではなく、「ユーザーの手元でちゃんと動き続けること」</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-xl">🚀</span>
          <span>失敗を恐れずに試し、その結果から学び続けること</span>
        </li>
      </ul>
      <p class="mt-6 text-gray-800 font-medium">
        「技術を使って、新しい体験や価値をつくること」に一番ワクワクする。
      </p>
    </section>
    
    <!-- Tech Stack Section -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
      <h2 class="text-xl font-bold tracking-tight mb-6">技術スタック</h2>
      
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">言語</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm">Ruby</span>
            <span class="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">Python</span>
            <span class="px-3 py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-sm">JavaScript</span>
            <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">TypeScript</span>
            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">C++</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">フレームワーク・ライブラリ</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm">Ruby on Rails</span>
            <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">FastAPI</span>
            <span class="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-sm">React</span>
            <span class="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm">Stimulus</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">データベース</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">PostgreSQL</span>
            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">SQLite3</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">インフラ・開発環境</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">Docker</span>
            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">Docker Compose</span>
            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">Git/GitHub</span>
            <span class="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">Cursor</span>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">AI関連</h3>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">OpenAI API</span>
            <span class="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm">LangChain</span>
          </div>
        </div>
      </div>
    </section>
  
    
    <!-- Career Vision -->
    <section class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-6">将来像</h2>
      
      <div class="space-y-6">
        <div class="flex gap-4">
          <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">1</div>
          <div>
            <h3 class="font-semibold">エンジニアとして技術力を磨く</h3>
            <p class="text-gray-300 text-sm mt-1">バックエンドなどサービスを安定して動かし続けるための技術力を身につける</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">2</div>
          <div>
            <h3 class="font-semibold">技術がわかるPM（プロダクトマネージャー）になる</h3>
            <p class="text-gray-300 text-sm mt-1">ビジネスサイドとエンジニアの橋渡しができる存在を目指す</p>
          </div>
        </div>
        
        <div class="flex gap-4">
          <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">3</div>
          <div>
            <h3 class="font-semibold">経営者として事業をつくる</h3>
            <p class="text-gray-300 text-sm mt-1">他の誰かを幸せにできる事業を自分の手でつくりたい</p>
          </div>
        </div>
      </div>
    </section>
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

