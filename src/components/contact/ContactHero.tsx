import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Phone, ArrowRight, Shield, Award } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_CONFIG, PHONE_CONFIG } from '../../data/contactData';

interface ContactHeroProps {
  onNavigate: (href: string) => void;
  onScrollToForm?: () => void;
}

export const ContactHero: React.FC<ContactHeroProps> = ({
  onNavigate,
}) => {
  return (
    <section
      id="contact-hero"
      className="relative min-h-[580px] lg:min-h-[640px] pt-32 pb-20 flex items-center bg-[#071A2B] text-white overflow-hidden border-b border-white/10"
      aria-labelledby="contact-hero-title"
    >
      {/* Background Architectural Grid Texture */}
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
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Breadcrumb Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-white/50 mb-6"
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
                Contact
              </span>
            </motion.nav>

            {/* Subtle Gold Eyebrow with Graphic Line */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 mb-4"
            >
              <span className="w-6 h-[2px] bg-[#C99A4A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C99A4A]">
                CONSULTATION & INQUIRY
              </span>
            </motion.div>

            {/* Main Heading Revealed Upward Line-by-Line */}
            <div className="mb-6">
              <motion.h1
                id="contact-hero-title"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.16,
                      delayChildren: 0.25,
                    },
                  },
                }}
                className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]"
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                  }}
                  className="block"
                >
                  Let&apos;s Talk About
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                  }}
                  className="block text-[#E0B86A]"
                >
                  What Comes Next.
                </motion.span>
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
              className="text-base sm:text-lg lg:text-xl text-white/75 max-w-xl font-sans leading-relaxed mb-10"
            >
              Whether you&apos;re navigating a complex transaction, protecting your business, or preparing for what&apos;s ahead, the right legal conversation can make a meaningful difference.
            </motion.p>

            {/* Direct Contact CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                id="hero-whatsapp-btn"
                href={WHATSAPP_CONFIG.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-3.5 font-bold text-sm tracking-wide transition-all hover:translate-y-[-2px] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>WhatsApp Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-call-office-btn"
                href={PHONE_CONFIG.telUri}
                className="border border-white/25 hover:border-[#C99A4A] text-white hover:text-[#E0B86A] px-7 py-3.5 font-bold text-sm tracking-wide transition-all hover:bg-white/5 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C99A4A]" />
                <span>Call Our Office</span>
              </a>
            </motion.div>

            {/* Micro Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mt-8 flex items-center gap-4 text-xs text-white/50 font-mono"
            >
              <span className="flex items-center gap-1.5 text-[#C99A4A]">
                <Shield className="w-3.5 h-3.5" />
                <span>Confidential Counsel</span>
              </span>
              <span className="text-white/20">•</span>
              <span>Direct Partner Response</span>
            </motion.div>
          </div>

          {/* Right Column: Premium Image with Slow Scale & Overlays */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative overflow-hidden border border-white/10 shadow-2xl group bg-[#0B2238]"
            >
              {/* Gold Corner Accents */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#C99A4A] pointer-events-none z-20" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#C99A4A] pointer-events-none z-20" />

              <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4]">
                <motion.img
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80"
                  alt="Executive partner in private legal consultation room overlooking Manhattan"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
                />

                {/* Subtle Navy Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-[#071A2B]/40 to-transparent" />

                {/* Bottom Trust Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#071A2B]/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C99A4A] block">
                        Direct Inquiries
                      </span>
                      <span className="font-serif text-sm font-bold text-white">
                        Private & Confidential
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-white/40 block">
                        Response Time
                      </span>
                      <span className="text-xs text-[#E0B86A] font-mono font-semibold">
                        Within 24 Hours
                      </span>
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
