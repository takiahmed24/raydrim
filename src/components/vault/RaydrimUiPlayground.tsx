'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, Check, Activity, Layers, Code, Play, ArrowUpRight } from 'lucide-react';
import styles from './RaydrimUiPlayground.module.css';

type ComponentTab = 'card' | 'button' | 'telemetry' | 'status';

export default function RaydrimUiPlayground() {
  const [activeTab, setActiveTab] = useState<ComponentTab>('card');
  const [glowIntensity, setGlowIntensity] = useState<number>(30);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  const codeSnippets: Record<ComponentTab, string> = {
    card: `// GlassMetricCard.tsx
import React from 'react';
import styles from './GlassMetricCard.module.css';

export function GlassMetricCard({ title, value, change }) {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <span>{title}</span>
        <span className={styles.pill}>{change}</span>
      </div>
      <div className={styles.metricVal}>{value}</div>
    </div>
  );
}`,
    button: `// CyberButton.tsx
import React, { useState } from 'react';
import styles from './CyberButton.module.css';

export function CyberButton({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <button className={styles.cyberBtn} onClick={() => setLoading(!loading)}>
      {loading ? <span className={styles.spinner} /> : children}
    </button>
  );
}`,
    telemetry: `// EdgeTelemetryBadge.tsx
export function EdgeTelemetryBadge({ region = 'iad-01', latencyMs = 12 }) {
  return (
    <div className={styles.badge}>
      <span className={styles.pulseDot} />
      <span>{region.toUpperCase()}</span>
      <span className={styles.latency}>{latencyMs}ms</span>
    </div>
  );
}`,
    status: `// DeploymentStatusPill.tsx
export function DeploymentStatusPill({ commit = 'main@d1178ef' }) {
  return (
    <div className={styles.statusPill}>
      <span className={styles.indicator} />
      <span>ALL SYSTEMS NOMINAL</span>
      <span className={styles.commitBadge}>{commit}</span>
    </div>
  );
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      {/* Component Navigation */}
      <div className={styles.headerBar}>
        <div className={styles.tabList}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'card' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('card')}
          >
            <Layers size={15} />
            <span>Glass Metric Card</span>
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'button' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('button')}
          >
            <Play size={15} />
            <span>Cybernetic Button</span>
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'telemetry' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('telemetry')}
          >
            <Activity size={15} />
            <span>Edge Telemetry</span>
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'status' ? styles.tabBtnActive : ''}`}
            onClick={() => setActiveTab('status')}
          >
            <Sparkles size={15} />
            <span>Status Protocol</span>
          </button>
        </div>

        <div className={styles.viewToggles}>
          <button
            type="button"
            className={`${styles.viewBtn} ${viewMode === 'preview' ? styles.viewBtnActive : ''}`}
            onClick={() => setViewMode('preview')}
          >
            Interactive Preview
          </button>
          <button
            type="button"
            className={`${styles.viewBtn} ${viewMode === 'code' ? styles.viewBtnActive : ''}`}
            onClick={() => setViewMode('code')}
          >
            <Code size={14} />
            <span>Source Code</span>
          </button>
        </div>
      </div>

      {/* Stage Arena */}
      <div className={styles.arena}>
        {viewMode === 'preview' ? (
          <div className={styles.previewStage}>
            {activeTab === 'card' && (
              <div 
                className={styles.interactiveCard}
                style={{ 
                  boxShadow: `0 20px 50px rgba(0, 0, 0, 0.6), 0 0 ${glowIntensity}px rgba(0, 255, 255, ${glowIntensity / 150})`,
                  borderColor: `rgba(0, 255, 255, ${Math.max(0.2, glowIntensity / 100)})`
                }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardSubtitle}>REALTIME SEC TELEMETRY</span>
                  <span className={styles.cardPill}>+34.8% LCP</span>
                </div>
                <div className={styles.cardMetric}>
                  0.38<span className={styles.cardUnit}>s</span>
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.subMeta}>Sub-second edge compute on Cloudflare Workers</div>
                  <div className={styles.cardGraphBar}>
                    <div className={styles.graphProgress} style={{ width: '84%' }} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'button' && (
              <div className={styles.buttonStage}>
                <button
                  type="button"
                  className={styles.liveCyberBtn}
                  onClick={() => {
                    setButtonLoading(true);
                    setTimeout(() => setButtonLoading(false), 1800);
                  }}
                >
                  {buttonLoading ? (
                    <span className={styles.liveSpinner} />
                  ) : (
                    <>
                      <span>Execute Quantum Pipeline</span>
                      <ArrowUpRight size={16} />
                    </>
                  )}
                </button>
                <div className={styles.interactiveHint}>
                  (Click to trigger the zero-hang async loading cycle)
                </div>
              </div>
            )}

            {activeTab === 'telemetry' && (
              <div className={styles.telemetryStage}>
                <div className={styles.telemetryGrid}>
                  <div className={styles.nodeBadge}>
                    <span className={styles.nodePulse} />
                    <span className={styles.nodeName}>US-EAST-1 (IAD)</span>
                    <span className={styles.nodeSpeed}>4ms</span>
                  </div>
                  <div className={styles.nodeBadge}>
                    <span className={styles.nodePulse} />
                    <span className={styles.nodeName}>EU-CENTRAL (FRA)</span>
                    <span className={styles.nodeSpeed}>18ms</span>
                  </div>
                  <div className={styles.nodeBadge}>
                    <span className={styles.nodePulse} />
                    <span className={styles.nodeName}>AP-SOUTHEAST (SIN)</span>
                    <span className={styles.nodeSpeed}>64ms</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'status' && (
              <div className={styles.statusStage}>
                <div className={styles.productionStatusPill}>
                  <span className={styles.statusGlow} />
                  <span className={styles.statusTextMain}>SYSTEM HEALTH NOMINAL</span>
                  <span className={styles.statusDivider}>•</span>
                  <span className={styles.statusCommit}>commit@d1178ef</span>
                </div>
              </div>
            )}

            {/* Controls Bar for card */}
            {activeTab === 'card' && (
              <div className={styles.sliderControl}>
                <label className={styles.sliderLabel}>
                  Cyan Glow Intensity: <strong>{glowIntensity}px</strong>
                </label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  value={glowIntensity}
                  onChange={(e) => setGlowIntensity(Number(e.target.value))}
                  className={styles.rangeInput}
                />
              </div>
            )}
          </div>
        ) : (
          <div className={styles.codeStage}>
            <div className={styles.codeHeader}>
              <span className={styles.codeTitle}>Component Source</span>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check size={14} className={styles.copyCheck} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy TSX</span>
                  </>
                )}
              </button>
            </div>
            <pre className={styles.codeSnippet}>
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}