import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from '@/data/blog-posts';
import BlogDetailClient from '@/components/blog/BlogDetailClient';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Raydrim Insights',
    };
  }

  return {
    title: `${post.title} | Raydrim Blog`,
    description: post.excerpt,
    keywords: [post.category, ...(post.tags || []), 'Raydrim Agency'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://raydrim.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.category, 3);
  const shareUrl = `https://raydrim.com/blog/${post.slug}`;

  return (
    <BlogDetailClient
      post={post}
      relatedPosts={relatedPosts}
      shareUrl={shareUrl}
    />
  );
}
