import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, PHONE_CONFIG } from '../../data/contactData';

interface PracticeAreasPreFooterCTAProps {
  onOpenConsultation?: () => void;
}

export const PracticeAreasPreFooterCTA: React.FC<PracticeAreasPreFooterCTAProps> = () => {
  return (
    <section
      id="practice-prefooter-cta"
      className="py-20 sm:py-24 bg-[#071A2B] text-white relative border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
          DIRECT COUNSEL INITIATION
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Let&apos;s Talk About Your Legal Needs.
        </h2>

        <p className="text-base sm:text-lg text-white/70 font-sans max-w-xl mx-auto leading-relaxed mb-9">
          Get strategic guidance tailored to your business and circumstances. Connect with our team directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_CONFIG.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-3.5 font-bold text-sm tracking-wide transition-all duration-300 hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Contact Us on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PHONE_CONFIG.telUri}
            className="w-full sm:w-auto border border-white/20 hover:border-[#C99A4A] px-8 py-3.5 font-bold text-sm text-white hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#C99A4A]" />
            <span>Call Our Office</span>
          </a>

          <a
            href="/contact"
            className="w-full sm:w-auto text-white/70 hover:text-white text-xs font-mono uppercase tracking-wider py-2 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Discuss Your Matter</span>
            <span>→</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-white/50 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C99A4A]" />
          <span>Prompt confidential response from Veritas partners</span>
        </div>
      </div>
    </section>
  );
};
