'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { FEATURED_PROJECTS } from '@/data/agencyData';
import styles from './FeaturedWork.module.css';

export default function FeaturedWork() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Featured Engineering"
          title={
            <>
              Recent <span className="text-gradient">Case Studies</span>
            </>
          }
          subtitle="Explore how we helped visionary enterprises launch category-defining digital products."
        />

        <div className={styles.grid}>
          {FEATURED_PROJECTS.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 0.15}>
              <article className={styles.projectCard}>
                <div className={styles.imageWrapper}>
                  {/* Standard img tag for external unsplash URLs */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.overlay} />
                  <span className={styles.categoryTag}>{project.category}</span>
                </div>

                <div className={styles.body}>
                  <div>
                    <div className={styles.client}>{project.client}</div>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.desc}>{project.summary}</p>

                    <div className={styles.tags}>
                      {project.tags.map((tag, i) => (
                        <span key={i} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.metrics && (
                    <div className={styles.metricsRow}>
                      {project.metrics.map((m, i) => (
                        <div key={i} className={styles.metricItem}>
                          <span className={styles.metricVal}>{m.value}</span>
                          <span className={styles.metricLabel}>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
