import { GitHubIcon } from '../components/Icons';

export default function Contact() {
  return (
    <main className="pt-20 pb-8 px-4 max-w-4xl mx-auto">
      <div className="mb-12 opacity-0 animate-fade-in-up mt-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Please Give Me a Job!</h1>
        <p className="text-gray-500 mt-4 text-lg">2027年4月入社 新卒採用希望</p>
      </div>

      <section className="rounded-3xl p-8 text-zinc-700 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
        <h2 className="text-2xl font-bold mb-4">はじめに</h2>
        <p className="text-zinc-700 leading-relaxed">
          早稲田大学3年の北村健紀です。
          <br />
          独学でプログラミングを始めて約1年半。
          <br />
          いまだにわからないことだらけですが少しずつ成長しています。そのはずです。
        </p>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
        <h2 className="text-xl font-bold tracking-tight mb-6">希望する環境</h2>
        <ul className="space-y-4 text-gray-600">
          {[
            <>
              <strong>自社開発</strong>で、プロダクトに愛着を持てる環境
            </>,
            <>
              <strong>技術力</strong>を磨きながら、ビジネスも学べる環境
            </>,
            <>
              <strong>若手でも挑戦</strong>できる、成長機会のある環境
            </>,
          ].map((children, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0a66c2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{children}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
        <h2 className="text-xl font-bold tracking-tight mb-6">私の強み</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">独学でやり抜く力</h3>
            <p className="text-xs text-gray-500">1年半でRails・Python・競プロまで</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">アイデアを形に</h3>
            <p className="text-xs text-gray-500">MBTI診断アプリを個人開発</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-gray-900 mb-1 text-sm">数学的思考</h3>
            <p className="text-xs text-gray-500">数学科＋AtCoder茶色</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-400">
        <h2 className="text-xl font-bold tracking-tight mb-6">スペック</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-2xl font-bold text-indigo-600">1.5年</p>
            <p className="text-xs text-gray-500 mt-1">プログラミング歴</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-2xl font-bold text-amber-600">茶色</p>
            <p className="text-xs text-gray-500 mt-1">AtCoderランク</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-2xl font-bold text-green-600">700</p>
            <p className="text-xs text-gray-500 mt-1">TOEIC</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-2xl font-bold text-red-600">3個</p>
            <p className="text-xs text-gray-500 mt-1">個人開発プロジェクト</p>
          </div>
        </div>
      </section>

      <section className="from-gray-900 to-gray-800 rounded-3xl p-8 text-zinc-700 text-center opacity-0 animate-fade-in-up animation-delay-500">
        <h2 className="text-2xl font-bold mb-4">お声がけください！</h2>
        <p className="text-zinc-700 mb-6">カジュアル面談、大歓迎です</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/tatsukikitamura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://x.com/oreennginia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-zinc-700 rounded-full font-medium hover:bg-white/20 transition-colors"
          >
            X (Twitter)
          </a>
        </div>
      </section>
    </main>
  );
}
