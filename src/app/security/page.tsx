import type { Metadata } from 'next';
import {
  ShieldCheck,
  Lock,
  Server,
  Key,
  Database,
  Cpu,
  FileCheck,
  Mail,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { CONTACT_INFO } from '@/data/contactData';
import styles from './security.module.css';

export const metadata: Metadata = {
  title: 'Security & Compliance Standards',
  description:
    'Learn about Raydrim’s SOC-2, TLS 1.3, AES-256 encryption, zero-trust cloud architecture, and cybersecurity standards.',
  alternates: {
    canonical: 'https://raydrim.com/security',
  },
  openGraph: {
    title: 'Security & Compliance Standards | Raydrim Digital Agency',
    description:
      'Raydrim Security Standard — Comprehensive overview of cloud security, data encryption, and access controls.',
    url: 'https://raydrim.com/security',
  },
};

const SECTIONS = [
  { id: 'overview', title: '1. Security Architecture Overview', icon: ShieldCheck },
  { id: 'encryption', title: '2. Encryption & Key Management', icon: Lock },
  { id: 'cloud-infra', title: '3. Cloud & Edge Infrastructure', icon: Server },
  { id: 'access-control', title: '4. Authentication & Access Control', icon: Key },
  { id: 'data-protection', title: '5. Database & Storage Isolation', icon: Database },
  { id: 'code-audits', title: '6. Code Audits & Vulnerability Scans', icon: Cpu },
  { id: 'compliance', title: '7. Statutory Compliance', icon: FileCheck },
  { id: 'reporting', title: '8. Vulnerability Reporting', icon: Mail },
];

export default function SecurityPage() {
  return (
    <div className={styles.pageWrapper}>
      <Container size="lg">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Enterprise Cybersecurity"
            title={
              <>
                Security & <span className="text-gradient">Compliance</span>
              </>
            }
            subtitle="Security is engineered into every line of code we ship. Explore Raydrim's zero-trust architecture, encryption protocols, and cloud compliance."
            align="center"
          />
          <p className={styles.lastUpdated}>Last Audited: July 30, 2024 • SOC-2 & OWASP Certified Standard</p>
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
                1. Security Architecture Overview
              </h2>
              <p className={styles.text}>
                At <strong>Raydrim</strong>, security is never an afterthought. We enforce a zero-trust engineering paradigm across our entire software development lifecycle (SDLC), ensuring client data, source repositories, and cloud workloads are protected against emerging cyber threats.
              </p>
            </section>

            {/* Section 2 */}
            <section id="encryption" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Lock className={styles.sectionTitleIcon} size={22} />
                2. Data Encryption Standards
              </h2>
              <p className={styles.text}>
                We implement bank-grade encryption protocols across all network communication and data storage layers:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Data in Transit:</strong> Mandatory TLS 1.3 encryption with strict HTTP Strict Transport Security (HSTS) and perfect forward secrecy (PFS).
                </li>
                <li className={styles.listItem}>
                  <strong>Data at Rest:</strong> AES-256 bit hardware-level encryption across all cloud storage buckets, relational databases, and server volumes.
                </li>
                <li className={styles.listItem}>
                  <strong>Key Management:</strong> Automated KMS key rotation with hardware security modules (HSM).
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="cloud-infra" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Server className={styles.sectionTitleIcon} size={22} />
                3. Cloud & Edge Infrastructure Isolation
              </h2>
              <p className={styles.text}>
                Our applications run on tier-1 multi-region cloud providers (Amazon Web Services, Vercel Enterprise, Cloudflare) with automated DDoS protection, Web Application Firewalls (WAF), and isolated Virtual Private Clouds (VPC).
              </p>
            </section>

            {/* Section 4 */}
            <section id="access-control" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Key className={styles.sectionTitleIcon} size={22} />
                4. Authentication & Access Control
              </h2>
              <p className={styles.text}>
                All developer access requires multi-factor authentication (MFA), hardware security keys (FIDO2/WebAuthn), and Role-Based Access Control (RBAC) governed by the principle of least privilege.
              </p>
            </section>

            {/* Section 5 */}
            <section id="data-protection" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Database className={styles.sectionTitleIcon} size={22} />
                5. Database & Storage Isolation
              </h2>
              <p className={styles.text}>
                Client staging and production environments operate in logically segregated VPC subnets with strict firewall rules, automated continuous backups, and real-time point-in-time recovery (PITR).
              </p>
            </section>

            {/* Section 6 */}
            <section id="code-audits" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Cpu className={styles.sectionTitleIcon} size={22} />
                6. Automated Audits & Vulnerability Scanning
              </h2>
              <p className={styles.text}>
                Every pull request undergoes automated Static Application Security Testing (SAST), Dependency Vulnerability Scanning (Snyk / Dependabot), and OWASP Top 10 code checks prior to staging deployment.
              </p>
            </section>

            {/* Section 7 */}
            <section id="compliance" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <FileCheck className={styles.sectionTitleIcon} size={22} />
                7. Statutory & Payment Compliance
              </h2>
              <p className={styles.text}>
                Raydrim architectures comply with major statutory frameworks including GDPR, CCPA, and PCI-DSS Level 1 payment gateway standards (Stripe, Payoneer, Wise, ACH).
              </p>
            </section>

            {/* Section 8 */}
            <section id="reporting" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Mail className={styles.sectionTitleIcon} size={22} />
                8. Vulnerability Disclosure & Contact
              </h2>
              <p className={styles.text}>
                We welcome responsible security research. If you discover a potential vulnerability, please notify our security team directly:
              </p>
              <div className={styles.contactBox}>
                <p><strong>Raydrim Cybersecurity Office</strong></p>
                <p><strong>Business Owner:</strong> {CONTACT_INFO.owner}</p>
                <p><strong>Security Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactLink}>{CONTACT_INFO.email}</a></p>
                <p><strong>Phone / Mobile:</strong> {CONTACT_INFO.phone}</p>
                <p><strong>HQ Address:</strong> {CONTACT_INFO.address}</p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
