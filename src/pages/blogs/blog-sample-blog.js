import { initBlogPost } from './blog-template.js';

// ブログ記事データ
const post = {
  id: 'sample-blog',
  title: 'Ruby on Railsでの生成AI連携の実装方法',
  date: '2024年12月15日',
  category: '技術',
  tags: ['Ruby on Rails', 'OpenAI API', 'AI'],
  excerpt: 'MBTIアプリ開発で学んだ、RailsアプリケーションにOpenAI APIを統合する実践的な方法をまとめました。',
  content: `
    <h2>はじめに</h2>
    <p>この記事では、Ruby on RailsアプリケーションにOpenAI APIを統合する方法について、実際のプロジェクトで学んだ経験を基に解説します。
    自分は元々APIというものを全く知らなかったのでかなり苦労しました。</p>
    
    <h2>プロジェクト概要</h2>
    <p>MBTI × 生成AI体験アプリの開発を通じて、以下のような機能を実装しました：</p>
    <ul>
      <li>物語形式の診断モード</li>
      <li>AIによる状況生成</li>
      <li>エラー時のフォールバック処理</li>
    </ul>
    
    <h2>実装のポイント</h2>
    <h3>1. Service Objectパターンの採用</h3>
    <p>当初Service Objectパターンを知らなかったので、Controllerに直接書いてしまいました。
    その後ある会社のインターンでAPIを使う際に、同じバックエンドチームの人がService Objectパターンを使っていたのを見て、
    OpenAI APIとの通信をService Objectに移行しようと決意しました。</p>
    
    <pre><code class="language-ruby">class OpenAIService
  def self.generate_story(prompt, context)
    # API呼び出しの実装
  end
end</code></pre>
    
    <h3>2. エラーハンドリング</h3>
    <p>API呼び出しが失敗した場合でも、ユーザー体験が途切れないようにフォールバック処理を実装しました。
    しかし基本的にはAPIが成功しないとこのプロジェクトの意味がないので最悪の予防策です。</p>
    
    <h2>学び</h2>
    <p>このプロジェクトを通じて、外部APIを統合する際の設計パターンを学びました。
    ただ、もっとAPIを複雑にする場合FastAPIなどのAPIサーバーを使う方べきなのかもしれません。
    MAPのプロジェクトではそれを試みて挫折したのでそれについても書こうと思ってます。</p>
    
    <h2>まとめ</h2>
    <p>Railsアプリケーションに生成AIを統合する際は、Service Objectパターンと適切なエラーハンドリングが重要です。</p>
  `
};

document.addEventListener('DOMContentLoaded', () => {
  initBlogPost(post);
});

