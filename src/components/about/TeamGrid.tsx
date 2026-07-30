'use client';

import React from 'react';
import { LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/ui/SocialIcons';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { TEAM_MEMBERS } from '@/data/agencyData';
import styles from './TeamGrid.module.css';

export default function TeamGrid() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Leadership & Engineering"
          title={
            <>
              Meet the Minds Behind <span className="text-gradient">Raydrim</span>
            </>
          }
          subtitle="World-class engineers, system architects, and design directors committed to your vision."
        />

        <div className={styles.grid}>
          {TEAM_MEMBERS.map((member, idx) => (
            <ScrollReveal key={member.id} direction="up" delay={idx * 0.1}>
              <article className={styles.card}>
                <div className={styles.avatarWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.avatar} alt={member.name} className={styles.avatar} loading="lazy" />
                  <div className={styles.avatarOverlay} />
                </div>

                <div className={styles.body}>
                  <div>
                    <h3 className={styles.name}>{member.name}</h3>
                    <div className={styles.role}>{member.role}</div>
                    <p className={styles.bio}>{member.bio}</p>

                    <div className={styles.skills}>
                      {member.skills.map((skill, i) => (
                        <span key={i} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.footer}>
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className={styles.socialLink} aria-label="LinkedIn">
                        <LinkedinIcon size={16} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className={styles.socialLink} aria-label="Twitter">
                        <TwitterIcon size={16} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className={styles.socialLink} aria-label="GitHub">
                        <GithubIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
