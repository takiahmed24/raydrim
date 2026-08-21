import { PricingTier } from '@/types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter-site',
    whopPlanId: 'plan_xH1Qhgqu2dQjS',
    name: 'Starter Site',
    price: '$149',
    period: 'one-time / project',
    description: 'Fast 1-page responsive website in Next.js. Custom design, contact form, Lighthouse 90+ speed pass, deployed live with full source code.',
    timeline: '3-Day Delivery · 2 Revisions',
    idealFor: 'Small businesses, landing pages & quick online presence',
    popular: false,
    ctaText: 'Order Starter Site ($149)',
    features: [
      'Custom 1-Page Responsive Site (Next.js)',
      'Contact Form Wired to Email',
      'Lighthouse 90+ Performance Pass',
      'Deployed Live (Vercel / AWS)',
      '100% Full Source Code Ownership',
    ],
  },
  {
    id: 'business-site',
    whopPlanId: 'plan_qvX8VgKjnZrkE',
    name: 'Business Website',
    price: '$449',
    period: 'one-time / project',
    description: 'Complete multi-page business website built with Next.js and TypeScript. Up to 8 pages, mobile-first responsive, SEO metadata, sitemap & contact form.',
    timeline: '7-Day Delivery · 3 Revisions',
    idealFor: 'Growing businesses needing complete multi-page websites',
    popular: false,
    ctaText: 'Order Business Site ($449)',
    features: [
      'Up to 8 Pages in Next.js & TypeScript',
      'Mobile-First Responsive UI/UX',
      'SEO Metadata + Sitemap + JSON-LD',
      'Contact Form & API Route Integration',
      'Deploy to Vercel or AWS + Source Code',
    ],
  },
  {
    id: 'shopify-launch',
    whopPlanId: 'plan_fH1YRCj3k1Ak2',
    name: 'Shopify Launch',
    price: '$249',
    period: 'one-time / project',
    description: 'Complete Shopify store setup and launch. Theme customization, brand colors, up to 20 products, payments & shipping configured with ownership transfer.',
    timeline: '5-Day Delivery · 2 Revisions',
    idealFor: 'New e-commerce brands & merchants launching on Shopify',
    popular: false,
    ctaText: 'Launch Shopify Store ($249)',
    features: [
      'Theme Setup & Brand Color Customization',
      'Up to 20 Products Configured',
      'Payment Gateways & Shipping Setup',
      'Mobile-Optimized Storefront Design',
      'Full Store Ownership Transfer',
    ],
  },
  {
    id: 'shopify-growth',
    whopPlanId: 'plan_aPR516B4gx65m',
    name: 'Shopify Growth',
    price: '$549',
    period: 'one-time / project',
    description: 'Custom Shopify store design with conversion-focused sections. Everything in Launch plus custom homepage & product sections, up to 100 products, app integrations & speed pass.',
    timeline: '10-Day Delivery · 3 Revisions',
    idealFor: 'Scaling e-commerce brands wanting higher conversion rates',
    popular: true,
    badge: 'Most Popular',
    ctaText: 'Order Shopify Growth ($549)',
    features: [
      'Everything in Shopify Launch included',
      'Custom Homepage & Product Page Sections',
      'Up to 100 Products Catalog Setup',
      'App Integrations & Storefront Speed Pass',
      'Email Capture & Sales Conversion Triggers',
    ],
  },
  {
    id: 'shopify-prestige',
    whopPlanId: 'plan_r8eroaYMbcvJh',
    name: 'Shopify Prestige',
    price: '$1,295',
    period: 'one-time / project',
    description: 'Premium custom Shopify storefront with CRO and launch planning. Full custom UI/UX, advanced integrations, cart/checkout optimization, launch checklist & 30 days support.',
    timeline: '14-Day Delivery · 4 Revisions',
    idealFor: 'Established brands building bespoke Shopify shopping experiences',
    popular: false,
    ctaText: 'Order Shopify Prestige ($1,295)',
    features: [
      'Full Custom UI/UX Storefront Design',
      'Advanced App & Third-Party API Integrations',
      'Conversion-Rate Pass on Cart & Checkout',
      'Launch Checklist & Performance Audit',
      '30 Days Post-Launch Support & Bug Fixes',
    ],
  },
  {
    id: 'app-converter',
    whopPlanId: 'plan_tBbLMBeZM2Lk4',
    name: 'Website to App (WebView)',
    price: '$299',
    period: 'one-time / project',
    description: 'Convert your existing website or store into Android and iOS mobile apps. Custom app icon, splash screen, push notification config, store submission files & source code.',
    timeline: '5-Day Delivery · 2 Revisions',
    idealFor: 'Website owners wanting fast mobile app presence',
    popular: false,
    ctaText: 'Convert Website to App ($299)',
    features: [
      'Dual Platform (Android & iOS WebView)',
      'Custom App Icon & Splash Screen Design',
      'Push Notification Config Ready',
      'Store-Submission Ready Binary Files',
      '100% Full Source Code Included',
    ],
  },
  {
    id: 'cross-platform-app',
    whopPlanId: 'plan_mv5KyZPPygZUq',
    name: 'Cross-Platform Mobile App',
    price: '$999',
    period: 'one-time / project',
    description: 'Custom mobile application built in React Native & Expo for Android and iOS. Up to 6 screens, API integration, native performance & store-ready builds.',
    timeline: '3-Week Delivery · 3 Revisions',
    idealFor: 'Startups & businesses needing dedicated mobile apps',
    popular: false,
    badge: 'Native Mobile',
    ctaText: 'Build Mobile App ($999)',
    features: [
      'React Native & Expo Cross-Platform Code',
      'Up to 6 Custom Mobile Screens',
      'Android & iOS Production Builds',
      'REST API & Firebase Backend Integration',
      'Store-Ready Binaries & Source Code',
    ],
  },
  {
    id: 'custom-app',
    whopPlanId: 'plan_wus94g49qvUV7',
    name: 'Custom Web App / Custom Scope',
    price: 'from $2,499',
    period: 'bespoke project',
    description: 'Full custom web application or complex software platform built to your exact specification. Discovery call first, fixed quote, milestone payments, full source code.',
    timeline: 'Quoted Scope · Milestone Payments',
    idealFor: 'Complex SaaS platforms, custom portals & enterprise software',
    popular: false,
    ctaText: 'Request Custom Quote ($2,499+)',
    features: [
      'Discovery & Architecture Call',
      'Fixed-Price Quote & Milestone Payments',
      'Custom Next.js, Node & React Stack',
      'Database Architecture & API Integration',
      '100% Full Source Code & 30-Day Support',
    ],
  },
];

