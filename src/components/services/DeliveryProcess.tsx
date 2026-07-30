'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { DELIVERY_PROCESS } from '@/data/agencyData';
import styles from './DeliveryProcess.module.css';

export default function DeliveryProcess() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Execution Blueprint"
          title={
            <>
              Our Proven <span className="text-gradient">5-Step Delivery Process</span>
            </>
          }
          subtitle="A predictable, high-velocity engineering methodology that eliminates delays and guarantees quality."
        />

        <div className={styles.timeline}>
          {DELIVERY_PROCESS.map((step, idx) => (
            <ScrollReveal key={step.number} direction="up" delay={idx * 0.1}>
              <GlassCard variant="default" glowOnHover className={styles.stepCard}>
                <div className={styles.stepNum}>{step.number}</div>

                <div className={styles.stepMain}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <div className={styles.stepSub}>{step.subtitle}</div>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>

                <div className={styles.deliverablesBox}>
                  <div className={styles.deliverablesTitle}>Phase Artifacts</div>
                  <ul className={styles.deliverablesList}>
                    {step.deliverables.map((item, i) => (
                      <li key={i} className={styles.deliverableItem}>
                        <span className={styles.checkDot} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
