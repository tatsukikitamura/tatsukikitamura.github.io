import type { Locale } from '../config';

const ja = {
  title: 'Contact - お問い合わせ',
  description:
    '北村健紀（Tatsuki Kitamura）へのお問い合わせ。Webサイト制作のご相談、お見積もり、ご質問など、Instagram DM・メールから24時間以内に返信いたします。',
  // Rendered as `{line1}<br class="sm:hidden" />{line2}` so the h1 wraps only on phones.
  heading: {
    line1: 'Web制作のご依頼、',
    line2: '承ります',
  },
  intro: {
    heading: 'はじめに',
    // Each line is separated by a <br />.
    lines: [
      '早稲田大学4年の北村健紀です。',
      '独学でプログラミングを始めて約1年半、ReactやRailsを使ったWeb開発を続けてきました。',
      '就活がひと段落したので、これからはWeb制作のご依頼を積極的に受け付けていこうと思っています。',
      '小規模なLPから個人開発レベルのWebアプリまで、お気軽にご相談ください。',
    ],
  },
  services: {
    heading: '対応できる制作内容',
    lead: '「こんなサイトが欲しい」をそのまま形にします。下記はあくまで一例です。',
    items: [
      {
        tag: '個人向け',
        title: '個人用 Website',
        desc: '自己紹介・SNSリンク・活動記録などをひとつにまとめる、自分専用のホームページ。趣味や発信活動の拠点として。',
        points: ['自己紹介ページ', 'SNS / 各種リンク集約', 'カスタムドメイン対応'],
      },
      {
        tag: '学生向け',
        title: '就活用ポートフォリオサイト',
        desc: 'ガクチカ・作品・スキルをまとめ、エントリーシートや面接で「URLひとつ」で渡せる就活専用ページ。',
        points: ['プロフィール / 経歴', '作品・成果物の掲載', 'スマホ最適化'],
      },
      {
        tag: '店舗・事業向け',
        title: 'お店 / コーポレートサイト',
        desc: 'カフェ・サロン・小規模事業のための数ページ構成サイト。営業時間やメニュー、お問い合わせフォームまで。',
        points: ['トップ / About / メニュー', 'お問い合わせフォーム', 'Google Maps 埋め込み'],
      },
    ],
    note: '※ 上記以外でも「こういうのできる？」というご相談は大歓迎です。',
  },
  flow: {
    heading: '対応の流れ',
    steps: [
      {
        title: 'お問い合わせ',
        desc: 'DM・メールで気軽にご相談ください。',
        note: '24時間以内に返信します。',
      },
      {
        title: 'ヒアリング（無料）',
        desc: 'オンライン or 対面で30〜60分ほど、ご要望と現状をお伺いします。',
        note: '無理な営業はしません。',
      },
      {
        title: 'お見積もり・ご契約',
        desc: '見積書・契約書をお送りします。ご納得いただいてから着手します。',
        note: 'この段階での費用はかかりません。',
      },
      {
        title: '制作・公開',
        desc: '進捗を共有しながら制作します。公開後のサポートも対応可能です。',
        note: '保守も都度ご相談ください。',
      },
    ],
  },
  tech: {
    heading: '使用技術',
    frontend: 'FRONTEND',
    backend: 'BACKEND',
    infra: 'INFRA / OTHERS',
  },
  pricing: {
    heading: '料金について',
    // `{before}<span class="font-semibold">{emph}</span>{after}`
    main: {
      before: '制作費は',
      emph: '要相談',
      after: 'とさせていただいています。',
    },
    detail: 'サイトの規模・ご要望・納期によって変動するため、まずはお話を伺った上で、お見積もりをお出しします。',
    freeEmph: 'ご相談・お見積もりは無料です。',
    freeAfter: 'お気軽にお問い合わせください。',
    extrasHeading: '別途必要となる費用',
    extras: [
      'ドメイン取得費（年間 1,500円〜）',
      '有料APIの利用料（必要な場合のみ）',
      'その他、運用に必要な実費',
    ],
  },
  contact: {
    heading: 'お問い合わせ',
    lead: 'ご相談・お見積もりは無料です。InstagramのDMが一番反応が早く、24時間以内にご返信します。',
    instagram: 'Instagram でDM',
    mail: 'メールで相談する',
    github: 'GitHub',
  },
  faq: {
    heading: 'よくあるご質問',
    items: [
      {
        q: 'どんな業種でも対応してもらえますか？',
        a: 'はい、業種を問わず対応可能です。個人事業主の方から店舗運営の方まで、様々な世界観のサイトを制作してきました。',
      },
      {
        q: '契約書は交わせますか？',
        a: 'もちろんです。業務委託契約書をご用意しておりますので、安心してご依頼いただけます。',
      },
      {
        q: '打ち合わせは対面とオンラインどちらに対応していますか？',
        a: '両方対応可能です。Zoom・Google Meet等のオンライン会議、または都内であれば対面打ち合わせも可能です。',
      },
      {
        q: 'サイト公開後の修正やメンテナンスはお願いできますか？',
        a: 'はい、保守についても都度ご相談に応じます。詳細はお見積もり時にご相談ください。',
      },
      {
        q: '制作期間はどれくらいかかりますか？',
        a: '規模にもよりますが、シンプルなLPであれば1〜2週間、複数ページのサイトで3〜4週間程度が目安です。',
      },
    ],
  },
};

