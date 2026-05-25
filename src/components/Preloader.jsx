import { useEffect, useState } from 'react';

// Brand-mark preloader. Mounted once at the root. Stays visible until
// the page emits `load` (all images, fonts, iframes) — with a 600ms
// minimum so it doesn't flash, and a 5s hard ceiling so a slow asset
// can't lock the user out.
export default function Preloader() {
  const [ready, setReady] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const startedAt = Date.now();
    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      const elapsed = Date.now() - startedAt;
      const wait = Math.max(0, 600 - elapsed);
      setTimeout(() => !cancelled && setReady(true), wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    const ceiling = setTimeout(finish, 5000);

    return () => {
      cancelled = true;
      window.removeEventListener('load', finish);
      clearTimeout(ceiling);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setHidden(true), 700);
    return () => clearTimeout(t);
  }, [ready]);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'linear-gradient(180deg, #020f2d 0%, #061a3d 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '22px',
        opacity: ready ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: ready ? 'none' : 'auto',
      }}
    >
      <img
        src="/logo/mark-on-dark.png"
        alt=""
        width="64"
        height="64"
        style={{
          width: 64,
          height: 64,
          objectFit: 'contain',
          animation: 'preloaderPulse 1.6s ease-in-out infinite',
        }}
        onError={(e) => {
          e.currentTarget.src = '/logo/mark-on-light.png';
        }}
      />
      <div
        style={{
          width: 96,
          height: 2,
          borderRadius: 2,
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, transparent, #60a5fa, transparent)',
            animation: 'preloaderBar 1.4s ease-in-out infinite',
          }}
        />
      </div>
      <style>{`
        @keyframes preloaderPulse {
          0%, 100% { opacity: 0.55; transform: scale(0.96); }
          50%      { opacity: 1;    transform: scale(1.04); }
        }
        @keyframes preloaderBar {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
