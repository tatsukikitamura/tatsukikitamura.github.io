import type { Locale } from '../config';

// Project detail page: /projects/yamatomo
// `overviewHtml` contains inline <strong> markup and is rendered with set:html.
const ja = {
  title: 'Yamatomo - 登山コミュニティアプリ',
  description:
    '北村健紀が開発する登山コミュニティアプリ「Yamatomo」。iOSアプリ（SwiftUI + Firebase）とWeb版（React + Firebase）を並行開発。',
  badge: '登山コミュニティアプリ',
  period: '2026年4月〜現在（チーム開発）',
  frameTitle: 'Yamatomo Web版（ライブサイト）',
  overviewHtml:
    '登山者同士がオンラインで繋がり、山ごとのコミュニティで交流できるサービス。<strong>iOSアプリ（SwiftUI + Firebase）</strong>と<strong>Web版（React + Firebase）</strong>を並行して開発し、同じバックエンド上で同等の体験を提供している。コミュニティ・チャット・山マップ・ベースキャンプ（山ごとの固定チャンネル）など、登山に特化した複数の機能を持つ。',
  stack: {
    ios: 'iOSアプリ',
    web: 'Web版',
  },
  features: {
    heading: '主な機能',
    items: [
      {
        title: 'コミュニティ',
        body: '趣味・目的別のコミュニティを作成・参加。AIによるコミュニティ自動生成にも対応。',
      },
      {
        title: '山マップ',
        body: '山を地図上から検索し、詳細・天気・写真アルバムを閲覧できる。',
      },
      {
        title: 'ベースキャンプ',
        body: '山ごとに用意された固定チャンネルで、その山に関心のある人と情報交換できる。',
      },
      {
        title: 'チャット / DM',
        body: 'DM・グループ・コミュニティ・ベースキャンプを共通基盤で実装。@メンションや返信スワイプも対応。',
      },
    ],
  },
  role: {
    heading: '役割',
    body: 'チームでの開発に参加し、iOSアプリ / Web版の機能実装を担当。Firestore のデータ設計や、iOS と Web の双方で一貫した体験を提供するための共通仕様の整備にも関わっている。',
  },
  officialSite: '公式サイト',
};

type YamatomoDict = typeof ja;

const en: YamatomoDict = {
  title: 'Yamatomo - Hiking community app',
  description:
    'Yamatomo, a hiking community app built by Tatsuki Kitamura: an iOS app (SwiftUI + Firebase) and a web version (React + Firebase) developed in parallel.',
  badge: 'Hiking community app',
  period: 'Apr 2026 — present (team project)',
  frameTitle: 'Yamatomo web version (live site)',
  overviewHtml:
    'A service where hikers connect online and interact in per-mountain communities. The <strong>iOS app (SwiftUI + Firebase)</strong> and the <strong>web version (React + Firebase)</strong> are developed in parallel and deliver the same experience on a shared backend. It offers several hiking-specific features, including communities, chat, a mountain map and base camps (a fixed channel for each mountain).',
  stack: {
    ios: 'iOS app',
    web: 'Web version',
  },
  features: {
    heading: 'Key features',
    items: [
      {
        title: 'Communities',
        body: 'Create and join communities by interest or purpose. Communities can also be generated automatically by AI.',
      },
      {
        title: 'Mountain map',
        body: 'Search for mountains on a map and browse details, weather and photo albums.',
      },
      {
        title: 'Base camps',
        body: 'A fixed channel for every mountain, where people interested in it can exchange information.',
      },
      {
        title: 'Chat / DM',
        body: 'DMs, groups, communities and base camps are all built on a shared foundation, with @mentions and swipe-to-reply.',
      },
    ],
  },
  role: {
    heading: 'My role',
    body: 'I work as part of the team implementing features for both the iOS app and the web version. I am also involved in designing the Firestore data model and maintaining the shared specifications that keep the iOS and web experiences consistent.',
  },
  officialSite: 'Official site',
};

