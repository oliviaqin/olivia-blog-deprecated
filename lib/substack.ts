import { BlogArticle } from '../types';

interface SubstackRSSItem {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  description: string;
  content: string;
}

/**
 * Fetches posts from Substack RSS feed
 * @param substackUrl - Your Substack URL (e.g., 'extraolivespls.substack.com')
 * @returns Array of BlogArticle objects
 */
export async function fetchSubstackPosts(substackUrl: string = 'extraolivespls.substack.com'): Promise<BlogArticle[]> {
  try {
    const rssUrl = `https://${substackUrl}/feed`;
    
    console.log('Fetching from:', rssUrl);
    
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NextJS/13.0)',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.status}`);
    }

    const xmlText = await response.text();
    const posts = parseSubstackRSS(xmlText);
    
    console.log(`Fetched ${posts.length} posts from Substack`);
    
    return posts;
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    return []; // Return empty array on error
  }
}

/**
 * Parses Substack RSS XML and converts to BlogArticle format
 */
function parseSubstackRSS(xmlText: string): BlogArticle[] {
  const posts: BlogArticle[] = [];
  
  // Simple XML parsing (we'll use a proper parser in production)
  // For POC, using regex to extract data
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = xmlText.match(itemRegex) || [];
  
  items.forEach((item, index) => {
    try {
      const title = extractTag(item, 'title');
      const link = extractTag(item, 'link');
      const pubDate = extractTag(item, 'pubDate');
      const description = extractTag(item, 'description');
      const content = extractTag(item, 'content:encoded') || extractTag(item, 'description');
      
      if (!title || !link) return;
      
      // Generate slug from title
      const id = generateSlug(title);
      
      // Extract excerpt from description (remove HTML)
      const excerpt = stripHtml(description).slice(0, 200) + '...';
      
      // Extract first image from content (if any)
      const coverImage = extractFirstImage(content);
      
      // Format date
      const date = pubDate ? new Date(pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
      
      // Estimate read time
      const wordCount = stripHtml(content).split(/\s+/).length;
      const readTime = `${Math.ceil(wordCount / 200)} min read`;
      
      posts.push({
        id,
        title: cleanText(title),
        excerpt: cleanText(excerpt),
        content: content,
        date,
        author: 'Olivia Qin',
        coverImage,
        tags: ['substack'],
        readTime,
        externalUrl: link, // Link to original Substack post
      });
    } catch (error) {
      console.error('Error parsing RSS item:', error);
    }
  });
  
  return posts;
}

/**
 * Helper: Extract content from XML tag
 */
function extractTag(xml: string, tagName: string): string {
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

/**
 * Helper: Strip HTML tags
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

/**
 * Helper: Clean text (decode HTML entities)
 */
function cleanText(text: string): string {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1')
    .trim();
}

/**
 * Helper: Generate URL-friendly slug
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Helper: Extract first image URL from HTML content
 */
function extractFirstImage(html: string): string | undefined {
  const imgRegex = /<img[^>]+src="([^">]+)"/i;
  const match = html.match(imgRegex);
  return match ? match[1] : undefined;
}

/**
 * Helper: Convert HTML to simple markdown-style format
 * (Basic conversion for POC - can be enhanced)
 */
function convertHtmlToMarkdown(html: string): string {
  let markdown = html;
  
  // Convert headings
  markdown = markdown.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
  markdown = markdown.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
  markdown = markdown.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
  
  // Convert paragraphs
  markdown = markdown.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n');
  
  // Convert line breaks
  markdown = markdown.replace(/<br\s*\/?>/gi, '\n');
  
  // Remove remaining HTML tags
  markdown = stripHtml(markdown);
  
  // Clean up extra whitespace
  markdown = markdown.replace(/\n{3,}/g, '\n\n').trim();
  
  return markdown;
}

