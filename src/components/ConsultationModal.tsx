import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, PHONE_CONFIG } from '../data/contactData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPracticeArea?: string;
}

/**
 * Direct Contact Modal (All forms permanently removed in accordance with Veritas Law Group direct-contact policy).
 */
export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#071A2B]/85 backdrop-blur-md"
        />

        {/* Dialog Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-[#0B2238] border border-white/15 text-white shadow-2xl z-10 overflow-hidden p-8 sm:p-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-2 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C99A4A] font-bold block mb-1">
              DIRECT ENGAGEMENT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Connect With Veritas
            </h3>
            <p className="text-white/70 text-sm font-sans mt-2">
              We have eliminated intake forms to provide immediate direct access. Choose your preferred communication method:
            </p>
          </div>

          <div className="space-y-4">
            {/* WhatsApp Option */}
            <a
              href={WHATSAPP_CONFIG.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-between p-5 bg-[#071A2B] hover:bg-[#25D366]/10 border border-white/10 hover:border-[#25D366]/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-5 h-5 fill-[#25D366]" />
                </div>
                <div>
                  <span className="font-serif font-bold text-base block text-white group-hover:text-[#25D366] transition-colors">
                    WhatsApp Us
                  </span>
                  <span className="text-xs text-white/50 block">
                    Fast messaging · Pre-filled inquiry
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
            </a>

            {/* Telephone Option */}
            <a
              href={PHONE_CONFIG.telUri}
              onClick={onClose}
              className="flex items-center justify-between p-5 bg-[#071A2B] hover:bg-[#C99A4A]/10 border border-white/10 hover:border-[#C99A4A]/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C99A4A]/15 flex items-center justify-center text-[#C99A4A]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-serif font-bold text-base block text-white group-hover:text-[#E0B86A] transition-colors">
                    Call Our Office
                  </span>
                  <span className="text-xs text-white/50 block">
                    {PHONE_CONFIG.displayNumber} · Mon–Fri 8:30–6:00
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#C99A4A] group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-center">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                window.location.pathname = '/contact';
              }}
              className="text-xs text-[#C99A4A] hover:underline font-mono uppercase tracking-wider"
            >
              Or view full Contact & Office page →
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
