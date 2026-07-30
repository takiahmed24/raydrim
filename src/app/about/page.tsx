import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import StoryVision from '@/components/about/StoryVision';
import CoreValues from '@/components/about/CoreValues';
import TeamGrid from '@/components/about/TeamGrid';
import MilestonesTimeline from '@/components/about/MilestonesTimeline';
import GlobalFootprint from '@/components/about/GlobalFootprint';

export const metadata = {
  title: 'About Us — Raydrim Digital Agency',
  description:
    'Discover Raydrim’s mission, global engineering leadership, core values, and company timeline in delivering enterprise software.',
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
