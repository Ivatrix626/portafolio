export interface SkillCategory {
  label: string;
  code: string;
  accent: 'cyan' | 'green' | 'amber';
  items: string[];
}

export interface Job {
  index: string;
  title: string;
  company: string;
  summary: string;
  details: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
}

export interface EducationBlock {
  index: string;
  title: string;
  items: EducationItem[];
}

export interface SiteTranslations {
  lang: 'es' | 'en';
  meta: { title: string; description: string };
  hero: { eyebrow: string; tagline: string; subtitle: string; cta: string; scroll: string };
  terminal: { label: string; heading: string; chromeTitle: string; bio: string };
  skills: { label: string; heading: string; categories: SkillCategory[] };
  experience: { label: string; heading: string; jobs: Job[] };
  education: { label: string; heading: string; blocks: EducationBlock[] };
  contact: { label: string; heading: string; tagline: string; location: string; copyright: string };
}
