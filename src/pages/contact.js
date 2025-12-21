import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

function createContactPage() {
  const main = document.createElement('main');
  main.className = 'pt-20 pb-8 px-4 max-w-4xl mx-auto';
  
  main.innerHTML = `
    <!-- Page Header -->
    <div class="mb-12 opacity-0 animate-fade-in-up mt-20 text-center">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight">🙋‍♂️ Please Give Me a Job!</h1>
      <p class="text-gray-500 mt-4 text-lg">2027年4月入社 新卒採用希望</p>
    </div>
    
    <!-- Hero Message -->
    <section class="rounded-3xl p-8 text-zinc-700 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
      <h2 class="text-2xl font-bold mb-4">👋 はじめに</h2>
      <p class="text-zinc-700 leading-relaxed">
        早稲田大学3年の北村健紀です。<br>
        独学でプログラミングを始めて約1年半。<br>
        いまだにわからないことだらけですが少しずつ成長しています。そのはずです。
      </p>
    </section>
    
    <!-- What I'm Looking For -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
      <h2 class="text-xl font-bold tracking-tight mb-6">🎯 希望する環境</h2>
      <ul class="space-y-4 text-gray-600">
        <li class="flex items-starにt gap-3">
          <span class="text-green-500 text-xl">✓</span>
          <span><strong>自社開発</strong>で、プロダクトに愛着を持てる環境</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-green-500 text-xl">✓</span>
          <span><strong>技術力</strong>を磨きながら、ビジネスも学べる環境</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-green-500 text-xl">✓</span>
          <span><strong>若手でも挑戦</strong>できる、成長機会のある環境</span>
        </li>
      </ul>
    </section>
    
    <!-- Why Me -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
      <h2 class="text-xl font-bold tracking-tight mb-6">💪 私の強み</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center p-4">
          <div class="text-4xl mb-3">🚀</div>
          <h3 class="font-bold mb-2">独学でやり抜く力</h3>
          <p class="text-sm text-gray-500">1年半でRails・Python・競プロまで</p>
        </div>
        <div class="text-center p-4">
          <div class="text-4xl mb-3">💡</div>
          <h3 class="font-bold mb-2">アイデアを形に</h3>
          <p class="text-sm text-gray-500">MBTI診断アプリを個人開発</p>
        </div>
        <div class="text-center p-4">
          <div class="text-4xl mb-3">🧮</div>
          <h3 class="font-bold mb-2">数学的思考</h3>
          <p class="text-sm text-gray-500">数学科＋AtCoder茶色</p>
        </div>
      </div>
    </section>
    
    <!-- Quick Stats -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-400">
      <h2 class="text-xl font-bold tracking-tight mb-6">📊 スペック</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="bg-gray-50 rounded-2xl p-4">
          <p class="text-2xl font-bold text-indigo-600">1.5年</p>
          <p class="text-xs text-gray-500 mt-1">プログラミング歴</p>
        </div>
        <div class="bg-gray-50 rounded-2xl p-4">
          <p class="text-2xl font-bold text-amber-600">茶色</p>
          <p class="text-xs text-gray-500 mt-1">AtCoderランク</p>
        </div>
        <div class="bg-gray-50 rounded-2xl p-4">
          <p class="text-2xl font-bold text-green-600">700</p>
          <p class="text-xs text-gray-500 mt-1">TOEIC</p>
        </div>
        <div class="bg-gray-50 rounded-2xl p-4">
          <p class="text-2xl font-bold text-red-600">3個</p>
          <p class="text-xs text-gray-500 mt-1">個人開発プロジェクト</p>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class=" from-gray-900 to-gray-800 rounded-3xl p-8 text-zinc-700 text-center opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-2xl font-bold mb-4">📮 お声がけください！</h2>
      <p class="text-zinc-700 mb-6">カジュアル面談、大歓迎です</p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a href="https://x.com/oreennginia" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-zinc-700 rounded-full font-medium hover:bg-white/20 transition-colors">
          X (Twitter)
        </a>
      </div>
    </section>
  `;
  
  return main;
}

function init() {
  const app = document.getElementById('app');
  
  app.appendChild(createHeader());
  app.appendChild(createContactPage());
  app.appendChild(createFooter());
  
  initHeaderEvents();
}

document.addEventListener('DOMContentLoaded', init);
