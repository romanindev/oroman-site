export type ExperienceEntry = {
  slug: string;
  role: string;
  company: string;
  companyDescription?: string;
  period: string;
  location?: string;
  employmentType?: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    slug: 'current-role',
    role: 'Senior Software Engineer',
    company: 'Confidential / NDA Project',
    companyDescription:
      'Product-focused engineering work across modern web applications and scalable frontend architecture.',
    period: '2023 — Present',
    location: 'Remote',
    employmentType: 'B2B',
    summary:
      'Frontend-focused engineering with a strong full-stack mindset, centered around scalable UI architecture, maintainability, and production-ready delivery.',
    responsibilities: [
      'Built and evolved frontend features using React, TypeScript, and modern state management patterns.',
      'Improved maintainability by aligning implementation with clean architecture principles and reusable component patterns.',
      'Contributed to technical decisions across frontend and backend boundaries.',
      'Worked on API integrations, data flows, validation, and reliability improvements.',
      'Collaborated with product, design, and engineering stakeholders to deliver production-ready features.',
    ],
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Redux Toolkit',
      'React Query',
      'CSS Modules',
      'Architecture',
      'API Integration',
    ],
  },
  {
    slug: 'raise-now',
    role: 'Software Engineer',
    company: 'Swiss product company',
    companyDescription:
      'A product environment focused on digital platforms, maintainable frontend systems, and real-world delivery.',
    period: '2021 — 2023',
    location: 'Remote',
    employmentType: 'Full-time / Contract',
    summary:
      'Worked on complex product features, frontend quality improvements, and system evolution in a collaborative engineering environment.',
    responsibilities: [
      'Developed and maintained frontend functionality for product-facing web applications.',
      'Improved code quality through better structure, shared patterns, and engineering best practices.',
      'Introduced and refined tooling for consistency, maintainability, and developer experience.',
      'Participated in architecture discussions and contributed to cross-team technical delivery.',
    ],
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Design Systems',
      'Frontend Architecture',
      'Testing',
      'ESLint',
      'Prettier',
    ],
  },
];
