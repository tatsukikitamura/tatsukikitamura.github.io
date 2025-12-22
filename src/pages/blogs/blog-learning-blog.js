import { initBlogPost } from './blog-template.js';

// ブログ記事データ
const post = {
  id: 'learning-blog',
  title: '未経験から1年半でWeb開発を学んだ方法',
  date: '2024年12月1日',
  category: '学習',
  tags: ['学習方法', '独学', 'Web開発'],
  excerpt: '数学科の学生が独学でWeb開発を学び、個人開発までできるようになった学習ロードマップを公開します。',
  content: `
    <h2>はじめに</h2>
    <p>この記事では、未経験から1年半でWeb開発を学んだ学習方法をまとめます。</p>
    
    <h2>学習のきっかけ</h2>
    <p>数学科の学生として、プログラミングに興味を持ち始めたのがきっかけでした。</p>
    
    <h2>学習ロードマップ</h2>
    <h3>1. 基礎学習（最初の3ヶ月）</h3>
    <p>プログラミングの基礎を学びました。</p>
    
    <h3>2. フレームワーク学習（3〜6ヶ月）</h3>
    <p>Ruby on Railsを中心に学習しました。</p>
    
    <h3>3. 個人開発（6ヶ月〜）</h3>
    <p>実際にアプリケーションを開発することで、実践的なスキルを身につけました。</p>
    
    <h2>使用したリソース</h2>
    <ul>
      <li>オンラインコース</li>
      <li>公式ドキュメント</li>
      <li>GitHubのコードリーディング</li>
    </ul>
    
    <h2>まとめ</h2>
    <p>継続的な学習と実践が、成長の鍵でした。</p>
  `
};

document.addEventListener('DOMContentLoaded', () => {
  initBlogPost(post);
});


