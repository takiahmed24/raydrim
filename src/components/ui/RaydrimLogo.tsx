import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export function RaydrimIcon({
  size = 32,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      {/* Vermillion Top Diagonal Accent Tab */}
      <path
        d="M 12 22 H 48 L 34 36 H 22 Z"
        fill="#ff4d2e"
      />
      {/* Sleek Modern R Body */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 22 26 H 64 C 80 26 92 36 92 50 C 92 64 80 72 62 72 H 44 L 72 96 H 52 L 28 72 V 96 H 12 V 26 H 22 Z M 28 38 V 60 H 58 C 68 60 76 56 76 49 C 76 42 68 38 58 38 H 28 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function RaydrimLogo({ size = 32, showText = true, className = '' }: LogoProps) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }} className={className}>
      <RaydrimIcon size={size} />
      {showText && (
        <span
          style={{
            fontFamily: 'var(--font-space-grotesk), var(--font-heading), sans-serif',
            fontSize: `${size * 0.72}px`,
            fontWeight: 700,
            color: 'var(--ink)',
            letterSpacing: '-0.035em',
            lineHeight: 1,
            display: 'inline-flex',
            alignItems: 'baseline',
          }}
        >
          Raydrim
          <span style={{ color: 'var(--accent)' }}>.</span>
          <span style={{ fontSize: '0.72em', fontWeight: 600, color: 'var(--ink-soft)' }}>com</span>
        </span>
      )}
    </div>
  );
}
