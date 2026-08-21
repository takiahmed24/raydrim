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
    title: 'Check your email',
    body: 'Whop has sent your invite to the Raydrim Client Hub — a private chat with me — and to the Project Updates feed. If it is not in your inbox, check spam.',
  },
  {
    icon: CalendarClock,
    title: 'I reply within 24 hours',
    body: 'You will get a scoping summary and a confirmed start date in the Client Hub. If you already know what you want, reply with your brief and I will start sooner.',
  },
  {
    icon: FolderGit2,
    title: 'Then you watch it get built',
    body: 'Every milestone gets posted to Project Updates with screenshots, so you can follow progress without chasing me for status.',
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
            <a href="mailto:muhammadtakiahmed@icloud.com" className={styles.inlineLink}>
              muhammadtakiahmed@icloud.com
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
