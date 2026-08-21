'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowOrb} />
      <Container size="lg">
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.badge}>
            <span className="editorial-badge">
              <span className="badge-num">•</span>
              OUR DIGITAL CAPABILITIES & ENGINEERING SERVICES
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h1 className={styles.title}>
            Enterprise Solutions <br />
            <span className="text-gradient">Engineered to Scale</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <p className={styles.subtitle}>
            From fast Next.js websites to AI feature integration, headless e-commerce, and brand and UI design systems—we deliver production-grade technical mastery.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.actions}>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight size={20} />}>
              Start a Project
            </Button>
            <Button href="#verticals" variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
              Explore Verticals
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
