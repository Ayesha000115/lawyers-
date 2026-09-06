import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, Building, Train, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../../data/contactData';

export const OfficeLocation: React.FC = () => {
  return (
    <section
      id="office-location"
      className="py-20 sm:py-28 bg-[#0B2238] text-white relative border-b border-white/10"
      aria-labelledby="office-location-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Editorial Heading & Office Context */}
          <div className="lg:col-span-5">
            <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              MANHATTAN PRESENCE
            </span>

            <h2
              id="office-location-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight"
            >
              Our Office.
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-sans leading-relaxed mb-8">
              Located in the heart of Manhattan, our office provides a private and professional setting for confidential conversations and strategic legal discussions.
            </p>

            {/* Address Box */}
            <div className="p-6 bg-[#071A2B] border border-white/15 relative mb-8">
              <div className="absolute top-0 left-0 w-16 h-[2px] bg-[#C99A4A]" />

              <div className="flex items-start justify-between mb-3">
                <div className="font-serif text-xl font-bold text-white">
                  Veritas Law Group
                </div>
                <span className="px-2 py-0.5 bg-[#C99A4A]/10 border border-[#C99A4A]/30 text-[9px] font-mono uppercase tracking-widest text-[#E0B86A]">
                  MANHATTAN HEADQUARTERS
                </span>
              </div>

              <div className="text-sm text-white/75 font-sans space-y-1">
                <div className="font-semibold text-white">1200 Madison Avenue</div>
                <div>Suite 2400, Executive Floors</div>
                <div>New York, NY 10016</div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                <span>Neighborhood: Carnegie Hill</span>
                <span className="text-[#C99A4A]">Private Elevators</span>
              </div>
            </div>

            {/* Building Highlights / Amenities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#071A2B]/60 border border-white/10 flex items-start gap-3">
                <Building className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Conference Suites
                  </h4>
                  <p className="text-xs text-white/60 font-sans mt-0.5">
                    Acoustically isolated negotiation boardrooms.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#071A2B]/60 border border-white/10 flex items-start gap-3">
                <Train className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Transit Proximity
                  </h4>
                  <p className="text-xs text-white/60 font-sans mt-0.5">
                    3 blocks from 86th St (4/5/6 Subway).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Sophisticated Manhattan Architectural Map Placeholder */}
          <div className="lg:col-span-7">
            <div className="relative border border-white/15 bg-[#071A2B] p-4 sm:p-6 shadow-2xl overflow-hidden group">
              {/* Gold Framing Corners */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#C99A4A] pointer-events-none z-20" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#C99A4A] pointer-events-none z-20" />

              {/* Map Canvas Visual (SVG Stylized Manhattan Grid) */}
              <div className="relative w-full h-[380px] sm:h-[440px] bg-[#051422] overflow-hidden border border-white/10">
                {/* Central Park Area on West (Left) */}
                <div className="absolute top-0 bottom-0 left-0 w-[18%] bg-[#0B251F]/40 border-r border-[#C99A4A]/20 flex items-center justify-center">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#4E8D72] -rotate-90 select-none opacity-80">
                    CENTRAL PARK
                  </span>
                </div>

                {/* Street Grid Lines (Avenues - Vertical) */}
                {/* 5th Avenue */}
                <div className="absolute top-0 bottom-0 left-[22%] w-[1px] bg-white/10" />
                <span className="absolute top-3 left-[23%] text-[9px] font-mono text-white/30 uppercase tracking-widest">
                  5th Ave
                </span>

                {/* Madison Avenue (Prominent) */}
                <div className="absolute top-0 bottom-0 left-[48%] w-[2px] bg-[#C99A4A]/30" />
                <span className="absolute top-3 left-[49%] text-[9px] font-mono text-[#E0B86A] uppercase tracking-widest font-bold">
                  Madison Ave
                </span>

                {/* Park Avenue */}
                <div className="absolute top-0 bottom-0 left-[74%] w-[1px] bg-white/10" />
                <span className="absolute top-3 left-[75%] text-[9px] font-mono text-white/30 uppercase tracking-widest">
                  Park Ave
                </span>

                {/* Cross Streets (Horizontal) */}
                {/* East 89th St */}
                <div className="absolute left-[18%] right-0 top-[20%] h-[1px] bg-white/10" />
                <span className="absolute top-[21%] right-4 text-[9px] font-mono text-white/30">
                  E 89th St
                </span>

                {/* East 88th St */}
                <div className="absolute left-[18%] right-0 top-[40%] h-[1px] bg-white/10" />
                <span className="absolute top-[41%] right-4 text-[9px] font-mono text-white/30">
                  E 88th St
                </span>

                {/* East 87th St */}
                <div className="absolute left-[18%] right-0 top-[60%] h-[1px] bg-[#C99A4A]/20" />
                <span className="absolute top-[61%] right-4 text-[9px] font-mono text-white/30">
                  E 87th St
                </span>

                {/* East 86th St (Major cross street) */}
                <div className="absolute left-[18%] right-0 top-[80%] h-[2px] bg-white/15" />
                <span className="absolute top-[81%] right-4 text-[9px] font-mono text-white/40 font-semibold">
                  E 86th St (Express 4/5/6)
                </span>

                {/* Architectural Building Massing Blocks */}
                <div className="absolute left-[26%] top-[24%] w-[18%] h-[12%] bg-[#0B2238]/80 border border-white/5" />
                <div className="absolute left-[26%] top-[44%] w-[18%] h-[12%] bg-[#0B2238]/80 border border-white/5" />
                <div className="absolute left-[26%] top-[64%] w-[18%] h-[12%] bg-[#0B2238]/80 border border-white/5" />

                <div className="absolute left-[52%] top-[24%] w-[18%] h-[12%] bg-[#0B2238]/80 border border-white/5" />
                <div className="absolute left-[52%] top-[44%] w-[18%] h-[12%] bg-[#0B2238]/80 border border-white/5" />
                <div className="absolute left-[52%] top-[64%] w-[18%] h-[12%] bg-[#0B2238]/80 border border-white/5" />

                {/* Veritas Law Group Pin Location at Madison & 87th/88th */}
                <div className="absolute left-[48%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
                  {/* Pulsing Gold Radar Wave */}
                  <div className="relative">
                    <span className="absolute -inset-3 rounded-full bg-[#C99A4A]/20 animate-ping pointer-events-none" />
                    <span className="absolute -inset-6 rounded-full bg-[#C99A4A]/10 pointer-events-none" />

                    <div className="w-10 h-10 bg-[#071A2B] border-2 border-[#C99A4A] shadow-xl flex items-center justify-center text-[#E0B86A]">
                      <MapPin className="w-5 h-5 text-[#C99A4A]" />
                    </div>
                  </div>

                  {/* Marker Callout Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-2 bg-[#071A2B]/95 backdrop-blur-md border border-[#C99A4A] px-3.5 py-2 shadow-2xl text-center whitespace-nowrap"
                  >
                    <div className="text-[11px] font-serif font-bold text-white tracking-wide">
                      VERITAS LAW GROUP
                    </div>
                    <div className="text-[9px] font-mono text-[#E0B86A]">
                      1200 Madison Ave • Suite 2400
                    </div>
                  </motion.div>
                </div>

                {/* Subtle Compass Rose in Bottom Right */}
                <div className="absolute bottom-4 left-4 p-2 bg-[#071A2B]/80 backdrop-blur-sm border border-white/10 flex items-center gap-2 text-[10px] font-mono text-white/50">
                  <Compass className="w-4 h-4 text-[#C99A4A]" />
                  <span>North Upper East</span>
                </div>

                {/* Architectural Map Badge */}
                <div className="absolute top-4 right-4 px-2 py-1 bg-[#071A2B]/80 backdrop-blur-sm border border-white/10 text-[9px] font-mono text-[#E0B86A] uppercase tracking-wider">
                  Interactive Architectural Render
                </div>
              </div>

              {/* Bottom Strip Details */}
              <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-xs font-mono text-white/50">
                <span className="flex items-center gap-1.5 text-white/70">
                  <Shield className="w-3.5 h-3.5 text-[#C99A4A]" />
                  <span>Private Consultation Reception Desk</span>
                </span>
                <span className="text-[#E0B86A]">Valet & Dedicated Parking Nearby</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
