import type { Locale } from '../config';
import type { Project } from '../../types';

// Project list page (/projects). `link` is locale-less; the page wraps it with localizePath().
const ja = {
  title: 'Projects - 北村健紀の制作物',
  description:
    '北村健紀（Tatsuki Kitamura）のプロジェクト一覧。Yamatomo（登山コミュニティアプリ）、MBTI × 生成AI、ノー遅延乗り換え、AtCoder などの開発実績。',
  heading: 'Projects',
  subtitle: '開発したプロジェクト',
  viewAllOnGitHub: 'View all on GitHub',
  projects: [
    {
      id: 'yamatomo',
      title: 'Yamatomo（登山コミュニティアプリ）',
      description:
        '登山者同士が繋がれるコミュニティアプリ。iOSアプリ（SwiftUI + Firebase）とWeb版（React + Firebase）を並行開発。山ごとのベースキャンプやAIによるコミュニティ生成など、登山特化の体験を提供。',
      period: '2026年4月〜現在（チーム開発）',
      tags: ['SwiftUI', 'React', 'TypeScript', 'Firebase', 'OpenAI API'],
      featured: true,
      link: '/projects/yamatomo',
    },
    {
      id: 'atcoder',
      title: 'AtCoder（競技プログラミング）',
      description:
        'Algorithm 茶色・Heuristic 青色ランク（最高レート1603）到達。直近AHCにて78位・黄色パフォーマンスを記録。約2年継続的に取り組み中。',
      period: '2024年4月〜2026年1月（継続中）',
      tags: ['Python', 'C++', 'アルゴリズム'],
      featured: true,
      link: '/projects/atcoder',
    },
    {
      id: 'math',
      title: 'Burgers 方程式の進行波解の安定性（卒業研究）',
      description:
        '粘性 Burgers 方程式の進行波解（衝撃波層）の漸近安定性を、Hopf–Cole 変換による線形化を通じて減衰率まで精密に評価する卒業研究。西原 (1985) の全訳・講義ノート・卒業論文を、KaTeX による数式組版とクライアント暗号化したパスワードゲートでまとめた数式サイト。',
      period: '2026年5月〜現在（個人開発・卒業研究）',
      tags: ['TypeScript', 'Vite', 'KaTeX', 'markdown-it'],
      featured: true,
      link: '/projects/math',
    },
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
      featured: false,
      link: '/projects/opendata',
    },
  ] as Project[],
};

type ProjectsDict = typeof ja;

const en: ProjectsDict = {
  title: 'Projects - Tatsuki Kitamura',
  description:
    'Projects by Tatsuki Kitamura: Yamatomo (hiking community app), MBTI × generative AI, No-Delay Transit, AtCoder and more.',
  heading: 'Projects',
  subtitle: 'Things I have built',
  viewAllOnGitHub: 'View all on GitHub',
  projects: [
    {
      id: 'yamatomo',
      title: 'Yamatomo (Hiking community app)',
      description:
        'A community app that connects hikers. An iOS app (SwiftUI + Firebase) and a web version (React + Firebase) developed in parallel, with hiking-specific experiences such as per-mountain base camps and AI-generated communities.',
      period: 'Apr 2026 — present (team project)',
      tags: ['SwiftUI', 'React', 'TypeScript', 'Firebase', 'OpenAI API'],
      featured: true,
      link: '/projects/yamatomo',
    },
    {
      id: 'atcoder',
      title: 'AtCoder (Competitive programming)',
      description:
        'Reached brown in Algorithm and blue in Heuristic (max rating 1603). Placed 78th with a yellow performance in a recent AHC. About two years of continuous practice.',
      period: 'Apr 2024 — Jan 2026 (ongoing)',
      tags: ['Python', 'C++', 'Algorithms'],
      featured: true,
      link: '/projects/atcoder',
    },
    {
      id: 'math',
      title: 'Stability of travelling-wave solutions of the Burgers equation (graduation research)',
      description:
        'Graduation research estimating the asymptotic stability of travelling-wave (shock-layer) solutions of the viscous Burgers equation, down to the decay rate, via linearization through the Hopf–Cole transform. A maths site collecting a full translation of Nishihara (1985), lecture notes and the thesis, typeset with KaTeX and protected by a client-side-encrypted password gate.',
      period: 'May 2026 — present (solo project / graduation research)',
      tags: ['TypeScript', 'Vite', 'KaTeX', 'markdown-it'],
      featured: true,
      link: '/projects/math',
    },
    {
      id: 'mbti-app',
      title: 'MBTI × Generative AI experience app',
      description:
        'An interactive web app combining MBTI typing with generative AI. Its story-driven diagnosis mode takes a new approach to drawing out unconscious values.',
      period: 'Jun 2024 — Aug 2024 (3 months)',
      tags: ['Ruby on Rails', 'OpenAI API', 'Redis', 'Heroku'],
      featured: true,
      link: '/projects/mbti-app',
    },
    {
      id: 'opendata',
      title: 'No-Delay Transit (Open Data Challenge 2025)',
      description:
        'A route-search app that predicts future delay risk and gets people who absolutely cannot be late to their destination safely. Submitted to the Public Transportation Open Data Challenge 2025.',
      period: 'Oct 2025 — present (solo project)',
      tags: ['Python (FastAPI)', 'Vite + Vanilla JS', 'PostgreSQL', 'OpenAI API'],
      featured: false,
      link: '/projects/opendata',
    },
  ],
};

