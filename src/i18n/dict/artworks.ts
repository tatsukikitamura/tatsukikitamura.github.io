import type { Locale } from '../config';

const ja = {
  title: 'Artworks - 制作アートワーク',
  description:
    '北村健紀（Tatsuki Kitamura）のアートワーク集。フライヤー、Tシャツ、Web ページなどのグラフィック制作物をまとめています。',
  /** Two lines of the hero paragraph (joined by a responsive <br />). */
  hero: ['フライヤー、Tシャツ、Web ページ。', '手を動かして作ったグラフィックをここに集めていきます。'],
  works: {
    bubbles: {
      title: '気泡とり',
      description: '保護フィルムを貼ったときの気泡をカーソルで押し出して抜く、体験型の実験ページ。',
    },
  },
  placeholders: {
    flyer: '一枚もののフライヤー',
    tshirt: 'Tシャツのグラフィック',
    web: '実験的な Web ページ',
  },
};

type ArtworksDict = typeof ja;

const en: ArtworksDict = {
  title: 'Artworks - Graphic work',
  description:
    'A collection of artwork by Tatsuki Kitamura: flyers, T-shirts, web pages and other graphic pieces.',
  hero: ['Flyers, T-shirts, web pages.', 'A growing collection of graphics I made by hand.'],
  works: {
    bubbles: {
      title: 'Bubble Removal',
      description:
        'An interactive experiment: push out the air bubbles trapped under a freshly applied screen protector with your cursor.',
    },
  },
  placeholders: {
    flyer: 'Single-sheet flyers',
    tshirt: 'T-shirt graphics',
    web: 'Experimental web pages',
  },
};

const zh: ArtworksDict = {
  title: 'Artworks - 作品集',
  description: '北村健纪（Tatsuki Kitamura）的艺术作品集。汇集了传单、T恤、网页等平面设计作品。',
  hero: ['传单、T恤、网页。', '亲手做出来的图形作品，都会陆续汇集在这里。'],
  works: {
    bubbles: {
      title: '除气泡',
      description: '用光标把贴保护膜时产生的气泡推出去的体验型实验页面。',
    },
  },
  placeholders: {
    flyer: '单页传单',
    tshirt: 'T恤图案',
    web: '实验性网页',
  },
};

const ko: ArtworksDict = {
  title: 'Artworks - 제작 아트워크',
  description:
    '키타무라 타츠키(Tatsuki Kitamura)의 아트워크 모음. 플라이어, 티셔츠, 웹 페이지 등 그래픽 제작물을 모았습니다.',
  hero: ['플라이어, 티셔츠, 웹 페이지.', '직접 손을 움직여 만든 그래픽을 이곳에 모아 갑니다.'],
  works: {
    bubbles: {
      title: '기포 빼기',
      description: '보호 필름을 붙였을 때 생기는 기포를 커서로 밀어내 빼는 체험형 실험 페이지.',
    },
  },
  placeholders: {
    flyer: '한 장짜리 플라이어',
    tshirt: '티셔츠 그래픽',
    web: '실험적인 웹 페이지',
  },
};

const artworks: Record<Locale, ArtworksDict> = { ja, en, zh, ko };
export default artworks;
