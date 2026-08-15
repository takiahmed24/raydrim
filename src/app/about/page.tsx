import React from 'react';
import type { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import StoryVision from '@/components/about/StoryVision';
import CoreValues from '@/components/about/CoreValues';
import TeamGrid from '@/components/about/TeamGrid';
import MilestonesTimeline from '@/components/about/MilestonesTimeline';
import GlobalFootprint from '@/components/about/GlobalFootprint';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover Raydrim’s mission, global engineering leadership, core values, and company timeline in delivering enterprise software.',
  alternates: {
    canonical: 'https://raydrim.com/about',
  },
  openGraph: {
    title: 'About Us | Raydrim Digital Agency',
    description:
      'Discover Raydrim’s mission, global engineering leadership, core values, and company timeline in delivering enterprise software.',
    url: 'https://raydrim.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Raydrim Digital Agency',
    description:
      'Discover Raydrim’s mission, global engineering leadership, core values, and company timeline in delivering enterprise software.',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StoryVision />
      <CoreValues />
      <TeamGrid />
      <MilestonesTimeline />
      <GlobalFootprint />
    </>
  );
}
