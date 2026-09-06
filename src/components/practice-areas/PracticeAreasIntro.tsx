import React from 'react';
import { motion } from 'motion/react';

export const PracticeAreasIntro: React.FC = () => {
  return (
    <section
      id="practice-areas-intro"
      className="py-16 sm:py-20 bg-[#0B2238] text-white relative border-b border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
          HOW WE HELP
        </span>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-5">
          Focused Counsel. Practical Solutions.
        </h2>

        {/* Subtle Animated Gold Line */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ width: 36, opacity: 0.6 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-[2px] bg-[#C99A4A]"
          />
        </div>

        {/* Introduction Text */}
        <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-3xl mx-auto font-sans leading-relaxed">
          Businesses face legal challenges at every stage of growth. Our practice areas are designed to provide clear, commercially focused counsel across the decisions, transactions, and disputes that matter most.
        </p>
      </div>
    </section>
  );
};
