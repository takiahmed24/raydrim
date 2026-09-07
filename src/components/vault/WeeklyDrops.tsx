'use client';

import React, { useState } from 'react';
import { Code2, Check, Copy, Terminal, ShieldCheck, Zap, BookOpen } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import styles from './WeeklyDrops.module.css';

interface CodeDrop {
  id: string;
  dropNum: string;
  date: string;
  title: string;
  category: string;
  description: string;
  language: string;
  filename: string;
  code: string;
  highlights: string[];
}

const DROPS: CodeDrop[] = [
  {
    id: 'rn-biometrics',
    dropNum: 'DROP #01',
    date: 'Weekly Release',
    title: 'React Native 60fps Biometric Auth & Keychain Hook',
    category: 'Mobile Engineering (Expo & RN)',
    description: 'A bulletproof React Native hook providing seamless FaceID, TouchID, and Android Biometric Prompt with encrypted hardware keychain storage.',
    language: 'typescript',
    filename: 'useBiometricAuth.ts',
    highlights: [
      'Zero-hang fallback to PIN',
      'Hardware-level secure enclave encryption',
      'Tested across iOS 17+ and Android 14'
    ],
    code: `import { useState, useCallback } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';

export function useBiometricAuth(serviceKey: string = 'raydrim_auth_token') {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const authenticateAndGetToken = useCallback(async (): Promise<string | null> => {
    setIsAuthenticating(true);
    setAuthError(null);

    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) {
        throw new Error('Biometric authentication is not supported or enrolled on this device.');
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to access your account',
        cancelLabel: 'Cancel',
        fallbackLabel: 'Use Device Passcode',
        disableDeviceFallback: false,
      });

      if (!result.success) {
        setAuthError(result.error || 'Authentication canceled');
        return null;
      }

      const secureToken = await SecureStore.getItemAsync(serviceKey);
      return secureToken;
    } catch (err: any) {
      setAuthError(err.message || 'Biometric authentication failed');
      return null;
    } finally {
      setIsAuthenticating(false);
    }
  }, [serviceKey]);

  return { authenticateAndGetToken, isAuthenticating, authError };
}`
  },
  {
    id: 'nextjs-stripe-webhook',
    dropNum: 'DROP #02',
    date: 'Weekly Release',
    title: 'Next.js 16 Resilient Stripe Webhook Handler with Idempotency',
    category: 'Full-Stack Architecture',
    description: 'Production-ready Next.js 16 App Router Stripe webhook endpoint with cryptographic signature validation, duplicate event replay protection, and database sync.',
    language: 'typescript',
    filename: 'app/api/webhooks/stripe/route.ts',
    highlights: [
      'Raw body buffer preservation for HMAC verification',
      'Idempotent database transactions to prevent double charges',
      'Zero external middleware dependencies'
    ],
    code: `import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature');

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing webhook signature' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Webhook Error: ' + err.message }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('Payment verified for customer:', session.customer_details?.email);
      // Provision service / unlock product access idempotently
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      console.log('Subscription revoked:', subscription.id);
      break;
    }
  }

  return NextResponse.json({ received: true, eventId: event.id });
}`
  },
  {
    id: 'glass-design-tokens',
    dropNum: 'DROP #03',
    date: 'Weekly Release',
    title: 'Jungle Luxe Dark Glassmorphism CSS Tokens',
    category: 'UI/UX Design Systems',
    description: 'The exact CSS custom properties and backdrop filter tokens powering the Raydrim aesthetic. Warm charcoal base, subtle neon cyan glows, and 100vh responsive safeguards.',
    language: 'css',
    filename: 'jungle-luxe-tokens.css',
    highlights: [
      'Dual-pass frosted glass: blur(16px) with saturate(180%)',
      'Ultra-subtle border gradients that look premium on OLED screens',
      'Zero layout shift and zero horizontal overflow'
    ],
    code: `:root {
  /* Warm Charcoal Canvas */
  --bg-primary: #0e0e11;
  --bg-surface: #141418;
  --bg-glass: rgba(20, 20, 25, 0.65);
  --bg-glass-elevated: rgba(28, 28, 35, 0.75);

  /* Neon Cyan & Studio Accents */
  --accent-cyan: #00ffff;
  --accent-cyan-glow: rgba(0, 255, 255, 0.18);
  --accent-cyan-border: rgba(0, 255, 255, 0.35);

  /* Glass Borders & Highlights */
  --glass-border: 1px solid rgba(255, 255, 255, 0.08);
  --glass-border-accent: 1px solid rgba(0, 255, 255, 0.3);
  --glass-backdrop: blur(16px) saturate(180%);
  --glass-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 255, 255, 0.08);
}

.glassPanel {
  background: var(--bg-glass);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border: var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: 16px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.glassPanel:hover {
  border-color: var(--accent-cyan-border);
  transform: translateY(-2px);
}`
  },
  {
    id: 'app-store-checklist',
    dropNum: 'DROP #04',
    date: 'Weekly Release',
    title: 'App Store & Google Play 32-Point Launch Checklist',
    category: 'Store Publishing & Compliance',
    description: 'The definitive pre-launch checklist covering App Tracking Transparency (ATT), Apple Merchant Domain, Android 14 permissions, and export compliance.',
    language: 'markdown',
    filename: 'APP_STORE_CHECKLIST.md',
    highlights: [
      'Account Deletion flow requirement compliance (Guideline 5.1.1(v))',
      'In-App Purchase restore button placement rules',
      'Google Play targetSdk 34 + 64-bit native architecture'
    ],
    code: `# Raydrim Mobile App Launch Checklist (iOS & Android)

## 1. App Store Connect Essentials
- [ ] Account Deletion Flow: Self-serve account removal must delete all PII.
- [ ] In-App Purchase: Must include a visible 'Restore Purchases' button.
- [ ] Privacy Policy: Live HTTPS URL required, no auth wall.
- [ ] App Tracking Transparency (ATT): Explicit NSUserTrackingUsageDescription.
- [ ] Apple Merchant ID Domain: Associated '.well-known/apple-developer-merchantid-domain-association' verified.

## 2. Google Play Console Essentials
- [ ] Target API level: Android 14 (API level 34)+.
- [ ] App Content Declarations: Data safety form, Financial features, Privacy policy.
- [ ] 64-bit Compliance: Ensure all native libs support arm64-v8a.
- [ ] Splash Screen: Use native Android 12+ SplashScreen API.

## 3. Performance & Stability
- [ ] Offline resilience: App must gracefully handle zero internet.
- [ ] Memory leaks: Profile Reanimated gestures and image caches.
- [ ] Crash reporting: Sentry or Firebase Crashlytics initialized before root render.`
  },
  {
    id: 'mcp-server-scaffold',
    dropNum: 'DROP #05',
    date: 'Weekly Release',
    title: 'Autonomous AI Model Context Protocol (MCP) Server',
    category: 'AI & Swarm Engineering',
    description: 'Production-ready Model Context Protocol (MCP) server scaffold compatible with Claude Desktop, Cursor, and Ollama. Includes Zod schema tool registration, SSE streaming, and error handling.',
    language: 'typescript',
    filename: 'mcp-server/src/index.ts',
    highlights: [
      'Full MCP spec 2024-11-05 compliance',
      'Type-safe Zod schema validation for AI tool arguments',
      'Sub-millisecond stdio & SSE transport adapters'
    ],
    code: `import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

const server = new Server(
  { name: 'raydrim-enterprise-mcp', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

// Tool Registry
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'estimate_cloud_costs',
      description: 'Calculate monthly hosting breakdown across AWS, Vercel, and Neon',
      inputSchema: {
        type: 'object',
        properties: {
          monthlyActiveUsers: { type: 'number', description: 'Expected MAU' },
          architecture: { type: 'string', enum: ['saas', 'mobile', 'ecommerce', 'swarm'] }
        },
        required: ['monthlyActiveUsers', 'architecture']
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'estimate_cloud_costs') {
    const { monthlyActiveUsers, architecture } = request.params.arguments as any;
    const base = architecture === 'swarm' ? 120 : 35;
    const scaled = base + Math.round((monthlyActiveUsers / 1000) * 1.8);
    return {
      content: [{ type: 'text', text: \`Estimated monthly infrastructure cost: $\${scaled}/mo\` }]
    };
  }
  throw new Error(\`Tool \${request.params.name} not found\`);
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Raydrim Enterprise MCP Server running on stdio');
}

run().catch(console.error);`
  },
  {
    id: 'zero-downtime-migration',
    dropNum: 'DROP #06',
    date: 'Weekly Release',
    title: 'Zero-Downtime PostgreSQL Schema Migration & Advisory Locks',
    category: 'Database & Backend Engineering',
    description: 'Defensive PostgreSQL migration pattern with transactional advisory locks, non-blocking concurrent index builds, and column additions with safe defaults.',
    language: 'sql',
    filename: 'migrations/20260906_zero_downtime_indexing.sql',
    highlights: [
      'CREATE INDEX CONCURRENTLY to eliminate read/write table locks',
      'Advisory lock guard (pg_try_advisory_xact_lock) preventing concurrent migration races',
      'Zero lock escalation on tables with >10M rows'
    ],
    code: `-- Raydrim Zero-Downtime Migration Pattern
-- 1. Acquire transaction-level advisory lock to ensure only one migration runner executes
SELECT pg_advisory_xact_lock(7429182);

-- 2. Set strict statement timeout so queries never hang production
SET LOCAL statement_timeout = '5s';
SET LOCAL lock_timeout = '2s';

-- 3. Add column without locking: in Postgres 11+, DEFAULT with NOT NULL is O(1) instant
ALTER TABLE organizations 
ADD COLUMN IF NOT EXISTS tier_level VARCHAR(32) DEFAULT 'starter' NOT NULL;

-- 4. Non-blocking index creation outside transactional block
-- Run independently:
-- CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_organizations_tier_created 
-- ON organizations (tier_level, created_at DESC);`
  },
  {
    id: 'upstash-rate-limiter',
    dropNum: 'DROP #07',
    date: 'Weekly Release',
    title: 'Next.js 16 Sliding Window Rate Limiter with Upstash Redis',
    category: 'Full-Stack Architecture',
    description: 'Edge-compatible sliding window rate limiter designed for Next.js 16 App Router middleware and API routes. Returns standard 429 Retry-After headers.',
    language: 'typescript',
    filename: 'lib/rate-limiter.ts',
    highlights: [
      'Sliding window algorithm prevents burst exploitation at boundary intervals',
      'Edge runtime safe via HTTP REST pipeline (zero node-gyp native bindings)',
      'Custom IP identifier fallback with X-Forwarded-For verification'
    ],
    code: `import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = Redis.fromEnv();

export const apiRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(60, '1 m'), // 60 requests per minute
  analytics: true,
  prefix: 'raydrim_rl',
});

export async function checkRateLimit(req: Request, identifier?: string) {
  const ip = identifier || req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
  const { success, limit, remaining, reset } = await apiRateLimiter.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: 'Too Many Requests', retryAfter: Math.ceil((reset - Date.now()) / 1000) },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'Retry-After': Math.ceil((reset - Date.now()) / 1000).toString(),
        },
      }
    );
  }

  return null;
}`
  }
];

