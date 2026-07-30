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

// Client Marquee Logos
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'NexaCorp', category: 'Enterprise Tech', symbol: '⚡' },
  { name: 'VeloceAI', category: 'Artificial Intelligence', symbol: '🧠' },
  { name: 'QuantumPay', category: 'FinTech', symbol: '💎' },
  { name: 'Aetheria', category: 'Luxury E-Commerce', symbol: '✦' },
  { name: 'Lumina Labs', category: 'BioTech & Health', symbol: '🔬' },
  { name: 'CyberPulse', category: 'Cybersecurity', symbol: '🛡️' },
  { name: 'Zenith Tech', category: 'SaaS Platform', symbol: '🚀' },
  { name: 'Apex Cloud', category: 'Infrastructure', symbol: '☁️' },
];

// Home Stats
export const HOME_STATS: StatItem[] = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Enterprise web apps & AI systems deployed globally.',
  },
  {
    value: 99.4,
    suffix: '%',
    prefix: '',
    label: 'Client Satisfaction',
    description: 'Based on post-launch performance & NPS surveys.',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Global Awards',
    description: 'Recognized for UX excellence and technical innovation.',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Dedicated Support',
    description: 'Around-the-clock infrastructure monitoring & SLA.',
  },
];

// Featured Projects
export const FEATURED_PROJECTS: PortfolioProject[] = [
  {
    id: 'aura-fintech',
    title: 'Aura Financial Engine',
    slug: 'aura-fintech',
    client: 'QuantumPay Global',
    category: 'FinTech Architecture',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    description:
      'Ultra-low-latency financial dashboard handling $4.2B in annual transactions with real-time WebSocket streaming.',
    summary: 'High-frequency trading and wealth management web suite built on Next.js 14 & Rust microservices.',
    tags: ['Next.js 14', 'TypeScript', 'WebSockets', 'FinTech'],
    metrics: [
      { label: 'Latency', value: '< 45ms' },
      { label: 'Volume Processed', value: '$4.2B+' },
    ],
    featured: true,
  },
  {
    id: 'kroma-luxury',
    title: 'Kroma Haute Couture',
    slug: 'kroma-luxury',
    client: 'Aetheria Luxury Group',
    category: 'E-Commerce & WebGL',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    description:
      'Immersive luxury shopping experience with interactive 3D product viewports, custom checkout, and global localization.',
    summary: 'Headless Shopify solution delivering 3.4x increase in conversion rate for high-end fashion.',
    tags: ['Shopify Plus', 'Three.js', 'React', 'Tailwind'],
    metrics: [
      { label: 'Conversion Lift', value: '+340%' },
      { label: 'Page Load Speed', value: '0.8s' },
    ],
    featured: true,
  },
  {
    id: 'nexus-ai',
    title: 'Nexus Intelligence Platform',
    slug: 'nexus-ai',
    client: 'VeloceAI Inc.',
    category: 'AI & Automation',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    description:
      'Enterprise LLM orchestration hub empowering multi-agent autonomous workflows and automated document intelligence.',
    summary: 'Custom AI agent interface integrated with vector databases and automated CI/CD pipelines.',
    tags: ['AI Agents', 'Python', 'React', 'FastAPI'],
    metrics: [
      { label: 'Time Saved', value: '65%' },
      { label: 'Accuracy Rate', value: '99.8%' },
    ],
    featured: true,
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'Raydrim transformed our outdated legacy system into a sleek, lightning-fast digital asset. Their engineering precision and aesthetic standards are unmatched.',
    author: 'Victoria Sterling',
    role: 'Chief Technology Officer',
    company: 'QuantumPay Global',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 'test-2',
    quote:
      'Working with Raydrim felt like extending our in-house team with world-class architects. They delivered our AI platform 3 weeks ahead of schedule.',
    author: 'Marcus Vance',
    role: 'VP of Product Engineering',
    company: 'VeloceAI',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 'test-3',
    quote:
      'The Jungle Luxe design identity Raydrim crafted for our e-commerce platform elevated our brand perception instantly. Conversions soared by 340%.',
    author: 'Elena Rostova',
    role: 'Head of Brand Experience',
    company: 'Aetheria Luxury Group',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
];

// Team Members
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'alexander-vance',
    name: 'Alexander Vance',
    role: 'CEO & Founder',
    bio: '15+ years architecting venture-backed software startups and global digital agencies. Passionate about high-speed engineering and luxury UI.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', github: '#' },
    skills: ['Strategy', 'Enterprise Tech', 'Venture Growth'],
  },
  {
    id: 'elena-rostova',
    name: 'Dr. Elena Rostova',
    role: 'Chief Technology Officer',
    bio: 'Former AI Research Lead with a Ph.D. from MIT. Expert in LLM orchestration, high-concurrency microservices, and system resilience.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', github: '#' },
    skills: ['AI Architecture', 'Distributed Systems', 'Rust/Node'],
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Lead UI/UX Designer',
    bio: 'Award-winning design architect specializing in dark luxury design systems, WebGL micro-interactions, and high-converting product interfaces.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', github: '#' },
    skills: ['Design Systems', 'Framer Motion', '3D UI'],
  },
  {
    id: 'sophia-chen',
    name: 'Sophia Chen',
    role: 'Head of Engineering',
    bio: 'Specialist in Next.js Server Components, GraphQL APIs, and frontend performance tuning with a track record of scaling to 10M+ active users.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', github: '#' },
    skills: ['Next.js 14', 'TypeScript', 'Performance Tuning'],
  },
  {
    id: 'liam-oconnor',
    name: 'Liam O\'Connor',
    role: 'Product Strategist',
    bio: 'Expert in bridging technical complexity with commercial product roadmaps. Over 50 successful enterprise product launches.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', github: '#' },
    skills: ['Product Strategy', 'Agile Leadership', 'CRO'],
  },
  {
    id: 'david-miller',
    name: 'David Miller',
    role: 'DevOps & Security Director',
    bio: 'Certified Cloud Architect & Cybersecurity Lead overseeing automated Kubernetes deployment pipelines, zero-trust security, and SOC2 compliance.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    socials: { linkedin: '#', twitter: '#', github: '#' },
    skills: ['AWS / GCP', 'Kubernetes', 'Security Audits'],
  },
];

