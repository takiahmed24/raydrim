import React, { Suspense } from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import ConsultationScheduler from '@/components/contact/ConsultationScheduler';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Raydrim Digital Agency',
  description: 'Start your project with Raydrim. Request a proposal for custom web application engineering, headless e-commerce, cloud infrastructure, or enterprise AI.',
};

export default function ContactPage() {
  return (
    <main className="main-content">
      {/* Hero Header */}
      <ContactHero />

      {/* Main Interactive Contact Form & Info */}
      <section style={{ paddingBottom: '60px' }}>
        <Container size="lg">
          <SectionHeading
            badge="Project Brief"
            title={
              <>
                Tell Us About <span className="text-gradient">Your Scope</span>
              </>
            }
            subtitle="Fill out the form below for a formal estimate, or reach out via direct channels."
          />

          <div style={{ marginBottom: '60px' }}>
            <Suspense fallback={<div style={{ padding: '40px', textAlign: 'center', color: 'var(--cream-300)' }}>Loading project proposal form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Contact Info Cards */}
          <ContactInfoCards />
        </Container>
      </section>

      {/* Consultation Scheduler & Quick FAQ */}
      <ConsultationScheduler />
    </main>
  );
}
