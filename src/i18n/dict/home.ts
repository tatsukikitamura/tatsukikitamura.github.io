import type { Locale } from '../config';

const ja = {
  title: 'ポートフォリオ',
  description:
    '北村健紀（Tatsuki Kitamura）のポートフォリオ。早稲田大学教育学部数学科4年。Ruby on Rails / React / SwiftUI を中心に Web・iOS アプリ開発、AtCoder（Algorithm 茶 / Heuristic 青）に取り組んでいます。',
  status: 'ONLINE — TOKYO',
  iAm: 'I am a',
  roles: ['Software Engineer', 'Web Developer', 'Competitive Programmer'],
  buttons: {
    projects: 'projects',
    experience: 'experience',
    artworks: 'artworks',
  },
  featuredHeading: '━━━ FEATURED WORK ━━━',
  featured: {
    yamatomo: { title: 'Yamatomo', sub: '登山者のコミュニティアプリ。iOS + Web 並行開発。', kind: 'iOS / Web App' },
    atcoder: { title: 'AtCoder', sub: 'Algorithm 茶 / Heuristic 青（1603）。約2年継続中。', kind: 'Competitive Prog.' },
    math: { title: 'Burgers 方程式', sub: '進行波解の安定性を扱う卒業研究の数式サイト。', kind: 'Research / Math' },
    mbti: { title: 'MBTI × AI', sub: '物語形式の MBTI 診断 × 生成AI。', kind: 'Web App / LLM' },
  },
  allProjects: '$ ls projects/ --all →',
};

type HomeDict = typeof ja;

const en: HomeDict = {
  title: 'Portfolio',
  description:
    'Portfolio of Tatsuki Kitamura, a fourth-year mathematics student at Waseda University. I build web and iOS apps with Ruby on Rails, React and SwiftUI, and compete on AtCoder (Algorithm brown / Heuristic blue).',
  status: 'ONLINE — TOKYO',
  iAm: 'I am a',
  roles: ['Software Engineer', 'Web Developer', 'Competitive Programmer'],
  buttons: {
    projects: 'projects',
    experience: 'experience',
    artworks: 'artworks',
  },
  featuredHeading: '━━━ FEATURED WORK ━━━',
  featured: {
    yamatomo: { title: 'Yamatomo', sub: 'Community app for hikers. iOS and web built in parallel.', kind: 'iOS / Web App' },
    atcoder: { title: 'AtCoder', sub: 'Algorithm brown / Heuristic blue (1603). Two years and counting.', kind: 'Competitive Prog.' },
    math: { title: 'Burgers equation', sub: 'Math site for my thesis on the stability of travelling waves.', kind: 'Research / Math' },
    mbti: { title: 'MBTI × AI', sub: 'Story-driven MBTI test powered by generative AI.', kind: 'Web App / LLM' },
  },
  allProjects: '$ ls projects/ --all →',
};

const zh: HomeDict = {
  title: '作品集',
  description:
    '北村健纪（Tatsuki Kitamura）的作品集。早稻田大学教育学部数学系四年级。以 Ruby on Rails / React / SwiftUI 为主进行 Web 与 iOS 应用开发，并参与 AtCoder（Algorithm 棕色 / Heuristic 蓝色）。',
  status: 'ONLINE — TOKYO',
  iAm: '我是',
  roles: ['软件工程师', 'Web 开发者', '竞技程序员'],
  buttons: {
    projects: '项目',
    experience: '经历',
    artworks: '作品',
  },
  featuredHeading: '━━━ 精选作品 ━━━',
  featured: {
    yamatomo: { title: 'Yamatomo', sub: '登山者社区应用。iOS 与 Web 并行开发。', kind: 'iOS / Web App' },
    atcoder: { title: 'AtCoder', sub: 'Algorithm 棕色 / Heuristic 蓝色（1603）。持续约两年。', kind: 'Competitive Prog.' },
    math: { title: 'Burgers 方程', sub: '关于行波解稳定性的毕业研究数学网站。', kind: 'Research / Math' },
    mbti: { title: 'MBTI × AI', sub: '故事形式的 MBTI 测试 × 生成式 AI。', kind: 'Web App / LLM' },
  },
  allProjects: '$ ls projects/ --all →',
};

const ko: HomeDict = {
  title: '포트폴리오',
  description:
    '키타무라 타츠키(Tatsuki Kitamura)의 포트폴리오. 와세다대학교 교육학부 수학과 4학년. Ruby on Rails / React / SwiftUI를 중심으로 웹·iOS 앱 개발과 AtCoder(Algorithm 갈색 / Heuristic 파랑)에 힘쓰고 있습니다.',
  status: 'ONLINE — TOKYO',
  iAm: '저는',
  roles: ['소프트웨어 엔지니어', '웹 개발자', '경쟁 프로그래머'],
  buttons: {
    projects: '프로젝트',
    experience: '경력',
    artworks: '아트워크',
  },
  featuredHeading: '━━━ 대표 작업 ━━━',
  featured: {
    yamatomo: { title: 'Yamatomo', sub: '등산객 커뮤니티 앱. iOS와 웹을 병행 개발.', kind: 'iOS / Web App' },
    atcoder: { title: 'AtCoder', sub: 'Algorithm 갈색 / Heuristic 파랑(1603). 약 2년째 계속 중.', kind: 'Competitive Prog.' },
    math: { title: 'Burgers 방정식', sub: '진행파 해의 안정성을 다룬 졸업 연구 수식 사이트.', kind: 'Research / Math' },
    mbti: { title: 'MBTI × AI', sub: '이야기 형식의 MBTI 진단 × 생성형 AI.', kind: 'Web App / LLM' },
  },
  allProjects: '$ ls projects/ --all →',
};

const home: Record<Locale, HomeDict> = { ja, en, zh, ko };
export default home;