// Milestones Timeline
export const MILESTONES: Milestone[] = [
  {
    year: '2020',
    title: 'Agency Inception',
    description: 'Raydrim was founded in San Francisco with a vision to merge enterprise software precision with luxury digital aesthetics.',
    badge: 'Foundation',
  },
  {
    year: '2021',
    title: 'AI & Cloud Division',
    description: 'Expanded core services into cloud native architectures and early LLM automation integrations for global tech clients.',
    badge: 'Expansion',
  },
  {
    year: '2022',
    title: 'Global Design Recognition',
    description: 'Awarded International Web Excellence Award and reached 50+ successful client deployments across Europe & US.',
    badge: 'Awards',
  },
  {
    year: '2023',
    title: 'London & Tokyo Studios',
    description: 'Opened regional hubs in London and Tokyo, scaling total team to 40+ senior developers and design leaders.',
    badge: 'Global Growth',
  },
  {
    year: '2024',
    title: '150+ Enterprise Deployments',
    description: 'Crossed 150+ completed client applications with 99.4% satisfaction rating and $50M+ client funding backed by Raydrim tech.',
    badge: 'Scale',
  },
  {
    year: '2025',
    title: 'Next-Gen Agency Standard',
    description: 'Pioneering autonomous AI agent interfaces, headless luxury e-commerce, and sub-second React 19 web frameworks.',
    badge: 'Innovation',
  },
];

// Office Locations
export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '500 Howard Street, Suite 400',
    timezone: 'PST (UTC-8)',
    coordinates: { x: 25, y: 35 },
    isHQ: true,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '25 City Road, Shoreditch',
    timezone: 'GMT (UTC+0)',
    coordinates: { x: 48, y: 28 },
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    address: 'Roppongi Hills Mori Tower, 18F',
    timezone: 'JST (UTC+9)',
    coordinates: { x: 82, y: 38 },
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: 'Marina Bay Financial Centre, T3',
    timezone: 'SGT (UTC+8)',
    coordinates: { x: 75, y: 55 },
  },
];

