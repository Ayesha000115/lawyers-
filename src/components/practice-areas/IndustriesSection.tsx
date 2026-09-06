import React from 'react';
import {
  Cpu,
  Building2,
  Activity,
  Landmark,
  Factory,
  ShoppingBag,
  Briefcase,
  Rocket,
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../../data/practiceAreasData';
import { IndustryItem } from '../../types';

const getIndustryIcon = (iconName: IndustryItem['iconName']) => {
  switch (iconName) {
    case 'cpu':
      return <Cpu className="w-6 h-6" />;
    case 'building-2':
      return <Building2 className="w-6 h-6" />;
    case 'activity':
      return <Activity className="w-6 h-6" />;
    case 'landmark':
      return <Landmark className="w-6 h-6" />;
    case 'factory':
      return <Factory className="w-6 h-6" />;
    case 'shopping-bag':
      return <ShoppingBag className="w-6 h-6" />;
    case 'briefcase':
      return <Briefcase className="w-6 h-6" />;
    case 'rocket':
      return <Rocket className="w-6 h-6" />;
    default:
      return <Briefcase className="w-6 h-6" />;
  }
};

export const IndustriesSection: React.FC = () => {
  return (
    <section
      id="industries-served"
      className="py-20 sm:py-24 bg-[#071A2B] text-white relative border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Legal Counsel That Understands Your Business.
          </h2>
        </div>

        {/* Sophisticated 4-column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES_SERVED.map((industry) => (
            <div
              key={industry.id}
              className="bg-[#0B2238] border border-white/10 hover:border-[#C99A4A]/60 p-6 sm:p-7 transition-all duration-300 group cursor-default"
            >
              {/* Minimal Icon with hover to gold */}
              <div className="text-white/40 group-hover:text-[#C99A4A] transition-colors duration-300 mb-5">
                {getIndustryIcon(industry.iconName)}
              </div>

              {/* Title with slight hover translate & underline animation */}
              <div className="relative overflow-hidden inline-block">
                <h3 className="font-serif text-base sm:text-lg font-semibold text-white group-hover:text-[#E0B86A] transition-all duration-300 transform group-hover:translate-x-1">
                  {industry.name}
                </h3>
                {/* Subtle animated underline */}
                <span className="block h-[1px] w-0 bg-[#C99A4A] group-hover:w-full transition-all duration-300 ease-out mt-1" />
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-white/30 group-hover:text-white/50 transition-colors">
                Domain Practice
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
