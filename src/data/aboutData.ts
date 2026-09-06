import {
  StoryTimelineItem,
  PhilosophyPrinciple,
  FirmValue,
  ExperienceStat,
  ClientProcessStep,
  DetailedAttorney,
} from '../types';

export const STORY_TIMELINE: StoryTimelineItem[] = [
  {
    year: '2006',
    title: 'The Firm Begins',
    description:
      'Founded in New York with a core mission to deliver strategic, commercial-first legal counsel to high-growth businesses and enterprise founders.',
  },
  {
    year: '2012',
    title: 'Expanded Corporate Practice',
    description:
      'Broadened transaction and advisory capabilities to support institutional private equity, mid-market acquisitions, and complex contract negotiations.',
  },
  {
    year: '2017',
    title: 'International Matters Added',
    description:
      'Inaugurated dedicated cross-border practice advising multinational enterprises on inbound foreign direct investment and foreign subsidiary expansions.',
  },
  {
    year: '2022',
    title: 'Expanded Business Advisory Team',
    description:
      'Welcomed senior specialists in executive governance, employment litigation, and intellectual property management to provide full-spectrum commercial defense.',
  },
  {
    year: '2026',
    title: 'A Modern Approach to Legal Counsel',
    description:
      'Continuing to lead corporate advisory with disciplined clarity, client-centric technology integration, and partner-level accessibility across all mandates.',
  },
];

export const PHILOSOPHY_PRINCIPLES: PhilosophyPrinciple[] = [
  {
    number: '01',
    title: 'LISTEN FIRST',
    description:
      "Understanding the client's objectives comes before recommending a legal strategy.",
  },
  {
    number: '02',
    title: 'THINK COMMERCIALLY',
    description:
      "Legal decisions should make sense not only legally, but in the context of the client's business.",
  },
  {
    number: '03',
    title: 'ACT WITH PURPOSE',
    description:
      'Once the path is clear, we help clients move forward with confidence.',
  },
];

export const FIRM_VALUES: FirmValue[] = [
  {
    id: 'val-integrity',
    title: 'INTEGRITY',
    description:
      'We approach every matter with honesty, discretion, and professional responsibility.',
    iconName: 'shield',
  },
  {
    id: 'val-clarity',
    title: 'CLARITY',
    description:
      'We communicate complex legal issues in a way clients can understand and act upon.',
    iconName: 'compass',
  },
  {
    id: 'val-excellence',
    title: 'EXCELLENCE',
    description:
      'We pursue thoughtful, rigorous work on every matter.',
    iconName: 'award',
  },
  {
    id: 'val-partnership',
    title: 'PARTNERSHIP',
    description:
      'We build long-term relationships based on trust and responsiveness.',
    iconName: 'users',
  },
];

export const EXPERIENCE_STATS: ExperienceStat[] = [
  { id: 'stat-years', value: '15+', label: 'Years of Experience' },
  { id: 'stat-clients', value: '500+', label: 'Clients Advised' },
  { id: 'stat-industries', value: '30+', label: 'Industries' },
  { id: 'stat-matters', value: '1,200+', label: 'Matters Handled' },
];

export const CLIENT_PROCESS_STEPS: ClientProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    description:
      'We take time to understand your business, objectives, and concerns.',
  },
  {
    step: '02',
    title: 'Advise',
    description: 'We explain the legal issues and options clearly.',
  },
  {
    step: '03',
    title: 'Collaborate',
    description:
      'We work with you to determine the most appropriate strategy.',
  },
  {
    step: '04',
    title: 'Support',
    description: 'We remain available as circumstances evolve.',
  },
];

