import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies',
  description:
    'Explore Raydrim’s curated portfolio of high-converting web applications, mobile apps, headless e-commerce stores, and cloud architectures.',
  alternates: {
    canonical: 'https://raydrim.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio & Case Studies | Raydrim Digital Agency',
    description:
      'Explore Raydrim’s curated portfolio of high-converting web applications, mobile apps, headless e-commerce stores, and cloud architectures.',
    url: 'https://raydrim.com/portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio & Case Studies | Raydrim Digital Agency',
    description:
      'Explore Raydrim’s curated portfolio of high-converting web applications, mobile apps, headless e-commerce stores, and cloud architectures.',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
