import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GitHubIcon } from '../components/Icons';

const ASCII_LINES = [
  '████████╗ █████╗ ████████╗███████╗██╗   ██╗██╗  ██╗██╗',
  '╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝██║   ██║██║ ██╔╝██║',
  '   ██║   ███████║   ██║   ███████╗██║   ██║█████╔╝ ██║',
  '   ██║   ██╔══██║   ██║   ╚════██║██║   ██║██╔═██╗ ██║',
  '   ██║   ██║  ██║   ██║   ███████║╚██████╔╝██║  ██╗██║',
  '   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝',
];

const ROLES = [
  'Software Engineer',
  'Web Developer',
  'Competitive Programmer',
];

type Phase = 'typing' | 'hold' | 'erasing';

const FEATURED = [
  {
    id: '01',
    to: '/projects/yamatomo',
    title: 'Yamatomo',
    sub: '登山者のコミュニティアプリ。iOS + Web 並行開発。',
    tag: 'SwiftUI · React · Firebase',
  },
  {
    id: '02',
    to: '/projects/atcoder',
    title: 'AtCoder',
    sub: 'Algorithm 茶 / Heuristic 青（1603）。約2年継続中。',
    tag: 'Python · C++',
  },
  {
    id: '03',
    to: '/projects/mbti-app',
    title: 'MBTI × AI',
    sub: '物語形式の MBTI 診断 × 生成AI。',
    tag: 'Rails · OpenAI · Redis',
  },
];

export default function Home() {
  const [idx, setIdx] = useState(0);
  const [partial, setPartial] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const noiseRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const target = ROLES[idx]!;
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (phase === 'typing') {
      if (partial.length < target.length) {
        timer = setTimeout(() => setPartial(target.slice(0, partial.length + 1)), 65);
      } else {
        timer = setTimeout(() => setPhase('hold'), 1400);
      }
    } else if (phase === 'hold') {
      timer = setTimeout(() => setPhase('erasing'), 800);
    } else {
      if (partial.length > 0) {
        timer = setTimeout(() => setPartial(target.slice(0, partial.length - 1)), 28);
      } else {
        setIdx((i) => (i + 1) % ROLES.length);
        setPhase('typing');
      }
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [partial, phase, idx]);

  useEffect(() => {
    const canvas = noiseRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf = 0;
    let t = 0;
    let alive = true;
    const draw = () => {
      if (!alive) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      const cols = Math.floor(w / 20);
      const rows = Math.floor(h / 20);
      const sx = w / cols;
      const sy = h / rows;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const n = (Math.sin(i * 0.4 + t * 0.6) + Math.cos(j * 0.5 - t * 0.5)) * 0.5 + 0.5;
          const a = n * 0.18 + 0.04;
          ctx.fillStyle = `rgba(10,102,194,${a})`;
          ctx.fillRect(i * sx + sx / 2 - 0.6, j * sy + sy / 2 - 0.6, 1.2, 1.2);
        }
      }
      t += 0.012;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <section className="relative overflow-hidden">
        <canvas ref={noiseRef} className="absolute inset-0 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-12">
          <div className="font-mono text-[11px] text-gray-500 tracking-[0.22em] mb-5 animate-fade-in">
            <span className="text-[#0a66c2]">●</span>&nbsp;&nbsp;ONLINE — TOKYO
          </div>

          <div
            className="font-mono text-gray-900 animate-fade-in animation-delay-100 inline-block"
            style={{
              fontSize: 'clamp(8px, 2.4vw, 13px)',
              lineHeight: 1,
              letterSpacing: 0,
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            }}
          >
            {ASCII_LINES.map((line, i) => (
              <div
                key={i}
                className="whitespace-pre"
                style={{ marginLeft: `${(ASCII_LINES.length - 1 - i) * 0.6}em` }}
              >
                {line}
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-baseline gap-3 font-mono text-base sm:text-lg animate-fade-in animation-delay-200">
            <span className="text-gray-400">&gt;</span>
            <span className="text-gray-900">I am a</span>
            <span className="font-semibold text-[#0a66c2] border-b border-[#0a66c2]/30 pb-0.5 min-w-[260px] inline-flex items-center">
              {'​'}
              {partial}
              <span className="inline-block w-2 h-[18px] bg-[#0a66c2] ml-0.5 cursor-blink" />
            </span>
          </div>

          <div className="mt-3 font-mono text-xs sm:text-sm text-gray-500 animate-fade-in animation-delay-300">
            // Rails / React / SwiftUI
          </div>

          <div className="mt-7 flex flex-nowrap gap-2 sm:gap-3 font-mono text-[11px] sm:text-sm animate-fade-in animation-delay-400">
            <Link
              to="/projects"
              className="px-3 sm:px-5 py-2 sm:py-2.5 rounded text-white font-semibold tracking-wide bg-[#0a66c2] hover:bg-[#004182] transition-colors whitespace-nowrap"
            >
              projects
            </Link>
            <Link
              to="/experience"
              className="px-3 sm:px-5 py-2 sm:py-2.5 rounded border border-gray-300 bg-white text-gray-900 font-medium hover:border-gray-500 transition-colors whitespace-nowrap"
            >
              experience
            </Link>
            <a
              href="https://github.com/tatsukikitamura"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-5 py-2 sm:py-2.5 rounded border border-gray-300 bg-white text-gray-900 font-medium hover:border-gray-500 transition-colors inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <GitHubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> github
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="font-mono text-[11px] text-gray-500 tracking-[0.22em] mb-4">
            ━━━ FEATURED WORK ━━━
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {FEATURED.map((p) => (
              <Link
                key={p.id}
                to={p.to}
                className="block border border-gray-200 bg-gray-50 hover:bg-[#eef5fc] hover:border-[#0a66c2] transition-colors p-5 rounded font-mono"
              >
                <div className="text-[11px] text-gray-400 mb-2">[{p.id}]</div>
                <div
                  className="text-lg font-bold text-gray-900 mb-1.5"
                  style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                >
                  {p.title}
                </div>
                <div
                  className="text-xs text-gray-600 mb-3 leading-relaxed"
                  style={{ fontFamily: 'Sora, system-ui, sans-serif' }}
                >
                  {p.sub}
                </div>
                <div className="text-[10px] font-semibold tracking-wide text-[#0a66c2]">
                  {p.tag}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-7 font-mono text-xs text-gray-500">
            <Link to="/projects" className="text-[#0a66c2] hover:underline">
              $ ls projects/ --all →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