const zh: ProjectsDict = {
  title: 'Projects - 北村健纪的作品',
  description:
    '北村健纪（Tatsuki Kitamura）的项目列表。Yamatomo（登山社区应用）、MBTI × 生成式 AI、零延误换乘、AtCoder 等开发成果。',
  heading: 'Projects',
  subtitle: '开发过的项目',
  viewAllOnGitHub: '在 GitHub 查看全部',
  projects: [
    {
      id: 'yamatomo',
      title: 'Yamatomo（登山社区应用）',
      description:
        '连接登山者的社区应用。iOS 应用（SwiftUI + Firebase）与 Web 版（React + Firebase）并行开发。提供按山分设的大本营、AI 自动生成社区等登山专属体验。',
      period: '2026年4月〜至今（团队开发）',
      tags: ['SwiftUI', 'React', 'TypeScript', 'Firebase', 'OpenAI API'],
      featured: true,
      link: '/projects/yamatomo',
    },
    {
      id: 'atcoder',
      title: 'AtCoder（竞技编程）',
      description:
        'Algorithm 达到棕色、Heuristic 达到蓝色段位（最高 rating 1603）。在最近的 AHC 中取得第 78 名、黄色 performance。持续参与约两年。',
      period: '2024年4月〜2026年1月（持续中）',
      tags: ['Python', 'C++', '算法'],
      featured: true,
      link: '/projects/atcoder',
    },
    {
      id: 'math',
      title: 'Burgers 方程行波解的稳定性（毕业研究）',
      description:
        '通过 Hopf–Cole 变换进行线性化，对粘性 Burgers 方程行波解（激波层）的渐近稳定性进行精确到衰减率的评估的毕业研究。将西原 (1985) 的全文翻译、讲义笔记与毕业论文汇集成一个数学网站，采用 KaTeX 排版公式，并设有客户端加密的密码门。',
      period: '2026年5月〜至今（个人开发・毕业研究）',
      tags: ['TypeScript', 'Vite', 'KaTeX', 'markdown-it'],
      featured: true,
      link: '/projects/math',
    },
    {
      id: 'mbti-app',
      title: 'MBTI × 生成式 AI 体验应用',
      description:
        '将 MBTI 测试与生成式 AI 结合的体验型 Web 应用。通过故事形式的测试模式，实现了引出潜意识价值观的全新方式。',
      period: '2024年6月〜2024年8月（3个月）',
      tags: ['Ruby on Rails', 'OpenAI API', 'Redis', 'Heroku'],
      featured: true,
      link: '/projects/mbti-app',
    },
    {
      id: 'opendata',
      title: '零延误换乘（Open Data Challenge 2025）',
      description:
        '预测未来的延误风险，把“绝对不能迟到的人”安全送达目的地的路线搜索应用。公共交通开放数据挑战赛 2025 参赛作品。',
      period: '2025年10月〜至今（个人开发）',
      tags: ['Python (FastAPI)', 'Vite + Vanilla JS', 'PostgreSQL', 'OpenAI API'],
      featured: false,
      link: '/projects/opendata',
    },
  ],
};

