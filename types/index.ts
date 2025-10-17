export interface Photo {
  src: string;
  alt: string;
}

export interface TextContent {
  type: 'text';
  content: string;
}

export interface ImageContent {
  type: 'image';
  content: string;
}

export type BlogPhoto = Photo | TextContent | ImageContent;

export interface BlogPost {
  title: string;
  photos: BlogPhoto[];
}

export interface ImageListItem {
  id: string;
  src: string;
  title: string;
  blogKey: string;
}

export interface MenuItem {
  id: number;
  title: string;
  url: string;
}

export interface BlogContent {
  [key: string]: BlogPost;
}

// Blog Article Types (for text-based blog posts)
export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  coverImage?: string;
  tags?: string[];
  readTime?: string;
  externalUrl?: string; // For linking to external posts (e.g., Substack)
}

