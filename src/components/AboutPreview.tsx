import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutPreviewProps {
  onNavigate: (href: string) => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onNavigate }) => {
  return (
    <section
      id="about-preview"
      className="py-20 sm:py-24 bg-[#F7F5F0] text-[#17202A] relative overflow-hidden border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual with Geometric Frame */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Geometric Outer Hairline Box */}
              <div className="absolute -inset-2 border border-[#071A2B]/10 pointer-events-none hidden sm:block" />

              <div className="relative overflow-hidden shadow-2xl bg-[#071A2B] aspect-[4/3] sm:aspect-[16/11] border border-[#071A2B]/20">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80"
                  alt="Sophisticated executive office interior of Veritas Law Group"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Minimal geometric caption badge */}
              <div className="absolute bottom-6 left-6 bg-[#071A2B] text-white px-4 py-2 text-[10px] uppercase tracking-widest font-sans border border-white/10 font-bold">
                Manhattan Corporate Chambers
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            {/* Eyebrow */}
            <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
              THE FIRM
            </span>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2B] leading-[1.15] tracking-tight mb-6">
              Legal Counsel With a Business Perspective.
            </h2>

            {/* Geometric Gold Divider */}
            <div className="w-8 h-[2px] bg-[#C99A4A] mb-6" />

            {/* Short copy */}
            <p className="text-base text-[#17202A]/80 leading-relaxed font-sans mb-4">
              We combine legal experience with commercial understanding to help businesses navigate important decisions, manage risk, and move forward with confidence.
            </p>

            {/* Second paragraph */}
            <p className="text-sm text-[#17202A]/70 leading-relaxed font-sans mb-8">
              Our approach is practical, responsive, and built around each client&apos;s objectives.
            </p>

            {/* CTA */}
            <div>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/about');
                }}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#071A2B] hover:text-[#C99A4A] group transition-colors pb-1 border-b border-[#071A2B]/30 hover:border-[#C99A4A]"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C99A4A] transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
