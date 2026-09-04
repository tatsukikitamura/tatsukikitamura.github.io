import type { Locale } from '../config';

/** One block inside a timeline card: a small heading followed by bullets or a paragraph. */
export type ExperienceSection =
  | { heading: string; bullets: string[] }
  | { heading: string; paragraph: string };

/** One timeline card. Which optional keys are present decides which body markup is rendered. */
export type ExperienceEntry = {
  title: string;
  period: string;
  org?: string;
  sections?: ExperienceSection[];
  paragraphs?: string[];
  paragraph?: string;
  tags?: string[];
};

const ja = {
  title: 'Experience - 経験・実績',
  description:
    '北村健紀の経験・実績。Gravity Game Arise でのQA・デバッグ（2年）、ハッカソン参加、イベント運営、教育経験など。',
  heading: 'Experience',
  subtitle: '経験・実績',
  workHeading: 'Work & Activities',
  educationHeading: 'Education',
  entries: {
    qa: {
      title: 'QA・デバッグ',
      period: '2023年4月 — 2025年4月（2年間）',
      org: 'Gravity Game Arise',
      sections: [
        {
          heading: '担当業務',
          bullets: [
            '5名規模のデバッグチームの一員として、不具合の検出・再現・報告を担当',
            'テストケースの作成・実行、バグレポートの整理とステータス管理',
            'モバイル・Steamなどマルチプラットフォーム向けゲームの品質向上に関与',
          ],
        },
        {
          heading: '主な成果',
          paragraph:
            'リリース前の重要機能において、再現性の低い致命的なバグを発見。ログファイルを詳細に分析して発生条件を特定し、開発チームに共有したことで、リリース前に修正が間に合った。',
        },
        {
          heading: '学び',
          bullets: [
            'QA視点だけでなく、エンジニア視点を持って不具合を見ることの重要性',
            '再現手順や状況を正確かつ簡潔に伝えることの重要性',
          ],
        },
      ],
      tags: ['Backlog', 'バグ管理', 'テスト設計'],
    },
    event: {
      title: 'イベント運営（企画責任者）',
      period: '2025年3月',
      org: '岳文会（山岳サークル） / SHIBUYA DAIA',
      sections: [
        {
          heading: '概要',
          paragraph:
            '渋谷のライブハウス「SHIBUYA DAIA」を会場とした卒業生追い出しイベント（約75名規模）を企画・運営。企画段階から当日運営、会計まで一貫して担当。',
        },
        {
          heading: '担当したこと',
          bullets: [
            '日程調整、会場手配、予算設計（参加費の目安設定を含む）',
            '告知と参加者管理、当日の進行と全体のとりまとめ',
            '運営フローのテンプレート化と次年度への引き継ぎ資料作成',
          ],
        },
        {
          heading: '成果',
          paragraph:
            '資料化の取り組みが評価され、2026年3月には後輩がこのノウハウを活用して同じ会場でイベントを開催することが決定。',
        },
      ],
      tags: ['プロジェクト管理', 'リーダーシップ', '60名規模'],
    },
    hackathon: {
      title: 'PR TIMESハッカソン',
      period: '2025年8月（3日間）',
      org: 'PR TIMES主催 / 4人チーム',
      sections: [
        {
          heading: '概要',
          paragraph:
            '「プレスリリースをAIで添削する」WebアプリをPR TIMES主催のハッカソンで4人チームが開発。3日間の短期集中開発。',
        },
        {
          heading: '担当',
          bullets: [
            'バックエンド担当として、AI APIを呼び出すエンドポイントを実装',
            'Gitブランチ運用・プルリクエストベースのチーム開発フローを整備',
          ],
        },
        {
          heading: '学び',
          paragraph:
            '短期チーム開発では「最低限のGit運用ルールとコーディング規約を揃えること」が開発スピードと品質の両方に直結することを実感した。',
        },
      ],
      tags: ['チーム開発', '生成AI', 'Git運用'],
    },
    tutor: {
      title: '塾講師',
      period: '約1年間',
      paragraphs: [
        '小学生〜高校生に数学・英語・理科などを指導。',
        '最初は説明がうまくできなかったが、「結論→理由→具体例」の順で話すことを意識し、板書やメモの構成を工夫することで、少しずつ理解してもらえる場面が増えた。',
      ],
      tags: ['教育', 'コミュニケーション'],
    },
    dj: {
      title: 'DJサークル',
      period: '1年間',
      paragraph:
        'イベントでのDJとして、会場の雰囲気を見ながら曲を選ぶ経験を積んだ。周りを観察して、何が求められているかを考えるクセがついた。',
    },
  },
  education: {
    school: '早稲田大学',
    department: '教育学部 数学科',
  },
};

