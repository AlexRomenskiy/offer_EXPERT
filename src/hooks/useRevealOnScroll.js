import { useEffect, useRef } from 'react';

export default function useRevealOnScroll(containerRef) {
  const fallbackRef = useRef(null);
  const ref = containerRef || fallbackRef;

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref]);

  return ref;
}
