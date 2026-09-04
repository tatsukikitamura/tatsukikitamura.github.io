import type { Locale } from '../config';

// Strings for /projects/opendata. Section headings shared with other project
// pages (overview, tech stack, links, demoClosed, closed) live in common.ts.

/** One feature card. `body` and `items` are HTML strings we author (set:html). */
type FeatureCard = {
  title: string;
  body: string;
  /** Bullet list under the body; empty for cards without a list. */
  items: string[];
};

const ja = {
  title: 'ノー遅延乗り換え - Open Data Challenge 2025',
  description:
    '北村健紀が開発した「ノー遅延乗り換え」。未来の遅延リスクを予測するルート検索アプリ。公共交通オープンデータチャレンジ2025 出品作品。',
  heading: 'ノー遅延乗り換え',
  badge: '公共交通オープンデータチャレンジ2025',
  period: '2025年10月〜現在（個人開発）',
  overview: {
    hook: '「今の時間は平常通りです」...その言葉を信じて遅刻したことはありませんか？',
    // rich
    body:
      '既存の乗換案内は「現在」の遅延しか教えてくれません。本アプリは、 <strong>未来の遅延リスクを予測</strong> し、「絶対に遅刻できない人」を安全に目的地まで送り届けるルート検索アプリです。 数ヶ月分のリアルタイム運行データを蓄積・解析し、統計的リスクを可視化します。',
  },
  features: {
    heading: '主な機能・技術的工夫',
    cards: [
      {
        title: '1. 独自グラフ探索エンジン（フルスクラッチ実装）',
        body: '既存APIに頼らず、Dijkstra法を応用した経路探索エンジンを独自に実装。',
        items: [
          '<strong>可変トランスファーバッファ</strong>: 乗り換え時間を動的に変化させ、リスク許容度に応じたルートを提示',
          '<strong>ペナルティ法による迂回路探索</strong>: 主要ルートにペナルティを与え、物理的に異なる代替ルートを強制的に導出',
        ],
      },
      {
        title: '2. 未来の遅延リスク予測',
        body: 'ODPT API等から収集した数ヶ月分の運行データを蓄積・解析。',
        items: [
          '「金曜日18時台のXX線は遅延確率が30%高い」といった傾向を統計的に導出',
          '現在正常運行でも、将来のリスクが高い場合は警告を表示',
        ],
      },
      {
        title: '3. AIコンシェルジュ',
        body: 'GPT-4o-miniを統合し、数値データだけでは伝わらない定性的なアドバイス（例：「イベント終了後の混雑回避」）を提供。',
        items: [],
      },
    ] as FeatureCard[],
  },
  contest: 'コンテスト',
};

type OpendataDict = typeof ja;

const en: OpendataDict = {
  title: 'No-Delay Transfer - Open Data Challenge 2025',
  description:
    '"No-Delay Transfer", built by Tatsuki Kitamura: a route search app that predicts future delay risk. Entered in the Public Transportation Open Data Challenge 2025.',
  heading: 'No-Delay Transfer',
  badge: 'Public Transportation Open Data Challenge 2025',
  period: 'Oct 2025 — present (personal project)',
  overview: {
    hook: '"Trains are running normally right now"... Have you ever trusted those words and ended up late?',
    body:
      'Existing transit apps only tell you about "current" delays. This app <strong>predicts future delay risk</strong> and gets people who "absolutely cannot be late" to their destination safely. It accumulates and analyses months of real-time operation data to visualise statistical risk.',
  },
  features: {
    heading: 'Key features and technical highlights',
    cards: [
      {
        title: '1. Custom graph search engine (built from scratch)',
        body: "Instead of relying on existing APIs, I implemented my own route search engine based on Dijkstra's algorithm.",
        items: [
          "<strong>Variable transfer buffer</strong>: transfer times change dynamically, so routes are proposed according to the user's risk tolerance",
          '<strong>Penalty-based detour search</strong>: penalties are applied to the main route to force physically different alternative routes to be derived',
        ],
      },
      {
        title: '2. Future delay risk prediction',
        body: 'Months of operation data collected from the ODPT API and other sources are accumulated and analysed.',
        items: [
          'Statistically derives trends such as "the XX Line is 30% more likely to be delayed around 18:00 on Fridays"',
          'Shows a warning when future risk is high, even if service is currently normal',
        ],
      },
      {
        title: '3. AI concierge',
        body: 'Integrates GPT-4o-mini to provide qualitative advice that numbers alone cannot convey (e.g. "avoiding the crowds after an event ends").',
        items: [],
      },
    ],
  },
  contest: 'Contest',
};