// Detailed Service Verticals
export const SERVICE_VERTICALS: ServiceVerticalDetail[] = [
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development & Architecture',
    subtitle: 'Next.js, React 19, Server Components & Micro-Frontends',
    description:
      'We craft bespoke, ultra-fast web applications built on Next.js 14 and modern TypeScript standards. Designed for maximum speed, SEO dominance, and fluid user interactions.',
    iconName: 'Code',
    capabilities: [
      'Next.js 14 & React 19 App Router Architecture',
      'Progressive Web Apps (PWA) & Offline Capabilities',
      'Core Web Vitals Optimization (100 Speed Scores)',
      'Headless CMS Integrations (Sanity, Strapi, Contentful)',
      'Custom Design Systems & Tailwind Frameworks',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'GraphQL'],
    metrics: [
      { label: 'Avg Page Load', value: '< 0.6s' },
      { label: 'Lighthouse Score', value: '98-100' },
    ],
    deliverables: [
      'Full Source Code Repository',
      'Automated CI/CD Pipeline',
      'Design System Storybook',
      'Comprehensive Technical Docs',
    ],
  },
  {
    id: 'software-consulting',
    slug: 'software-consulting',
    title: 'Software Consulting & Cloud',
    subtitle: 'Cloud Architecture, DevOps Pipelines & System Security',
    description:
      'Strategic technology guidance and hands-on cloud engineering. We modernize legacy codebases, architect fault-tolerant cloud platforms, and implement SOC2 security practices.',
    iconName: 'Cpu',
    capabilities: [
      'AWS / GCP Multi-Cloud Architecture & Infrastructure as Code',
      'DevOps CI/CD Pipelines & Kubernetes Orchestration',
      'Cybersecurity Audits, Penetration Testing & Compliance',
      'Monolith to Microservices Refactoring',
      '24/7 SRE Monitoring & SLA Infrastructure Management',
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python', 'Go'],
    metrics: [
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Infra Cost Cut', value: '-35%' },
    ],
    deliverables: [
      'Architecture Blueprint',
      'Security Compliance Audit',
      'Terraform Scripts',
      '24/7 SLA Monitoring Setup',
    ],
  },
  {
    id: 'ecommerce-solutions',
    slug: 'ecommerce-solutions',
    title: 'E-Commerce Solutions',
    subtitle: 'Shopify Plus, Headless Commerce & Custom Checkout',
    description:
      'High-converting digital storefronts engineered for scale. We combine headless commerce backends with bespoke React interfaces and instant checkout flows.',
    iconName: 'ShoppingBag',
    capabilities: [
      'Shopify Plus & Liquid / Hydrogen Headless Frameworks',
      'Stripe, Adyen & Multi-Currency Payment Integrations',
      'Custom Subscriptions & Loyalty Program Portals',
      'Real-Time Inventory & ERP Synchronization',
      'Conversion Rate Optimization (CRO) & A/B Testing',
    ],
    techStack: ['Shopify Plus', 'Hydrogen', 'Stripe API', 'Klaviyo', 'Algolia', 'Tailwind'],
    metrics: [
      { label: 'Avg CR Lift', value: '+42%' },
      { label: 'Checkout Speed', value: '1.2s' },
    ],
    deliverables: [
      'Headless Storefront',
      'Custom Payment Gateway',
      'ERP Integration Suite',
      'Conversion Analytics Dashboard',
    ],
  },
  {
    id: 'creative-studio',
    slug: 'creative-studio',
    title: 'Creative Studio & UI/UX',
    subtitle: 'Brand Identity, Luxury UI/UX & WebGL Motion Graphics',
    description:
      'Transformative visual design and luxury brand positioning. We craft interactive 3D WebGL experiences, dark glassmorphic design systems, and memorable digital brand identities.',
    iconName: 'Palette',
    capabilities: [
      'Luxury Brand Identity & Visual Guideline Creation',
      'End-to-End Product UI/UX Design & Interactive Prototypes',
      'WebGL / Three.js 3D Interactive Web Experiences',
      'Motion Graphics & Custom Micro-Animations',
      'Design Token Architecture for Cross-Platform Sync',
    ],
    techStack: ['Figma', 'Three.js', 'Spline', 'Framer Motion', 'Blender', 'After Effects'],
    metrics: [
      { label: 'Engagement Increase', value: '+180%' },
      { label: 'Design Awards', value: '12 Wins' },
    ],
    deliverables: [
      'Figma Master File',
      'Brand Style Guide PDF',
      'Interactive WebGL Assets',
      'Design Token Package',
    ],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile & App Store Engineering',
    subtitle: 'Native iOS (Swift), Android (Kotlin), React Native & App Store Publishing',
    description:
      'High-performance mobile applications built for Apple App Store and Google Play Store. We engineer cross-platform React Native apps, in-app purchase systems, and native mobile UI.',
    iconName: 'Smartphone',
    capabilities: [
      'iOS & Android Cross-Platform Mobile Engineering',
      'App Store Optimization (ASO) & Submission Management',
      'In-App Purchases (IAP) & Subscription Monetization',
      'Push Notifications, Offline Telemetry & Biometrics',
      'React Native, Expo & Flutter Core Applications',
    ],
    techStack: ['React Native', 'Swift', 'Kotlin', 'Expo', 'RevenueCat', 'Firebase'],
    metrics: [
      { label: 'App Store Approval', value: '100% Rate' },
      { label: 'Avg App Store Rating', value: '4.9 ⭐' },
    ],
    deliverables: [
      'App Store & Play Store Binary Submissions',
      'Full Native Source Code Repository',
      'In-App Purchase Integration',
      'Push Notification Architecture',
    ],
  },
  {
    id: 'digital-ebooks-products',
    slug: 'digital-ebooks-products',
    title: 'Digital E-Books & Google Play Store Publishing',
    subtitle: 'Technical E-Books, Google Play Books Publishing & Whop Storefront Passes',
    description:
      'Comprehensive software engineering e-books, technical guides, and app store publications. We write, format, and publish digital e-books to Google Play Books, Apple Books, Whop, and direct marketplaces.',
    iconName: 'BookOpen',
    capabilities: [
      'Production Next.js, AI & Cloud Architecture E-Books',
      'Google Play Books & Apple Books E-Book Publishing',
      'System Design Blueprints & Developer Checklists',
      'Instant Pass & Whop Storefront Digital Downloads',
      'Exclusive Technical Masterclasses & Guides',
    ],
    techStack: ['Google Play Books API', 'Whop API', 'Markdown / PDF / ePub', 'Stripe Digital', 'Next.js'],
    metrics: [
      { label: 'Digital Downloads', value: '10,000+' },
      { label: 'Reader Rating', value: '4.95 / 5 ⭐' },
    ],
    deliverables: [
      'Google Play Books & Apple Books Listing',
      'PDF, ePub & Kindle E-Book Master Files',
      'Source Code Companion Repositories',
      'Instant Whop Membership Access',
    ],
  },
];

