/**
 * Raydrim Digital Agency - Core TypeScript Interfaces
 */

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  category: 'web' | 'ai' | 'design' | 'cloud' | 'mobile';
}

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  image: string;
  description: string;
  summary: string;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
  problem?: string;
  solution?: string;
  techStack?: string[];
  keyResults?: string[];
  timeline?: string;
  year?: string;
  liveUrl?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  badge?: string;
  timeline?: string;
  idealFor?: string;
  /** Whop plan ID (plan_XXXX). Empty string = no instant checkout yet. */
  whopPlanId?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
  category: string;
  image: string;
  content: string;
  featured?: boolean;
  tags?: string[];
  tableOfContents?: {
    id: string;
    title: string;
    level: number;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}
