import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_STATS } from '../../data/aboutData';

export const ExperienceStats: React.FC = () => {
  return (
    <section
      id="experience-stats"
      className="py-20 sm:py-24 bg-[#071A2B] text-white relative border-b border-white/10"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            EXPERIENCE
          </span>
          <h2
            id="experience-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Experience That Shapes Perspective.
          </h2>
        </div>

        {/* 4 Stats Grid with Large Gold Numbers and Thin Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-t border-b border-white/10 py-10">
          {EXPERIENCE_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex flex-col items-start px-4 lg:px-8 py-4"
            >
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#C99A4A] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-sans uppercase tracking-widest text-white/70">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
