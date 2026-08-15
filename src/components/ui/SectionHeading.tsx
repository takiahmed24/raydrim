import React from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = styles[`align${align.charAt(0).toUpperCase() + align.slice(1)}` as keyof typeof styles];

  return (
    <div className={`${styles.wrapper} ${alignClass} ${className}`.trim()}>
      {badge && (
        <div className={styles.badgeWrapper}>
          <span className="editorial-badge">
            <span className="badge-num">•</span>
            {badge}
          </span>
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
