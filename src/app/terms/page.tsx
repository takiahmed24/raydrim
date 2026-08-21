import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FileText,
  Shield,
  CreditCard,
  Briefcase,
  Lock,
  Scale,
  AlertTriangle,
  Mail,
  RefreshCw,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './terms.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the official Terms of Service governing services provided by Raydrim, including IP ownership, refund policies, and service contracts.',
  alternates: {
    canonical: 'https://raydrim.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Raydrim',
    description:
      'Official Terms of Service governing web application development, Shopify stores, mobile apps, and refund policies provided by Raydrim.',
    url: 'https://raydrim.com/terms',
  },
};

const SECTIONS = [
  { id: 'introduction', title: '1. Introduction & Acceptance', icon: FileText },
  { id: 'services-scope', title: '2. Services & Statements of Work', icon: Briefcase },
  { id: 'client-obligations', title: '3. Client Responsibilities', icon: Shield },
  { id: 'intellectual-property', title: '4. IP & Code Ownership', icon: Lock },
  { id: 'payment-terms', title: '5. Payment & Invoicing', icon: CreditCard },
  { id: 'refunds-cancellations', title: '6. Refunds & Cancellations', icon: RefreshCw },
  { id: 'warranties-liability', title: '7. Limitation of Liability', icon: AlertTriangle },
  { id: 'confidentiality', title: '8. Confidentiality & NDA', icon: Lock },
  { id: 'termination', title: '9. Contract Termination', icon: Scale },
  { id: 'governing-law', title: '10. Governing Law', icon: Scale },
  { id: 'contact', title: '11. Contact & Inquiries', icon: Mail },
];

