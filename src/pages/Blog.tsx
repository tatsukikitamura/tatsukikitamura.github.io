import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/blog';
import PageHeader from '../components/PageHeader';

const posts = getAllPosts();

export default function Blog() {
  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <PageHeader command="cat blog/index.md" title="Blog" subtitle="技術記事・学習記録" />
        <div className="space-y-4">
          {posts.length === 0 ? (
            <p className="text-gray-400 text-sm">まだ記事がありません。</p>
          ) : (
            posts.map((post, i) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="px-2.5 py-0.5 bg-blue-50 text-[#0a66c2] rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="font-semibold text-gray-900 mb-2 group-hover:text-[#0a66c2] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
