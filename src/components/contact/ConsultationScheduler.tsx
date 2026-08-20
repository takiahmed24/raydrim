'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CONSULTATION_SLOTS, QUICK_CONTACT_FAQS } from '@/data/contactData';
import { Calendar, Clock, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import styles from './ConsultationScheduler.module.css';

export default function ConsultationScheduler() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <Container size="lg">
        <div className={styles.grid}>
          {/* Left Column: Direct Call Booking */}
          <ScrollReveal direction="up" delay={0.1}>
            <GlassCard className={styles.card} hoverEffect={false}>
              <h3 className={styles.cardTitle}>
                <Calendar size={22} className={styles.titleIcon} />
                Schedule a 30-Min Strategy Call
              </h3>
              <p className={styles.cardDesc}>
                Prefer an immediate conversation? Reserve a 1-on-1 technical discovery call with me directly.
              </p>

              {CONSULTATION_SLOTS.length > 0 && (
                <div className={styles.slotsList}>
                  {CONSULTATION_SLOTS.map((slot, idx) => {
                    const isSelected = selectedSlot === slot.time;
                    return (
                      <div
                        key={idx}
                        className={styles.slotItem}
                        onClick={() => setSelectedSlot(slot.time)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div>
                          <div className={styles.slotTime}>{slot.time}</div>
                          <div className={styles.slotLabel}>{slot.label}</div>
                        </div>
                        <span className={styles.bookBadge}>
                          {isSelected ? 'Selected' : 'Available'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

              <Button
                href="https://cal.com"
                variant="primary"
                size="md"
                fullWidth={true}
                icon={<ArrowRight size={18} />}
              >
                {selectedSlot ? `Confirm Call at ${selectedSlot}` : 'Open Live Booking Calendar'}
              </Button>
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
