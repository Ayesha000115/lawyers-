import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { PRACTICE_AREAS_FAQS } from '../../data/practiceAreasData';

export const PracticeAreasFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="practice-areas-faq"
      className="py-20 sm:py-24 bg-[#0B2238] text-white relative border-b border-white/5"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#C99A4A] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            COMMON INQUIRIES
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Practice Areas — Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {PRACTICE_AREAS_FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`py-1 transition-colors duration-300 ${
                  isOpen ? 'bg-white/[0.02]' : ''
                }`}
              >
                <button
                  type="button"
                  id={`accordion-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-2 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A4A] cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-[#E0B86A] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-none border border-white/15 group-hover:border-[#C99A4A] flex items-center justify-center shrink-0 text-[#C99A4A] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'bg-[#C99A4A] text-[#071A2B] rotate-180' : 'bg-[#071A2B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`accordion-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`accordion-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.42,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.3,
                            delay: 0.08,
                            ease: 'easeOut',
                          },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.32,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.18,
                            ease: 'easeIn',
                          },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -8, opacity: 0 }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
                        }}
                        exit={{
                          y: -6,
                          opacity: 0,
                          transition: { duration: 0.2 },
                        }}
                        className="pb-6 pt-1 text-sm sm:text-base text-white/70 font-sans leading-relaxed border-l-2 border-[#C99A4A]/60 pl-4 my-2"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
