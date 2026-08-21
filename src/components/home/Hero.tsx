'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Zap, ShieldCheck, Code } from 'lucide-react';
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
                Independent Software Studio · Dhaka, Bangladesh
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
              I'm Muhammad Taki Ahmed, a full-stack developer in Dhaka. I build fast, production-ready websites, Shopify stores and mobile apps in Next.js and React — and you get the full source code, every time.
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
                  <span className={styles.cardLabel}>Next.js 16 Server Components</span>
                </div>
              </GlassCard>

              <GlassCard variant="default" hoverEffect className={styles.accentCard}>
                <div className={styles.cardIconBox}>
                  <ShieldCheck size={22} />
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardVal}>Secure by Default</span>
                  <span className={styles.cardLabel}>HTTPS/TLS 1.3 · No Data Retention</span>
                </div>
              </GlassCard>

              <GlassCard variant="subtle" hoverEffect className={styles.accentCard}>
                <div className={styles.cardIconBox}>
                  <Code size={22} />
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardVal}>Modern Tech Stack</span>
                  <span className={styles.cardLabel}>Next.js 16 · TypeScript · React</span>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