export default function TermsOfServicePage() {
  return (
    <div className={styles.pageWrapper}>
      <Container size="lg">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Legal Agreements"
            title={
              <>
                Terms of <span className="text-gradient">Service</span>
              </>
            }
            subtitle="Please review the legal terms governing our software development services, website builds, and refund policies."
            align="center"
          />
          <p className={styles.lastUpdated}>Effective Date: August 20, 2026 • Version 3.0</p>
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
            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <FileText className={styles.sectionTitleIcon} size={22} />
                1. Introduction & Agreement to Terms
              </h2>
              <p className={styles.text}>
                Welcome to <strong>Raydrim</strong> (“Raydrim”, “Company”, “we”, “us”, or “our”). These Terms of Service (“Terms”) constitute a legally binding agreement between Raydrim (operated by Muhammad Taki Ahmed) and you (“Client”, “User”, or “you”), governing your access to and use of <code>raydrim.com</code> and all associated custom web development, Shopify stores, mobile applications, and software engineering services.
              </p>
              <p className={styles.text}>
                By placing an order, executing a Statement of Work (“SOW”), paying an invoice, or purchasing via Whop, you acknowledge that you agree to be bound by these Terms in full.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services-scope" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Briefcase className={styles.sectionTitleIcon} size={22} />
                2. Services & Statements of Work
              </h2>
              <p className={styles.text}>
                Raydrim delivers development services under fixed-price package definitions or custom Statements of Work agreed upon between Raydrim and the Client.
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Scope of Work:</strong> Technical deliverables, features, revision counts, and delivery timelines are defined at project kickoff.
                </li>
                <li className={styles.listItem}>
                  <strong>Change Requests:</strong> Out-of-scope iterations or feature additions requested following sign-off will adjust timelines and quotes accordingly.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="client-obligations" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Shield className={styles.sectionTitleIcon} size={22} />
                3. Client Obligations & Approvals
              </h2>
              <p className={styles.text}>
                Timely project execution relies on active Client collaboration. The Client agrees to:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  Provide text copy, brand assets, credentials, or API tokens promptly upon request.
                </li>
                <li className={styles.listItem}>
                  Review staging deployments and provide feedback within five (5) business days.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="intellectual-property" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Lock className={styles.sectionTitleIcon} size={22} />
                4. Intellectual Property & Code Ownership
              </h2>
              <div className={styles.highlightBox}>
                <p className={styles.text} style={{ margin: 0 }}>
                  <strong>Full Source Code Ownership:</strong> Upon settlement of final invoices, Raydrim grants the Client 100% exclusive, perpetual, worldwide ownership of all custom source code, graphics, and deliverables created for the project.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="payment-terms" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <CreditCard className={styles.sectionTitleIcon} size={22} />
                5. Payment Terms & Invoicing
              </h2>
              <p className={styles.text}>
                Financial arrangements are governed by the following standard billing policies:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Fixed Packages:</strong> 50% deposit upfront and 50% upon final delivery, or 100% upfront via Whop checkout.
                </li>
                <li className={styles.listItem}>
                  <strong>Accepted Payment Methods:</strong> Payoneer, Wise, Cards (Visa/Mastercard), US ACH, bKash, Nagad, and Rocket.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="refunds-cancellations" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <RefreshCw className={styles.sectionTitleIcon} size={22} />
                6. Refunds & Cancellations Policy
              </h2>
              <p className={styles.text}>
                We prioritize transparency and fairness in all billing. Our refund and cancellation policy covers all fixed-price tiers, custom quotes, and digital storefront purchases:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Fixed-Price Packages:</strong> Full 100% refund if cancelled before project work begins.
                </li>
                <li className={styles.listItem}>
                  <strong>Work in Progress:</strong> Once development has commenced, refunds are prorated based on unstarted milestone scope.
                </li>
                <li className={styles.listItem}>
                  <strong>Final Handover:</strong> After final delivery and handover of source code / repository access, no refunds can be issued as digital software assets cannot be un-delivered.
                </li>
                <li className={styles.listItem}>
                  <strong>Included Revisions:</strong> Package revisions must be requested within fourteen (14) days of deliverable notification.
                </li>
                <li className={styles.listItem}>
                  <strong>Monthly Care Plans:</strong> Subscriptions can be cancelled anytime; current billing months are non-prorated.
                </li>
                <li className={styles.listItem}>
                  <strong>Whop Purchases:</strong> Purchases completed via Whop storefronts are also backed by Whop buyer guarantees.
                </li>
                <li className={styles.listItem}>
                  <strong>Refund Requests:</strong> Submit requests to <code>ahmedmuhammadtaki@gmail.com</code>. All inquiries receive a response within 24 hours.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="warranties-liability" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <AlertTriangle className={styles.sectionTitleIcon} size={22} />
                7. Limitation of Liability & Warranties
              </h2>
              <p className={styles.text}>
                Raydrim warrants that all code produced will conform to specifications for a period of fourteen (14) days following deployment (“Bug-Fix Warranty”).
              </p>
            </section>

            {/* Section 8 */}
            <section id="confidentiality" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Lock className={styles.sectionTitleIcon} size={22} />
                8. Confidentiality & Non-Disclosure
              </h2>
              <p className={styles.text}>
                Both parties agree to hold all non-public code, credentials, and business strategies in strict confidence.
              </p>
            </section>

            {/* Section 9 */}
            <section id="termination" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Scale className={styles.sectionTitleIcon} size={22} />
                9. Contract Termination
              </h2>
              <p className={styles.text}>
                Either party may terminate an active project for convenience upon providing written notice. Completed work up to the termination date remains payable.
              </p>
            </section>

            {/* Section 10 */}
            <section id="governing-law" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Scale className={styles.sectionTitleIcon} size={22} />
                10. Governing Law
              </h2>
              <p className={styles.text}>
                These Terms are governed by the applicable laws of Bangladesh, without regard to conflict of law rules.
              </p>
            </section>

            {/* Section 11 */}
            <section id="contact" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Mail className={styles.sectionTitleIcon} size={22} />
                11. Contact & Legal Inquiries
              </h2>
              <p className={styles.text}>
                For legal inquiries or refund requests, contact us directly at:
              </p>
              <div className={styles.contactBox}>
                <p><strong>Raydrim</strong></p>
                <p><strong>Founder & Developer:</strong> Muhammad Taki Ahmed</p>
                <p><strong>Email:</strong> <a href="mailto:ahmedmuhammadtaki@gmail.com" className={styles.contactLink}>ahmedmuhammadtaki@gmail.com</a></p>
                <p><strong>Phone:</strong> +880 1873-691022</p>
                <p><strong>Location:</strong> Dhaka-1230, Bangladesh</p>
                <p><strong>Website:</strong> <a href="https://raydrim.com" className={styles.contactLink}>https://raydrim.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
