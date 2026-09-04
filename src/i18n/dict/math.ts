import type { Locale } from '../config';

// Strings for /projects/math. Paragraphs marked "rich" are HTML strings we author
// ourselves (rendered with set:html); inline LaTeX inside them is written as $...$
// and expanded to KaTeX markup by the page.
const ja = {
  title: 'Burgers 方程式の進行波解の安定性（卒業研究サイト）',
  description:
    '北村健紀の卒業研究サイト。粘性 Burgers 方程式の進行波解（衝撃波層）の漸近安定性を、Hopf–Cole 変換による線形化を通じて精密に評価し、減衰率を具体値として書き下す。西原 (1985) を題材にした論文翻訳・講義ノート・卒業論文をまとめた数式サイト。',
  heading: 'Burgers 方程式の進行波解の安定性',
  badges: {
    thesis: '卒業研究',
    restricted: '限定公開',
  },
  period: '2026年5月〜現在（個人開発・卒業研究）',
  overview: {
    // rich
    intro:
      '早稲田大学 教育学部 数学科での<strong>卒業研究</strong>を、論文翻訳・講義ノート・卒業論文として一つにまとめた数式サイト。題材は非線形偏微分方程式論の古典である',
    // rich (language-independent citation)
    citation:
      "K. Nishihara, <em>A Note on the Stability of Travelling Wave Solutions of Burgers' Equation</em>, Japan J. Appl. Math. <strong>2</strong> (1985), 27–35.",
    // rich
    body:
      "で、<strong>粘性 Burgers 方程式の進行波解（衝撃波層）が時間とともに安定であること</strong>を、 その<strong>減衰の速さまで含めて</strong>精密に示すのが主題。原論文の全訳に加え、行間を省かず結論まで導く卒業論文と、Hopf (1950)・Il'in–Oleinik (1960)・Gelfand (1959) など関連する古典論文の翻訳までを横断的に読めるよう構成した。",
  },
  math: {
    heading: '扱っている数学',
    target: {
      heading: '対象 — 粘性 Burgers 方程式',
      intro: '流体の衝撃波をモデル化する、非線形移流項と粘性拡散項をあわせ持つ方程式を扱う。',
      // rich
      question: '両端で異なる値 $v_- > v_+$ に漸近する初期データのもとで、解がやがてどんな形に落ち着くかを問う。',
    },
    wave: {
      heading: '進行波解（衝撃波層）の明示形',
      // rich
      body:
        '形を保ったまま一定速度 $s$ で進む解 $V(x - st)$ を考えると、偏微分方程式は常微分方程式に落ち、積分して $\\tanh$ 型のプロファイルが厳密に書き下せる。',
    },
    stability: {
      heading: '安定性 — Hopf–Cole 変換による線形化',
      // rich
      body:
        '進行波まわりの擾乱 $u = v - V$ が満たす方程式は非線形だが、 <strong>Hopf–Cole 変換</strong> $u = -2\\,(\\log\\varphi)_\\xi$ を施すと<strong>線形の熱方程式</strong>に化ける。線形なら明示公式（熱核）で解の長時間挙動を直接追える、というのが議論の核心。',
    },
    conclusion: {
      heading: '結論 — 指数減衰の評価',
      // rich
      body:
        '擾乱の総質量がゼロ（$\\int u_0\\, d\\xi = 0$）という条件のもとで、解が進行波へ<strong>指数オーダーで収束する</strong>こと、しかもその<strong>減衰率が具体値として</strong>得られる。',
    },
  },
  points: {
    heading: 'この研究のポイント',
    // rich
    paragraphs: [
      "先行研究の <strong>Il'in–Oleinik (1960)</strong> は、最大値原理を用いて「進行波へ指数的に収束する」ことを示した。ただし減衰率は「<strong>ある正の定数が存在する</strong>」という<strong>定性的・存在型</strong>の主張にとどまり、具体的な値は与えられない。",
      'これに対し <strong>Nishihara (1985)</strong> は、対象を粘性 Burgers 方程式に絞る代わりに Hopf–Cole 変換の明示公式を経由し、減衰率を $\\dfrac{(v_- - v_+)^2}{16\\varepsilon}$ という<strong>具体値として書き下した</strong>。「指数減衰する」という定性的な情報を「<strong>この速さで</strong>指数減衰する」という定量的な結果へと精密化した点に意義がある。',
      '本サイトでは、進行波の明示形 <code>(1.8)</code> の導出（ODE の積分・部分分数分解・$\\tanh$ 恒等式まで）、摂動方程式の導出と $x_0$ の決定、Hopf 変換による線形化、熱核を用いた漸近評価までを、<strong>原論文が省略した行間を補いながら</strong>段階的に追えるようにまとめている。',
    ],
  },
  structure: {
    heading: 'サイトの構成',
    // rich
    items: [
      '• <strong>論文（日本語訳）</strong> — Nishihara (1985) 原論文の全訳ノート（全5節）',
      '• <strong>卒業論文</strong> — 結論まで省略なく導出した完全版（LaTeX で組んだ PDF も併設）',
      '• <strong>講義ノート</strong> — 概要と問題設定 / 摂動方程式の導出 / Hopf 変換による線形化 を回ごとに解説',
      "• <strong>参考文献の翻訳</strong> — Hopf (1950)・Il'in–Oleinik (1960)・Gelfand (1959) ほか、原論文が引く古典の訳と原文 PDF",
    ],
  },
  tech: {
    heading: '使用技術と実装上の工夫',
    // rich
    items: [
      '• <strong>KaTeX</strong> による数式組版と <strong>markdown-it</strong> での執筆で、論文レベルの数式を破綻なく表示',
      '• サーバを持たずに限定公開するため、全コンテンツを <strong>AES-GCM でビルド前に暗号化</strong>。配信されるのは暗号文のみで、ブラウザの Web Crypto API で復号する自作パスワードゲートを実装',
      '• 開発時は平文 Markdown を直接読み込み、本番ビルドでは暗号文経由へ自動で切り替わる編集フローを構築',
    ],
  },
  access: {
    heading: '閲覧について',
    body: '本サイトはパスワードで保護した限定公開です。内容をご覧になりたい方は、お気軽にお問い合わせください。個別にご案内します。',
  },
};

