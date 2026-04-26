import { Link, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { marked } from 'marked';
import { getPostBySlug } from '../lib/blog';

export default function BlogPost() {
  const { slug = '' } = useParams<{ slug: string }>();
  const post = useMemo(() => getPostBySlug(slug), [slug]);

  useEffect(() => {
    document.title = post?.meta.title ? `${post.meta.title} - Tatsuki.dev` : 'Blog - Tatsuki.dev';
    return () => {
      document.title = 'Tatsuki.dev - Portfolio';
    };
  }, [post]);

  if (!post) {
    return (
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500">記事が見つかりませんでした。</p>
          <Link to="/blog" className="text-sm mt-4 inline-block text-[#0a66c2]">
            ← ブログ一覧に戻る
          </Link>
        </div>
      </main>
    );
  }

  const { meta, content } = post;
  const tags = meta.tags ?? [];
  const bodyHTML = marked.parse(content) as string;

  return (
    <main className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 animate-fade-in"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          ブログ一覧
        </Link>

        <article className="animate-fade-in animation-delay-100">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 bg-blue-50 text-[#0a66c2] rounded text-xs font-medium">
                {meta.category ?? ''}
              </span>
              <span className="text-xs text-gray-400">{meta.date ?? ''}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{meta.title ?? ''}</h1>
            <p className="text-gray-500 text-sm leading-relaxed">{meta.excerpt ?? ''}</p>
            <div className="flex flex-wrap gap-1.5 mt-4 pb-6 border-b border-gray-100">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="blog-content" dangerouslySetInnerHTML={{ __html: bodyHTML }} />
        </article>
      </div>
    </main>
  );
}
