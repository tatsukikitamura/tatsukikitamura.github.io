import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">404 - Not Found</h1>
        <p className="text-gray-500 text-sm mb-8">お探しのページは見つかりませんでした。</p>
        <Link
          to="/"
          className="inline-block px-5 py-2 rounded-lg text-white text-sm font-medium transition-colors"
          style={{ background: '#0a66c2' }}
        >
          ホームに戻る
        </Link>
      </div>
    </section>
  );
}
