import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

function createExperiencePage() {
  const main = document.createElement('main');
  main.className = 'pt-20 pb-8 px-4 max-w-4xl mx-auto';
  
  main.innerHTML = `
    <!-- Page Header -->
    <div class="mb-12 opacity-0 animate-fade-in-up mt-16">
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Experience</h1>
      <p class="text-gray-500 mt-2">経験・実績</p>
    </div>
    
    <!-- Timeline -->
    <div class="space-y-6">
      
      <!-- QA Experience -->
      <article class="bg-white rounded-3xl border border-gray-200 p-8 opacity-0 animate-fade-in-up animation-delay-100">
        <div class="flex items-start gap-4">
          <div class="text-3xl">🎮</div>
          <div class="flex-1">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h2 class="text-xl font-bold tracking-tight">QA・デバッグ</h2>
              <span class="text-sm text-gray-500">2023年4月〜2025年4月（2年間）</span>
            </div>
            <p class="text-gray-600 mt-1">Gravity Game Arise</p>
            
            <div class="mt-4 space-y-4 text-sm text-gray-600">
              <div>
                <h3 class="font-semibold text-gray-800 mb-2">担当業務</h3>
                <ul class="space-y-1">
                  <li>• 5名規模のデバッグチームの一員として、不具合の検出・再現・報告を担当</li>
                  <li>• テストケースの作成・実行、バグレポートの整理とステータス管理</li>
                  <li>• モバイル・Steamなどマルチプラットフォーム向けゲームの品質向上に関与</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-800 mb-2">主な成果</h3>
                <p>リリース前の重要機能において、再現性の低い致命的なバグを発見。ログファイルを詳細に分析して発生条件を特定し、開発チームに共有したことで、リリース前に修正が間に合った。</p>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-800 mb-2">学び</h3>
                <ul class="space-y-1">
                  <li>• QA視点だけでなく、エンジニア視点を持って不具合を見ることの重要性</li>
                  <li>• 再現手順や状況を正確かつ簡潔に伝えることの重要性</li>
                </ul>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">Backlog</span>
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">バグ管理</span>
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">テスト設計</span>
            </div>
          </div>
        </div>
      </article>
      
      <!-- Event Planning -->
      <article class="bg-white rounded-3xl border border-gray-200 p-8 opacity-0 animate-fade-in-up animation-delay-200">
        <div class="flex items-start gap-4">
          <div class="text-3xl">🎤</div>
          <div class="flex-1">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h2 class="text-xl font-bold tracking-tight">イベント運営（企画責任者）</h2>
              <span class="text-sm text-gray-500">2025年3月</span>
            </div>
            <p class="text-gray-600 mt-1">岳文会（山岳サークル） / SHIBUYA DAIA</p>
            
            <div class="mt-4 space-y-4 text-sm text-gray-600">
              <div>
                <h3 class="font-semibold text-gray-800 mb-2">概要</h3>
                <p>渋谷のライブハウス「SHIBUYA DAIA」を会場とした卒業生追い出しイベント（約60名規模）を企画・運営。企画段階から当日運営、会計まで一貫して担当。</p>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-800 mb-2">担当したこと</h3>
                <ul class="space-y-1">
                  <li>• 日程調整、会場手配、予算設計（参加費の目安設定を含む）</li>
                  <li>• 告知と参加者管理、当日の進行と全体のとりまとめ</li>
                  <li>• 運営フローのテンプレート化と次年度への引き継ぎ資料作成</li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-800 mb-2">成果</h3>
                <p>資料化の取り組みが評価され、2026年3月には後輩がこのノウハウを活用して同じ会場でイベントを開催することが決定。</p>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">プロジェクト管理</span>
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">リーダーシップ</span>
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">60名規模</span>
            </div>
          </div>
        </div>
      </article>
      
      <!-- Tutor -->
      <article class="bg-white rounded-3xl border border-gray-200 p-8 opacity-0 animate-fade-in-up animation-delay-300">
        <div class="flex items-start gap-4">
          <div class="text-3xl">📚</div>
          <div class="flex-1">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h2 class="text-xl font-bold tracking-tight">塾講師</h2>
              <span class="text-sm text-gray-500">約1年間</span>
            </div>
            
            <div class="mt-4 space-y-4 text-sm text-gray-600">
              <p>小学生〜高校生に数学・英語・理科などを指導。</p>
              <p>最初は説明がうまくできなかったが、「結論→理由→具体例」の順で話すことを意識し、板書やメモの構成を工夫することで、少しずつ理解してもらえる場面が増えた。</p>
            </div>
            
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">教育</span>
              <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">コミュニケーション</span>
            </div>
          </div>
        </div>
      </article>
      
      <!-- DJ -->
      <article class="bg-white rounded-3xl border border-gray-200 p-8 opacity-0 animate-fade-in-up animation-delay-400">
        <div class="flex items-start gap-4">
          <div class="text-3xl">🎧</div>
          <div class="flex-1">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h2 class="text-xl font-bold tracking-tight">DJサークル</h2>
              <span class="text-sm text-gray-500">1年間</span>
            </div>
            
            <div class="mt-4 text-sm text-gray-600">
              <p>イベントでのDJとして、会場の雰囲気を見ながら曲を選ぶ経験を積んだ。周りを観察して、何が求められているかを考えるクセがついた。</p>
            </div>
          </div>
        </div>
      </article>
      
    </div>
    
    <!-- Education -->
    <div class="mt-12">
      <h2 class="text-2xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up animation-delay-500">学歴</h2>
      
      <div class="bg-white rounded-3xl border border-gray-200 p-8 opacity-0 animate-fade-in-up animation-delay-500">
        <div class="space-y-4">
          <div class="flex items-start gap-4">
            <div class="text-2xl">🎓</div>
            <div>
              <h3 class="font-bold">早稲田大学 教育学部 数学科</h3>
              <p class="text-gray-500 text-sm">2023年4月〜2027年3月予定（3年次在籍）</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="text-2xl">📖</div>
            <div>
              <h3 class="font-bold">芝浦工業大学柏中学・高校</h3>
              <p class="text-gray-500 text-sm">浪人1年を経て早稲田大学に入学</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return main;
}

function init() {
  const app = document.getElementById('app');
  
  app.appendChild(createHeader());
  app.appendChild(createExperiencePage());
  app.appendChild(createFooter());
  
  initHeaderEvents();
}

document.addEventListener('DOMContentLoaded', init);

