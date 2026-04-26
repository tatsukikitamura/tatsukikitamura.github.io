import { GitHubIcon, MailIcon } from '../components/Icons';
import { getTechIcon } from '../lib/techIcons';
import PageHeader from '../components/PageHeader';

const TECH_STACK: Record<'frontend' | 'backend' | 'infra', string[]> = {
  frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Next.js'],
  backend: ['Ruby on Rails', 'Python', 'PostgreSQL', 'MySQL'],
  infra: ['GitHub Pages', 'Vercel', 'AWS', 'Docker', 'Git'],
};

function TechTag({ name, color }: { name: string; color: string }) {
  const icon = getTechIcon(name);
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${color}`}
    >
      {icon && <img src={icon} className="w-4 h-4 flex-shrink-0" alt="" loading="lazy" />}
      {name}
    </span>
  );
}

export default function Contact() {
  return (
    <main className="pt-24 pb-8 px-4 max-w-4xl mx-auto">
      <PageHeader
        command="cat contact.md"
        title="Web制作のご依頼、承ります"
        subtitle="就活も終わり、本格的にWeb制作のお仕事を受け付けはじめました"
      />

      <section className="rounded-3xl p-8 text-zinc-700 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
        <h2 className="text-2xl font-bold mb-4">はじめに</h2>
        <p className="leading-relaxed">
          早稲田大学4年の北村健紀です。
          <br />
          独学でプログラミングを始めて約1年半、ReactやRailsを使ったWeb開発を続けてきました。
          <br />
          就活がひと段落したので、これからはWeb制作のご依頼を積極的に受け付けていこうと思っています。
          <br />
          小規模なLPから個人開発レベルのWebアプリまで、お気軽にご相談ください。
        </p>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
        <h2 className="text-xl font-bold tracking-tight mb-6">対応できる制作内容</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'ランディングページ (LP)',
              desc: '商品・サービス紹介のための1枚もののページ',
            },
            {
              title: 'コーポレート / ポートフォリオサイト',
              desc: '数ページ構成の小〜中規模サイト',
            },
            {
              title: 'Webアプリケーション',
              desc: 'ログイン機能・DB連携を伴う動的なサービス',
            },
            {
              title: '既存サイトの改修・機能追加',
              desc: 'デザイン修正、レスポンシブ対応、新機能追加など',
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-5">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
        <h2 className="text-xl font-bold tracking-tight mb-6">使用技術</h2>
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">FRONTEND</p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.frontend.map((name) => (
                <TechTag key={name} name={name} color="bg-indigo-50 text-indigo-700" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">BACKEND</p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.backend.map((name) => (
                <TechTag key={name} name={name} color="bg-emerald-50 text-emerald-700" />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">INFRA / OTHERS</p>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.infra.map((name) => (
                <TechTag key={name} name={name} color="bg-amber-50 text-amber-700" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-400">
        <h2 className="text-xl font-bold tracking-tight mb-6">制作の流れ</h2>
        <ol className="space-y-4">
          {[
            { step: '01', title: 'お問い合わせ', desc: 'メールやXなどからお気軽にご連絡ください' },
            { step: '02', title: 'ヒアリング', desc: 'やりたいこと・予算・納期などを伺います' },
            { step: '03', title: 'お見積り・ご提案', desc: '内容に応じて金額とスケジュールをご提示します' },
            { step: '04', title: '制作・納品', desc: '進捗を共有しながら制作を進め、納品します' },
          ].map((item) => (
            <li key={item.step} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center">
                {item.step}
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-500">
        <h2 className="text-xl font-bold tracking-tight mb-6">料金の目安</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <p className="text-sm text-gray-500 mb-1">LP制作</p>
            <p className="text-2xl font-bold text-gray-900">要相談</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <p className="text-sm text-gray-500 mb-1">コーポレートサイト</p>
            <p className="text-2xl font-bold text-gray-900">要相談</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 text-center">
            <p className="text-sm text-gray-500 mb-1">Webアプリ</p>
            <p className="text-2xl font-bold text-gray-900">要相談</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          ※ 学生のため柔軟に対応可能です。内容に応じて調整しますので、まずはご相談ください。
        </p>
      </section>

      <section className="rounded-3xl p-8 text-center opacity-0 animate-fade-in-up animation-delay-500 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">お問い合わせ</h2>
        <p className="text-gray-600 mb-6">
          ご相談・お見積りは無料です。お気軽にご連絡ください。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="mailto:tatukikitamura123456@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            <MailIcon />
            メールで相談する
          </a>
          <a
            href="https://github.com/tatsukikitamura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
