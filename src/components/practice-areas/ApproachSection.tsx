import React from 'react';
import { motion } from 'motion/react';
import { APPROACH_STEPS } from '../../data/practiceAreasData';

export const ApproachSection: React.FC = () => {
  return (
    <section
      id="our-approach"
      className="py-20 sm:py-24 bg-[#0B2238] text-white relative border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            METHODOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How We Approach Your Matter.
          </h2>
        </div>

        {/* 4 Steps with Connecting Gold Line */}
        <div className="relative">
          {/* Subtle Animated Gold Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[4%] right-[4%] h-[2px] bg-white/10 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-[#C99A4A]/40 via-[#C99A4A] to-[#C99A4A]/40 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {APPROACH_STEPS.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#071A2B] border border-white/10 hover:border-[#C99A4A]/50 p-7 sm:p-8 transition-colors group flex flex-col justify-between"
              >
                <div>
                  {/* Step Node Marker */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-none bg-[#0B2238] border border-[#C99A4A] flex items-center justify-center font-serif text-sm font-bold text-[#C99A4A] group-hover:bg-[#C99A4A] group-hover:text-[#071A2B] transition-colors">
                      {step.step}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
                      Stage {step.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#E0B86A] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#C99A4A]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    Precision Counsel
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
