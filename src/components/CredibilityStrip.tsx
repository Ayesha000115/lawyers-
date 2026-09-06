import React, { useState, useEffect, useRef } from 'react';
import { FIRM_METRICS } from '../data/firmData';

export const CredibilityStrip: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const stripRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters smoothly over 1.6s
          const duration = 1600;
          const startTimestamp = performance.now();

          const step = (now: number) => {
            const elapsed = Math.min(now - startTimestamp, duration);
            const progress = elapsed / duration;
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const nextCounts = FIRM_METRICS.map((m) => Math.floor(m.value * easeOut));
            setCounts(nextCounts);

            if (elapsed < duration) {
              requestAnimationFrame(step);
            } else {
              setCounts(FIRM_METRICS.map((m) => m.value));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="credibility-strip"
      ref={stripRef}
      className="relative bg-[#0B2238] border-b border-white/5 py-6 px-6 lg:px-12 text-white z-10"
      aria-label="Firm Performance Metrics"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 items-center justify-around gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {FIRM_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className={`flex items-baseline justify-center gap-2.5 px-4 ${
                idx > 1 ? 'pt-3 md:pt-0' : ''
              }`}
            >
              {/* Gold Metric Number */}
              <div className="flex items-baseline">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C99A4A]">
                  {counts[idx]}
                </span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#C99A4A]">
                  {metric.suffix}
                </span>
              </div>

              {/* Compact Uppercase Label */}
              <span className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-widest font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