const ko: ProjectsDict = {
  title: 'Projects - 키타무라 타츠키의 작품',
  description:
    '키타무라 타츠키(Tatsuki Kitamura)의 프로젝트 목록. Yamatomo(등산 커뮤니티 앱), MBTI × 생성형 AI, 노 지연 환승, AtCoder 등의 개발 실적.',
  heading: 'Projects',
  subtitle: '개발한 프로젝트',
  viewAllOnGitHub: 'GitHub에서 전체 보기',
  projects: [
    {
      id: 'yamatomo',
      title: 'Yamatomo (등산 커뮤니티 앱)',
      description:
        '등산객끼리 연결되는 커뮤니티 앱. iOS 앱(SwiftUI + Firebase)과 웹 버전(React + Firebase)을 병행 개발. 산별 베이스캠프, AI를 통한 커뮤니티 생성 등 등산에 특화된 경험을 제공.',
      period: '2026년 4월〜현재 (팀 개발)',
      tags: ['SwiftUI', 'React', 'TypeScript', 'Firebase', 'OpenAI API'],
      featured: true,
      link: '/projects/yamatomo',
    },
    {
      id: 'atcoder',
      title: 'AtCoder (경쟁 프로그래밍)',
      description:
        'Algorithm 갈색·Heuristic 파랑 랭크(최고 레이팅 1603) 도달. 최근 AHC에서 78위·노랑 퍼포먼스 기록. 약 2년간 꾸준히 참여 중.',
      period: '2024년 4월〜2026년 1월 (진행 중)',
      tags: ['Python', 'C++', '알고리즘'],
      featured: true,
      link: '/projects/atcoder',
    },
    {
      id: 'math',
      title: 'Burgers 방정식 진행파 해의 안정성 (졸업 연구)',
      description:
        '점성 Burgers 방정식의 진행파 해(충격파층)의 점근 안정성을 Hopf–Cole 변환에 의한 선형화를 통해 감쇠율까지 정밀하게 평가하는 졸업 연구. 니시하라 (1985)의 전문 번역, 강의 노트, 졸업 논문을 KaTeX 수식 조판과 클라이언트 측 암호화 비밀번호 게이트로 정리한 수학 사이트.',
      period: '2026년 5월〜현재 (개인 개발·졸업 연구)',
      tags: ['TypeScript', 'Vite', 'KaTeX', 'markdown-it'],
      featured: true,
      link: '/projects/math',
    },
    {
      id: 'mbti-app',
      title: 'MBTI × 생성형 AI 체험 앱',
      description:
        'MBTI 진단과 생성형 AI를 결합한 체험형 웹 앱. 이야기 형식의 진단 모드로 무의식적인 가치관을 이끌어내는 새로운 접근을 구현.',
      period: '2024년 6월〜2024년 8월 (3개월)',
      tags: ['Ruby on Rails', 'OpenAI API', 'Redis', 'Heroku'],
      featured: true,
      link: '/projects/mbti-app',
    },
    {
      id: 'opendata',
      title: '노 지연 환승 (Open Data Challenge 2025)',
      description:
        '미래의 지연 리스크를 예측해 “절대 지각할 수 없는 사람”을 안전하게 목적지까지 데려다주는 경로 검색 앱. 공공교통 오픈데이터 챌린지 2025 출품작.',
      period: '2025년 10월〜현재 (개인 개발)',
      tags: ['Python (FastAPI)', 'Vite + Vanilla JS', 'PostgreSQL', 'OpenAI API'],
      featured: false,
      link: '/projects/opendata',
    },
  ],
};

const projects: Record<Locale, ProjectsDict> = { ja, en, zh, ko };
export default projects;
