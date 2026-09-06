import React from 'react';
import { motion } from 'motion/react';
import { Quote, ShieldCheck } from 'lucide-react';
import { ABOUT_TESTIMONIAL } from '../../data/aboutData';

export const AboutTestimonial: React.FC = () => {
  return (
    <section
      id="about-testimonial"
      className="py-20 sm:py-24 bg-[#0B2238] text-white relative border-b border-white/10"
      aria-label="Client Perspective"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-6">
          CLIENT PERSPECTIVE
        </span>

        {/* Quote Icon */}
        <div className="w-12 h-12 mx-auto mb-6 bg-[#071A2B] border border-[#C99A4A] flex items-center justify-center text-[#C99A4A]">
          <Quote className="w-6 h-6" />
        </div>

        {/* Large Serif Quote */}
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-relaxed mb-8">
          &ldquo;{ABOUT_TESTIMONIAL.quote}&rdquo;
        </blockquote>

        {/* Author & Entity */}
        <div className="mb-4">
          <cite className="not-italic font-serif text-lg font-bold text-white block">
            {ABOUT_TESTIMONIAL.author}
          </cite>
          <span className="text-xs font-sans text-white/60 uppercase tracking-wider">
            {ABOUT_TESTIMONIAL.title}
          </span>
        </div>

        {/* Client Perspective Label */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#071A2B] border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#E0B86A]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C99A4A]" />
          <span>{ABOUT_TESTIMONIAL.badge}</span>
        </div>
      </div>
    </section>
  );
};
