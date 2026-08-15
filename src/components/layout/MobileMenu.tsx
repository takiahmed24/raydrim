'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Mail, MapPin } from 'lucide-react';
import { RaydrimIcon } from '@/components/ui/RaydrimLogo';
import Button from '../ui/Button';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.header}>
            <Link href="/" className={styles.logo} onClick={onClose}>
              <RaydrimIcon size={30} />
              <span>
                Raydrim<span className={styles.logoDot}>.</span>
                <span className={styles.logoCom}>com</span>
              </span>
            </Link>

            <button className={styles.closeButton} onClick={onClose} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <nav className={styles.nav}>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  onClick={onClose}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={18} opacity={isActive ? 1 : 0.4} />
                </Link>
              );
            })}
          </nav>

          <div className={styles.footer}>
            <Button href="/contact" variant="primary" fullWidth onClick={onClose}>
              Get Started
            </Button>

            <div className={styles.contactInfo}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--jungle-400)" />
                <span>hello@raydrim.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--jungle-400)" />
                <span>San Francisco, CA & Global</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
