const positions = {
  'top-right': { top: '-30%', right: '-30%' },
  'top-left': { top: '-30%', left: '-30%' },
  'bottom-right': { bottom: '-30%', right: '-30%' },
  'bottom-left': { bottom: '-30%', left: '-30%' },
  'top-center': { top: '-30%', left: '50%', transform: 'translateX(-50%)' },
  'bottom-center': { bottom: '-30%', left: '50%', transform: 'translateX(-50%)' },
  'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
};

export default function LightLeak({
  position = 'top-right',
  color = 'rgba(255, 107, 53, 0.45)',
  size = 360,
  blur = 80,
  className = '',
}) {
  return (
    <div
      className={`absolute pointer-events-none rounded-full ${className}`}
      style={{
        ...positions[position],
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
