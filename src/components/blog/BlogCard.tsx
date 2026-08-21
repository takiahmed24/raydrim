import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <span className={styles.categoryBadge}>{post.category}</span>
        <img
          src={post.image}
          alt={post.title}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Calendar size={14} />
            <span>{formattedDate}</span>
          </div>
          <div className={styles.metaItem}>
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.footer}>
          <div className={styles.author}>
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className={styles.avatar}
            />
            <span className={styles.authorName}>{post.author.name}</span>
          </div>

          <span className={styles.readMore}>
            Read Post <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
