import type { Locale } from '../config';

// Strings shared by the layout shell: header nav, footer, back links, misc.
const ja = {
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    problem: 'Problem',
    request: 'Request',
  },
  menuOpen: 'メニューを開く',
  language: '言語',
  footer: {
    rights: 'All rights reserved.',
    request: 'Request',
  },
  backToProjects: 'Projects',
  contact: 'お問い合わせ',
  livePreview: 'ライブプレビュー',
  overview: '概要',
  techStack: '使用技術',
  links: 'リンク',
  learnings: '学び',
  outcomes: '成果',
  demoClosed: '※ デモサイトは現在公開を終了しています',
  closed: '公開終了',
  notFound: {
    title: '404 Not Found',
    heading: '404 - Not Found',
    message: 'お探しのページは見つかりませんでした。',
    home: 'ホームに戻る',
  },
};

type CommonDict = typeof ja;

const en: CommonDict = {
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    problem: 'Problem',
    request: 'Request',
  },
  menuOpen: 'Open menu',
  language: 'Language',
  footer: {
    rights: 'All rights reserved.',
    request: 'Request',
  },
  backToProjects: 'Projects',
  contact: 'Contact',
  livePreview: 'Live preview',
  overview: 'Overview',
  techStack: 'Tech stack',
  links: 'Links',
  learnings: 'What I learned',
  outcomes: 'Outcome',
  demoClosed: '* The demo site is no longer available.',
  closed: 'Discontinued',
  notFound: {
    title: '404 Not Found',
    heading: '404 - Not Found',
    message: 'The page you are looking for could not be found.',
    home: 'Back to home',
  },
};

const zh: CommonDict = {
  nav: {
    about: '关于',
    projects: '项目',
    experience: '经历',
    problem: '题目',
    request: '委托',
  },
  menuOpen: '打开菜单',
  language: '语言',
  footer: {
    rights: '版权所有。',
    request: '委托',
  },
  backToProjects: '项目列表',
  contact: '联系我',
  livePreview: '在线预览',
  overview: '概述',
  techStack: '使用技术',
  links: '链接',
  learnings: '收获',
  outcomes: '成果',
  demoClosed: '※ 演示站点目前已停止公开',
  closed: '已下线',
  notFound: {
    title: '404 Not Found',
    heading: '404 - 页面不存在',
    message: '找不到您要访问的页面。',
    home: '返回首页',
  },
};

const ko: CommonDict = {
  nav: {
    about: '소개',
    projects: '프로젝트',
    experience: '경력',
    problem: '문제',
    request: '의뢰',
  },
  menuOpen: '메뉴 열기',
  language: '언어',
  footer: {
    rights: 'All rights reserved.',
    request: '의뢰',
  },
  backToProjects: '프로젝트',
  contact: '문의하기',
  livePreview: '라이브 미리보기',
  overview: '개요',
  techStack: '사용 기술',
  links: '링크',
  learnings: '배운 점',
  outcomes: '성과',
  demoClosed: '※ 데모 사이트는 현재 공개를 종료했습니다',
  closed: '공개 종료',
  notFound: {
    title: '404 Not Found',
    heading: '404 - Not Found',
    message: '찾으시는 페이지를 발견할 수 없습니다.',
    home: '홈으로 돌아가기',
  },
};

const common: Record<Locale, CommonDict> = { ja, en, zh, ko };
export default common;
