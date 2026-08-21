'use client';

import React, { useState, useMemo } from 'react';
import { BlogPost } from '@/types';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogFilter from '@/components/blog/BlogFilter';
import BlogCard from '@/components/blog/BlogCard';
import styles from './blog.module.css';

interface BlogClientProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = useMemo(() => {
    return posts.find((p) => p.featured) || posts[0];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  return (
    <div className={styles.pageWrapper}>
      <Container size="lg">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Engineering & Strategy Insights"
            title={
              <>
                Perspectives on <span className="text-gradient">Technology</span> &{' '}
                <span className="text-gradient-gold">Design</span>
              </>
            }
            subtitle="Notes from building and shipping real projects — the bugs, the trade-offs, and what I would do differently."
            align="center"
          />
        </ScrollReveal>

        {/* Featured Post Banner */}
        {featuredPost && activeCategory === 'All' && !searchQuery && (
          <ScrollReveal direction="up" delay={0.1}>
            <FeaturedPost post={featuredPost} />
          </ScrollReveal>
        )}

        {/* Search & Filter Controls */}
        <ScrollReveal direction="up" delay={0.2}>
          <BlogFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </ScrollReveal>

        {/* Article Grid */}
        {filteredPosts.length > 0 ? (
          <div className={styles.grid}>
            {filteredPosts.map((post, idx) => (
              <ScrollReveal key={post.id} direction="up" delay={0.1 * (idx % 3)}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3 className={styles.emptyTitle}>No matching articles found</h3>
            <p className={styles.emptySubtitle}>
              Try adjusting your search query or category filter to discover more insights.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
