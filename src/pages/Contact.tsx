import { GitHubIcon, InstagramIcon, MailIcon } from '../components/Icons';
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
        <h2 className="text-xl font-bold tracking-tight mb-2">対応できる制作内容</h2>
        <p className="text-sm text-gray-500 mb-6">
          「こんなサイトが欲しい」をそのまま形にします。下記はあくまで一例です。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              tag: '個人向け',
              title: '個人用 Website',
              desc: '自己紹介・SNSリンク・活動記録などをひとつにまとめる、自分専用のホームページ。趣味や発信活動の拠点として。',
              points: ['自己紹介ページ', 'SNS / 各種リンク集約', 'カスタムドメイン対応'],
            },
            {
              tag: '学生向け',
              title: '就活用ポートフォリオサイト',
              desc: 'ガクチカ・作品・スキルをまとめ、エントリーシートや面接で「URLひとつ」で渡せる就活専用ページ。',
              points: ['プロフィール / 経歴', '作品・成果物の掲載', 'スマホ最適化'],
            },
            {
              tag: '店舗・事業向け',
              title: 'お店 / コーポレートサイト',
              desc: 'カフェ・サロン・小規模事業のための数ページ構成サイト。営業時間やメニュー、お問い合わせフォームまで。',
              points: ['トップ / About / メニュー', 'お問い合わせフォーム', 'Google Maps 埋め込み'],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-5 hover:border-gray-400 transition-colors"
            >
              <span className="inline-block text-[10px] font-semibold tracking-wider text-indigo-600 bg-indigo-50 rounded-full px-2 py-0.5 mb-2">
                {item.tag}
              </span>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.desc}</p>
              <ul className="space-y-1">
                {item.points.map((p) => (
                  <li
                    key={p}
                    className="text-xs text-gray-600 flex items-start gap-1.5"
                  >
                    <span className="text-indigo-500 mt-0.5">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-5">
          ※ 上記以外でも「こういうのできる？」というご相談は大歓迎です。
        </p>
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
        <h2 className="text-xl font-bold tracking-tight mb-6">料金の目安</h2>
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <p className="text-sm text-gray-500 mb-2">制作費</p>
          <p className="text-5xl font-bold text-gray-900">
            無料<span className="text-2xl align-top">※</span>
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          ※ 制作費自体は無料でお引き受けしています。ただし、サーバー代・ドメイン代・有料APIの利用料など、
          運用に必要な実費はご負担いただきます。予めご了承ください。
        </p>
      </section>

      <section className="rounded-3xl p-8 text-center opacity-0 animate-fade-in-up animation-delay-500 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100">
        <h2 className="text-2xl font-bold mb-3 text-gray-900">お問い合わせ</h2>
        <p className="text-gray-600 mb-6">
          ご相談・お見積りは無料です。InstagramのDMが一番反応が早いです。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://instagram.com/t4t2uk1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <InstagramIcon />
            Instagram でDM
          </a>
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
