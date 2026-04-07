import { useEffect, useRef } from 'react';

export default function UnicornBackground({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const div = document.createElement('div');
    div.setAttribute('data-us-project', 'p7Ff6pfTrb5Gs59C7nLC');
    div.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
    container.appendChild(div);

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (window.UnicornStudio.isInitialized) {
      UnicornStudio.init();
    }

    return () => {
      if (container.contains(div)) {
        container.removeChild(div);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`unicorn-bg ${className}`}
      aria-hidden="true"
    />
  );
}
