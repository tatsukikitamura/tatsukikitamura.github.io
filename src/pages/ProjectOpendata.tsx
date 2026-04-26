import ProjectBackLink from '../components/ProjectBackLink';
import { getTechIcon } from '../lib/techIcons';

export default function ProjectOpendata() {
  return (
    <main className="pt-20 pb-8 px-4 max-w-4xl mx-auto">
      <ProjectBackLink />

      <div className="mb-12 opacity-0 animate-fade-in-up">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">ノー遅延乗り換え</h1>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
            公共交通オープンデータチャレンジ2025
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
            公開終了
          </span>
        </div>
        <p className="text-gray-500 mt-2">2025年10月〜現在（個人開発）</p>
      </div>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
        <h2 className="text-xl font-bold tracking-tight mb-4">概要</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          「今の時間は平常通りです」...その言葉を信じて遅刻したことはありませんか？
        </p>
        <p className="text-gray-600 leading-relaxed">
          既存の乗換案内は「現在」の遅延しか教えてくれません。本アプリは、
          <strong>未来の遅延リスクを予測</strong>
          し、「絶対に遅刻できない人」を安全に目的地まで送り届けるルート検索アプリです。
          数ヶ月分のリアルタイム運行データを蓄積・解析し、統計的リスクを可視化します。
        </p>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
        <h2 className="text-xl font-bold tracking-tight mb-4">使用技術</h2>
        <div className="flex flex-wrap gap-2">
          {[
            { name: 'Python 3.12', cls: 'bg-blue-50 text-blue-700' },
            { name: 'FastAPI', cls: 'bg-teal-50 text-teal-700' },
            { name: 'PostgreSQL', cls: 'bg-indigo-50 text-indigo-700' },
            { name: 'OpenAI API', cls: 'bg-gray-100 text-gray-700' },
            { name: 'Vite + JS', cls: 'bg-purple-50 text-purple-700' },
            { name: 'Tailwind CSS', cls: 'bg-cyan-50 text-cyan-700' },
            { name: 'GitHub Actions', cls: 'bg-gray-100 text-gray-700' },
          ].map(({ name, cls }) => {
            const icon = getTechIcon(name);
            return (
              <span
                key={name}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${cls} rounded-full text-sm`}
              >
                {icon && (
                  <img src={icon} className="w-4 h-4 flex-shrink-0" alt="" loading="lazy" />
                )}
                {name}
              </span>
            );
          })}
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
        <h2 className="text-xl font-bold tracking-tight mb-4">主な機能・技術的工夫</h2>
        <div className="space-y-6 text-gray-600">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">
              1. 独自グラフ探索エンジン（フルスクラッチ実装）
            </h3>
            <p className="text-sm mb-3">
              既存APIに頼らず、Dijkstra法を応用した経路探索エンジンを独自に実装。
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-2">
              <li>
                <strong>可変トランスファーバッファ</strong>:
                乗り換え時間を動的に変化させ、リスク許容度に応じたルートを提示
              </li>
              <li>
                <strong>ペナルティ法による迂回路探索</strong>:
                主要ルートにペナルティを与え、物理的に異なる代替ルートを強制的に導出
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">2. 未来の遅延リスク予測</h3>
            <p className="text-sm mb-3">
              ODPT API等から収集した数ヶ月分の運行データを蓄積・解析。
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 ml-2">
              <li>「金曜日18時台のXX線は遅延確率が30%高い」といった傾向を統計的に導出</li>
              <li>現在正常運行でも、将来のリスクが高い場合は警告を表示</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">3. AIコンシェルジュ</h3>
            <p className="text-sm">
              GPT-4o-miniを統合し、数値データだけでは伝わらない定性的なアドバイス（例：「イベント終了後の混雑回避」）を提供。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
        <h2 className="text-xl font-bold tracking-tight mb-4">リンク</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://challenge2025.odpt.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            コンテスト
          </a>
          <span className="text-sm text-white/60">※ デモサイトは現在公開を終了しています</span>
        </div>
      </section>
    </main>
  );
}