type ExperienceDict = typeof ja;

const en: ExperienceDict = {
  title: 'Experience - Work & Activities',
  description:
    'Experience and achievements of Tatsuki Kitamura: two years of QA and debugging at Gravity Game Arise, hackathons, event management, and teaching.',
  heading: 'Experience',
  subtitle: 'Work & activities',
  workHeading: 'Work & Activities',
  educationHeading: 'Education',
  entries: {
    qa: {
      title: 'QA & Debugging',
      period: 'Apr 2023 — Apr 2025 (2 years)',
      org: 'Gravity Game Arise',
      sections: [
        {
          heading: 'Responsibilities',
          bullets: [
            'Found, reproduced and reported defects as part of a five-person debugging team',
            'Wrote and ran test cases; organised bug reports and tracked their status',
            'Helped raise the quality of multi-platform games shipping on mobile and Steam',
          ],
        },
        {
          heading: 'Key achievement',
          paragraph:
            'Uncovered a hard-to-reproduce, critical bug in a key feature ahead of release. By digging through the log files I pinned down the exact conditions that triggered it and shared them with the development team, so the fix landed before launch.',
        },
        {
          heading: 'What I learned',
          bullets: [
            'Looking at defects from an engineer’s point of view, not just a QA one',
            'Communicating repro steps and context accurately and concisely',
          ],
        },
      ],
      tags: ['Backlog', 'Bug tracking', 'Test design'],
    },
    event: {
      title: 'Event management (lead organiser)',
      period: 'Mar 2025',
      org: 'Gakubunkai (mountaineering club) / SHIBUYA DAIA',
      sections: [
        {
          heading: 'Overview',
          paragraph:
            'Planned and ran a farewell party for graduating members (about 75 people) at the Shibuya live house SHIBUYA DAIA, handling everything from initial planning to on-the-day operations and accounting.',
        },
        {
          heading: 'What I did',
          bullets: [
            'Scheduling, venue booking and budgeting (including setting a ticket price guideline)',
            'Promotion and attendee management; running the programme and coordinating the whole event on the day',
            'Turned the operations flow into a template and wrote handover docs for the following year',
          ],
        },
        {
          heading: 'Outcome',
          paragraph:
            'The documentation was well received: in March 2026 the next cohort will use it to hold the event at the same venue.',
        },
      ],
      tags: ['Project management', 'Leadership', '60+ attendees'],
    },
    hackathon: {
      title: 'PR TIMES Hackathon',
      period: 'Aug 2025 (3 days)',
      org: 'Hosted by PR TIMES / team of 4',
      sections: [
        {
          heading: 'Overview',
          paragraph:
            'Built a web app that proofreads press releases with AI in a four-person team at a hackathon hosted by PR TIMES. Three days of intensive development.',
        },
        {
          heading: 'My role',
          bullets: [
            'Backend: implemented the endpoints that call the AI API',
            'Set up the team’s Git branching and pull-request based workflow',
          ],
        },
        {
          heading: 'What I learned',
          paragraph:
            'In a short team sprint, agreeing on a minimal set of Git rules and coding conventions directly affects both speed and quality.',
        },
      ],
      tags: ['Team development', 'Generative AI', 'Git workflow'],
    },
    tutor: {
      title: 'Cram school tutor',
      period: 'About 1 year',
      paragraphs: [
        'Taught maths, English and science to students from elementary through high school.',
        'My explanations were clumsy at first, but by consciously structuring them as “conclusion → reason → example” and rethinking how I laid out the whiteboard and notes, students gradually started to get it.',
      ],
      tags: ['Teaching', 'Communication'],
    },
    dj: {
      title: 'DJ club',
      period: '1 year',
      paragraph:
        'DJing at events taught me to pick tracks by reading the room. It left me with a habit of observing the people around me and thinking about what they actually want.',
    },
  },
  education: {
    school: 'Waseda University',
    department: 'School of Education, Department of Mathematics',
  },
};

