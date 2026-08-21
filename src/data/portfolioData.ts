import { PortfolioProject } from '@/types';

export const PORTFOLIO_CATEGORIES = [
  'All',
  'Shopify & E-Commerce',
  'Web Applications',
  'Browser Games',
] as const;

// ─── Honest Portfolio Stats ───
export const PORTFOLIO_STATS = [
  { value: 3, suffix: '+', label: 'Projects Shipped', description: 'Live production applications & Shopify stores deployed' },
  { value: 100, suffix: '%', label: 'Code Ownership', description: 'Every client gets full source code and store ownership' },
  { value: 1, prefix: '<', suffix: 's', label: 'Page Load Speed', description: 'Optimized for Core Web Vitals performance' },
  { value: 28, suffix: '', label: 'Static Pages Built', description: 'Production-optimized Next.js static generation' },
];

// ─── Real Portfolio Projects ───
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'watchie-store',
    title: 'Watchie — Shopify E-Commerce Store Build',
    slug: 'watchie-shopify-store',
    client: 'Watchie (E-Commerce Brand)',
    category: 'Shopify & E-Commerce',
    image: '/images/portfolio/watchie.jpg',
    description: 'A modern, conversion-focused Shopify storefront built for timepiece collections. Features high-contrast hero visuals, mobile-optimized checkout, and streamlined catalog navigation.',
    summary: 'Custom Shopify store design featuring responsive theme layout, product catalog setup, payment gateway configuration, and high-conversion storefront sections.',
    tags: ['Shopify', 'Liquid', 'E-Commerce', 'UI/UX', 'CRO', 'Payment Gateway'],
    metrics: [
      { label: 'Catalog Setup', value: 'Complete' },
      { label: 'Mobile Optimized', value: '100%' },
    ],
    featured: true,
    problem: 'The brand required an elegant, high-impact e-commerce storefront to showcase modern timepiece collections with fast mobile browsing and a seamless checkout experience.',
    solution: 'I designed and customized a high-converting Shopify store using liquid theme optimization, custom hero typography overlay, streamlined product navigation, and integrated payment processing.',
    techStack: ['Shopify Storefront', 'Liquid Theme Engine', 'Responsive CSS3', 'Shopify Payments', 'CRO Pass'],
    keyResults: [
      'Built and launched responsive Shopify storefront at watchie-3.myshopify.com',
      'Customized full-width hero banner and product action triggers',
      'Configured payment gateways, shipping rules, and tax settings',
      'Transferred full store ownership to the client upon completion',
    ],
    timeline: '1 Week',
    year: '2026',
    liveUrl: 'https://watchie-3.myshopify.com',
  },
  {
    id: 'campus-dude',
    title: 'Campus Dude — Free Browser Games for Students',
    slug: 'campus-dude-games',
    client: 'Personal Project',
    category: 'Browser Games',
    image: '/images/portfolio/campus-dude.jpg',
    description: 'A distraction-free browser games platform built for students. 22 handcrafted games with zero logins, zero installs, and instant loading.',
    summary: 'Full-stack web application featuring HTML5 Canvas games, responsive UI, SEO optimization, cookie consent, and Google AdSense integration.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Lenis Scroll', 'AdSense'],
    metrics: [
      { label: 'Total Games', value: '22' },
      { label: 'Login Required', value: 'None' },
    ],
    featured: true,
    problem: 'Students needed quick, fun study-break games that work instantly in any browser — no accounts, no downloads, no distractions.',
    solution: 'I built a lightweight, fast-loading game platform using vanilla HTML5, CSS3, and JavaScript with Canvas API for game rendering, responsive controls for mobile and desktop, and editorial-style UI design.',
    techStack: ['HTML5 Canvas', 'CSS3 Design Tokens', 'Vanilla JavaScript', 'Lenis Smooth Scroll', 'Google AdSense'],
    keyResults: [
      'Shipped 22 fully playable browser games across multiple genres',
      'Zero login or registration required — instant play',
      'Responsive design working across laptops, tablets, and phones',
      'Integrated AdSense and cookie consent for monetization compliance',
    ],
    timeline: '3 Weeks',
    year: '2026',
    liveUrl: 'https://campusdude.site',
  },
  {
    id: 'raydrim-agency',
    title: 'Raydrim — Digital Agency Website',
    slug: 'raydrim-agency-site',
    client: 'Raydrim (Own Brand)',
    category: 'Web Applications',
    image: '/images/portfolio/raydrim.jpg',
    description: 'A high-performance agency website built with Next.js 16, TypeScript, CSS Modules, and Framer Motion. Features editorial design, JSON-LD structured data, and full SEO.',
    summary: 'Production Next.js application with 28 statically generated pages, rich structured data schemas, sub-second load times, and Resend-powered contact form.',
    tags: ['Next.js 16', 'TypeScript', 'CSS Modules', 'Framer Motion', 'SEO', 'JSON-LD'],
    metrics: [
      { label: 'Static Pages', value: '28' },
      { label: 'Build Time', value: '< 4s' },
    ],
    featured: true,
    problem: 'I needed a professional online presence to showcase my web development services — one that demonstrates the exact quality I deliver to clients.',
    solution: 'I built raydrim.com from scratch using Next.js 16 with App Router, TypeScript, CSS Modules, and Framer Motion. The site features editorial design inspired by clean print layouts, complete SEO with OpenGraph and JSON-LD schemas, and a Resend-powered contact form.',
    techStack: ['Next.js 16', 'TypeScript', 'React', 'CSS Modules', 'Framer Motion', 'Resend API', 'AWS Amplify'],
    keyResults: [
      'Built and deployed 28 statically optimized pages in under 4 seconds build time',
      'Implemented Organization, WebSite, Service, FAQ, BlogPosting, and ContactPage JSON-LD schemas',
      'Configured Google Search Console, ads.txt, and robots.txt for crawler compliance',
      'Deployed to production on AWS Amplify with automatic GitHub-triggered deployments',
    ],
    timeline: '2 Weeks',
    year: '2026',
    liveUrl: 'https://raydrim.com',
  },
];
