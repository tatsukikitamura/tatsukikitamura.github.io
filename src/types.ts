export type ArtworkCategory = 'flyer' | 'tshirt' | 'web' | 'other';

export type Artwork = {
  id: string;
  title: string;
  category: ArtworkCategory;
  description: string;
  date: string;
  image?: string;
  link?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  period: string;
  tags: string[];
  link: string;
  featured: boolean;
};
