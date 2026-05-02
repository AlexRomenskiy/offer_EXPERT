import NoiseOverlay from './NoiseOverlay';
import LightLeak from './LightLeak';

const DEFAULT_LEAKS = [
  { position: 'top-right', color: 'rgba(255, 107, 53, 0.4)', size: 360, blur: 80 },
];

export default function DarkCard({
  children,
  className = '',
  noiseOpacity = 0.12,
  leaks = DEFAULT_LEAKS,
  baseColor = '#1c1f24',
  hoverable = true,
  ...rest
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/30 transition-all duration-500 ${
        hoverable ? 'hover:shadow-orange-500/10 hover:-translate-y-1' : ''
      } ${className}`}
      style={{ backgroundColor: baseColor }}
      {...rest}
    >
      {leaks?.map((leak, i) => (
        <LightLeak key={i} {...leak} />
      ))}
      <NoiseOverlay opacity={noiseOpacity} blendMode="overlay" />
      <div className="relative z-10 text-white h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