type MathDict = typeof ja;

const en: MathDict = {
  title: 'Stability of Travelling Wave Solutions of the Burgers Equation (Graduation Research Site)',
  description:
    "Tatsuki Kitamura's graduation research site. A rigorous estimate of the asymptotic stability of travelling wave solutions (shock layers) of the viscous Burgers equation via linearisation by the Hopf–Cole transformation, with the exponential decay rate written down as an explicit value. A maths site collecting a paper translation, lecture notes and the graduation thesis, based on Nishihara (1985).",
  heading: 'Stability of Travelling Wave Solutions of the Burgers Equation',
  badges: {
    thesis: 'Graduation research',
    restricted: 'Restricted access',
  },
  period: 'May 2026 — present (personal project / graduation research)',
  overview: {
    intro:
      'A maths site that brings together my <strong>graduation research</strong> in the Department of Mathematics, School of Education, Waseda University, as a paper translation, lecture notes and a graduation thesis. The subject is a classic of nonlinear partial differential equation theory:',
    citation:
      "K. Nishihara, <em>A Note on the Stability of Travelling Wave Solutions of Burgers' Equation</em>, Japan J. Appl. Math. <strong>2</strong> (1985), 27–35.",
    body:
      "Its main theme is to show rigorously that <strong>travelling wave solutions (shock layers) of the viscous Burgers equation are stable in time</strong>, <strong>including how fast perturbations decay</strong>. Alongside a full translation of the original paper, the site contains a graduation thesis that carries the argument through to its conclusion without skipping any steps, and translations of related classical papers such as Hopf (1950), Il'in–Oleinik (1960) and Gelfand (1959), all arranged so that they can be read side by side.",
  },
  math: {
    heading: 'The mathematics',
    target: {
      heading: 'Subject — the viscous Burgers equation',
      intro:
        'We study an equation that models shock waves in fluids, combining a nonlinear advection term with a viscous diffusion term.',
      question:
        'For initial data that approach different values $v_- > v_+$ at the two ends, we ask what shape the solution eventually settles into.',
    },
    wave: {
      heading: 'Explicit form of the travelling wave solution (shock layer)',
      body:
        'Considering a solution $V(x - st)$ that keeps its shape while moving at a constant speed $s$, the partial differential equation reduces to an ordinary differential equation, which can be integrated to give an exact $\\tanh$-shaped profile.',
    },
    stability: {
      heading: 'Stability — linearisation via the Hopf–Cole transformation',
      body:
        'The equation satisfied by the perturbation $u = v - V$ around the travelling wave is nonlinear, but applying the <strong>Hopf–Cole transformation</strong> $u = -2\\,(\\log\\varphi)_\\xi$ turns it into a <strong>linear heat equation</strong>. Once it is linear, the long-time behaviour of the solution can be tracked directly through an explicit formula (the heat kernel) — this is the heart of the argument.',
    },
    conclusion: {
      heading: 'Conclusion — an exponential decay estimate',
      body:
        'Under the condition that the perturbation has zero total mass ($\\int u_0\\, d\\xi = 0$), the solution <strong>converges to the travelling wave at an exponential rate</strong>, and moreover the <strong>decay rate is obtained as an explicit value</strong>.',
    },
  },
  points: {
    heading: 'What makes this research interesting',
    paragraphs: [
      "The earlier work of <strong>Il'in–Oleinik (1960)</strong> used the maximum principle to show that solutions “converge exponentially to the travelling wave”. However, its decay rate is only a <strong>qualitative, existential</strong> statement — “<strong>there exists some positive constant</strong>” — and no concrete value is given.",
      'By contrast, <strong>Nishihara (1985)</strong> restricts attention to the viscous Burgers equation and, in exchange, goes through the explicit formula of the Hopf–Cole transformation to <strong>write the decay rate down as the concrete value</strong> $\\dfrac{(v_- - v_+)^2}{16\\varepsilon}$. Its significance lies in sharpening the qualitative information “it decays exponentially” into the quantitative result “it decays exponentially <strong>at this rate</strong>”.',
      'On this site, the derivation of the explicit travelling wave <code>(1.8)</code> (integrating the ODE, partial fractions, and the $\\tanh$ identity), the derivation of the perturbation equation and the determination of $x_0$, the linearisation by the Hopf transformation, and the asymptotic estimate using the heat kernel are all laid out step by step, <strong>filling in the gaps that the original paper leaves out</strong>.',
    ],
  },
  structure: {
    heading: 'Site contents',
    items: [
      '• <strong>Paper (Japanese translation)</strong> — a complete translated commentary on the original Nishihara (1985) paper (all 5 sections)',
      '• <strong>Graduation thesis</strong> — the full version, derived through to the conclusion with nothing omitted (a PDF typeset in LaTeX is also provided)',
      '• <strong>Lecture notes</strong> — overview and problem setting / derivation of the perturbation equation / linearisation by the Hopf transformation, explained session by session',
      "• <strong>Translations of references</strong> — Hopf (1950), Il'in–Oleinik (1960), Gelfand (1959) and other classics cited by the paper, with translations and the original PDFs",
    ],
  },
  tech: {
    heading: 'Tech stack and implementation notes',
    items: [
      '• Equations typeset with <strong>KaTeX</strong> and written in <strong>markdown-it</strong>, so paper-grade mathematics renders without breaking',
      '• To publish privately without running a server, all content is <strong>encrypted with AES-GCM before the build</strong>. Only ciphertext is served, and a hand-built password gate decrypts it in the browser with the Web Crypto API',
      '• An editing workflow in which plain-text Markdown is loaded directly during development, while the production build switches automatically to the encrypted path',
    ],
  },
  access: {
    heading: 'Access',
    body: 'This site is password-protected and available on request. If you would like to read it, feel free to get in touch and I will send you the details individually.',
  },
};

