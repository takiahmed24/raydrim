'use client';

import React, { useState, useMemo } from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import CategoryFilters from '@/components/portfolio/CategoryFilters';
import ProjectGrid from '@/components/portfolio/ProjectGrid';
import CaseStudyModal from '@/components/portfolio/CaseStudyModal';
import ClientResultsCounter from '@/components/portfolio/ClientResultsCounter';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { PORTFOLIO_PROJECTS } from '@/data/portfolioData';
import { PortfolioProject } from '@/types';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Compute category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PORTFOLIO_PROJECTS.length };
    PORTFOLIO_PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="main-content">
      {/* Hero Section */}
      <PortfolioHero />

      {/* Main Interactive Gallery */}
      <section style={{ paddingBottom: '40px' }}>
        <Container size="lg">
          <SectionHeading
            badge="Case Studies"
            title={
              <>
                Selected <span className="text-gradient">Work & Benchmarks</span>
              </>
            }
            subtitle="Filter by solution category or explore detailed technical breakdowns."
          />

          <CategoryFilters
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            categoryCounts={categoryCounts}
          />

          <ProjectGrid
            projects={filteredProjects}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        </Container>
      </section>

      {/* Summary Stat Banner */}
      <ClientResultsCounter />

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
