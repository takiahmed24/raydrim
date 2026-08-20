'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { OFFICE_LOCATIONS } from '@/data/agencyData';
import { MapPin, Clock } from 'lucide-react';
import styles from './GlobalFootprint.module.css';

export default function GlobalFootprint() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Location & Reach"
          title={
            <>
              Based in Dhaka, <span className="text-gradient">Serving Worldwide</span>
            </>
          }
          subtitle="Operating remotely with flexible communication, agile workflows, and full commitment to international clients."
        />

        <div className={styles.grid}>
          {OFFICE_LOCATIONS.map((loc, idx) => (
            <ScrollReveal key={loc.city} direction="up" delay={idx * 0.1}>
              <GlassCard variant="default" glowOnHover className={styles.officeCard}>
                <div>
                  <div className={styles.topRow}>
                    <div className={styles.iconBox}>
                      <MapPin size={22} />
                    </div>
                    {loc.isHQ && <span className={styles.hqBadge}>Base HQ</span>}
                  </div>

                  <h3 className={styles.city}>{loc.city}</h3>
                  <div className={styles.country}>{loc.country}</div>
                  <p className={styles.address}>{loc.address}</p>
                </div>

                <div className={styles.timezone}>
                  <Clock size={14} />
                  <span>Timezone: {loc.timezone}</span>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.4}>
          <div className={styles.metricsBanner}>
            <div>
              <div className={styles.metricVal}>Remote-First</div>
              <div className={styles.metricSub}>Seamless Global Collaboration</div>
            </div>
            <div>
              <div className={styles.metricVal}>Worldwide Clients</div>
              <div className={styles.metricSub}>Cross-Border Project Delivery</div>
            </div>
            <div>
              <div className={styles.metricVal}>Full Code Ownership</div>
              <div className={styles.metricSub}>100% Repository & Asset Transfer</div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
