'use client';

import React, { useState } from 'react';
import { Link2, Check } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import styles from './BlogDetail.module.css';

interface SocialShareButtonsProps {
  title: string;
  url: string;
}

export default function SocialShareButtons({ title, url }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareLinkedin = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  return (
    <div className={styles.shareSection}>
      <span className={styles.shareTitle}>Share this article</span>
      <div className={styles.shareButtons}>
        <button onClick={handleCopyLink} className={styles.shareButton} title="Copy article link">
          {copied ? <Check size={16} color="var(--jungle-400)" /> : <Link2 size={16} />}
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>

        <button onClick={shareTwitter} className={styles.shareButton} title="Share on Twitter / X">
          <TwitterIcon size={16} />
          <span>X / Twitter</span>
        </button>

        <button onClick={shareLinkedin} className={styles.shareButton} title="Share on LinkedIn">
          <LinkedinIcon size={16} />
          <span>LinkedIn</span>
        </button>

        <button onClick={shareFacebook} className={styles.shareButton} title="Share on Facebook">
          <FacebookIcon size={16} />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
}
