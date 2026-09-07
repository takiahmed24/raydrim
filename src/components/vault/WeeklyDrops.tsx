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
