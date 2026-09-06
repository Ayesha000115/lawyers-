import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (href: string) => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-24 bg-[#071A2B] text-white flex items-center border-b border-white/5 overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #C99A4A 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0B2238]/30 hidden lg:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-4"
            >
              <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase">
                Strategic Legal Counsel
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold leading-[1.12] tracking-tight text-white max-w-2xl mb-6"
            >
              Protecting What <span className="text-[#C99A4A]">You&apos;ve Built.</span> Advancing What Comes Next.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="text-white/70 text-base sm:text-lg max-w-lg mb-8 leading-relaxed font-sans"
            >
              Trusted legal counsel for businesses, executives, and entrepreneurs navigating complex decisions, transactions, and opportunities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-8"
            >
              {/* Primary CTA */}
              <a
                id="hero-primary-cta"
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-3.5 font-bold text-sm tracking-wide hover:translate-y-[-2px] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer rounded-none sm:rounded-sm"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary CTA */}
              <a
                href="/practice-areas"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/practice-areas');
                }}
                className="border border-white/20 px-8 py-3.5 font-bold text-sm text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 rounded-none sm:rounded-sm"
              >
                <span>Explore Practice Areas</span>
                <ArrowUpRight className="w-4 h-4 text-[#C99A4A]" />
              </a>
            </motion.div>

            {/* Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-white/40 font-semibold"
            >
              <span>Confidential</span>
              <span>•</span>
              <span>Strategic</span>
              <span>•</span>
              <span>Client-Focused</span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Large Premium Image with Geometric Floating Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative">
              {/* Subtle Geometric Outer Accent Line */}
              <div className="absolute -inset-2 border border-white/10 pointer-events-none hidden sm:block" />

              <div className="relative overflow-hidden bg-[#0B2238] border border-white/10 aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] shadow-2xl">
                {/* Hero Image with Subtle Entrance Scale */}
                <motion.img
                  initial={{ scale: 1.04, opacity: 0.9 }}
                  animate={{ scale: 1.0, opacity: 1 }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85"
                  alt="Corporate partners and attorneys reviewing complex transaction agreements in a modern executive boardroom"
                  className="w-full h-full object-cover object-center filter contrast-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card with Geometric Balance Styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
                className="absolute -bottom-6 -left-4 sm:bottom-8 sm:-left-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 max-w-[260px] z-20 shadow-2xl"
              >
                {/* Gold geometric bar */}
                <div className="w-8 h-[2px] bg-[#C99A4A] mb-3" />
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  Trusted Counsel
                </h3>
                <p className="text-white/60 text-xs leading-relaxed font-sans">
                  Strategic advice when the stakes are high. Built around your business objectives.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
