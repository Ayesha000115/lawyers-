import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { DETAILED_ATTORNEYS } from '../../data/aboutData';
import { DetailedAttorney } from '../../types';

interface AttorneysGridProps {
  onSelectAttorney: (attorney: DetailedAttorney) => void;
}

export const AttorneysGrid: React.FC<AttorneysGridProps> = ({ onSelectAttorney }) => {
  return (
    <section
      id="our-attorneys-grid"
      className="py-20 sm:py-28 bg-[#0B2238] text-white relative border-b border-white/10"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            OUR TEAM
          </span>
          <h2
            id="team-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Meet the People Behind the Counsel.
          </h2>
        </div>

        {/* 6 Attorney Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_ATTORNEYS.map((attorney, index) => (
            <motion.article
              key={attorney.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#071A2B] border border-white/10 hover:border-[#C99A4A]/60 flex flex-col justify-between transition-all duration-300 group shadow-lg"
            >
              {/* Image Container with Subtle Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-80" />

                {/* Role Overlay Badge */}
                <div className="absolute top-4 right-4 bg-[#071A2B]/85 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[10px] font-mono text-[#E0B86A]">
                  {attorney.position}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#E0B86A] transition-colors mb-1">
                    {attorney.name}
                  </h3>

                  <p className="text-xs uppercase tracking-wider text-[#C99A4A] font-mono mb-3">
                    {attorney.specialty}
                  </p>

                  <p className="text-xs sm:text-sm text-white/60 line-clamp-3 font-sans leading-relaxed mb-6">
                    {attorney.biography}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectAttorney(attorney)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C99A4A] group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform text-[#C99A4A] group-hover:text-[#E0B86A]" />
                  </button>

                  <div className="flex items-center gap-2 text-white/30">
                    <span title="Direct Partner Email">
                      <Mail className="w-3.5 h-3.5 hover:text-[#C99A4A] transition-colors cursor-pointer" />
                    </span>
                    <span title="Direct Line">
                      <Phone className="w-3.5 h-3.5 hover:text-[#C99A4A] transition-colors cursor-pointer" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
