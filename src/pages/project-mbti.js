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
        <div class="text-5xl">🧠</div>
        <div>
          <h1 class="text-3xl md:text-4xl font-bold tracking-tight">MBTI × 生成AI体験アプリ</h1>
          <p class="text-gray-500 mt-2">2024年6月〜2024年8月（3ヵ月）</p>
        </div>
      </div>
    </div>
    
    <!-- Overview -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
      <h2 class="text-xl font-bold tracking-tight mb-4">概要</h2>
      <p class="text-gray-600 leading-relaxed">
        MBTI診断と生成AIを組み合わせた体験型Webアプリケーション。ユーザーの回答からMBTIタイプを推定し、AIが音楽・写真・ストーリーなどを自動生成して体験として提供する。企画・開発・公開まで、すべて個人で担当。
      </p>
    </section>
    
    <!-- Tech Stack -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
      <h2 class="text-xl font-bold tracking-tight mb-4">使用技術</h2>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm">Ruby on Rails</span>
        <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">OpenAI API</span>
        <span class="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm">Redis</span>
        <span class="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">Heroku</span>
      </div>
    </section>
    
    <!-- Problem & Solution -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
      <h2 class="text-xl font-bold tracking-tight mb-4">解決しようとした課題</h2>
      <div class="space-y-4 text-gray-600">
        <p>従来のMBTI診断アプリにあった課題：</p>
        <ul class="space-y-2 ml-4">
          <li>• 質問同士の文脈がなく、ユーザーが回答に迷いやすい</li>
          <li>• 用意された質問に自分を当てはめる形式では、本来の性格を正確に測りにくい</li>
        </ul>
      </div>
    </section>
    
    <!-- Key Features -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-400">
      <h2 class="text-xl font-bold tracking-tight mb-4">工夫した点</h2>
      
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold text-gray-800 mb-2">「物語モード」の実装</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li>• ユーザーは「ホラー」「アドベンチャー」「ミステリー」、完全オリジナルの「クリエイター」などの世界を選択</li>
            <li>• AIが生成する状況に応じて選択肢を選び続けることで、無意識の価値観や行動パターンが自然に表に出るようにした</li>
          </ul>
        </div>
        
        <div>
          <h3 class="font-semibold text-gray-800 mb-2">診断結果の出し方</h3>
          <p class="text-gray-600 text-sm">物語の内容も加味してMBTIタイプを出力し、従来より納得感のある結果になるようにした</p>
        </div>
        
        <div>
          <h3 class="font-semibold text-gray-800 mb-2">技術的な工夫</h3>
          <ul class="space-y-2 text-gray-600 text-sm">
            <li>• OpenAI APIの呼び出しを共通化し、エラー時に別ルートで処理する仕組みを実装</li>
            <li>• 前の質問の内容や何問目かによって物語の段階を変更し、AIの出力の質を向上</li>
          </ul>
        </div>
      </div>
    </section>
    
    <!-- Results & Learnings -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <section class="bg-white rounded-3xl border border-gray-200 p-8 opacity-0 animate-fade-in-up animation-delay-500">
        <h2 class="text-xl font-bold tracking-tight mb-4">成果</h2>
        <p class="text-gray-600 text-sm">
          診断結果に物語体験を加えることで、ユーザーが自分の性格をより自然に受け止めやすい形にできた。
        </p>
      </section>
      
      <section class="bg-white rounded-3xl border border-gray-200 p-8 opacity-0 animate-fade-in-up animation-delay-500">
        <h2 class="text-xl font-bold tracking-tight mb-4">学び</h2>
        <p class="text-gray-600 text-sm">
          ユーザー体験を設計する際、「どんなUIを作るか」だけでなく、「どうすれば自然に行動や本音を引き出せるか」を考えることの重要性を実感した。
        </p>
      </section>
    </div>
    
    <!-- Links -->
    <section class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-4">リンク</h2>
      <div class="flex flex-wrap gap-4">
        <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
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

