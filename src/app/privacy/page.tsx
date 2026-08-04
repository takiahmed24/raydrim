import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Database,
  Eye,
  Cookie,
  Server,
  Lock,
  UserCheck,
  Globe,
  Mail,
  FileCheck,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | Raydrim Digital Agency',
  description:
    'Read Raydrim Digital Agency’s GDPR & CCPA compliant Privacy Policy detailing how we collect, process, protect, and handle client data.',
  openGraph: {
    title: 'Privacy Policy | Raydrim Digital Agency',
    description:
      'Raydrim Privacy Policy — Full transparency regarding GDPR, CCPA, cookies, data security, and client data protection.',
    url: 'https://raydrim.com/privacy',
  },
};

const SECTIONS = [
  { id: 'overview', title: '1. Overview & Commitment', icon: ShieldCheck },
  { id: 'data-collection', title: '2. Information We Collect', icon: Database },
  { id: 'data-usage', title: '3. How We Use Data', icon: Eye },
  { id: 'cookies-policy', title: '4. Cookies, Advertising & Analytics', icon: Cookie },
  { id: 'client-confidentiality', title: '5. Client Confidentiality', icon: Lock },
  { id: 'third-party-infra', title: '6. Third-Party Infrastructure', icon: Server },
  { id: 'data-security', title: '7. Security Standards', icon: Lock },
  { id: 'user-rights', title: '8. GDPR & CCPA Rights', icon: UserCheck },
  { id: 'international-transfers', title: '9. International Transfers', icon: Globe },
  { id: 'contact-dpo', title: '10. Contact Privacy Officer', icon: Mail },
];

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.pageWrapper}>
      <Container size="lg">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Data Protection & Privacy"
            title={
              <>
                Privacy <span className="text-gradient">Policy</span>
              </>
            }
            subtitle="Your privacy is paramount. Discover how Raydrim safeguards client data, honors GDPR/CCPA rights, and maintains security standards."
            align="center"
          />
          <p className={styles.lastUpdated}>Effective Date: July 30, 2024 • Version 2.4</p>
        </ScrollReveal>

        <div className={styles.legalLayout}>
          {/* Side Navigation */}
          <aside className={styles.sidebar}>
            <h4 className={styles.sidebarTitle}>Navigation</h4>
            <ul className={styles.navList}>
              {SECTIONS.map((sec) => {
                const Icon = sec.icon;
                return (
                  <li key={sec.id}>
                    <a href={`#${sec.id}`} className={styles.navLink}>
                      <Icon size={14} className={styles.sectionTitleIcon} />
                      <span>{sec.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Main Content */}
          <div className={styles.contentCard}>
            {/* Section 1 */}
            <section id="overview" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <ShieldCheck className={styles.sectionTitleIcon} size={22} />
                1. Overview & Commitment to Privacy
              </h2>
              <p className={styles.text}>
                At <strong>Raydrim</strong> (“Raydrim”, “we”, “us”, or “our”), accessible from <code>https://raydrim.com</code>, we take the confidentiality, privacy, and security of our clients, website visitors, and partners with the utmost seriousness.
              </p>
              <p className={styles.text}>
                This Privacy Policy outlines the types of personal data and technical information we collect, how it is processed and protected, and your statutory rights under the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), and applicable international privacy frameworks.
              </p>
            </section>

            {/* Section 2 */}
            <section id="data-collection" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Database className={styles.sectionTitleIcon} size={22} />
                2. Information We Collect
              </h2>
              <p className={styles.text}>
                We collect information directly from you when you interact with our website, request a proposal, execute a development agreement, or use our digital platforms:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Personal Identity Data:</strong> Name, professional email address, company name, phone number, and physical billing address submitted via contact forms or project onboarding.
                </li>
                <li className={styles.listItem}>
                  <strong>Technical & Usage Data:</strong> IP addresses, browser types, operating system specs, referring URLs, device identifiers, and page visit duration collected automatically via server logs.
                </li>
                <li className={styles.listItem}>
                  <strong>Project & Credentials Data:</strong> API access tokens, repository access keys, and cloud infrastructure credentials provided voluntarily for software development and deployment services.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="data-usage" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Eye className={styles.sectionTitleIcon} size={22} />
                3. Legal Basis & How We Use Your Data
              </h2>
              <p className={styles.text}>
                Raydrim processes personal data exclusively under legitimate legal bases, including contractual necessity, explicit consent, legal compliance, and legitimate business interest:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Contractual Performance:</strong> Fulfilling SOW deliverables, processing milestone payments, and managing client accounts.
                </li>
                <li className={styles.listItem}>
                  <strong>Platform Communications:</strong> Sending technical project updates, security advisories, and administrative notices.
                </li>
                <li className={styles.listItem}>
                  <strong>Service Improvement:</strong> Analyzing website navigation patterns to optimize user experience and platform responsiveness.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="cookies-policy" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Cookie className={styles.sectionTitleIcon} size={22} />
                4. Cookies, Advertising & Analytics Policy
              </h2>
              <p className={styles.text}>
                Raydrim uses cookies and similar tracking technologies on our website to provide core functionality, analyze traffic, and serve relevant advertisements. The types of cookies we use include:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Strictly Necessary Cookies:</strong> Essential for website navigation, session management, and security. These cookies cannot be disabled.
                </li>
                <li className={styles.listItem}>
                  <strong>Analytics Cookies:</strong> We use privacy-focused analytics to understand how visitors interact with our site, measure page performance, and improve user experience.
                </li>
                <li className={styles.listItem}>
                  <strong>Advertising Cookies (Third-Party):</strong> We partner with <strong>Google AdSense</strong> to display advertisements on our website. Google, as a third-party vendor, uses cookies — including the DoubleClick DART cookie — to serve ads based on your visits to raydrim.com and other websites on the Internet. These cookies enable Google and its advertising partners to serve targeted advertisements based on your browsing activity across websites.
                </li>
              </ul>
              <div className={styles.highlightBox}>
                <p className={styles.text} style={{ margin: 0 }}>
                  <strong>Your Ad Choices & Opt-Out:</strong> You may opt out of personalized advertising by visiting{' '}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Google Ads Settings</a>.
                  You can also opt out of third-party vendor cookie usage for personalized advertising by visiting{' '}
                  <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>www.aboutads.info</a>.
                  For users in the European Economic Area (EEA) and United Kingdom, non-essential advertising cookies are only placed after you grant explicit consent via our cookie consent mechanism. You may withdraw consent at any time by clearing your browser cookies or adjusting your cookie preferences.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="client-confidentiality" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Lock className={styles.sectionTitleIcon} size={22} />
                5. Client Confidentiality & Source Code Security
              </h2>
              <p className={styles.text}>
                All project assets, client source code, database dumps, brand strategy documents, and internal credentials shared with Raydrim during an active engagement are treated as Strictly Confidential. Staff and contractors adhere to binding non-disclosure agreements (NDAs).
              </p>
            </section>

            {/* Section 6 */}
            <section id="third-party-infra" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Server className={styles.sectionTitleIcon} size={22} />
                6. Third-Party Infrastructure Providers
              </h2>
              <p className={styles.text}>
                To deliver enterprise-grade performance, we utilize vetted global infrastructure partners operating under strict Data Processing Agreements (DPAs):
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Cloud Hosting & Edge Compute:</strong> Amazon Web Services (AWS), Vercel (Edge Network).
                </li>
                <li className={styles.listItem}>
                  <strong>Payment Gateways:</strong> Stripe, Payoneer, Wise (PCI-DSS Level 1 compliant).
                </li>
                <li className={styles.listItem}>
                  <strong>Developer Tools:</strong> GitHub Enterprise, Vercel Analytics, Postmark (transactional email).
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="data-security" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Lock className={styles.sectionTitleIcon} size={22} />
                7. Security Standards & Retention
              </h2>
              <p className={styles.text}>
                We implement industry-standard technical and organizational security measures, including AES-256 encryption at rest, TLS 1.3 encryption in transit, strict role-based access control (RBAC), multi-factor authentication (MFA), and routine vulnerability audits.
              </p>
            </section>

            {/* Section 8 */}
            <section id="user-rights" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <UserCheck className={styles.sectionTitleIcon} size={22} />
                8. Your Statutory Rights (GDPR & CCPA)
              </h2>
              <p className={styles.text}>
                Depending on your location, you hold statutory data protection rights:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Right to Access:</strong> Request a copy of the personal data we hold about you.
                </li>
                <li className={styles.listItem}>
                  <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.
                </li>
                <li className={styles.listItem}>
                  <strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data where no legal override exists.
                </li>
                <li className={styles.listItem}>
                  <strong>Right to Restrict / Opt-Out:</strong> Opt out of marketing communications or restrict processing.
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="international-transfers" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Globe className={styles.sectionTitleIcon} size={22} />
                9. International Data Transfers
              </h2>
              <p className={styles.text}>
                Raydrim operates globally. Personal data collected may be transferred to and processed in secure data centers located in the United States and European Economic Area (EEA). All cross-border transfers comply with Standard Contractual Clauses (SCCs) approved by the European Commission.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact-dpo" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Mail className={styles.sectionTitleIcon} size={22} />
                10. Contact Data Protection Officer
              </h2>
              <p className={styles.text}>
                For privacy requests, GDPR data access requests, or privacy inquiries, please contact our Data Protection Officer at:
              </p>
              <div className={styles.contactBox}>
                <p><strong>Raydrim Data Protection Office</strong></p>
                <p><strong>Business Owner:</strong> Muhammad Taki Ahmed</p>
                <p><strong>Email:</strong> <a href="mailto:muhammadtakiahmed@icloud.com" className={styles.contactLink}>muhammadtakiahmed@icloud.com</a></p>
                <p><strong>Phone / Mobile:</strong> +880 1873-691022</p>
                <p><strong>Registered Address:</strong> Dhaka-1230, Bangladesh</p>
                <p><strong>US Banking Address:</strong> JPMorgan Chase Bank N.A., 270 Park Avenue, New York, NY 10017, USA</p>
                <p><strong>Website:</strong> <a href="https://raydrim.com" className={styles.contactLink}>https://raydrim.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
