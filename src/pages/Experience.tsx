import type { ReactNode } from 'react';
import {
  WorkIcon,
  HackathonIcon,
  EventIcon,
  TeachIcon,
  MusicIcon,
  EduIcon,
} from '../components/Icons';

type TimelineItem = {
  title: string;
  date: string;
  org?: string;
  icon: ReactNode;
  body: ReactNode;
  tags: string[];
  delayClass: string;
};

const items: TimelineItem[] = [
  {
    title: 'QA・デバッグ',
    date: '2023年4月 — 2025年4月（2年間）',
    org: 'Gravity Game Arise',
    icon: <WorkIcon />,
    body: (
      <>
        <div>
          <h4 className="font-medium text-gray-800 mb-1.5">担当業務</h4>
          <ul className="space-y-1 text-xs leading-relaxed">
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>5名規模のデバッグチームの一員として、不具合の検出・再現・報告を担当</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>テストケースの作成・実行、バグレポートの整理とステータス管理</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>モバイル・Steamなどマルチプラットフォーム向けゲームの品質向上に関与</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-1.5">主な成果</h4>
          <p className="text-xs leading-relaxed">
            リリース前の重要機能において、再現性の低い致命的なバグを発見。ログファイルを詳細に分析して発生条件を特定し、開発チームに共有したことで、リリース前に修正が間に合った。
          </p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-1.5">学び</h4>
          <ul className="space-y-1 text-xs leading-relaxed">
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>QA視点だけでなく、エンジニア視点を持って不具合を見ることの重要性</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>再現手順や状況を正確かつ簡潔に伝えることの重要性</span>
            </li>
          </ul>
        </div>
      </>
    ),
    tags: ['Backlog', 'バグ管理', 'テスト設計'],
    delayClass: 'animation-delay-100',
  },
  {
    title: 'イベント運営（企画責任者）',
    date: '2025年3月',
    org: '岳文会（山岳サークル） / SHIBUYA DAIA',
    icon: <EventIcon />,
    body: (
      <>
        <div>
          <h4 className="font-medium text-gray-800 mb-1.5">概要</h4>
          <p className="text-xs leading-relaxed">
            渋谷のライブハウス「SHIBUYA DAIA」を会場とした卒業生追い出しイベント（約75名規模）を企画・運営。企画段階から当日運営、会計まで一貫して担当。
          </p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-1.5">担当したこと</h4>
          <ul className="space-y-1 text-xs leading-relaxed">
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>日程調整、会場手配、予算設計（参加費の目安設定を含む）</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>告知と参加者管理、当日の進行と全体のとりまとめ</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>運営フローのテンプレート化と次年度への引き継ぎ資料作成</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-1.5">成果</h4>
          <p className="text-xs leading-relaxed">
            資料化の取り組みが評価され、2026年3月には後輩がこのノウハウを活用して同じ会場でイベントを開催することが決定。
          </p>
        </div>
      </>
    ),
    tags: ['プロジェクト管理', 'リーダーシップ', '60名規模'],
    delayClass: 'animation-delay-200',
  },
  {
    title: 'PR TIMESハッカソン',
    date: '2025年8月（3日間）',
    org: 'PR TIMES主催 / 4人チーム',
    icon: <HackathonIcon />,
    body: (
      <>
        <div>
          <h4 className="font-medium text-gray-800 mb-1.5">概要</h4>
          <p className="text-xs leading-relaxed">
            「プレスリリースをAIで添削する」WebアプリをPR TIMES主催のハッカソンで4人チームが開発。3日間の短期集中開発。
          </p>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-1.5">担当</h4>
          <ul className="space-y-1 text-xs leading-relaxed">
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>バックエンド担当として、AI APIを呼び出すエンドポイントを実装</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-300 mt-0.5">—</span>
              <span>Gitブランチ運用・プルリクエストベースのチーム開発フローを整備</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-800 mb-1.5">学び</h4>
          <p className="text-xs leading-relaxed">
            短期チーム開発では「最低限のGit運用ルールとコーディング規約を揃えること」が開発スピードと品質の両方に直結することを実感した。
          </p>
        </div>
      </>
    ),
    tags: ['チーム開発', '生成AI', 'Git運用'],
    delayClass: 'animation-delay-300',
  },
  {
    title: '塾講師',
    date: '約1年間',
    icon: <TeachIcon />,
    body: (
      <div className="space-y-2 text-xs text-gray-600 leading-relaxed">
        <p>小学生〜高校生に数学・英語・理科などを指導。</p>
        <p>
          最初は説明がうまくできなかったが、「結論→理由→具体例」の順で話すことを意識し、板書やメモの構成を工夫することで、少しずつ理解してもらえる場面が増えた。
        </p>
      </div>
    ),
    tags: ['教育', 'コミュニケーション'],
    delayClass: 'animation-delay-400',
  },
  {
    title: 'DJサークル',
    date: '1年間',
    icon: <MusicIcon />,
    body: (
      <p className="text-xs text-gray-600 leading-relaxed">
        イベントでのDJとして、会場の雰囲気を見ながら曲を選ぶ経験を積んだ。周りを観察して、何が求められているかを考えるクセがついた。
      </p>
    ),
    tags: [],
    delayClass: 'animation-delay-500',
  },
];

export default function Experience() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900">Experience</h1>
          <p className="text-gray-500 mt-1 text-sm">経験・実績</p>
        </div>

        <section className="mb-12">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Work & Activities
          </h2>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-6">
              {items.map((item) => (
                <article
                  key={item.title}
                  className={`relative pl-14 animate-fade-in ${item.delayClass}`}
                >
                  <div
                    className="absolute left-3 top-1 w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center"
                    style={{ borderColor: '#0a66c2' }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: '#0a66c2' }}
                    />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2]">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h3 className="font-semibold text-gray-900">{item.title}</h3>
                          <span className="text-xs text-gray-400">{item.date}</span>
                        </div>
                        {item.org && <p className="text-sm text-gray-500 mt-0.5">{item.org}</p>}
                      </div>
                    </div>

                    <div className="space-y-4 text-sm text-gray-600 mt-4">{item.body}</div>

                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="animate-fade-in animation-delay-500">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Education
          </h2>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

            <article className="relative pl-14">
              <div
                className="absolute left-3 top-1 w-4 h-4 rounded-full bg-white border-2 flex items-center justify-center"
                style={{ borderColor: '#0a66c2' }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#0a66c2' }}
                />
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a66c2]">
                    <EduIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">早稲田大学</h3>
                    <p className="text-sm text-gray-500 mt-0.5">教育学部 数学科</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
