import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, PHONE_CONFIG } from '../data/contactData';

interface FinalCTAProps {
  onOpenConsultation?: () => void;
  onNavigate: (href: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section
      id="final-cta"
      className="py-24 sm:py-28 bg-[#071A2B] text-white relative border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Subtle Brand Tag */}
        <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
          INITIATE ENGAGEMENT
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
          Have a Complex Legal Matter?
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-white/70 font-sans max-w-xl mx-auto leading-relaxed mb-10">
          Let&apos;s discuss the right strategy for what comes next. Connect with our team directly.
        </p>

        {/* Direct Contact Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="home-final-cta-whatsapp-btn"
            href={WHATSAPP_CONFIG.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-3.5 font-bold text-sm tracking-wide hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Contact Us on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            id="home-final-cta-call-btn"
            href={PHONE_CONFIG.telUri}
            className="w-full sm:w-auto border border-white/20 px-8 py-3.5 font-bold text-sm text-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#C99A4A]" />
            <span>Call Our Office</span>
          </a>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/contact');
            }}
            className="w-full sm:w-auto text-white/70 hover:text-white text-xs font-mono uppercase tracking-wider py-2 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>View All Contact Options</span>
            <span>→</span>
          </a>
        </div>

        {/* Secondary Trust Line */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-white/50 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C99A4A]" />
          <span>Confidential. Strategic. Client-focused.</span>
        </div>
      </div>
    </section>
  );
};
