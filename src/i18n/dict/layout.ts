import type { Locale } from '../config';

// Site-wide SEO metadata emitted by BaseLayout.
const ja = {
  siteName: '北村健紀 (Tatsuki Kitamura)',
  author: '北村健紀 (Tatsuki Kitamura)',
  defaultDescription:
    '北村健紀（Tatsuki Kitamura）のポートフォリオサイト。早稲田大学教育学部数学科4年。Ruby on Rails / React / SwiftUI を中心に Web・iOS アプリ開発、AtCoder（Algorithm 茶 / Heuristic 青）に取り組んでいます。',
  keywords:
    '北村健紀, Tatsuki Kitamura, きたむらたつき, 早稲田大学, ポートフォリオ, Webエンジニア, Ruby on Rails, React, SwiftUI, AtCoder',
  person: {
    name: '北村健紀',
    jobTitle: 'Software Engineer',
    description:
      '早稲田大学教育学部数学科4年。Web・iOS アプリ開発、競技プログラミングに取り組んでいます。',
    university: '早稲田大学',
    competitiveProgramming: '競技プログラミング',
  },
};

type LayoutDict = typeof ja;

const en: LayoutDict = {
  siteName: 'Tatsuki Kitamura',
  author: 'Tatsuki Kitamura',
  defaultDescription:
    'Portfolio of Tatsuki Kitamura, a fourth-year mathematics student at Waseda University. I build web and iOS apps with Ruby on Rails, React and SwiftUI, and compete on AtCoder (Algorithm brown / Heuristic blue).',
  keywords:
    'Tatsuki Kitamura, Waseda University, portfolio, web engineer, Ruby on Rails, React, SwiftUI, AtCoder',
  person: {
    name: 'Tatsuki Kitamura',
    jobTitle: 'Software Engineer',
    description:
      'Fourth-year mathematics student at Waseda University working on web and iOS app development and competitive programming.',
    university: 'Waseda University',
    competitiveProgramming: 'Competitive programming',
  },
};

const zh: LayoutDict = {
  siteName: '北村健纪 (Tatsuki Kitamura)',
  author: '北村健纪 (Tatsuki Kitamura)',
  defaultDescription:
    '北村健纪（Tatsuki Kitamura）的个人作品集。早稻田大学教育学部数学系四年级。以 Ruby on Rails / React / SwiftUI 为主进行 Web 与 iOS 应用开发，并参与 AtCoder（Algorithm 棕色 / Heuristic 蓝色）。',
  keywords:
    '北村健纪, Tatsuki Kitamura, 早稻田大学, 作品集, Web工程师, Ruby on Rails, React, SwiftUI, AtCoder',
  person: {
    name: '北村健纪',
    jobTitle: 'Software Engineer',
    description: '早稻田大学教育学部数学系四年级。从事 Web・iOS 应用开发与竞技编程。',
    university: '早稻田大学',
    competitiveProgramming: '竞技编程',
  },
};

const ko: LayoutDict = {
  siteName: '키타무라 타츠키 (Tatsuki Kitamura)',
  author: '키타무라 타츠키 (Tatsuki Kitamura)',
  defaultDescription:
    '키타무라 타츠키(Tatsuki Kitamura)의 포트폴리오 사이트. 와세다대학교 교육학부 수학과 4학년. Ruby on Rails / React / SwiftUI를 중심으로 웹·iOS 앱 개발과 AtCoder(Algorithm 갈색 / Heuristic 파랑)에 힘쓰고 있습니다.',
  keywords:
    '키타무라 타츠키, Tatsuki Kitamura, 와세다대학교, 포트폴리오, 웹 엔지니어, Ruby on Rails, React, SwiftUI, AtCoder',
  person: {
    name: '키타무라 타츠키',
    jobTitle: 'Software Engineer',
    description:
      '와세다대학교 교육학부 수학과 4학년. 웹·iOS 앱 개발과 경쟁 프로그래밍에 힘쓰고 있습니다.',
    university: '와세다대학교',
    competitiveProgramming: '경쟁 프로그래밍',
  },
};

const layout: Record<Locale, LayoutDict> = { ja, en, zh, ko };
export default layout;
