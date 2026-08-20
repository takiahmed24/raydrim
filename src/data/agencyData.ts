import { ServiceItem, PortfolioProject, Testimonial, StatItem } from '@/types';

export interface ClientLogo {
  name: string;
  category: string;
  symbol: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  skills: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  badge: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  timezone: string;
  coordinates: { x: number; y: number };
  isHQ?: boolean;
}

export interface ServiceVerticalDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  capabilities: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'cloud';
  icon: string;
  level: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// ─── Founder Profile (replaces fake TEAM_MEMBERS) ───
export const FOUNDER_PROFILE: TeamMember = {
  id: 'muhammad-taki-ahmed',
  name: 'Muhammad Taki Ahmed',
  role: 'Founder & Software Developer',
  bio: 'Full-stack software developer based in Dhaka, Bangladesh. I build fast, production-grade web applications with Next.js, React, and TypeScript — and ship real products to real users.',
  avatar: '/logo.svg',
  socials: {
    github: 'https://github.com/takiahmed24',
    linkedin: 'https://linkedin.com/in/takiahmed24',
  },
  skills: ['Next.js', 'React', 'TypeScript', 'Shopify', 'AWS', 'Mobile Apps'],
};

// ─── Honest Home Stats ───
export const HOME_STATS: StatItem[] = [
  {
    value: 2,
    suffix: '+',
    label: 'Projects Shipped',
    description: 'Live, production web applications deployed and running.',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Code Ownership',
    description: 'Every client gets full source code and repository access.',
  },
  {
    value: 6,
    suffix: '',
    label: 'Service Areas',
    description: 'Web apps, e-commerce, mobile, cloud, design & e-books.',
  },
  {
    value: 48,
    suffix: 'hr',
    prefix: '<',
    label: 'Response Time',
    description: 'All inquiries responded to within two business days.',
  },
];

// ─── Real Featured Projects ───
export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    id: 'campus-dude',
    title: 'Campus Dude — Browser Games Platform',
    slug: 'campus-dude',
    client: 'Personal Project',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    description:
      'A free browser games platform built for students — 22 handcrafted games with zero logins, zero installs, and instant loading between classes.',
    summary: 'Full-stack web application featuring real-time gameplay, responsive design, SEO optimization, and Google AdSense integration.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Game Development'],
    metrics: [
      { label: 'Games Built', value: '22' },
      { label: 'Login Required', value: 'Zero' },
    ],
    featured: true,
  },
  {
    id: 'raydrim-agency',
    title: 'Raydrim — Digital Agency Website',
    slug: 'raydrim-agency',
    client: 'Raydrim (Own Brand)',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    description:
      'A high-performance agency website built with Next.js 16, TypeScript, CSS Modules, and Framer Motion — featuring editorial design, full SEO, and structured data.',
    summary: 'Production Next.js application with 28 static pages, JSON-LD schemas, and sub-second load times.',
    tags: ['Next.js 16', 'TypeScript', 'CSS Modules', 'Framer Motion', 'SEO'],
    metrics: [
      { label: 'Static Pages', value: '28' },
      { label: 'Build Time', value: '<4s' },
    ],
    featured: true,
  },
];

// ─── Honest Milestones ───
export const MILESTONES: Milestone[] = [
  {
    year: '2025',
    title: 'Started Building',
    description: 'Began learning full-stack web development with JavaScript, React, and Node.js. Built early projects to sharpen skills.',
    badge: 'Foundation',
  },
  {
    year: '2026',
    title: 'Launched Campus Dude',
    description: 'Shipped campusdude.site — a free browser games platform for students with 22 handcrafted games, responsive design, and AdSense integration.',
    badge: 'First Product',
  },
  {
    year: '2026',
    title: 'Launched Raydrim',
    description: 'Built and deployed raydrim.com as a professional digital studio — offering web development, e-commerce, mobile apps, and software consulting services.',
    badge: 'Agency Launch',
  },
  {
    year: '2026',
    title: 'Expanding Services',
    description: 'Growing into Shopify development, Google Play Books publishing, and cross-platform mobile app engineering with React Native.',
    badge: 'Growth',
  },
];

// ─── Single Office Location (Real) ───
export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: 'Dhaka',
    country: 'Bangladesh',
    address: 'Dhaka-1230',
    timezone: 'BST (UTC+6)',
    coordinates: { x: 72, y: 48 },
    isHQ: true,
  },
];

