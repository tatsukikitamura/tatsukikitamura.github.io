import type { BlogMeta, BlogPostSummary } from '../types';

const rawFiles = import.meta.glob<string>('../content/blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function parseFrontmatter(raw: string): { meta: BlogMeta; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const meta: BlogMeta = {};
  match[1]!.split('\n').forEach((line) => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    if (key === 'tags') {
      meta.tags = value.split(',').map((t) => t.trim());
    } else if (key === 'title' || key === 'date' || key === 'category' || key === 'excerpt') {
      meta[key] = value;
    }
  });

  return { meta, content: match[2]! };
}

export function getAllPosts(): BlogPostSummary[] {
  return Object.entries(rawFiles)
    .map(([path, raw]) => {
      const slug = path.split('/').pop()!.replace('.md', '');
      const { meta } = parseFrontmatter(raw);
      return {
        slug,
        title: meta.title ?? 'Untitled',
        date: meta.date ?? '',
        category: meta.category ?? '',
        tags: meta.tags ?? [],
        excerpt: meta.excerpt ?? '',
      };
    })
    .filter((p) => !p.slug.startsWith('_'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(
  slug: string,
): { meta: BlogMeta; content: string } | null {
  const entry = Object.entries(rawFiles).find(([path]) => path.endsWith(`/${slug}.md`));
  if (!entry) return null;
  return parseFrontmatter(entry[1]);
}
