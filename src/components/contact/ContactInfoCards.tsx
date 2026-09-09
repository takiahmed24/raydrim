'use client';

import React, { useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CONTACT_INFO } from '@/data/contactData';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Copy, Check, ExternalLink } from 'lucide-react';
import styles from './ContactInfoCards.module.css';

export default function ContactInfoCards() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 3000);
  };

  return (
    <div className={styles.grid}>
      {/* Card 1: Direct Email */}
      <ScrollReveal direction="up" delay={0.1}>
        <GlassCard className={styles.card} hoverEffect={true}>
          <div className={styles.iconBox}>
            <Mail size={22} />
          </div>
          <h3 className={styles.title}>Direct Email</h3>
          <p className={styles.subtitle}>Inquiries, RFPs & Project Details</p>
          <div className={styles.mainValue}>{CONTACT_INFO.email}</div>
          <div className={styles.mainValue}>{CONTACT_INFO.emailAlt}</div>

          <div className={styles.actionRow}>
            <button
              className={styles.copyButton}
              onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
            >
              {copiedField === 'email' ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedField === 'email' ? 'Copied' : 'Copy Email'}</span>
            </button>
            <a href={`mailto:${CONTACT_INFO.email}`} className={styles.directLink}>
              <span>Send Mail</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* Card 2: Project Scoping */}
      <ScrollReveal direction="up" delay={0.2}>
        <GlassCard className={styles.card} hoverEffect={true}>
          <div className={styles.iconBox}>
            <ShieldCheck size={22} />
          </div>
          <h3 className={styles.title}>Project Scoping</h3>
          <p className={styles.subtitle}>Direct Consultation Desk</p>
          <div className={styles.mainValue}>Fast Technical Scoping & Architecture</div>

          <div className={styles.actionRow}>
            <a href="mailto:contact@raydrim.com?subject=Technical%20Consultation%20Request" className={styles.directLink}>
              <span>Request Scoping Session</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* Card 3: Location & Payments */}
      <ScrollReveal direction="up" delay={0.3}>
        <GlassCard className={styles.card} hoverEffect={true}>
          <div className={styles.iconBox}>
            <MapPin size={22} />
          </div>
          <h3 className={styles.title}>Studio Location & Payments</h3>
          <p className={styles.subtitle}>Studio: {CONTACT_INFO.owner}</p>
          <div className={styles.mainValue}>
            <div className={styles.addressBlock}>
              <strong>Location:</strong> {CONTACT_INFO.address}
            </div>
            <div className={styles.addressBlock}>
              <strong>Payment Options:</strong> {CONTACT_INFO.paymentOptions}
            </div>
          </div>

          <div className={styles.actionRow}>
            <span className={styles.locationTag}>Dhaka, Bangladesh</span>
            <a
              href="https://maps.google.com/?q=Dhaka,Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directLink}
            >
              <span>View Location</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* Card 4: Hours & SLA */}
      <ScrollReveal direction="up" delay={0.4}>
        <GlassCard className={styles.card} hoverEffect={true}>
          <div className={styles.iconBox}>
            <Clock size={22} />
          </div>
          <h3 className={styles.title}>Business Hours & SLA</h3>
          <p className={styles.subtitle}>Active Operating Windows</p>
          <div className={styles.mainValue}>{CONTACT_INFO.hours}</div>

          <div className={styles.actionRow}>
            <div className={styles.slaBadge}>
              <ShieldCheck size={16} />
              <span>Response Guarantee: {CONTACT_INFO.responseTime}</span>
            </div>
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}