type ContactDict = typeof ja;

const en: ContactDict = {
  title: 'Contact - Get in touch',
  description:
    'Contact Tatsuki Kitamura. Questions, quotes and enquiries about building a website are welcome via Instagram DM or email, and I reply within 24 hours.',
  heading: {
    line1: 'Open for',
    line2: ' web projects',
  },
  intro: {
    heading: 'Hello',
    lines: [
      'I’m Tatsuki Kitamura, a fourth-year student at Waseda University.',
      'I taught myself to program about a year and a half ago and have been building for the web with React and Rails ever since.',
      'With job hunting behind me, I’m now actively taking on web development work.',
      'From a small landing page to an indie-scale web app, feel free to get in touch.',
    ],
  },
  services: {
    heading: 'What I can build',
    lead: 'Tell me the site you have in mind and I’ll turn it into reality. The examples below are just a starting point.',
    items: [
      {
        tag: 'FOR INDIVIDUALS',
        title: 'Personal website',
        desc: 'A home page of your own that gathers your bio, social links and activity log in one place. A base for your hobbies and creative output.',
        points: ['About page', 'Social & link hub', 'Custom domain support'],
      },
      {
        tag: 'FOR STUDENTS',
        title: 'Job-hunting portfolio',
        desc: 'A dedicated page that brings together your experiences, work and skills so you can hand recruiters a single URL on application forms and in interviews.',
        points: ['Profile & background', 'Showcase of your work', 'Mobile-optimised'],
      },
      {
        tag: 'FOR SHOPS & BUSINESSES',
        title: 'Shop / company website',
        desc: 'A multi-page site for cafes, salons and small businesses, from opening hours and menus to a contact form.',
        points: ['Home / About / Menu', 'Contact form', 'Google Maps embed'],
      },
    ],
    note: '* Not on the list? “Can you do something like this?” questions are very welcome.',
  },
  flow: {
    heading: 'How it works',
    steps: [
      {
        title: 'Get in touch',
        desc: 'Send me a DM or an email, no strings attached.',
        note: 'I reply within 24 hours.',
      },
      {
        title: 'Discovery call (free)',
        desc: 'A 30–60 minute chat, online or in person, about what you need and where you are now.',
        note: 'No hard selling.',
      },
      {
        title: 'Quote & contract',
        desc: 'I send over a quote and a contract. Work starts only once you are happy with them.',
        note: 'Nothing is charged at this stage.',
      },
      {
        title: 'Build & launch',
        desc: 'I build the site while keeping you updated on progress. Post-launch support is available too.',
        note: 'Maintenance can be arranged as needed.',
      },
    ],
  },
  tech: {
    heading: 'Tech stack',
    frontend: 'FRONTEND',
    backend: 'BACKEND',
    infra: 'INFRA / OTHERS',
  },
  pricing: {
    heading: 'Pricing',
    main: {
      before: 'Pricing is ',
      emph: 'quoted per project',
      after: '.',
    },
    detail: 'It depends on the size of the site, your requirements and the deadline, so I put together a quote after we have talked.',
    freeEmph: 'Consultations and quotes are free.',
    // Leading space: the page renders this right after the emphasised sentence.
    freeAfter: ' Feel free to reach out.',
    extrasHeading: 'Costs billed separately',
    extras: [
      'Domain registration (from about ¥1,500 per year)',
      'Paid API usage fees (only if needed)',
      'Other out-of-pocket costs required to run the site',
    ],
  },
  contact: {
    heading: 'Contact',
    lead: 'Consultations and quotes are free. Instagram DM gets the fastest response; I reply within 24 hours.',
    instagram: 'DM on Instagram',
    mail: 'Email me',
    github: 'GitHub',
  },
  faq: {
    heading: 'FAQ',
    items: [
      {
        q: 'Do you work with any kind of business?',
        a: 'Yes, any industry is welcome. I have built sites with all sorts of looks and feels, for everyone from sole traders to shop owners.',
      },
      {
        q: 'Can we sign a contract?',
        a: 'Of course. I have a standard freelance service agreement ready, so you can commission work with peace of mind.',
      },
      {
        q: 'Do you meet in person or online?',
        a: 'Both. We can meet over Zoom or Google Meet, or in person if you are in Tokyo.',
      },
      {
        q: 'Can you handle updates and maintenance after launch?',
        a: 'Yes, maintenance can be arranged on a case-by-case basis. We can go over the details when I prepare your quote.',
      },
      {
        q: 'How long does a project take?',
        a: 'It depends on the scope, but as a rough guide a simple landing page takes 1–2 weeks and a multi-page site 3–4 weeks.',
      },
    ],
  },
};

