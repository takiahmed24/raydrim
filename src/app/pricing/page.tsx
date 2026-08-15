import React from 'react';
import type { Metadata } from 'next';
import PricingHero from '@/components/pricing/PricingHero';
import PricingCards from '@/components/pricing/PricingCards';
import FeatureMatrix from '@/components/pricing/FeatureMatrix';
import PricingFaq from '@/components/pricing/PricingFaq';
import CustomQuoteBanner from '@/components/pricing/CustomQuoteBanner';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Pricing & Investment Plans',
  description:
    'Transparent investment tiers for Next.js web applications, e-commerce stores, cloud architecture, and enterprise AI engineering pods.',
  alternates: {
    canonical: 'https://raydrim.com/pricing',
  },
  openGraph: {
    title: 'Pricing & Investment Plans | Raydrim Digital Agency',
    description:
      'Transparent investment tiers for Next.js web applications, e-commerce stores, cloud architecture, and enterprise AI engineering pods.',
    url: 'https://raydrim.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing & Investment Plans | Raydrim Digital Agency',
    description:
      'Transparent investment tiers for Next.js web applications, e-commerce stores, cloud architecture, and enterprise AI engineering pods.',
  },
};

export default function PricingPage() {
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in full source code ownership?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You own 100% of all intellectual property, source code, database schemas, and infrastructure configs upon milestone completion.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies do you use for custom web apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We specialize in Next.js 14, React, TypeScript, Node.js, PostgreSQL, Prisma, AWS Cloud, and Framer Motion.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do project retainer payments work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We operate on milestone-based billing (e.g. 50% deposit, 50% upon final production deployment) or monthly dedicated engineering retainers via Stripe, Payoneer, or Wise.',
        },
      },
    ],
  };

  return (
    <main className="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdFaq),
        }}
      />
      {/* Hero Section */}
      <PricingHero />

      {/* 3 Tier Pricing Cards */}
      <section style={{ paddingBottom: '40px' }}>
        <Container size="lg">
          <SectionHeading
            badge="Investment Tiers"
            title={
              <>
                Select Your <span className="text-gradient">Project Scale</span>
              </>
            }
            subtitle="Choose a fixed-scope sprint or contact us for bespoke enterprise retainer terms."
          />

          <PricingCards />
        </Container>
      </section>

      {/* Full Feature Comparison Matrix */}
      <Container size="lg">
        <FeatureMatrix />
      </Container>

      {/* Accordion FAQ */}
      <Container size="lg">
        <PricingFaq />
      </Container>

      {/* Custom Quote Enterprise Banner */}
      <CustomQuoteBanner />
    </main>
  );
}