const zh: YamatomoDict = {
  title: 'Yamatomo - 登山社区应用',
  description:
    '北村健纪参与开发的登山社区应用「Yamatomo」。iOS 应用（SwiftUI + Firebase）与 Web 版（React + Firebase）并行开发。',
  badge: '登山社区应用',
  period: '2026年4月〜至今（团队开发）',
  frameTitle: 'Yamatomo Web 版（在线站点）',
  overviewHtml:
    '让登山者在线上相互连接、在各座山的社区中交流的服务。<strong>iOS 应用（SwiftUI + Firebase）</strong>与<strong>Web 版（React + Firebase）</strong>并行开发，在同一后端上提供同等的体验。拥有社区、聊天、山地地图、大本营（每座山的固定频道）等多项登山专属功能。',
  stack: {
    ios: 'iOS 应用',
    web: 'Web 版',
  },
  features: {
    heading: '主要功能',
    items: [
      {
        title: '社区',
        body: '按兴趣、目的创建或加入社区。也支持由 AI 自动生成社区。',
      },
      {
        title: '山地地图',
        body: '在地图上搜索山峰，查看详情、天气和照片相册。',
      },
      {
        title: '大本营',
        body: '每座山都有专属的固定频道，可与关注这座山的人交换信息。',
      },
      {
        title: '聊天 / 私信',
        body: '私信、群组、社区、大本营基于同一套基础实现。支持 @提及和滑动回复。',
      },
    ],
  },
  role: {
    heading: '职责',
    body: '作为团队成员参与开发，负责 iOS 应用 / Web 版的功能实现。同时参与 Firestore 的数据设计，以及为在 iOS 与 Web 双端提供一致体验而制定的通用规范。',
  },
  officialSite: '官方网站',
};

const ko: YamatomoDict = {
  title: 'Yamatomo - 등산 커뮤니티 앱',
  description:
    '키타무라 타츠키가 개발하는 등산 커뮤니티 앱 「Yamatomo」. iOS 앱(SwiftUI + Firebase)과 웹 버전(React + Firebase)을 병행 개발.',
  badge: '등산 커뮤니티 앱',
  period: '2026년 4월〜현재 (팀 개발)',
  frameTitle: 'Yamatomo 웹 버전 (라이브 사이트)',
  overviewHtml:
    '등산객들이 온라인으로 연결되어 산별 커뮤니티에서 교류할 수 있는 서비스. <strong>iOS 앱(SwiftUI + Firebase)</strong>과 <strong>웹 버전(React + Firebase)</strong>을 병행 개발하여 같은 백엔드 위에서 동일한 경험을 제공하고 있다. 커뮤니티·채팅·산 지도·베이스캠프(산별 고정 채널) 등 등산에 특화된 여러 기능을 갖추고 있다.',
  stack: {
    ios: 'iOS 앱',
    web: '웹 버전',
  },
  features: {
    heading: '주요 기능',
    items: [
      {
        title: '커뮤니티',
        body: '취미·목적별 커뮤니티를 만들고 참여. AI를 통한 커뮤니티 자동 생성도 지원.',
      },
      {
        title: '산 지도',
        body: '지도에서 산을 검색하고 상세 정보·날씨·사진 앨범을 볼 수 있다.',
      },
      {
        title: '베이스캠프',
        body: '산마다 마련된 고정 채널에서 그 산에 관심 있는 사람들과 정보를 교환할 수 있다.',
      },
      {
        title: '채팅 / DM',
        body: 'DM·그룹·커뮤니티·베이스캠프를 공통 기반으로 구현. @멘션과 스와이프 답장도 지원.',
      },
    ],
  },
  role: {
    heading: '역할',
    body: '팀 개발에 참여하여 iOS 앱 / 웹 버전의 기능 구현을 담당. Firestore 데이터 설계와, iOS와 웹 양쪽에서 일관된 경험을 제공하기 위한 공통 사양 정비에도 관여하고 있다.',
  },
  officialSite: '공식 사이트',
};

const yamatomo: Record<Locale, YamatomoDict> = { ja, en, zh, ko };
export default yamatomo;