export interface MatrixGroup {
  category: string;
  rows: {
    feature: string;
    starter: string | boolean;
    growth: string | boolean;
    enterprise: string | boolean;
  }[];
}

export const FEATURE_MATRIX: MatrixGroup[] = [
  {
    category: 'Deliverables & Code',
    rows: [
      { feature: 'Full Source Code Ownership', starter: true, growth: true, enterprise: true },
      { feature: 'Production Build & Deployment', starter: true, growth: true, enterprise: true },
      { feature: 'Responsive Mobile UI', starter: true, growth: true, enterprise: true },
      { feature: 'SEO & Meta Tags Setup', starter: 'Basic', growth: 'Advanced', enterprise: 'Full Optimization' },
    ],
  },
  {
    category: 'Support & Revision SLA',
    rows: [
      { feature: 'Included Revisions', starter: '2 Revisions', growth: '3 Revisions', enterprise: '4 Revisions / Unlimited' },
      { feature: 'Post-Launch Bug Fixes', starter: '7 Days', growth: '14 Days', enterprise: '30 Days' },
      { feature: 'Response SLA Time', starter: '< 24 Hours', growth: '< 24 Hours', enterprise: 'Priority (< 24 Hours)' },
      { feature: 'Direct Developer Access', starter: true, growth: true, enterprise: true },
    ],
  },
];

export const PRICING_FAQS = [
  {
    question: 'How do payment terms and supported payment methods work?',
    answer: 'I support flexible global and local payment options! You can pay via Payoneer, Wise, Credit/Debit Cards (Visa, Mastercard, AMEX), US Direct ACH Bank Transfer, or local Bangladesh options including bKash, Nagad, and Rocket. For fixed packages, 50% upfront and 50% upon final delivery is standard, or 100% upfront via Whop checkout.',
  },
  {
    question: 'Do I get full ownership of the source code?',
    answer: 'Yes! On every project — from a $149 starter site to a $2,499+ custom web app — you receive 100% full source code ownership and repository access upon final delivery.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'I offer a 100% money-back guarantee if you cancel before project work begins. If cancelled mid-project, unstarted milestone portions are refunded. Once final source code is delivered, refunds cannot be issued as digital code cannot be un-sent.',
  },
  {
    question: 'Can you publish my app to the Google Play Store or Apple App Store?',
    answer: 'Yes! For both Website-to-App ($299) and Cross-Platform ($999) packages, I generate all store-ready binaries (APK/AAB for Android, IPA for iOS) and can publish directly to your developer account upon request.',
  },
];
