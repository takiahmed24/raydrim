# Raydrim — Agent Prompts

Two self-contained prompts. Paste each one whole; neither depends on any prior conversation.

- **Prompt A** — Whop store setup (for an agent with access to your Whop dashboard)
- **Prompt B** — Whop checkout integration on raydrim.com (for your coding agent)
- **Prompt C** — the Client Hub welcome message (paste directly into Whop, not to an agent)

⚠️ **Do not give any agent your payout, identity, or banking setup.** That step requires your government ID and bank details and must be done by you personally. Instructions are at the end.

---

## PROMPT A — Whop store setup

```
You are setting up the Whop storefront for "Raydrim" (whop.com/raydrim).

CONTEXT
Raydrim is the independent studio of Muhammad Taki Ahmed, a solo full-stack
developer based in Dhaka, Bangladesh. He builds websites, Shopify stores and
mobile apps. The storefront currently lists 6 products at prices that do not
match his website (raydrim.com/pricing). Your job is to replace them with 8
products whose names, prices and delivery times match the website exactly.

CRITICAL RULES
- Never invent capabilities, clients, credentials, awards or team members.
  Raydrim is one person. Never write "our team", "our specialists", "agency",
  "enterprise-grade", or "award-winning".
- Never set any product to lifetime, perpetual, or indefinite access. Whop
  prohibits this. Every product gets a fixed access duration.
- Prices below are exact. Do not round, discount, or adjust them.

STEP 1 — Unlist the public Discover listing first
Find the product "Mobile & App Store Engineering" ($2,499.00), currently
marked "Live on Discover". Change its Discover status to Unlisted before
doing anything else. It is publicly listed at a price that does not exist on
the website, and must not stay live during this rebuild.

STEP 2 — Update the store description
Replace the current store description with exactly:

Raydrim is the independent studio of Muhammad Taki Ahmed, a full-stack
developer in Dhaka, Bangladesh. I build fast websites, Shopify stores and
cross-platform mobile apps with Next.js, React and TypeScript. Fixed prices,
stated delivery times, and full source code ownership on every project.
Portfolio and pricing at raydrim.com.

STEP 3 — Delete all 6 existing products
Delete: Web Development & Architecture, Software Consulting & Cloud,
E-Commerce Solutions, Creative Studio & UI/UX, Mobile & App Store Engineering,
Digital E-Books & Publishing.

STEP 4 — Create these 8 products
For EVERY product, apply these settings:
  - Payment: one-time (except #8, which is a quote — see below)
  - Access duration: 90 days (NOT lifetime)
  - Included apps: attach BOTH "Raydrim Client Hub" (chat) and
    "Project Updates" (content)
  - Visibility: Visible
  - Discover status: Unlisted (do not list on Discover yet)

And append this exact block to the END of every product description:

  What you get immediately: a private Client Hub chat with me, plus the
  Project Updates feed where I post each milestone with screenshots.
  What you get at the end: your deployed live site, full source code and
  repository access, and a handover note covering how to run, deploy and
  edit it. Client Hub access runs for the project duration plus 30 days.

---
PRODUCT 1
Title: I will build a fast one-page website in Next.js
Price: $149 one-time
Delivery: 3 days · 2 revisions
Description:
A single-page site built in Next.js and TypeScript, not a template. Custom
layout for your business, mobile-first, contact form wired straight to your
inbox, Lighthouse 90+ on mobile, deployed live. Good for a launch page, a
service business, or a portfolio.

---
PRODUCT 2
Title: I will build a multi-page business website with Next.js and TypeScript
Price: $449 one-time
Delivery: 7 days · 3 revisions
Description:
Up to 8 pages, custom-built. Full SEO setup — metadata, sitemap, structured
data — plus a working contact form and deployment to Vercel or AWS. This is
the same stack I used to build raydrim.com.

---
PRODUCT 3
Title: I will set up your Shopify store, design it, and launch it
Price: $249 one-time
Delivery: 5 days · 2 revisions
Description:
Complete Shopify setup: theme configured to your brand, up to 20 products
loaded with descriptions and images, payments and shipping zones configured,
mobile checkout tested end to end. Store ownership transfers to you on
delivery.

---
PRODUCT 4  ***MARK THIS ONE AS THE FEATURED / MOST POPULAR PRODUCT***
Title: I will build a custom Shopify store design with conversion-focused sections
Price: $549 one-time
Delivery: 10 days · 3 revisions
Description:
Everything in the Launch package, plus a custom homepage and product page
built for conversion rather than theme defaults. Up to 100 products, app
integrations (reviews, email, upsells), a speed pass targeting sub-2s mobile
load, and email capture wired up.

---
PRODUCT 5
Title: I will build a premium custom Shopify storefront with CRO and launch planning
Price: $1,295 one-time
Delivery: 14 days · 4 revisions
Description:
Full custom UI/UX across the storefront. Advanced integrations, a
conversion-rate pass on cart and checkout, a written launch checklist, and 30
days of post-launch support. For brands treating the store as their main
sales channel.

---
PRODUCT 6
Title: I will convert your website into an Android and iOS app
Price: $299 one-time
Delivery: 5 days · 2 revisions
Description:
Your existing site wrapped as a native app for both platforms. Custom icon
and splash screen, push-notification-ready config, offline fallback, and
store-submission files (AAB for Google Play, IPA for the App Store). Full
source code included.

---
PRODUCT 7
Title: I will build a cross-platform mobile app in React Native
Price: $999 one-time
Delivery: 3 weeks · 3 revisions
Description:
Up to 6 custom screens, Android and iOS from one codebase. API or Firebase
integration, store-ready production builds, and full source code. I can
publish to your developer accounts on request.

---
PRODUCT 8
Title: I will build a custom web application to your spec
Price: $2,499 (set as the starting price; this product is quote-based)
Delivery: quoted per scope
Access duration: 180 days
Description:
For anything that does not fit a package. We start with a scope call, I send
a fixed quote before any work begins, and payment runs on milestones. Custom
Next.js, Node and React, database design, API integrations, and 30 days of
support after handover.

---

STEP 5 — Collect the plan IDs
For each of the 8 products: Dashboard > Checkout links > click the three-dot
menu on the pricing option > Details > copy the ID beginning with "plan_".

Return a plain list mapping each product title to its plan_ ID. This is the
final output of this task.

STEP 6 — Verify before finishing
Open raydrim.com/pricing and confirm every price on the Whop storefront has a
matching tier on the website. Report any mismatch instead of guessing.

DO NOT touch payout settings, banking, identity verification, or tax forms.
```

