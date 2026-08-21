'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  viewportAmount = 0.05,
}: ScrollRevealProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getVariants = () => {
    const offset = 30;
    let x = 0;
    let y = 0;

    switch (direction) {
      case 'up':
        y = offset;
        break;
      case 'down':
        y = -offset;
        break;
      case 'left':
        x = offset;
        break;
      case 'right':
        x = -offset;
        break;
      case 'none':
      default:
        break;
    }

    return {
      hidden: { opacity: 0, x, y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1] as const,
        },
      },
    };
  };

  // For static HTML prerendering (SSG/SSR), render a plain div so content is 100% visible to crawlers and search engines!
  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount, margin: '0px 0px -20px 0px' }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
