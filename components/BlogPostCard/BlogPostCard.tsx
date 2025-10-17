import Link from 'next/link';
import Image from 'next/image';
import { BlogArticle } from '../../types';

interface BlogPostCardProps {
  article: BlogArticle;
}

export default function BlogPostCard({ article }: BlogPostCardProps) {
  // If it's an external post (Substack), link directly to it
  const isExternal = !!article.externalUrl;

  const cardContent = (
    <>
      {/* Cover Image */}
      {article.coverImage && (
        <div className="relative w-full h-64 mb-4 overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="space-y-2">
        {/* Date & Read Time */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {article.readTime && (
            <>
              <span>•</span>
              <span>{article.readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More Link */}
        <div className="pt-2">
          <span className="text-sm text-gray-900 group-hover:underline">
            {isExternal ? 'Read on Substack →' : 'Read more →'}
          </span>
        </div>
      </div>
    </>
  );

  return (
    <article className="group relative overflow-hidden">
      {isExternal ? (
        <a 
          href={article.externalUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      ) : (
        <Link href={`/blog/${article.id}`} className="block">
          {cardContent}
        </Link>
      )}
    </article>
  );
}

