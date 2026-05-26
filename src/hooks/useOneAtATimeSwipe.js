import { useEffect, useRef, useState } from 'react';

// Mobile-only one-step swipe carousel with active gesture discrimination.
//
// The previous version used React's synthetic onTouchStart/onTouchEnd, which
// only fire AFTER the browser has already decided the gesture direction.
// On diagonal swipes with any vertical component the browser would commit to
// scrolling the page, and the carousel would seem unresponsive.
//
// This version attaches a NON-passive `touchmove` listener directly on a
// container DOM node, watches dx vs dy from the start of the gesture, and
// commits to either «horizontal» (preventDefault + manage as carousel swipe)
// or «vertical» (let the page scroll). The horizontal bias is generous —
// even ~30° diagonal swipes count as horizontal.
//
// The container also needs `touch-action: pan-y` so the browser doesn't grab
// horizontal pans natively before our JS gets a chance to discriminate.
//
// API:
//   const { activeIndex, goTo, containerRef, trackRef, trackStyle } = useOneAtATimeSwipe(count)
//   <div ref={containerRef} className="touch-pan-y overflow-hidden ...">
//     <div ref={trackRef} className="flex ..." style={trackStyle}>{cards}</div>
//   </div>
export default function useOneAtATimeSwipe(itemCount) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [step, setStep] = useState(0);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const startRef = useRef({ x: 0, y: 0 });
  const gestureRef = useRef('undecided'); // 'undecided' | 'horizontal' | 'vertical'
  const activeIndexRef = useRef(0);
  const itemCountRef = useRef(itemCount);

  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);
  useEffect(() => { itemCountRef.current = itemCount; }, [itemCount]);

  // Defensive clamp if itemCount drops below current index.
  useEffect(() => {
    if (activeIndex > itemCount - 1) setActiveIndex(Math.max(0, itemCount - 1));
  }, [itemCount, activeIndex]);

  // Track viewport breakpoint — hook only acts below lg (1024px).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Measure first card width + gap so the transform offset matches layout.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      const first = el.firstElementChild;
      if (!first) return;
      const w = first.getBoundingClientRect().width;
      const gapStr = getComputedStyle(el).columnGap || getComputedStyle(el).gap || '16';
      const gap = parseFloat(gapStr) || 16;
      setStep(w + gap);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [itemCount, isMobile]);

  const goTo = (i) => {
    setActiveIndex(Math.max(0, Math.min(i, itemCount - 1)));
  };

  // Active gesture discrimination on a non-passive touchmove listener.
  useEffect(() => {
    if (!isMobile) return;
    const el = containerRef.current;
    if (!el) return;

    const onStart = (e) => {
      const t = e.touches[0];
      startRef.current = { x: t.clientX, y: t.clientY };
      gestureRef.current = 'undecided';
    };

    const onMove = (e) => {
      if (gestureRef.current === 'vertical') return; // let the page scroll
      const t = e.touches[0];
      const dx = t.clientX - startRef.current.x;
      const dy = t.clientY - startRef.current.y;

      if (gestureRef.current === 'undecided') {
        // Wait for a few px of movement before committing — eliminates jitter on stationary touches.
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        // Generous horizontal bias: dx only needs to be ~60% of dy to win.
        // ~30° diagonal = horizontal capture. Only > ~60° tilt = vertical scroll.
        if (Math.abs(dx) > Math.abs(dy) * 0.6) {
          gestureRef.current = 'horizontal';
        } else {
          gestureRef.current = 'vertical';
          return;
        }
      }

      // Captured as horizontal — block the page from scrolling while we manage the swipe.
      if (e.cancelable) e.preventDefault();
    };

    const onEnd = (e) => {
      const wasHorizontal = gestureRef.current === 'horizontal';
      gestureRef.current = 'undecided';
      if (!wasHorizontal) return;

      const dx = e.changedTouches[0].clientX - startRef.current.x;
      if (Math.abs(dx) < 40) return; // dead zone — tiny intentions don't change cards
      const dir = dx < 0 ? 1 : -1;
      const next = activeIndexRef.current + dir;
      setActiveIndex(Math.max(0, Math.min(next, itemCountRef.current - 1)));
    };

    // touchstart/touchend can stay passive; only touchmove needs to be cancelable.
    el.addEventListener('touchstart', onStart, { passive: true });
    el.addEventListener('touchmove', onMove, { passive: false });
    el.addEventListener('touchend', onEnd, { passive: true });
    el.addEventListener('touchcancel', onEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onStart);
      el.removeEventListener('touchmove', onMove);
      el.removeEventListener('touchend', onEnd);
      el.removeEventListener('touchcancel', onEnd);
    };
  }, [isMobile]);

  const trackStyle = isMobile
    ? {
        transform: `translate3d(${-activeIndex * step}px, 0, 0)`,
        transition: 'transform 0.45s cubic-bezier(0.32, 0.72, 0, 1)',
        willChange: 'transform',
      }
    : undefined;

  return {
    activeIndex,
    goTo,
    containerRef,
    trackRef,
    trackStyle,
    isMobile,
  };
}
