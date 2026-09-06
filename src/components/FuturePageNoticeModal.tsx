import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Layers, ArrowRight, ArrowLeft } from 'lucide-react';

interface FuturePageNoticeModalProps {
  pagePath: string | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const FuturePageNoticeModal: React.FC<FuturePageNoticeModalProps> = ({
  pagePath,
  onClose,
  onOpenConsultation,
}) => {
  if (!pagePath) return null;

  const pageTitles: Record<string, { title: string; desc: string; homeAnchor?: string }> = {
    '/practice-areas': {
      title: 'Practice Areas & Specializations',
      desc: 'The complete practice area catalog, detailed service breakdowns, and regulatory advisories are configured for the dedicated /practice-areas page in the multi-page architecture.',
      homeAnchor: '#practice-areas-preview',
    },
    '/about': {
      title: 'About Veritas & Firm Heritage',
      desc: 'The complete firm background, founding philosophy, commercial ethos, and executive leadership story will reside on the dedicated /about page.',
      homeAnchor: '#about-preview',
    },
    '/team': {
      title: 'Our Partners & Attorneys',
      desc: 'Comprehensive attorney CVs, representative deal sheets, court admissions, and publications belong on the full /team page.',
      homeAnchor: '#team-preview',
    },
    '/insights': {
      title: 'Legal Perspectives & Publications',
      desc: 'Full-length legal briefings, regulatory alerts, and corporate advisory articles are structured for the dedicated /insights publication archive.',
      homeAnchor: '#insights-preview',
    },
    '/contact': {
      title: 'Direct Office & Partner Consultation',
      desc: 'The full office directory, partner direct lines, and secure file intake form are set up on the /contact route.',
    },
  };

  const info = pageTitles[pagePath] || {
    title: 'Multi-Page Architecture',
    desc: 'This page route is established in the project blueprint and ready for full expansion in the upcoming phase.',
  };

  const handleScrollToSection = () => {
    onClose();
    if (info.homeAnchor) {
      const el = document.querySelector(info.homeAnchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A2B]/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#0B2238] border border-[#C99A4A]/30 rounded-lg p-6 sm:p-7 text-white shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-1"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-lg bg-[#071A2B] border border-[#C99A4A]/30 flex items-center justify-center text-[#E0B86A] mb-4">
            <Layers className="w-6 h-6" />
          </div>

          <div className="text-[11px] font-mono tracking-wider uppercase text-[#C99A4A] mb-1">
            Planned Route: {pagePath}
          </div>

          <h3 className="font-serif text-2xl text-white font-semibold mb-2">
            {info.title}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-6">
            {info.desc} Per the project blueprint, the Home page acts as the executive preview and conversion engine.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {info.homeAnchor ? (
              <button
                onClick={handleScrollToSection}
                className="flex-1 py-2.5 px-4 bg-white/10 hover:bg-white/15 text-white text-xs font-medium rounded transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>View Home Preview</span>
              </button>
            ) : null}

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="flex-1 py-2.5 px-4 bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2"
            >
              <span>Contact Us Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