const zh: OpendataDict = {
  title: '零延误换乘 - Open Data Challenge 2025',
  description:
    '北村健纪开发的“零延误换乘”。预测未来延误风险的路线搜索应用。公共交通开放数据挑战赛 2025 参赛作品。',
  heading: '零延误换乘',
  badge: '公共交通开放数据挑战赛2025',
  period: '2025年10月〜至今（个人开发）',
  overview: {
    hook: '“目前运行正常”……你是否曾因为相信这句话而迟到？',
    body:
      '现有的换乘查询只能告诉你“当前”的延误情况。本应用<strong>预测未来的延误风险</strong>，把“绝对不能迟到的人”安全送达目的地。通过积累并分析数月的实时运行数据，将统计风险可视化。',
  },
  features: {
    heading: '主要功能・技术亮点',
    cards: [
      {
        title: '1. 自研图搜索引擎（从零实现）',
        body: '不依赖现有 API，自行实现了基于 Dijkstra 算法改进的路径搜索引擎。',
        items: [
          '<strong>可变换乘缓冲</strong>: 动态调整换乘时间，根据风险容忍度提供相应路线',
          '<strong>基于惩罚法的绕行路线搜索</strong>: 对主要路线施加惩罚，强制推导出物理上不同的备选路线',
        ],
      },
      {
        title: '2. 未来延误风险预测',
        body: '积累并分析从 ODPT API 等收集的数月运行数据。',
        items: [
          '统计推导出“周五 18 点时段的 XX 线延误概率高出 30%”之类的趋势',
          '即使当前运行正常，若未来风险较高也会显示警告',
        ],
      },
      {
        title: '3. AI 礼宾服务',
        body: '集成 GPT-4o-mini，提供仅凭数值数据无法传达的定性建议（例如：“避开活动结束后的拥挤”）。',
        items: [],
      },
    ],
  },
  contest: '比赛',
};

const ko: OpendataDict = {
  title: '노 지연 환승 - Open Data Challenge 2025',
  description:
    '키타무라 타츠키가 개발한 "노 지연 환승". 미래의 지연 리스크를 예측하는 경로 검색 앱. 공공교통 오픈데이터 챌린지 2025 출품작.',
  heading: '노 지연 환승',
  badge: '공공교통 오픈데이터 챌린지 2025',
  period: '2025년 10월〜현재 (개인 개발)',
  overview: {
    hook: '"지금 시간대는 정상 운행 중입니다"... 그 말을 믿고 지각한 적은 없으신가요?',
    body:
      '기존 환승 안내는 "현재"의 지연밖에 알려 주지 않습니다. 이 앱은 <strong>미래의 지연 리스크를 예측</strong>하여 "절대 지각할 수 없는 사람"을 목적지까지 안전하게 데려다주는 경로 검색 앱입니다. 수개월분의 실시간 운행 데이터를 축적·분석하여 통계적 리스크를 시각화합니다.',
  },
  features: {
    heading: '주요 기능·기술적 고민',
    cards: [
      {
        title: '1. 자체 그래프 탐색 엔진 (풀 스크래치 구현)',
        body: '기존 API에 의존하지 않고, Dijkstra 알고리즘을 응용한 경로 탐색 엔진을 직접 구현.',
        items: [
          '<strong>가변 환승 버퍼</strong>: 환승 시간을 동적으로 변화시켜 리스크 허용도에 맞는 경로를 제시',
          '<strong>페널티 기법에 의한 우회 경로 탐색</strong>: 주요 경로에 페널티를 부여하여 물리적으로 다른 대체 경로를 강제로 도출',
        ],
      },
      {
        title: '2. 미래의 지연 리스크 예측',
        body: 'ODPT API 등에서 수집한 수개월분의 운행 데이터를 축적·분석.',
        items: [
          '"금요일 18시대의 XX선은 지연 확률이 30% 높다" 같은 경향을 통계적으로 도출',
          '현재 정상 운행 중이라도 미래의 리스크가 높으면 경고를 표시',
        ],
      },
      {
        title: '3. AI 컨시어지',
        body: 'GPT-4o-mini를 통합하여, 수치 데이터만으로는 전달되지 않는 정성적인 조언(예: "이벤트 종료 후의 혼잡 회피")을 제공.',
        items: [],
      },
    ],
  },
  contest: '콘테스트',
};

const opendata: Record<Locale, OpendataDict> = { ja, en, zh, ko };
export default opendata;
