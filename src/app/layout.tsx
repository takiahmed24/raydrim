import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://raydrim.com'),
  title: {
    default: 'Raydrim — Full-Stack Web, Mobile & Software Development',
    template: '%s | Raydrim',
  },
  description:
    'Raydrim builds production-grade web applications, Shopify e-commerce stores, mobile apps, and custom software built with Next.js, React, and TypeScript.',
  keywords: [
    'Web Development',
    'Next.js Studio',
    'React Developer',
    'TypeScript Developer',
    'Shopify E-Commerce',
    'Mobile App Development',
    'Software Consulting',
    'Dhaka Developer',
  ],
  authors: [{ name: 'Muhammad Taki Ahmed', url: 'https://raydrim.com' }],
  creator: 'Muhammad Taki Ahmed',
  publisher: 'Raydrim',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raydrim.com',
    siteName: 'Raydrim',
    title: 'Raydrim — Full-Stack Web, Mobile & Software Development',
    description:
      'High-performance Next.js web applications, Shopify e-commerce, and mobile app development by Muhammad Taki Ahmed.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Raydrim Digital Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raydrim — Full-Stack Web & Software Development Studio',
    description:
      'Production Next.js web apps, Shopify e-commerce, and mobile app engineering.',
    creator: '@takiahmed24',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Raydrim',
    legalName: 'Raydrim Digital Agency',
    founder: 'Muhammad Taki Ahmed',
    url: 'https://raydrim.com',
    logo: 'https://raydrim.com/logo.svg',
    description:
      'Raydrim builds high-performance web applications, mobile apps, e-commerce stores, and digital products.',
    email: 'muhammadtakiahmed@icloud.com',
    telephone: '+8801873691022',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dhaka-1230',
      addressLocality: 'Dhaka',
      postalCode: '1230',
      addressCountry: 'BD',
    },
    sameAs: [
      'https://x.com/takiahmed24',
      'https://www.linkedin.com/in/muhammad-taki-ahmed-49059b426',
      'https://github.com/takiahmed24',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'muhammadtakiahmed@icloud.com',
      telephone: '+8801873691022',
      contactType: 'customer support',
    },
  };

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Raydrim',
    url: 'https://raydrim.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://raydrim.com/blog?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-4263728957042690" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                var consent = localStorage.getItem('raydrim_cookie_consent');
                if (consent === 'denied') {
                  (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
                }
              }
            `,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4263728957042690"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