---

## PROMPT B — Website checkout integration

```
Integrate Whop embedded checkout into the raydrim.com Next.js project
(C:\WEBSITE). This is a Next.js 16 App Router project using TypeScript and
CSS Modules, with an editorial design system in src/app/globals.css
(--bg: #f4f1ec, --ink: #16150f, --accent: #ff4d2e).

1. Install the package:
   npm install @whop/checkout

2. In src/types/index.ts, add an optional field to the PricingTier interface:
   whopPlanId?: string;

3. In src/data/pricingData.ts, add whopPlanId to each of the 8 tiers.
   Set every value to '' for now — I will paste the real plan_ IDs after.

4. Create src/app/checkout/[planId]/page.tsx.
   It must be a client component rendering:

   'use client';
   import { WhopCheckoutEmbed } from '@whop/checkout/react';

   <WhopCheckoutEmbed
     planId={planId}
     returnUrl="https://raydrim.com/checkout/complete"
     theme="light"
     themeOptions={{ backgroundColor: '#f4f1ec', accentColor: '#ff4d2e' }}
   />

   Wrap it in the existing Container component so it matches site layout.
   Export metadata with robots: { index: false, follow: false }.
   Handle the case where planId is empty or invalid by showing a short
   message and a link to /contact — never a blank page.

5. Create src/app/checkout/complete/page.tsx — a confirmation page with:
   - A thank-you headline
   - "Check your email for your Raydrim Client Hub invite"
   - What happens next: "I'll reply in the Client Hub within 24 hours with a
     scoping summary and your confirmed start date."
   - A link back to /portfolio
   Match the existing editorial styling. robots: noindex.

6. In src/components/pricing/PricingCards.tsx, change each tier's CTA:
   if tier.whopPlanId is a non-empty string, link to
   `/checkout/${tier.whopPlanId}`; otherwise link to /contact.
   Keep the existing ctaText values and button styling unchanged.

7. Do NOT add any Whop script tag to src/app/layout.tsx. The React package
   loads its own script only on the checkout route, which keeps it off every
   other page.

8. Run `npm run build` and confirm all routes compile with 0 errors.
   Report the route count.

Do not change any prices, product names, or copy anywhere in the project.
```

---

## PROMPT C — Client Hub welcome message

Paste this directly into Whop as the automated first message in **Raydrim Client Hub** (not to an agent):

```
Welcome — and thanks for the order.

I'm Muhammad Taki Ahmed, and I'll be building this personally. To get
started, reply here with:

1. Your business name and what you do
2. The domain you want to use (or tell me if you need one)
3. Two or three sites whose look you like, and what you like about them
4. Your logo and brand colours, if you have them
5. Anything that has to be finished by a specific date

I'll reply within 24 hours with a scoping summary and your confirmed start
date. From then on I'll post each milestone to the Project Updates feed with
screenshots, so you can see progress without having to ask.

If anything is unclear at any point, just message me here.
```

---

## Do these yourself — never delegate

**Whop payouts.** Dashboard → Balances → set up Whop Payments → select Bangladesh
→ complete KYC → link bank → upload ID.

Before submitting, make these identical:
- Whop account name
- Name on your NID or passport
- Name on the bank account (must be your own, not a relative's)
- Address matching your ID

Mismatches between these are the actual cause of held payouts — not how new
you are or how many projects you've shipped.

**AdSense consent.** AdSense → Privacy & messaging → European regulations →
create and publish a GDPR message (Funding Choices). Then delete
src/components/layout/CookieBanner.tsx, its .module.css, the import and
<CookieBanner /> in layout.tsx, and the pauseAdRequests script.
