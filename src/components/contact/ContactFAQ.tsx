import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { CONTACT_FAQS } from '../../data/contactData';

export const ContactFAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(CONTACT_FAQS[0].id);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="contact-faq"
      className="py-20 sm:py-28 bg-[#F7F5F0] text-[#17202A] relative border-b border-black/10"
      aria-labelledby="contact-faq-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2
            id="contact-faq-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#071A2B] tracking-tight leading-tight mb-4"
          >
            Before You Reach Out.
          </h2>
          <p className="text-base text-[#17202A]/75 font-sans leading-relaxed">
            Essential guidelines regarding preliminary consultations, response protocols, and confidential client engagement.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {CONTACT_FAQS.map((faq, index) => {
            const isOpen = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border transition-colors duration-200 bg-white ${
                  isOpen
                    ? 'border-[#C99A4A] shadow-sm'
                    : 'border-black/10 hover:border-black/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A]"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#C99A4A] font-bold shrink-0">
                      0{index + 1}
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#071A2B] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-none border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'border-[#C99A4A] bg-[#071A2B] text-[#C99A4A]'
                        : 'border-black/15 bg-[#F7F5F0] text-[#071A2B]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 pl-14 text-sm sm:text-base text-[#17202A]/80 font-sans leading-relaxed border-t border-black/5 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional Inquiry Help Note */}
        <div className="mt-12 p-6 bg-white border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#C99A4A] shrink-0" />
            <span className="text-xs sm:text-sm text-[#17202A]/80 font-sans">
              Have a specific inquiry not addressed here? Call our team directly.
            </span>
          </div>
          <a
            href="tel:+12125550188"
            className="text-xs font-mono uppercase tracking-widest font-bold text-[#071A2B] hover:text-[#8E6B2D] border-b border-[#C99A4A] pb-0.5 whitespace-nowrap"
          >
            +1 (212) 555-0188 →
          </a>
        </div>
      </div>
    </section>
  );
};
