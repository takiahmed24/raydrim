'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import styles from './ContactHero.module.css';

export default function ContactHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.glowOrb} />

      <Container size="lg">
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.badgeWrapper}>
            <span className="editorial-badge">
              <span className="badge-num">•</span>
              Direct Engineering Consultation
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h1 className={styles.title}>
            Let's Start <span className="text-gradient">Your Project</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className={styles.subtitle}>
            Have an upcoming web application, mobile app, or e-commerce project? Speak directly with Muhammad Taki Ahmed, founder and lead software developer at Raydrim.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.guaranteeChip}>
            <Clock size={16} />
            <span>Response Guarantee: Within 24 Hours</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
