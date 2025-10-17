import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { blogArticles } from '../../data/constants';
import { fetchSubstackPosts } from '../../lib/substack';
import { BlogArticle } from '../../types';

interface BlogPostProps {
  article: BlogArticle | null;
}

export default function BlogPost({ article }: BlogPostProps) {
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, this blog post doesn't exist.</p>
          <Link href="/writing" className="text-gray-900 hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title} - Olivia Qin</title>
        <meta name="description" content={article.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/writing"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all posts
          </Link>

          {/* Cover Image */}
          {article.coverImage && (
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          )}

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 playfair-display">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <span>{article.author}</span>
              <span>•</span>
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

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg prose-p:text-gray-700 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Footer Navigation */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/writing"
              className="inline-flex items-center text-gray-900 hover:underline font-semibold"
            >
              ← Read more posts
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  // Fetch Substack posts
  const substackPosts = await fetchSubstackPosts('extraolivespls.substack.com');
  
  // Combine with local posts
  const allPosts = [...substackPosts, ...blogArticles];
  
  // Find the requested article
  const article = allPosts.find(article => article.id === params?.id);

  return {
    props: { article: article || null },
    revalidate: 3600, // Revalidate every hour
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch Substack posts at build time
  const substackPosts = await fetchSubstackPosts('extraolivespls.substack.com');
  
  // Combine with local posts
  const allPosts = [...substackPosts, ...blogArticles];
  
  const paths = allPosts.map(article => ({
    params: { id: article.id },
  }));

  return {
    paths,
    fallback: 'blocking', // Generate pages on-demand for new posts
  };
};

