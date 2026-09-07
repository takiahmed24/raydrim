'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Layers, Cpu, Gauge, ShoppingCart, Bot } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import styles from './VideoTheater.module.css';

interface ShowcaseVideo {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  src: string;
  description: string;
}

const VIDEOS: ShowcaseVideo[] = [
  {
    id: 'services',
    title: 'Studio Capabilities',
    subtitle: 'Next.js 16 & React Native',
    badge: 'Flagship Services',
    icon: <Sparkles size={18} />,
    src: '/videos/raydrim_services_showcase.mp4',
    description: 'High-performance web and native mobile application architecture with 100% full source code ownership.'
  },
  {
    id: 'vault',
    title: 'The Dev Vault',
    subtitle: 'Free Production Code Drops',
    badge: '100% Free Access',
    icon: <Layers size={18} />,
    src: '/videos/raydrim_vault_showcase.mp4',
    description: 'Weekly curated boilerplates, 60fps gestures, and architectural blueprints for founders and developers.'
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    subtitle: 'Full-Stack Software Systems',
    badge: 'Clean Architecture',
    icon: <Cpu size={18} />,
    src: '/videos/raydrim_architecture_showcase.mp4',
    description: 'Zero-tech-debt systems, type-safe APIs, resilient background jobs, and cloud-native scaling.'
  },
  {
    id: 'performance',
    title: 'Sub-Second Velocity',
    subtitle: '100/100 Lighthouse Optimization',
    badge: 'Telemetry & Speed',
    icon: <Gauge size={18} />,
    src: '/videos/raydrim_performance_showcase.mp4',
    description: 'Ultra-fast page loads, zero layout shifts, and real-time conversion-optimized dashboards.'
  },
  {
    id: 'ecommerce',
    title: 'Headless E-Commerce',
    subtitle: 'Shopify Storefront & Custom 3D',
    badge: 'High Conversion',
    icon: <ShoppingCart size={18} />,
    src: '/videos/raydrim_ecommerce_showcase.mp4',
    description: 'Custom 3D product showrooms, sub-second headless checkout, and zero cart abandonment engineering.'
  },
  {
    id: 'ai-agents',
    title: 'AI Agent Swarms',
    subtitle: 'LangChain & Vector RAG',
    badge: 'Autonomous Systems',
    icon: <Bot size={18} />,
    src: '/videos/raydrim_ai_agent_showcase.mp4',
    description: 'Multi-agent orchestration, pgvector semantic search, self-correcting loops, and sub-50ms inference workflows.'
  },
  {
    id: 'financial-ai',
    title: 'Financial Intel & RAG',
    subtitle: 'SEC EDGAR & Market Feeds',
    badge: 'Trending Reel',
    icon: <Cpu size={18} />,
    src: '/videos/raydrim_financial_ai_showcase.mp4',
    description: 'Autonomous financial intelligence engine parsing SEC EDGAR real-time filings with sub-50ms vector search.'
  }
];

export default function VideoTheater() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = VIDEOS[activeIdx];

  const handleSelectVideo = (idx: number) => {
    setActiveIdx(idx);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.src = VIDEOS[idx].src;
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className={styles.theaterWrapper}>
      {/* Video Selector Tabs */}
      <div className={styles.tabsGrid}>
        {VIDEOS.map((vid, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={vid.id}
              onClick={() => handleSelectVideo(idx)}
              className={`${styles.tabCard} ${isActive ? styles.tabActive : ''}`}
              type="button"
            >
              <div className={styles.tabHeader}>
                <span className={styles.tabIcon}>{vid.icon}</span>
                <span className={styles.tabBadge}>{vid.badge}</span>
              </div>
              <div className={styles.tabInfo}>
                <span className={styles.tabTitle}>{vid.title}</span>
                <span className={styles.tabSubtitle}>{vid.subtitle}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Video Viewport */}
      <GlassCard variant="accent" className={styles.videoCard}>
        <div className={styles.screenContainer}>
          <video
            ref={videoRef}
            src={activeVideo.src}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className={styles.videoPlayer}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Floating Controls Overlay */}
          <div className={styles.controlsBar}>
            <div className={styles.activeMeta}>
              <span className={styles.metaBadge}>{activeVideo.badge}</span>
              <span className={styles.metaTitle}>{activeVideo.title}</span>
            </div>

            <div className={styles.controlButtons}>
              <button
                onClick={togglePlay}
                className={styles.iconBtn}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                type="button"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>

              <button
                onClick={toggleMute}
                className={styles.iconBtn}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                type="button"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Video Explanation Footer */}
        <div className={styles.videoFooter}>
          <div className={styles.descriptionBox}>
            <p className={styles.descText}>{activeVideo.description}</p>
          </div>
          <div className={styles.specsBox}>
            <span className={styles.specItem}>Format: 720p 24fps</span>
            <span className={styles.specDot}>•</span>
            <span className={styles.specItem}>Captions: Animated ASS Subtitles</span>
            <span className={styles.specDot}>•</span>
            <span className={styles.specItem}>Generated in Google Flow</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
