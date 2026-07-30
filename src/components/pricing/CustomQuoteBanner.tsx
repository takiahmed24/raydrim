'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MessageSquarePlus, ArrowRight, Sparkles, ShoppingBag } from 'lucide-react';
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
                  <span>Bespoke Architecture & Digital Marketplace</span>
                </div>
                <h2 className={styles.title}>Custom Enterprise Scope or Instant Digital Passes?</h2>
                <p className={styles.description}>
                  Choose a custom contract for multi-cloud migrations, AI agent deployment, and dedicated engineering pods, or visit our instant digital storefront on Whop for pre-built Passes & Memberships.
                </p>
              </div>

              <div className={styles.rightCol} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Button
                  href="/contact?plan=enterprise"
                  variant="gold"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                >
                  Request Custom Proposal
                </Button>
                <Button
                  href="https://whop.com/raydrim"
                  variant="secondary"
                  size="lg"
                  icon={<ShoppingBag size={18} />}
                >
                  Visit Whop Marketplace 🛍️
                </Button>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </Container>
    </section>
  );
}
