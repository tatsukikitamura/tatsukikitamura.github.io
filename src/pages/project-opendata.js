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
        <div class="text-5xl">🚃</div>
        <div>
          <div class="flex items-center gap-3">
            <h1 class="text-3xl md:text-4xl font-bold tracking-tight">ノー遅延乗り換え</h1>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">公共交通オープンデータチャレンジ2025</span>
          </div>
          <p class="text-gray-500 mt-2">2025年10月〜現在（個人開発）</p>
        </div>
      </div>
    </div>
    
    <!-- Overview -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
      <h2 class="text-xl font-bold tracking-tight mb-4">概要</h2>
      <p class="text-gray-600 leading-relaxed mb-4">
        「今の時間は平常通りです」...その言葉を信じて遅刻したことはありませんか？
      </p>
      <p class="text-gray-600 leading-relaxed">
        既存の乗換案内は「現在」の遅延しか教えてくれません。本アプリは、<strong>未来の遅延リスクを予測</strong>し、「絶対に遅刻できない人」を安全に目的地まで送り届けるルート検索アプリです。
        数ヶ月分のリアルタイム運行データを蓄積・解析し、統計的リスクを可視化します。
      </p>
    </section>
    
    <!-- Tech Stack -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
      <h2 class="text-xl font-bold tracking-tight mb-4">使用技術</h2>
      <div class="flex flex-wrap gap-2">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 18.062 0 29.674C7.473 86.746 12.545 93 21.026 93H32V79.952c0-9.629 8.333-18.127 18.33-18.127zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981c0 9.627-8.441 18.019-18.33 18.019H49.33c-8.099 0-14.33 6.968-14.33 15.176v27.798c0 7.912 6.879 12.564 14.555 14.854 9.2 2.746 18.023 3.242 29.074 0 7.349-2.163 14.371-6.521 14.371-14.854V96H63.83v-4h44.19c8.484 0 11.647-5.917 14.559-14.811 3.009-9.166 2.881-17.971 0-29.378zM79.97 105.11c3.026 0 5.479 2.479 5.479 5.545 0 3.079-2.453 5.581-5.479 5.581-3.015 0-5.479-2.502-5.479-5.581 0-3.066 2.465-5.545 5.479-5.545z"/>
          </svg>
          Python 3.12
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M64 0a64 64 0 1 0 64 64A64 64 0 0 0 64 0zm0 118a54 54 0 1 1 54-54 54 54 0 0 1-54 54zm23-86H41a5 5 0 0 0-5 5v60a5 5 0 0 0 5 5h46a5 5 0 0 0 5-5V37a5 5 0 0 0-5-5zm-5 55H51V47h31z"/>
          </svg>
          FastAPI
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.545-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.208 5.214.37 10.135 1.177 12.986.807 2.85 1.808 10.399 9.495 8.257 6.437-1.793 11.704-4.548 12.262-29.702zm-17.748 18.326c-.548 7.646-2.576 10.421-4.262 11.796-5.553 2.079-7.27-.541-8.203-4.038-1.377-5.162-1.183-13.373-.966-17.407l-.023-.637c.163-3.085.301-6.33-.295-9.151 1.963-2.436 3.282-5.417 3.282-5.417s-.145 7.122 1.553 11.288c1.463 3.592 3.842-.34 4.119-1.259.277-.919 1.098-4.285 1.098-4.285l.511.725c-.074 6.08.636 11.289.186 18.385z"/>
          </svg>
          PostgreSQL
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
          </svg>
          OpenAI API
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M64 0L0 32v64l64 32 64-32V32L64 0zm0 8.9l54.6 27.3v13.6L64 77.1l-54.6-27.3V36.2L64 8.9zm-54.6 88v-13.7L64 110.5l54.6-27.3v13.7L64 124.2 9.4 96.9z"/>
          </svg>
          Vite + JS
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 128 128" fill="currentColor">
            <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z"/>
          </svg>
          Tailwind CSS
        </span>
        <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub Actions
        </span>
      </div>
    </section>
    
    <!-- Features -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
      <h2 class="text-xl font-bold tracking-tight mb-4">主な機能・技術的工夫</h2>
      <div class="space-y-6 text-gray-600">
        
        <div class="bg-gray-50 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-3">1. 独自グラフ探索エンジン（フルスクラッチ実装）</h3>
          <p class="text-sm mb-3">既存APIに頼らず、Dijkstra法を応用した経路探索エンジンを独自に実装。</p>
          <ul class="list-disc list-inside text-sm space-y-1 ml-2">
            <li><strong>可変トランスファーバッファ</strong>: 乗り換え時間を動的に変化させ、リスク許容度に応じたルートを提示</li>
            <li><strong>ペナルティ法による迂回路探索</strong>: 主要ルートにペナルティを与え、物理的に異なる代替ルートを強制的に導出</li>
          </ul>
        </div>

        <div class="bg-gray-50 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-3">2. 未来の遅延リスク予測</h3>
          <p class="text-sm mb-3">ODPT API等から収集した数ヶ月分の運行データを蓄積・解析。</p>
          <ul class="list-disc list-inside text-sm space-y-1 ml-2">
            <li>「金曜日18時台のXX線は遅延確率が30%高い」といった傾向を統計的に導出</li>
            <li>現在正常運行でも、将来のリスクが高い場合は警告を表示</li>
          </ul>
        </div>
        
        <div class="bg-gray-50 rounded-2xl p-6">
          <h3 class="font-bold text-gray-900 mb-3">3. AIコンシェルジュ</h3>
          <p class="text-sm">
            GPT-4o-miniを統合し、数値データだけでは伝わらない定性的なアドバイス（例：「イベント終了後の混雑回避」）を提供。
          </p>
        </div>

      </div>
    </section>
    
    <!-- Links -->
    <section class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-4">リンク</h2>
      <div class="flex flex-wrap gap-4">
        <a href="https://opendata.tatsuki.dev" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors font-medium">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          デモサイト
        </a>
        <a href="https://challenge2025.odpt.org/" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          コンテスト
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

