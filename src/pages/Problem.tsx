import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const CLEARED_ASCII = String.raw`
 ██████╗██╗     ███████╗ █████╗ ██████╗ ███████╗██████╗
██╔════╝██║     ██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗
██║     ██║     █████╗  ███████║██████╔╝█████╗  ██║  ██║
██║     ██║     ██╔══╝  ██╔══██║██╔══██╗██╔══╝  ██║  ██║
╚██████╗███████╗███████╗██║  ██║██║  ██║███████╗██████╔╝
 ╚═════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═════╝`;

type Variant = 'normal' | 'success' | 'error' | 'dim';

type Line = {
  prompt?: string;
  text: string;
  variant?: Variant;
};

type Problem = {
  id: number;
  title: string;
  intro: string[];
  files: Record<string, string>;
  helpLines: string[];
  customCommands?: Record<string, string[]>;
  dynamicCommands?: Record<string, (args: string[]) => Line[]>;
  manPages?: Record<string, string[]>;
  successCommand: string | string[];
};

const PROMPT = 'tatsuki@dev ~ %';

const PROBLEMS: Problem[] = [
  {
    id: 1,
    title: 'Problem 1: 答えを読め',
    intro: ['ヒント: まず周りに何があるか確かめてみよう。'],
    files: {
      'answer.md': 'success',
    },
    helpLines: [
      'available commands:',
      '  ls            list directory contents',
      '  cat <file>    print file contents',
      '  clear         clear the screen',
      '  next          go to the next problem',
    ],
    successCommand: 'cat answer.md',
  },
  {
    id: 2,
    title: 'Problem 2: 紛れたコマンドを探せ',
    intro: ['ヒント: help の中に一つだけ毛色の違うやつがいる。'],
    files: {},
    helpLines: [
      'available commands:',
      '  ls            list directory contents',
      '  cat <file>    print file contents',
      '  pwd           print working directory',
      '  echo <text>   display a line of text',
      '  whoami        print effective user',
      '  clear         clear the terminal',
      '  hadouken      ???',
    ],
    customCommands: {
      hadouken: ['     ⊂(◉‿◉)つ━☆ﾟ.*･｡ﾟ', '       波動拳！！！'],
    },
    successCommand: 'hadouken',
  },
  {
    id: 3,
    title: 'Problem 3: 隠されたメッセージ',
    intro: ['ヒント: README から読み始めよう。表に出ていないものもある。'],
    files: {
      'README.md':
        'まず `ls -a` で隠しファイルを探せ。\n中身は rot13 で暗号化されている。`decode <text>` で復号できる。',
      '.encoded': 'fhpprff',
    },
    helpLines: [
      'available commands:',
      '  ls [-a]         list directory contents (-a: include hidden)',
      '  cat <file>      print file contents',
      '  decode <text>   rot13 decode',
      '  clear           clear the screen',
      '  next            go to the next problem',
    ],
    successCommand: 'decode fhpprff',
  },
  {
    id: 4,
    title: 'Problem 4: 鍵を探して暗号を解け',
    intro: ['ヒント: README → 環境 → 鍵付きファイル の順に探る。鍵は表に出ていない。'],
    files: {
      'README.md':
        'lock.txt はシーザー暗号で暗号化されている。\n鍵 (シフト量) は環境ファイルに置いた。\n`caesar <text> <n>` で n 文字シフトできる (負の値で逆方向)。',
      '.env': 'KEY=7',
      'lock.txt': 'zbjjlzz',
    },
    helpLines: [
      'available commands:',
      '  ls [-a]              list directory contents',
      '  cat <file>           print file contents',
      '  caesar <text> <n>    Caesar shift by n (negative reverses)',
      '  decode <text>        rot13 decode',
      '  clear                clear the screen',
      '  next                 go to the next problem',
    ],
    successCommand: ['caesar zbjjlzz -7', 'caesar zbjjlzz 19'],
  },
  {
    id: 5,
    title: 'Problem 5: 文書化されていないもの',
    intro: [
      'ヒント: 3つの ritual のうち正しく invoke できるのは1つだけ。',
      '       README → .rituals → man の順に追え。',
    ],
    files: {
      'README.md':
        '3つの ritual がある。だが正しく invoke できるのは1つだけ。\n各 ritual を man で調べ、無事に起動できる名前を見つけよ。',
      '.rituals': 'nheben\nrpyvcfr\nfbyfgvpr',
    },
    helpLines: [
      'available commands:',
      '  ls [-a]              list directory contents',
      '  cat <file>           print file contents',
      '  man <cmd>            show manual page for cmd',
      '  decode <text>        rot13 decode',
      '  invoke <ritual>      perform a registered ritual',
      '  clear                clear the screen',
      '  next                 go to the next problem',
    ],
    manPages: {
      ls: [
        'LS(1)                          Manual                          LS(1)',
        '',
        'NAME',
        '       ls -- list directory contents',
        '',
        'SYNOPSIS',
        '       ls [-a]',
        '',
        'DESCRIPTION',
        '       List files in the current directory. -a includes hidden entries.',
        '',
        'SEE ALSO',
        '       cat(1), man(1), head(1)',
      ],
      cat: [
        'CAT(1)                         Manual                         CAT(1)',
        '',
        'NAME',
        '       cat -- print file contents',
        '',
        'SYNOPSIS',
        '       cat <file>',
        '',
        'SEE ALSO',
        '       head(1), tail(1), man(1)',
      ],
      man: [
        'MAN(1)                         Manual                         MAN(1)',
        '',
        'NAME',
        '       man -- system manual interface',
        '',
        'SYNOPSIS',
        '       man <command>',
        '',
        'DESCRIPTION',
        '       Format and display the on-line manual pages.',
        '',
        'SEE ALSO',
        '       apropos(1), invoke(8), intro(7)',
      ],
      apropos: [
        'APROPOS(1)                     Manual                     APROPOS(1)',
        '',
        'NAME',
        '       apropos -- search descriptions',
        '',
        'DESCRIPTION',
        '       Not implemented in this shell. Refer to invoke(8) instead.',
      ],
      invoke: [
        'INVOKE(8)                  System Manager                  INVOKE(8)',
        '',
        'NAME',
        '       invoke -- perform a registered ritual',
        '',
        'SYNOPSIS',
        '       invoke <ritual>',
        '',
        'DESCRIPTION',
        '       Each ritual must have a manual entry to be safely invoked.',
        '       Ritual names live in the hidden manifest .rituals',
        '       (rot13-encoded; pipe each entry through decode(1)).',
        '',
        'SEE ALSO',
        '       rituals(5), decode(1)',
      ],
      rituals: [
        'RITUALS(5)                File Formats                   RITUALS(5)',
        '',
        'NAME',
        '       rituals -- ritual manifest format',
        '',
        'DESCRIPTION',
        '       The .rituals file lists known ritual names, one per line,',
        '       rot13-encoded. Decode each entry with decode(1), then consult',
        '       its corresponding man page. Only documented rituals can be',
        '       invoked.',
      ],
      decode: [
        'DECODE(1)                      Manual                     DECODE(1)',
        '',
        'NAME',
        '       decode -- rot13 decoder',
        '',
        'SYNOPSIS',
        '       decode <text>',
      ],
      eclipse: [
        'ECLIPSE(7)                    Manual                    ECLIPSE(7)',
        '',
        'NAME',
        '       eclipse -- the ritual of binding',
        '',
        'DESCRIPTION',
        '       The only fully documented ritual in this system. May be',
        '       invoked at any time to complete the rite.',
        '',
        'EXAMPLE',
        '       invoke eclipse',
      ],
    },
    dynamicCommands: {
      invoke: (args) => {
        if (args.length === 0) {
          return [{ text: 'usage: invoke <ritual>', variant: 'error' }];
        }
        const name = args[0]!;
        if (name === 'eclipse') {
          return [
            { text: 'invoke: binding to ritual "eclipse"...' },
            { text: 'invoke: rite completed.' },
            { text: 'success', variant: 'success' },
          ];
        }
        return [
          {
            text: `invoke: ritual "${name}" failed: no incantation found`,
            variant: 'error',
          },
        ];
      },
    },
    successCommand: 'invoke eclipse',
  },
];

