import type { Locale } from '../config';

// Project detail page: /projects/atcoder
// Bullet markers ("• " / "—") are added by the page markup, not stored here.
const ja = {
  title: 'AtCoder - 競技プログラミング',
  description:
    '北村健紀の AtCoder 取り組み。Algorithm 茶 / Heuristic 青（最高レート1603）。約2年継続中、AHC78位・黄色パフォーマンス記録。',
  period: '2024年4月〜2026年1月（継続中）',
  overviewBody:
    'AtCoderは、プログラミングの問題を解くスピードと正確性を競うコンテスト。アルゴリズムやデータ構造の知識を活かして、制限時間内に問題を解く形式。継続的に取り組み、Algorithm部門で茶色、Heuristic部門で青色ランク（最高レート1603）に到達。直近のAHCでは78位・黄色パフォーマンスを記録。',
  stats: [
    { heading: 'Algorithm部門', value: '茶色ランク到達' },
    { heading: 'Heuristic部門', value: '青色ランク到達（最高レート1603）' },
    { heading: 'AHC最高成績', value: '78位・黄色パフォーマンス' },
  ],
  languages: '使用言語',
  approach: {
    heading: '取り組み方',
    items: [
      '毎週開催されるコンテストに参加し、アルゴリズム問題に取り組む',
      'Algorithm部門（アルゴリズムの正確性とスピードを競う）とHeuristic部門（試行錯誤で最適解を探す）の両方に挑戦',
      '当初は知らないアルゴリズムばかりで苦戦したが、継続的に学習を続けた',
    ],
  },
  efforts: {
    heading: '工夫した点',
    items: [
      'わからない部分はAIに質問したり、体系的な書籍（「競技プログラミングの鉄則」など）で学んだりして、効率的に知識を吸収',
      '解けなかった問題は、解説を読んで理解した後に必ず自分で実装し直すことで、知識を定着',
      '苦手な分野（グラフ、動的計画法など）を特定し、重点的に演習を積んだ',
    ],
  },
  learnings: [
    '「わからない」状態から、調べて・試して・理解するというサイクルを回し続けることで、着実に成長できることを実感',
    '問題を分解して考える力、効率的なアルゴリズムを選択する力が身についた',
    '制限時間内に正確なコードを書くプレッシャーの中で、冷静に思考を整理する力が鍛えられた',
  ],
  profileLabel: 'AtCoder Profile',
};

type AtcoderDict = typeof ja;

const en: AtcoderDict = {
  title: 'AtCoder - Competitive programming',
  description:
    "Tatsuki Kitamura's AtCoder record: Algorithm brown / Heuristic blue (max rating 1603). About two years of continuous practice; 78th place with a yellow performance in an AHC.",
  period: 'Apr 2024 — Jan 2026 (ongoing)',
  overviewBody:
    'AtCoder is a programming contest platform where you compete on how quickly and accurately you can solve problems, applying algorithms and data structures within a time limit. Through continuous practice I reached brown in the Algorithm division and blue in the Heuristic division (max rating 1603). In a recent AHC I placed 78th with a yellow performance.',
  stats: [
    { heading: 'Algorithm division', value: 'Reached brown' },
    { heading: 'Heuristic division', value: 'Reached blue (max rating 1603)' },
    { heading: 'Best AHC result', value: '78th place, yellow performance' },
  ],
  languages: 'Languages',
  approach: {
    heading: 'How I practise',
    items: [
      'Take part in the weekly contests and work through algorithm problems',
      'Compete in both the Algorithm division (accuracy and speed of algorithms) and the Heuristic division (searching for the best solution by trial and error)',
      'Struggled at first with algorithms I had never seen before, but kept studying consistently',
    ],
  },
  efforts: {
    heading: 'What I focused on',
    items: [
      'Absorbed knowledge efficiently by asking AI about anything I did not understand and studying systematic books such as "Competitive Programming: Tessoku"',
      'For every problem I could not solve, I read the editorial and then always re-implemented it myself so the knowledge stuck',
      'Identified my weak areas (graphs, dynamic programming, etc.) and drilled them intensively',
    ],
  },
  learnings: [
    'Learned first-hand that you grow steadily by repeating the cycle of not knowing, researching, trying and understanding',
    'Built the ability to break problems down and to choose efficient algorithms',
    'Trained myself to organise my thinking calmly under the pressure of writing correct code within a time limit',
  ],
  profileLabel: 'AtCoder Profile',
};

