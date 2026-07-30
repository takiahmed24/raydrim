import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { BlogPost } from '@/types';
import Button from '../ui/Button';
import styles from './FeaturedPost.module.css';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className={styles.featuredBanner}>
      <div className={styles.imageCol}>
        <span className={styles.featuredTag}>
          <Sparkles size={13} /> Featured Article
        </span>
        <img
          src={post.image}
          alt={post.title}
          className={styles.image}
        />
      </div>

      <div className={styles.contentCol}>
        <div className={styles.metaRow}>
          <span className={styles.category}>{post.category}</span>
          <div className={styles.metaItem}>
            <Calendar size={14} />
            <span>{formattedDate}</span>
          </div>
          <div className={styles.metaItem}>
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.authorRow}>
          <div className={styles.author}>
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className={styles.avatar}
            />
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{post.author.name}</span>
              <span className={styles.authorRole}>{post.author.role}</span>
            </div>
          </div>

          <Button href={`/blog/${post.slug}`} variant="primary" size="md" icon={<ArrowRight size={16} />}>
            Read Article
          </Button>
        </div>
      </div>
    </div>
  );
}
