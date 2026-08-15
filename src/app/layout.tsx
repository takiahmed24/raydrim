import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
  title: 'Raydrim — Premium Digital Agency, Mobile Apps & Software House',
  description:
    'Raydrim builds high-performance web applications, iOS & Google Play Store mobile apps, technical e-books, and AI integrations for visionary global clients.',
  keywords: [
    'Digital Agency',
    'Next.js Development',
    'Google Play Store App Development',
    'iOS App Development',
    'Technical E-Books & Software Guides',
    'AI Solutions',
    'Web Design',
    'Software House',
    'Raydrim',
  ],
  authors: [{ name: 'Raydrim Team' }],
  openGraph: {
    title: 'Raydrim — Premium Digital Agency & Software House',
    description:
      'Raydrim builds high-performance web applications, AI integrations, and luxury brand experiences.',
    url: 'https://raydrim.com',
    siteName: 'Raydrim',
    type: 'website',
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
    logo: 'https://raydrim.com/logo.png',
    description:
      'Raydrim builds high-performance web applications, AI integrations, and luxury brand experiences for visionary global clients.',
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
      </body>
    </html>
  );
}
