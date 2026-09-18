import { NextResponse } from 'next/server';

const CONTENT = "# Raydrim\n\n> Raydrim is a bespoke digital engineering studio and product development agency founded by Muhammad Taki Ahmed in Dhaka, Bangladesh. We build high-performance Next.js web applications, Shopify e-commerce platforms, cross-platform mobile apps, and custom software systems with guaranteed full source code ownership.\n\n## Studio Overview\n- Official Website: https://raydrim.com\n- Founder & Principal Engineer: Muhammad Taki Ahmed\n- Engineering Headquarters: Dhaka-1230, Bangladesh\n- Direct Contact: contact@raydrim.com | +880 1873-691022\n- Architecture: Next.js 16 App Router, TypeScript, React 19, Tailwind CSS, Framer Motion, AWS Amplify & CloudFront CDN edge delivery.\n\n## Core Capabilities & Services\n- [Web Application Development](https://raydrim.com/services): Bespoke web platforms built for speed, conversion, and global scale.\n- [Shopify E-Commerce Stores](https://raydrim.com/pricing#shopify): Turnkey, high-converting luxury storefronts with seamless payment gateways.\n- [Mobile App Development](https://raydrim.com/pricing#mobile): WebView wrappers and React Native cross-platform iOS & Android mobile applications.\n- [Client Portfolio](https://raydrim.com/portfolio): Proven production case studies and client applications.\n- [Engineering Vault](https://raydrim.com/vault): Reusable software modules, design components, and full-stack blueprints.\n- [Pricing Plans](https://raydrim.com/pricing): Transparent, fixed-price contracts with clear delivery milestones.\n- [Engineering Blog](https://raydrim.com/blog): In-depth technical articles on Next.js performance, e-commerce optimization, and full-stack software architecture.\n\n## Brand Ecosystem & Ventures\n- [Nyxeris](https://nyxeris.store): Flagship luxury workspace hardware, CNC wireless charging gear, and curated everyday carry.\n- [CampusDude](https://campusdude.site): Distraction-free browser gaming platform, student study breaks, and cognitive focus ergonomics.\n";

export async function GET() {
  return new NextResponse(CONTENT, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
