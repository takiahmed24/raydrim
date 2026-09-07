'use client';

import React, { useState } from 'react';
import { Gauge, Check, Copy, Zap, Clock, MoveHorizontal, ArrowRight, ShieldAlert } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './CoreWebVitalsAuditor.module.css';

type MetricKey = 'lcp' | 'inp' | 'cls';

interface MetricDetail {
  key: MetricKey;
  name: string;
  fullName: string;
  target: string;
  industryAvg: string;
  raydrimTarget: string;
  description: string;
  rootCause: string;
  filename: string;
  codeSnippet: string;
  tip: string;
}

const METRICS: Record<MetricKey, MetricDetail> = {
  lcp: {
    key: 'lcp',
    name: 'LCP',
    fullName: 'Largest Contentful Paint',
    target: '< 2.5s (Google Good)',
    industryAvg: '3.8s - 5.2s',
    raydrimTarget: '< 0.75s (Top 1% Edge)',
    description: 'Measures render speed of the largest hero image or text element visible in viewport.',
    rootCause: 'Unoptimized hero images, un-cached SSR requests, render-blocking web fonts, and chained redirect hops.',
    filename: 'src/components/home/HeroImage.tsx',
    codeSnippet: `import Image from 'next/image';

// Raydrim 0.75s LCP Pattern: Priority Image + Dynamic Blur + AVIF
export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      <Image
        src="/assets/hero-showcase.webp"
        alt="Production Dashboard Architecture"
        fill
        priority // Preloads resource in HTML <head>
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        quality={85}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..."
        className="object-cover"
      />
    </div>
  );
}`,
    tip: 'Ensure your hero image is preloaded in the initial HTML document rather than discovered post-hydration.',
  },
  inp: {
    key: 'inp',
    name: 'INP',
    fullName: 'Interaction to Next Paint',
    target: '< 200ms (Google Good)',
    industryAvg: '240ms - 480ms',
    raydrimTarget: '< 28ms (Instant Feedback)',
    description: 'Measures UI responsiveness to clicks, taps, and keypresses throughout the entire session.',
    rootCause: 'Long tasks (>50ms) blocking the JavaScript main thread during re-renders, sync state updates, or massive DOM nodes.',
    filename: 'src/hooks/useNonBlockingAction.ts',
    codeSnippet: `import { useTransition, useCallback } from 'react';

// Raydrim Non-Blocking INP Pattern: React 19 Transitions + Microtask Yield
export function useNonBlockingAction<T, R>(action: (param: T) => Promise<R>) {
  const [isPending, startTransition] = useTransition();

  const execute = useCallback((param: T) => {
    // 1. Yield to main thread immediately for visual tap response
    requestAnimationFrame(() => {
      startTransition(async () => {
        await action(param);
      });
    });
  }, [action]);

  return { execute, isPending };
}`,
    tip: 'Never execute heavy data transformations synchronously inside onClick handlers; wrap in useTransition or Web Workers.',
  },
  cls: {
    key: 'cls',
    name: 'CLS',
    fullName: 'Cumulative Layout Shift',
    target: '< 0.1 (Google Good)',
    industryAvg: '0.18 - 0.35',
    raydrimTarget: '0.00 (Zero Shift)',
    description: 'Measures visual stability and accidental layout movement while content and ads load.',
    rootCause: 'Images/videos without explicit width/height aspect ratios, dynamic banners injected post-render, and FOIT font swaps.',
    filename: 'src/app/globals.css',
    codeSnippet: `/* Raydrim Zero-CLS Foundation: Aspect Ratio Reservation & Font Metrics */
.media-wrapper {
  /* Reserves layout box before network payload arrives */
  aspect-ratio: 16 / 9;
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  contain-intrinsic-size: 1200px 675px;
  content-visibility: auto;
}

/* Fallback Font Metric Matching with Next.js next/font */
@font-face {
  font-family: 'Inter Fallback';
  src: local('Arial');
  ascent-override: 90.44%;
  descent-override: 22.56%;
  line-gap-override: 0.00%;
  size-adjust: 107.40%;
}`,
    tip: 'Always reserve the exact aspect-ratio and contain-intrinsic-size on containers for dynamically loaded content.',
  },
};

export default function CoreWebVitalsAuditor() {
  const [activeMetric, setActiveMetric] = useState<MetricKey>('lcp');
  const [copied, setCopied] = useState<boolean>(false);

  const metric = METRICS[activeMetric];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.auditorCard}>
      <div className={styles.topBar}>
        <div className={styles.badge}>
          <Gauge size={15} />
          Core Web Vitals & Velocity Lab
        </div>
        <div className={styles.scorePill}>
          <span>Lighthouse 100/100 Protocol</span>
        </div>
      </div>

      {/* Metric Selector Tabs */}
      <div className={styles.metricTabs}>
        {(Object.keys(METRICS) as MetricKey[]).map((key) => {
          const m = METRICS[key];
          const isActive = activeMetric === key;
          return (
            <button
              key={key}
              type="button"
              className={`${styles.metricTab} ${isActive ? styles.metricTabActive : ''}`}
              onClick={() => setActiveMetric(key)}
            >
              <div className={styles.metricName}>{m.fullName}</div>
              <div className={styles.metricTarget}>{m.name}</div>
              <div className={styles.metricDescription}>{m.target}</div>
            </button>
          );
        })}
      </div>

      {/* Detail & Solution Card */}
      <div className={styles.detailCard}>
        <div className={styles.detailHeader}>
          <div>
            <h3 className={styles.detailTitle}>{metric.fullName} Optimization Pattern</h3>
            <p className={styles.detailSubtitle}>{metric.description}</p>
          </div>
        </div>

        <div className={styles.comparisonRow}>
          <div className={`${styles.compBox} ${styles.compBad}`}>
            <div className={styles.compLabel}>Typical Industry Average</div>
            <div className={styles.compVal}>{metric.industryAvg}</div>
          </div>
          <div className={`${styles.compBox} ${styles.compGood}`}>
            <div className={styles.compLabel}>Raydrim Production Standard</div>
            <div className={styles.compVal}>{metric.raydrimTarget}</div>
          </div>
        </div>

        {/* Code Block */}
        <div className={styles.codeHeader}>
          <span className={styles.codeTitle}>{metric.filename}</span>
          <Button
            variant="secondary"
            size="sm"
            icon={copied ? <Check size={14} /> : <Copy size={14} />}
            onClick={() => handleCopy(metric.codeSnippet)}
          >
            {copied ? 'Copied Recipe!' : 'Copy Code Recipe'}
          </Button>
        </div>
        <pre className={styles.codeBlock}>
          <code>{metric.codeSnippet}</code>
        </pre>

        <div className={styles.codeFooter}>
          <div className={styles.tipText}>
            <strong>Architectural Rule:</strong> {metric.tip}
          </div>
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            icon={<ArrowRight size={15} />}
          >
            Request Free Site Speed Teardown
          </Button>
        </div>
      </div>
    </div>
  );
}
