'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MILESTONES } from '@/data/agencyData';
import styles from './MilestonesTimeline.module.css';

export default function MilestonesTimeline() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Company Evolution"
          title={
            <>
              Key Milestones in <span className="text-gradient">Our Journey</span>
            </>
          }
          subtitle="From a boutique technical consultancy to an internationally recognized digital agency."
        />

        <div className={styles.timeline}>
          {MILESTONES.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.dot} />
              <ScrollReveal direction={idx % 2 === 0 ? 'left' : 'right'} delay={0.1}>
                <div className={styles.card}>
                  <div className={styles.yearHeader}>
                    <span className={styles.year}>{item.year}</span>
                    <span className={styles.badge}>{item.badge}</span>
                  </div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
