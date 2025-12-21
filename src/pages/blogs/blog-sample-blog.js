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
    <p>この記事では、Ruby on RailsアプリケーションにOpenAI APIを統合する方法について、実際のプロジェクトで学んだ経験を基に解説します。</p>
    
    <h2>プロジェクト概要</h2>
    <p>MBTI × 生成AI体験アプリの開発を通じて、以下のような機能を実装しました：</p>
    <ul>
      <li>物語形式の診断モード</li>
      <li>AIによる状況生成</li>
      <li>エラー時のフォールバック処理</li>
    </ul>
    
    <h2>実装のポイント</h2>
    <h3>1. Service Objectパターンの採用</h3>
    <p>OpenAI APIとの通信をService Objectとして切り出すことで、コードの可読性と保守性を向上させました。</p>
    
    <pre><code class="language-ruby">class OpenAIService
  def self.generate_story(prompt, context)
    # API呼び出しの実装
  end
end</code></pre>
    
    <h3>2. エラーハンドリング</h3>
    <p>API呼び出しが失敗した場合でも、ユーザー体験が途切れないようにフォールバック処理を実装しました。</p>
    
    <h2>学び</h2>
    <p>このプロジェクトを通じて、外部APIを統合する際の設計パターンやエラーハンドリングの重要性を学びました。</p>
    
    <h2>まとめ</h2>
    <p>Railsアプリケーションに生成AIを統合する際は、Service Objectパターンと適切なエラーハンドリングが重要です。</p>
  `
};

document.addEventListener('DOMContentLoaded', () => {
  initBlogPost(post);
});

