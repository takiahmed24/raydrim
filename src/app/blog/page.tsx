import type { Metadata } from 'next';
import { getAllBlogPosts, getAllCategories } from '@/data/blog-posts';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Engineering Blog & Technical Guides',
  description:
    'Explore engineering guides, CRO strategies, cloud architecture benchmarks, technical e-book publishing, and mobile app architecture insights.',
  alternates: {
    canonical: 'https://raydrim.com/blog',
  },
  openGraph: {
    title: 'Engineering Blog & Technical Guides | Raydrim Digital Agency',
    description:
      'Explore engineering guides, CRO strategies, cloud architecture benchmarks, technical e-book publishing, and mobile app architecture insights.',
    url: 'https://raydrim.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Blog & Technical Guides | Raydrim Digital Agency',
    description:
      'Explore engineering guides, CRO strategies, cloud architecture benchmarks, technical e-book publishing, and mobile app architecture insights.',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const categories = getAllCategories();

  return <BlogClient posts={posts} categories={categories} />;
}
