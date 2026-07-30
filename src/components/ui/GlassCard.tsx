import React from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowOnHover?: boolean;
  variant?: 'default' | 'accent' | 'subtle';
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glowOnHover = true,
  variant = 'default',
  onClick,
}: GlassCardProps) {
  const variantClass = styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}` as keyof typeof styles] || styles.variantDefault;

  const cardClasses = [
    styles.card,
    variantClass,
    hoverEffect ? styles.hoverLift : '',
    glowOnHover ? styles.glowOnHover : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} onClick={onClick}>
      {children}
    </div>
  );
}