// 5-Step Delivery Process
export const DELIVERY_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Architecture Planning',
    subtitle: 'Uncovering opportunities & setting foundations',
    description:
      'We conduct deep-dive technical workshops to map out your business objectives, target audience requirements, data schemas, and system architecture.',
    deliverables: ['Technical Spec Document', 'System Architecture Diagram', 'Project Scope & Roadmap'],
  },
  {
    number: '02',
    title: 'Strategic UX & Product Wireframing',
    subtitle: 'Blueprint for user journeys & conversion paths',
    description:
      'Our product strategists and UI architects design high-fidelity interactive wireframes that optimize user flows, engagement metrics, and conversion funnels.',
    deliverables: ['Interactive Wireframe Prototypes', 'User Journey Maps', 'Information Architecture'],
  },
  {
    number: '03',
    title: 'Jungle Luxe UI Design & Tokens',
    subtitle: 'Crafting stunning visual identity & components',
    description:
      'We translate approved wireframes into dark glassmorphic visual designs with custom glowing accents, typography rules, and responsive component libraries.',
    deliverables: ['Figma Design System', 'Component Library', 'Design Tokens in CSS/JSON'],
  },
  {
    number: '04',
    title: 'Agile Engineering & QA Testing',
    subtitle: 'Production-grade code & rigorous quality checks',
    description:
      'Our senior engineers build the solution in 2-week agile sprints with automated CI/CD pipelines, unit testing, security vulnerability scans, and performance tuning.',
    deliverables: ['Clean Next.js / TypeScript Code', 'Test Suite Coverage', 'Staging Preview Environment'],
  },
  {
    number: '05',
    title: 'Launch, Scaling & 24/7 SLA Support',
    subtitle: 'Zero-downtime deployment & continuous monitoring',
    description:
      'We execute zero-downtime production deployment, configure real-time cloud telemetry, and provide continuous SLA maintenance, performance optimization, and updates.',
    deliverables: ['Production Cloud Deployment', '24/7 Telemetry Dashboard', 'Dedicated Support Team'],
  },
];

