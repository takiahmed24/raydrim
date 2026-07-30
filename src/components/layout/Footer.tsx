'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { TwitterIcon, LinkedinIcon, GithubIcon, InstagramIcon } from '@/components/ui/SocialIcons';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styles from './Footer.module.css';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Whop Store 🛍️', href: 'https://whop.com/raydrim', external: true },
];

const SERVICE_LINKS = [
  { label: 'Custom Web Applications', href: '/services#web', badge: 'Popular' },
  { label: 'AI Solutions & Integration', href: '/services#ai', badge: 'Hot' },
  { label: 'UI/UX Design Systems', href: '/services#design' },
  { label: 'Cloud & Infrastructure', href: '/services#cloud' },
  { label: 'Mobile App Development', href: '/services#mobile' },
  { label: 'Growth & Strategy', href: '/services#growth' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className={styles.footer}>
      <Container size="lg">
        <div className={styles.grid}>
          {/* Col 1: Branding */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <Sparkles size={22} />
              </div>
              <span>
                Raydrim<span className={styles.logoDot}>.</span>
                <span className={styles.logoCom}>com</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Crafting hyper-scalable digital experiences, AI-driven platforms, and bespoke web solutions for visionary brands worldwide.
            </p>
            <div className={styles.socials}>
              <a href="https://x.com/takiahmed24" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
                <TwitterIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-taki-ahmed-49059b426" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://github.com/takiahmed24" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://instagram.com/_lucife.yu" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linksList}>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linksList}>
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.link}>
                    <span>{link.label}</span>
                    {link.badge && <span className={styles.badge}>{link.badge}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div>
            <h4 className={styles.colTitle}>Get In Touch</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <span>muhammadtakiahmed@icloud.com</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={18} className={styles.contactIcon} />
                <span>Dhaka-1230, Bangladesh</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                <span>+880 1873-691022</span>
              </li>
            </ul>

            <div className={styles.newsletter}>
              <p className={styles.newsletterTitle}>Subscribe to Insights</p>
              {subscribed ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--jungle-400)', fontSize: '0.9rem' }}>
                  <CheckCircle size={18} />
                  <span>Subscribed! Thank you.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className={styles.form}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                  />
                  <Button type="submit" variant="primary" size="sm">
                    <ArrowRight size={16} />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Raydrim Digital Agency. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.bottomLink}>
              Terms of Service
            </Link>
            <Link href="/security" className={styles.bottomLink}>
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
