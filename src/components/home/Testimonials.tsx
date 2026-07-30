'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { TESTIMONIALS } from '@/data/agencyData';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Client Endorsements"
          title={
            <>
              Trusted by Technical <span className="text-gradient">Visionaries</span>
            </>
          }
          subtitle="Read how our engineering and design partnerships deliver measurable business impact."
        />

        <div className={styles.grid}>
          {TESTIMONIALS.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={idx * 0.12}>
              <GlassCard variant="default" glowOnHover className={styles.card}>
                <div>
                  <div className={styles.stars}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#facc15" stroke="none" />
                    ))}
                  </div>
                  <p className={styles.quote}>{item.quote}</p>
                </div>

                <div className={styles.authorRow}>
                  {item.avatar && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.avatar} alt={item.author} className={styles.avatar} />
                  )}
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>{item.author}</span>
                    <span className={styles.authorRole}>
                      {item.role} at <span className={styles.company}>{item.company}</span>
                    </span>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
