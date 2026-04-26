export type Project = {
  id: string;
  title: string;
  description: string;
  period: string;
  tags: string[];
  link: string;
  featured: boolean;
};

export type BlogMeta = {
  title?: string;
  date?: string;
  category?: string;
  tags?: string[];
  excerpt?: string;
};

export type BlogPostSummary = {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
};
