'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowOrb} />
      <Container size="lg">
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.badge}>
            <span className="editorial-badge">
              <span className="badge-num">•</span>
              ARCHITECTING THE FUTURE OF DIGITAL ENGINEERING
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h1 className={styles.title}>
            Driven by Innovation, <br />
            <span className="text-gradient">Defined by Quality</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className={styles.subtitle}>
            Raydrim is a boutique software house and digital design studio. We partner with visionary founders and global enterprises to build web platforms, AI architectures, and brand systems that redefine market standards.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>
                <AnimatedCounter value={2020} suffix="" decimals={0} />
              </span>
              <span className={styles.statLabel}>Founded</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>
                <AnimatedCounter value={40} suffix="+" />
              </span>
              <span className={styles.statLabel}>Engineers & Designers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>
                <AnimatedCounter value={150} suffix="+" />
              </span>
              <span className={styles.statLabel}>Client Deployments</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>
                <AnimatedCounter value={4} suffix="" />
              </span>
              <span className={styles.statLabel}>Global Studios</span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
