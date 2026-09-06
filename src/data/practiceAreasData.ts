import {
  DetailedPracticeArea,
  FeaturedScenario,
  IndustryItem,
  ApproachStep,
  PracticeAreaFAQItem,
} from '../types';

export const DETAILED_PRACTICE_AREAS: DetailedPracticeArea[] = [
  {
    id: 'corporate-commercial',
    number: '01',
    title: 'Corporate & Commercial Law',
    description:
      'Practical legal counsel for businesses at every stage, from formation and structuring to contracts, governance, and commercial relationships.',
    services: [
      'Business Formation & Structuring',
      'Commercial Contracts',
      'Shareholder Agreements',
      'Corporate Governance',
      'Business Operations',
      'Risk Management',
    ],
    ctaText: 'Discuss Corporate Matters',
    iconName: 'briefcase',
    themeVariant: 'deep-navy',
  },
  {
    id: 'mergers-acquisitions',
    number: '02',
    title: 'Mergers & Acquisitions',
    description:
      'Strategic legal guidance for acquisitions, investments, restructurings, and other complex corporate transactions.',
    services: [
      'Due Diligence',
      'Acquisitions',
      'Business Sales',
      'Joint Ventures',
      'Investment Transactions',
      'Transaction Documentation',
    ],
    ctaText: 'Discuss an M&A Matter',
    iconName: 'landmark',
    themeVariant: 'navy',
  },
  {
    id: 'business-litigation',
    number: '03',
    title: 'Business Litigation & Disputes',
    description:
      'Strong, strategic representation when commercial disputes threaten your business, relationships, or reputation.',
    services: [
      'Contract Disputes',
      'Partnership Disputes',
      'Commercial Litigation',
      'Business Torts',
      'Negotiation',
      'Alternative Dispute Resolution',
    ],
    ctaText: 'Discuss a Dispute',
    iconName: 'scale',
    themeVariant: 'deep-navy',
  },
  {
    id: 'employment-executive',
    number: '04',
    title: 'Employment & Executive Law',
    description:
      'Clear legal guidance for employers, executives, and organizations navigating workplace relationships and employment obligations.',
    services: [
      'Employment Agreements',
      'Executive Contracts',
      'Workplace Policies',
      'Employee Disputes',
      'Restrictive Covenants',
      'Employment Compliance',
    ],
    ctaText: 'Discuss Employment Matters',
    iconName: 'users',
    themeVariant: 'navy',
  },
  {
    id: 'real-estate-property',
    number: '05',
    title: 'Real Estate & Property',
    description:
      'Legal counsel for commercial real estate transactions, development, leasing, and property-related matters.',
    services: [
      'Commercial Acquisitions',
      'Sales & Purchases',
      'Leasing',
      'Development',
      'Property Agreements',
      'Real Estate Disputes',
    ],
    ctaText: 'Discuss a Property Matter',
    iconName: 'building',
    themeVariant: 'deep-navy',
  },
  {
    id: 'international-business',
    number: '06',
    title: 'International Business',
    description:
      'Strategic legal support for businesses operating across borders and navigating international commercial relationships.',
    services: [
      'Cross-Border Transactions',
      'International Contracts',
      'Foreign Investments',
      'Business Expansion',
      'International Partnerships',
      'Regulatory Considerations',
    ],
    ctaText: 'Discuss an International Matter',
    iconName: 'globe',
    themeVariant: 'navy',
  },
  {
    id: 'intellectual-property',
    number: '07',
    title: 'Intellectual Property',
    description:
      'Helping businesses protect and manage the intellectual assets that contribute to their competitive advantage.',
    services: [
      'Trademarks',
      'Brand Protection',
      'Licensing',
      'IP Agreements',
      'Trade Secrets',
      'Commercial IP Matters',
    ],
    ctaText: 'Discuss an IP Matter',
    iconName: 'shield',
    themeVariant: 'deep-navy',
  },
  {
    id: 'startups-emerging',
    number: '08',
    title: 'Startups & Emerging Businesses',
    description:
      'Practical legal guidance for founders and growing companies building a strong foundation for long-term success.',
    services: [
      'Startup Formation',
      'Founder Agreements',
      'Investment Preparation',
      'Commercial Contracts',
      'Equity Structures',
      'Growth Strategy',
    ],
    ctaText: 'Discuss Your Startup',
    iconName: 'rocket',
    themeVariant: 'navy',
  },
];

