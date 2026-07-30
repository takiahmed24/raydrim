'use client';

import React from 'react';
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
  viewportAmount = 0.2,
}: ScrollRevealProps) {
  const getVariants = () => {
    const offset = 40;
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
