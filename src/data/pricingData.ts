import { PricingTier } from '@/types';

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'micro',
    name: 'Micro / Rapid Launch',
    price: '$299',
    period: 'one-time / project',
    description: 'Ultra-affordable entry tier ideal for small business landing pages, portfolio sites, bug fixes, or quick speed audits.',
    timeline: '1 – 3 Days Delivery',
    idealFor: 'Small businesses, freelancers & quick MVP landing pages',
    popular: false,
    badge: 'Most Affordable',
    ctaText: 'Get Started ($299)',
    features: [
      'Custom 1-Page High-Conversion Landing Page',
      'Mobile-Responsive UI Design',
      'Speed & Performance Tuning (Lighthouse 90+)',
      'Contact Form & API Integration',
      'Payment Setup (bKash, Nagad, Card, ACH, Payoneer)',
      '7-Day Post-Launch Bug-Fix Guarantee',
      '100% Full Source Code Ownership',
    ],
  },
  {
    id: 'starter',
    name: 'Web & E-Commerce + WebView',
    price: '$999',
    period: 'one-time / project',
    description: 'Complete multi-page website or Shopify e-commerce store with built-in Website-to-App WebView conversion.',
    timeline: '1 – 2 Weeks Delivery',
    idealFor: 'Growing businesses, Shopify stores & hybrid web-to-app conversions',
    popular: false,
    ctaText: 'Launch Web & E-Com',
    features: [
      'Bespoke Next.js Web Architecture or Shopify Store',
      'Up to 5 Custom High-Conversion Pages',
      'Shopify / Stripe Payment & Product Catalog Integration',
      'Website-to-App Conversion (Android APK via WebView)',
      'Full SEO & Performance Optimization',
      'Contact Form & API Route Integration',
      '14-Day Post-Launch Support & Bug Fixes',
      'Full Source Code & Repository Access',
    ],
  },
  {
    id: 'mobile-app',
    name: 'Standalone Mobile App / Game',
    price: '$999 / $1,999',
    period: 'one-time / project',
    description: 'Dedicated mobile app or game build. $999 for a single platform (Android or iOS), or $1,999 for dual platforms (Android + iOS).',
    timeline: '2 – 3 Weeks Delivery',
    idealFor: 'Startups, developers & creators needing Android/iOS apps or games',
    popular: true,
    badge: 'Dedicated Mobile',
    ctaText: 'Build Mobile App',
    features: [
      'Single Platform (Android or iOS): $999',
      'Dual Platform (Android + iOS): $1,999',
      'React Native / Expo or HTML5 Canvas Game Architecture',
      'Native Mobile UI/UX & Smooth 60fps Animations',
      'Full Source Code & Ready-to-Publish Binary Handoff',
      'Optional Google Play & Apple App Store Publishing Included',
      'Push Notifications & Firebase / Database Integration',
      'In-App Purchases & Monetization Architecture',
      '30-Day Post-Launch Support & Bug Fixes',
    ],
  },
  {
    id: 'enterprise',
    name: 'Custom / Enterprise',
    price: '$7,500+',
    period: 'bespoke retainer or project',
    description: 'Bespoke multi-platform ecosystem combining Web, Mobile Apps, Desktop Apps (PC/Mac), AI workflows, and Cloud Infrastructure.',
    timeline: 'Custom Agile Sprints',
    idealFor: 'Complex platforms, PC/Mac desktop apps, AI & enterprise scaling',
    popular: false,
    badge: 'Full Ecosystem',
    ctaText: 'Contact for Custom Scope',
    features: [
      'Everything in Web & Mobile App Tiers included',
      'Desktop App Development (Electron for Windows PC & Mac)',
      'Native iOS (Swift) / Android (Kotlin) / React Native',
      'Custom LLM / AI Workflow & RAG Integration',
      'Scalable Cloud Architecture (AWS / Cloudflare / Vercel)',
      'High-Concurrency Database & Microservice APIs',
      'Security Hardening & Data Compliance',
      'Direct Priority Communication Channel',
      'Extended 90-Day Post-Launch Support & Retainer',
    ],
  },
];

export interface MatrixRow {
  feature: string;
  starter: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
  tooltip?: string;
}

export interface MatrixCategory {
  category: string;
  rows: MatrixRow[];
}

