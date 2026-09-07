'use client';

import React, { useState, useMemo } from 'react';
import { Layers, Check, Copy, ArrowRight, Smartphone, Globe, ShoppingCart, Bot, Database, Server, Key, CreditCard, Bell, HardDrive, Cpu, GitBranch } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import styles from './ArchitectureGenerator.module.css';

interface PlatformOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  recommendedStack: string;
}

interface DatabaseOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface FeatureOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  impactWeeks: number;
}

const PLATFORMS: PlatformOption[] = [
  {
    id: 'mobile',
    name: 'Cross-Platform Mobile',
    icon: <Smartphone size={20} />,
    recommendedStack: 'React Native 0.74+ · Expo SDK 51 · TypeScript · Reanimated 3'
  },
  {
    id: 'web',
    name: 'Full-Stack Web App',
    icon: <Globe size={20} />,
    recommendedStack: 'Next.js 16 App Router · React Server Components · Tailwind CSS'
  },
  {
    id: 'ecommerce',
    name: 'Headless E-Commerce',
    icon: <ShoppingCart size={20} />,
    recommendedStack: 'Next.js 16 · Shopify Storefront GraphQL API · Stripe Elements'
  },
  {
    id: 'ai-saas',
    name: 'AI-Powered SaaS',
    icon: <Bot size={20} />,
    recommendedStack: 'Next.js 16 · LangChain / Vercel AI SDK · pgvector · Tailwind'
  }
];

const DATABASES: DatabaseOption[] = [
  {
    id: 'postgres',
    name: 'PostgreSQL + Prisma',
    icon: <Database size={18} />,
    description: 'Type-safe relational database with connection pooling and automated schema migrations.'
  },
  {
    id: 'supabase',
    name: 'Supabase BaaS',
    icon: <Server size={18} />,
    description: 'Managed PostgreSQL with instant Row Level Security (RLS) and real-time websockets.'
  },
  {
    id: 'redis',
    name: 'Serverless Upstash + Edge',
    icon: <HardDrive size={18} />,
    description: 'Sub-10ms in-memory cache and atomic rate limiters across global edge regions.'
  }
];

const FEATURES: FeatureOption[] = [
  { id: 'auth', name: 'Biometric / OAuth & Sessions', icon: <Key size={16} />, impactWeeks: 0.5 },
  { id: 'payments', name: 'Stripe Subscriptions & Webhooks', icon: <CreditCard size={16} />, impactWeeks: 0.5 },
  { id: 'push', name: 'Push Notifications & Deep Linking', icon: <Bell size={16} />, impactWeeks: 0.5 },
  { id: 'offline', name: 'Offline SQLite & WatermelonDB Sync', icon: <HardDrive size={16} />, impactWeeks: 1.0 },
  { id: 'ai', name: 'AI Workflows & Streaming UI', icon: <Cpu size={16} />, impactWeeks: 1.0 },
  { id: 'cicd', name: 'Automated Fastlane & GitHub CI/CD', icon: <GitBranch size={16} />, impactWeeks: 0.5 }
];

