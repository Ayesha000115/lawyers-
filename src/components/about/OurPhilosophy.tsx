import React from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHY_PRINCIPLES } from '../../data/aboutData';

export const OurPhilosophy: React.FC = () => {
  return (
    <section
      id="our-philosophy"
      className="py-20 sm:py-28 bg-[#071A2B] text-white relative border-b border-white/10 overflow-hidden"
      aria-labelledby="philosophy-heading"
    >
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #C99A4A 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            OUR PHILOSOPHY
          </span>
          <h2
            id="philosophy-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Good Legal Counsel Should Create Clarity.
          </h2>
        </div>

        {/* Three Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.18 }}
              className={`flex flex-col justify-between group ${
                index > 0 ? 'pt-8 md:pt-0 md:pl-8 lg:pl-12' : ''
              }`}
            >
              <div>
                {/* Large Editorial Number */}
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-serif text-5xl sm:text-6xl font-light text-white/30 group-hover:text-[#C99A4A] transition-colors duration-300">
                    {principle.number}
                  </span>
                  <div className="w-8 h-[2px] bg-[#C99A4A]/40 group-hover:w-16 group-hover:bg-[#C99A4A] transition-all duration-400" />
                </div>

                {/* Principle Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-[#E0B86A] transition-colors">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C99A4A]" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  Guiding Standard
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
