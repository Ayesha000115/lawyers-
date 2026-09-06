import React from 'react';
import { ATTORNEYS_PREVIEW } from '../data/firmData';
import { ArrowRight } from 'lucide-react';

interface TeamPreviewProps {
  onNavigate: (href: string) => void;
}

export const TeamPreview: React.FC<TeamPreviewProps> = ({ onNavigate }) => {
  return (
    <section
      id="team-preview"
      className="py-20 sm:py-24 bg-[#071A2B] text-white relative border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
              OUR PEOPLE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Meet the Team Behind the Counsel.
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="/team"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/team');
              }}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#C99A4A] hover:text-white transition-colors group"
            >
              <span>Meet Our Attorneys</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3 Attorneys Grid with Geometric Balance Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ATTORNEYS_PREVIEW.map((attorney) => (
            <div
              key={attorney.id}
              className="bg-[#0B2238] border border-white/10 hover:border-[#C99A4A]/50 transition-colors group"
            >
              {/* Image Frame */}
              <div className="aspect-[4/5] overflow-hidden relative bg-[#071A2B] border-b border-white/10">
                <img
                  src={attorney.image}
                  alt={`${attorney.name}, ${attorney.role} at Veritas Law Group`}
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2238]/90 via-transparent to-transparent opacity-80" />

                {/* Geometric Position Tag */}
                <div className="absolute bottom-4 left-4 bg-[#071A2B] border border-white/10 px-3 py-1 text-[10px] font-sans text-[#C99A4A] uppercase tracking-widest font-bold">
                  {attorney.role}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#E0B86A] transition-colors">
                  {attorney.name}
                </h3>

                <p className="mt-2 text-xs text-white/60 font-sans leading-relaxed">
                  {attorney.specialty}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40 font-mono">
                  <span>{attorney.barAdmissions}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