const zh: AtcoderDict = {
  title: 'AtCoder - 竞技编程',
  description:
    '北村健纪的 AtCoder 参与情况。Algorithm 棕色 / Heuristic 蓝色（最高 rating 1603）。持续约两年，AHC 第 78 名・黄色 performance。',
  period: '2024年4月〜2026年1月（持续中）',
  overviewBody:
    'AtCoder 是比拼解题速度与准确性的编程竞赛，参赛者运用算法与数据结构知识，在限定时间内解决问题。经过持续参与，我在 Algorithm 部门达到棕色、在 Heuristic 部门达到蓝色段位（最高 rating 1603）。在最近的 AHC 中取得第 78 名、黄色 performance。',
  stats: [
    { heading: 'Algorithm 部门', value: '达到棕色段位' },
    { heading: 'Heuristic 部门', value: '达到蓝色段位（最高 rating 1603）' },
    { heading: 'AHC 最佳成绩', value: '第 78 名・黄色 performance' },
  ],
  languages: '使用语言',
  approach: {
    heading: '参与方式',
    items: [
      '参加每周举办的比赛，练习算法题',
      '同时挑战 Algorithm 部门（比拼算法的准确性与速度）和 Heuristic 部门（通过反复尝试寻找最优解）',
      '起初面对大量陌生的算法十分吃力，但坚持持续学习',
    ],
  },
  efforts: {
    heading: '下功夫的地方',
    items: [
      '遇到不懂的地方就向 AI 提问，或通过系统性的书籍（如《竞技编程铁则》）学习，高效吸收知识',
      '没做出来的题，在阅读题解理解之后一定自己重新实现一遍，以巩固知识',
      '找出自己薄弱的领域（图论、动态规划等），有针对性地大量练习',
    ],
  },
  learnings: [
    '切身体会到，从“不会”出发，不断循环“查资料・尝试・理解”，就能稳步成长',
    '培养了拆解问题的能力，以及选择高效算法的能力',
    '在限定时间内写出正确代码的压力下，锻炼了冷静整理思路的能力',
  ],
  profileLabel: 'AtCoder Profile',
};

const ko: AtcoderDict = {
  title: 'AtCoder - 경쟁 프로그래밍',
  description:
    '키타무라 타츠키의 AtCoder 활동. Algorithm 갈색 / Heuristic 파랑 (최고 레이팅 1603). 약 2년째 계속 중, AHC 78위·노랑 퍼포먼스 기록.',
  period: '2024년 4월〜2026년 1월 (진행 중)',
  overviewBody:
    'AtCoder는 프로그래밍 문제를 푸는 속도와 정확성을 겨루는 콘테스트다. 알고리즘과 자료구조 지식을 활용해 제한 시간 안에 문제를 푸는 형식. 꾸준히 참여하여 Algorithm 부문에서 갈색, Heuristic 부문에서 파랑 랭크(최고 레이팅 1603)에 도달. 최근 AHC에서는 78위·노랑 퍼포먼스를 기록.',
  stats: [
    { heading: 'Algorithm 부문', value: '갈색 랭크 도달' },
    { heading: 'Heuristic 부문', value: '파랑 랭크 도달 (최고 레이팅 1603)' },
    { heading: 'AHC 최고 성적', value: '78위·노랑 퍼포먼스' },
  ],
  languages: '사용 언어',
  approach: {
    heading: '참여 방식',
    items: [
      '매주 열리는 콘테스트에 참가해 알고리즘 문제에 도전',
      'Algorithm 부문(알고리즘의 정확성과 속도를 겨룸)과 Heuristic 부문(시행착오로 최적해를 찾음) 양쪽에 도전',
      '처음에는 모르는 알고리즘투성이라 고전했지만, 꾸준히 학습을 이어 갔다',
    ],
  },
  efforts: {
    heading: '노력한 점',
    items: [
      '모르는 부분은 AI에게 질문하거나 체계적인 서적(『경쟁 프로그래밍의 철칙』 등)으로 학습하여 효율적으로 지식을 흡수',
      '풀지 못한 문제는 해설을 읽고 이해한 뒤 반드시 직접 다시 구현하여 지식을 정착',
      '취약한 분야(그래프, 동적 계획법 등)를 파악하고 집중적으로 연습을 쌓았다',
    ],
  },
  learnings: [
    '“모르는” 상태에서 조사하고·시도하고·이해하는 사이클을 계속 돌리면 착실히 성장할 수 있음을 실감',
    '문제를 분해해서 생각하는 힘, 효율적인 알고리즘을 선택하는 힘이 길러졌다',
    '제한 시간 안에 정확한 코드를 써야 하는 압박 속에서 침착하게 사고를 정리하는 힘이 단련되었다',
  ],
  profileLabel: 'AtCoder Profile',
};

const atcoder: Record<Locale, AtcoderDict> = { ja, en, zh, ko };
export default atcoder;
