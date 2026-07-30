'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MessageSquarePlus, ArrowRight, Sparkles } from 'lucide-react';
import styles from './CustomQuoteBanner.module.css';

export default function CustomQuoteBanner() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <ScrollReveal direction="up" delay={0.2}>
          <GlassCard className={styles.card} hoverEffect={false}>
            <div className={styles.glowOrb} />

            <div className={styles.innerContent}>
              <div className={styles.leftCol}>
                <div className={styles.badge}>
                  <Sparkles size={14} />
                  <span>Bespoke Architecture & Advisory</span>
                </div>
                <h2 className={styles.title}>Need a Custom Enterprise Scope or Dedicated Pod?</h2>
                <p className={styles.description}>
                  We design custom contracts for multi-cloud migrations, white-glove AI agent deployment, multi-region compliance, and dedicated senior engineering teams.
                </p>
              </div>

              <div className={styles.rightCol}>
                <Button
                  href="/contact?plan=enterprise"
                  variant="gold"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                >
                  Request Custom Proposal
                </Button>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}
