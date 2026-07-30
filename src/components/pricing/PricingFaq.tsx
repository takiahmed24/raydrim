'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { PRICING_FAQS } from '@/data/pricingData';
import { ChevronDown } from 'lucide-react';
import styles from './PricingFaq.module.css';

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <SectionHeading
        badge="Got Questions?"
        title={
          <>
            Frequently Asked <span className="text-gradient">Pricing Questions</span>
          </>
        }
        subtitle="Everything you need to know about billing, contracts, and deliverable handoffs."
      />

      <div className={styles.faqContainer}>
        {PRICING_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
              <GlassCard
                className={`${styles.accordionCard} ${isOpen ? styles.accordionCardOpen : ''}`}
                hoverEffect={false}
              >
                <button
                  className={styles.headerButton}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={`${styles.toggleIcon} ${isOpen ? styles.iconOpen : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.answerWrapper}
                    >
                      <div className={styles.answerInner}>{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
