'use client';

import React from 'react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/ui/SocialIcons';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { FOUNDER_PROFILE } from '@/data/agencyData';
import styles from './TeamGrid.module.css';

export default function TeamGrid() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Founder & Developer"
          title={
            <>
              Meet the Founder Behind <span className="text-gradient">Raydrim</span>
            </>
          }
          subtitle="Direct technical leadership, dedicated full-stack development, and end-to-end project ownership."
        />

        <div className={styles.grid}>
          <ScrollReveal direction="up" delay={0.1}>
            <article className={styles.card}>
              <div className={styles.avatarWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={FOUNDER_PROFILE.avatar}
                  alt={FOUNDER_PROFILE.name}
                  className={styles.avatar}
                  loading="lazy"
                />
                <div className={styles.avatarOverlay} />
              </div>

              <div className={styles.body}>
                <div>
                  <h3 className={styles.name}>{FOUNDER_PROFILE.name}</h3>
                  <div className={styles.role}>{FOUNDER_PROFILE.role}</div>
                  <p className={styles.bio}>{FOUNDER_PROFILE.bio}</p>

                  <div className={styles.skills}>
                    {FOUNDER_PROFILE.skills.map((skill, i) => (
                      <span key={i} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.footer}>
                  {FOUNDER_PROFILE.socials.linkedin && (
                    <a
                      href={FOUNDER_PROFILE.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  )}
                  {FOUNDER_PROFILE.socials.twitter && (
                    <a
                      href={FOUNDER_PROFILE.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label="Twitter"
                    >
                      <TwitterIcon size={16} />
                    </a>
                  )}
                  {FOUNDER_PROFILE.socials.github && (
                    <a
                      href={FOUNDER_PROFILE.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label="GitHub"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
