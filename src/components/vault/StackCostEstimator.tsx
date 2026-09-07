'use client';

import React, { useState, useId } from 'react';
import { Layers, Database, Zap, Cpu, Server, Check, Copy, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './StackCostEstimator.module.css';

type ArchetypeKey = 'b2b-saas' | 'mobile-app' | 'headless-ecom' | 'ai-agent';

interface Archetype {
  id: ArchetypeKey;
  title: string;
  subtitle: string;
  badge: string;
  baseCost: { compute: number; db: number; bandwidth: number; services: number };
  scaleMultipliers: { [scale: number]: number };
  latency: string;
  stack: {
    frontend: string;
    backend: string;
    database: string;
    cache: string;
    infra: string;
  };
  dockerCompose: string;
  envTemplate: string;
}

const ARCHETYPES: Record<ArchetypeKey, Archetype> = {
  'b2b-saas': {
    id: 'b2b-saas',
    title: 'B2B SaaS Platform',
    subtitle: 'Next.js 16, Neon Postgres & Stripe',
    badge: 'High Conversion',
    baseCost: { compute: 20, db: 19, bandwidth: 5, services: 15 },
    scaleMultipliers: { 1: 1, 10: 2.2, 50: 5.5, 250: 16, 1000: 48 },
    latency: '< 35ms P95 (Edge)',
    stack: {
      frontend: 'Next.js 16 (App Router + Server Actions + React 19)',
      backend: 'TypeScript Server Actions + Zod Validation',
      database: 'Serverless PostgreSQL (Neon / Prisma ORM)',
      cache: 'Upstash Serverless Redis (Rate-limiting & session cache)',
      infra: 'Vercel Enterprise / AWS Amplify CI/CD + Cloudflare DNS',
    },
    dockerCompose: `version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:secret@postgres:5432/saas_prod
      - REDIS_URL=redis://redis:6379
      - NODE_ENV=production
    depends_on:
      - postgres
      - redis
    restart: always

  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: saas_prod
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes
    volumes:
      - redisdata:/data
    ports:
      - "6379:6379"

volumes:
  pgdata:
  redisdata:`,
    envTemplate: `# B2B SaaS Environment Blueprint
NEXT_PUBLIC_APP_URL="https://app.yourdomain.com"
DATABASE_URL="postgresql://postgres:secret@localhost:5432/saas_prod"
UPSTASH_REDIS_REST_URL="https://your-redis-instance.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your_upstash_secret_token"
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
RESEND_API_KEY="re_..."`,
  },
  'mobile-app': {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App',
    subtitle: 'React Native, Expo & Supabase',
    badge: 'Sub-Second Sync',
    baseCost: { compute: 25, db: 25, bandwidth: 8, services: 20 },
    scaleMultipliers: { 1: 1, 10: 2.8, 50: 6.8, 250: 22, 1000: 65 },
    latency: '< 45ms P95 (Global CDN)',
    stack: {
      frontend: 'React Native (Expo SDK 52 + New Architecture Fabric)',
      backend: 'Supabase Edge Functions (Deno Runtime)',
      database: 'PostgreSQL with Row Level Security (RLS)',
      cache: 'WatermelonDB (Offline SQLite + Sync Protocol)',
      infra: 'EAS Build & Submit + Apple App Store & Google Play',
    },
    dockerCompose: `version: '3.8'
services:
  supabase-db:
    image: supabase/postgres:15.1.0.147
    environment:
      POSTGRES_PASSWORD: secret
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

  realtime:
    image: supabase/realtime:v2.28.32
    ports:
      - "4000:4000"
    environment:
      DB_HOST: supabase-db
      DB_PORT: 5432
      DB_NAME: postgres
      DB_USER: postgres
      DB_PASSWORD: secret

volumes:
  db_data:`,
    envTemplate: `# Mobile App & Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
EXPO_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsIn..."
EXPO_PUBLIC_REVENUECAT_APPLE_KEY="appl_..."
EXPO_PUBLIC_REVENUECAT_GOOGLE_KEY="goog_..."`,
  },
  'headless-ecom': {
    id: 'headless-ecom',
    title: 'Headless E-Commerce',
    subtitle: 'Shopify Storefront API & 3D WebGL',
    badge: '100 Lighthouse',
    baseCost: { compute: 20, db: 0, bandwidth: 15, services: 39 },
    scaleMultipliers: { 1: 1, 10: 2.1, 50: 4.8, 250: 14, 1000: 42 },
    latency: '< 20ms P95 (Edge HTML)',
    stack: {
      frontend: 'Next.js 16 + React Server Components + Three.js 3D',
      backend: 'Shopify Plus Storefront GraphQL API',
      database: 'Shopify Native Cart & Checkout Engine',
      cache: 'Cloudflare Workers Edge Cache (Stale-While-Revalidate)',
      infra: 'Cloudflare R2 Object Storage (3D Models & 4K Media)',
    },
    dockerCompose: `version: '3.8'
services:
  storefront:
    build: .
    ports:
      - "3000:3000"
    environment:
      - SHOPIFY_STORE_DOMAIN=brand.myshopify.com
      - SHOPIFY_STOREFRONT_ACCESS_TOKEN=token_here
      - NODE_ENV=production
    restart: always`,
    envTemplate: `# Headless Shopify Configuration
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN="brand.myshopify.com"
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN="your_public_storefront_token"
SHOPIFY_ADMIN_API_KEY="shpat_..."
CLOUDFLARE_R2_BUCKET="cdn-3d-assets"`,
  },
  'ai-agent': {
    id: 'ai-agent',
    title: 'AI Agent Platform',
    subtitle: 'LangChain, pgvector & Streaming LLM',
    badge: 'Autonomous',
    baseCost: { compute: 45, db: 35, bandwidth: 20, services: 60 },
    scaleMultipliers: { 1: 1, 10: 4.5, 50: 14, 250: 55, 1000: 180 },
    latency: '< 180ms TTFT (Time to First Token)',
    stack: {
      frontend: 'Next.js 16 (Vercel AI SDK + Real-Time Canvas)',
      backend: 'FastAPI / Python LangGraph + Node.js Edge Router',
      database: 'PostgreSQL with pgvector (1536-dim embeddings)',
      cache: 'Redis Vector Memory & Long-Term Buffer',
      infra: 'Self-Hosted Ollama + Anthropic / OpenAI Fallback',
    },
    dockerCompose: `version: '3.8'
services:
  agent-runner:
    build: ./agent
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://postgres:secret@pgvector:5432/agents
      - REDIS_URL=redis://redis:6379
    depends_on:
      - pgvector
      - redis

  pgvector:
    image: pgvector/pgvector:pg16
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: agents
    volumes:
      - vectordata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  vectordata:`,
    envTemplate: `# Autonomous AI Swarm Architecture
ANTHROPIC_API_KEY="sk-ant-api03-..."
OPENAI_API_KEY="sk-proj-..."
OLLAMA_BASE_URL="http://localhost:11434"
DATABASE_URL="postgresql://postgres:secret@localhost:5432/agents"
PINECONE_API_KEY="your_pinecone_key"`,
  },
};

const SCALES = [1, 10, 50, 250, 1000];

export default function StackCostEstimator() {
  const [selectedKey, setSelectedKey] = useState<ArchetypeKey>('b2b-saas');
  const [scaleIndex, setScaleIndex] = useState<number>(1); // default 10k MAU
  const [activeTab, setActiveTab] = useState<'stack' | 'docker' | 'env'>('stack');
  const [copied, setCopied] = useState<boolean>(false);
  const scaleInputId = useId();

  const currentArchetype = ARCHETYPES[selectedKey];
  const currentScale = SCALES[scaleIndex];
  const mult = currentArchetype.scaleMultipliers[currentScale];

  const computeCost = Math.round(currentArchetype.baseCost.compute * mult);
  const dbCost = Math.round(currentArchetype.baseCost.db * mult);
  const bwCost = Math.round(currentArchetype.baseCost.bandwidth * mult);
  const svcCost = Math.round(currentArchetype.baseCost.services * mult);
  const totalCost = computeCost + dbCost + bwCost + svcCost;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.estimatorCard}>
      <div className={styles.topBar}>
        <div className={styles.badge}>
          <span className={styles.liveIndicator} />
          Production Stack & Cloud Estimator
        </div>
        <div className={styles.latencyTag}>
          <Zap size={15} />
          Projected P95: {currentArchetype.latency}
        </div>
      </div>

      {/* Archetype Selector */}
      <div className={styles.archetypeGrid}>
        {(Object.keys(ARCHETYPES) as ArchetypeKey[]).map((key) => {
          const arch = ARCHETYPES[key];
          const isActive = selectedKey === key;
          return (
            <button
              key={key}
              type="button"
              className={`${styles.archetypeBtn} ${isActive ? styles.archetypeBtnActive : ''}`}
              onClick={() => setSelectedKey(key)}
            >
              <div className={styles.archetypeTitle}>
                {key === 'b2b-saas' && <Layers size={16} />}
                {key === 'mobile-app' && <Zap size={16} />}
                {key === 'headless-ecom' && <Database size={16} />}
                {key === 'ai-agent' && <Cpu size={16} />}
                {arch.title}
              </div>
              <div className={styles.archetypeSubtitle}>{arch.subtitle}</div>
            </button>
          );
        })}
      </div>

      {/* Scale Slider */}
      <div className={styles.sliderSection}>
        <div className={styles.sliderHeader}>
          <label htmlFor={scaleInputId} className={styles.sliderTitle}>Target Scale (Monthly Active Users)</label>
          <span className={styles.scaleHighlight}>
            {currentScale === 1000 ? '1,000,000+' : `${currentScale},000`} MAU
          </span>
        </div>
        <input
          id={scaleInputId}
          type="range"
          min="0"
          max="4"
          step="1"
          value={scaleIndex}
          onChange={(e) => setScaleIndex(parseInt(e.target.value, 10))}
          className={styles.rangeInput}
        />
        <div className={styles.sliderLabels}>
          <span>1k (MVP)</span>
          <span>10k (Traction)</span>
          <span>50k (Growth)</span>
          <span>250k (Scale)</span>
          <span>1M+ (Enterprise)</span>
        </div>
      </div>

      {/* Results Matrix */}
      <div className={styles.resultsGrid}>
        {/* Cost Panel */}
        <div className={styles.costPanel}>
          <div className={styles.costHeader}>
            <div className={styles.costSub}>Estimated Cloud Infrastructure</div>
            <div className={styles.costTotal}>
              ${totalCost.toLocaleString()}
              <span className={styles.costPerMo}>/ month</span>
            </div>
          </div>

          <div className={styles.breakdownList}>
            <div className={styles.breakdownItem}>
              <span>Compute & Edge Containers</span>
              <span className={styles.breakdownVal}>${computeCost}/mo</span>
            </div>
            <div className={styles.breakdownItem}>
              <span>Database & Vector Storage</span>
              <span className={styles.breakdownVal}>${dbCost}/mo</span>
            </div>
            <div className={styles.breakdownItem}>
              <span>Bandwidth & Global CDN</span>
              <span className={styles.breakdownVal}>${bwCost}/mo</span>
            </div>
            <div className={styles.breakdownItem}>
              <span>Auxiliary Services (Auth, Email, AI)</span>
              <span className={styles.breakdownVal}>${svcCost}/mo</span>
            </div>
          </div>

          <div className={styles.latencyTag}>
            <ShieldCheck size={16} />
            Zero-Vendor-Lockin Architecture
          </div>
        </div>

        {/* Stack & Export Panel */}
        <div className={styles.stackPanel}>
          <div className={styles.panelTabs}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'stack' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('stack')}
            >
              Recommended Stack
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'docker' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('docker')}
            >
              docker-compose.yml
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'env' ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab('env')}
            >
              .env.production
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'stack' && (
              <div className={styles.specRow}>
                <div className={styles.specItem}>
                  <Server size={18} className={styles.specIcon} />
                  <div>
                    <strong>Frontend:</strong> {currentArchetype.stack.frontend}
                  </div>
                </div>
                <div className={styles.specItem}>
                  <Cpu size={18} className={styles.specIcon} />
                  <div>
                    <strong>Backend:</strong> {currentArchetype.stack.backend}
                  </div>
                </div>
                <div className={styles.specItem}>
                  <Database size={18} className={styles.specIcon} />
                  <div>
                    <strong>Database:</strong> {currentArchetype.stack.database}
                  </div>
                </div>
                <div className={styles.specItem}>
                  <Zap size={18} className={styles.specIcon} />
                  <div>
                    <strong>Cache & Memory:</strong> {currentArchetype.stack.cache}
                  </div>
                </div>
                <div className={styles.specItem}>
                  <Layers size={18} className={styles.specIcon} />
                  <div>
                    <strong>Infrastructure:</strong> {currentArchetype.stack.infra}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'docker' && (
              <>
                <div className={styles.codeBox}>{currentArchetype.dockerCompose}</div>
                <div className={styles.copyBar}>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={copied ? <Check size={14} /> : <Copy size={14} />}
                    onClick={() => handleCopy(currentArchetype.dockerCompose)}
                  >
                    {copied ? 'Copied Compose!' : 'Copy docker-compose.yml'}
                  </Button>
                </div>
              </>
            )}

            {activeTab === 'env' && (
              <>
                <div className={styles.codeBox}>{currentArchetype.envTemplate}</div>
                <div className={styles.copyBar}>
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={copied ? <Check size={14} /> : <Copy size={14} />}
                    onClick={() => handleCopy(currentArchetype.envTemplate)}
                  >
                    {copied ? 'Copied .env!' : 'Copy .env Template'}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className={styles.actionFooter}>
        <div className={styles.footerNote}>
          Need this architecture built, audited, or deployed with guaranteed SLAs?
        </div>
        <div className={styles.footerButtons}>
          <Button
            href="https://whop.com/raydrim/"
            variant="secondary"
            size="sm"
            icon={<ExternalLink size={15} />}
          >
            Get Free Boilerplates on Whop
          </Button>
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            icon={<ArrowRight size={15} />}
          >
            Hire Raydrim to Build This
          </Button>
        </div>
      </div>
    </div>
  );
}
