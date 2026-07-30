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
  ChevronRight,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './terms.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | Raydrim Digital Agency',
  description:
    'Read the official Terms of Service governing services provided by Raydrim Digital Agency, including IP ownership, retainer agreements, and service contracts.',
  openGraph: {
    title: 'Terms of Service | Raydrim Digital Agency',
    description:
      'Official Terms of Service governing web application development, AI integrations, and digital agency services provided by Raydrim.',
    url: 'https://raydrim.com/terms',
  },
};

const SECTIONS = [
  { id: 'introduction', title: '1. Introduction & Acceptance', icon: FileText },
  { id: 'services-scope', title: '2. Agency Services & SOW', icon: Briefcase },
  { id: 'client-obligations', title: '3. Client Responsibilities', icon: Shield },
  { id: 'intellectual-property', title: '4. IP & Code Ownership', icon: Lock },
  { id: 'payment-terms', title: '5. Payment & Retainers', icon: CreditCard },
  { id: 'warranties-liability', title: '6. Limitation of Liability', icon: AlertTriangle },
  { id: 'confidentiality', title: '7. Confidentiality & NDA', icon: Lock },
  { id: 'termination', title: '8. Contract Termination', icon: Scale },
  { id: 'governing-law', title: '9. Governing Law', icon: Scale },
  { id: 'contact', title: '10. Contact Legal Team', icon: Mail },
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
            subtitle="Please review the legal terms governing our digital development services, software consulting, and retainers."
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
            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <FileText className={styles.sectionTitleIcon} size={22} />
                1. Introduction & Agreement to Terms
              </h2>
              <p className={styles.text}>
                Welcome to <strong>Raydrim</strong> (“Raydrim”, “Company”, “we”, “us”, or “our”). These Terms of Service (“Terms”) constitute a legally binding agreement between Raydrim Digital Agency and you (“Client”, “User”, or “you”), governing your access to and use of the website located at <code>Raydrim.com</code> and all associated custom software development, web engineering, artificial intelligence integration, branding, and strategic consulting services (collectively, the “Services”).
              </p>
              <p className={styles.text}>
                By executing a Statement of Work (“SOW”), paying an initial deposit or invoice, or accessing our platform services, you acknowledge that you have read, understood, and agree to be bound by these Terms in full.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services-scope" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Briefcase className={styles.sectionTitleIcon} size={22} />
                2. Agency Services & Statement of Work (SOW)
              </h2>
              <p className={styles.text}>
                Raydrim delivers digital agency services under specific Statements of Work, Proposal documents, or Monthly Retainer Contracts agreed upon between Raydrim and the Client.
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Scope of Work:</strong> Detailed technical requirements, deliverables, milestones, timelines, and budgets will be defined in individual SOWs.
                </li>
                <li className={styles.listItem}>
                  <strong>Change Requests:</strong> Any requested modifications, additional features, or out-of-scope iterations following SOW sign-off will require a written Change Request and may adjust delivery dates and billing amounts.
                </li>
                <li className={styles.listItem}>
                  <strong>Third-Party Dependencies:</strong> Milestones depending on third-party APIs (e.g., OpenAI, AWS, Stripe, Shopify) are subject to external API availability and policy constraints.
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
                  Provide requested text copy, brand assets, credentials, and API tokens within five (5) business days of request.
                </li>
                <li className={styles.listItem}>
                  Designate a qualified internal Project Lead empowered to grant approvals on project deliverables.
                </li>
                <li className={styles.listItem}>
                  Review design mockups and staging deployments promptly. Deliverables un-objected to after seven (7) business days will be deemed accepted.
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
                  <strong>Ownership Transfer Guarantee:</strong> Upon full and final settlement of all invoices associated with an SOW, Raydrim grants the Client exclusive, perpetual, worldwide ownership of all custom source code, graphics, and final deliverables created specifically for the Client.
                </p>
              </div>
              <p className={styles.text}>
                Raydrim retains ownership of pre-existing proprietary frameworks, open-source libraries, utility tools, and reusable core boilerplate routines (“Pre-Existing IP”) incorporated into deliverables. Raydrim grants Client a non-exclusive, royalty-free, perpetual license to use Pre-Existing IP as integrated into the final software product.
              </p>
            </section>

            {/* Section 5 */}
            <section id="payment-terms" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <CreditCard className={styles.sectionTitleIcon} size={22} />
                5. Payment Terms, Invoicing & Retainers
              </h2>
              <p className={styles.text}>
                Financial arrangements are governed by the following standard billing policies:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Fixed-Price Milestones:</strong> Standard contracts require a 50% initial deposit prior to kickoff, 25% upon staging delivery, and 25% prior to final production deployment and repository transfer.
                </li>
                <li className={styles.listItem}>
                  <strong>Monthly Retainers:</strong> Retainer hours are billed in advance on the 1st of each calendar month. Unused hours do not roll over unless explicitly noted in an active SOW.
                </li>
                <li className={styles.listItem}>
                  <strong>Late Payments:</strong> Invoices outstanding past 15 calendar days incur interest at 1.5% per month or the maximum rate permissible under law. Raydrim reserves the right to suspend development or staging environments for accounts overdue beyond 30 days.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="warranties-liability" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <AlertTriangle className={styles.sectionTitleIcon} size={22} />
                6. Limitation of Liability & Warranties
              </h2>
              <p className={styles.text}>
                Raydrim warrants that all code produced will conform substantially to specifications outlined in the SOW for a period of thirty (30) days following production deployment (“Bug-Fix Warranty”).
              </p>
              <p className={styles.text}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, RAYDRIM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION) ARISING OUT OF OR IN CONNECTION WITH OUR SERVICES. RAYDRIM’S TOTAL AGGREGATE LIABILITY UNDER ANY CONTRACT SHALL NOT EXCEED THE TOTAL FEES ACTUALLY PAID BY CLIENT TO RAYDRIM IN THE THREE (3) MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            {/* Section 7 */}
            <section id="confidentiality" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Lock className={styles.sectionTitleIcon} size={22} />
                7. Confidentiality & Non-Disclosure
              </h2>
              <p className={styles.text}>
                Both parties agree to hold all non-public information, trade secrets, business strategies, and technical architectures disclosed during the engagement in strict confidence. Confidential information shall not be disclosed to any third party without express prior written consent.
              </p>
            </section>

            {/* Section 8 */}
            <section id="termination" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Scale className={styles.sectionTitleIcon} size={22} />
                8. Contract Termination & Cancellation
              </h2>
              <p className={styles.text}>
                Either party may terminate an active SOW for convenience upon providing fourteen (14) days written notice. In the event of termination, Client shall pay Raydrim for all work completed, hours logged, and non-cancelable expenses incurred up to the effective termination date.
              </p>
            </section>

            {/* Section 9 */}
            <section id="governing-law" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Scale className={styles.sectionTitleIcon} size={22} />
                9. Governing Law & Dispute Resolution
              </h2>
              <p className={styles.text}>
                These Terms and any dispute arising hereunder shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles. Any legal suit, action, or proceeding shall be instituted exclusively in the federal or state courts located in San Francisco County, California.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Mail className={styles.sectionTitleIcon} size={22} />
                10. Contact & Legal Inquiries
              </h2>
              <p className={styles.text}>
                If you have questions regarding these Terms of Service or require formal legal correspondence, please contact our legal counsel team at:
              </p>
              <div className={styles.contactBox}>
                <p><strong>Raydrim Digital Agency</strong></p>
                <p><strong>Business Owner:</strong> Muhammad Taki Ahmed</p>
                <p><strong>Email:</strong> <a href="mailto:muhammadtakiahmed@icloud.com" className={styles.contactLink}>muhammadtakiahmed@icloud.com</a></p>
                <p><strong>Phone / Mobile:</strong> +880 1873-691022</p>
                <p><strong>Registered Address:</strong> 11618 Masterpara, Dhaka Uttor City Corporation, Dhaka 1230, Bangladesh</p>
                <p><strong>US Banking Address:</strong> JPMorgan Chase Bank N.A., 270 Park Avenue, New York, NY 10017, USA</p>
                <p><strong>Domain:</strong> <a href="https://raydrim.com" className={styles.contactLink}>https://raydrim.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
