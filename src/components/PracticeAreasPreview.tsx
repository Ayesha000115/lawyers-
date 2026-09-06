import React from 'react';
import { PRACTICE_AREAS_PREVIEW } from '../data/firmData';
import { Briefcase, Landmark, Scale, Users, ArrowRight } from 'lucide-react';

interface PracticeAreasPreviewProps {
  onNavigate: (href: string) => void;
}

export const PracticeAreasPreview: React.FC<PracticeAreasPreviewProps> = ({ onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-[#C99A4A]" />;
      case 'landmark':
        return <Landmark className="w-6 h-6 text-[#C99A4A]" />;
      case 'scale':
        return <Scale className="w-6 h-6 text-[#C99A4A]" />;
      case 'users':
        return <Users className="w-6 h-6 text-[#C99A4A]" />;
      default:
        return <Briefcase className="w-6 h-6 text-[#C99A4A]" />;
    }
  };

  return (
    <section
      id="practice-areas-preview"
      className="py-20 sm:py-24 bg-[#071A2B] text-white relative border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            OUR EXPERTISE
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Focused Legal Expertise
          </h2>

          <p className="mt-3 text-sm sm:text-base text-white/60 font-sans leading-relaxed">
            Strategic counsel across the matters that matter most to modern businesses.
          </p>
        </div>

        {/* 4 Practice Cards Geometric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#0B2238]">
          {PRACTICE_AREAS_PREVIEW.map((area) => (
            <div
              key={area.id}
              onClick={() => onNavigate(area.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onNavigate(area.link);
                }
              }}
              className="relative p-8 flex flex-col justify-between cursor-pointer group transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:z-20 hover:bg-[#0E2C48] hover:shadow-2xl hover:shadow-black/70 hover:outline hover:outline-1 hover:outline-[#C99A4A]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A]"
            >
              {/* Subtle Top Gold Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#C99A4A] transition-all duration-300" />

              <div className="flex flex-col">
                {/* Geometric Icon with hover subtle scale */}
                <div className="text-[#C99A4A] group-hover:text-[#E0B86A] mb-5 transform transition-transform duration-300 ease-out group-hover:scale-110 origin-left">
                  {getIcon(area.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-[#E0B86A] transition-colors duration-200">
                  {area.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-200 leading-relaxed font-sans mb-8">
                  {area.shortDescription}
                </p>
              </div>

              {/* Learn More Link with Animated Arrow */}
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#C99A4A] group-hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 ease-out group-hover:translate-x-2 text-[#C99A4A] group-hover:text-[#E0B86A]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA Below Cards */}
        <div className="mt-12 text-center">
          <a
            href="/practice-areas"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/practice-areas');
            }}
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 hover:border-[#C99A4A] hover:bg-white/5 text-white hover:text-[#E0B86A] text-xs uppercase tracking-widest font-bold transition-all group"
          >
            <span>View All Practice Areas</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C99A4A] transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
