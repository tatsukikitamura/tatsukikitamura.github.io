import { Link } from 'react-router-dom';
import type { Project } from '../types';
import { GitHubIcon } from '../components/Icons';

const projects: Project[] = [
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
    featured: true,
    link: '/projects/opendata',
  },
  {
    id: 'atcoder',
    title: 'AtCoder（競技プログラミング）',
    description:
      'Algorithm 茶色・Heuristic 水色ランク到達。直近AHCにて78位・黄色パフォーマンスを記録。約2年継続的に取り組み中。',
    period: '2024年4月〜2026年1月（継続中）',
    tags: ['Python', 'C++', 'アルゴリズム'],
    featured: false,
    link: '/projects/atcoder',
  },
];

export default function Projects() {
  return (
    <main className="pt-20 pb-8 px-4 max-w-4xl mx-auto">
      <div className="mb-12 opacity-0 animate-fade-in-up mt-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-gray-500 mt-2">開発したプロジェクト</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <Link
            key={project.id}
            to={project.link}
            className="bg-white rounded-3xl border border-gray-200 p-6 hover:border-gray-300 hover:bg-gray-50/50 transition-all opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div>
              <div className="flex-1">
                <h3 className="font-bold text-lg tracking-tight">{project.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{project.period}</p>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center opacity-0 animate-fade-in-up animation-delay-500">
        <a
          href="https://github.com/tatsukikitamura"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          <GitHubIcon />
          View all on GitHub
        </a>
      </div>
    </main>
  );
}
