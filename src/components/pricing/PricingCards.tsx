'use client';

import React from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { PRICING_TIERS } from '@/data/pricingData';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import styles from './PricingCards.module.css';

export default function PricingCards() {
  return (
    <div className={styles.grid}>
      {PRICING_TIERS.map((tier, idx) => {
        const isPopular = tier.popular;

        return (
          <ScrollReveal key={tier.id} direction="up" delay={idx * 0.1} className={styles.cardWrapper}>
            <GlassCard
              className={`${styles.card} ${isPopular ? styles.popularCard : ''}`}
              hoverEffect={true}
              glowOnHover={isPopular}
            >
              {tier.badge && <div className={styles.popularBadge}>{tier.badge}</div>}

              <div className={styles.tierHeader}>
                <h3 className={styles.tierName}>{tier.name}</h3>

                <div className={styles.priceWrapper}>
                  <span className={styles.priceAmount}>{tier.price}</span>
                  {tier.period && <span className={styles.pricePeriod}>/ {tier.period}</span>}
                </div>

                {tier.timeline && (
                  <div className={styles.timelineChip}>
                    <Clock size={14} className="text-jungle-400" />
                    <span>{tier.timeline}</span>
                  </div>
                )}
              </div>

              <p className={styles.tierDesc}>{tier.description}</p>

              <div className={styles.divider} />

              <div className={styles.featureListTitle}>Included Deliverables:</div>

              <ul className={styles.featureList}>
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.ctaWrapper}>
                <Button
                  href={`/contact?plan=${tier.id}`}
                  variant={isPopular ? 'primary' : 'secondary'}
                  size="lg"
                  fullWidth={true}
                  icon={<ArrowRight size={18} />}
                >
                  {tier.ctaText}
                </Button>
              </div>
            </GlassCard>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