// ─── Service Verticals (Real capabilities, honest metrics) ───
export const SERVICE_VERTICALS: ServiceVerticalDetail[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development & Architecture',
    subtitle: 'Next.js, React, TypeScript & Modern Web Standards',
    description:
      'I build fast, production-grade web applications using Next.js and TypeScript. Every project is optimized for performance, SEO, and clean code architecture.',
    iconName: 'Code',
    capabilities: [
      'Next.js App Router & React Server Components',
      'Progressive Web Apps (PWA) & Offline Support',
      'Core Web Vitals & Lighthouse Optimization',
      'Headless CMS Integration (Sanity, Strapi, Contentful)',
      'Custom Design Systems & CSS Modules',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'CSS Modules', 'Framer Motion', 'GraphQL'],
    metrics: [
      { label: 'Target Page Load', value: '< 1s' },
      { label: 'Lighthouse Target', value: '90+' },
    ],
    deliverables: [
      'Full Source Code Repository',
      'Deployment to Vercel / AWS',
      'SEO & Performance Audit',
      'Technical Documentation',
    ],
  },
  {
    id: 'software-consulting',
    slug: 'software-consulting',
    title: 'Software Consulting & Cloud',
    subtitle: 'Cloud Architecture, DevOps & Technical Strategy',
    description:
      'I help businesses plan and build cloud-native architectures, set up CI/CD pipelines, and make smart infrastructure decisions that scale without wasting money.',
    iconName: 'Cpu',
    capabilities: [
      'AWS Cloud Architecture & Infrastructure Planning',
      'CI/CD Pipeline Setup with GitHub Actions',
      'Docker Containerization & Deployment',
      'Database Design (PostgreSQL, MongoDB)',
      'Code Review & Technical Audit',
    ],
    techStack: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Python', 'Node.js'],
    metrics: [
      { label: 'Deployment', value: 'Automated' },
      { label: 'Infrastructure', value: 'AWS / Vercel' },
    ],
    deliverables: [
      'Architecture Blueprint',
      'CI/CD Pipeline Configuration',
      'Infrastructure Setup',
      'Technical Recommendations Report',
    ],
  },
  {
    id: 'ecommerce-solutions',
    slug: 'ecommerce-solutions',
    title: 'E-Commerce Solutions',
    subtitle: 'Shopify, Headless Commerce & Payment Integration',
    description:
      'I build high-converting online stores using Shopify and headless commerce architectures. From product pages to checkout flows, every element is optimized for sales.',
    iconName: 'ShoppingBag',
    capabilities: [
      'Shopify Store Setup & Theme Customization',
      'Headless Shopify with Next.js Storefronts',
      'Stripe, bKash & Multi-Currency Payment Integration',
      'Product Catalog & Inventory Management',
      'Conversion Rate Optimization & A/B Testing',
    ],
    techStack: ['Shopify', 'Hydrogen', 'Stripe API', 'Next.js', 'Tailwind', 'GraphQL'],
    metrics: [
      { label: 'Checkout', value: 'Optimized' },
      { label: 'Payments', value: 'Multi-Currency' },
    ],
    deliverables: [
      'Complete Shopify Store',
      'Custom Theme or Headless Storefront',
      'Payment Gateway Integration',
      'Product Upload & Configuration',
    ],
  },
  {
    id: 'creative-studio',
    slug: 'creative-studio',
    title: 'Creative Studio & UI/UX',
    subtitle: 'Brand Identity, UI Design & Motion Graphics',
    description:
      'I craft clean, modern visual designs and brand identities. From design tokens and component libraries to smooth Framer Motion animations, every detail is intentional.',
    iconName: 'Palette',
    capabilities: [
      'Brand Identity & Visual Design Guidelines',
      'Product UI/UX Design & Interactive Prototypes',
      'Responsive Design Systems & Component Libraries',
      'Framer Motion & CSS Animations',
      'Design Token Architecture',
    ],
    techStack: ['Figma', 'Framer Motion', 'CSS Modules', 'Tailwind', 'Adobe Suite'],
    metrics: [
      { label: 'Design Approach', value: 'Mobile-First' },
      { label: 'Prototyping', value: 'Interactive' },
    ],
    deliverables: [
      'Figma Design Files',
      'Brand Style Guide',
      'Component Library',
      'Design Token Package',
    ],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile & App Store Engineering',
    subtitle: 'React Native, Expo & Google Play Store Publishing',
    description:
      'I build cross-platform mobile applications for iOS and Android using React Native. From development to App Store submission, I handle the full lifecycle.',
    iconName: 'Smartphone',
    capabilities: [
      'iOS & Android Cross-Platform Development',
      'App Store & Google Play Store Submission',
      'In-App Purchases & Subscription Setup',
      'Push Notifications & Offline Storage',
      'React Native, Expo & Flutter Development',
    ],
    techStack: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase', 'RevenueCat'],
    metrics: [
      { label: 'Platforms', value: 'iOS + Android' },
      { label: 'Framework', value: 'React Native' },
    ],
    deliverables: [
      'App Store & Play Store Submissions',
      'Full Native Source Code',
      'In-App Purchase Integration',
      'Push Notification Setup',
    ],
  },
  {
    id: 'digital-ebooks-products',
    slug: 'digital-ebooks-products',
    title: 'Digital E-Books & Publishing',
    subtitle: 'Technical E-Books, Google Play Books & Digital Products',
    description:
      'I write, format, and publish technical e-books and digital guides to Google Play Books, Apple Books, and direct marketplaces like Whop and Gumroad.',
    iconName: 'BookOpen',
    capabilities: [
      'Technical E-Book Writing & Editing',
      'Google Play Books & Apple Books Publishing',
      'PDF, ePub & Kindle Formatting',
      'Digital Product Storefront Setup',
      'Code Companion Repositories',
    ],
    techStack: ['Google Play Books', 'Markdown', 'PDF / ePub', 'Stripe', 'Next.js'],
    metrics: [
      { label: 'Formats', value: 'PDF + ePub' },
      { label: 'Distribution', value: 'Global' },
    ],
    deliverables: [
      'Google Play Books Listing',
      'PDF & ePub Master Files',
      'Source Code Companion',
      'Marketing Landing Page',
    ],
  },
];