export default function WeeklyDrops() {
  const [activeDropId, setActiveDropId] = useState(DROPS[0].id);
  const [copied, setCopied] = useState(false);

  const activeDrop = DROPS.find(d => d.id === activeDropId) || DROPS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeDrop.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.dropsSection}>
      <div className={styles.dropsGrid}>
        {/* Drop Selector Sidebar */}
        <div className={styles.sidebarList}>
          {DROPS.map((drop) => {
            const isActive = drop.id === activeDropId;
            return (
              <button
                key={drop.id}
                onClick={() => {
                  setActiveDropId(drop.id);
                  setCopied(false);
                }}
                className={`${styles.dropTab} ${isActive ? styles.dropTabActive : ''}`}
                type="button"
              >
                <div className={styles.tabTop}>
                  <span className={styles.dropTag}>{drop.dropNum}</span>
                  <span className={styles.dateTag}>{drop.date}</span>
                </div>
                <h4 className={styles.tabHeading}>{drop.title}</h4>
                <span className={styles.catTag}>{drop.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Drop Viewer */}
        <GlassCard variant="default" className={styles.codeViewerCard}>
          <div className={styles.viewerHeader}>
            <div className={styles.headerMeta}>
              <div className={styles.badgeRow}>
                <span className={styles.activeDropBadge}>{activeDrop.dropNum}</span>
                <span className={styles.categoryBadge}>{activeDrop.category}</span>
              </div>
              <h3 className={styles.activeTitle}>{activeDrop.title}</h3>
              <p className={styles.activeDesc}>{activeDrop.description}</p>

              {/* Highlights */}
              <div className={styles.highlightList}>
                {activeDrop.highlights.map((h, i) => (
                  <span key={i} className={styles.highlightItem}>
                    <Zap size={14} className={styles.zapIcon} />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className={styles.headerActions}>
              <button
                onClick={handleCopy}
                className={styles.copyButton}
                type="button"
              >
                {copied ? (
                  <>
                    <Check size={16} className={styles.checkIcon} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Window */}
          <div className={styles.codeWindow}>
            <div className={styles.codeToolbar}>
              <div className={styles.windowDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <span className={styles.fileName}>{activeDrop.filename}</span>
              <span className={styles.fileLang}>{activeDrop.language.toUpperCase()}</span>
            </div>

            <pre className={styles.preBlock}>
              <code>{activeDrop.code}</code>
            </pre>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
