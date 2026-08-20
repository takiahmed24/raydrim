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
                  <span className={styles.tag}>Founder Story</span>
                </div>

                <h2 className={styles.title}>Built on Dedication, Craftsmanship & Accountability</h2>

                <div className={styles.body}>
                  <p>
                    I&apos;m Muhammad Taki Ahmed, a software developer based in Dhaka, Bangladesh. I started Raydrim to build high-quality web applications, mobile apps, and e-commerce solutions for clients worldwide.
                  </p>
                  <p>
                    Every project I take on gets my full attention — from architecture planning to production deployment. I believe a solo developer who ships real products is more valuable than a large team that overpromises.
                  </p>
                </div>
              </div>

              <ul className={styles.highlightList}>
                <li className={styles.highlightItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>Direct communication with the developer building your product</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>100% full source code and intellectual property ownership</span>
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
                  <span className={styles.tag}>Strategic Vision</span>
                </div>

                <h2 className={styles.title}>Growing with Purpose, Expanding Real Impact</h2>

                <div className={styles.body}>
                  <p>
                    My vision for Raydrim is to grow sustainably by building solid, scalable digital foundations. Starting as an independent studio, I continuously refine my engineering stack across Next.js, Shopify, and mobile development to deliver exceptional value.
                  </p>
                  <p>
                    As Raydrim expands, the goal is to build a focused studio known for engineering excellence, reliable timelines, and transparent collaboration — empowering clients to launch and scale their digital products with confidence.
                  </p>
                </div>
              </div>

              <ul className={styles.highlightList}>
                <li className={styles.highlightItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>Production-grade web, e-commerce & mobile solutions</span>
                </li>
                <li className={styles.highlightItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <span>Long-term technical partnership & honest consultation</span>
                </li>
              </ul>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
