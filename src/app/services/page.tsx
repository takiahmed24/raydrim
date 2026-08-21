import React from 'react';
import type { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceVerticals from '@/components/services/ServiceVerticals';
import DeliveryProcess from '@/components/services/DeliveryProcess';
import TechStackGrid from '@/components/services/TechStackGrid';
import ServiceFAQ from '@/components/services/ServiceFAQ';

export const metadata: Metadata = {
  title: 'Engineering & Digital Services',
  description:
    'Explore Raydrim’s core verticals: Next.js Web Development, AI & Cloud Infrastructure, Mobile App Development, E-Commerce Solutions, and UI/UX Design Systems.',
  alternates: {
    canonical: 'https://raydrim.com/services',
  },
  openGraph: {
    title: 'Services | Raydrim Digital Agency',
    description:
      'Next.js Web Apps, Mobile Apps for Play Store & iOS, AI Feature Integration, and Cloud Architecture.',
    url: 'https://raydrim.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Raydrim Digital Agency',
    description:
      'Next.js Web Apps, Mobile Apps for Play Store & iOS, AI Feature Integration, and Cloud Architecture.',
  },
};

export default function ServicesPage() {
  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development & Digital Agency Services',
    provider: {
      '@type': 'Organization',
      name: 'Raydrim',
      url: 'https://raydrim.com',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Raydrim Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Application Development (Next.js, React, TypeScript)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development (Google Play Store & iOS App Store)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Feature Integration  & LLM API Integration',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud & Infrastructure Architecture (AWS, DevOps)',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdService),
        }}
      />
      <ServicesHero />
      <ServiceVerticals />
      <DeliveryProcess />
      <TechStackGrid />
      <ServiceFAQ />
    </>
  );
}
