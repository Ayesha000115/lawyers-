import React from 'react';
import { ArrowRight, ShieldCheck, Phone, Compass, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, PHONE_CONFIG } from '../../data/contactData';

interface AboutCTAProps {
  onNavigate: (href: string) => void;
  onOpenConsultation?: () => void;
}

export const AboutCTA: React.FC<AboutCTAProps> = ({ onNavigate }) => {
  return (
    <section
      id="about-final-cta"
      className="py-20 sm:py-28 bg-[#071A2B] text-white relative border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
          DIRECT ENGAGEMENT
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Speak With Our Team
        </h2>

        <p className="text-base sm:text-lg text-white/70 font-sans max-w-xl mx-auto leading-relaxed mb-10">
          Looking for counsel you can trust? Connect directly with our attorneys to discuss your business and legal objectives.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_CONFIG.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-3.5 font-bold text-sm tracking-wide transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>WhatsApp Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PHONE_CONFIG.telUri}
            className="w-full sm:w-auto border border-white/20 hover:border-[#C99A4A] px-8 py-3.5 font-bold text-sm text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#C99A4A]" />
            <span>Call Our Office</span>
          </a>

          <button
            onClick={() => onNavigate('/contact')}
            className="w-full sm:w-auto text-white/70 hover:text-white text-xs font-mono uppercase tracking-wider py-2 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>All Contact Options</span>
            <span>→</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-white/50 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C99A4A]" />
          <span>Strict Confidentiality Guaranteed • Direct Partner Response</span>
        </div>
      </div>
    </section>
  );
};
