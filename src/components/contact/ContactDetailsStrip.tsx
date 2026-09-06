import React from 'react';
import { Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, PHONE_CONFIG, WHATSAPP_CONFIG } from '../../data/contactData';

export const ContactDetailsStrip: React.FC = () => {
  return (
    <section
      id="contact-details-strip"
      className="bg-[#071A2B] text-white border-y border-white/10 relative z-10"
      aria-label="Direct Contact Channels"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Channel 1: Telephone */}
          <a
            id="strip-telephone-link"
            href={PHONE_CONFIG.telUri}
            className="p-8 lg:p-10 flex items-center justify-between group hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0B2238] border border-white/10 group-hover:border-[#C99A4A] flex items-center justify-center text-[#C99A4A] transition-colors shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C99A4A] font-bold block mb-1">
                  CALL OUR OFFICE
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#E0B86A] transition-colors block">
                  {PHONE_CONFIG.displayNumber}
                </span>
                <span className="text-xs text-white/50 font-sans mt-0.5 block">
                  Monday – Friday, 8:30 AM – 6:00 PM
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#C99A4A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          {/* Channel 2: WhatsApp */}
          <a
            id="strip-whatsapp-link"
            href={WHATSAPP_CONFIG.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 lg:p-10 flex items-center justify-between group hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0B2238] border border-white/10 group-hover:border-[#25D366] flex items-center justify-center text-[#25D366] transition-colors shrink-0">
                <MessageCircle className="w-5 h-5 fill-[#25D366]/20" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#25D366] font-bold block mb-1">
                  WHATSAPP DIRECT
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#25D366] transition-colors block">
                  Chat With Our Team
                </span>
                <span className="text-xs text-white/50 font-sans mt-0.5 block">
                  Direct mobile inquiry messaging
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          {/* Channel 3: Address */}
          <div className="p-8 lg:p-10 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0B2238] border border-white/10 group-hover:border-[#C99A4A] flex items-center justify-center text-[#C99A4A] transition-colors shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C99A4A] font-bold block mb-1">
                  OUR OFFICE
                </span>
                <span className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#E0B86A] transition-colors block">
                  {CONTACT_INFO.address.line1}
                </span>
                <span className="text-xs text-white/50 font-sans mt-0.5 block">
                  {CONTACT_INFO.address.cityStateZip} • {CONTACT_INFO.address.disclaimer}
                </span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-[#C99A4A] border border-[#C99A4A]/30 px-2 py-0.5 shrink-0">
              BY APPT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