// ─── 4-Step Delivery Process (Solo Developer) ───
export const DELIVERY_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Planning',
    subtitle: 'Understanding your goals & setting the roadmap',
    description:
      'I start with a detailed conversation to understand your business objectives, target audience, and technical requirements. We define the project scope, timeline, and deliverables together.',
    deliverables: ['Project Scope Document', 'Technical Requirements', 'Timeline & Milestones'],
  },
  {
    number: '02',
    title: 'Design & Wireframing',
    subtitle: 'Visualizing the solution before building',
    description:
      'I create wireframes and interactive prototypes so you can see exactly what your product will look like before a single line of code is written. We iterate until you are fully satisfied.',
    deliverables: ['Wireframe Prototypes', 'Design Mockups', 'User Flow Diagrams'],
  },
  {
    number: '03',
    title: 'Development & Testing',
    subtitle: 'Building production-grade code',
    description:
      'I build the solution using clean, well-documented code with regular progress updates. You get access to a staging environment to review and test as the project takes shape.',
    deliverables: ['Clean Source Code', 'Staging Preview', 'Progress Updates'],
  },
  {
    number: '04',
    title: 'Launch & Handoff',
    subtitle: 'Deploying and transferring full ownership',
    description:
      'I deploy your project to production, transfer the complete source code and credentials, and provide post-launch support to ensure everything runs smoothly.',
    deliverables: ['Production Deployment', 'Full Source Code Transfer', 'Post-Launch Support'],
  },
];

// ─── Tech Stack (Real skills — keeping as-is) ───
export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: 'Next.js', category: 'frontend', icon: '⚡', level: 'Core Framework' },
  { name: 'React', category: 'frontend', icon: '⚛️', level: 'UI Library' },
  { name: 'TypeScript', category: 'frontend', icon: '📘', level: 'Type Safety' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '🎨', level: 'Styling' },
  { name: 'Framer Motion', category: 'frontend', icon: '✨', level: 'Animations' },
  { name: 'HTML5 Canvas', category: 'frontend', icon: '🎮', level: 'Game Dev' },

  // Backend
  { name: 'Node.js', category: 'backend', icon: '🟩', level: 'Runtime' },
  { name: 'Python', category: 'backend', icon: '🐍', level: 'Scripting & AI' },
  { name: 'PostgreSQL', category: 'backend', icon: '🐘', level: 'Database' },
  { name: 'MongoDB', category: 'backend', icon: '🍃', level: 'NoSQL' },
  { name: 'REST APIs', category: 'backend', icon: '📡', level: 'API Design' },
  { name: 'GraphQL', category: 'backend', icon: '🔗', level: 'Query Language' },

  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', icon: '☁️', level: 'Cloud Provider' },
  { name: 'Docker', category: 'cloud', icon: '🐳', level: 'Containers' },
  { name: 'Vercel', category: 'cloud', icon: '▲', level: 'Edge Hosting' },
  { name: 'GitHub Actions', category: 'cloud', icon: '⚙️', level: 'CI/CD' },
  { name: 'AWS Amplify', category: 'cloud', icon: '📦', level: 'Deployment' },
  { name: 'Shopify', category: 'cloud', icon: '🛍️', level: 'E-Commerce' },
];

// ─── Service FAQs (Honest, solo-dev perspective) ───
export const SERVICE_FAQS: FAQItem[] = [
  {
    question: 'How quickly can you start a new project?',
    answer:
      'I can typically start within 3 to 5 business days of finalizing the project scope and receiving the initial deposit.',
    category: 'Timeline',
  },
  {
    question: 'What are your pricing and payment options?',
    answer:
      'I offer fixed-price project quotes based on scope and complexity. Payment is split into milestones — typically 50% upfront and 50% on delivery. I accept bank transfer, bKash, Payoneer, and international wire.',
    category: 'Pricing',
  },
  {
    question: 'Do I own the source code after the project?',
    answer:
      'Yes, 100%. Upon project completion and final payment, you receive the complete source code, design files, credentials, and deployment access. I retain no ownership.',
    category: 'Ownership',
  },
  {
    question: 'What happens if I need changes after launch?',
    answer:
      'Every project includes a post-launch support window for bug fixes and minor adjustments. For ongoing work, I offer monthly retainer packages at discounted rates.',
    category: 'Support',
  },
  {
    question: 'Can you work with non-technical clients?',
    answer:
      'Absolutely. I specialize in translating business ideas into clear technical plans. You describe what you need, and I handle the architecture, design, and engineering.',
    category: 'Process',
  },
];
