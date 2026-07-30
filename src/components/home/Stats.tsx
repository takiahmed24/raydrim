'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { HOME_STATS } from '@/data/agencyData';
import styles from './Stats.module.css';

export default function Stats() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <ScrollReveal direction="up" delay={0.1}>
          <div className={styles.banner}>
            <div className={styles.bannerGlow} />

            <div className={styles.grid}>
              {HOME_STATS.map((stat, idx) => (
                <div key={idx} className={styles.item}>
                  <div className={styles.number}>
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <div className={styles.label}>{stat.label}</div>
                  {stat.description && <div className={styles.desc}>{stat.description}</div>}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
