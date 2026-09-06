import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield } from 'lucide-react';

interface PracticeAreasHeroProps {
  onNavigate: (href: string) => void;
  onOpenConsultation: () => void;
}

export const PracticeAreasHero: React.FC<PracticeAreasHeroProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section
      id="practice-areas-hero"
      className="relative min-h-[580px] lg:min-h-[640px] pt-32 pb-20 flex items-center bg-[#071A2B] text-white overflow-hidden border-b border-white/10"
      aria-labelledby="practice-hero-title"
    >
      {/* Background Architectural Image with Dark Overlay and Slow Scale Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Modern architectural glass facade of commercial corporate headquarters"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
          />
        </motion.div>

        {/* Multi-layered High-Contrast Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/85 to-[#071A2B]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/90 to-transparent" />
        {/* Architectural Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #C99A4A 1px, transparent 1px), linear-gradient(to bottom, #C99A4A 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-white/50 mb-8"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="hover:text-[#E0B86A] transition-colors"
          >
            Home
          </a>
          <ChevronRight className="w-3 h-3 text-[#C99A4A]/60" />
          <span className="text-[#C99A4A] font-semibold" aria-current="page">
            Practice Areas
          </span>
        </motion.nav>

        {/* Gold Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="w-6 h-[2px] bg-[#C99A4A]" />
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C99A4A]">
            OUR EXPERTISE
          </span>
        </motion.div>

        {/* Large Serif Heading Revealed Line by Line */}
        <div className="max-w-4xl mb-6">
          <motion.h1
            id="practice-hero-title"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3,
                },
              },
            }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              className="block"
            >
              Legal Expertise for
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
              className="block text-[#F1F2F3]"
            >
              Complex Business Decisions
            </motion.span>
          </motion.h1>
        </div>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl font-sans font-normal leading-relaxed mb-10"
        >
          From everyday commercial matters to high-stakes transactions and disputes, our attorneys provide strategic legal guidance designed around your objectives.
        </motion.p>

        {/* Action & Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex flex-wrap items-center gap-6 pt-2"
        >
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/contact');
            }}
            className="bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-3.5 font-bold text-sm tracking-wide transition-all hover:translate-y-[-2px] shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <span>Consult With Practice Partners</span>
          </a>

          <div className="flex items-center gap-3 text-xs text-white/60 font-mono">
            <span className="flex items-center gap-1.5 text-[#C99A4A]">
              <Shield className="w-4 h-4" />
              <span>8 Specialized Groups</span>
            </span>
            <span className="text-white/20">•</span>
            <span>Senior Partner Direct Lead</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
