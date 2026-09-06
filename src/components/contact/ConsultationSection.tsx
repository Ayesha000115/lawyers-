import React from 'react';
import { DirectContactSection } from './DirectContactSection';

interface ConsultationSectionProps {
  initialMatter?: string;
}

/**
 * ConsultationSection now renders the DirectContactSection,
 * replacing the previous intake forms with direct WhatsApp and Phone communication channels.
 */
export const ConsultationSection: React.FC<ConsultationSectionProps> = () => {
  return <DirectContactSection />;
};
