import {
  LocationIcon,
  EduIcon,
  CodeIcon,
  LangIcon,
  GitHubIcon,
  AtCoderIcon,
} from '../components/Icons';
import PageHeader from '../components/PageHeader';

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

type TechItem = {
  name: string;
  icon: string | null;
  bg: string;
  text: string;
};

const TECH_STACK: Record<string, TechItem[]> = {
  languages: [
    { name: 'Ruby', icon: `${DI}/ruby/ruby-original.svg`, bg: 'bg-red-50', text: 'text-red-700' },
    { name: 'Python', icon: `${DI}/python/python-original.svg`, bg: 'bg-blue-50', text: 'text-blue-700' },
    { name: 'JavaScript', icon: `${DI}/javascript/javascript-original.svg`, bg: 'bg-yellow-50', text: 'text-yellow-700' },
    { name: 'C++', icon: `${DI}/cplusplus/cplusplus-original.svg`, bg: 'bg-gray-100', text: 'text-gray-700' },
  ],
  frameworks: [
    { name: 'Ruby on Rails', icon: `${DI}/rails/rails-plain.svg`, bg: 'bg-red-50', text: 'text-red-700' },
    { name: 'FastAPI', icon: `${DI}/fastapi/fastapi-original.svg`, bg: 'bg-green-50', text: 'text-green-700' },
    { name: 'React', icon: `${DI}/react/react-original.svg`, bg: 'bg-cyan-50', text: 'text-cyan-700' },
    { name: 'Stimulus', icon: null, bg: 'bg-orange-50', text: 'text-orange-700' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: `${DI}/postgresql/postgresql-original.svg`, bg: 'bg-blue-50', text: 'text-blue-700' },
    { name: 'SQLite3', icon: `${DI}/sqlite/sqlite-original.svg`, bg: 'bg-gray-100', text: 'text-gray-700' },
  ],
  infra: [
    { name: 'Docker', icon: `${DI}/docker/docker-original.svg`, bg: 'bg-blue-50', text: 'text-blue-700' },
    { name: 'Docker Compose', icon: `${DI}/docker/docker-original.svg`, bg: 'bg-gray-100', text: 'text-gray-700' },
    { name: 'Git', icon: `${DI}/git/git-original.svg`, bg: 'bg-orange-50', text: 'text-orange-700' },
    { name: 'GitHub', icon: `${DI}/github/github-original.svg`, bg: 'bg-gray-100', text: 'text-gray-700' },
    { name: 'Cursor', icon: null, bg: 'bg-purple-50', text: 'text-purple-700' },
  ],
  ai: [
    { name: 'OpenAI API', icon: `${DI}/openai/openai-original.svg`, bg: 'bg-green-50', text: 'text-green-700' },
    { name: 'LangChain', icon: null, bg: 'bg-orange-50', text: 'text-orange-700' },
  ],
};

function TechTag({ name, icon, bg, text }: TechItem) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${bg} ${text} rounded text-xs font-medium`}
    >
      {icon && <img src={icon} className="w-3.5 h-3.5 flex-shrink-0" alt="" loading="lazy" />}
      {name}
    </span>
  );
}

function TechGroup({ label, items }: { label: string; items: TechItem[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <TechTag key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <PageHeader command="cat about.md" title="About" subtitle="私について" />

        <section className="bg-white border border-gray-200 rounded-xl p-6 mb-5 animate-fade-in animation-delay-100">
          <h2 className="font-semibold text-gray-900 mb-4">Profile</h2>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-sm text-gray-600">
              <span className="text-gray-400">
                <LocationIcon />
              </span>
              <span>日本在住</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600">
              <span className="text-gray-400">
                <EduIcon />
              </span>
              <span>早稲田大学 数学科</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600">
              <span className="text-gray-400">
                <CodeIcon />
              </span>
              <span>プログラミング歴：約1年半（独学）</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-gray-600">
              <span className="text-gray-400">
                <LangIcon />
              </span>
              <span>TOEIC：700点</span>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://github.com/tatsukikitamura"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://atcoder.jp/users/oreccchi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="AtCoder"
            >
              <AtCoderIcon />
            </a>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6 mb-5 animate-fade-in animation-delay-200">
          <h2 className="font-semibold text-gray-900 mb-4">プログラミングを始めたきっかけ</h2>
          <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
            <p>
              中学3年生のとき、Fortniteしかしていなかった自分に、父がUnityの本を買ってきた。やってみたけどすぐ飽きた。本の通りに作るのが面白くなかった。
            </p>
            <p>
              その後、サーバーの立て方がわからないまま、好きなラッパーのサイトを自分で作って自分だけで見ていた。今思うと相当ニッチな遊びだった。
            </p>
            <p>
              大学3年でエンジニアを目指したのは、最初は数学科、就活しんどそうという理由だった。でもProgateを触ったらふつうにハマって、そこからAtCoderや個人開発やコンテスト提出まで手が広がった。
            </p>
            <p>
              もともと本の通りに作るのが嫌いだった人間が、今は自分のアイデアを実装まで持っていくのが一番の楽しみになっている。
            </p>
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6 mb-5 animate-fade-in animation-delay-300">
          <h2 className="font-semibold text-gray-900 mb-5">技術スタック</h2>
          <div className="space-y-5">
            <TechGroup label="言語" items={TECH_STACK.languages!} />
            <TechGroup label="フレームワーク・ライブラリ" items={TECH_STACK.frameworks!} />
            <TechGroup label="データベース" items={TECH_STACK.databases!} />
            <TechGroup label="インフラ・開発環境" items={TECH_STACK.infra!} />
            <TechGroup label="AI関連" items={TECH_STACK.ai!} />
          </div>
        </section>
      </div>
    </main>
  );
}
