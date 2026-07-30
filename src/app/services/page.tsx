import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceVerticals from '@/components/services/ServiceVerticals';
import DeliveryProcess from '@/components/services/DeliveryProcess';
import TechStackGrid from '@/components/services/TechStackGrid';
import ServiceFAQ from '@/components/services/ServiceFAQ';

export const metadata = {
  title: 'Our Services — Raydrim Digital Agency',
  description:
    'Explore Raydrim’s core verticals: Web Development, Software Consulting & Cloud, E-Commerce Solutions, and Creative Studio UI/UX.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceVerticals />
      <DeliveryProcess />
      <TechStackGrid />
      <ServiceFAQ />
    </>
  );
}
