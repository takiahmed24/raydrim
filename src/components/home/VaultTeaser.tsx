'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Sparkles, Terminal, ArrowRight, Layers, Cpu, Users, ExternalLink } from 'lucide-react';
import styles from './VaultTeaser.module.css';

export default function VaultTeaser() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="100% FREE COMMUNITY & RESOURCES"
            title="The Raydrim Dev Vault"
            subtitle="Curated weekly drops, animated architectural breakdowns, and interactive engineering tools for founders and developers."
          />
        </ScrollReveal>

        <div className={styles.teaserGrid}>
          {/* Left Column: Video Preview Card */}
          <ScrollReveal direction="up" delay={0.1}>
            <GlassCard variant="accent" className={styles.videoPreviewCard}>
              <div className={styles.videoFrame}>
                <video
                  src="/videos/raydrim_vault_showcase.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.videoEl}
                />
                <div className={styles.videoOverlayBadge}>
                  <Sparkles size={14} />
                  <span>ANIMATED SHOWCASE · 720P</span>
                </div>
              </div>
              <div className={styles.videoMeta}>
                <h4 className={styles.videoTitle}>The Free Dev Vault Showcase</h4>
                <p className={styles.videoDesc}>
                  Watch how we structure production React Native applications, type-safe Next.js 16 APIs, and cloud-ready architectures.
                </p>
                <div className={styles.btnRow}>
                  <Button href="/vault" variant="primary" size="sm" icon={<ArrowRight size={16} />}>
                    Enter Dev Vault
                  </Button>
                  <Button
                    href="https://whop.com/raydrim/"
                    variant="secondary"
                    size="sm"
                    icon={<ExternalLink size={16} />}
                  >
                    Join on Whop
                  </Button>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Right Column: 3 Benefit Cards */}
          <div className={styles.perksColumn}>
            <ScrollReveal direction="up" delay={0.2}>
              <GlassCard variant="default" hoverEffect className={styles.perkCard}>
                <div className={styles.perkIconBox}>
                  <Terminal size={22} />
                </div>
                <div className={styles.perkContent}>
                  <div className={styles.perkTop}>
                    <span className={styles.perkBadge}>DROP #01 & #02</span>
                    <h4 className={styles.perkTitle}>Weekly Production Code Drops</h4>
                  </div>
                  <p className={styles.perkDesc}>
                    Copy-paste battle-tested React Native biometric authentication, resilient Stripe webhook handlers, and glassmorphic UI token packs.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <GlassCard variant="default" hoverEffect className={styles.perkCard}>
                <div className={styles.perkIconBox}>
                  <Cpu size={22} />
                </div>
                <div className={styles.perkContent}>
                  <div className={styles.perkTop}>
                    <span className={styles.perkBadge}>INTERACTIVE LAB</span>
                    <h4 className={styles.perkTitle}>App Architecture Generator</h4>
                  </div>
                  <p className={styles.perkDesc}>
                    Select your platform, database, and feature set to generate an instant architecture blueprint, folder tree, and sprint timeline.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <GlassCard variant="default" hoverEffect className={styles.perkCard}>
                <div className={styles.perkIconBox}>
                  <Users size={22} />
                </div>
                <div className={styles.perkContent}>
                  <div className={styles.perkTop}>
                    <span className={styles.perkBadge}>FREE COMMUNITY</span>
                    <h4 className={styles.perkTitle}>Community Code Clinic</h4>
                  </div>
                  <p className={styles.perkDesc}>
                    Submit your web or mobile app in our Whop community for free architectural reviews, speed audits, and direct developer feedback.
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