const zh: ContactDict = {
  title: 'Contact - 联系我',
  description:
    '联系北村健纪（Tatsuki Kitamura）。网站制作咨询、报价、疑问等，均可通过 Instagram 私信或邮件联系，24 小时内回复。',
  heading: {
    line1: '承接网站制作',
    line2: '委托',
  },
  intro: {
    heading: '前言',
    lines: [
      '我是早稻田大学四年级的北村健纪。',
      '自学编程约一年半以来，一直在用 React 和 Rails 进行 Web 开发。',
      '求职告一段落，接下来打算积极承接网站制作的委托。',
      '从小型落地页到个人开发规模的 Web 应用，欢迎随时咨询。',
    ],
  },
  services: {
    heading: '可承接的制作内容',
    lead: '把「我想要这样的网站」原样变成现实。以下仅为示例。',
    items: [
      {
        tag: '面向个人',
        title: '个人网站',
        desc: '把自我介绍、社交媒体链接、活动记录等汇集于一处的专属主页。作为兴趣与内容创作的据点。',
        points: ['自我介绍页面', '社交媒体 / 各类链接汇总', '支持自定义域名'],
      },
      {
        tag: '面向学生',
        title: '求职作品集网站',
        desc: '汇总学生时代的经历、作品与技能，在简历和面试中「一个链接」就能递出去的求职专用页面。',
        points: ['个人简介 / 经历', '作品・成果展示', '手机端优化'],
      },
      {
        tag: '面向店铺・企业',
        title: '店铺 / 企业网站',
        desc: '为咖啡馆、沙龙、小型企业打造的多页面网站。营业时间、菜单、联系表单一应俱全。',
        points: ['首页 / About / 菜单', '联系表单', '嵌入 Google Maps'],
      },
    ],
    note: '※ 上述以外的需求，「这种能做吗？」之类的咨询也非常欢迎。',
  },
  flow: {
    heading: '合作流程',
    steps: [
      {
        title: '联系咨询',
        desc: '通过私信或邮件随时联系。',
        note: '24 小时内回复。',
      },
      {
        title: '需求沟通（免费）',
        desc: '线上或线下，用 30〜60 分钟了解您的需求与现状。',
        note: '不会强行推销。',
      },
      {
        title: '报价・签约',
        desc: '发送报价单与合同。确认满意后再开始制作。',
        note: '此阶段不产生任何费用。',
      },
      {
        title: '制作・上线',
        desc: '在共享进度的同时进行制作。上线后的支持也可提供。',
        note: '维护事宜可随时商量。',
      },
    ],
  },
  tech: {
    heading: '使用技术',
    frontend: 'FRONTEND',
    backend: 'BACKEND',
    infra: 'INFRA / OTHERS',
  },
  pricing: {
    heading: '关于费用',
    main: {
      before: '制作费用为',
      emph: '面议',
      after: '。',
    },
    detail: '费用会根据网站规模、需求与交期而变动，因此先听取您的想法后再提供报价。',
    freeEmph: '咨询与报价均免费。',
    freeAfter: '欢迎随时联系。',
    extrasHeading: '需另行承担的费用',
    extras: [
      '域名注册费（每年 1,500 日元起）',
      '付费 API 的使用费（仅在需要时）',
      '其他运营所需的实际费用',
    ],
  },
  contact: {
    heading: '联系方式',
    lead: '咨询与报价均免费。Instagram 私信回复最快，24 小时内回复。',
    instagram: 'Instagram 私信',
    mail: '邮件咨询',
    github: 'GitHub',
  },
  faq: {
    heading: '常见问题',
    items: [
      {
        q: '任何行业都可以承接吗？',
        a: '是的，不限行业。从个体经营者到店铺运营者，我制作过各种风格的网站。',
      },
      {
        q: '可以签订合同吗？',
        a: '当然可以。我备有业务委托合同，您可以放心委托。',
      },
      {
        q: '洽谈支持线下还是线上？',
        a: '两者皆可。可通过 Zoom、Google Meet 等线上会议进行，若在东京都内也可以当面洽谈。',
      },
      {
        q: '网站上线后的修改和维护可以拜托吗？',
        a: '可以，维护事宜可随时商量。详情请在报价时一并沟通。',
      },
      {
        q: '制作周期大概需要多久？',
        a: '视规模而定，简单的落地页约 1〜2 周，多页面网站约 3〜4 周。',
      },
    ],
  },
};

