import ProjectBackLink from '../components/ProjectBackLink';
import { GitHubIcon } from '../components/Icons';

export default function ProjectMbti() {
  return (
    <main className="pt-20 pb-8 px-4 max-w-4xl mx-auto">
      <ProjectBackLink />

      <div className="mb-12 opacity-0 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">MBTI × 生成AI体験アプリ</h1>
        <p className="text-gray-500 mt-2">2024年6月〜2024年8月（3ヵ月）</p>
      </div>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-100">
        <h2 className="text-xl font-bold tracking-tight mb-4">概要</h2>
        <p className="text-gray-600 leading-relaxed">
          MBTI診断と生成AIを組み合わせた体験型Webアプリケーション。ユーザーの回答からMBTIタイプを推定し、AIが音楽・写真・ストーリーなどを自動生成して体験として提供する。企画・開発・公開まで、すべて個人で担当。
        </p>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-200">
        <h2 className="text-xl font-bold tracking-tight mb-4">使用技術</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm">
            Ruby on Rails
          </span>
          <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">
            OpenAI API
          </span>
          <span className="px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-sm">Redis</span>
          <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm">
            Heroku
          </span>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-300">
        <h2 className="text-xl font-bold tracking-tight mb-4">解決しようとした課題</h2>
        <div className="space-y-4 text-gray-600">
          <p>従来のMBTI診断アプリにあった課題：</p>
          <ul className="space-y-2 ml-4">
            <li>• 質問同士の文脈がなく、ユーザーが回答に迷いやすい</li>
            <li>• 用意された質問に自分を当てはめる形式では、本来の性格を正確に測りにくい</li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-3xl border border-gray-200 p-8 mb-6 opacity-0 animate-fade-in-up animation-delay-400">
        <h2 className="text-xl font-bold tracking-tight mb-4">工夫した点</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">「物語モード」の実装</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                • ユーザーは「ホラー」「アドベンチャー」「ミステリー」、完全オリジナルの「クリエイター」などの世界を選択
              </li>
              <li>
                •
                AIが生成する状況に応じて選択肢を選び続けることで、無意識の価値観や行動パターンが自然に表に出るようにした
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">診断結果の出し方</h3>
            <p className="text-gray-600 text-sm">
              物語の内容も加味してMBTIタイプを出力し、従来より納得感のある結果になるようにした
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">技術的な工夫</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• OpenAI APIの呼び出しを共通化し、エラー時に別ルートで処理する仕組みを実装</li>
              <li>• 前の質問の内容や何問目かによって物語の段階を変更し、AIの出力の質を向上</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <section className="bg-white rounded-3xl border border-gray-200 p-8 opacity-0 animate-fade-in-up animation-delay-500">
          <h2 className="text-xl font-bold tracking-tight mb-4">成果</h2>
          <p className="text-gray-600 text-sm">
            診断結果に物語体験を加えることで、ユーザーが自分の性格をより自然に受け止めやすい形にできた。
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-gray-200 p-8 opacity-0 animate-fade-in-up animation-delay-500">
          <h2 className="text-xl font-bold tracking-tight mb-4">学び</h2>
          <p className="text-gray-600 text-sm">
            ユーザー体験を設計する際、「どんなUIを作るか」だけでなく、「どうすれば自然に行動や本音を引き出せるか」を考えることの重要性を実感した。
          </p>
        </section>
      </div>

      <section className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-8 text-white opacity-0 animate-fade-in-up animation-delay-500">
        <h2 className="text-xl font-bold tracking-tight mb-4">リンク</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/tatsukikitamura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://mbti-search-854b363bf31b.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            URL
          </a>
        </div>
      </section>
    </main>
  );
}
