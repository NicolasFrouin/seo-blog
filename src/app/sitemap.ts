import { getAllPosts } from '@/lib/api';
import { BLOG_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {  
  const posts = getAllPosts();

  const sitemapPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BLOG_URL}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  sitemapPosts.sort((a, b) => ((a.lastModified as Date) > (b.lastModified as Date) ? -1 : 1));
  const mostRecentPostDate = new Date(posts[0].date);

  return [
    {
      url: BLOG_URL,
      lastModified: mostRecentPostDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...sitemapPosts,
  ];
}
