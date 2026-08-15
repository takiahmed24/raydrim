'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Zap, ShieldCheck, Award } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container size="lg">
        <div className={styles.heroContent}>
          <ScrollReveal direction="up" delay={0.1}>
            <div className={styles.badgeWrapper}>
              <span className="editorial-badge">
                <span className="badge-num">•</span>
                Next-Gen Digital Agency Framework
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h1 className={styles.title}>
              We Build <span className={styles.titleGradient}>Digital Futures</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className={styles.subtitle}>
              Raydrim crafts bespoke enterprise web applications, AI orchestration platforms, and high-converting luxury visual identities designed to dominate your market.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className={styles.ctaGroup}>
              <Button href="/services" variant="primary" size="lg" icon={<ArrowRight size={20} />}>
                Explore Services
              </Button>
              <Button href="/contact" variant="secondary" size="lg" icon={<Zap size={20} />}>
                Book Consultation
              </Button>
            </div>
          </ScrollReveal>

          {/* Editorial Floating Accent Cards */}
          <ScrollReveal direction="up" delay={0.5}>
            <div className={styles.floatingCardsGrid}>
              <GlassCard variant="accent" hoverEffect className={styles.accentCard}>
                <div className={styles.cardIconBox}>
                  <Zap size={22} />
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardVal}>Sub-Second Velocity</span>
                  <span className={styles.cardLabel}>Next.js 14 Server Components</span>
                </div>
              </GlassCard>

              <GlassCard variant="default" hoverEffect className={styles.accentCard}>
                <div className={styles.cardIconBox}>
                  <ShieldCheck size={22} />
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardVal}>Enterprise Security</span>
                  <span className={styles.cardLabel}>SOC2 Compliant Architecture</span>
                </div>
              </GlassCard>

              <GlassCard variant="subtle" hoverEffect className={styles.accentCard}>
                <div className={styles.cardIconBox}>
                  <Award size={22} />
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardVal}>12+ Global Awards</span>
                  <span className={styles.cardLabel}>UX & Engineering Mastery</span>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
