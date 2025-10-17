import Head from 'next/head';
import { GetStaticProps } from 'next';
import BlogPostCard from '../components/BlogPostCard/BlogPostCard';
import { fetchSubstackPosts } from '../lib/substack';
import { BlogArticle } from '../types';

interface WritingProps {
  allPosts: BlogArticle[];
  substackCount: number;
  lastFetch: string;
}

export default function Writing({ allPosts, substackCount, lastFetch }: WritingProps) {
  return (
    <>
      <Head>
        <title>Writing - Olivia Qin</title>
        <meta name="description" content="Blog posts and stories by Olivia Qin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 playfair-display">
              Writing
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Stories, thoughts, and reflections
            </p>
          
          </header>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allPosts.map((article) => (
              <BlogPostCard key={article.id} article={article} />
            ))}
          </div>

          {/* Empty State (if no articles) */}
          {allPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<WritingProps> = async () => {
  console.log('🔄 Fetching blog posts...');
  
  try {
    // Fetch from Substack
    const substackPosts = await fetchSubstackPosts('extraolivespls.substack.com');
    
    // Combine with local posts
    const allPosts = [...substackPosts];
    
    // Sort by date (newest first)
    allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    console.log(`✅ Total posts: ${allPosts.length} (${substackPosts.length} Substack`);
    
    return {
      props: {
        allPosts,
        substackCount: substackPosts.length,
        lastFetch: new Date().toISOString(),
      },
      revalidate: 3600, // Re-fetch every 1 hour (ISR)
    };
  } catch (error) {
    console.error('❌ Error fetching posts:', error);
    
    // Fallback to local posts only
    return {
      props: {
        allPosts: [],
        substackCount: 0,
        lastFetch: new Date().toISOString(),
      },
      revalidate: 300, // Retry in 5 minutes on error
    };
  }
};
