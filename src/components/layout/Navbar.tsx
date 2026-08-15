'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ArrowRight } from 'lucide-react';
import { RaydrimIcon } from '@/components/ui/RaydrimLogo';
import Container from '../ui/Container';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <Container size="lg">
          <div className={styles.navContainer}>
            <Link href="/" className={styles.logo} aria-label="Raydrim Home">
              <RaydrimIcon size={30} />
              <span>
                Raydrim<span className={styles.logoDot}>.</span>
                <span className={styles.logoCom}>com</span>
              </span>
            </Link>

            <nav>
              <ul className={styles.navLinks}>
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.navActions}>
              <div className={styles.ctaButton}>
                <Button href="/contact" variant="primary" size="sm" icon={<ArrowRight size={16} />}>
                  Get Started
                </Button>
              </div>

              <button
                className={styles.mobileToggle}
                onClick={() => setMobileOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
