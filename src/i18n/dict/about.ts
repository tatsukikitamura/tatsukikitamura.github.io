import type { Locale } from '../config';

const ja = {
  title: 'About - 北村健紀について',
  description:
    '北村健紀（Tatsuki Kitamura）のプロフィール。早稲田大学教育学部数学科。Ruby on Rails / React / SwiftUI / Python / C++ などを用いた Web・iOS アプリ開発、競技プログラミングに取り組んでいます。',
  heading: 'About',
  subtitle: '私について',
  profile: {
    heading: 'Profile',
    location: '日本在住',
    education: '早稲田大学 数学科',
    coding: 'プログラミング歴：約1年半（独学）',
    language: 'TOEIC：700点',
  },
  origin: {
    heading: 'プログラミングを始めたきっかけ',
    paragraphs: [
      '中学3年生のとき、Fortniteしかしていなかった自分に、父がUnityの本を買ってきた。やってみたけどすぐ飽きた。本の通りに作るのが面白くなかった。',
      'その後、サーバーの立て方がわからないまま、好きなラッパーのサイトを自分で作って自分だけで見ていた。今思うと相当ニッチな遊びだった。',
      '大学3年でエンジニアを目指したのは、最初は数学科、就活しんどそうという理由だった。でもProgateを触ったらふつうにハマって、そこからAtCoderや個人開発やコンテスト提出まで手が広がった。',
      'もともと本の通りに作るのが嫌いだった人間が、今は自分のアイデアを実装まで持っていくのが一番の楽しみになっている。',
    ],
  },
  tech: {
    heading: '技術スタック',
    groups: {
      languages: '言語',
      frameworks: 'フレームワーク・ライブラリ',
      databases: 'データベース',
      infra: 'インフラ・開発環境',
      ai: 'AI関連',
    },
  },
};

type AboutDict = typeof ja;

const en: AboutDict = {
  title: 'About - Tatsuki Kitamura',
  description:
    'Profile of Tatsuki Kitamura, a mathematics student at Waseda University. I build web and iOS apps with Ruby on Rails, React, SwiftUI, Python and C++, and do competitive programming.',
  heading: 'About',
  subtitle: 'About me',
  profile: {
    heading: 'Profile',
    location: 'Based in Japan',
    education: 'Waseda University, Department of Mathematics',
    coding: 'Programming: about 1.5 years (self-taught)',
    language: 'TOEIC: 700',
  },
  origin: {
    heading: 'How I got into programming',
    paragraphs: [
      'In my last year of junior high, when all I did was play Fortnite, my dad brought home a book on Unity. I gave it a try and got bored almost immediately. Building exactly what the book told me to was no fun.',
      "Later, without any idea how to set up a server, I built a fan site for my favourite rapper and was the only person who ever looked at it. In hindsight it was a pretty niche hobby.",
      'When I decided to become an engineer in my third year of university, the honest reason was that job hunting as a maths major looked rough. But once I tried Progate I was hooked, and from there it spread to AtCoder, personal projects and contest submissions.',
      'The kid who hated following a book step by step now finds nothing more fun than taking his own idea all the way to a working implementation.',
    ],
  },
  tech: {
    heading: 'Tech stack',
    groups: {
      languages: 'Languages',
      frameworks: 'Frameworks & libraries',
      databases: 'Databases',
      infra: 'Infrastructure & tooling',
      ai: 'AI',
    },
  },
};

const zh: AboutDict = {
  title: 'About - 关于北村健纪',
  description:
    '北村健纪（Tatsuki Kitamura）的个人简介。早稻田大学教育学部数学系。使用 Ruby on Rails / React / SwiftUI / Python / C++ 等进行 Web・iOS 应用开发，并参与竞技编程。',
  heading: 'About',
  subtitle: '关于我',
  profile: {
    heading: 'Profile',
    location: '居住于日本',
    education: '早稻田大学 数学系',
    coding: '编程经历：约一年半（自学）',
    language: 'TOEIC：700分',
  },
  origin: {
    heading: '开始编程的契机',
    paragraphs: [
      '初三那年，整天只玩 Fortnite 的我收到了父亲买来的 Unity 教材。试了一下，很快就腻了。照着书做东西没什么意思。',
      '后来，在连服务器怎么搭都不知道的情况下，我给喜欢的说唱歌手做了一个网站，只有自己一个人在看。现在想想，这是相当小众的玩法。',
      '大三决定当工程师，一开始的理由是“数学系找工作看起来很辛苦”。但一碰 Progate 就彻底入迷了，之后又扩展到 AtCoder、个人开发和比赛投稿。',
      '曾经讨厌照着书做的人，如今最大的乐趣就是把自己的想法一直做到能跑起来。',
    ],
  },
  tech: {
    heading: '技术栈',
    groups: {
      languages: '语言',
      frameworks: '框架・库',
      databases: '数据库',
      infra: '基础设施・开发环境',
      ai: 'AI 相关',
    },
  },
};

const ko: AboutDict = {
  title: 'About - 키타무라 타츠키 소개',
  description:
    '키타무라 타츠키(Tatsuki Kitamura)의 프로필. 와세다대학교 교육학부 수학과. Ruby on Rails / React / SwiftUI / Python / C++ 등을 사용한 웹·iOS 앱 개발과 경쟁 프로그래밍에 힘쓰고 있습니다.',
  heading: 'About',
  subtitle: '나에 대해',
  profile: {
    heading: 'Profile',
    location: '일본 거주',
    education: '와세다대학교 수학과',
    coding: '프로그래밍 경력: 약 1년 반 (독학)',
    language: 'TOEIC: 700점',
  },
  origin: {
    heading: '프로그래밍을 시작한 계기',
    paragraphs: [
      '중학교 3학년 때, Fortnite만 하던 나에게 아버지가 Unity 책을 사다 주셨다. 해 보긴 했지만 금방 질렸다. 책에 적힌 대로 만드는 게 재미없었다.',
      '그 후 서버 세우는 법도 모른 채, 좋아하는 래퍼의 사이트를 직접 만들어 혼자서만 보고 있었다. 지금 생각하면 꽤 마니악한 놀이였다.',
      '대학교 3학년 때 엔지니어를 목표로 삼은 건, 처음엔 “수학과는 취업이 힘들어 보인다”는 이유였다. 그런데 Progate를 만져 보니 그냥 푹 빠져 버렸고, 거기서 AtCoder, 개인 개발, 콘테스트 출품까지 손을 넓히게 됐다.',
      '원래 책대로 만드는 걸 싫어하던 사람이, 지금은 자기 아이디어를 구현까지 끌고 가는 것이 가장 큰 즐거움이 되었다.',
    ],
  },
  tech: {
    heading: '기술 스택',
    groups: {
      languages: '언어',
      frameworks: '프레임워크·라이브러리',
      databases: '데이터베이스',
      infra: '인프라·개발 환경',
      ai: 'AI 관련',
    },
  },
};

const about: Record<Locale, AboutDict> = { ja, en, zh, ko };
export default about;
