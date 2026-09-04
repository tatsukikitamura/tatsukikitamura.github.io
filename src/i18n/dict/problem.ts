import type { Locale } from '../config';

// Human-facing strings of the Problem page and its terminal island.
// Command names, file names, help/man text and the `success` output are
// mechanics and stay in the island untouched.
const ja = {
  title: 'Problems - シェル風コーディング問題',
  description:
    '北村健紀のポートフォリオサイトに用意したシェル風のコーディング問題集。ターミナル風UIで問題を解いていけます。',
  heading: 'Problems',
  welcome: '`success` を出力できればクリア。`help` でコマンド一覧。',
  solveFirst: 'まずこの問題をクリアしてください。',
  allCleared: '🎉 全ての問題をクリア済みです。',
  nextHint: '`next` で次の問題へ。',
  lastCleared: '🎉 これが最後の問題でした。下に進め。',
  celebration: {
    /** `{count}` is replaced with the number of problems. */
    heading: '🎉 全 {count} 問クリアおめでとう！',
    line1: 'お疲れさま。',
    line2: 'これからも、お互いいいコード書いていこう。',
  },
  problems: {
    p1: {
      title: 'Problem 1: 答えを読め',
      hint: ['まず周りに何があるか確かめてみよう。'],
    },
    p2: {
      title: 'Problem 2: 紛れたコマンドを探せ',
      hint: ['help の中に一つだけ毛色の違うやつがいる。'],
      hadouken: '波動拳！！！',
    },
    p3: {
      title: 'Problem 3: 隠されたメッセージ',
      hint: ['`ls` はデフォルトでは全部を見せない。'],
      readme: 'メッセージは表に出していない。\n中身は 13 文字ずらしてある。',
    },
    p4: {
      title: 'Problem 4: 鍵を探して暗号を解け',
      hint: ['鍵は普段見えない場所に置かれているもの。'],
      readme: 'lock.txt はシーザー暗号でロックした。\n鍵 (シフト量) は環境ファイルに保存してある。',
    },
    p5: {
      title: 'Problem 5: 文書化されていないもの',
      hint: ['ドキュメントが揃っているものだけが本物。'],
      readme:
        '3つの ritual がある。正しく invoke できるのは1つだけ。\n.rituals を読み、各 ritual を確認せよ。',
    },
  },
};

export type ProblemDict = typeof ja;

const en: ProblemDict = {
  title: 'Problems - Shell-style coding puzzles',
  description:
    "A set of shell-style coding puzzles on Tatsuki Kitamura's portfolio site. Solve them one by one in a terminal-like UI.",
  heading: 'Problems',
  welcome: 'Print `success` to clear a problem. Type `help` for the command list.',
  solveFirst: 'Clear this problem first.',
  allCleared: '🎉 You have already cleared every problem.',
  nextHint: 'Type `next` to move on.',
  lastCleared: '🎉 That was the last one. Scroll down.',
  celebration: {
    heading: '🎉 All {count} problems cleared. Congratulations!',
    line1: 'Nice work.',
    line2: "Let's both keep writing good code.",
  },
  problems: {
    p1: {
      title: 'Problem 1: Read the answer',
      hint: ['Start by checking what is around you.'],
    },
    p2: {
      title: 'Problem 2: Find the odd one out',
      hint: ['One entry in help does not look like the others.'],
      hadouken: 'HADOUKEN!!!',
    },
    p3: {
      title: 'Problem 3: The hidden message',
      hint: ['`ls` does not show everything by default.'],
      readme: 'The message is not out in the open.\nIts letters have been shifted by 13.',
    },
    p4: {
      title: 'Problem 4: Find the key, break the cipher',
      hint: ['Keys tend to be kept somewhere you cannot normally see.'],
      readme:
        'lock.txt is locked with a Caesar cipher.\nThe key (shift amount) is stored in the environment file.',
    },
    p5: {
      title: 'Problem 5: The undocumented one',
      hint: ['Only the one with proper documentation is real.'],
      readme:
        'There are 3 rituals. Only one of them can be invoked correctly.\nRead .rituals and check each ritual.',
    },
  },
};

