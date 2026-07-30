'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Award, Zap, ShieldCheck } from 'lucide-react';
import styles from './PortfolioHero.module.css';

export default function PortfolioHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <Container size="lg">
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.badgeWrapper}>
            <span className="glow-badge">
              <span className="pulse-dot" />
              Proven Digital Deliverables
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h1 className={styles.title}>
            Our Impact <span className="text-gradient">In Action</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className={styles.subtitle}>
            Explore our curated portfolio of high-converting web applications, headless e-commerce flagship stores, autonomous cloud infrastructures, and high-status brand identity systems.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.statsHighlightBar}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>
                <Zap size={18} />
              </span>
              <span>100% Production-Grade Execution</span>
            </div>
            <div className={styles.highlightDivider} />
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>
                <Award size={18} />
              </span>
              <span>$120M+ Client Value Unlocked</span>
            </div>
            <div className={styles.highlightDivider} />
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>
                <ShieldCheck size={18} />
              </span>
              <span>Zero Post-Launch Failures</span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