export const DETAILED_ATTORNEYS: DetailedAttorney[] = [
  {
    id: 'daniel-morgan',
    name: 'Daniel Morgan',
    position: 'Managing Partner',
    specialty: 'Corporate Strategy & Private Capital',
    practiceFocus: [
      'Corporate Governance',
      'Mergers & Acquisitions',
      'Executive Counseling',
    ],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    biography:
      'Daniel advises businesses and executives on complex corporate matters, strategic transactions, and long-term business decisions. His approach combines legal experience with a practical understanding of the commercial pressures clients face.',
    experience:
      'Over 18 years advising corporate boards, founder-led enterprises, and private equity sponsors on high-stakes reorganizations and multi-jurisdictional buyouts.',
    education: 'Columbia Law School, J.D. • Princeton University, B.A.',
    professionalAssociations: [
      'American Bar Association (Business Law Section)',
      'New York State Bar Association',
      'International Bar Association',
    ],
    email: 'd.morgan@veritaslawgroup.com',
    phone: '+1 (555) 123-4568',
  },
  {
    id: 'amelia-reed',
    name: 'Amelia Reed',
    position: 'Corporate Partner',
    specialty: 'M&A & Strategic Transactions',
    practiceFocus: [
      'Cross-Border Buyouts',
      'Joint Ventures',
      'Securities & Financings',
    ],
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    biography:
      'Amelia leads transactional teams in domestic and international acquisitions, joint ventures, and capital investments. She is known for pragmatic deal execution that protects enterprise value while minimizing closing friction.',
    experience:
      '14 years representing emerging growth companies and strategic buyers across technology, life sciences, and industrial manufacturing transactions.',
    education: 'Harvard Law School, J.D. • Yale University, B.A.',
    professionalAssociations: [
      'American Bar Association (M&A Committee)',
      'Massachusetts Bar Association',
    ],
    email: 'a.reed@veritaslawgroup.com',
    phone: '+1 (555) 123-4569',
  },
  {
    id: 'james-bennett',
    name: 'James Bennett',
    position: 'Litigation Partner',
    specialty: 'Commercial Disputes & Litigation',
    practiceFocus: [
      'Breach of Contract',
      'Shareholder Disputes',
      'Commercial Arbitration',
    ],
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    biography:
      'James represents corporate clients in contentious business disputes, partnership dissolutions, and complex commercial arbitrations. He focuses on protecting client reputations while seeking commercial resolution.',
    experience:
      '16 years as trial counsel across state and federal courts, securing favorable outcomes in trade secret claims, contract disputes, and fiduciary defense.',
    education:
      'Georgetown University Law Center, J.D. • University of Virginia, B.A.',
    professionalAssociations: [
      'New York City Bar Association (Litigation Committee)',
      'American Bar Association (Litigation Section)',
    ],
    email: 'j.bennett@veritaslawgroup.com',
    phone: '+1 (555) 123-4570',
  },
  {
    id: 'sophia-carter',
    name: 'Sophia Carter',
    position: 'Employment Partner',
    specialty: 'Employment & Executive Law',
    practiceFocus: [
      'Executive Compensation',
      'Workplace Compliance',
      'Restrictive Covenants',
    ],
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    biography:
      'Sophia counsels corporate employers, executive management teams, and boards on workplace governance, executive agreements, severance structuring, and labor risk mitigation.',
    experience:
      '12 years defending management in high-exposure employment claims and structuring compliance frameworks for nationwide corporate workforces.',
    education: 'NYU School of Law, J.D. • Dartmouth College, B.A.',
    professionalAssociations: [
      'New York State Bar Association (Labor & Employment)',
      'National Association of Corporate Directors',
    ],
    email: 's.carter@veritaslawgroup.com',
    phone: '+1 (555) 123-4571',
  },
  {
    id: 'michael-hayes',
    name: 'Michael Hayes',
    position: 'M&A Counsel',
    specialty: 'Corporate Due Diligence & Contracts',
    practiceFocus: [
      'Transaction Documentation',
      'Corporate Restructuring',
      'Commercial Agreements',
    ],
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    biography:
      'Michael specializes in transaction documentation, due diligence investigations, and corporate restructuring for middle-market commercial entities and private capital firms.',
    experience:
      '9 years managing transaction closing protocols and drafting complex purchase agreements across technology and energy sectors.',
    education: 'University of Chicago Law School, J.D. • Northwestern University, B.S.',
    professionalAssociations: [
      'American Bar Association',
      'Illinois State Bar Association',
    ],
    email: 'm.hayes@veritaslawgroup.com',
    phone: '+1 (555) 123-4572',
  },
  {
    id: 'olivia-parker',
    name: 'Olivia Parker',
    position: 'Real Estate Counsel',
    specialty: 'Commercial Property & Leasing',
    practiceFocus: [
      'Commercial Acquisitions',
      'Development Agreements',
      'Master Leasing',
    ],
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    biography:
      'Olivia guides institutional investors, real estate developers, and commercial tenants through acquisition, disposition, leasing, and land development matters.',
    experience:
      '10 years facilitating commercial asset sales, mixed-use zoning agreements, and nationwide retail leasing portfolios.',
    education: 'Cornell Law School, J.D. • Brown University, B.A.',
    professionalAssociations: [
      'Real Estate Board of New York (REBNY)',
      'American Bar Association (Real Property Section)',
    ],
    email: 'o.parker@veritaslawgroup.com',
    phone: '+1 (555) 123-4573',
  },
];

export const CREDENTIALS_DATA = {
  degrees: [
    { degree: 'J.D.', institution: 'Harvard Law School', detail: 'Cum Laude' },
    { degree: 'B.A.', institution: 'University of Pennsylvania', detail: 'High Honors in Economics' },
  ],
  memberships: [
    'American Bar Association',
    'State Bar Association',
    'International Bar Association',
  ],
};

export const ABOUT_TESTIMONIAL = {
  quote:
    'Working with Veritas Law gave us confidence in some of the most important decisions our company has made.',
  author: 'Sarah Mitchell',
  title: 'Founder, Northbridge Ventures',
  badge: 'CLIENT TESTIMONIAL',
};
