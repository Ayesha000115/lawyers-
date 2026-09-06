export interface PracticeArea {
  id: string;
  title: string;
  shortDescription: string;
  category: string;
  iconName: 'briefcase' | 'landmark' | 'scale' | 'users';
  link: string;
}

export interface FirmMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Differentiator {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceCategory {
  id: string;
  title: string;
  summary: string;
  tag: string;
  stat?: string;
}

export interface AttorneyPreview {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  barAdmissions?: string;
  education?: string;
}

export interface LegalInsight {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  link: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface DetailedPracticeArea {
  id: string;
  number: string;
  title: string;
  description: string;
  services: string[];
  ctaText: string;
  iconName: 'briefcase' | 'landmark' | 'scale' | 'users' | 'building' | 'globe' | 'shield' | 'rocket';
  themeVariant?: 'navy' | 'deep-navy';
}

export interface FeaturedScenario {
  id: string;
  title: string;
  description: string;
  iconName: 'trending-up' | 'file-check' | 'shield-alert' | 'globe-2';
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: 'cpu' | 'building-2' | 'activity' | 'landmark' | 'factory' | 'shopping-bag' | 'briefcase' | 'rocket';
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface PracticeAreaFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StoryTimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface FirmValue {
  id: string;
  title: string;
  description: string;
  iconName: 'shield' | 'compass' | 'award' | 'users';
}

export interface ExperienceStat {
  id: string;
  value: string;
  label: string;
}

export interface ClientProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface DetailedAttorney {
  id: string;
  name: string;
  position: string;
  specialty: string;
  practiceFocus: string[];
  image: string;
  biography: string;
  experience: string;
  education: string;
  professionalAssociations: string[];
  email: string;
  phone: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  legalMatter: string;
  preferredContactMethod: 'Email' | 'Phone' | 'Video Call';
  preferredDate: string;
  preferredTime: 'Morning' | 'Afternoon' | 'Evening';
  message: string;
  consent: boolean;
}

export interface ConsultationProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ContactFAQItem {
  id: string;
  question: string;
  answer: string;
}