const ko: ContactDict = {
  title: 'Contact - 문의하기',
  description:
    '키타무라 타츠키(Tatsuki Kitamura)에게 문의하기. 웹사이트 제작 상담, 견적, 질문 등은 Instagram DM·이메일로 보내 주시면 24시간 이내에 답변드립니다.',
  heading: {
    line1: '웹 제작 의뢰를',
    line2: ' 받고 있습니다',
  },
  intro: {
    heading: '들어가며',
    lines: [
      '와세다대학교 4학년 키타무라 타츠키입니다.',
      '독학으로 프로그래밍을 시작한 지 약 1년 반, React와 Rails를 사용한 웹 개발을 이어 왔습니다.',
      '취업 활동이 일단락되어, 앞으로는 웹 제작 의뢰를 적극적으로 받으려고 합니다.',
      '소규모 랜딩 페이지부터 개인 개발 수준의 웹 앱까지, 부담 없이 상담해 주세요.',
    ],
  },
  services: {
    heading: '제작 가능한 내용',
    lead: '「이런 사이트가 갖고 싶다」를 그대로 형태로 만듭니다. 아래는 어디까지나 예시입니다.',
    items: [
      {
        tag: '개인용',
        title: '개인 웹사이트',
        desc: '자기소개·SNS 링크·활동 기록 등을 하나로 모은 나만의 홈페이지. 취미나 창작 활동의 거점으로.',
        points: ['자기소개 페이지', 'SNS / 각종 링크 모음', '커스텀 도메인 지원'],
      },
      {
        tag: '학생용',
        title: '취업용 포트폴리오 사이트',
        desc: '학창 시절의 경험·작품·스킬을 정리해, 지원서나 면접에서 「URL 하나」로 건넬 수 있는 취업 전용 페이지.',
        points: ['프로필 / 경력', '작품·결과물 게재', '모바일 최적화'],
      },
      {
        tag: '매장·사업자용',
        title: '매장 / 기업 사이트',
        desc: '카페·살롱·소규모 사업을 위한 여러 페이지 구성의 사이트. 영업시간과 메뉴, 문의 폼까지.',
        points: ['메인 / About / 메뉴', '문의 폼', 'Google Maps 삽입'],
      },
    ],
    note: '※ 위 항목 외에도 「이런 것도 가능한가요?」 같은 상담은 언제든 환영입니다.',
  },
  flow: {
    heading: '진행 과정',
    steps: [
      {
        title: '문의',
        desc: 'DM·이메일로 부담 없이 상담해 주세요.',
        note: '24시간 이내에 답변드립니다.',
      },
      {
        title: '히어링 (무료)',
        desc: '온라인 또는 대면으로 30〜60분 정도 요구 사항과 현재 상황을 여쭙습니다.',
        note: '무리한 영업은 하지 않습니다.',
      },
      {
        title: '견적·계약',
        desc: '견적서·계약서를 보내드립니다. 납득하신 뒤에 착수합니다.',
        note: '이 단계에서는 비용이 들지 않습니다.',
      },
      {
        title: '제작·공개',
        desc: '진행 상황을 공유하면서 제작합니다. 공개 후 지원도 가능합니다.',
        note: '유지보수도 그때그때 상담해 주세요.',
      },
    ],
  },
  tech: {
    heading: '사용 기술',
    frontend: 'FRONTEND',
    backend: 'BACKEND',
    infra: 'INFRA / OTHERS',
  },
  pricing: {
    heading: '요금 안내',
    main: {
      before: '제작비는 ',
      emph: '상담 후 결정',
      after: '으로 하고 있습니다.',
    },
    detail: '사이트 규모·요구 사항·납기에 따라 달라지므로, 먼저 이야기를 들은 뒤에 견적을 드립니다.',
    freeEmph: '상담·견적은 무료입니다.',
    // Leading space: the page renders this right after the emphasised sentence.
    freeAfter: ' 부담 없이 문의해 주세요.',
    extrasHeading: '별도로 필요한 비용',
    extras: [
      '도메인 등록비 (연간 1,500엔〜)',
      '유료 API 이용료 (필요한 경우에만)',
      '기타 운영에 필요한 실비',
    ],
  },
  contact: {
    heading: '문의하기',
    lead: '상담·견적은 무료입니다. Instagram DM이 가장 빠르게 확인하며, 24시간 이내에 답변드립니다.',
    instagram: 'Instagram으로 DM',
    mail: '이메일로 상담하기',
    github: 'GitHub',
  },
  faq: {
    heading: '자주 묻는 질문',
    items: [
      {
        q: '어떤 업종이든 대응해 주시나요?',
        a: '네, 업종에 관계없이 대응 가능합니다. 개인 사업자부터 매장 운영자까지, 다양한 분위기의 사이트를 제작해 왔습니다.',
      },
      {
        q: '계약서를 작성할 수 있나요?',
        a: '물론입니다. 업무 위탁 계약서를 준비하고 있으니 안심하고 의뢰하실 수 있습니다.',
      },
      {
        q: '미팅은 대면과 온라인 중 어느 쪽이 가능한가요?',
        a: '둘 다 가능합니다. Zoom·Google Meet 등의 온라인 회의, 또는 도쿄 도내라면 대면 미팅도 가능합니다.',
      },
      {
        q: '사이트 공개 후 수정이나 유지보수도 부탁할 수 있나요?',
        a: '네, 유지보수도 그때그때 상담에 응합니다. 자세한 내용은 견적 시에 상담해 주세요.',
      },
      {
        q: '제작 기간은 얼마나 걸리나요?',
        a: '규모에 따라 다르지만, 간단한 랜딩 페이지라면 1〜2주, 여러 페이지로 구성된 사이트는 3〜4주 정도가 기준입니다.',
      },
    ],
  },
};

const contact: Record<Locale, ContactDict> = { ja, en, zh, ko };
export default contact;
