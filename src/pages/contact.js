import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

function createContactPage() {
  const main = document.createElement('main');
  main.className = 'pt-20 pb-8 px-4 max-w-2xl mx-auto';
  
  main.innerHTML = `
    <!-- Page Header -->
    <div class="mb-12 opacity-0 animate-fade-in-up">
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Contact</h1>
      <p class="text-gray-500 mt-2">お気軽にご連絡ください</p>
    </div>
    
    <!-- Contact Links -->
    <div class="space-y-4 mb-12">
      <a href="https://github.com/tatsukikitamura" target="_blank" rel="noopener noreferrer" 
         class="bg-white rounded-3xl border border-gray-200 p-6 flex items-center gap-4 hover:border-gray-300 hover:bg-gray-50/50 transition-all opacity-0 animate-fade-in-up animation-delay-100 block">
        <div class="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
        <div class="flex-1">
          <h2 class="font-bold">GitHub</h2>
          <p class="text-gray-500 text-sm">@tatsukikitamura</p>
        </div>
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
      
      <a href="https://atcoder.jp/users/oreccchi" target="_blank" rel="noopener noreferrer" 
         class="bg-white rounded-3xl border border-gray-200 p-6 flex items-center gap-4 hover:border-gray-300 hover:bg-gray-50/50 transition-all opacity-0 animate-fade-in-up animation-delay-200">
        <img src="/images/main.jpg" alt="AtCoder" class="w-12 h-12 rounded-full">
        <div class="flex-1">
          <h2 class="font-bold text-yellow-800">AtCoder</h2>
          <p class="text-gray-500 text-sm">@oreccchi</p>
        </div>
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
      <a href="https://x.com/oreenginia" target="_blank" rel="noopener noreferrer" 
         class="bg-white rounded-3xl border border-gray-200 p-6 flex items-center gap-4 hover:border-gray-300 hover:bg-gray-50/50 transition-all opacity-0 animate-fade-in-up animation-delay-200">
        <img src="/images/main.jpg" alt="X" class="w-12 h-12 rounded-full">
        <div class="flex-1">
          <h2 class="font-bold">X</h2>
          <p class="text-gray-500 text-sm">@oreenginia</p>
        </div>
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
    </div>
    
    <!-- Message -->
    <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-300">
      <h2 class="text-xl font-bold tracking-tight mb-4">お問い合わせについて</h2>
      <p class="text-gray-300 text-sm leading-relaxed">
        お仕事のご依頼、ご質問、その他ご連絡はGitHubやXのプロフィールからお願いします。<br>
      </p>
    </div>
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


