import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DETAILED_ATTORNEYS } from '../../data/aboutData';
import { DetailedAttorney } from '../../types';

interface LeadershipFeatureProps {
  onSelectAttorney: (attorney: DetailedAttorney) => void;
}

export const LeadershipFeature: React.FC<LeadershipFeatureProps> = ({ onSelectAttorney }) => {
  const leader = DETAILED_ATTORNEYS[0]; // Daniel Morgan

  return (
    <section
      id="leadership-feature"
      className="py-20 sm:py-28 bg-[#071A2B] text-white relative border-b border-white/10"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Eyebrow & Title */}
        <div className="max-w-3xl mb-14">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            LEADERSHIP
          </span>
          <h2
            id="leadership-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Experienced Counsel. Human Approach.
          </h2>
        </div>

        {/* Feature Split Layout */}
        <div className="bg-[#0B2238] border border-white/10 p-8 sm:p-12 lg:p-16 relative">
          {/* Top Gold Corner Accent */}
          <div className="absolute top-0 right-0 w-24 h-[2px] bg-[#C99A4A]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Large Portrait with Subtle Navy Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-white/15 overflow-hidden aspect-[4/5] shadow-2xl group">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#071A2B]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#E0B86A]">{leader.position}</span>
                  <span className="text-[10px] font-mono text-white/50">Veritas Partner</span>
                </div>
              </div>
            </div>

            {/* Right: Bio and Specialties with Subtle Gold Vertical Line */}
            <div className="lg:col-span-7 flex flex-col justify-between pl-0 lg:pl-6 border-l-0 lg:border-l-2 lg:border-[#C99A4A]/40">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C99A4A] block mb-2 font-semibold">
                  Executive Partner
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                  {leader.name}
                </h3>

                <p className="text-sm font-sans uppercase tracking-widest text-white/50 mb-6">
                  {leader.specialty}
                </p>

                <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed mb-8">
                  {leader.biography}
                </p>

                {/* Specialties Badges */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C99A4A] block mb-3 font-semibold">
                    Core Advisory Focus:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {leader.practiceFocus.map((focus, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3 bg-[#071A2B] border border-white/10 text-xs text-white/80 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A4A] shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectAttorney(leader)}
                  className="bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-3 font-bold text-xs uppercase tracking-widest transition-all hover:translate-y-[-2px] inline-flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>View Full Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
