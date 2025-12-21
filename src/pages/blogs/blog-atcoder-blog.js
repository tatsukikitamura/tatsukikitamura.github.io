import { initBlogPost } from './blog-template.js';

// ブログ記事データ
const post = {
  id: 'atcoder-blog',
  title: 'AtCoderで茶色になるまでにやったこと',
  date: '2024年12月10日',
  category: '競技プログラミング',
  tags: ['AtCoder', 'Python', 'アルゴリズム'],
  excerpt: '未経験から約1年半でAtCoder Algorithm・Heuristic両部門で茶色ランクに到達するまでの学習方法を振り返ります。',
  content: `
    <h2>はじめに</h2>
    <p>この記事では、AtCoderを始めてから約1年半で茶色ランクに到達するまでの学習方法を振り返ります。</p>
    
    <h2>学習のきっかけ</h2>
    <p>2024年4月からAtCoderを始めました。最初は全く解けませんでしたが、継続することで少しずつ成長できました。</p>
    
    <h2>学習方法</h2>
    <h3>1. 毎週のコンテスト参加</h3>
    <p>毎週開催されるコンテストに参加し、時間内に解ける問題数を増やすことを目標にしました。</p>
    
    <h3>2. 解けなかった問題の復習</h3>
    <p>解けなかった問題は、解説を読んで理解した後に必ず自分で実装し直すことで、知識を定着させました。</p>
    
    <h2>成果</h2>
    <ul>
      <li>Algorithm部門: 茶色ランク到達</li>
      <li>Heuristic部門: 茶色ランク到達</li>
    </ul>
    
    <h2>まとめ</h2>
    <p>継続的な学習と復習が、成長の鍵でした。</p>
  `
};

document.addEventListener('DOMContentLoaded', () => {
  initBlogPost(post);
});

