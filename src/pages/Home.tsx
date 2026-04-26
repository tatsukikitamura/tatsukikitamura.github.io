import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TYPING_TEXT = 'Software Engineer';

export default function Home() {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;
    el.textContent = '';

    let i = 0;
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const type = () => {
      if (cancelled) return;
      if (i < TYPING_TEXT.length) {
        el.textContent = TYPING_TEXT.slice(0, i + 1);
        i++;
        timeouts.push(setTimeout(type, 80));
      } else {
        const cursor = document.createElement('span');
        cursor.className = 'cursor-blink';
        cursor.textContent = '|';
        el.appendChild(cursor);
      }
    };

    timeouts.push(setTimeout(type, 700));

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Tatsuki Kitamura
          </h1>
          <div
            className="text-lg font-medium mb-5 h-7 animate-fade-in animation-delay-100"
            style={{ color: '#0a66c2' }}
          >
            <span ref={typingRef} />
          </div>
          <p className="text-gray-500 text-sm mb-8 animate-fade-in animation-delay-200">
            早稲田大学 数学科 &nbsp;·&nbsp; Tokyo, Japan
          </p>
          <div className="flex flex-wrap items-center gap-3 animate-fade-in animation-delay-300">
            <a
              href="https://github.com/tatsukikitamura"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-500 text-sm font-medium transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <Link
              to="/experience"
              className="px-5 py-2 rounded-lg text-white text-sm font-medium transition-colors bg-[#0a66c2] hover:bg-[#004182]"
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-500 text-sm font-medium transition-colors"
            >
              Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Featured Work</h2>
          <p className="text-gray-500 text-sm mb-8">アイデアを形にしたプロジェクト</p>

          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/projects/yamatomo"
              className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
            >
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0a66c2] transition-colors text-sm">
                Yamatomo
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                登山者同士が繋がるコミュニティアプリ。iOS（SwiftUI）とWeb（React）を並行開発。
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs px-2 py-0.5 bg-orange-50 text-orange-700 rounded font-medium">
                  SwiftUI
                </span>
                <span className="text-xs px-2 py-0.5 bg-sky-50 text-sky-600 rounded font-medium">
                  React
                </span>
                <span className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 rounded font-medium">
                  Firebase
                </span>
              </div>
              <span className="text-xs font-medium text-[#0a66c2]">詳しく見る →</span>
            </Link>

            <Link
              to="/projects/atcoder"
              className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
            >
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0a66c2] transition-colors text-sm">
                Competitive Programming
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                AtCoder Algorithm（茶色）・Heuristic（水色）。約2年継続中。
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 rounded font-medium">
                  Algorithm 茶
                </span>
                <span className="text-xs px-2 py-0.5 bg-cyan-50 text-cyan-700 rounded font-medium">
                  Heuristic 水
                </span>
                <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">
                  Python / C++
                </span>
              </div>
              <span className="text-xs font-medium text-[#0a66c2]">詳しく見る →</span>
            </Link>

            <Link
              to="/projects/mbti-app"
              className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow group"
            >
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0a66c2] transition-colors text-sm">
                MBTI × 生成AI
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">
                物語形式のMBTI診断。生成AIで無意識の価値観を引き出す体験型アプリ。
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs px-2 py-0.5 bg-red-50 text-red-600 rounded font-medium">
                  Rails
                </span>
                <span className="text-xs px-2 py-0.5 bg-green-50 text-green-700 rounded font-medium">
                  OpenAI
                </span>
                <span className="text-xs px-2 py-0.5 bg-purple-50 text-purple-600 rounded font-medium">
                  Redis
                </span>
              </div>
              <span className="text-xs font-medium text-[#0a66c2]">詳しく見る →</span>
            </Link>
          </div>

          <div className="mt-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0a66c2] transition-colors"
            >
              すべてのプロジェクトを見る
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
