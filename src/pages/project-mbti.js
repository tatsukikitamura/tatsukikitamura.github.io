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
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M64 11.136c-29.193 0-52.864 23.674-52.864 52.864S34.807 116.864 64 116.864c29.19 0 52.864-23.674 52.864-52.864S93.19 11.136 64 11.136zm27.143 73.088a5.326 5.326 0 01-6.32 4.105C62.804 84.17 49.006 82.216 48.87 82.19c-1.963-.314-4.006-.86-5.295-2.414-2.025-2.445-1.46-5.69-1.015-8.344.25-1.495.75-3.9 1.51-6.088.614-1.755 1.66-4.053 3.574-5.455 3.197-2.342 8.078-1.28 11.84-.34 4.12 1.03 23.095 5.907 26.506 6.797 3.504.913 6.25 4.753 5.153 8.878zm4.148-21.68c-.56 1.38-1.31 2.626-2.48 3.568-3.126 2.518-8.086 1.4-11.906.448-4.074-1.015-23.056-5.855-26.452-6.74-3.39-.887-6.2-4.538-5.154-8.727.567-2.283 2.04-4.015 4.047-4.863.792-.335 1.642-.546 2.52-.63.7-.068 15.31 1.63 30.243 5.158 1.68.396 3.31 1.268 4.496 2.548a7.758 7.758 0 011.764 3.42c.452 1.89.06 3.752-1.078 5.818z"/>
          </svg>
          Ruby on Rails
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
          </svg>
          OpenAI API
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M64.022 90.387c5.452 0 11.04-1.327 16.125-3.84l5.206 6.039 7.538-1.61 2.753-7.669-5.357-6.221c4.324-5.093 6.903-11.252 7.473-17.858h8.652V50.92l-8.553-.001c-.442-6.792-3.065-13.103-7.565-18.29l5.326-6.181-2.753-7.669-7.538-1.61-5.131 5.952C74.899 20.117 69.402 18.79 64 18.79c-5.512 0-11.11 1.372-16.19 3.972l-4.858-5.639-7.539 1.61-2.753 7.669 5.134 5.96c-4.623 5.29-7.292 11.721-7.704 18.638l-8.503-.001v8.308l8.391-.001c.508 6.742 3.147 13.034 7.616 18.199l-5.119 5.942 2.753 7.669 7.538 1.61 4.932-5.722c5.1 2.57 10.654 3.962 16.324 3.983zm18.478-38.421l-6.086 3.512-3.512-6.087 6.087-3.512zm-41.58-2.575l6.087 3.512-3.512 6.087-6.087-3.512zm11.088 28.883l-3.512-6.087 6.087-3.512 3.512 6.087zm8.003-29.97c5.9 0 10.677 4.778 10.677 10.677 0 5.899-4.778 10.677-10.677 10.677-5.899 0-10.677-4.778-10.677-10.677 0-5.899 4.778-10.677 10.677-10.677zm11.995 29.97l-6.087-3.512 3.512-6.087 6.087 3.512zm-32.021-22.85l6.087-3.512 3.512 6.087-6.087 3.512z"/>
          </svg>
          Redis
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M56.422 94.47a.787.787 0 01-.752-1.018l8.469-27.396a.787.787 0 01.752-.555h22.063a.787.787 0 01.68 1.181L66.49 100.834a.787.787 0 01-1.36.082L56.422 94.47zM47.578 61.5a.787.787 0 00.752 1.018l7.898.001a.787.787 0 00.752-.555l8.47-27.4a.787.787 0 00-.752-1.018H42.635a.787.787 0 00-.68 1.181L47.578 61.5zm-7.24 11.712a.787.787 0 00.68 1.181l11.39.001a.787.787 0 00.68-.393l5.614-9.642a.787.787 0 00-.68-1.18H40.337a.787.787 0 00-.68.393l-5.319 9.64z"/>
          </svg>
          Heroku
        </span>
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
    <section class="bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-4">リンク</h2>
      <div class="flex flex-wrap gap-4">
        <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href="https://mbti-search-854b363bf31b.herokuapp.com/" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          URL
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

