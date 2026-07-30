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
          badge="Global Presence"
          title={
            <>
              Operating Across <span className="text-gradient">4 Key Hubs</span>
            </>
          }
          subtitle="Our distributed studios enable 24/7 continuous engineering, rapid response, and local market understanding."
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
                    {loc.isHQ && <span className={styles.hqBadge}>Global HQ</span>}
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
              <div className={styles.metricVal}>18+ Countries</div>
              <div className={styles.metricSub}>Active Client Footprint</div>
            </div>
            <div>
              <div className={styles.metricVal}>24/7 Coverage</div>
              <div className={styles.metricSub}>Follow-the-Sun Engineering</div>
            </div>
            <div>
              <div className={styles.metricVal}>99.9% SLA</div>
              <div className={styles.metricSub}>Guaranteed System Availability</div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
