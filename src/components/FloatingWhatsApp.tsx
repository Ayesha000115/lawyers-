import React from 'react';
import { motion } from 'motion/react';
import { WHATSAPP_CONFIG } from '../data/contactData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = WHATSAPP_CONFIG.getLink();

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-[18px] right-[18px] sm:bottom-[24px] sm:right-[24px] z-50 group print:hidden select-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative flex items-center justify-end"
      >
        {/* Subtle Tooltip: only visible on desktop hover */}
        <div
          role="tooltip"
          id="floating-whatsapp-tooltip"
          className="hidden sm:flex absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3.5 py-1.5 bg-[#071A2B] text-white text-xs font-sans font-medium rounded-md shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap items-center gap-2"
        >
          <span>Chat with us on WhatsApp</span>
          <span
            aria-hidden="true"
            className="absolute top-1/2 -right-1 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-[#071A2B]"
          />
        </div>

        {/* Standard Professional Circular WhatsApp Button */}
        <motion.a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          aria-describedby="floating-whatsapp-tooltip"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-shadow duration-200 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]/50 cursor-pointer"
        >
          {/* Authentic clean WhatsApp vector emblem */}
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.031 0C5.396 0 .02 5.374.02 12.008c0 2.118.552 4.187 1.603 6.009L0 24l6.169-1.618a12.016 12.016 0 005.862 1.517h.005c6.634 0 12.01-5.374 12.01-12.01 0-3.21-1.25-6.225-3.52-8.496C18.257 1.252 15.24 0 12.031 0zm-.005 21.968a9.98 9.98 0 01-5.097-1.391l-.365-.216-3.784.992 1.01-3.69-.237-.378a9.957 9.957 0 01-1.529-5.277c0-5.513 4.484-9.998 10.005-9.998 2.67 0 5.18 1.041 7.07 2.931a9.94 9.94 0 012.926 7.07c0 5.514-4.487 10-10.009 10zm5.485-7.487c-.3-.15-1.776-.876-2.051-.976-.276-.1-.476-.15-.676.15-.2.3-.775.976-.95 1.176-.176.2-.351.226-.652.075-.3-.15-1.268-.468-2.416-1.492-.893-.797-1.496-1.782-1.671-2.083-.176-.3-.019-.463.131-.613.135-.135.301-.35.451-.526.15-.175.2-.3.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.231-.244-.585-.493-.506-.676-.515l-.577-.01c-.2 0-.526.075-.801.376-.276.3-1.052 1.028-1.052 2.507 0 1.479 1.077 2.908 1.227 3.109.15.2 2.12 3.237 5.137 4.54.717.31 1.277.496 1.713.635.72.229 1.375.197 1.893.119.578-.086 1.776-.726 2.026-1.428.25-.702.25-1.303.175-1.428-.075-.125-.275-.2-.575-.35z" />
          </svg>
          <span className="sr-only">Chat with us on WhatsApp</span>
        </motion.a>
      </motion.div>
    </aside>
  );
};