const zh: ExperienceDict = {
  title: 'Experience - 经历与成果',
  description:
    '北村健纪的经历与成果。在 Gravity Game Arise 从事 QA・调试（2年）、参加黑客松、活动运营、教学经验等。',
  heading: 'Experience',
  subtitle: '经历与成果',
  workHeading: 'Work & Activities',
  educationHeading: 'Education',
  entries: {
    qa: {
      title: 'QA・调试',
      period: '2023年4月 — 2025年4月（2年）',
      org: 'Gravity Game Arise',
      sections: [
        {
          heading: '负责工作',
          bullets: [
            '作为 5 人调试团队的一员，负责缺陷的发现、复现与报告',
            '编写并执行测试用例，整理 Bug 报告并管理状态',
            '参与提升面向手机、Steam 等多平台游戏的品质',
          ],
        },
        {
          heading: '主要成果',
          paragraph:
            '在发布前的关键功能中发现了一个难以复现的致命 Bug。通过详细分析日志文件确定了触发条件，并与开发团队共享，使修复赶在发布前完成。',
        },
        {
          heading: '收获',
          bullets: [
            '不仅从 QA 视角，也要从工程师视角来审视缺陷',
            '准确而简洁地传达复现步骤与情况非常重要',
          ],
        },
      ],
      tags: ['Backlog', 'Bug 管理', '测试设计'],
    },
    event: {
      title: '活动运营（策划负责人）',
      period: '2025年3月',
      org: '岳文会（登山社团） / SHIBUYA DAIA',
      sections: [
        {
          heading: '概述',
          paragraph:
            '以涩谷的 Livehouse「SHIBUYA DAIA」为场地，策划并运营了约 75 人规模的毕业生欢送活动。从策划阶段到当天运营、财务结算全程负责。',
        },
        {
          heading: '负责内容',
          bullets: [
            '日程协调、场地安排、预算设计（包括设定参加费标准）',
            '宣传与参加者管理，当天的流程推进与整体统筹',
            '将运营流程模板化，并编写交接资料供下一年度使用',
          ],
        },
        {
          heading: '成果',
          paragraph:
            '资料化的做法获得好评，2026年3月学弟学妹将利用这些经验在同一场地再次举办活动。',
        },
      ],
      tags: ['项目管理', '领导力', '60人规模'],
    },
    hackathon: {
      title: 'PR TIMES 黑客松',
      period: '2025年8月（3天）',
      org: 'PR TIMES 主办 / 4人团队',
      sections: [
        {
          heading: '概述',
          paragraph:
            '在 PR TIMES 主办的黑客松上，4 人团队开发了「用 AI 校对新闻稿」的 Web 应用。为期 3 天的短期集中开发。',
        },
        {
          heading: '负责部分',
          bullets: [
            '担任后端，实现调用 AI API 的接口',
            '搭建基于 Git 分支运用与 Pull Request 的团队开发流程',
          ],
        },
        {
          heading: '收获',
          paragraph:
            '深刻体会到在短期团队开发中，「统一最基本的 Git 规则与编码规范」直接关系到开发速度与质量。',
        },
      ],
      tags: ['团队开发', '生成式 AI', 'Git 运用'],
    },
    tutor: {
      title: '补习班讲师',
      period: '约1年',
      paragraphs: [
        '面向小学生至高中生教授数学、英语、理科等科目。',
        '起初讲解得并不好，后来有意识地按「结论→理由→具体例子」的顺序说明，并在板书和笔记的结构上下功夫，学生能听懂的场合逐渐增多。',
      ],
      tags: ['教育', '沟通'],
    },
    dj: {
      title: 'DJ 社团',
      period: '1年',
      paragraph:
        '作为活动 DJ，积累了根据现场氛围选曲的经验。养成了观察周围、思考大家需要什么的习惯。',
    },
  },
  education: {
    school: '早稻田大学',
    department: '教育学部 数学系',
  },
};

