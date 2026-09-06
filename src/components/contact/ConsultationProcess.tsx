import React from 'react';
import { motion } from 'motion/react';
import { WHAT_HAPPENS_NEXT_STEPS } from '../../data/contactData';

export const ConsultationProcess: React.FC = () => {
  return (
    <section
      id="consultation-process"
      className="py-20 sm:py-28 bg-[#071A2B] text-white relative border-b border-white/10 overflow-hidden"
      aria-labelledby="process-heading"
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
            CLEAR EXPECTATIONS
          </span>
          <h2
            id="process-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            What Happens Next.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 font-sans leading-relaxed">
            We respect your time and priorities. From your initial message or phone call, our process is designed to deliver immediate clarity and actionable strategic counsel.
          </p>
        </div>

        {/* Process Timeline with Continuous Connecting Gold Line */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Gold Line */}
          <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-white/10 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-[#C99A4A] origin-left"
            />
          </div>

          {/* Mobile Vertical Connecting Gold Line */}
          <div className="lg:hidden absolute top-[20px] bottom-[20px] left-[28px] w-[2px] bg-white/10 z-0">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-full bg-[#C99A4A] origin-top"
            />
          </div>

          {/* Grid of 3 Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10 relative z-10">
            {WHAT_HAPPENS_NEXT_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex lg:flex-col items-start gap-6 lg:gap-0 pl-14 lg:pl-0 group"
              >
                {/* Step Number Badge */}
                <div className="lg:mb-6 shrink-0 relative">
                  <div className="w-12 h-12 bg-[#0B2238] border border-[#C99A4A] flex items-center justify-center font-serif text-base font-bold text-[#E0B86A] group-hover:bg-[#C99A4A] group-hover:text-[#071A2B] transition-colors duration-300 shadow-md">
                    {step.step}
                  </div>
                  {/* Subtle Node Accent on line */}
                  <div className="hidden lg:block absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#C99A4A] rotate-45" />
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-[#0B2238]/60 lg:bg-transparent p-6 lg:p-0 border lg:border-none border-white/10">
                  <span className="text-[10px] font-mono tracking-widest text-[#C99A4A] uppercase block mb-1">
                    Step {step.step}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#E0B86A] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-white/70 font-sans leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                    <span className="w-1.5 h-1.5 bg-[#C99A4A]" />
                    <span>Direct Legal Response</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