export default function ArchitectureGenerator() {
  const [selectedPlatform, setSelectedPlatform] = useState(PLATFORMS[0].id);
  const [selectedDb, setSelectedDb] = useState(DATABASES[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'payments', 'cicd']);
  const [copied, setCopied] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const platformObj = PLATFORMS.find(p => p.id === selectedPlatform) || PLATFORMS[0];
  const dbObj = DATABASES.find(d => d.id === selectedDb) || DATABASES[0];

  const estimatedWeeks = useMemo(() => {
    let base = selectedPlatform === 'mobile' ? 2.5 : 2.0;
    selectedFeatures.forEach(fId => {
      const feat = FEATURES.find(f => f.id === fId);
      if (feat) base += feat.impactWeeks;
    });
    return Math.round(base * 10) / 10;
  }, [selectedPlatform, selectedFeatures]);

  const generatedSpec = useMemo(() => {
    const isMobile = selectedPlatform === 'mobile';
    const isEcommerce = selectedPlatform === 'ecommerce';
    
    const mobileTree = `src/
├── app/                  # Expo Router / React Navigation screens
│   ├── (auth)/          # Biometric & session login flow
│   ├── (tabs)/          # Native tab bar navigation
│   └── [id].tsx         # Dynamic screen parameters
├── components/          # Design system & Reanimated UI primitives
├── hooks/               # Custom hooks (useBiometrics, useOfflineSync)
├── lib/
│   ├── storage/         # SecureStore & SQLite persistent layer
│   └── api/             # Typed API client with auto-retry
└── types/               # Strict TypeScript interfaces`;

    const webTree = `src/
├── app/                  # Next.js 16 App Router (RSC + Server Actions)
│   ├── api/             # Edge & Node route handlers (webhooks)
│   ├── (marketing)/     # Sub-second SSG marketing routes
│   └── (dashboard)/     # Authenticated client views
├── components/          # Glassmorphic UI & Framer Motion wrappers
├── server/
│   ├── actions/         # Type-safe mutations
│   └── db/              # Prisma / Supabase client & schemas
└── types/               # Shared domain models`;

    const codeBlock = '```\\n' + (isMobile ? mobileTree : webTree) + '\\n```';

    return `# Raydrim System Architecture Blueprint
Target Platform: ${platformObj.name}
Core Framework: ${platformObj.recommendedStack}
Database / State: ${dbObj.name}
Active Capabilities: ${selectedFeatures.map(f => FEATURES.find(x => x.id === f)?.name).join(', ')}
Estimated Delivery Window: ${estimatedWeeks} Weeks

## 1. Directory & Codebase Architecture
${codeBlock}

## 2. Data Flow & Security Guarantee
- Strict type-safety end-to-end with TypeScript 5.5+
- Zero plaintext credential storage; hardware keychain on mobile, httpOnly cookies on web
- Idempotent API handlers for financial transactions & webhooks
- 100% full source code ownership delivered to your private GitHub repository`;
  }, [platformObj, dbObj, selectedPlatform, selectedFeatures, estimatedWeeks]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedSpec);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.generatorSection}>
      <div className={styles.configGrid}>
        {/* Left Column: Interactive Controls */}
        <div className={styles.controlsColumn}>
          {/* Step 1: Platform */}
          <div className={styles.stepGroup}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNum}>1</span>
              <h4 className={styles.stepTitle}>Select Project Architecture</h4>
            </div>
            <div className={styles.platformGrid}>
              {PLATFORMS.map((p) => {
                const isSel = p.id === selectedPlatform;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPlatform(p.id)}
                    className={`${styles.optionBtn} ${isSel ? styles.optionActive : ''}`}
                    type="button"
                  >
                    <div className={styles.optionTop}>
                      <span className={styles.optionIcon}>{p.icon}</span>
                      {isSel && <Check size={16} className={styles.selCheck} />}
                    </div>
                    <span className={styles.optionName}>{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Database / Backend */}
          <div className={styles.stepGroup}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNum}>2</span>
              <h4 className={styles.stepTitle}>Select Data Layer</h4>
            </div>
            <div className={styles.dbGrid}>
              {DATABASES.map((db) => {
                const isSel = db.id === selectedDb;
                return (
                  <button
                    key={db.id}
                    onClick={() => setSelectedDb(db.id)}
                    className={`${styles.dbBtn} ${isSel ? styles.optionActive : ''}`}
                    type="button"
                  >
                    <div className={styles.dbHeader}>
                      <span className={styles.dbIcon}>{db.icon}</span>
                      <span className={styles.dbName}>{db.name}</span>
                    </div>
                    <p className={styles.dbDesc}>{db.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Features */}
          <div className={styles.stepGroup}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNum}>3</span>
              <h4 className={styles.stepTitle}>Include Production Capabilities</h4>
            </div>
            <div className={styles.featuresGrid}>
              {FEATURES.map((feat) => {
                const isSel = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`${styles.featPill} ${isSel ? styles.featActive : ''}`}
                    type="button"
                  >
                    <span className={styles.featIcon}>{feat.icon}</span>
                    <span className={styles.featName}>{feat.name}</span>
                    {isSel && <Check size={14} className={styles.featCheck} />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Output Blueprint */}
        <div className={styles.blueprintColumn}>
          <GlassCard variant="accent" className={styles.blueprintCard}>
            <div className={styles.blueprintHeader}>
              <div className={styles.blueprintTitleArea}>
                <span className={styles.liveBadge}>LIVE SYSTEM BLUEPRINT</span>
                <h3 className={styles.bpHeading}>{platformObj.name}</h3>
              </div>

              <div className={styles.timelineBox}>
                <span className={styles.timeLabel}>ESTIMATED SPRINT</span>
                <span className={styles.timeVal}>~{estimatedWeeks} Weeks</span>
              </div>
            </div>

            <div className={styles.specDisplay}>
              <pre className={styles.specPre}>
                <code>{generatedSpec}</code>
              </pre>
            </div>

            <div className={styles.blueprintActions}>
              <button
                onClick={handleCopy}
                className={styles.copySpecBtn}
                type="button"
              >
                {copied ? (
                  <>
                    <Check size={16} className={styles.checkIcon} />
                    <span>Specification Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Architecture Spec</span>
                  </>
                )}
              </button>

              <Button
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowRight size={16} />}
              >
                Request This Build
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
