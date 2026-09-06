import React from 'react';
import { motion } from 'motion/react';
import { Shield, Compass, Award, Users } from 'lucide-react';
import { FIRM_VALUES } from '../../data/aboutData';

const getValueIcon = (iconName: string) => {
  switch (iconName) {
    case 'shield':
      return <Shield className="w-6 h-6 text-[#C99A4A]" />;
    case 'compass':
      return <Compass className="w-6 h-6 text-[#C99A4A]" />;
    case 'award':
      return <Award className="w-6 h-6 text-[#C99A4A]" />;
    case 'users':
      return <Users className="w-6 h-6 text-[#C99A4A]" />;
    default:
      return <Shield className="w-6 h-6 text-[#C99A4A]" />;
  }
};

export const OurValues: React.FC = () => {
  return (
    <section
      id="our-values"
      className="py-20 sm:py-28 bg-[#0B2238] text-white relative border-b border-white/10"
      aria-labelledby="values-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            CORE PRINCIPLES
          </span>
          <h2
            id="values-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            What Guides Our Work.
          </h2>
        </div>

        {/* Editorial Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FIRM_VALUES.map((val, idx) => {
            const isFeatured = idx === 0 || idx === 3;

            return (
              <motion.div
                key={val.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`p-8 sm:p-10 border transition-all duration-300 group relative flex flex-col justify-between ${
                  isFeatured
                    ? 'bg-[#071A2B] border-white/15 hover:border-[#C99A4A]'
                    : 'bg-[#0E2C48]/60 border-white/10 hover:border-[#C99A4A]/60'
                }`}
              >
                {/* Top Gold Accent Line on Hover */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C99A4A] group-hover:w-full transition-all duration-500 ease-out" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-[#0B2238] border border-white/10 flex items-center justify-center transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">
                      {getValueIcon(val.iconName)}
                    </div>
                    <span className="text-xs font-mono tracking-widest text-white/30 uppercase">
                      Value 0{idx + 1}
                    </span>
                  </div>

                  {/* Title with Gold Underline Animation */}
                  <div className="inline-block relative mb-4">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#E0B86A] transition-colors">
                      {val.title}
                    </h3>
                    <span className="block h-[2px] w-0 bg-[#C99A4A] group-hover:w-full transition-all duration-300 ease-out mt-1" />
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
                  <span>Standard of Practice</span>
                  <span className="text-[#C99A4A] opacity-0 group-hover:opacity-100 transition-opacity">
                    Applied Always
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
