'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CATEGORIES } from '@/data/portfolioData';
import styles from './CategoryFilters.module.css';

interface CategoryFiltersProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
}

export default function CategoryFilters({
  activeCategory,
  onSelectCategory,
  categoryCounts,
}: CategoryFiltersProps) {
  return (
    <div className={styles.container}>
      <div className={styles.tabsList} role="tablist">
        {PORTFOLIO_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const count = categoryCounts[category] || 0;

          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              className={`${styles.tabButton} ${isActive ? styles.activeTab : ''}`}
              onClick={() => onSelectCategory(category)}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className={styles.activeBg}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className={styles.tabLabel}>{category}</span>
              <span className={styles.countBadge}>{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
