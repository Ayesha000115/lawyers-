import { FirmMetric, PracticeArea, Differentiator, ExperienceCategory, AttorneyPreview, LegalInsight, NavLinkItem } from '../types';

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Practice Areas', href: '/practice-areas' },
  { label: 'About', href: '/about' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export const FIRM_METRICS: FirmMetric[] = [
  {
    id: 'years',
    value: 15,
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    id: 'clients',
    value: 500,
    suffix: '+',
    label: 'Clients Advised',
  },
  {
    id: 'industries',
    value: 30,
    suffix: '+',
    label: 'Industries Served',
  },
  {
    id: 'satisfaction',
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
  },
];

export const PRACTICE_AREAS_PREVIEW: PracticeArea[] = [
  {
    id: 'corporate-commercial',
    title: 'Corporate & Commercial Law',
    shortDescription: 'Practical counsel for contracts, business structures, and commercial relationships.',
    category: 'Advisory',
    iconName: 'briefcase',
    link: '/practice-areas',
  },
  {
    id: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    shortDescription: 'Strategic legal guidance for complex transactions and investments.',
    category: 'Transactions',
    iconName: 'landmark',
    link: '/practice-areas',
  },
  {
    id: 'business-litigation',
    title: 'Business Litigation',
    shortDescription: 'Strong representation when important business interests are at stake.',
    category: 'Dispute Resolution',
    iconName: 'scale',
    link: '/practice-areas',
  },
  {
    id: 'employment-law',
    title: 'Employment Law',
    shortDescription: 'Clear guidance for employers, executives, agreements, and workplace matters.',
    category: 'Governance',
    iconName: 'users',
    link: '/practice-areas',
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: '01',
    title: 'Strategic Thinking',
    description: 'Advice shaped around your wider business objectives.',
  },
  {
    number: '02',
    title: 'Practical Solutions',
    description: 'Clear legal guidance without unnecessary complexity.',
  },
  {
    number: '03',
    title: 'Responsive Counsel',
    description: 'Direct, thoughtful communication when decisions matter.',
  },
];

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    id: 'exp-corp',
    title: 'Corporate Transactions',
    summary: 'Structuring joint ventures, equity financings, and corporate governance frameworks.',
    tag: 'Transactions',
    stat: '$1.4B+ Deals Handled',
  },
  {
    id: 'exp-disp',
    title: 'Business Disputes',
    summary: 'Protecting corporate interests in commercial arbitration, breach claims, and partnership exits.',
    tag: 'Litigation',
    stat: 'High-Stakes Resolution',
  },
  {
    id: 'exp-comm',
    title: 'Commercial Agreements',
    summary: 'Drafting master supply agreements, technology licensing, and strategic distribution contracts.',
    tag: 'Contracts',
    stat: 'Multi-Jurisdictional',
  },
  {
    id: 'exp-cross',
    title: 'Cross-Border Matters',
    summary: 'Navigating international trade compliance, offshore restructuring, and inbound foreign investment.',
    tag: 'Global',
    stat: '18+ Partner Nations',
  },
];

export const ATTORNEYS_PREVIEW: AttorneyPreview[] = [
  {
    id: 'daniel-morgan',
    name: 'Daniel Morgan',
    role: 'Managing Partner',
    specialty: 'Corporate Governance & Private Capital',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
    barAdmissions: 'New York & Federal Bar',
    education: 'Columbia Law School, J.D.',
  },
  {
    id: 'amelia-reed',
    name: 'Amelia Reed',
    role: 'Corporate Partner',
    specialty: 'M&A & Strategic Transactions',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
    barAdmissions: 'New York & Massachusetts',
    education: 'Harvard Law School, J.D.',
  },
  {
    id: 'james-bennett',
    name: 'James Bennett',
    role: 'Litigation Partner',
    specialty: 'Commercial Disputes & Appellate Law',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
    barAdmissions: 'New York & 2nd Circuit Court of Appeals',
    education: 'Georgetown University Law Center, J.D.',
  },
];

export const LEGAL_INSIGHTS: LegalInsight[] = [
  {
    id: 'insight-1',
    category: 'Corporate Growth',
    title: '5 Legal Considerations Before Expanding Your Business',
    excerpt: 'Key structural, regulatory, and contractual safeguards every leadership team should resolve prior to regional or international market entry.',
    readTime: '4 min read',
    date: 'Oct 2025',
    link: '/insights',
  },
  {
    id: 'insight-2',
    category: 'M&A Advisory',
    title: 'How to Prepare for a Business Acquisition',
    excerpt: 'An executive roadmap covering seller due diligence, capitalization clean-up, material contract warranties, and post-close indemnification.',
    readTime: '6 min read',
    date: 'Nov 2025',
    link: '/insights',
  },
  {
    id: 'insight-3',
    category: 'Risk & Governance',
    title: 'Common Contract Risks for Growing Companies',
    excerpt: 'Identifying hidden liability caps, termination ambiguities, and intellectual property exposure before entering long-term enterprise commitments.',
    readTime: '5 min read',
    date: 'Jan 2026',
    link: '/insights',
  },
];
