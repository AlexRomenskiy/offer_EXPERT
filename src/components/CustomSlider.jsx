import { useRef } from 'react';
import clsx from 'clsx';

export default function CustomSlider({ value, onChange, min, max, step, disabled = false }) {
  const percentage = ((value - min) / (max - min)) * 100;
  const trackRef = useRef(null);

  const handleInteraction = (clientX) => {
    if (disabled || !trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const rawValue = min + percent * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    const clampedValue = Math.max(min, Math.min(max, steppedValue));
    onChange(clampedValue);
  };

  const handleMouseDown = (e) => {
    if (disabled) return;
    e.preventDefault();
    handleInteraction(e.clientX);

    const handleMouseMove = (moveEvent) => {
      handleInteraction(moveEvent.clientX);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    if (disabled) return;
    handleInteraction(e.touches[0].clientX);

    const handleTouchMove = (moveEvent) => {
      handleInteraction(moveEvent.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <div
      ref={trackRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className={clsx(
        "relative w-full h-8 flex items-center group touch-none",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"
      )}
    >
      <div className="absolute inset-x-0 h-2 bg-slate-200 rounded-full shadow-inner" />
      <div
        className="absolute left-0 h-2 bg-indigo-500 rounded-full transition-all duration-75 ease-out"
        style={{ width: `${percentage}%` }}
      />
      <div
        className={clsx(
          "absolute w-5 h-5 bg-white rounded-full border border-slate-300 shadow-md transition-transform duration-75 flex items-center justify-center",
          disabled ? "" : "group-hover:scale-110 group-active:scale-110 ring-4 ring-indigo-500/20"
        )}
        style={{ left: `calc(${percentage}% - 10px)` }}
      >
        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
      </div>
    </div>
  );
}
