import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { PRICING_TIERS } from '@/data/pricingData';
import CheckoutEmbed from './CheckoutEmbed';
import styles from './checkout.module.css';

export const metadata: Metadata = {
  title: 'Secure Checkout',
  robots: { index: false, follow: false },
};

// Whop plan IDs always look like plan_XXXXXXXX
const PLAN_ID_PATTERN = /^plan_[A-Za-z0-9]+$/;

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ planId: string }>;
}) {
  const { planId } = await params;
  const tier = PRICING_TIERS.find((t) => t.whopPlanId === planId);

  if (!PLAN_ID_PATTERN.test(planId)) {
    return (
      <section className={styles.section}>
        <Container size="md">
          <div className={styles.fallback}>
            <h1 className={styles.fallbackTitle}>This checkout link isn&apos;t active yet</h1>
            <p className={styles.fallbackText}>
              The package you tried to open isn&apos;t available for instant checkout right now.
              Message me and I&apos;ll send you a payment link directly — usually within a few hours.
            </p>
            <div className={styles.fallbackActions}>
              <Link href="/contact" className={styles.primaryLink}>
                Get in touch
              </Link>
              <Link href="/pricing" className={styles.secondaryLink}>
                Back to pricing
              </Link>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <Container size="md">
        <div className={styles.header}>
          <Link href="/pricing" className={styles.backLink}>
            ← Back to pricing
          </Link>
          {tier && (
            <>
              <h1 className={styles.title}>{tier.name}</h1>
              <p className={styles.price}>
                {tier.price}
                {tier.period ? <span className={styles.period}> · {tier.period}</span> : null}
              </p>
              {tier.timeline && <p className={styles.timeline}>{tier.timeline}</p>}
            </>
          )}
          {!tier && <h1 className={styles.title}>Secure checkout</h1>}
        </div>

        <div className={styles.embedWrap}>
          <CheckoutEmbed planId={planId} />
        </div>

        <div className={styles.reassure}>
          <h2 className={styles.reassureTitle}>What happens after you pay</h2>
          <ol className={styles.steps}>
            <li>
              You get instant access to the <strong>Raydrim Client Hub</strong> — a private chat
              with me — and to the <strong>Project Updates</strong> feed.
            </li>
            <li>
              I reply within <strong>24 hours</strong> with a scoping summary and your confirmed
              start date.
            </li>
            <li>
              I post each milestone to Project Updates with screenshots, so you can follow progress
              without chasing me.
            </li>
            <li>
              On completion you receive the deployed site, <strong>full source code and repository
              access</strong>, and a handover note.
            </li>
          </ol>
          <p className={styles.finePrint}>
            Payments are processed by Whop. Raydrim never sees or stores your card details. See our{' '}
            <Link href="/terms" className={styles.inlineLink}>
              refund policy
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
