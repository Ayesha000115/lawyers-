import React from 'react';
import { ArrowRight, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, PHONE_CONFIG } from '../../data/contactData';

interface PracticeAreasMidCTAProps {
  onOpenConsultation?: () => void;
}

export const PracticeAreasMidCTA: React.FC<PracticeAreasMidCTAProps> = () => {
  return (
    <section
      id="practice-mid-cta"
      className="py-20 sm:py-24 bg-[#071A2B] text-white relative border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Architectural Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #C99A4A 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
          DIRECT ENGAGEMENT
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
          Not Sure Where Your Matter Fits?
        </h2>

        <p className="text-base sm:text-lg text-white/70 font-sans max-w-xl mx-auto leading-relaxed mb-10">
          Every situation is different. Speak directly with our team about your circumstances and we will discuss the appropriate next step.
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
            className="w-full sm:w-auto border border-white/20 hover:border-[#C99A4A] text-white px-8 py-3.5 font-bold text-sm tracking-wide transition-all hover:bg-white/5 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#C99A4A]" />
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
          <span>Confidential • Strategic • Client-Focused</span>
        </div>
      </div>
    </section>
  );
};
