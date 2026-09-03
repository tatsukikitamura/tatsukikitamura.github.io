# tatsuki.dev

北村健紀（Tatsuki Kitamura）の個人ポートフォリオサイト。

## 🌐 URL

https://tatsuki.dev

## 🛠️ 技術スタック

- **[Astro](https://astro.build/) 7** — 静的サイトジェネレーター。各ルートをビルド時に HTML へ事前レンダリング（SEO 重視）
- **[React](https://react.dev/) 19** — インタラクティブ部分のみ islands として `client:load` でハイドレート
- **[Tailwind CSS](https://tailwindcss.com/) v4** — `@tailwindcss/vite` 経由（`tailwind.config.js` なし）
- **TypeScript**
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — `sitemap-index.xml` をビルド時に自動生成

## ✍️ フォント

- **Sora** — メインフォント（ウェイト: 300, 400, 500, 600, 700）
- **JetBrains Mono** — コード用モノスペースフォント（ウェイト: 400, 500）

## 🚀 開発コマンド

```bash
npm install        # 依存関係をインストール
npm run dev        # ローカル開発サーバー（Astro, http://localhost:4321）
npm run build      # 本番ビルド（出力: dist/）
npm run preview    # 本番ビルドをローカルでプレビュー
npm run typecheck  # astro check（型チェックのみ）
npm run lint       # eslint
npm run format     # prettier --write（.astro / Tailwind クラス順も整形）
```

> パッケージマネージャーは `npm` です（CI は `npm ci`）。Node のバージョンは `.nvmrc` を参照してください。

## 📁 ディレクトリ構成

```
src/
├── pages/              # 各ルート（ファイル = URL）
│   ├── index.astro     # /
│   ├── about.astro     # /about
│   ├── experience.astro
│   ├── problem.astro
│   ├── contact.astro
│   ├── 404.astro
│   ├── projects/       # /projects と各プロジェクト詳細
│   └── artworks/       # /artworks と各アートワーク（ヘッダー無しの単独ページ）
├── layouts/
│   └── BaseLayout.astro  # <html> シェル + 全 SEO メタdata（title/OG/Twitter/JSON-LD）
├── components/         # 共有 .astro / .tsx コンポーネント
│   ├── Header.astro
│   ├── Footer.astro
│   ├── PageHeader.astro
│   ├── ProjectBackLink.astro
│   ├── MacbookFrame.astro
│   └── Icons.tsx
├── islands/            # React islands（client:load でハイドレート）
│   ├── NoiseCanvas.tsx
│   ├── RoleTyper.tsx
│   └── ProblemTerminal.tsx
├── lib/                # techIcons, bubbleSimulation（/artworks/bubbles の物理演算）
├── types.ts            # 共有型
└── style.css           # body フォント / 背景 + キーフレームのみ（最小限）
public/                 # そのまま配信される静的ファイル（favicon, robots.txt, images）
```

### ページの追加方法

`src/pages/` に `.astro` ファイルを作成すると Astro が自動でルーティングし、サイトマップにも含まれます。コンテンツは `<BaseLayout title=… description=… path=…>` でラップして、ページごとの SEO メタデータ（title, description, canonical, OG, Twitter, JSON-LD）を出力させます。

## 🔍 SEO

- 全ルートをビルド時に個別 HTML へ事前レンダリング
- `BaseLayout.astro` がページごとの title / description / canonical / OG / Twitter と、`Person` / `WebSite` の JSON-LD を出力
- `@astrojs/sitemap` が `sitemap-index.xml` を自動生成し、`public/robots.txt` がクローラーを誘導

## 🚢 デプロイ

`main` ブランチへの push で [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) が起動し、`npm ci → typecheck → build` の後に `dist/` を **GitHub Pages** へデプロイします。手動実行（`workflow_dispatch`）も可能です。

PR と `main` 以外のブランチへの push では [`.github/workflows/ci.yml`](.github/workflows/ci.yml) が typecheck / lint / format:check / build を実行します。依存関係の更新は Dependabot（週次）が PR を出します。

ビルドは `build.format: 'file'`（`/about` → `dist/about.html`）です。GitHub Pages は `about/index.html` 形式だと `/about` を `/about/` へ 301 するため、末尾スラッシュなしの canonical / sitemap と揃えるためにこの形式にしています。

## 📝 コンセプト

ポートフォリオサイトを作っていなかったので作った。当初は Vite + Vanilla JS のシンプルな静的サイトだったが、SEO を強化するため Astro へ移行した。
