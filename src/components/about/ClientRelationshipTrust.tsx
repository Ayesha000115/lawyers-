import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const ClientRelationshipTrust: React.FC = () => {
  return (
    <section
      id="client-relationship-trust"
      className="py-24 sm:py-32 bg-[#071A2B] text-white relative border-b border-white/10 overflow-hidden"
    >
      {/* Large Subtle Quotation Mark Watermark */}
      <div className="absolute top-8 left-8 sm:left-16 text-white/[0.03] select-none pointer-events-none">
        <Quote className="w-64 h-64 sm:w-96 sm:h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Statement */}
          <div className="lg:col-span-7">
            <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-4">
              OUR COMMITMENT
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
              &ldquo;Behind Every Matter Is a Business, a Team, or a Person Counting on the Right Advice.&rdquo;
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-white/75 font-sans leading-relaxed">
              That responsibility shapes how we work — with discretion, preparation, responsiveness, and a focus on practical outcomes.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#C99A4A]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#E0B86A]">
                The Veritas Ethos
              </span>
            </div>
          </div>

          {/* Overlapping Law Office Architectural Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-white/15 overflow-hidden shadow-2xl group bg-[#0B2238]">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
                alt="Contemporary corporate office library and consultation room"
                className="w-full h-80 sm:h-96 object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#071A2B]/90 backdrop-blur-sm border border-white/10 text-xs font-mono text-white/70">
                <span>Direct partner stewardship from inception to closing.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