function caesar(s: string, n: number): string {
  const shift = ((n % 26) + 26) % 26;
  return s.replace(/[A-Za-z]/g, (c) => {
    const code = c.charCodeAt(0);
    const base = code >= 97 ? 97 : 65;
    return String.fromCharCode(((code - base + shift) % 26) + base);
  });
}

function rot13(s: string): string {
  return s.replace(/[A-Za-z]/g, (c) => {
    const code = c.charCodeAt(0);
    const base = code >= 97 ? 97 : 65;
    return String.fromCharCode(((code - base + 13) % 26) + base);
  });
}

function welcomeLines(): Line[] {
  return [
    { text: 'Last login: ' + new Date().toString(), variant: 'dim' },
    { text: '' },
    { text: 'Welcome to tatsuki.dev problems shell.' },
    { text: '`success` を出力できればクリア。`help` でコマンド一覧。', variant: 'dim' },
  ];
}

function buildIntro(problem: Problem): Line[] {
  return [
    { text: '' },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', variant: 'dim' },
    { text: problem.title, variant: 'success' },
    { text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', variant: 'dim' },
    ...problem.intro.map((t) => ({ text: t, variant: 'dim' as const })),
    { text: '' },
  ];
}

function variantClass(v?: Variant): string {
  switch (v) {
    case 'success':
      return 'text-[#28c840]';
    case 'error':
      return 'text-[#ff5f57]';
    case 'dim':
      return 'text-gray-400';
    default:
      return '';
  }
}

export default function Problem() {
  const [problemIdx, setProblemIdx] = useState(0);
  const [solved, setSolved] = useState<Set<number>>(new Set());
  const [lines, setLines] = useState<Line[]>(() => [
    ...welcomeLines(),
    ...buildIntro(PROBLEMS[0]!),
  ]);
  const [input, setInput] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const celebrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  useEffect(() => {
    if (showCelebration) {
      celebrationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [showCelebration]);

  const current = PROBLEMS[problemIdx]!;

  const runCommand = (
    raw: string,
  ): { output: Line[]; clear?: boolean; advance?: boolean } => {
    const normalized = raw.trim().replace(/\s+/g, ' ');
    if (!normalized) return { output: [] };

    if (current.customCommands && current.customCommands[normalized]) {
      return {
        output: current.customCommands[normalized]!.map((t) => ({ text: t })),
      };
    }

    const [cmd, ...args] = normalized.split(' ');

    if (current.dynamicCommands && current.dynamicCommands[cmd!]) {
      return { output: current.dynamicCommands[cmd!]!(args) };
    }

    switch (cmd) {
      case 'ls': {
        const showHidden = args.includes('-a');
        const names = Object.keys(current.files).filter(
          (n) => showHidden || !n.startsWith('.'),
        );
        return {
          output: names.length === 0 ? [] : [{ text: names.join('  ') }],
        };
      }
      case 'cat': {
        if (args.length === 0) {
          return { output: [{ text: 'usage: cat <file>', variant: 'error' }] };
        }
        const name = args[0]!;
        const content = current.files[name];
        if (content === undefined) {
          return {
            output: [
              { text: `cat: ${name}: No such file or directory`, variant: 'error' },
            ],
          };
        }
        return { output: content.split('\n').map((t) => ({ text: t })) };
      }
      case 'help':
        return { output: current.helpLines.map((t) => ({ text: t })) };
      case 'clear':
        return { output: [], clear: true };
      case 'pwd':
        return { output: [{ text: '/Users/tatsuki' }] };
      case 'whoami':
        return { output: [{ text: 'tatsuki' }] };
      case 'echo':
        return { output: [{ text: args.join(' ') }] };
      case 'decode': {
        if (args.length === 0) {
          return { output: [{ text: 'usage: decode <text>', variant: 'error' }] };
        }
        return { output: [{ text: rot13(args.join(' ')) }] };
      }
      case 'man': {
        if (args.length === 0) {
          return {
            output: [{ text: 'What manual page do you want?', variant: 'error' }],
          };
        }
        const name = args[0]!;
        const page = current.manPages?.[name];
        if (!page) {
          return {
            output: [{ text: `No manual entry for ${name}`, variant: 'error' }],
          };
        }
        return { output: page.map((t) => ({ text: t })) };
      }
      case 'caesar': {
        if (args.length < 2) {
          return {
            output: [{ text: 'usage: caesar <text> <n>', variant: 'error' }],
          };
        }
        const n = Number(args[args.length - 1]);
        if (!Number.isInteger(n)) {
          return {
            output: [{ text: 'caesar: shift must be an integer', variant: 'error' }],
          };
        }
        const text = args.slice(0, -1).join(' ');
        return { output: [{ text: caesar(text, n) }] };
      }
      case 'next': {
        if (!solved.has(current.id)) {
          return {
            output: [
              { text: 'まずこの問題をクリアしてください。', variant: 'error' },
            ],
          };
        }
        if (problemIdx + 1 >= PROBLEMS.length) {
          return {
            output: [{ text: '🎉 全ての問題をクリア済みです。', variant: 'success' }],
          };
        }
        return { output: [], advance: true };
      }
      default:
        return {
          output: [{ text: `zsh: command not found: ${cmd}`, variant: 'error' }],
        };
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const raw = input;
    setInput('');

    const echoLine: Line = { prompt: PROMPT, text: raw };
    const { output, clear, advance } = runCommand(raw);

    if (clear) {
      setLines(welcomeLines());
      return;
    }

    if (advance) {
      const nextProblem = PROBLEMS[problemIdx + 1]!;
      setLines([...welcomeLines(), ...buildIntro(nextProblem)]);
      setProblemIdx(problemIdx + 1);
      return;
    }

    const normalized = raw.trim().replace(/\s+/g, ' ');
    const successCommands = Array.isArray(current.successCommand)
      ? current.successCommand
      : [current.successCommand];
    const isSuccess =
      successCommands.includes(normalized) && !solved.has(current.id);

    const newLines: Line[] = [echoLine, ...output];
    if (isSuccess) {
      setSolved((s) => new Set(s).add(current.id));
      newLines.push({ text: '' });
      newLines.push({
        text: `✔ Problem ${current.id} cleared!`,
        variant: 'success',
      });
      if (problemIdx + 1 < PROBLEMS.length) {
        newLines.push({ text: '`next` で次の問題へ。', variant: 'dim' });
      } else {
        newLines.push({
          text: '🎉 これが最後の問題でした。下に進め。',
          variant: 'success',
        });
        setTimeout(() => setShowCelebration(true), 1200);
      }
    }
    setLines((prev) => [...prev, ...newLines]);
  };

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          command="open -a Terminal problems/"
          title="Problems"
          subtitle={`Problem ${current.id} / ${PROBLEMS.length} — solved: ${solved.size}`}
        />

        <div
          className="rounded-xl overflow-hidden shadow-2xl border border-gray-300 bg-[#1e1e1e] animate-fade-in animation-delay-100"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] border-b border-black/40">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#dea123]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
            </div>
            <div className="flex-1 text-center text-[12px] text-gray-300 font-medium select-none">
              tatsuki — -zsh — 100x30
            </div>
            <div className="w-[52px]" />
          </div>

          <div
            ref={bodyRef}
            className="px-4 py-3 font-mono text-[13px] leading-[1.55] text-gray-100 h-[480px] overflow-y-auto"
            style={{ fontFamily: 'SF Mono, Menlo, Monaco, Consolas, monospace' }}
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap break-words ${variantClass(line.variant)}`}
              >
                {line.prompt && <span className="text-[#28c840]">{line.prompt}</span>}
                {line.prompt && line.text && ' '}
                <span>{line.text}</span>
              </div>
            ))}

            <div className="flex items-baseline">
              <span className="text-[#28c840] mr-2 shrink-0">{PROMPT}</span>
              <span className="relative flex-1">
                <span className="whitespace-pre">{input}</span>
                <span className="inline-block w-[7px] h-[14px] bg-gray-100 align-middle translate-y-[1px] cursor-blink" />
              </span>
            </div>

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="absolute opacity-0 w-0 h-0 pointer-events-none"
              aria-label="terminal input"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
        </div>

        {showCelebration && (
          <section
            ref={celebrationRef}
            className="mt-24 pt-16 pb-12 animate-fade-in-up"
          >
            <div className="text-center">
              <div className="font-mono text-[11px] text-[#0a66c2] tracking-[0.22em] mb-5">
                ━━━ EXIT 0 — ALL TESTS PASSED ━━━
              </div>
              <pre
                className="m-0 font-mono font-bold text-[#0a66c2] leading-none inline-block text-left"
                style={{ fontSize: 12, letterSpacing: 0 }}
              >
                {CLEARED_ASCII}
              </pre>
              <h2 className="mt-8 text-2xl font-bold text-gray-900">
                🎉 全 {PROBLEMS.length} 問クリアおめでとう！
              </h2>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
                お疲れさま。
                <br />
                これからも、お互いいいコード書いていこう。
              </p>
              <div className="mt-8 font-mono text-xs text-gray-400">
                <span className="text-[#0a66c2]">$</span> echo $? &nbsp;→&nbsp; 0
              </div>
              <div className="mt-10 flex flex-wrap gap-3 justify-center font-mono text-sm">
                <Link
                  to="/projects"
                  className="px-5 py-2.5 rounded text-white font-semibold tracking-wide bg-[#0a66c2] hover:bg-[#004182] transition-colors"
                >
                  ./view-projects.sh
                </Link>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded border border-gray-300 bg-white text-gray-900 font-medium hover:border-gray-500 transition-colors"
                >
                  cat contact.md
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
