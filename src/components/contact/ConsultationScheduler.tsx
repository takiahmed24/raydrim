'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { QUICK_CONTACT_FAQS } from '@/data/contactData';
import { MessageSquare, HelpCircle, ArrowRight } from 'lucide-react';
import styles from './ConsultationScheduler.module.css';

export default function ConsultationScheduler() {
  return (
    <section className={styles.section}>
      <Container size="lg">
        <div className={styles.grid}>
          {/* Left Column: Direct Contact */}
          <ScrollReveal direction="up" delay={0.1}>
            <GlassCard className={styles.card} hoverEffect={false}>
              <h3 className={styles.cardTitle}>
                <MessageSquare size={22} className={styles.titleIcon} />
                Start a Conversation
              </h3>
              <p className={styles.cardDesc}>
                Have a project idea or want to discuss requirements? Send me a message directly via WhatsApp or email and I will respond within 24 hours.
              </p>

              <div className={styles.contactOptions}>
                <Button
                  href="https://wa.me/8801873691022?text=Hi%20Taki%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Raydrim."
                  variant="primary"
                  size="md"
                  fullWidth={true}
                  icon={<ArrowRight size={18} />}
                >
                  Message on WhatsApp
                </Button>
                <Button
                  href="mailto:ahmedmuhammadtaki@gmail.com?subject=Project%20Inquiry%20-%20Raydrim"
                  variant="secondary"
                  size="md"
                  fullWidth={true}
                  icon={<ArrowRight size={18} />}
                >
                  Send Email Directly
                </Button>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Right Column: Quick Contact FAQ */}
          <ScrollReveal direction="up" delay={0.2}>
            <GlassCard className={styles.card} hoverEffect={false}>
              <h3 className={styles.cardTitle}>
                <HelpCircle size={22} className={styles.titleIcon} />
                Quick Inquiry FAQ
              </h3>
              <p className={styles.cardDesc}>
                Key details regarding initial conversations, NDAs, and project scoping.
              </p>

              <div className={styles.faqList}>
                {QUICK_CONTACT_FAQS.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <div className={styles.faqQuestion}>{faq.question}</div>
                    <div className={styles.faqAnswer}>{faq.answer}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
