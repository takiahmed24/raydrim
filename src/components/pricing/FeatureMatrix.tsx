'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { FEATURE_MATRIX } from '@/data/pricingData';
import { Check, Minus } from 'lucide-react';
import styles from './FeatureMatrix.module.css';

export default function FeatureMatrix() {
  const renderCellContent = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check size={20} className={styles.checkIcon} />
      ) : (
        <Minus size={18} className={styles.crossIcon} />
      );
    }
    return <span className={styles.valText}>{val}</span>;
  };

  return (
    <section className={styles.matrixSection}>
      <SectionHeading
        badge="In-Depth Matrix"
        title={
          <>
            Detailed Plan <span className="text-gradient">Comparison</span>
          </>
        }
        subtitle="Compare deliverables, SLAs, code ownership, and support across all tiers."
      />

      <ScrollReveal direction="up" delay={0.2}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureColHeader}>Feature & Capability</th>
                <th className={styles.tierColHeader}>Micro ($299)</th>
                <th className={styles.tierColHeader}>Starter ($999)</th>
                <th className={`${styles.tierColHeader} ${styles.popularHeader}`}>Growth ($2,999)★</th>
                <th className={styles.tierColHeader}>Enterprise ($7.5k+)</th>
              </tr>
            </thead>
            <tbody>
              {FEATURE_MATRIX.map((cat, cIdx) => (
                <React.Fragment key={cIdx}>
                  <tr className={styles.categoryHeaderRow}>
                    <td colSpan={5}>{cat.category}</td>
                  </tr>
                  {cat.rows.map((row, rIdx) => (
                    <tr key={rIdx} className={styles.row}>
                      <td className={styles.featureCell}>{row.feature}</td>
                      <td className={styles.valCell}>{renderCellContent(row.starter)}</td>
                      <td className={`${styles.valCell} ${styles.popularValCell}`}>
                        {renderCellContent(row.growth)}
                      </td>
                      <td className={styles.valCell}>{renderCellContent(row.enterprise)}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollReveal>
    </section>
  );
}
