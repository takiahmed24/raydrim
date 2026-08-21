'use client';

import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('raydrim_cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('raydrim_cookie_consent', 'granted');
    setShowBanner(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cookie_consent_granted'));
    }
  };

  const handleDecline = () => {
    localStorage.setItem('raydrim_cookie_consent', 'denied');
    setShowBanner(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cookie_consent_denied'));
    }
  };

  if (!mounted || !showBanner) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent banner">
      <div className={styles.container}>
        <p className={styles.text}>
          We use cookies for site analytics and Google AdSense personalization. Read our{' '}
          <a href="/privacy" className={styles.link}>
            Privacy Policy
          </a>{' '}
          to manage your preferences.
        </p>
        <div className={styles.actions}>
          <button onClick={handleDecline} className={styles.declineBtn}>
            Decline
          </button>
          <button onClick={handleAccept} className={styles.acceptBtn}>
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
