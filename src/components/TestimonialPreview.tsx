import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialPreview: React.FC = () => {
  return (
    <section
      id="testimonial-preview"
      className="py-20 sm:py-24 bg-[#0B2238] text-white relative border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Eyebrow */}
        <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
          CLIENT PERSPECTIVE
        </span>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-10">
          Trusted by Ambitious Businesses.
        </h2>

        {/* Quote Container with Geometric Balance Styling */}
        <div className="relative bg-[#071A2B] border border-white/10 p-8 sm:p-12 shadow-2xl">
          {/* Subtle Geometric Gold Accent Bar */}
          <div className="w-8 h-[2px] bg-[#C99A4A] mx-auto mb-6" />

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-white/95 leading-relaxed font-normal italic">
            &ldquo;VERITAS LAW gave us clarity when we needed it most. Their advice was commercially focused, practical, and incredibly responsive.&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center">
            <cite className="not-italic font-sans text-base font-bold text-white">
              Michael Carter
            </cite>
            <span className="text-xs text-[#C99A4A] mt-1 tracking-widest uppercase font-semibold">
              CEO, Northbridge Holdings
            </span>
          </div>

          {/* Client Testimonial Tag */}
          <div className="mt-6">
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase font-mono tracking-widest text-white/40 font-medium">
              CLIENT TESTIMONIAL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
