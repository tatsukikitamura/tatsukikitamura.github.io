import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { GitHubIcon } from '../components/Icons';
import { getTechIcon } from '../lib/techIcons';

const projects: Project[] = [
  {
    id: 'yamatomo',
    title: 'Yamatomo（登山コミュニティアプリ）',
    description:
      '登山者同士が繋がれるコミュニティアプリ。iOSアプリ（SwiftUI + Firebase）とWeb版（React + Firebase）を並行開発。山ごとのベースキャンプやAIによるコミュニティ生成など、登山特化の体験を提供。',
    period: '2026年4月〜現在（チーム開発）',
    tags: ['SwiftUI', 'React', 'TypeScript', 'Firebase', 'OpenAI API'],
    featured: true,
    link: '/projects/yamatomo',
  },
  {
    id: 'atcoder',
    title: 'AtCoder（競技プログラミング）',
    description:
      'Algorithm 茶色・Heuristic 水色ランク到達。直近AHCにて78位・黄色パフォーマンスを記録。約2年継続的に取り組み中。',
    period: '2024年4月〜2026年1月（継続中）',
    tags: ['Python', 'C++', 'アルゴリズム'],
    featured: true,
    link: '/projects/atcoder',
  },
  {
    id: 'mbti-app',
    title: 'MBTI × 生成AI体験アプリ',
    description:
      'MBTI診断と生成AIを組み合わせた体験型Webアプリ。物語形式の診断モードで、無意識の価値観を引き出す新しいアプローチを実装。',
    period: '2024年6月〜2024年8月（3ヵ月）',
    tags: ['Ruby on Rails', 'OpenAI API', 'Redis', 'Heroku'],
    featured: true,
    link: '/projects/mbti-app',
  },
  {
    id: 'opendata',
    title: 'ノー遅延乗り換え（Open Data Challenge 2025）',
    description:
      '未来の遅延リスクを予測し、「絶対に遅刻できない人」を安全に目的地まで送り届けるルート検索アプリ。公共交通オープンデータチャレンジ2025出品作品。',
    period: '2025年10月〜現在（個人開発）',
    tags: ['Python (FastAPI)', 'Vite + Vanilla JS', 'PostgreSQL', 'OpenAI API'],
    featured: false,
    link: '/projects/opendata',
  },
];

export default function Projects() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-500 mt-1 text-sm">開発したプロジェクト</p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:bg-gray-50/50 transition-all animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className="font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-500 text-xs mt-1">{project.period}</p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => {
                  const icon = getTechIcon(tag);
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium"
                    >
                      {icon && (
                        <img
                          src={icon}
                          className="w-3.5 h-3.5 flex-shrink-0"
                          alt=""
                          loading="lazy"
                        />
                      )}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center animate-fade-in animation-delay-500">
          <a
            href="https://github.com/tatsukikitamura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-800 transition-colors"
          >
            <GitHubIcon />
            View all on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
