'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Calendar } from 'lucide-react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.box}>
            <div className={styles.glowPattern} />

            <div className={styles.content}>
              <div className={styles.badge}>
                <span className="glow-badge">
                  <span className="pulse-dot" />
                  Now Accepting Q3/Q4 Enterprise Builds
                </span>
              </div>

              <h2 className={styles.title}>
                Ready to Build Your Next <span className="text-gradient">Digital Breakthrough?</span>
              </h2>

              <p className={styles.subtitle}>
                Let's turn your ambitious roadmap into enterprise-grade software. Schedule a 30-minute strategic architecture review with our team today.
              </p>

              <div className={styles.buttons}>
                <Button href="/contact" variant="primary" size="lg" icon={<Calendar size={20} />}>
                  Schedule Discovery Session
                </Button>
                <Button href="/services" variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
                  View Capabilities
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
