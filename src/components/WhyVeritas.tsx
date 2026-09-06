import React from 'react';
import { DIFFERENTIATORS } from '../data/firmData';
import { ArrowRight } from 'lucide-react';

interface WhyVeritasProps {
  onNavigate: (href: string) => void;
}

export const WhyVeritas: React.FC<WhyVeritasProps> = ({ onNavigate }) => {
  return (
    <section
      id="why-veritas"
      className="py-20 sm:py-24 bg-[#0B2238] text-white relative border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            WHY VERITAS
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            A Different Approach to Legal Counsel.
          </h2>
        </div>

        {/* 3 Differentiators with Geometric Balance Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.number}
              className="relative bg-[#071A2B] border border-white/10 hover:bg-white/[0.02] p-8 transition-colors group"
            >
              {/* Geometric Gold Line */}
              <div className="w-8 h-[2px] bg-[#C99A4A] mb-5" />

              {/* Number */}
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C99A4A] mb-3">
                {diff.number}
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-white mb-2 tracking-wide">
                {diff.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-12 text-center md:text-left">
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/about');
            }}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#C99A4A] hover:text-white transition-colors"
          >
            <span>Discover Our Approach</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
