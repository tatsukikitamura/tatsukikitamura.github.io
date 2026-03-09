import '../style.css';
import { createHeader, initHeaderEvents } from '../components/header.js';
import { createFooter } from '../components/footer.js';

// Simple SVG icons for each category
const ICONS = {
  work: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>`,
  hackathon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  event: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/></svg>`,
  teach: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-4.243 2.371M12 20l4.243-2.371"/></svg>`,
  music: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>`,
  edu: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>`,
};

function createExperiencePage() {
  const main = document.createElement('main');
  main.className = 'pt-24 pb-16 px-6';

  main.innerHTML = `
    <div class="max-w-3xl mx-auto">

      <!-- Page Header -->
      <div class="mb-10 animate-fade-in">
        <h1 class="text-3xl font-bold text-gray-900">Experience</h1>
        <p class="text-gray-500 mt-1 text-sm">経験・実績</p>
      </div>

      <!-- Work Experience -->
      <section class="mb-12">
        <h2 class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Work & Activities</h2>

        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-5 top-0 bottom-0 w-px bg-gray-200"></div>

          <div class="space-y-6">

            <!-- QA Experience -->
            <article class="relative pl-14 animate-fade-in animation-delay-100">
              <div class="absolute left-3 top-1 w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center" style="border-color: #0a66c2;">
                <div class="w-1.5 h-1.5 rounded-full" style="background: #0a66c2;"></div>
              </div>
              <div class="bg-white border border-gray-200 rounded-xl p-6">
                <div class="flex items-start gap-3 mb-3">
                  <div class="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2]">
                    ${ICONS.work}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 class="font-semibold text-gray-900">QA・デバッグ</h3>
                      <span class="text-xs text-gray-400">2023年4月 — 2025年4月（2年間）</span>
                    </div>
                    <p class="text-sm text-gray-500 mt-0.5">Gravity Game Arise</p>
                  </div>
                </div>

                <div class="space-y-4 text-sm text-gray-600 mt-4">
                  <div>
                    <h4 class="font-medium text-gray-800 mb-1.5">担当業務</h4>
                    <ul class="space-y-1 text-xs leading-relaxed">
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>5名規模のデバッグチームの一員として、不具合の検出・再現・報告を担当</span></li>
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>テストケースの作成・実行、バグレポートの整理とステータス管理</span></li>
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>モバイル・Steamなどマルチプラットフォーム向けゲームの品質向上に関与</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800 mb-1.5">主な成果</h4>
                    <p class="text-xs leading-relaxed">リリース前の重要機能において、再現性の低い致命的なバグを発見。ログファイルを詳細に分析して発生条件を特定し、開発チームに共有したことで、リリース前に修正が間に合った。</p>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800 mb-1.5">学び</h4>
                    <ul class="space-y-1 text-xs leading-relaxed">
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>QA視点だけでなく、エンジニア視点を持って不具合を見ることの重要性</span></li>
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>再現手順や状況を正確かつ簡潔に伝えることの重要性</span></li>
                    </ul>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">Backlog</span>
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">バグ管理</span>
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">テスト設計</span>
                </div>
              </div>
            </article>

            <!-- Event Planning -->
            <article class="relative pl-14 animate-fade-in animation-delay-200">
              <div class="absolute left-3 top-1 w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center" style="border-color: #0a66c2;">
                <div class="w-1.5 h-1.5 rounded-full" style="background: #0a66c2;"></div>
              </div>
              <div class="bg-white border border-gray-200 rounded-xl p-6">
                <div class="flex items-start gap-3 mb-3">
                  <div class="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2]">
                    ${ICONS.event}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 class="font-semibold text-gray-900">イベント運営（企画責任者）</h3>
                      <span class="text-xs text-gray-400">2025年3月</span>
                    </div>
                    <p class="text-sm text-gray-500 mt-0.5">岳文会（山岳サークル） / SHIBUYA DAIA</p>
                  </div>
                </div>

                <div class="space-y-4 text-sm text-gray-600 mt-4">
                  <div>
                    <h4 class="font-medium text-gray-800 mb-1.5">概要</h4>
                    <p class="text-xs leading-relaxed">渋谷のライブハウス「SHIBUYA DAIA」を会場とした卒業生追い出しイベント（約75名規模）を企画・運営。企画段階から当日運営、会計まで一貫して担当。</p>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800 mb-1.5">担当したこと</h4>
                    <ul class="space-y-1 text-xs leading-relaxed">
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>日程調整、会場手配、予算設計（参加費の目安設定を含む）</span></li>
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>告知と参加者管理、当日の進行と全体のとりまとめ</span></li>
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>運営フローのテンプレート化と次年度への引き継ぎ資料作成</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800 mb-1.5">成果</h4>
                    <p class="text-xs leading-relaxed">資料化の取り組みが評価され、2026年3月には後輩がこのノウハウを活用して同じ会場でイベントを開催することが決定。</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">プロジェクト管理</span>
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">リーダーシップ</span>
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">60名規模</span>
                </div>
              </div>
            </article>

            <!-- PR TIMES Hackathon -->
            <article class="relative pl-14 animate-fade-in animation-delay-300">
              <div class="absolute left-3 top-1 w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center" style="border-color: #0a66c2;">
                <div class="w-1.5 h-1.5 rounded-full" style="background: #0a66c2;"></div>
              </div>
              <div class="bg-white border border-gray-200 rounded-xl p-6">
                <div class="flex items-start gap-3 mb-3">
                  <div class="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2]">
                    ${ICONS.hackathon}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 class="font-semibold text-gray-900">PR TIMESハッカソン</h3>
                      <span class="text-xs text-gray-400">2025年8月（3日間）</span>
                    </div>
                    <p class="text-sm text-gray-500 mt-0.5">PR TIMES主催 / 4人チーム</p>
                  </div>
                </div>

                <div class="space-y-4 text-sm text-gray-600 mt-4">
                  <div>
                    <h4 class="font-medium text-gray-800 mb-1.5">概要</h4>
                    <p class="text-xs leading-relaxed">「プレスリリースをAIで添削する」WebアプリをPR TIMES主催のハッカソンで4人チームが開発。3日間の短期集中開発。</p>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800 mb-1.5">担当</h4>
                    <ul class="space-y-1 text-xs leading-relaxed">
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>バックエンド担当として、AI APIを呼び出すエンドポイントを実装</span></li>
                      <li class="flex gap-2"><span class="text-gray-300 mt-0.5">—</span><span>Gitブランチ運用・プルリクエストベースのチーム開発フローを整備</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-800 mb-1.5">学び</h4>
                    <p class="text-xs leading-relaxed">短期チーム開発では「最低限のGit運用ルールとコーディング規約を揃えること」が開発スピードと品質の両方に直結することを実感した。</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">チーム開発</span>
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">生成AI</span>
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">Git運用</span>
                </div>
              </div>
            </article>

            <!-- Tutor -->
            <article class="relative pl-14 animate-fade-in animation-delay-400">
              <div class="absolute left-3 top-1 w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center" style="border-color: #0a66c2;">
                <div class="w-1.5 h-1.5 rounded-full" style="background: #0a66c2;"></div>
              </div>
              <div class="bg-white border border-gray-200 rounded-xl p-6">
                <div class="flex items-start gap-3 mb-3">
                  <div class="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2]">
                    ${ICONS.teach}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 class="font-semibold text-gray-900">塾講師</h3>
                      <span class="text-xs text-gray-400">約1年間</span>
                    </div>
                  </div>
                </div>

                <div class="space-y-2 text-xs text-gray-600 mt-3 leading-relaxed">
                  <p>小学生〜高校生に数学・英語・理科などを指導。</p>
                  <p>最初は説明がうまくできなかったが、「結論→理由→具体例」の順で話すことを意識し、板書やメモの構成を工夫することで、少しずつ理解してもらえる場面が増えた。</p>
                </div>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">教育</span>
                  <span class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">コミュニケーション</span>
                </div>
              </div>
            </article>

            <!-- DJ -->
            <article class="relative pl-14 animate-fade-in animation-delay-500">
              <div class="absolute left-3 top-1 w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center" style="border-color: #0a66c2;">
                <div class="w-1.5 h-1.5 rounded-full" style="background: #0a66c2;"></div>
              </div>
              <div class="bg-white border border-gray-200 rounded-xl p-6">
                <div class="flex items-start gap-3 mb-3">
                  <div class="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2]">
                    ${ICONS.music}
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 class="font-semibold text-gray-900">DJサークル</h3>
                      <span class="text-xs text-gray-400">1年間</span>
                    </div>
                  </div>
                </div>

                <p class="text-xs text-gray-600 leading-relaxed mt-3">
                  イベントでのDJとして、会場の雰囲気を見ながら曲を選ぶ経験を積んだ。周りを観察して、何が求められているかを考えるクセがついた。
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="animate-fade-in animation-delay-500">
        <h2 class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Education</h2>

        <div class="relative">
          <div class="absolute left-5 top-0 bottom-0 w-px bg-gray-200"></div>

          <article class="relative pl-14">
            <div class="absolute left-3 top-1 w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center" style="border-color: #0a66c2;">
              <div class="w-1.5 h-1.5 rounded-full" style="background: #0a66c2;"></div>
            </div>
            <div class="bg-white border border-gray-200 rounded-xl p-6">
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2]">
                  ${ICONS.edu}
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">早稲田大学</h3>
                  <p class="text-sm text-gray-500 mt-0.5">教育学部 数学科</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

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
