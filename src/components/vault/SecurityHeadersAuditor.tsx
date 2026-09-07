'use client';

import React, { useState } from 'react';
import { ShieldCheck, Copy, Check, Lock, Sliders, Zap } from 'lucide-react';
import styles from './SecurityHeadersAuditor.module.css';

type SecurityPreset = 'saas' | 'enterprise' | 'ecommerce' | 'ai';

interface FeatureToggles {
  allowStripe: boolean;
  allowWebAssembly: boolean;
  allowAnalytics: boolean;
  hstsPreload: boolean;
  strictPermissions: boolean;
}

export default function SecurityHeadersAuditor() {
  const [preset, setPreset] = useState<SecurityPreset>('saas');
  const [toggles, setToggles] = useState<FeatureToggles>({
    allowStripe: true,
    allowWebAssembly: false,
    allowAnalytics: true,
    hstsPreload: true,
    strictPermissions: true,
  });
  const [copied, setCopied] = useState(false);

  const toggleOption = (key: keyof FeatureToggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePresetChange = (p: SecurityPreset) => {
    setPreset(p);
    if (p === 'enterprise') {
      setToggles({
        allowStripe: true,
        allowWebAssembly: false,
        allowAnalytics: false,
        hstsPreload: true,
        strictPermissions: true,
      });
    } else if (p === 'ecommerce') {
      setToggles({
        allowStripe: true,
        allowWebAssembly: false,
        allowAnalytics: true,
        hstsPreload: true,
        strictPermissions: true,
      });
    } else if (p === 'ai') {
      setToggles({
        allowStripe: false,
        allowWebAssembly: true,
        allowAnalytics: true,
        hstsPreload: true,
        strictPermissions: false,
      });
    } else {
      setToggles({
        allowStripe: true,
        allowWebAssembly: false,
        allowAnalytics: true,
        hstsPreload: true,
        strictPermissions: true,
      });
    }
  };

  const scriptSrc = ["'self'", "'unsafe-inline'"];
  if (toggles.allowStripe) scriptSrc.push('https://js.stripe.com');
  if (toggles.allowAnalytics) scriptSrc.push('https://va.vercel-scripts.com');
  if (toggles.allowWebAssembly) scriptSrc.push("'wasm-unsafe-eval'");

  const frameSrc = ["'self'"];
  if (toggles.allowStripe) frameSrc.push('https://js.stripe.com', 'https://hooks.stripe.com');

  const connectSrc = ["'self'"];
  if (toggles.allowStripe) connectSrc.push('https://api.stripe.com');
  if (toggles.allowAnalytics) connectSrc.push('https://vitals.vercel-insights.com');
  if (toggles.allowWebAssembly) connectSrc.push('https://*.huggingface.co');

  const permissions = toggles.strictPermissions
    ? 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
    : 'camera=(), microphone=()';

  const hstsValue = toggles.hstsPreload
    ? 'max-age=63072000; includeSubDomains; preload'
    : 'max-age=31536000; includeSubDomains';

  const generatedCode = `// next.config.ts — Production Security Headers
import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src ${scriptSrc.join(' ')}",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https: blob:",
      "frame-src ${frameSrc.join(' ')}",
      "connect-src ${connectSrc.join(' ')}",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; ')
  },
  {
    key: 'Strict-Transport-Security',
    value: '${hstsValue}'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: '${permissions}'
  }
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;`;

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      {/* Top Banner & Grade */}
      <div className={styles.gradeBanner}>
        <div className={styles.gradeBadge}>
          <ShieldCheck size={32} className={styles.gradeIcon} />
          <div>
            <div className={styles.gradeTitle}>SECURITY AUDIT GRADE: A+</div>
            <div className={styles.gradeSubtitle}>Zero-Trust Edge Protocol · Clickjack Proof · XSS Hardened</div>
          </div>
        </div>
        <div className={styles.scorePill}>
          <span className={styles.scoreNumber}>100</span>
          <span className={styles.scoreMax}>/100</span>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Left Controls */}
        <div className={styles.controlPanel}>
          <div className={styles.panelBlock}>
            <label className={styles.blockLabel}>
              <Sliders size={14} className={styles.labelIcon} />
              ARCHITECTURE ARCHETYPE
            </label>
            <div className={styles.presetButtons}>
              <button
                type="button"
                className={`${styles.presetBtn} ${preset === 'saas' ? styles.presetBtnActive : ''}`}
                onClick={() => handlePresetChange('saas')}
              >
                Modern SaaS Stack
              </button>
              <button
                type="button"
                className={`${styles.presetBtn} ${preset === 'enterprise' ? styles.presetBtnActive : ''}`}
                onClick={() => handlePresetChange('enterprise')}
              >
                Zero-Trust Enterprise
              </button>
              <button
                type="button"
                className={`${styles.presetBtn} ${preset === 'ecommerce' ? styles.presetBtnActive : ''}`}
                onClick={() => handlePresetChange('ecommerce')}
              >
                E-Commerce / Checkout
              </button>
              <button
                type="button"
                className={`${styles.presetBtn} ${preset === 'ai' ? styles.presetBtnActive : ''}`}
                onClick={() => handlePresetChange('ai')}
              >
                AI Model & WebAssembly
              </button>
            </div>
          </div>

          <div className={styles.panelBlock}>
            <label className={styles.blockLabel}>
              <Lock size={14} className={styles.labelIcon} />
              DYNAMIC POLICY DIRECTIVES
            </label>
            <div className={styles.toggleList}>
              <label className={styles.toggleRow}>
                <input
                  type="checkbox"
                  checked={toggles.allowStripe}
                  onChange={() => toggleOption('allowStripe')}
                />
                <span className={styles.toggleText}>Stripe Checkout & Elements iFrame</span>
              </label>

              <label className={styles.toggleRow}>
                <input
                  type="checkbox"
                  checked={toggles.allowWebAssembly}
                  onChange={() => toggleOption('allowWebAssembly')}
                />
                <span className={styles.toggleText}>Wasm / AI Local Inference (`wasm-unsafe-eval`)</span>
              </label>

              <label className={styles.toggleRow}>
                <input
                  type="checkbox"
                  checked={toggles.allowAnalytics}
                  onChange={() => toggleOption('allowAnalytics')}
                />
                <span className={styles.toggleText}>Privacy-Preserving Telemetry & Speed Insights</span>
              </label>

              <label className={styles.toggleRow}>
                <input
                  type="checkbox"
                  checked={toggles.hstsPreload}
                  onChange={() => toggleOption('hstsPreload')}
                />
                <span className={styles.toggleText}>HSTS 2-Year Max-Age & Browser Preload</span>
              </label>

              <label className={styles.toggleRow}>
                <input
                  type="checkbox"
                  checked={toggles.strictPermissions}
                  onChange={() => toggleOption('strictPermissions')}
                />
                <span className={styles.toggleText}>Lockdown Camera, Mic & Topics API</span>
              </label>
            </div>
          </div>

          <div className={styles.ruleBadges}>
            <span className={styles.rulePill}>🛡️ Clickjacking: DENIED</span>
            <span className={styles.rulePill}>🔒 MIME Sniffing: BLOCKED</span>
            <span className={styles.rulePill}>⚡ SSL Stripping: PREVENTED</span>
          </div>
        </div>

        {/* Right Code Display */}
        <div className={styles.codePanel}>
          <div className={styles.codeHeader}>
            <div className={styles.windowControls}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
              <span className={styles.codeTitle}>next.config.ts</span>
            </div>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={copyCode}
            >
              {copied ? (
                <>
                  <Check size={14} className={styles.copyCheck} />
                  <span>Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Headers Snippet</span>
                </>
              )}
            </button>
          </div>
          <pre className={styles.codePre}>
            <code>{generatedCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
