import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CredibilityStrip } from './components/CredibilityStrip';
import { AboutPreview } from './components/AboutPreview';
import { PracticeAreasPreview } from './components/PracticeAreasPreview';
import { WhyVeritas } from './components/WhyVeritas';
import { ExperiencePreview } from './components/ExperiencePreview';
import { TeamPreview } from './components/TeamPreview';
import { TestimonialPreview } from './components/TestimonialPreview';
import { InsightsPreview } from './components/InsightsPreview';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { FuturePageNoticeModal } from './components/FuturePageNoticeModal';
import { PracticeAreasPage } from './components/practice-areas/PracticeAreasPage';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contact/ContactPage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationMatter, setConsultationMatter] = useState<string>('Corporate & Commercial Law');
  const [noticeRoute, setNoticeRoute] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>('/');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      if (path === '/contact' || path === '/practice-areas' || path === '/about' || path === '/') {
        setCurrentPath(path);
        setNoticeRoute(null);
      } else {
        setNoticeRoute(path);
      }
    };

    window.addEventListener('popstate', handlePopState);
    // Initial check on mount
    const initialPath = window.location.pathname;
    if (initialPath) {
      if (initialPath === '/contact' || initialPath === '/practice-areas' || initialPath === '/about') {
        setCurrentPath(initialPath);
      } else if (initialPath !== '/') {
        setNoticeRoute(initialPath);
      }
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (href: string) => {
    try {
      window.history.pushState({}, '', href);
    } catch {
      // In sandboxed iframes without permission to pushState
    }

    if (href === '/contact') {
      setCurrentPath('/contact');
      setNoticeRoute(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/practice-areas') {
      setCurrentPath('/practice-areas');
      setNoticeRoute(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/about') {
      setCurrentPath('/about');
      setNoticeRoute(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href === '/team') {
      // If navigating to /team, navigate to /about and scroll to attorneys section
      setCurrentPath('/about');
      setNoticeRoute(null);
      setTimeout(() => {
        const teamEl = document.getElementById('our-attorneys-grid');
        if (teamEl) {
          teamEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    if (href === '/') {
      setCurrentPath('/');
      setNoticeRoute(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // For other upcoming pages (/insights)
    setNoticeRoute(href);
  };

  const handleOpenConsultationWithMatter = (matterTitle?: string) => {
    if (currentPath === '/contact') {
      const section = document.getElementById('direct-contact-options') || document.getElementById('consultation-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (matterTitle) {
      setConsultationMatter(matterTitle);
    }
    handleNavigate('/contact');
  };

  const handleCloseNotice = () => {
    setNoticeRoute(null);
    try {
      window.history.pushState({}, '', currentPath);
    } catch {
      // In sandboxed iframe
    }
  };

  return (
    <div className="min-h-screen bg-[#071A2B] text-[#17202A] font-sans selection:bg-[#C99A4A]/30 selection:text-white">
      {/* Sticky Premium Header */}
      <Header
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultationWithMatter('Corporate & Commercial Law')}
        activePath={currentPath}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {currentPath === '/practice-areas' ? (
          /* Dedicated Practice Areas Page */
          <PracticeAreasPage
            onNavigate={handleNavigate}
            onOpenConsultationWithMatter={handleOpenConsultationWithMatter}
          />
        ) : currentPath === '/about' ? (
          /* Dedicated About & Team Page */
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultationWithMatter={handleOpenConsultationWithMatter}
          />
        ) : currentPath === '/contact' ? (
          /* Dedicated Contact & Consultation Page */
          <ContactPage
            onNavigate={handleNavigate}
            initialMatter={consultationMatter}
          />
        ) : (
          /* Home Page Sections (Strictly Ordered 1-10) */
          <>
            {/* Section 1: Hero */}
            <HeroSection
              onNavigate={handleNavigate}
              onOpenConsultation={() => handleOpenConsultationWithMatter('Corporate & Commercial Law')}
            />

            {/* Section 2: Credibility / Trust Strip */}
            <CredibilityStrip />

            {/* Section 3: Short About Preview */}
            <AboutPreview onNavigate={handleNavigate} />

            {/* Section 4: Practice Areas Preview */}
            <PracticeAreasPreview onNavigate={handleNavigate} />

            {/* Section 5: Why Veritas */}
            <WhyVeritas onNavigate={handleNavigate} />

            {/* Section 6: Experience Preview */}
            <ExperiencePreview onNavigate={handleNavigate} />

            {/* Section 7: Team Preview */}
            <TeamPreview onNavigate={handleNavigate} />

            {/* Section 8: Testimonial Preview */}
            <TestimonialPreview />

            {/* Section 9: Insights Preview */}
            <InsightsPreview onNavigate={handleNavigate} />

            {/* Section 10: Final CTA */}
            <FinalCTA
              onNavigate={handleNavigate}
              onOpenConsultation={() => handleOpenConsultationWithMatter('Corporate & Commercial Law')}
            />
          </>
        )}
      </main>

      {/* Footer - Identical across all pages */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultationWithMatter('Corporate & Commercial Law')}
      />

      {/* Interactive Consultation Intake Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        defaultPracticeArea={consultationMatter}
        onClose={() => {
          setIsConsultationOpen(false);
          if (window.location.pathname === '/contact') {
            try {
              window.history.pushState({}, '', currentPath);
            } catch {
              // Ignore
            }
          }
        }}
      />

      {/* Architecture Notice for Other Sub-Page Routes */}
      <FuturePageNoticeModal
        pagePath={noticeRoute}
        onClose={handleCloseNotice}
        onOpenConsultation={() => {
          handleCloseNotice();
          handleOpenConsultationWithMatter('General Inquiry');
        }}
      />

      {/* Floating WhatsApp Contact Button (Fixed at Bottom-Right across pages) */}
      <FloatingWhatsApp />
    </div>
  );
}
