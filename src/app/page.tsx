import React from 'react';
import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import ServicesOverview from '@/components/home/ServicesOverview';
import Stats from '@/components/home/Stats';
import FeaturedWork from '@/components/home/FeaturedWork';
import Testimonials from '@/components/home/Testimonials';
import CTABanner from '@/components/home/CTABanner';

export const metadata = {
  title: 'Raydrim — We Build Digital Futures | Next-Gen Agency',
  description:
    'Raydrim builds high-performance Next.js web applications, AI platforms, and luxury visual identities for visionary global clients.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <Stats />
      <FeaturedWork />
      <Testimonials />
      <CTABanner />
    </>
  );
}
