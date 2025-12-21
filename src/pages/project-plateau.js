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
        <div class="text-5xl">🗺️</div>
        <div>
          <div class="flex items-center gap-3">
            <h1 class="text-3xl md:text-4xl font-bold tracking-tight">ちば観光マップ</h1>
            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">開発中</span>
          </div>
          <p class="text-gray-500 mt-2">2024年9月〜（現在開発中）</p>
        </div>
      </div>
    </div>
    
    <!-- Overview -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
      <h2 class="text-xl font-bold tracking-tight mb-4">概要</h2>
      <p class="text-gray-600 leading-relaxed">
        PLATEAU（政府が公開している3D都市モデルデータ）と地理空間情報をAIチャットボットと連携させ、3D/2Dで可視化するWebアプリケーション。千葉市の地理空間データを対象として、自然言語での質問応答とインタラクティブなデータ可視化を実現する。
      </p>
    </section>
    
    <!-- Tech Stack -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
      <h2 class="text-xl font-bold tracking-tight mb-4">使用技術</h2>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm">Ruby on Rails 8.0.3</span>
        <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">FastAPI</span>
        <span class="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm">LangChain</span>
        <span class="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">OpenAI API</span>
        <span class="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">CesiumJS</span>
        <span class="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm">Leaflet</span>
      </div>
    </section>
    
    <!-- Architecture -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
      <h2 class="text-xl font-bold tracking-tight mb-4">アーキテクチャ</h2>
      <div class="space-y-4 text-gray-600">
        <p>
          当初は1つのシステムで全機能を実装しようとしたが、AI関連の処理とプログラム全体が複雑化し管理が困難に。そのため、2つのシステムに役割を分割するマイクロサービス設計を採用。
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div class="bg-red-50 rounded-2xl p-4">
            <h3 class="font-semibold text-red-800 mb-2">Rails（システム1）</h3>
            <ul class="text-red-700 text-sm space-y-1">
              <li>• 地図データの管理</li>
              <li>• フィルタリング処理</li>
              <li>• 可視化機能</li>
            </ul>
          </div>
          <div class="bg-green-50 rounded-2xl p-4">
            <h3 class="font-semibold text-green-800 mb-2">FastAPI（システム2）</h3>
            <ul class="text-green-700 text-sm space-y-1">
              <li>• AIチャットボット機能</li>
              <li>• LangChain連携</li>
              <li>• 自然言語処理</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Use Case -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-400">
      <h2 class="text-xl font-bold tracking-tight mb-4">具体的なユースケース</h2>
      <div class="bg-gray-50 rounded-2xl p-4">
        <p class="text-gray-700 text-sm">
          💬 「千葉市の観光地を案内して」とチャットで入力すると、3DマップがGoogle Mapまたは千葉市のデータと連動して自動的に動く
        </p>
      </div>
    </section>
    
    <!-- Role -->
    <section class="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-4">担当した内容</h2>
      <ul class="space-y-2 text-gray-600 text-sm">
        <li>• データのやり取りの設計（API設計）</li>
        <li>• データベースの構造設計</li>
        <li>• 各機能の役割分担設計</li>
        <li>• 自然な会話での質問応答とデータ可視化を連携させるシステム構築</li>
      </ul>
    </section>
    
    <!-- Links -->
    <section class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
      <h2 class="text-xl font-bold tracking-tight mb-4">リンク</h2>
      <div class="flex flex-wrap gap-4">
        <a href="https://github.com/tatsukikitamura/PLATEAU1120" target="_blank" rel="noopener noreferrer" 
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

