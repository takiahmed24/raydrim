'use client';

import React, { useState } from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { SERVICE_FAQS } from '@/data/agencyData';
import { ChevronDown, Sparkles, MessageSquare } from 'lucide-react';
import styles from './ServiceFAQ.module.css';

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <Container size="lg">
        <SectionHeading
          badge="Got Questions?"
          title={
            <>
              Frequently Asked <span className="text-gradient">Questions</span>
            </>
          }
          subtitle="Everything you need to know about our engineering process, ownership, and client engagement."
        />

        <div className={styles.faqContainer}>
          {SERVICE_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.08}>
                <div className={styles.faqItem}>
                  <button
                    className={styles.questionBtn}
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`${styles.chevronIcon} ${isOpen ? styles.openIcon : ''}`}
                    />
                  </button>

                  {isOpen && <div className={styles.answerBox}>{faq.answer}</div>}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>
              Have a Specific Technical <span className="text-gradient">Requirement?</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              Our solutions architects are available to review your codebase, system requirements, or RFP documentation.
            </p>

            <div className={styles.ctaButtons}>
              <Button href="/contact" variant="primary" size="lg" icon={<Sparkles size={20} />}>
                Start Project Scope
              </Button>
              <Button href="/contact" variant="secondary" size="lg" icon={<MessageSquare size={20} />}>
                Talk to Lead Architect
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
