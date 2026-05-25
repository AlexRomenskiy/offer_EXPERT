import { useEffect, useRef, useState } from 'react';

// Mobile-only one-step swipe carousel. On <lg the wrapper clips overflow
// and the track is positioned by transform; one swipe = one step (±1),
// fast flicks cannot skip multiple cards. On lg+ the hook becomes a no-op
// (trackStyle is empty, touch handlers bail out) so existing desktop
// flex-column / non-carousel layouts keep working unchanged.
export default function useOneAtATimeSwipe(itemCount) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [step, setStep] = useState(0);
  const trackRef = useRef(null);
  const startXRef = useRef(0);
  const startedRef = useRef(false);

  // Reset if itemCount shrinks below current activeIndex (defensive).
  useEffect(() => {
    if (activeIndex > itemCount - 1) setActiveIndex(Math.max(0, itemCount - 1));
  }, [itemCount, activeIndex]);

  // Track viewport breakpoint — only act as carousel below lg (1024px).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Measure first card width + flex gap so the transform offset matches
  // actual layout (cards may be 88vw, 85vw, or fixed sm:w-[420px]).
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

  const onTouchStart = (e) => {
    if (!isMobile) return;
    startXRef.current = e.touches[0].clientX;
    startedRef.current = true;
  };

  const onTouchEnd = (e) => {
    if (!startedRef.current || !isMobile) return;
    startedRef.current = false;
    const dx = e.changedTouches[0].clientX - startXRef.current;
    if (Math.abs(dx) < 40) return;
    goTo(activeIndex + (dx < 0 ? 1 : -1));
  };

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
    onTouchStart,
    onTouchEnd,
    trackRef,
    trackStyle,
    isMobile,
  };
}
