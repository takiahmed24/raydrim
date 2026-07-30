import React from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  as?: React.ElementType;
}

export default function Container({
  children,
  className = '',
  size = 'lg',
  as: Component = 'div',
}: ContainerProps) {
  const containerClasses = `${styles.container} ${styles[size]} ${className}`.trim();

  return <Component className={containerClasses}>{children}</Component>;
}