const zh: MathDict = {
  title: 'Burgers 方程行波解的稳定性（毕业研究网站）',
  description:
    '北村健纪的毕业研究网站。通过 Hopf–Cole 变换进行线性化，精确评估黏性 Burgers 方程行波解（激波层）的渐近稳定性，并将指数衰减率写成具体数值。以西原 (1985) 为题材，汇集论文翻译、讲义笔记与毕业论文的数学网站。',
  heading: 'Burgers 方程行波解的稳定性',
  badges: {
    thesis: '毕业研究',
    restricted: '限定公开',
  },
  period: '2026年5月〜至今（个人开发・毕业研究）',
  overview: {
    intro:
      '将我在早稻田大学教育学部数学系的<strong>毕业研究</strong>整理为论文翻译、讲义笔记和毕业论文的数学网站。题材是非线性偏微分方程理论中的经典文献：',
    citation:
      "K. Nishihara, <em>A Note on the Stability of Travelling Wave Solutions of Burgers' Equation</em>, Japan J. Appl. Math. <strong>2</strong> (1985), 27–35.",
    body:
      "其主题是精确地证明<strong>黏性 Burgers 方程的行波解（激波层）随时间保持稳定</strong>，并且<strong>连衰减速度也一并给出</strong>。除原论文的全文翻译外，还包括不省略推导细节、一直推到结论的毕业论文，以及 Hopf (1950)、Il'in–Oleinik (1960)、Gelfand (1959) 等相关经典论文的翻译，构成一个可以交叉阅读的整体。",
  },
  math: {
    heading: '涉及的数学',
    target: {
      heading: '研究对象 — 黏性 Burgers 方程',
      intro: '研究的是同时具有非线性对流项和黏性扩散项、用于刻画流体激波的方程。',
      question: '在初值于两端分别趋于不同值 $v_- > v_+$ 的条件下，探讨解最终会稳定成什么形状。',
    },
    wave: {
      heading: '行波解（激波层）的显式形式',
      body:
        '考虑保持形状、以恒定速度 $s$ 传播的解 $V(x - st)$，偏微分方程便化为常微分方程，积分后可以严格写出 $\\tanh$ 型的剖面。',
    },
    stability: {
      heading: '稳定性 — 通过 Hopf–Cole 变换进行线性化',
      body:
        '行波附近的扰动 $u = v - V$ 所满足的方程是非线性的，但施加 <strong>Hopf–Cole 变换</strong> $u = -2\\,(\\log\\varphi)_\\xi$ 之后，它就变成了<strong>线性热方程</strong>。一旦是线性的，就可以通过显式公式（热核）直接追踪解的长时间行为——这正是整个论证的核心。',
    },
    conclusion: {
      heading: '结论 — 指数衰减估计',
      body:
        '在扰动总质量为零（$\\int u_0\\, d\\xi = 0$）的条件下，解<strong>以指数阶收敛到行波</strong>，而且<strong>衰减率可以作为具体数值</strong>得到。',
    },
  },
  points: {
    heading: '本研究的要点',
    paragraphs: [
      "先行研究 <strong>Il'in–Oleinik (1960)</strong> 利用极值原理证明了“解以指数速度收敛到行波”。但其衰减率仅停留在“<strong>存在某个正常数</strong>”这种<strong>定性的、存在性</strong>的论断上，没有给出具体数值。",
      '与此相对，<strong>Nishihara (1985)</strong> 将研究对象限定为黏性 Burgers 方程，转而借助 Hopf–Cole 变换的显式公式，把衰减率<strong>写成了具体数值</strong> $\\dfrac{(v_- - v_+)^2}{16\\varepsilon}$。其意义在于，把“指数衰减”这一定性信息精确化为“<strong>以这个速度</strong>指数衰减”的定量结果。',
      '本网站将行波显式形式 <code>(1.8)</code> 的推导（ODE 的积分、部分分式分解、直至 $\\tanh$ 恒等式）、扰动方程的推导与 $x_0$ 的确定、Hopf 变换的线性化，以及利用热核的渐近估计，<strong>在补全原论文省略的推导细节的同时</strong>逐步整理出来。',
    ],
  },
  structure: {
    heading: '网站构成',
    items: [
      '• <strong>论文（日文翻译）</strong> — Nishihara (1985) 原论文的全译笔记（全 5 节）',
      '• <strong>毕业论文</strong> — 不省略任何推导、一直推到结论的完整版（另附 LaTeX 排版的 PDF）',
      '• <strong>讲义笔记</strong> — 按讲次讲解概要与问题设定 / 扰动方程的推导 / Hopf 变换的线性化',
      "• <strong>参考文献翻译</strong> — Hopf (1950)、Il'in–Oleinik (1960)、Gelfand (1959) 等原论文引用的经典文献的译文与原文 PDF",
    ],
  },
  tech: {
    heading: '使用技术与实现上的巧思',
    items: [
      '• 用 <strong>KaTeX</strong> 排版公式、用 <strong>markdown-it</strong> 撰写，论文级别的数学公式也能完整无误地显示',
      '• 为了在没有服务器的情况下限定公开，所有内容都<strong>在构建前用 AES-GCM 加密</strong>。分发的只有密文，并自行实现了通过浏览器 Web Crypto API 解密的密码门',
      '• 构建了开发时直接读取明文 Markdown、生产构建时自动切换为密文路径的编辑流程',
    ],
  },
  access: {
    heading: '关于阅览',
    body: '本网站采用密码保护的限定公开方式。如果您想阅读其内容，欢迎随时联系我，我会单独告知访问方式。',
  },
};

