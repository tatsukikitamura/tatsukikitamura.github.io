import ProjectBackLink from '../components/ProjectBackLink';
import { getTechIcon } from '../lib/techIcons';

export default function ProjectAtcoder() {
  return (
    <main className="pt-20 pb-8 px-4 max-w-4xl mx-auto">
      <ProjectBackLink />

      <div className="mb-12 opacity-0 animate-fade-in-up">
        <a
          href="https://atcoder.jp/users/oreccchi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:underline underline-offset-4 decoration-2">
            AtCoder
          </h1>
        </a>
        <p className="text-gray-500 mt-2">2024年4月〜2026年1月（継続中）</p>
      </div>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
        <h2 className="text-xl font-bold tracking-tight mb-4">概要</h2>
        <p className="text-gray-600 leading-relaxed">
          AtCoderは、プログラミングの問題を解くスピードと正確性を競うコンテスト。アルゴリズムやデータ構造の知識を活かして、制限時間内に問題を解く形式。継続的に取り組み、Algorithm部門で茶色、Heuristic部門で水色ランクに到達。直近のAHCでは78位・黄色パフォーマンスを記録。
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 opacity-0 animate-fade-in-up animation-delay-200">
          <h3 className="font-semibold text-amber-800">Algorithm部門</h3>
          <p className="text-amber-600 mt-1 text-sm">茶色ランク到達</p>
        </div>

        <div className="bg-cyan-50 rounded-xl border border-cyan-200 p-6 opacity-0 animate-fade-in-up animation-delay-200">
          <h3 className="font-semibold text-cyan-800">Heuristic部門</h3>
          <p className="text-cyan-600 mt-1 text-sm">水色ランク到達</p>
        </div>

        <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6 opacity-0 animate-fade-in-up animation-delay-200">
          <h3 className="font-semibold text-yellow-800">AHC最高成績</h3>
          <p className="text-yellow-600 mt-1 text-sm">78位・黄色パフォーマンス</p>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
        <h2 className="text-xl font-bold tracking-tight mb-4">使用言語</h2>
        <div className="flex flex-wrap gap-2">
          {['Python', 'C++'].map((name) => {
            const icon = getTechIcon(name);
            return (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm"
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

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-400">
        <h2 className="text-xl font-bold tracking-tight mb-4">取り組み方</h2>
        <div className="space-y-4 text-gray-600 text-sm">
          <ul className="space-y-2">
            <li>• 毎週開催されるコンテストに参加し、アルゴリズム問題に取り組む</li>
            <li>
              •
              Algorithm部門（アルゴリズムの正確性とスピードを競う）とHeuristic部門（試行錯誤で最適解を探す）の両方に挑戦
            </li>
            <li>• 当初は知らないアルゴリズムばかりで苦戦したが、継続的に学習を続けた</li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-500">
        <h2 className="text-xl font-bold tracking-tight mb-4">工夫した点</h2>
        <div className="space-y-4 text-gray-600 text-sm">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>
                わからない部分はAIに質問したり、体系的な書籍（「競技プログラミングの鉄則」など）で学んだりして、効率的に知識を吸収
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>
                解けなかった問題は、解説を読んで理解した後に必ず自分で実装し直すことで、知識を定着
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>苦手な分野（グラフ、動的計画法など）を特定し、重点的に演習を積んだ</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-500">
        <h2 className="text-xl font-bold tracking-tight mb-4">学び</h2>
        <div className="space-y-3 text-gray-600 text-sm">
          <p>
            • 「わからない」状態から、調べて・試して・理解するというサイクルを回し続けることで、着実に成長できることを実感
          </p>
          <p>• 問題を分解して考える力、効率的なアルゴリズムを選択する力が身についた</p>
          <p>
            •
            制限時間内に正確なコードを書くプレッシャーの中で、冷静に思考を整理する力が鍛えられた
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
        <h2 className="text-xl font-bold tracking-tight mb-4">リンク</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://atcoder.jp/users/oreccchi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <span className="font-bold">A</span>
            AtCoder Profile
          </a>
        </div>
      </section>
    </main>
  );
}