// Tech Stack Categories
export const TECH_STACK: TechItem[] = [
  // Frontend
  { name: 'Next.js 14', category: 'frontend', icon: '⚡', level: 'Core Framework' },
  { name: 'React 19', category: 'frontend', icon: '⚛️', level: 'UI Engine' },
  { name: 'TypeScript', category: 'frontend', icon: '📘', level: 'Type Safety' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '🎨', level: 'Styling' },
  { name: 'Framer Motion', category: 'frontend', icon: '✨', level: 'Animations' },
  { name: 'Three.js / WebGL', category: 'frontend', icon: '🌐', level: '3D Graphics' },

  // Backend
  { name: 'Node.js / Express', category: 'backend', icon: '🟩', level: 'Runtime' },
  { name: 'Python / FastAPI', category: 'backend', icon: '🐍', level: 'AI & Data Services' },
  { name: 'PostgreSQL / Prisma', category: 'backend', icon: '🐘', level: 'Relational DB' },
  { name: 'Redis', category: 'backend', icon: '🔴', level: 'Caching & Queues' },
  { name: 'GraphQL / REST', category: 'backend', icon: '📡', level: 'API Gateway' },
  { name: 'LangChain & Vector DB', category: 'backend', icon: '🤖', level: 'LLM Orchestration' },

  // Cloud & DevOps
  { name: 'AWS Cloud', category: 'cloud', icon: '☁️', level: 'Infrastructure' },
  { name: 'Docker & K8s', category: 'cloud', icon: '🐳', level: 'Containerization' },
  { name: 'Terraform', category: 'cloud', icon: '🏗️', level: 'IaC' },
  { name: 'Vercel Enterprise', category: 'cloud', icon: '▲', level: 'Edge Hosting' },
  { name: 'GitHub Actions', category: 'cloud', icon: '⚙️', level: 'CI/CD Pipelines' },
  { name: 'Datadog & Sentry', category: 'cloud', icon: '📊', level: 'SRE & Telemetry' },
];

// Service FAQs
export const SERVICE_FAQS: FAQItem[] = [
  {
    question: 'How fast can Raydrim kick off a new enterprise project?',
    answer:
      'We can assemble a dedicated project sprint team within 5 to 7 business days following our initial discovery session and contract approval.',
    category: 'Timeline',
  },
  {
    question: 'What engagement & pricing models do you offer?',
    answer:
      'We offer Fixed-Scope Sprint Pricing for well-defined builds, as well as Monthly Dedicated Team Retainers for continuous product development and scaling.',
    category: 'Pricing',
  },
  {
    question: 'Who retains the intellectual property and source code?',
    answer:
      'You do. Upon project completion and payment, 100% of all intellectual property, source repositories, design assets, and credentials are fully transferred to your company.',
    category: 'Ownership',
  },
  {
    question: 'How do you ensure enterprise-grade security and compliance?',
    answer:
      'Our codebases follow OWASP security guidelines, SOC2 standards, and zero-trust cloud architecture. We execute automated static code scans and dependency security audits prior to release.',
    category: 'Security',
  },
  {
    question: 'What ongoing maintenance & support options are available after launch?',
    answer:
      'We provide tailored SLA packages including 24/7 automated cloud monitoring, continuous Next.js/React security upgrades, feature enhancements, and emergency hotfix guarantees.',
    category: 'Support',
  },
];
