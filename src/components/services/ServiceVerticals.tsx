'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICE_VERTICALS } from '@/data/agencyData';
import { Code, Cpu, ShoppingBag, Palette, CheckCircle2, Layers, CpuIcon, Smartphone, BookOpen } from 'lucide-react';
import styles from './ServiceVerticals.module.css';

export default function ServiceVerticals() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={30} />;
      case 'Cpu':
        return <Cpu size={30} />;
      case 'ShoppingBag':
        return <ShoppingBag size={30} />;
      case 'Palette':
        return <Palette size={30} />;
      case 'Smartphone':
        return <Smartphone size={30} />;
      case 'BookOpen':
        return <BookOpen size={30} />;
      default:
        return <Code size={30} />;
    }
  };

  return (
    <section className={styles.section} id="verticals">
      <Container size="lg">
        <SectionHeading
          badge="In-Depth Capabilities"
          title={
            <>
              Comprehensive Engineering & <span className="text-gradient">Product Verticals</span>
            </>
          }
          subtitle="Explore our specialized services built for scale, mobile app stores, e-books, and revenue impact."
        />

        {SERVICE_VERTICALS.map((vertical, idx) => (
          <div key={vertical.id} id={vertical.slug} className={styles.verticalBlock}>
            <ScrollReveal direction="up" delay={0.1}>
              <GlassCard variant={idx % 2 === 0 ? 'accent' : 'default'} glowOnHover className={styles.card}>
                <div className={styles.topRow}>
                  <div className={styles.headerInfo}>
                    <div className={styles.iconBox}>{getIcon(vertical.iconName)}</div>
                    <h2 className={styles.title}>{vertical.title}</h2>
                    <div className={styles.subtitle}>{vertical.subtitle}</div>
                    <p className={styles.desc}>{vertical.description}</p>
                  </div>

                  <div className={styles.metricsContainer}>
                    {vertical.metrics.map((m, i) => (
                      <div key={i} className={styles.metricBox}>
                        <span className={styles.metricValue}>{m.value}</span>
                        <span className={styles.metricLabel}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.detailsGrid}>
                  <div>
                    <h3 className={styles.blockTitle}>
                      <CheckCircle2 size={18} className={styles.checkIcon} />
                      Core Capabilities
                    </h3>
                    <ul className={styles.capabilitiesList}>
                      {vertical.capabilities.map((cap, i) => (
                        <li key={i} className={styles.capabilityItem}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className={styles.blockTitle}>
                      <Layers size={18} className={styles.checkIcon} />
                      Technology Stack
                    </h3>
                    <div className={styles.techBadges}>
                      {vertical.techStack.map((tech, i) => (
                        <span key={i} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className={styles.blockTitle} style={{ marginTop: '20px' }}>
                      <CheckCircle2 size={18} className={styles.checkIcon} />
                      Key Deliverables
                    </h3>
                    <ul className={styles.deliverablesList}>
                      {vertical.deliverables.map((del, i) => (
                        <li key={i} className={styles.deliverableItem}>
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        ))}
      </Container>
    </section>
  );
}
