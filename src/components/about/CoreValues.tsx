'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Award, Eye, Rocket, HeartHandshake } from 'lucide-react';
import styles from './CoreValues.module.css';

export default function CoreValues() {
  const values = [
    {
      icon: <Award size={26} />,
      title: 'Uncompromising Excellence',
      description:
        'We set the benchmark for clean code, zero-latency execution, and pixel-perfect design across every digital asset we deploy.',
    },
    {
      icon: <Eye size={26} />,
      title: 'Radical Transparency',
      description:
        'Clear roadmaps, direct communication with the developer, honest project tracking, and zero hidden technical debt.',
    },
    {
      icon: <Rocket size={26} />,
      title: 'Pioneering Innovation',
      description:
        'Constantly integrating bleeding-edge AI models, modern web primitives, and next-gen UI frameworks to give our clients an unfair advantage.',
    },
    {
      icon: <HeartHandshake size={26} />,
      title: 'Client-Centric ROI',
      description:
        'We do not just deliver software; we align engineering output directly with revenue expansion, conversion lift, and market valuation.',
    },
  ];

  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Guiding Principles"
          title={
            <>
              The Pillars of <span className="text-gradient">Our Culture</span>
            </>
          }
          subtitle="Our core values guide every architecture decision, design iteration, and client interaction."
        />

        <div className={styles.grid}>
          {values.map((val, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <GlassCard variant="default" glowOnHover className={styles.card}>
                <div className={styles.iconBox}>{val.icon}</div>
                <h3 className={styles.title}>{val.title}</h3>
                <p className={styles.desc}>{val.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
