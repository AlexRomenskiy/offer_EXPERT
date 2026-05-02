import { useId } from 'react';

export default function NoiseOverlay({ opacity = 0.1, blendMode = 'overlay', className = '' }) {
  const rawId = useId();
  const filterId = `noise-${rawId.replace(/:/g, '')}`;

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity, mixBlendMode: blendMode }}
      aria-hidden="true"
    >
      <filter id={filterId}>
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} />
    </svg>
  );
}
