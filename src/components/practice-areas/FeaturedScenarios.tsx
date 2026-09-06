import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, FileCheck, ShieldAlert, Globe2, ArrowUpRight } from 'lucide-react';
import { FEATURED_SCENARIOS } from '../../data/practiceAreasData';
import { FeaturedScenario } from '../../types';

interface FeaturedScenariosProps {
  onSelectScenario?: (title: string) => void;
}

const getScenarioIcon = (iconName: FeaturedScenario['iconName']) => {
  switch (iconName) {
    case 'trending-up':
      return <TrendingUp className="w-5 h-5 text-[#C99A4A]" />;
    case 'file-check':
      return <FileCheck className="w-5 h-5 text-[#C99A4A]" />;
    case 'shield-alert':
      return <ShieldAlert className="w-5 h-5 text-[#C99A4A]" />;
    case 'globe-2':
      return <Globe2 className="w-5 h-5 text-[#C99A4A]" />;
    default:
      return <TrendingUp className="w-5 h-5 text-[#C99A4A]" />;
  }
};

export const FeaturedScenarios: React.FC<FeaturedScenariosProps> = ({ onSelectScenario }) => {
  return (
    <section
      id="featured-scenarios"
      className="py-20 sm:py-24 bg-[#F7F5F0] text-[#17202A] relative border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            COMMERCIAL CONTEXT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2B] tracking-tight">
            Where Legal Strategy Makes a Difference.
          </h2>
        </div>

        {/* 4 Scenario Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_SCENARIOS.map((scenario) => (
            <motion.div
              key={scenario.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelectScenario?.(scenario.title)}
              className="bg-white border border-[#17202A]/10 hover:border-[#C99A4A] p-7 flex flex-col justify-between transition-all group shadow-sm hover:shadow-md cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-[#F7F5F0] border border-[#17202A]/10 flex items-center justify-center group-hover:bg-[#071A2B] transition-colors">
                    {getScenarioIcon(scenario.iconName)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[#C99A4A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#071A2B] mb-2 group-hover:text-[#8E6B2D] transition-colors">
                  {scenario.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#17202A]/70 leading-relaxed font-sans">
                  {scenario.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#17202A]/10 text-[10px] font-mono uppercase tracking-widest text-[#C99A4A] font-semibold">
                Strategic Advisory
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
