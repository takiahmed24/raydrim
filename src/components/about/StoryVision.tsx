'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Compass, Target, CheckCircle2 } from 'lucide-react';
import styles from './StoryVision.module.css';

export default function StoryVision() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <div className={styles.grid}>
          {/* Column 1: Journey */}
          <ScrollReveal direction="left" delay={0.1}>
            <GlassCard variant="accent" glowOnHover className={styles.card}>
              <div>
                <div className={styles.header}>
                  <div className={styles.iconBox}>
                    <Compass size={28} />
                  </div>
                  <span className={styles.tag}>Our Genesis</span>
                </div>

                <h2 className={styles.title}>From Technical Vision to Global Enterprise Partner</h2>

                <div className={styles.body}>
                  <p>
                    Raydrim was born out of frustration with conventional software agencies that sacrificed code architecture for speed, or compromised design identity for utility.
                  </p>
                  <p>
                    Founded in 2020, we assembled a elite team of distributed systems engineers and luxury brand UI designers. We bridged the gap by crafting web software that renders in under 500 milliseconds while delivering captivating, interactive visual elegance.
                  </p>
                </div>
              </div>

              <ul className={styles.highlightList}>
                <li className={styles.highlightItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>Sub-second page rendering SLAs across all builds</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>100% in-house senior technical architecture leadership</span>
                </li>
              </ul>
            </GlassCard>
          </ScrollReveal>

          {/* Column 2: Strategic Vision */}
          <ScrollReveal direction="right" delay={0.2}>
            <GlassCard variant="default" glowOnHover className={styles.card}>
              <div>
                <div className={styles.header}>
                  <div className={styles.iconBox}>
                    <Target size={28} />
                  </div>
                  <span className={styles.tag}>Strategic Horizon</span>
                </div>

                <h2 className={styles.title}>Architecting the Next Era of Web & AI Systems</h2>

                <div className={styles.body}>
                  <p>
                    We believe the digital landscape is undergoing a paradigm shift. Enterprise applications must seamlessly combine autonomous AI agent intelligence, instant server streaming, and responsive micro-interactions.
                  </p>
                  <p>
                    Our mission is to arm high-growth brands with software foundations that outpace market shifts, guarantee data security, and scale effortlessly from 10,000 to 10,000,000 active users.
                  </p>
                </div>
              </div>

              <ul className={styles.highlightList}>
                <li className={styles.highlightItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>Pioneering Next.js 14 + LLM orchestration frameworks</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>Zero-trust cloud infrastructure and continuous monitoring</span>
                </li>
              </ul>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
