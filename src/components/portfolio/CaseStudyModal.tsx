'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioProject } from '@/types';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Code2, Calendar, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './CaseStudyModal.module.css';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose} aria-label="Close Case Study Modal">
              <X size={20} />
            </button>

            {/* Banner Header */}
            <div className={styles.imageBanner}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.bannerImage}
              />
              <div className={styles.bannerOverlay} />
              <div className={styles.bannerContent}>
                <span className={styles.categoryBadge}>{project.category}</span>
                <h2 className={styles.modalTitle}>{project.title}</h2>
                <div className={styles.modalClient}>Client: {project.client}</div>
              </div>
            </div>

            {/* Modal Body */}
            <div className={styles.bodyContent}>
              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className={styles.metricsRow}>
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className={styles.metricCard}>
                      <div className={styles.metricValue}>{m.value}</div>
                      <div className={styles.metricLabel}>{m.label}</div>
                    </div>
                  ))}
                  {project.timeline && (
                    <div className={styles.metricCard}>
                      <div className={styles.metricValue}>{project.timeline}</div>
                      <div className={styles.metricLabel}>Delivery Sprint</div>
                    </div>
                  )}
                </div>
              )}

              {/* Problem & Solution Grid */}
              <div className={styles.sectionGrid}>
                {project.problem && (
                  <div className={styles.infoBlock}>
                    <h3 className={styles.blockTitle}>
                      <AlertTriangle size={20} className={styles.blockIcon} />
                      The Challenge / Problem
                    </h3>
                    <p className={styles.blockText}>{project.problem}</p>
                  </div>
                )}

                {project.solution && (
                  <div className={styles.infoBlock}>
                    <h3 className={styles.blockTitle}>
                      <Lightbulb size={20} className={styles.blockIcon} />
                      Raydrim Solution
                    </h3>
                    <p className={styles.blockText}>{project.solution}</p>
                  </div>
                )}
              </div>

              {/* Key Results */}
              {project.keyResults && project.keyResults.length > 0 && (
                <div className={styles.fullBlock}>
                  <h3 className={styles.blockTitle}>
                    <CheckCircle2 size={20} className={styles.blockIcon} />
                    Verified Outcomes & Key Results
                  </h3>
                  <ul className={styles.resultsList}>
                    {project.keyResults.map((res, idx) => (
                      <li key={idx} className={styles.resultItem}>
                        <CheckCircle2 size={18} className={styles.checkIcon} />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {(project.techStack || project.tags) && (
                <div className={styles.fullBlock}>
                  <h3 className={styles.blockTitle}>
                    <Code2 size={20} className={styles.blockIcon} />
                    Technology Stack & Architecture
                  </h3>
                  <div className={styles.techList}>
                    {(project.techStack || project.tags).map((tech, idx) => (
                      <span key={idx} className={styles.techChip}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Actions */}
              <div className={styles.footerActions}>
                <div className={styles.metaGroup}>
                  {project.year && (
                    <div>
                      <span className={styles.metaLabel}>Delivered:</span>
                      <span>{project.year}</span>
                    </div>
                  )}
                  {project.timeline && (
                    <div>
                      <span className={styles.metaLabel}>Timeline:</span>
                      <span>{project.timeline}</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button variant="secondary" size="sm" onClick={onClose}>
                    Close Drawer
                  </Button>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink size={16} />}
                  >
                    Request Similar Build
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
