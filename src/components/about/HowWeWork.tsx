import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_PROCESS_STEPS } from '../../data/aboutData';

export const HowWeWork: React.FC = () => {
  return (
    <section
      id="how-we-work"
      className="py-20 sm:py-28 bg-[#F7F5F0] text-[#17202A] relative border-b border-black/10 overflow-hidden"
      aria-labelledby="how-we-work-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            CLIENT ENGAGEMENT
          </span>
          <h2
            id="how-we-work-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2B] tracking-tight"
          >
            A Relationship Built Around You.
          </h2>
        </div>

        {/* Process Steps with Connecting Line */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-black/10 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-[#C99A4A] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {CLIENT_PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-[#17202A]/10 hover:border-[#C99A4A] p-7 sm:p-8 flex flex-col justify-between transition-colors group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-[#071A2B] text-[#E0B86A] font-serif text-sm font-bold flex items-center justify-center group-hover:bg-[#C99A4A] group-hover:text-[#071A2B] transition-colors">
                      {step.step}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#17202A]/40 uppercase">
                      Phase {step.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#071A2B] mb-3 group-hover:text-[#8E6B2D] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#17202A]/70 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#17202A]/5 text-[10px] font-mono uppercase tracking-widest text-[#C99A4A] font-semibold">
                  Client Focus
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