export const FEATURED_SCENARIOS: FeaturedScenario[] = [
  {
    id: 'growing-business',
    title: 'Growing Your Business',
    description: 'Building the right legal foundation before expansion.',
    iconName: 'trending-up',
  },
  {
    id: 'major-transaction',
    title: 'Entering a Major Transaction',
    description: 'Understanding risks before signing a significant deal.',
    iconName: 'file-check',
  },
  {
    id: 'business-dispute',
    title: 'Facing a Business Dispute',
    description: 'Protecting your interests while pursuing a practical resolution.',
    iconName: 'shield-alert',
  },
  {
    id: 'expanding-international',
    title: 'Expanding Internationally',
    description: 'Navigating new markets with appropriate legal structures.',
    iconName: 'globe-2',
  },
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  { id: 'tech', name: 'Technology', iconName: 'cpu' },
  { id: 'real-estate', name: 'Real Estate', iconName: 'building-2' },
  { id: 'healthcare', name: 'Healthcare', iconName: 'activity' },
  { id: 'financial', name: 'Financial Services', iconName: 'landmark' },
  { id: 'manufacturing', name: 'Manufacturing', iconName: 'factory' },
  { id: 'retail', name: 'Retail & E-Commerce', iconName: 'shopping-bag' },
  { id: 'professional', name: 'Professional Services', iconName: 'briefcase' },
  { id: 'startups', name: 'Startups', iconName: 'rocket' },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'We begin by understanding your objectives, circumstances, and concerns.',
  },
  {
    step: '02',
    title: 'Analyze',
    description: 'We assess the legal and commercial issues that could affect your position.',
  },
  {
    step: '03',
    title: 'Strategize',
    description: 'We develop a practical strategy aligned with your priorities.',
  },
  {
    step: '04',
    title: 'Execute',
    description: 'We help turn the strategy into action with clear and responsive counsel.',
  },
];

export const PRACTICE_AREAS_FAQS: PracticeAreaFAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of businesses do you represent?',
    answer:
      'We represent emerging enterprises, mid-market commercial companies, private investment firms, high-growth startups, and established multinational corporations across diverse industry sectors.',
  },
  {
    id: 'faq-2',
    question: 'Can you advise on matters involving multiple practice areas?',
    answer:
      'Yes. Complex business transactions frequently demand multidisciplinary legal insight. Our practice groups collaborate seamlessly—such as pairing M&A counsel with employment and intellectual property specialists—to ensure cohesive guidance.',
  },
  {
    id: 'faq-3',
    question: 'When should I speak with a lawyer about a business transaction?',
    answer:
      'Engaging counsel at the earliest preliminary stages—such as during initial term sheet structuring or letter of intent negotiations—provides the highest degree of risk mitigation and commercial leverage before commitments are formalized.',
  },
  {
    id: 'faq-4',
    question: 'Do you assist startups and newly formed businesses?',
    answer:
      'Yes. Through our Startups & Emerging Businesses practice, we advise founding teams on entity selection, founder equity allocation, IP assignment, seed and venture financings, and core commercial contracts.',
  },
  {
    id: 'faq-5',
    question: 'Can you help with cross-border business matters?',
    answer:
      'Our International Business practice regularly assists domestic clients expanding abroad as well as foreign enterprises establishing operations, subsidiaries, and strategic joint ventures within the United States.',
  },
  {
    id: 'faq-6',
    question: 'How do I know which practice area applies to my situation?',
    answer:
      "You don't need to categorize your legal needs before reaching out. During an initial confidential consultation, our partners review your business objectives and assemble the appropriate legal team.",
  },
];
