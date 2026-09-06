import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_CONFIG, PHONE_CONFIG } from '../../data/contactData';

export const DirectContactSection: React.FC = () => {
  const whatsappUrl = WHATSAPP_CONFIG.getLink();

  return (
    <section
      id="direct-contact-options"
      className="py-20 sm:py-28 bg-[#071A2B] text-white relative border-b border-white/10 overflow-hidden"
      aria-labelledby="direct-contact-heading"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #C99A4A 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 mb-3.5"
          >
            <span className="w-5 h-[2px] bg-[#C99A4A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#C99A4A]">
              DIRECT ENGAGEMENT
            </span>
          </motion.div>

          <motion.h2
            id="direct-contact-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Direct Contact Options
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-white/70 font-sans leading-relaxed"
          >
            No complex forms, waiting queues, or automated delays. Choose your preferred method to connect directly with Veritas Law Group.
          </motion.p>
        </div>

        {/* TWO LARGE PREMIUM CONTACT CARDS (SPLIT LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 sm:mb-20">
          {/* OPTION 01 — WHATSAPP */}
          <motion.div
            id="whatsapp-contact-option-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ translateY: -4 }}
            className="group relative bg-[#0B2238]/90 border border-white/10 hover:border-[#25D366]/50 p-8 sm:p-10 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Right Accent Emblem */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

            <div>
              {/* Option Tag & Icon */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#25D366] font-bold px-3 py-1 bg-[#25D366]/10 border border-[#25D366]/20">
                  Option 01 — WhatsApp
                </span>
                <div className="w-11 h-11 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] transition-transform group-hover:scale-105">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 0C5.396 0 .02 5.374.02 12.008c0 2.118.552 4.187 1.603 6.009L0 24l6.169-1.618a12.016 12.016 0 005.862 1.517h.005c6.634 0 12.01-5.374 12.01-12.01 0-3.21-1.25-6.225-3.52-8.496C18.257 1.252 15.24 0 12.031 0zm-.005 21.968a9.98 9.98 0 01-5.097-1.391l-.365-.216-3.784.992 1.01-3.69-.237-.378a9.957 9.957 0 01-1.529-5.277c0-5.513 4.484-9.998 10.005-9.998 2.67 0 5.18 1.041 7.07 2.931a9.94 9.94 0 012.926 7.07c0 5.514-4.487 10-10.009 10zm5.485-7.487c-.3-.15-1.776-.876-2.051-.976-.276-.1-.476-.15-.676.15-.2.3-.775.976-.95 1.176-.176.2-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.893-.797-1.496-1.782-1.671-2.083-.176-.3-.019-.463.131-.613.135-.135.301-.35.451-.526.15-.175.2-.3.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.231-.244-.585-.493-.506-.676-.515l-.577-.01c-.2 0-.526.075-.801.376-.276.3-1.052 1.028-1.052 2.507 0 1.479 1.077 2.908 1.227 3.109.15.2 2.12 3.237 5.137 4.54.717.31 1.277.496 1.713.635.72.229 1.375.197 1.893.119.578-.086 1.776-.726 2.026-1.428.25-.702.25-1.303.175-1.428-.075-.125-.275-.2-.575-.35z" />
                  </svg>
                </div>
              </div>

              {/* Exact Requested Heading */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                Chat With Our Team
              </h3>

              {/* Exact Requested Text */}
              <p className="text-white/75 font-sans text-base leading-relaxed mb-8">
                Have a quick question or prefer messaging? Start a conversation with our team on WhatsApp.
              </p>

              {/* Status Note */}
              <div className="flex items-center gap-2 text-xs text-white/50 mb-8 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block" />
                <span>Pre-filled prompt prepared · {WHATSAPP_CONFIG.displayNumber}</span>
              </div>
            </div>

            {/* Exact Requested Button */}
            <div>
              <a
                id="contact-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-4 font-bold text-sm tracking-wide transition-all shadow-md group/btn"
              >
                <span>WhatsApp Us</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* OPTION 02 — PHONE */}
          <motion.div
            id="phone-contact-option-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ translateY: -4 }}
            className="group relative bg-[#0B2238]/90 border border-white/10 hover:border-[#C99A4A]/50 p-8 sm:p-10 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Right Accent Emblem */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A4A]/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />

            <div>
              {/* Option Tag & Icon */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#C99A4A] font-bold px-3 py-1 bg-[#C99A4A]/10 border border-[#C99A4A]/20">
                  Option 02 — Phone
                </span>
                <div className="w-11 h-11 rounded-full bg-[#C99A4A]/15 border border-[#C99A4A]/30 flex items-center justify-center text-[#C99A4A] transition-transform group-hover:scale-105">
                  <Phone className="w-5 h-5" />
                </div>
              </div>

              {/* Exact Requested Heading */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                Call Our Office
              </h3>

              {/* Exact Requested Text */}
              <p className="text-white/75 font-sans text-base leading-relaxed mb-8">
                Prefer to speak directly? Call our office during business hours.
              </p>

              {/* Status Note */}
              <div className="flex items-center gap-2 text-xs text-white/50 mb-8 font-mono">
                <Clock className="w-3.5 h-3.5 text-[#C99A4A]" />
                <span>Mon–Fri, 8:30 AM – 6:00 PM EST</span>
              </div>
            </div>

            {/* Exact Requested Button */}
            <div>
              <a
                id="contact-call-office-btn"
                href={PHONE_CONFIG.telUri}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-8 py-4 font-bold text-sm tracking-wide transition-all shadow-md group/btn"
              >
                <span>Call {PHONE_CONFIG.displayNumber}</span>
                <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* OFFICE INFORMATION & OFFICE HOURS */}
        <motion.div
          id="office-details-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#0B2238]/60 border border-white/10 p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Our Office */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#C99A4A] mb-3">
                <MapPin className="w-4 h-4" />
                <span>Our Office</span>
              </div>
              <p className="text-lg font-serif font-bold text-white mb-1">
                {CONTACT_INFO.address.line1}
              </p>
              <p className="text-white/75 font-sans text-sm mb-3">
                {CONTACT_INFO.address.cityStateZip}
              </p>
              <span className="inline-block px-2.5 py-0.5 bg-[#C99A4A]/15 border border-[#C99A4A]/30 text-[#E0B86A] text-[10px] font-mono uppercase tracking-widest font-bold">
                {CONTACT_INFO.address.disclaimer}
              </span>
            </div>

            {/* Office Hours */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#C99A4A] mb-3">
                <Clock className="w-4 h-4" />
                <span>Office Hours</span>
              </div>
              <div className="space-y-1.5 text-sm">
                <p className="text-white font-medium">Monday – Friday</p>
                <p className="text-white/75 font-sans text-xs">8:30 AM – 6:00 PM</p>
                <div className="pt-2">
                  <p className="text-white font-medium">Saturday – Sunday</p>
                  <p className="text-white/75 font-sans text-xs">By appointment</p>
                </div>
              </div>
            </div>

            {/* Confidential Consultation Guarantee */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#C99A4A] mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidential Intake</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans mb-3">
                All preliminary inquiries and conversations are treated with rigorous professional confidentiality. Initial discussions do not establish attorney-client privilege until formal engagement terms are executed.
              </p>
              <p className="text-xs text-white/50 font-mono">
                Direct inquiries: {CONTACT_INFO.email}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
