import React, { useState, useEffect } from 'react';
import { AboutHero } from './AboutHero';
import { OurStory } from './OurStory';
import { OurPhilosophy } from './OurPhilosophy';
import { OurValues } from './OurValues';
import { ExperienceStats } from './ExperienceStats';
import { HowWeWork } from './HowWeWork';
import { LeadershipFeature } from './LeadershipFeature';
import { AttorneysGrid } from './AttorneysGrid';
import { EducationCredentials } from './EducationCredentials';
import { ClientRelationshipTrust } from './ClientRelationshipTrust';
import { AboutTestimonial } from './AboutTestimonial';
import { AboutCTA } from './AboutCTA';
import { AttorneyProfileModal } from './AttorneyProfileModal';
import { DetailedAttorney } from '../../types';

interface AboutPageProps {
  onNavigate: (href: string) => void;
  onOpenConsultationWithMatter: (matterTitle?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultationWithMatter,
}) => {
  const [selectedAttorney, setSelectedAttorney] = useState<DetailedAttorney | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div id="about-firm-page" className="w-full">
      {/* 1. Page Hero */}
      <AboutHero
        onNavigate={onNavigate}
        onOpenConsultation={() => onOpenConsultationWithMatter('Executive Consultation')}
      />

      {/* 2. Our Story (Editorial + Vertical Drawing Timeline) */}
      <OurStory />

      {/* 3. Our Philosophy (01 Listen First, 02 Think Commercially, 03 Act with Purpose) */}
      <OurPhilosophy />

      {/* 4. Our Values (Integrity, Clarity, Excellence, Partnership) */}
      <OurValues />

      {/* 5. Experience Stats (Animated Counter / Metric Bars) */}
      <ExperienceStats />

      {/* 6. How We Work with Clients (4-Step Relationship Framework) */}
      <HowWeWork />

      {/* 7. Leadership Feature (Managing Partner Daniel Morgan) */}
      <LeadershipFeature onSelectAttorney={(attorney) => setSelectedAttorney(attorney)} />

      {/* 8. Our Attorneys Grid (6 Fictional Attorneys) */}
      <AttorneysGrid onSelectAttorney={(attorney) => setSelectedAttorney(attorney)} />

      {/* 9. Education & Credentials (Academic & Bar Memberships) */}
      <EducationCredentials />

      {/* 10. Client Relationship Trust (Emotional Statement & Quote Watermark) */}
      <ClientRelationshipTrust />

      {/* 11. Single Fictional Client Perspective Testimonial */}
      <AboutTestimonial />

      {/* 12. Final Pre-Footer Call to Action */}
      <AboutCTA
        onNavigate={onNavigate}
        onOpenConsultation={() => onOpenConsultationWithMatter('Executive Consultation')}
      />

      {/* Attorney Profile Modal */}
      <AttorneyProfileModal
        attorney={selectedAttorney}
        onClose={() => setSelectedAttorney(null)}
        onOpenConsultationWithAttorney={(name) => {
          setSelectedAttorney(null);
          onOpenConsultationWithMatter(`Inquiry for ${name}`);
        }}
      />
    </div>
  );
};
