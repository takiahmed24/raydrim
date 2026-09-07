'use client';

import React, { useState } from 'react';
import { MessageSquareCode, CheckCircle2, ArrowRight, ShieldCheck, Zap, ExternalLink, Clock } from 'lucide-react';
import styles from './CodeClinicWidget.module.css';

export default function CodeClinicWidget() {
  const [appName, setAppName] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [stack, setStack] = useState('Next.js 16 + TypeScript');
  const [challenge, setChallenge] = useState('High Cloud & Database Bills');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'RAY-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(randomId);
    setSubmitted(true);
  };

  return (
    <div className={styles.widgetCard}>
      <div className={styles.cardHeader}>
        <div className={styles.badgeRow}>
          <span className={styles.clinicBadge}>
            <MessageSquareCode size={14} />
            FREE 24-HOUR CODE CLINIC
          </span>
          <span className={styles.slotsLeft}>
            <Clock size={13} />
            2 Priority Slots Open Today
          </span>
        </div>
        <h3 className={styles.heading}>Submit Your Stack for a Deep Architecture Teardown</h3>
        <p className={styles.subtext}>
          Whether you are battling surprise AWS bills, slow Core Web Vitals, or preparing for an App Store launch, get a comprehensive technical audit directly from founder Muhammad Taki Ahmed.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className={styles.clinicForm}>
          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Project or Startup Name</label>
              <input
                type="text"
                required
                value={appName}
                onChange={(e) => setAppName(e.target.value)}
                placeholder="e.g. Acme SaaS"
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Repository or Staging URL (Optional)</label>
              <input
                type="text"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="github.com/org/repo or staging.app.com"
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Primary Tech Stack</label>
              <select
                value={stack}
                onChange={(e) => setStack(e.target.value)}
                className={styles.select}
              >
                <option value="Next.js 16 + TypeScript">Next.js 16 + TypeScript</option>
                <option value="React Native / Expo (iOS & Android)">React Native / Expo (iOS & Android)</option>
                <option value="Node.js / Express / NestJS">Node.js / Express / NestJS</option>
                <option value="Python / FastAPI / AI Swarm">Python / FastAPI / AI Swarm</option>
                <option value="Headless Shopify / Hydrogen">Headless Shopify / Hydrogen</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Primary Focus Area</label>
              <select
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                className={styles.select}
              >
                <option value="High Cloud & Database Bills">High Cloud & Database Bills</option>
                <option value="Core Web Vitals & Sub-Second LCP">Core Web Vitals & Sub-Second LCP</option>
                <option value="App Store Connect & Play Store Compliance">App Store Connect & Play Store Compliance</option>
                <option value="Database Indexing & N+1 Bottlenecks">Database Indexing & N+1 Bottlenecks</option>
                <option value="Stripe Idempotency & Webhook Security">Stripe Idempotency & Webhook Security</option>
              </select>
            </div>
          </div>

          <div className={styles.formFooter}>
            <div className={styles.guaranteePill}>
              <ShieldCheck size={16} className={styles.shieldIcon} />
              <span>100% Confidential · Strict NDA Protected · Zero Spam</span>
            </div>
            <button type="submit" className={styles.submitBtn}>
              <span>Request Architecture Teardown</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.successState}>
          <div className={styles.successIconBox}>
            <CheckCircle2 size={40} className={styles.checkIcon} />
          </div>
          <div className={styles.ticketBadge}>Audit Ticket: {ticketId}</div>
          <h4 className={styles.successTitle}>Teardown Scheduled for {appName || 'Your Project'}</h4>
          <p className={styles.successDesc}>
            Your architecture dossier has been queued. Muhammad Taki Ahmed is reviewing the {stack} configuration against our production benchmarks for {challenge.toLowerCase()}.
          </p>
          <div className={styles.successActions}>
            <a
              href="https://whop.com/raydrim/"
              target="_blank"
              rel="noreferrer"
              className={styles.whopPriorityBtn}
            >
              <span>Join Whop Community for Live Teardown Stream</span>
              <ExternalLink size={16} />
            </a>
            <button
              type="button"
              className={styles.resetBtn}
              onClick={() => setSubmitted(false)}
            >
              Submit Another Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
}