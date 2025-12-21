import { initBlogPost } from './blog-template.js';

// ブログ記事データ
const post = {
  id: 'microservices-blog',
  title: 'FastAPIとRailsのマイクロサービス構成',
  date: '2024年12月5日',
  category: '技術',
  tags: ['FastAPI', 'Ruby on Rails', 'アーキテクチャ'],
  excerpt: 'PLATEAUアプリ開発で採用した、RailsとFastAPIを組み合わせたマイクロサービス構成の設計思想と実装について。',
  content: `
    <h2>はじめに</h2>
    <p>この記事では、PLATEAUアプリ開発で採用したマイクロサービス構成について解説します。</p>
    
    <h2>設計の背景</h2>
    <p>当初は1つのシステムで全機能を実装しようとしましたが、AI関連の処理とプログラム全体が複雑化し管理が困難になったため、2つのシステムに役割を分割する設計を採用しました。</p>
    
    <h2>アーキテクチャ</h2>
    <h3>1. Rails（地図データ管理・可視化）</h3>
    <p>地図データの管理・フィルタリング・可視化を担当します。</p>
    
    <h3>2. FastAPI（AIチャットボット）</h3>
    <p>AIチャットボット機能を実装しています。</p>
    
    <h2>学び</h2>
    <p>複雑なシステムを適切に分割することで、保守性と拡張性を向上させることができました。</p>
    
    <h2>まとめ</h2>
    <p>マイクロサービス構成は、システムの複雑さに応じて適切に採用することが重要です。</p>
  `
};

document.addEventListener('DOMContentLoaded', () => {
  initBlogPost(post);
});

