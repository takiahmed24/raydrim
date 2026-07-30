'use client';

import React from 'react';
import { CLIENT_LOGOS } from '@/data/agencyData';
import styles from './TrustedBy.module.css';

export default function TrustedBy() {
  // Duplicate array for infinite seamless scroll
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className={styles.section}>
      <p className={styles.label}>TRUSTED BY INDUSTRY LEADERS & INNOVATION GLOBAL BRANDS</p>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.track}>
          {marqueeItems.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className={styles.logoItem}>
              <span className={styles.symbol}>{logo.symbol}</span>
              <div>
                <div className={styles.logoName}>{logo.name}</div>
                <div className={styles.logoCategory}>{logo.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
