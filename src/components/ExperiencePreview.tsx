import React from 'react';
import { EXPERIENCE_CATEGORIES } from '../data/firmData';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ExperiencePreviewProps {
  onNavigate: (href: string) => void;
}

export const ExperiencePreview: React.FC<ExperiencePreviewProps> = ({ onNavigate }) => {
  return (
    <section
      id="experience-preview"
      className="py-20 sm:py-24 bg-[#F1F2F3] text-[#17202A] relative border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#17202A]/10">
          <div>
            <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
              REPRESENTATIVE ENGAGEMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2B] tracking-tight">
              Experience Across Complex Matters.
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="/practice-areas"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/practice-areas');
              }}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#071A2B] hover:text-[#C99A4A] transition-colors group"
            >
              <span>Explore Our Practice Areas</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C99A4A] transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 4 Visual Experience Categories Geometric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-[#17202A]/10 hover:border-[#C99A4A] p-7 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 bg-[#F7F5F0] text-[10px] font-sans font-bold uppercase tracking-wider text-[#071A2B] border border-[#071A2B]/10">
                    {cat.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-[#C99A4A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-serif text-lg font-bold text-[#071A2B] mb-2">
                  {cat.title}
                </h3>

                <p className="text-xs text-[#17202A]/70 leading-relaxed font-sans">
                  {cat.summary}
                </p>
              </div>

              {cat.stat && (
                <div className="mt-6 pt-3 border-t border-[#17202A]/10 text-[11px] font-mono font-semibold text-[#C99A4A]">
                  {cat.stat}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
