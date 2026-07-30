import type { Metadata } from 'next';
import { getAllBlogPosts, getAllCategories } from '@/data/blog-posts';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog & Technical Insights | Raydrim Digital Agency',
  description:
    'Explore engineering guides, CRO strategies, cloud architecture benchmarks, and digital brand design insights from the Raydrim team.',
  openGraph: {
    title: 'Blog & Technical Insights | Raydrim Digital Agency',
    description:
      'Explore engineering guides, CRO strategies, cloud architecture benchmarks, and digital brand design insights.',
    url: 'https://raydrim.com/blog',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  return <BlogClient posts={posts} categories={categories} />;
}
