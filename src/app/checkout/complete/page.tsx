import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { CheckCircle2, MessageSquare, CalendarClock, FolderGit2 } from 'lucide-react';
import styles from './complete.module.css';

export const metadata: Metadata = {
  title: 'Order Confirmed',
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Open your Client Hub',
    body: 'Your order gives you access to the Raydrim Client Hub on Whop. Open it with the button below, or use the invite Whop just emailed you. Message me there and I reply in a private DM — your project details stay between the two of us.',
  },
  {
    icon: CalendarClock,
    title: 'I reply within 24 hours',
    body: 'You will get a scoping summary and a confirmed start date. If you already know what you want, send your brief straight away and I will start sooner.',
  },
  {
    icon: FolderGit2,
    title: 'Then you watch it get built',
    body: 'I send each milestone with screenshots as I go, so you can follow progress without chasing me for status. At the end you get the deployed site, full source code and repository access, and a handover note.',
  },
];

export default function CheckoutCompletePage() {
  return (
    <section className={styles.section}>
      <Container size="md">
        <div className={styles.hero}>
          <div className={styles.check} aria-hidden="true">
            <CheckCircle2 size={30} strokeWidth={2.2} />
          </div>
          <h1 className={styles.title}>Order confirmed — thank you.</h1>
          <p className={styles.lede}>
            Your project is queued and I have been notified. Here is exactly what happens next.
          </p>
        </div>

        <div className={styles.hubCta}>
          <a
            href="https://whop.com/raydrim"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryLink}
          >
            Open Raydrim Client Hub →
          </a>
          <p className={styles.hubHint}>
            Opens on Whop, where you and I message directly.
          </p>
        </div>

        <ol className={styles.steps}>
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className={styles.step}>
                <div className={styles.stepIcon}>
                  <Icon size={20} />
                </div>
                <div>
                  <h2 className={styles.stepTitle}>
                    <span className={styles.stepNum}>{i + 1}.</span> {step.title}
                  </h2>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className={styles.footerNote}>
          <p className={styles.footerText}>
            Something wrong with your order, or did not receive your invite? Email{' '}
            <a href="mailto:ahmedmuhammadtaki@gmail.com" className={styles.inlineLink}>
              ahmedmuhammadtaki@gmail.com
            </a>{' '}
            and I will sort it out the same day.
          </p>
          <div className={styles.actions}>
            <Link href="/portfolio" className={styles.primaryLink}>
              See recent work
            </Link>
            <Link href="/blog" className={styles.secondaryLink}>
              Read the blog
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
