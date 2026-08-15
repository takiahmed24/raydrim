'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CheckCircle2, Shield, Sparkles } from 'lucide-react';
import styles from './PricingHero.module.css';

export default function PricingHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.glowOrb} />

      <Container size="lg">
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.badgeWrapper}>
            <span className="editorial-badge">
              <span className="badge-num">•</span>
              100% Value Guarantee
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h1 className={styles.title}>
            Transparent <span className="text-gradient">Investment Plans</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className={styles.subtitle}>
            Zero hidden fees, zero vendor lock-in, and clear scope milestones. Invest with confidence in production-grade web architecture and senior engineering pods.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.guaranteeBadge}>
            <CheckCircle2 size={18} className={styles.checkIcon} />
            <span>Full IP & Source Code Ownership Included With All Plans</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
