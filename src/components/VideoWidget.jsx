import { useEffect, useRef, useState } from 'react';

// Floating intro-video widget — anchored bottom-right of the viewport on UA + EN landings only.
// Modes:
//   compact   → small 9:16 preview, muted, autoplay-loop
//   expanded  → larger 9:16 card, click toggles mute, click-outside collapses back
//   hidden    → slid off-screen to the right; a brand-blue handle stays pinned to the right edge so
//               the user can bring it back at any time (no localStorage — fresh on each page load)
// Notes for portability:
//   - JSX (Vite + React), not TSX
//   - Icons via the global iconify-icon web component (Solar pack), not lucide-react
//   - No docking logic from the original example — widget never moves into a page section
//   - `<video>` is rendered ONCE in JSX; container resizes around it so the stream never restarts
const TRANSITION = '0.5s cubic-bezier(0.32, 0.72, 0, 1)';

export default function VideoWidget({ src = '/videos/tania-intro.mp4', poster }) {
  const [mode, setMode] = useState('compact'); // 'compact' | 'expanded' | 'hidden'
  const [isReady, setIsReady] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const widgetRef = useRef(null);

  // Delayed appearance — give Preloader + hero animations room to breathe first.
  useEffect(() => {
    const t = setTimeout(() => setIsReady(true), 2500);
    return () => clearTimeout(t);
  }, []);

  // Click-outside on expanded → collapse back to compact (also mutes via the mode-sync effect).
  useEffect(() => {
    if (mode !== 'expanded') return;
    const onPointerDown = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setMode('compact');
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [mode]);

  // Mute whenever we leave expanded mode.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (mode !== 'expanded') v.muted = true;
  }, [mode]);

  const handleWidgetClick = (e) => {
    e.stopPropagation();
    if (mode === 'compact') {
      setMode('expanded');
      const v = videoRef.current;
      if (v) {
        v.currentTime = 0;
        v.muted = false;
        // .play() may reject if the user revoked autoplay; ignore — video keeps looping silently.
        v.play().catch(() => {});
      }
    } else if (mode === 'expanded') {
      const v = videoRef.current;
      if (v) v.muted = !v.muted;
    }
  };

  const handleHide = (e) => {
    e.stopPropagation();
    setMode('hidden');
  };

  const handleShow = (e) => {
    e.stopPropagation();
    setMode('compact');
  };

  const isHidden = mode === 'hidden';
  const isExpanded = mode === 'expanded';

  const sizeClass = isExpanded
    ? 'w-[200px] h-[356px] sm:w-[230px] sm:h-[409px] lg:w-[260px] lg:h-[462px]'
    : 'w-[112px] h-[199px] sm:w-[130px] sm:h-[231px] lg:w-[155px] lg:h-[276px]';

  return (
    <>
      {/* Floating widget container */}
      <div
        ref={widgetRef}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-40"
        style={{
          transform: isHidden ? 'translateX(calc(100% + 24px))' : 'translateX(0)',
          opacity: isReady ? 1 : 0,
          transition: `transform ${TRANSITION}, opacity 0.7s ease`,
          pointerEvents: isHidden || !isReady ? 'none' : 'auto',
        }}
      >
        <div
          onClick={handleWidgetClick}
          className={`group relative overflow-hidden rounded-2xl border border-white/30 cursor-pointer bg-slate-950 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${sizeClass}`}
          style={{
            boxShadow:
              '0 18px 50px rgba(15,23,42,0.25), 0 6px 18px rgba(15,23,42,0.10)',
          }}
        >
          {/* Always-mounted <video> — never re-keyed, so swapping modes won't restart the stream. */}
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover object-top"
          />

          {/* Hide button — slides the widget off-screen, revealing the handle */}
          <button
            type="button"
            onClick={handleHide}
            aria-label="Сховати відео"
            className="absolute top-1.5 right-1.5 z-10 w-7 h-7 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center hover:bg-black/75 transition-colors"
          >
            <iconify-icon
              icon="solar:alt-arrow-right-linear"
              width="14"
              height="14"
              style={{ color: '#fff' }}
            />
          </button>

          {/* Mute indicator — visual hint in compact mode that tap = sound */}
          {mode === 'compact' && !videoError && (
            <div className="absolute bottom-1.5 right-1.5 z-10 w-7 h-7 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center pointer-events-none">
              <iconify-icon
                icon="solar:volume-cross-linear"
                width="14"
                height="14"
                style={{ color: '#fff' }}
              />
            </div>
          )}

          {/* Sound-on indicator — confirms unmuted state in expanded mode */}
          {mode === 'expanded' && !videoError && (
            <div className="absolute bottom-2 right-2 z-10 w-8 h-8 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center pointer-events-none">
              <iconify-icon
                icon="solar:volume-loud-linear"
                width="16"
                height="16"
                style={{ color: '#fff' }}
              />
            </div>
          )}

          {/* Fallback when video file is missing / unsupported */}
          {videoError && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#020f2d] via-[#0a1a3d] to-[#175ae8] flex flex-col items-center justify-center gap-2">
              <iconify-icon
                icon="solar:play-circle-linear"
                width="32"
                height="32"
                style={{ color: '#fff' }}
              />
              <span className="text-[10px] tracking-[0.18em] uppercase text-white/80 font-medium">
                Video
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Slide-back handle — pinned to the right edge, visible only while widget is hidden */}
      <button
        type="button"
        onClick={handleShow}
        aria-label="Показати відео"
        className="fixed right-0 bottom-16 sm:bottom-20 lg:bottom-24 z-40 w-6 h-20 rounded-l-xl flex items-center justify-center transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #020f2d 0%, #175ae8 100%)',
          boxShadow:
            '-4px 6px 18px rgba(15,23,42,0.25), inset 0 1px 0 rgba(255,255,255,0.15)',
          opacity: isHidden && isReady ? 1 : 0,
          pointerEvents: isHidden && isReady ? 'auto' : 'none',
        }}
      >
        <iconify-icon
          icon="solar:alt-arrow-left-linear"
          width="16"
          height="16"
          style={{ color: '#fff' }}
        />
      </button>
    </>
  );
}
