'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { WhopCheckoutEmbed } from '@whop/checkout/react';
import styles from './checkout.module.css';

export default function CheckoutEmbed({ planId }: { planId: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={styles.embedError}>
        <p className={styles.fallbackText}>
          The payment form didn&apos;t load. This is usually a browser extension or network block.
          Try again, or{' '}
          <Link href="/contact" className={styles.inlineLink}>
            message me
          </Link>{' '}
          and I&apos;ll send a direct payment link.
        </p>
      </div>
    );
  }

  return (
    <WhopCheckoutEmbed
      planId={planId}
      returnUrl="https://raydrim.com/checkout/complete"
      theme="light"
      themeOptions={{ backgroundColor: '#f4f1ec', accentColor: '#ff4d2e' }}
      onPaymentError={() => setFailed(true)}
      fallback={<div className={styles.embedSkeleton} aria-label="Loading secure checkout" />}
    />
  );
}
