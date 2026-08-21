import type { NextConfig } from "next";

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
    return [
      {
        source: '/blog/nextjs-16-enterprise-architecture-guide',
        destination: '/blog/nextjs-14-enterprise-architecture-guide',
        permanent: true,
      },
      {
        source: '/blog/nextjs-16-rsc-architecture',
        destination: '/blog/nextjs-14-enterprise-architecture-guide',
        permanent: true,
      },
      {
        source: '/blog/headless-ecommerce-shopify',
        destination: '/blog/scaling-ecommerce-conversion-rate-optimization',
        permanent: true,
      },
      {
        source: '/blog/aws-cloud-cost-optimization',
        destination: '/blog/cloud-cost-optimization-strategies-aws',
        permanent: true,
      },
      {
        source: '/blog/modern-web-design-systems',
        destination: '/blog/building-memorable-brand-identity-digital-age',
        permanent: true,
      },
      {
        source: '/blog/react-native-expo-mobile',
        destination: '/blog/react-native-ios-android-play-store-architecture',
        permanent: true,
      },
      {
        source: '/blog/publishing-technical-ebooks',
        destination: '/blog/publishing-technical-ebooks-google-play-books-whop',
        permanent: true,
      },
      {
        source: '/blog/langchain-ai-integrations',
        destination: '/blog/ai-agent-orchestration-llm-enterprise-guide',
        permanent: true,
      },
      {
        source: '/blog/web-application-hardening',
        destination: '/blog/cybersecurity-zero-trust-web-application-hardening',
        permanent: true,
      },
      {
        source: '/blog/postgresql-prisma-tuning',
        destination: '/blog/serverless-database-optimization-postgresql-prisma',
        permanent: true,
      },
      {
        source: '/blog/achieving-100-core-web-vitals',
        destination: '/blog/core-web-vitals-lighthouse-100-optimization-playbook',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
