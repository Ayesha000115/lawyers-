import React, { useEffect } from 'react';
import { PracticeAreasHero } from './PracticeAreasHero';
import { PracticeAreasIntro } from './PracticeAreasIntro';
import { PracticeAreasEditorialList } from './PracticeAreasEditorialList';
import { FeaturedScenarios } from './FeaturedScenarios';
import { IndustriesSection } from './IndustriesSection';
import { ApproachSection } from './ApproachSection';
import { PracticeAreasMidCTA } from './PracticeAreasMidCTA';
import { PracticeAreasFAQ } from './PracticeAreasFAQ';
import { PracticeAreasPreFooterCTA } from './PracticeAreasPreFooterCTA';

interface PracticeAreasPageProps {
  onNavigate: (href: string) => void;
  onOpenConsultationWithMatter: (matterTitle?: string) => void;
}

export const PracticeAreasPage: React.FC<PracticeAreasPageProps> = ({
  onNavigate,
  onOpenConsultationWithMatter,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div id="practice-areas-page" className="w-full">
      {/* 1. Page Hero */}
      <PracticeAreasHero
        onNavigate={onNavigate}
        onOpenConsultation={() => onOpenConsultationWithMatter('Corporate & Commercial Law')}
      />

      {/* 2. Practice Area Intro */}
      <PracticeAreasIntro />

      {/* 3. Main Practice Areas (8 Editorial Layout Sections) */}
      <PracticeAreasEditorialList
        onSelectMatter={(matter) => onOpenConsultationWithMatter(matter)}
      />

      {/* 4. Featured Matters / Scenarios */}
      <FeaturedScenarios
        onSelectScenario={(scenario) => onOpenConsultationWithMatter(scenario)}
      />

      {/* 5. Industries Served */}
      <IndustriesSection />

      {/* 6. Our Approach (4 Stages with connecting line) */}
      <ApproachSection />

      {/* 7. Mid-Page Tailored Consultation CTA */}
      <PracticeAreasMidCTA
        onOpenConsultation={() => onOpenConsultationWithMatter('General Legal Inquiry')}
      />

      {/* 8. Practice Areas FAQ (Smooth animated accordion) */}
      <PracticeAreasFAQ />

      {/* 9. Final Pre-Footer CTA */}
      <PracticeAreasPreFooterCTA
        onOpenConsultation={() => onOpenConsultationWithMatter('Strategic Consultation')}
      />
    </div>
  );
};
