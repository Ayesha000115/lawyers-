import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Award, BookOpen, Briefcase, Mail, Phone, ExternalLink } from 'lucide-react';
import { DetailedAttorney } from '../../types';

interface AttorneyProfileModalProps {
  attorney: DetailedAttorney | null;
  onClose: () => void;
  onOpenConsultationWithAttorney?: (name: string) => void;
}

export const AttorneyProfileModal: React.FC<AttorneyProfileModalProps> = ({
  attorney,
  onClose,
  onOpenConsultationWithAttorney,
}) => {
  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (attorney) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [attorney, onClose]);

  if (!attorney) return null;

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

        {/* Modal Dialog Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0B2238] border border-[#C99A4A]/30 shadow-2xl text-white z-10 my-8 max-h-[90vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="attorney-profile-name"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 text-white/60 hover:text-white transition-colors p-2 bg-[#071A2B]/80 border border-white/10 hover:border-[#C99A4A] cursor-pointer"
            aria-label="Close attorney profile"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left Column: Portrait & Direct Contact */}
            <div className="md:col-span-5 bg-[#071A2B] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
              <div>
                <div className="aspect-[4/5] overflow-hidden border border-white/10 mb-6 relative">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-60" />
                </div>

                <div className="space-y-3 font-mono text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C99A4A]" />
                    <span className="truncate">{attorney.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C99A4A]" />
                    <span>{attorney.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#E0B86A]">
                    <ExternalLink className="w-4 h-4" />
                    <span>LinkedIn Verified Profile</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultationWithAttorney?.(attorney.name);
                  }}
                  className="w-full py-3 bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer text-center block"
                >
                  Consult With {attorney.name.split(' ')[0]}
                </button>
              </div>
            </div>

            {/* Right Column: Detailed Biography, Focus, Credentials */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8">
              {/* Header Info */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C99A4A] block mb-2">
                  {attorney.position}
                </span>
                <h2
                  id="attorney-profile-name"
                  className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2"
                >
                  {attorney.name}
                </h2>
                <p className="text-sm text-white/60 font-mono">{attorney.specialty}</p>
              </div>

              {/* Biography */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#C99A4A] mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> Biography
                </h4>
                <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                  {attorney.biography}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#C99A4A] mb-2 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Key Experience
                </h4>
                <p className="text-sm text-white/70 font-sans leading-relaxed">
                  {attorney.experience}
                </p>
              </div>

              {/* Practice Focus */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#C99A4A] mb-2">
                  Practice Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {attorney.practiceFocus.map((focus, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#071A2B] border border-white/15 text-xs text-white/80 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#C99A4A]" />
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Admissions */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#C99A4A] mb-1.5 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Education
                  </h4>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    {attorney.education}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#C99A4A] mb-1.5">
                    Bar Admissions
                  </h4>
                  <ul className="text-xs text-white/70 font-sans space-y-1">
                    {attorney.professionalAssociations.map((assoc, aIdx) => (
                      <li key={aIdx}>• {assoc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
