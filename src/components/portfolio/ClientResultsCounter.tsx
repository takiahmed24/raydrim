'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { PORTFOLIO_STATS } from '@/data/portfolioData';
import { ArrowRight } from 'lucide-react';
import styles from './ClientResultsCounter.module.css';

export default function ClientResultsCounter() {
  return (
    <section className={styles.bannerSection}>
      <Container size="lg">
        <ScrollReveal direction="up" delay={0.2}>
          <GlassCard className={styles.bannerCard} hoverEffect={false}>
            <div className={styles.glowOrb} />

            <div className={styles.statsGrid}>
              {PORTFOLIO_STATS.map((stat, idx) => (
                <div key={idx} className={styles.statCell}>
                  <div className={styles.numberValue}>
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={(stat as { decimals?: number }).decimals ?? 0}
                    />
                  </div>
                  <div className={styles.labelTitle}>{stat.label}</div>
                  <div className={styles.labelDesc}>{stat.description}</div>
                </div>
              ))}
            </div>

            <div className={styles.ctaBar}>
              <div className={styles.ctaText}>
                Ready to build an award-winning digital experience for your brand?
              </div>
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight size={20} />}>
                Start Your Project
              </Button>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}