export const FEATURE_MATRIX: MatrixCategory[] = [
  {
    category: 'Core Deliverables',
    rows: [
      { feature: 'Custom Next.js & TypeScript Codebase', starter: true, growth: true, enterprise: true },
      { feature: 'Responsive Pages Included', starter: 'Up to 5', growth: 'Up to 15', enterprise: 'Unlimited' },
      { feature: 'Design System & Style Tokens', starter: 'Standard', growth: 'Custom Tokenized System', enterprise: 'Full Multi-Brand Tokens' },
      { feature: 'Headless CMS Integration', starter: false, growth: 'Sanity / Strapi / Contentful', tooltip: 'Included', enterprise: 'Custom Headless Architecture' },
      { feature: 'E-Commerce Core (Shopify/Stripe)', starter: 'Stripe Checkout', growth: 'Full Shopify Headless / Stripe', enterprise: 'Multi-Currency Custom Engine' },
      { feature: 'AI Integration & LLM Agents', starter: false, growth: 'Basic API Integration', enterprise: 'Custom LLM / Fine-Tuned Agents' },
    ],
  },
  {
    category: 'Mobile & App Development',
    rows: [
      { feature: 'Website-to-App Conversion (WebView APK)', starter: true, growth: true, enterprise: true, tooltip: 'Wraps your website into a native Android APK' },
      { feature: 'React Native / Expo Mobile App', starter: false, growth: 'Android + iOS', enterprise: 'Full Native + Custom Features' },
      { feature: 'Google Play Store Submission', starter: false, growth: true, enterprise: true },
      { feature: 'Apple App Store Submission', starter: false, growth: true, enterprise: true },
      { feature: 'Desktop App (Electron / PC / Mac)', starter: false, growth: false, enterprise: true },
      { feature: 'In-App Purchases & Subscriptions', starter: false, growth: false, enterprise: 'RevenueCat / StoreKit' },
    ],
  },
  {
    category: 'Performance & Engineering Standards',
    rows: [
      { feature: 'Lighthouse Performance Score Target', starter: '90+', growth: '95+', enterprise: '99+' },
      { feature: 'Edge Caching & CDN Distribution', starter: true, growth: true, enterprise: true },
      { feature: 'Global Sub-Second Latency Optimization', starter: true, growth: true, enterprise: true },
      { feature: 'Uptime & High Availability', starter: 'Standard', growth: 'Enhanced', enterprise: 'High Availability' },
    ],
  },
  {
    category: 'Code Ownership & Security',
    rows: [
      { feature: '100% IP & Source Code Ownership', starter: true, growth: true, enterprise: true },
      { feature: 'Private Git Repository Handoff', starter: true, growth: true, enterprise: true },
      { feature: 'Compliance-Ready Architecture', starter: false, growth: 'Optional Add-on', enterprise: 'Included' },
      { feature: 'Security Audit & Vulnerability Review', starter: false, growth: true, enterprise: 'Comprehensive Testing' },
    ],
  },
  {
    category: 'Support & Communication',
    rows: [
      { feature: 'Post-Launch Warranty Period', starter: '14 Days', growth: '30 Days', enterprise: '90 Days / Retainer' },
      { feature: 'Response SLA Time', starter: '< 24 Hours', growth: '< 24 Hours', enterprise: 'Priority (< 24 Hours)' },
      { feature: 'Direct Communication with Developer', starter: 'Email / Async', growth: 'Direct Slack / Messaging', enterprise: 'Priority Direct Access' },
      { feature: 'Slack / Dedicated Channel', starter: false, growth: true, enterprise: 'Priority Direct Channel' },
    ],
  },
];

export const PRICING_FAQS = [
  {
    question: 'How do payment terms and supported payment methods work?',
    answer: 'I support flexible global and local payment options! You can pay via Payoneer, Wise, Credit/Debit Cards (Visa, Mastercard, AMEX), US Direct ACH Bank Transfer (via nSave / Routing), or local Bangladesh options including bKash, Nagad, and Rocket. For Micro ($299) and Starter ($999) plans, 50% upfront and 50% upon final delivery is standard.',
  },
  {
    question: 'What happens if we need design revisions during development?',
    answer: 'All tiers include structured revision cycles! Starter includes 2 rounds of design feedback, Growth includes 4 rounds, and Custom includes iterative milestone reviews with full flexibility.',
  },
  {
    question: 'Do I own the source code and intellectual property?',
    answer: 'Absolutely 100%. Upon final project settlement, all intellectual property, design assets, GitHub repositories, and deployment configurations belong entirely to your company without any recurring licensing fees.',
  },
  {
    question: 'Where will our project be hosted?',
    answer: 'I deploy primarily to top-tier cloud infrastructure such as Vercel, AWS, or Cloudflare. I assist you in setting up your own hosting organization so you retain complete control over your cloud accounts.',
  },
  {
    question: 'What kind of support is included post-launch?',
    answer: 'Every plan includes a post-launch warranty period (14 days for Starter, 30 days for Growth, 90+ days for Custom) covering bug fixes, security patches, and deployment checks. Monthly retainer plans are also available for ongoing feature additions.',
  },
  {
    question: 'Can we start with Starter and upgrade to Growth later?',
    answer: 'Yes! All Raydrim codebases are modular and scalable by design. Expanding your platform from Starter to Growth or adding AI integrations down the road is seamless and cost-effective.',
  },
  {
    question: 'How do you ensure security and code quality?',
    answer: 'I enforce zero-trust security standards, encrypted data in transit (TLS 1.3) and at rest (AES-256), strict Content Security Policies (CSP), and automated vulnerability scanning across dependencies.',
  },
  {
    question: 'Can you convert my existing website into an Android or iOS app?',
    answer: 'Yes! I offer quick Website-to-App conversion. For simple requirements, I can convert your responsive website into a native Android APK / AAB bundle using WebView wrappers starting with the Starter plan. For full native performance, I build cross-platform apps using React Native and Expo.',
  },
  {
    question: 'How does pricing work for mobile apps and games (Android vs iOS)?',
    answer: 'I charge $999 for a single platform build (Android OR iOS) and $1,999 for dual platform builds (Android AND iOS). You receive full source code and ready-to-publish app binaries (.apk/.aab/.ipa). If you want me to publish the app to Google Play Store / Apple App Store for you, I will handle the submission for free; otherwise, I hand over all project assets directly so you can publish it yourself.',
  },
  {
    question: 'What is the turnaround time to kick off our project after signing?',
    answer: 'Once the deposit is confirmed and initial project requirements are aligned, I can begin discovery and active development within 48 to 72 hours.',
  },
];
