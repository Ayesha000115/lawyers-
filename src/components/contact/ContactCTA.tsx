import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Shield } from 'lucide-react';
import { WHATSAPP_CONFIG, PHONE_CONFIG } from '../../data/contactData';

interface ContactCTAProps {
  onScrollToForm?: () => void;
  onNavigate: (href: string) => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = () => {
  return (
    <section
      id="contact-cta"
      className="py-24 sm:py-32 bg-[#071A2B] text-white relative overflow-hidden"
      aria-labelledby="contact-cta-heading"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #C99A4A 1px, transparent 1px), linear-gradient(to bottom, #C99A4A 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C99A4A]">
              INITIATE COUNSEL
            </span>
            <span className="w-5 h-[2px] bg-[#C99A4A]" />
          </div>

          <h2
            id="contact-cta-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-4xl mx-auto"
          >
            The Right Conversation Can Change the Course of a Matter.
          </h2>

          <p className="text-base sm:text-xl text-white/75 font-sans max-w-2xl mx-auto leading-relaxed mb-10">
            Tell us where you&apos;re headed. We&apos;ll help you understand what comes next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
            <a
              id="final-cta-whatsapp-btn"
              href={WHATSAPP_CONFIG.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-9 py-4 font-bold text-sm tracking-wide transition-all hover:translate-y-[-2px] shadow-xl flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <span>WhatsApp Us</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              id="final-cta-call-office-btn"
              href={PHONE_CONFIG.telUri}
              className="w-full sm:w-auto border border-white/25 hover:border-[#C99A4A] text-white hover:text-[#E0B86A] px-8 py-4 font-bold text-sm tracking-wide transition-all hover:bg-white/5 flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#C99A4A]" />
              <span>Call Our Office</span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-xs font-mono text-white/40">
            <Shield className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span>Strict Client Confidentiality • Manhattan Office & Global Representation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
