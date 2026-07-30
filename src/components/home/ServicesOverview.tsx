'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SERVICE_VERTICALS } from '@/data/agencyData';
import { Code, Cpu, ShoppingBag, Palette, Check, ArrowRight } from 'lucide-react';
import styles from './ServicesOverview.module.css';

export default function ServicesOverview() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={28} />;
      case 'Cpu':
        return <Cpu size={28} />;
      case 'ShoppingBag':
        return <ShoppingBag size={28} />;
      case 'Palette':
        return <Palette size={28} />;
      default:
        return <Code size={28} />;
    }
  };

  return (
    <section className={styles.section} id="services">
      <Container size="lg">
        <SectionHeading
          badge="Core Verticals"
          title={
            <>
              Enterprise Software & <span className="text-gradient">Design Solutions</span>
            </>
          }
          subtitle="We engineer end-to-end digital capabilities designed to accelerate growth and outperform competitors."
        />

        <div className={styles.grid}>
          {SERVICE_VERTICALS.map((service, idx) => (
            <ScrollReveal key={service.id} direction="up" delay={idx * 0.1}>
              <GlassCard variant="default" glowOnHover className={styles.card}>
                <div>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>{getIcon(service.iconName)}</div>
                    <span className={styles.badge}>{service.metrics[0].value} Performance</span>
                  </div>

                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>

                  <ul className={styles.featureList}>
                    {service.capabilities.slice(0, 4).map((cap, i) => (
                      <li key={i} className={styles.featureItem}>
                        <Check size={16} className={styles.featureIcon} />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardFooter}>
                  <Link href={`/services#${service.slug}`} className={styles.learnMore}>
                    <span>Explore Capability</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
