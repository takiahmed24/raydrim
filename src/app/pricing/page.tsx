import React from 'react';
import PricingHero from '@/components/pricing/PricingHero';
import PricingCards from '@/components/pricing/PricingCards';
import FeatureMatrix from '@/components/pricing/FeatureMatrix';
import PricingFaq from '@/components/pricing/PricingFaq';
import CustomQuoteBanner from '@/components/pricing/CustomQuoteBanner';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Investment Plans | Raydrim Digital Agency',
  description: 'Transparent investment tiers for Next.js web applications, e-commerce stores, cloud architecture, and enterprise AI engineering pods.',
};

export default function PricingPage() {
  return (
    <main className="main-content">
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
