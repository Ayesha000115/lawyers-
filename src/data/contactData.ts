import { ContactFAQItem } from '../types';

export interface WhatHappensNextStep {
  step: string;
  title: string;
  description: string;
}

/**
 * Reusable WhatsApp Configuration
 * Single source of truth for the entire application.
 * Replace `phoneNumberDigits` and `displayNumber` with the client's actual WhatsApp Business details.
 */
export const WHATSAPP_CONFIG = {
  displayNumber: '+1 (212) 555-0188',
  phoneNumberDigits: '12125550188',
  defaultMessage: "Hello Veritas Law Group, I'd like to discuss a legal matter.",
  getLink: (customMessage?: string): string => {
    const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
    return `https://wa.me/${WHATSAPP_CONFIG.phoneNumberDigits}?text=${encodeURIComponent(message)}`;
  },
};

/**
 * Reusable Phone Configuration
 * Single source of truth for telephone links across the site.
 */
export const PHONE_CONFIG = {
  displayNumber: '+1 (212) 555-0188',
  telUri: 'tel:+12125550188',
};

export const CONTACT_INFO = {
  firmName: 'Veritas Law Group',
  tagline: 'Strategic Legal Counsel. Built Around Your Business.',
  address: {
    line1: '1200 Madison Avenue',
    cityStateZip: 'New York, NY 10016',
    neighborhood: 'Carnegie Hill / Upper East Side',
    suite: 'Suite 2400',
    disclaimer: 'MANHATTAN HEADQUARTERS',
  },
  phone: '+1 (212) 555-0188',
  tel: 'tel:+12125550188',
  email: 'hello@veritaslawgroup.com',
  hours: {
    weekdays: 'Monday – Friday: 8:30 AM – 6:00 PM',
    weekends: 'Saturday – Sunday: By appointment',
  },
};

export const WHAT_HAPPENS_NEXT_STEPS: WhatHappensNextStep[] = [
  {
    step: '01',
    title: 'Start the Conversation',
    description:
      'Reach out directly via WhatsApp messaging or call our Manhattan office during business hours.',
  },
  {
    step: '02',
    title: 'Tell Us What You Need',
    description:
      'Share a brief overview of your business circumstances, objectives, or transaction timelines.',
  },
  {
    step: '03',
    title: 'Discuss the Appropriate Next Step',
    description:
      'We evaluate legal scope, identify strategic priorities, and advise on practical next steps or engagement.',
  },
];

// For backwards compatibility if imported elsewhere
export const CONSULTATION_PROCESS_STEPS = WHAT_HAPPENS_NEXT_STEPS;

export const CONTACT_FAQS: ContactFAQItem[] = [
  {
    id: 'faq-1',
    question: 'What information should I share during our first conversation?',
    answer:
      'A high-level overview is sufficient to help us understand your business circumstances, objectives, and any critical deadlines before discussing potential next steps.',
  },
  {
    id: 'faq-2',
    question: 'How quickly will someone respond to WhatsApp or telephone calls?',
    answer:
      'During standard business hours (Monday – Friday, 8:30 AM – 6:00 PM EST), our team promptly responds to direct WhatsApp messages and telephone calls. Messages received after hours are answered early the following business morning.',
  },
  {
    id: 'faq-3',
    question: 'Does contacting the firm create an attorney-client relationship?',
    answer:
      'No. An initial conversation or inquiry does not by itself establish an attorney-client relationship. Representation begins only upon formal mutual agreement and conflict clearance.',
  },
  {
    id: 'faq-4',
    question: 'Can consultations be conducted remotely?',
    answer:
      'Yes. In addition to in-person meetings at our Madison Avenue office in Manhattan, we routinely coordinate telephone consultations and secure video conferences for clients worldwide.',
  },
  {
    id: 'faq-5',
    question: 'What materials should I have ready for preliminary review?',
    answer:
      'Relevant contracts, transaction term sheets, key correspondence, or regulatory timelines may be helpful to reference during preliminary discussions.',
  },
];


