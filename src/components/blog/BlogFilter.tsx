'use client';

import React from 'react';
import { Search } from 'lucide-react';
import styles from './BlogFilter.module.css';

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function BlogFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: BlogFilterProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.categories}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`${styles.chip} ${isActive ? styles.activeChip : ''}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className={styles.searchBox}>
        <Search size={18} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search insights, articles, and guides..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
}
