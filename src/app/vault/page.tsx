import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import VideoTheater from '@/components/vault/VideoTheater';
import WeeklyDrops from '@/components/vault/WeeklyDrops';
import ArchitectureGenerator from '@/components/vault/ArchitectureGenerator';
import StackCostEstimator from '@/components/vault/StackCostEstimator';
import CoreWebVitalsAuditor from '@/components/vault/CoreWebVitalsAuditor';
import SecurityHeadersAuditor from '@/components/vault/SecurityHeadersAuditor';
import RaydrimUiPlayground from '@/components/vault/RaydrimUiPlayground';
import CodeClinicWidget from '@/components/vault/CodeClinicWidget';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Users, MessageSquare, Terminal, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'The Raydrim Dev Vault | Free Production Code & Architecture Drops',
  description: '100% free production-ready code blocks, launch checklists, weekly drops, interactive architecture generator, and video showcase for founders and engineers.',
  alternates: {
    canonical: 'https://raydrim.com/vault',
  },
};

export default function VaultPage() {
  return (
    <main className={styles.vaultPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container size="lg">
          <div className={styles.heroContent}>
            <ScrollReveal direction="up" delay={0.1}>
              <div className={styles.badgeWrapper}>
                <span className="editorial-badge">
                  <span className={styles.pulsingDot}>•</span>
                  100% Free · Updated Weekly · Production Grade
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className={styles.title}>
                The Raydrim <span className={styles.titleGradient}>Dev Vault</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className={styles.subtitle}>
                Battle-tested React Native hooks, Next.js 16 boilerplates, store launch compliance checklists, and system architecture blueprints. Free to join, free to use, and updated on a regular schedule.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className={styles.ctaGroup}>
                <Button
                  href="https://whop.com/raydrim/"
                  variant="primary"
                  size="lg"
                  icon={<ExternalLink size={18} />}
                >
                  Join Free on Whop
                </Button>
                <Button
                  href="#drops"
                  variant="secondary"
                  size="lg"
                  icon={<Terminal size={18} />}
                >
                  Browse Weekly Drops
                </Button>
              </div>
            </ScrollReveal>

            {/* Quick Metrics */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className={styles.statsRow}>
                <div className={styles.statPill}>
                  <span className={styles.statVal}>$0</span>
                  <span className={styles.statLab}>Forever Free Access</span>
                </div>
                <div className={styles.statDivider}>/</div>
                <div className={styles.statPill}>
                  <span className={styles.statVal}>Weekly</span>
                  <span className={styles.statLab}>Curated Releases</span>
                </div>
                <div className={styles.statDivider}>/</div>
                <div className={styles.statPill}>
                  <span className={styles.statVal}>100%</span>
                  <span className={styles.statLab}>Full Code Ownership</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Video Showcase Theater */}
      <section className={styles.sectionAlt}>
        <Container size="lg">
          <SectionHeading
            badge="ANIMATED SHOWCASE"
            title="Studio Engineering Reel"
            subtitle="Explore our visual breakdowns of mobile architectures, zero-tech-debt systems, and sub-second velocity."
          />
          <VideoTheater />
        </Container>
      </section>

      {/* Weekly Drops Section */}
      <section id="drops" className={styles.sectionStandard}>
        <Container size="lg">
          <SectionHeading
            badge="REGULAR DROPS"
            title="Production Code & Launch Kits"
            subtitle="Curated, ready-to-deploy modules you can copy and paste directly into your projects."
          />
          <WeeklyDrops />
        </Container>
      </section>

      {/* Interactive Architecture Generator */}
      <section className={styles.sectionAlt}>
        <Container size="lg">
          <SectionHeading
            badge="INTERACTIVE LAB"
            title="App Architecture Spec Generator"
            subtitle="Design your tech stack in seconds. Get instant folder structures, data flow specs, and sprint estimates."
          />
          <ArchitectureGenerator />
        </Container>
      </section>

      {/* Cloud Infrastructure & Cost Estimator */}
      <section className={styles.sectionStandard}>
        <Container size="lg">
          <SectionHeading
            badge="CLOUD COST ENGINE"
            title="Stack & Cloud Infrastructure Estimator"
            subtitle="Model your monthly hosting and database bills before shipping. Export ready-to-run docker-compose.yml files in one click."
          />
          <StackCostEstimator />
        </Container>
      </section>

      {/* Core Web Vitals & Velocity Lab */}
      <section className={styles.sectionAlt}>
        <Container size="lg">
          <SectionHeading
            badge="PERFORMANCE PROTOCOL"
            title="Core Web Vitals & Velocity Lab"
            subtitle="Real-world code recipes to eliminate layout shifts, slash LCP times, and achieve guaranteed 100/100 Lighthouse scores."
          />
          <CoreWebVitalsAuditor />
        </Container>
      </section>

      {/* Production Security & CSP Auditor */}
      <section className={styles.sectionStandard}>
        <Container size="lg">
          <SectionHeading
            badge="EDGE ZERO-TRUST"
            title="Production Security & CSP Auditor"
            subtitle="Hardened Content-Security-Policy directives, HSTS preload, and permissions headers ready to copy directly into your Next.js 16 app."
          />
          <SecurityHeadersAuditor />
        </Container>
      </section>

      {/* Cybernetic Glass UI Sandbox */}
      <section className={styles.sectionAlt}>
        <Container size="lg">
          <SectionHeading
            badge="COMPONENT LAB"
            title="Cybernetic Glass UI Sandbox"
            subtitle="Interactive live preview of our signature dark glassmorphic components, telemetry badges, and micro-interactions."
          />
          <RaydrimUiPlayground />
        </Container>
      </section>

      {/* 24-Hour Code Clinic Teardown Widget */}
      <section className={styles.sectionStandard}>
        <Container size="lg">
          <SectionHeading
            badge="FREE AUDIT"
            title="24-Hour Code Clinic & Architecture Review"
            subtitle="Have founder Muhammad Taki Ahmed teardown your stack, identify hidden cloud costs, and optimize your Core Web Vitals."
          />
          <CodeClinicWidget />
        </Container>
      </section>

      {/* Community Banner */}
      <section className={styles.communitySection}>
        <Container size="lg">
          <GlassCard variant="accent" className={styles.communityCard}>
            <div className={styles.communityContent}>
              <div className={styles.communityIconBox}>
                <Users size={32} />
              </div>
              <div className={styles.communityText}>
                <h2 className={styles.communityTitle}>
                  Join the Raydrim Community on Whop
                </h2>
                <p className={styles.communityDesc}>
                  Get immediate notification of every weekly drop, submit your React/Next.js/React Native app for a free architecture teardown in our Code Clinic, and network with indie hackers and founders.
                </p>
              </div>
              <div className={styles.communityAction}>
                <Button
                  href="https://whop.com/raydrim/"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                >
                  Join Free Pass
                </Button>
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>
    </main>
  );
}
