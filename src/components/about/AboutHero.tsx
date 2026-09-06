import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Award } from 'lucide-react';

interface AboutHeroProps {
  onNavigate: (href: string) => void;
  onOpenConsultation: () => void;
}

export const AboutHero: React.FC<AboutHeroProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section
      id="about-hero"
      className="relative min-h-[620px] lg:min-h-[680px] pt-32 pb-20 flex items-center bg-[#071A2B] text-white overflow-hidden border-b border-white/10"
      aria-labelledby="about-hero-title"
    >
      {/* Background Subtle Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #C99A4A 1px, transparent 1px), linear-gradient(to bottom, #C99A4A 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
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
                About
              </span>
            </motion.nav>

            {/* Gold Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 mb-4"
            >
              <span className="w-6 h-[2px] bg-[#C99A4A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C99A4A]">
                THE FIRM
              </span>
            </motion.div>

            {/* Main Heading Revealed Line-by-Line */}
            <div className="mb-6">
              <motion.h1
                id="about-hero-title"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.16,
                      delayChildren: 0.3,
                    },
                  },
                }}
                className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                  }}
                  className="block"
                >
                  Built on Experience.
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                  }}
                  className="block text-[#E0B86A]"
                >
                  Driven by Purpose.
                </motion.span>
              </motion.h1>
            </div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-white/75 max-w-xl font-sans leading-relaxed mb-10"
            >
              At Veritas Law Group, we believe exceptional legal counsel begins with understanding the people, businesses, and ambitions behind every matter.
            </motion.p>

            {/* Micro Badge Indicators */}
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
                className="bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-3.5 font-bold text-sm tracking-wide transition-all hover:translate-y-[-2px] shadow-lg cursor-pointer"
              >
                <span>Contact Us Now</span>
              </a>

              <div className="flex items-center gap-3 text-xs text-white/60 font-mono">
                <span className="flex items-center gap-1.5 text-[#C99A4A]">
                  <Award className="w-4 h-4" />
                  <span>Est. 2006</span>
                </span>
                <span className="text-white/20">•</span>
                <span>Partner-Led Counsel</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Hero Image with Slow Scale and Overlay */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative overflow-hidden border border-white/10 shadow-2xl group bg-[#0B2238]"
            >
              {/* Outer Geometric Frame Accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#C99A4A] pointer-events-none z-20" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#C99A4A] pointer-events-none z-20" />

              <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4]">
                <motion.img
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.06 }}
                  transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern corporate law firm boardroom overlooking metropolitan skyline"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
                />

                {/* Subtle Navy Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/40 to-transparent" />

                {/* Bottom Trust Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#071A2B]/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C99A4A] block">
                        Commercial Advisory
                      </span>
                      <span className="font-serif text-sm font-bold text-white">
                        New York & Global Counsel
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">
                        Status
                      </span>
                      <span className="text-xs text-white/80 font-mono">Independent</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
