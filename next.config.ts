import type { NextConfig } from "next";

// Every legacy/renamed blog slug that was ever live or submitted in a sitemap.
// All ten template posts were removed, so these resolve to the blog index
// rather than 404ing. Update this list if a post is later republished
// under one of these slugs.
const RETIRED_BLOG_SLUGS = [
  'nextjs-14-enterprise-architecture-guide',
  'nextjs-16-enterprise-architecture-guide',
  'nextjs-16-rsc-architecture',
  'scaling-ecommerce-conversion-rate-optimization',
  'headless-ecommerce-shopify',
  'cloud-cost-optimization-strategies-aws',
  'aws-cloud-cost-optimization',
  'building-memorable-brand-identity-digital-age',
  'modern-web-design-systems',
  'react-native-ios-android-play-store-architecture',
  'react-native-expo-mobile',
  'cross-platform-react-native-expo',
  'publishing-technical-ebooks-google-play-books-whop',
  'publishing-technical-ebooks',
  'ai-agent-orchestration-llm-enterprise-guide',
  'langchain-ai-integrations',
  'cybersecurity-zero-trust-web-application-hardening',
  'web-application-hardening',
  'serverless-database-optimization-postgresql-prisma',
  'postgresql-prisma-tuning',
  'postgresql-prisma-performance',
  'core-web-vitals-lighthouse-100-optimization-playbook',
  'achieving-100-core-web-vitals',
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.137.1', 'localhost', '127.0.0.1'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return RETIRED_BLOG_SLUGS.map((slug) => ({
      source: `/blog/${slug}`,
      destination: '/blog',
      permanent: true,
    }));
  },
};

export default nextConfig;
