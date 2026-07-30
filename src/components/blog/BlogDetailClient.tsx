'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/types';
import Container from '../ui/Container';
import ScrollReveal from '../ui/ScrollReveal';
import TableOfContents from './TableOfContents';
import SocialShareButtons from './SocialShareButtons';
import AuthorBioCard from './AuthorBioCard';
import BlogCard from './BlogCard';
import styles from './BlogDetail.module.css';

interface BlogDetailClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  shareUrl: string;
}

export default function BlogDetailClient({
  post,
  relatedPosts,
  shareUrl,
}: BlogDetailClientProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={styles.detailWrapper}>
      <Container size="lg">
        {/* Back Button */}
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Insights
        </Link>

        {/* Hero Section */}
        <div className={styles.hero}>
          <span className={styles.categoryPill}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>

          <div className={styles.metaRow}>
            <div className={styles.authorMeta}>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className={styles.authorAvatar}
              />
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{post.author.name}</span>
                <span className={styles.authorRole}>{post.author.role}</span>
              </div>
            </div>

            <div className={styles.infoMeta}>
              <div className={styles.metaItem}>
                <Calendar size={15} />
                <span>{formattedDate}</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={15} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cover Banner Image */}
        <div className={styles.coverContainer}>
          <img
            src={post.image}
            alt={post.title}
            className={styles.coverImage}
          />
        </div>

        {/* Article Content & Table of Contents Sidebar */}
        <div className={styles.articleLayout}>
          {post.tableOfContents && post.tableOfContents.length > 0 ? (
            <TableOfContents items={post.tableOfContents} />
          ) : (
            <div />
          )}

          <div>
            <div
              className={styles.articleBody}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className={styles.tagsRow}>
                <Tag size={16} color="var(--jungle-400)" />
                {post.tags.map((t) => (
                  <span key={t} className={styles.tagPill}>
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Social Share Buttons */}
            <SocialShareButtons title={post.title} url={shareUrl} />

            {/* Author Bio Card */}
            <AuthorBioCard author={post.author} />
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Related Technical Insights</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((rPost, idx) => (
                <ScrollReveal key={rPost.id} direction="up" delay={0.1 * idx}>
                  <BlogCard post={rPost} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