const zh: ProblemDict = {
  title: 'Problems - 终端风编程题',
  description: '北村健纪作品集网站上准备的终端风编程题集。在仿终端界面中逐题破解。',
  heading: 'Problems',
  welcome: '只要能输出 `success` 就算通关。输入 `help` 查看命令列表。',
  solveFirst: '请先通关这一题。',
  allCleared: '🎉 所有题目都已通关。',
  nextHint: '输入 `next` 进入下一题。',
  lastCleared: '🎉 这是最后一题了。往下走。',
  celebration: {
    heading: '🎉 恭喜全部 {count} 题通关！',
    line1: '辛苦了。',
    line2: '今后也一起写出好代码吧。',
  },
  problems: {
    p1: {
      title: 'Problem 1: 读出答案',
      hint: ['先看看周围有什么吧。'],
    },
    p2: {
      title: 'Problem 2: 找出混进来的命令',
      hint: ['help 里有一个和其他的不太一样。'],
      hadouken: '波动拳！！！',
    },
    p3: {
      title: 'Problem 3: 隐藏的信息',
      hint: ['`ls` 默认不会显示全部。'],
      readme: '信息没有放在明面上。\n内容被错开了 13 个字母。',
    },
    p4: {
      title: 'Problem 4: 找到钥匙解开密码',
      hint: ['钥匙通常放在平时看不见的地方。'],
      readme: 'lock.txt 已用凯撒密码锁上。\n钥匙（位移量）保存在环境文件里。',
    },
    p5: {
      title: 'Problem 5: 没有文档的东西',
      hint: ['只有文档齐全的才是真的。'],
      readme: '有 3 个 ritual。能正确 invoke 的只有 1 个。\n读取 .rituals，逐个确认每个 ritual。',
    },
  },
};

const ko: ProblemDict = {
  title: 'Problems - 셸 스타일 코딩 문제',
  description:
    '키타무라 타츠키의 포트폴리오 사이트에 마련한 셸 스타일 코딩 문제집. 터미널풍 UI에서 문제를 풀어 나갈 수 있습니다.',
  heading: 'Problems',
  welcome: '`success`를 출력하면 클리어. `help`로 명령어 목록.',
  solveFirst: '먼저 이 문제를 클리어하세요.',
  allCleared: '🎉 모든 문제를 이미 클리어했습니다.',
  nextHint: '`next`로 다음 문제로.',
  lastCleared: '🎉 이것이 마지막 문제였습니다. 아래로 내려가세요.',
  celebration: {
    heading: '🎉 전 {count}문제 클리어, 축하합니다!',
    line1: '수고했어요.',
    line2: '앞으로도 서로 좋은 코드 써 나가요.',
  },
  problems: {
    p1: {
      title: 'Problem 1: 답을 읽어라',
      hint: ['먼저 주변에 뭐가 있는지 확인해 보자.'],
    },
    p2: {
      title: 'Problem 2: 숨어든 명령어를 찾아라',
      hint: ['help 안에 하나만 결이 다른 녀석이 있다.'],
      hadouken: '하도켄!!!',
    },
    p3: {
      title: 'Problem 3: 숨겨진 메시지',
      hint: ['`ls`는 기본적으로 전부 보여주지 않는다.'],
      readme: '메시지는 겉으로 드러내지 않았다.\n내용은 13글자씩 밀어 두었다.',
    },
    p4: {
      title: 'Problem 4: 열쇠를 찾아 암호를 풀어라',
      hint: ['열쇠는 평소에 보이지 않는 곳에 두는 법.'],
      readme: 'lock.txt는 시저 암호로 잠갔다.\n열쇠(시프트 양)는 환경 파일에 저장해 두었다.',
    },
    p5: {
      title: 'Problem 5: 문서화되지 않은 것',
      hint: ['문서가 갖춰진 것만이 진짜다.'],
      readme: 'ritual이 3개 있다. 제대로 invoke할 수 있는 건 1개뿐.\n.rituals를 읽고 각 ritual을 확인하라.',
    },
  },
};

const problem: Record<Locale, ProblemDict> = { ja, en, zh, ko };
export default problem;
