import ProjectBackLink from '../components/ProjectBackLink';
import { getTechIcon } from '../lib/techIcons';

export default function ProjectYamatomo() {
  return (
    <main className="pt-20 pb-8 px-4 max-w-4xl mx-auto">
      <ProjectBackLink />

      <div className="mb-12 opacity-0 animate-fade-in-up">
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="https://yamatomo.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:underline underline-offset-4 decoration-2">
              Yamatomo
            </h1>
          </a>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
            登山コミュニティアプリ
          </span>
        </div>
        <p className="text-gray-500 mt-2">2026年4月〜現在（チーム開発）</p>
      </div>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
        <h2 className="text-xl font-bold tracking-tight mb-4">概要</h2>
        <p className="text-gray-600 leading-relaxed">
          登山者同士がオンラインで繋がり、山ごとのコミュニティで交流できるサービス。
          <strong>iOSアプリ（SwiftUI + Firebase）</strong>と
          <strong>Web版（React + Firebase）</strong>
          を並行して開発し、同じバックエンド上で同等の体験を提供している。
          コミュニティ・チャット・山マップ・ベースキャンプ（山ごとの固定チャンネル）など、登山に特化した複数の機能を持つ。
        </p>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
        <h2 className="text-xl font-bold tracking-tight mb-4">使用技術</h2>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2">iOSアプリ</p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'SwiftUI', cls: 'bg-orange-50 text-orange-700' },
                { name: 'Firebase', cls: 'bg-amber-50 text-amber-700' },
                { name: 'OpenAI API', cls: 'bg-gray-100 text-gray-700' },
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
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2">Web版</p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'React', cls: 'bg-sky-50 text-sky-700' },
                { name: 'TypeScript', cls: 'bg-blue-50 text-blue-700' },
                { name: 'Firebase', cls: 'bg-amber-50 text-amber-700' },
                { name: 'Tailwind CSS', cls: 'bg-cyan-50 text-cyan-700' },
                { name: 'Vite', cls: 'bg-purple-50 text-purple-700' },
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
          </div>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
        <h2 className="text-xl font-bold tracking-tight mb-4">主な機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 text-sm">
          <div className="bg-gray-50 rounded-2xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">コミュニティ</h3>
            <p>趣味・目的別のコミュニティを作成・参加。AIによるコミュニティ自動生成にも対応。</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">山マップ</h3>
            <p>山を地図上から検索し、詳細・天気・写真アルバムを閲覧できる。</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">ベースキャンプ</h3>
            <p>山ごとに用意された固定チャンネルで、その山に関心のある人と情報交換できる。</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">チャット / DM</h3>
            <p>DM・グループ・コミュニティ・ベースキャンプを共通基盤で実装。@メンションや返信スワイプも対応。</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-400">
        <h2 className="text-xl font-bold tracking-tight mb-4">役割</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          チームでの開発に参加し、iOSアプリ / Web版の機能実装を担当。
          Firestore のデータ設計や、iOS と Web の双方で一貫した体験を提供するための共通仕様の整備にも関わっている。
        </p>
      </section>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
        <h2 className="text-xl font-bold tracking-tight mb-4">リンク</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://yamatomo.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors font-medium"
          >
            公式サイト
          </a>
        </div>
      </section>
    </main>
  );
}
