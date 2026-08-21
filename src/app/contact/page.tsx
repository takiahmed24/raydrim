import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfoCards from '@/components/contact/ContactInfoCards';
import ConsultationScheduler from '@/components/contact/ConsultationScheduler';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Contact Us & Book Consultation',
  description:
    'Start your project with Raydrim. Request a proposal for custom web application engineering, mobile app development, cloud infrastructure, or enterprise AI.',
  alternates: {
    canonical: 'https://raydrim.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Raydrim Digital Agency',
    description:
      'Get in touch directly with Muhammad Taki Ahmed, founder and lead developer at Raydrim. 24-hour response guarantee.',
    url: 'https://raydrim.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Raydrim Digital Agency',
    description:
      'Get in touch directly with Muhammad Taki Ahmed, founder and lead developer at Raydrim. 24-hour response guarantee.',
  },
};

export default function ContactPage() {
  const jsonLdContact = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Raydrim',
    description: 'Contact Raydrim Digital Agency for engineering consultations and project estimates.',
    url: 'https://raydrim.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Raydrim Digital Agency',
      email: 'muhammadtakiahmed@icloud.com',
      telephone: '+8801873691022',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dhaka-1230',
        addressLocality: 'Dhaka',
        postalCode: '1230',
        addressCountry: 'BD',
      },
    },
  };

  return (
    <main className="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdContact),
        }}
      />
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
            <Suspense fallback={<div style={{ padding: '40px', textAlign: 'center', color: 'var(--ink-soft)' }}>Loading project proposal form...</div>}>
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
