'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { TECH_STACK } from '@/data/agencyData';
import { Code, Database, Cloud } from 'lucide-react';
import styles from './TechStackGrid.module.css';

export default function TechStackGrid() {
  const frontendTech = TECH_STACK.filter((t) => t.category === 'frontend');
  const backendTech = TECH_STACK.filter((t) => t.category === 'backend');
  const cloudTech = TECH_STACK.filter((t) => t.category === 'cloud');

  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Technology Arsenal"
          title={
            <>
              Enterprise-Grade <span className="text-gradient">Tech Stack</span>
            </>
          }
          subtitle="We leverage proven, modern open-source frameworks and cloud platforms built for durability and extreme performance."
        />

        <div className={styles.categoriesGrid}>
          {/* Frontend */}
          <ScrollReveal direction="up" delay={0.1}>
            <GlassCard variant="default" glowOnHover className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <Code size={24} color="#4ade80" />
                <h3 className={styles.categoryTitle}>Frontend & Web</h3>
              </div>
              <div className={styles.techList}>
                {frontendTech.map((item, idx) => (
                  <div key={idx} className={styles.techRow}>
                    <div className={styles.techInfo}>
                      <span className={styles.techIcon}>{item.icon}</span>
                      <span className={styles.techName}>{item.name}</span>
                    </div>
                    <span className={styles.techLevel}>{item.level}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Backend */}
          <ScrollReveal direction="up" delay={0.2}>
            <GlassCard variant="accent" glowOnHover className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <Database size={24} color="#4ade80" />
                <h3 className={styles.categoryTitle}>Backend & AI</h3>
              </div>
              <div className={styles.techList}>
                {backendTech.map((item, idx) => (
                  <div key={idx} className={styles.techRow}>
                    <div className={styles.techInfo}>
                      <span className={styles.techIcon}>{item.icon}</span>
                      <span className={styles.techName}>{item.name}</span>
                    </div>
                    <span className={styles.techLevel}>{item.level}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Cloud & DevOps */}
          <ScrollReveal direction="up" delay={0.3}>
            <GlassCard variant="default" glowOnHover className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <Cloud size={24} color="#4ade80" />
                <h3 className={styles.categoryTitle}>Cloud & DevOps</h3>
              </div>
              <div className={styles.techList}>
                {cloudTech.map((item, idx) => (
                  <div key={idx} className={styles.techRow}>
                    <div className={styles.techInfo}>
                      <span className={styles.techIcon}>{item.icon}</span>
                      <span className={styles.techName}>{item.name}</span>
                    </div>
                    <span className={styles.techLevel}>{item.level}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