const ko: ExperienceDict = {
  title: 'Experience - 경험·실적',
  description:
    '키타무라 타츠키의 경험·실적. Gravity Game Arise에서의 QA·디버깅(2년), 해커톤 참가, 이벤트 운영, 교육 경험 등.',
  heading: 'Experience',
  subtitle: '경험·실적',
  workHeading: 'Work & Activities',
  educationHeading: 'Education',
  entries: {
    qa: {
      title: 'QA·디버깅',
      period: '2023년 4월 — 2025년 4월 (2년)',
      org: 'Gravity Game Arise',
      sections: [
        {
          heading: '담당 업무',
          bullets: [
            '5명 규모 디버깅 팀의 일원으로 버그 발견·재현·보고를 담당',
            '테스트 케이스 작성·실행, 버그 리포트 정리 및 상태 관리',
            '모바일·Steam 등 멀티 플랫폼 게임의 품질 향상에 기여',
          ],
        },
        {
          heading: '주요 성과',
          paragraph:
            '출시 전 핵심 기능에서 재현성이 낮은 치명적인 버그를 발견. 로그 파일을 상세히 분석해 발생 조건을 특정하고 개발팀에 공유하여, 출시 전에 수정을 마칠 수 있었다.',
        },
        {
          heading: '배운 점',
          bullets: [
            'QA 시점뿐 아니라 엔지니어 시점으로 버그를 바라보는 것의 중요성',
            '재현 절차와 상황을 정확하고 간결하게 전달하는 것의 중요성',
          ],
        },
      ],
      tags: ['Backlog', '버그 관리', '테스트 설계'],
    },
    event: {
      title: '이벤트 운영 (기획 책임자)',
      period: '2025년 3월',
      org: '가쿠분카이 (산악 동아리) / SHIBUYA DAIA',
      sections: [
        {
          heading: '개요',
          paragraph:
            '시부야의 라이브하우스 「SHIBUYA DAIA」를 회장으로 한 졸업생 송별 이벤트(약 75명 규모)를 기획·운영. 기획 단계부터 당일 운영, 회계까지 일관되게 담당.',
        },
        {
          heading: '담당한 일',
          bullets: [
            '일정 조율, 회장 섭외, 예산 설계 (참가비 기준 설정 포함)',
            '홍보와 참가자 관리, 당일 진행 및 전체 총괄',
            '운영 흐름의 템플릿화와 다음 연도를 위한 인수인계 자료 작성',
          ],
        },
        {
          heading: '성과',
          paragraph:
            '자료화 노력이 좋은 평가를 받아, 2026년 3월에는 후배들이 이 노하우를 활용해 같은 회장에서 이벤트를 개최하기로 결정.',
        },
      ],
      tags: ['프로젝트 관리', '리더십', '60명 규모'],
    },
    hackathon: {
      title: 'PR TIMES 해커톤',
      period: '2025년 8월 (3일간)',
      org: 'PR TIMES 주최 / 4인 팀',
      sections: [
        {
          heading: '개요',
          paragraph:
            'PR TIMES 주최 해커톤에서 4인 팀이 「보도자료를 AI로 첨삭하는」 웹 앱을 개발. 3일간의 단기 집중 개발.',
        },
        {
          heading: '담당',
          bullets: [
            '백엔드 담당으로 AI API를 호출하는 엔드포인트를 구현',
            'Git 브랜치 운용·Pull Request 기반 팀 개발 플로우를 정비',
          ],
        },
        {
          heading: '배운 점',
          paragraph:
            '단기 팀 개발에서는 「최소한의 Git 운용 규칙과 코딩 규약을 맞추는 것」이 개발 속도와 품질 모두에 직결된다는 것을 실감했다.',
        },
      ],
      tags: ['팀 개발', '생성형 AI', 'Git 운용'],
    },
    tutor: {
      title: '학원 강사',
      period: '약 1년',
      paragraphs: [
        '초등학생부터 고등학생까지 수학·영어·과학 등을 지도.',
        '처음에는 설명이 서툴렀지만, 「결론→이유→구체적 예시」 순서로 말하는 것을 의식하고 판서와 메모 구성을 궁리하면서, 조금씩 이해시키는 장면이 늘어났다.',
      ],
      tags: ['교육', '커뮤니케이션'],
    },
    dj: {
      title: 'DJ 동아리',
      period: '1년',
      paragraph:
        '이벤트 DJ로서 현장 분위기를 보며 곡을 고르는 경험을 쌓았다. 주위를 관찰하고 무엇이 필요한지 생각하는 습관이 생겼다.',
    },
  },
  education: {
    school: '와세다대학교',
    department: '교육학부 수학과',
  },
};

const experience: Record<Locale, ExperienceDict> = { ja, en, zh, ko };
export default experience;
