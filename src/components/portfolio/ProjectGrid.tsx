'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioProject } from '@/types';
import GlassCard from '@/components/ui/GlassCard';
import { ArrowRight, Eye } from 'lucide-react';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: PortfolioProject[];
  onSelectProject: (project: PortfolioProject) => void;
}

export default function ProjectGrid({ projects, onSelectProject }: ProjectGridProps) {
  return (
    <div className={styles.grid}>
      <AnimatePresence mode="popLayout">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={styles.cardWrapper}
          >
            <GlassCard
              className={styles.projectCard}
              hoverEffect={true}
              glowOnHover={true}
              onClick={() => onSelectProject(project)}
            >
              {/* Image & Category Tag */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.cardImage}
                  loading="lazy"
                />
                <span className={styles.categoryTag}>{project.category}</span>
              </div>

              {/* Card Body */}
              <div className={styles.cardContent}>
                <div className={styles.clientName}>{project.client}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.summary || project.description}</p>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className={styles.metricsRow}>
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className={styles.metricBadge}>
                        <span className={styles.metricVal}>{m.value}</span>
                        <span className={styles.metricLbl}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className={styles.tagsRow}>
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className={styles.tagChip}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className={styles.tagChip}>+{project.tags.length - 3}</span>
                  )}
                </div>

                {/* Action CTA */}
                <div className={styles.cardAction}>
                  <span className={styles.triggerText}>
                    <Eye size={16} />
                    View Case Study
                  </span>
                  <span className={styles.arrowIcon}>
                    <ArrowRight size={18} className="text-jungle-400" />
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
