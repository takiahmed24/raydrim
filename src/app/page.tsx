import React from 'react';
import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import Stats from '@/components/home/Stats';
import FeaturedWork from '@/components/home/FeaturedWork';
import CTABanner from '@/components/home/CTABanner';

export const metadata = {
  title: 'Raydrim — Websites, Shopify Stores & Mobile Apps Built to Order',
  description:
    'Raydrim is the independent studio of Muhammad Taki Ahmed, building fast Next.js websites, Shopify stores and mobile apps. Fixed prices, clear timelines, full source code ownership.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Stats />
      <FeaturedWork />
      <CTABanner />
    </>
  );
}
