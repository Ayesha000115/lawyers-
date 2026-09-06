import React, { useEffect } from 'react';
import { ContactHero } from './ContactHero';
import { DirectContactSection } from './DirectContactSection';
import { ConsultationProcess } from './ConsultationProcess';
import { OfficeLocation } from './OfficeLocation';
import { ContactDetailsStrip } from './ContactDetailsStrip';
import { ContactFAQ } from './ContactFAQ';
import { ContactCTA } from './ContactCTA';

interface ContactPageProps {
  onNavigate: (href: string) => void;
  initialMatter?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
}) => {
  useEffect(() => {
    // Scroll to top on page mount unless anchor hash present
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  const handleScrollToContact = () => {
    const section = document.getElementById('direct-contact-options') || document.getElementById('consultation-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main id="contact-page" className="w-full bg-[#071A2B] overflow-hidden">
      {/* 1. Hero Section */}
      <ContactHero
        onNavigate={onNavigate}
        onScrollToForm={handleScrollToContact}
      />

      {/* 2. Direct Contact Options (Option 01 WhatsApp & Option 02 Phone Split Layout) */}
      <DirectContactSection />

      {/* 3. Consultation Process ("What Happens Next") */}
      <ConsultationProcess />

      {/* 4. Office Location Section (Split layout with map visualization) */}
      <OfficeLocation />

      {/* 5. Contact Details Strip (3-column quick-action row) */}
      <ContactDetailsStrip />

      {/* 6. FAQ Section (Accordion) */}
      <ContactFAQ />

      {/* 7. Final Consultation CTA */}
      <ContactCTA
        onScrollToForm={handleScrollToContact}
        onNavigate={onNavigate}
      />
    </main>
  );
};
