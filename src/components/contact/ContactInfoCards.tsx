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
          <div className={styles.iconWrapper}>
            <Mail size={24} />
          </div>
          <h3 className={styles.title}>Direct Email</h3>
          <p className={styles.subtitle}>Inquiries, RFPs & Partnership Proposals</p>
          <div className={styles.mainValue}>{CONTACT_INFO.email}</div>

          <div className={styles.actionRow}>
            <button
              className={styles.copyButton}
              onClick={() => copyToClipboard(CONTACT_INFO.email, 'email')}
            >
              {copiedField === 'email' ? <Check size={14} className="text-jungle-400" /> : <Copy size={14} />}
              <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
            </button>
            <a href={`mailto:${CONTACT_INFO.email}`} className={styles.directLink}>
              <span>Send Mail</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* Card 2: Phone */}
      <ScrollReveal direction="up" delay={0.2}>
        <GlassCard className={styles.card} hoverEffect={true}>
          <div className={styles.iconWrapper}>
            <Phone size={24} />
          </div>
          <h3 className={styles.title}>Telephone Line</h3>
          <p className={styles.subtitle}>Direct Senior Client Concierge</p>
          <div className={styles.mainValue}>{CONTACT_INFO.phone}</div>

          <div className={styles.actionRow}>
            <button
              className={styles.copyButton}
              onClick={() => copyToClipboard(CONTACT_INFO.phone, 'phone')}
            >
              {copiedField === 'phone' ? <Check size={14} className="text-jungle-400" /> : <Copy size={14} />}
              <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
            </button>
            <a href="tel:+8801873691022" className={styles.directLink}>
              <span>Call Now</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </GlassCard>
      </ScrollReveal>

      {/* Card 3: Office Address & US Banking */}
      <ScrollReveal direction="up" delay={0.3}>
        <GlassCard className={styles.card} hoverEffect={true}>
          <div className={styles.iconWrapper}>
            <MapPin size={24} />
          </div>
          <h3 className={styles.title}>HQ & US Banking Partner</h3>
          <p className={styles.subtitle}>Owner: {CONTACT_INFO.owner}</p>
          <div className={styles.mainValue} style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
            <strong>Recipient Address:</strong> {CONTACT_INFO.address}
            <br /><br />
            <strong>US Bank Partner:</strong> {CONTACT_INFO.usBankAddress}
          </div>

          <div className={styles.actionRow}>
            <span className="text-xs text-cream-300">Dhaka & New York</span>
            <a
              href="https://maps.google.com"
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
          <div className={styles.iconWrapper}>
            <Clock size={24} />
          </div>
          <h3 className={styles.title}>Business Hours & SLA</h3>
          <p className={styles.subtitle}>Active Operating Windows</p>
          <div className={styles.mainValue}>{CONTACT_INFO.hours}</div>

          <div className={styles.actionRow}>
            <span className="text-xs text-jungle-400 font-semibold">{CONTACT_INFO.responseTime}</span>
            <ShieldCheck size={16} className="text-jungle-400" />
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}
