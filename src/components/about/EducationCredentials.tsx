import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Landmark } from 'lucide-react';
import { CREDENTIALS_DATA } from '../../data/aboutData';

export const EducationCredentials: React.FC = () => {
  return (
    <section
      id="education-credentials"
      className="py-20 sm:py-24 bg-[#071A2B] text-white relative border-b border-white/10"
      aria-labelledby="credentials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            QUALIFICATIONS
          </span>
          <h2
            id="credentials-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Professional Standards. Lifelong Learning.
          </h2>
        </div>

        {/* Elegant Timeline / Credentials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Academic Degrees */}
          <div className="lg:col-span-6 bg-[#0B2238] border border-white/10 p-8 sm:p-10 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#071A2B] border border-[#C99A4A] flex items-center justify-center text-[#C99A4A]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Academic Foundations
              </h3>
            </div>

            <div className="space-y-6 relative pl-6 border-l border-white/15">
              {CREDENTIALS_DATA.degrees.map((deg, dIdx) => (
                <div key={dIdx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-[#0B2238] border-2 border-[#C99A4A]" />

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-serif text-xl font-bold text-white group-hover:text-[#E0B86A] transition-colors">
                      {deg.degree}
                    </span>
                    <span className="text-sm text-white/60 font-sans">• {deg.institution}</span>
                  </div>
                  <p className="text-xs text-[#C99A4A] font-mono">{deg.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bar & Professional Memberships */}
          <div className="lg:col-span-6 bg-[#0B2238] border border-white/10 p-8 sm:p-10 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#071A2B] border border-[#C99A4A] flex items-center justify-center text-[#C99A4A]">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Professional Memberships
              </h3>
            </div>

            <div className="space-y-4">
              {CREDENTIALS_DATA.memberships.map((membership, mIdx) => (
                <div
                  key={mIdx}
                  className="p-4 bg-[#071A2B] border border-white/5 hover:border-white/20 flex items-center justify-between transition-colors"
                >
                  <span className="font-sans text-sm sm:text-base text-white/90">
                    {membership}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C99A4A]">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