const ko: MathDict = {
  title: 'Burgers 방정식 진행파 해의 안정성 (졸업 연구 사이트)',
  description:
    '키타무라 타츠키의 졸업 연구 사이트. 점성 Burgers 방정식의 진행파 해(충격파층)의 점근 안정성을 Hopf–Cole 변환에 의한 선형화를 통해 정밀하게 평가하고, 지수 감쇠율을 구체적인 값으로 써 내려간다. 니시하라 (1985)를 소재로 논문 번역·강의 노트·졸업 논문을 정리한 수식 사이트.',
  heading: 'Burgers 방정식 진행파 해의 안정성',
  badges: {
    thesis: '졸업 연구',
    restricted: '한정 공개',
  },
  period: '2026년 5월〜현재 (개인 개발·졸업 연구)',
  overview: {
    intro:
      '와세다대학교 교육학부 수학과에서의 <strong>졸업 연구</strong>를 논문 번역·강의 노트·졸업 논문으로 한데 정리한 수식 사이트. 소재는 비선형 편미분방정식론의 고전인 다음 논문이다.',
    citation:
      "K. Nishihara, <em>A Note on the Stability of Travelling Wave Solutions of Burgers' Equation</em>, Japan J. Appl. Math. <strong>2</strong> (1985), 27–35.",
    body:
      "이 논문의 주제는 <strong>점성 Burgers 방정식의 진행파 해(충격파층)가 시간에 따라 안정적이라는 것</strong>을 <strong>감쇠 속도까지 포함하여</strong> 정밀하게 보이는 것이다. 원논문의 전문 번역에 더해, 행간을 생략하지 않고 결론까지 이끌어 내는 졸업 논문과 Hopf (1950)·Il'in–Oleinik (1960)·Gelfand (1959) 등 관련 고전 논문의 번역까지 함께 읽을 수 있도록 구성했다.",
  },
  math: {
    heading: '다루는 수학',
    target: {
      heading: '대상 — 점성 Burgers 방정식',
      intro: '유체의 충격파를 모델링하는, 비선형 이류항과 점성 확산항을 함께 가진 방정식을 다룬다.',
      question:
        '양 끝에서 서로 다른 값 $v_- > v_+$ 에 점근하는 초기 데이터 아래에서, 해가 결국 어떤 형태로 안정되는지를 묻는다.',
    },
    wave: {
      heading: '진행파 해(충격파층)의 명시적 형태',
      body:
        '형태를 유지한 채 일정한 속도 $s$ 로 나아가는 해 $V(x - st)$ 를 생각하면 편미분방정식은 상미분방정식으로 환원되고, 적분하면 $\\tanh$ 형 프로파일을 엄밀하게 써 내려갈 수 있다.',
    },
    stability: {
      heading: '안정성 — Hopf–Cole 변환에 의한 선형화',
      body:
        '진행파 주위의 섭동 $u = v - V$ 가 만족하는 방정식은 비선형이지만, <strong>Hopf–Cole 변환</strong> $u = -2\\,(\\log\\varphi)_\\xi$ 를 적용하면 <strong>선형 열방정식</strong>으로 바뀐다. 선형이라면 명시적 공식(열핵)으로 해의 장시간 거동을 직접 추적할 수 있다는 것이 논의의 핵심이다.',
    },
    conclusion: {
      heading: '결론 — 지수 감쇠 평가',
      body:
        '섭동의 총질량이 0($\\int u_0\\, d\\xi = 0$)이라는 조건 아래에서, 해가 진행파로 <strong>지수 오더로 수렴한다는 것</strong>, 게다가 그 <strong>감쇠율이 구체적인 값으로</strong> 얻어진다.',
    },
  },
  points: {
    heading: '이 연구의 포인트',
    paragraphs: [
      "선행 연구인 <strong>Il'in–Oleinik (1960)</strong>은 최대값 원리를 이용해 “진행파로 지수적으로 수렴한다”는 것을 보였다. 다만 감쇠율은 “<strong>어떤 양의 상수가 존재한다</strong>”는 <strong>정성적·존재형</strong> 주장에 머물러, 구체적인 값은 주어지지 않는다.",
      '이에 반해 <strong>Nishihara (1985)</strong>는 대상을 점성 Burgers 방정식으로 좁히는 대신 Hopf–Cole 변환의 명시적 공식을 경유하여, 감쇠율을 $\\dfrac{(v_- - v_+)^2}{16\\varepsilon}$ 이라는 <strong>구체적인 값으로 써 내려갔다</strong>. “지수 감쇠한다”는 정성적 정보를 “<strong>이 속도로</strong> 지수 감쇠한다”는 정량적 결과로 정밀화한 점에 의의가 있다.',
      '이 사이트에서는 진행파의 명시적 형태 <code>(1.8)</code>의 유도(ODE의 적분·부분분수 분해·$\\tanh$ 항등식까지), 섭동 방정식의 유도와 $x_0$ 의 결정, Hopf 변환에 의한 선형화, 열핵을 이용한 점근 평가까지를 <strong>원논문이 생략한 행간을 보충하면서</strong> 단계적으로 따라갈 수 있도록 정리했다.',
    ],
  },
  structure: {
    heading: '사이트 구성',
    items: [
      '• <strong>논문(일본어 번역)</strong> — Nishihara (1985) 원논문의 전문 번역 노트(전 5절)',
      '• <strong>졸업 논문</strong> — 결론까지 생략 없이 유도한 완전판(LaTeX로 조판한 PDF도 함께 제공)',
      '• <strong>강의 노트</strong> — 개요와 문제 설정 / 섭동 방정식의 유도 / Hopf 변환에 의한 선형화를 회차별로 해설',
      "• <strong>참고문헌 번역</strong> — Hopf (1950)·Il'in–Oleinik (1960)·Gelfand (1959) 등 원논문이 인용하는 고전의 번역과 원문 PDF",
    ],
  },
  tech: {
    heading: '사용 기술과 구현상의 고민',
    items: [
      '• <strong>KaTeX</strong>에 의한 수식 조판과 <strong>markdown-it</strong>을 이용한 집필로, 논문 수준의 수식을 깨짐 없이 표시',
      '• 서버 없이 한정 공개하기 위해 전체 콘텐츠를 <strong>빌드 전에 AES-GCM으로 암호화</strong>. 배포되는 것은 암호문뿐이며, 브라우저의 Web Crypto API로 복호화하는 자체 제작 비밀번호 게이트를 구현',
      '• 개발 시에는 평문 Markdown을 직접 읽어 들이고, 프로덕션 빌드에서는 암호문 경유로 자동 전환되는 편집 플로를 구축',
    ],
  },
  access: {
    heading: '열람 안내',
    body: '이 사이트는 비밀번호로 보호된 한정 공개입니다. 내용을 보고 싶으신 분은 부담 없이 문의해 주세요. 개별적으로 안내해 드리겠습니다.',
  },
};

const math: Record<Locale, MathDict> = { ja, en, zh, ko };
export default math;
