import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Landmark,
  Scale,
  Users,
  Building2,
  Globe,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { DETAILED_PRACTICE_AREAS } from '../../data/practiceAreasData';
import { DetailedPracticeArea } from '../../types';

interface PracticeAreasEditorialListProps {
  onSelectMatter: (matterTitle: string) => void;
}

const getPracticeIcon = (iconName: DetailedPracticeArea['iconName']) => {
  switch (iconName) {
    case 'briefcase':
      return <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />;
    case 'landmark':
      return <Landmark className="w-6 h-6 sm:w-7 sm:h-7" />;
    case 'scale':
      return <Scale className="w-6 h-6 sm:w-7 sm:h-7" />;
    case 'users':
      return <Users className="w-6 h-6 sm:w-7 sm:h-7" />;
    case 'building':
      return <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />;
    case 'globe':
      return <Globe className="w-6 h-6 sm:w-7 sm:h-7" />;
    case 'shield':
      return <Shield className="w-6 h-6 sm:w-7 sm:h-7" />;
    case 'rocket':
      return <Rocket className="w-6 h-6 sm:w-7 sm:h-7" />;
    default:
      return <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />;
  }
};

export const PracticeAreasEditorialList: React.FC<PracticeAreasEditorialListProps> = ({
  onSelectMatter,
}) => {
  return (
    <section
      id="main-practice-areas-list"
      className="bg-[#071A2B] text-white relative py-12 sm:py-16"
      aria-label="Core Legal Practice Areas"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {DETAILED_PRACTICE_AREAS.map((area, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={area.id}
                id={`practice-${area.id}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className={`py-12 sm:py-16 transition-colors duration-300 group relative ${
                  isEven ? 'bg-[#0B2238]/60 hover:bg-[#0B2238]' : 'hover:bg-white/[0.02]'
                }`}
              >
                {/* Subtle expanding gold accent line on hover */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C99A4A] group-hover:w-full transition-all duration-500 ease-out" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* LEFT: Large Editorial Number */}
                  <div className="lg:col-span-2 flex lg:flex-col items-baseline justify-between lg:justify-start gap-4">
                    <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-white/30 group-hover:text-[#C99A4A] transition-colors duration-300 select-none tracking-tight">
                      {area.number}
                    </span>
                    <div className="w-8 h-[2px] bg-white/20 group-hover:bg-[#C99A4A] group-hover:w-12 transition-all duration-300 hidden lg:block mt-3" />
                  </div>

                  {/* CENTER: Icon + Title */}
                  <div className="lg:col-span-4 flex flex-col justify-start">
                    <div className="w-12 h-12 bg-[#071A2B] border border-white/10 group-hover:border-[#C99A4A] flex items-center justify-center text-[#C99A4A] group-hover:text-[#E0B86A] mb-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 shadow-sm">
                      {getPracticeIcon(area.iconName)}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-[#E0B86A] transition-colors duration-200">
                      {area.title}
                    </h3>
                  </div>

                  {/* RIGHT: Detailed Description + Included Services + CTA */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed mb-6">
                      {area.description}
                    </p>

                    {/* Included Services - 2 Column Grid */}
                    <div className="mb-8">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#C99A4A] block mb-3 font-semibold">
                        Services Included:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {area.services.map((service, sIndex) => (
                          <li
                            key={sIndex}
                            className="flex items-center gap-2 text-xs sm:text-sm text-white/80 font-sans"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-[#C99A4A] shrink-0" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action CTA Button */}
                    <div>
                      <button
                        onClick={() => onSelectMatter(area.title)}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C99A4A] group-hover:text-white transition-colors cursor-pointer py-1"
                      >
                        <span>{area.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 text-[#C99A4A] group-hover:text-[#E0B86A]" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
