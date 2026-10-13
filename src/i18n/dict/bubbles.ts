import type { Locale } from '../config';

const ja = {
  title: '気泡とり - Artworks',
  description:
    '保護フィルムを貼ったときの気泡とりを体験できる実験的な Web ページ。カーソルで気泡を画面の端まで押し出して抜こう。',
  /** Text around the live `<span id="bubble-count">` counter. */
  count: { before: '残り ', after: ' 個' },
  hint: '気泡を画面の端まで押していくと空気が抜ける',
  done: 'きれいに貼れました',
  reset: 'もう一回貼る',
};

type BubblesDict = typeof ja;

const en: BubblesDict = {
  title: 'Bubble Removal - Artworks',
  description:
    'An experimental web page where you remove the air bubbles from a freshly applied screen protector. Push each bubble to the edge of the screen with your cursor to let the air out.',
  count: { before: '', after: ' left' },
  hint: 'Push a bubble to the edge of the screen to let the air out',
  done: 'Applied perfectly',
  reset: 'Apply it again',
};

const zh: BubblesDict = {
  title: '除气泡 - Artworks',
  description: '体验贴保护膜时除气泡的实验性网页。用光标把气泡推到屏幕边缘，把空气排出去吧。',
  count: { before: '还剩 ', after: ' 个' },
  hint: '把气泡推到屏幕边缘，空气就会排出去',
  done: '贴得很完美',
  reset: '再贴一次',
};

const ko: BubblesDict = {
  title: '기포 빼기 - Artworks',
  description:
    '보호 필름을 붙였을 때의 기포 빼기를 체험할 수 있는 실험적인 웹 페이지. 커서로 기포를 화면 끝까지 밀어내 빼 보세요.',
  count: { before: '남은 기포 ', after: '개' },
  hint: '기포를 화면 끝까지 밀어내면 공기가 빠진다',
  done: '깨끗하게 붙였습니다',
  reset: '한 번 더 붙이기',
};

const bubbles: Record<Locale, BubblesDict> = { ja, en, zh, ko };
export default bubbles;
