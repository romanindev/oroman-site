export type ExperienceEntry = {
  slug: string;
  role: string;
  company: string;
  companyDescription?: string;
  period: string;
  location?: string;
  employmentType?: string;
  summary?: string;
  responsibilities: string[];
  skills: string[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    slug: 'it5',
    role: 'Senior Software Engineer',
    company: 'IT Services & Consulting Company',
    companyDescription:
      'Supporting clients from Switzerland and the UK (under NDA)',
    period: '2021 — 2026',
    location: 'Remote',
    employmentType: 'Full-time / Contract',
    responsibilities: [
      'Improved codebase maintainability by aligning implementation with modern best practices and clean architecture principles',
      'Developed UI components and migrated legacy forms to a Figma-based design system',
      'Introduced and configured code quality tools (ESLint, Prettier, Husky), improving consistency and developer experience',
      'Built and extended frontend features using React and Redux Toolkit, with a focus on maintainability and testability',
      'Improved data fetching strategy by introducing React Query, reducing backend load through caching and query invalidation',
      'Participated in system architecture and technical decisions across frontend and backend',
      'Integrated AWS services (e.g., S3, EC2) into application development and deployment workflows',
      'Increased system reliability by adding test coverage for critical application flows',
    ],
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Redux Toolkit',
      'React Query',
      'API Integration',
      'AWS / DB',
    ],
  },
  {
    slug: 'it4',
    role: 'Senior Software Engineer',
    company: 'IT Services & Consulting Company',
    companyDescription: 'Software solutions company',
    period: '2020 — 2021',
    location: 'Remote',
    employmentType: 'Full-time / Contract',
    responsibilities: [
      'Developed and maintained a CMS platform for data collection and analysis',
      'Refactored legacy React/JavaScript code, improving maintainability',
      'Built reusable UI components, reducing duplication and speeding up feature delivery',
      'Improved code quality through refactoring',
    ],
    skills: [
      'React',
      'JavaScript',
      'Node.js',
      'PostgreSQL'
    ],
  },
  {
    slug: 'it3',
    role: 'Frontend Developer',
    company: 'IT Services & Consulting Company',
    companyDescription: 'US-based client (under NDA)',
    period: '2019 — 2020',
    location: 'Remote',
    employmentType: 'Full-time / Contract',
    responsibilities: [
      'Developed and maintained a web-based reading platform, focused on usability and performance of content-heavy pages',
      'Built and maintained frontend features using React and TypeScript, improving user experience and functionality of the application',
      'Optimized rendering and interaction patterns for a smoother reading experience across devices',
      'Wrote unit tests and performed manual testing to ensure stability of core user flows',
      'Contributed to ongoing improvements of code quality and maintainability within the frontend codebase'
    ],
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
    ],
  },
  {
    slug: 'it2',
    role: 'Full Stack Developer',
    company: 'Swiss-based client (under NDA)',
    companyDescription:
      'All-in-one integrated fundraising platform for nonprofits.',
    period: '2018 — 2019',
    location: 'Remote',
    employmentType: 'Full-time / Contract',
    summary:
      'Worked on complex product features, frontend quality improvements, and system evolution in a collaborative engineering environment.',
    responsibilities: [
      'Developed and maintained a fundraising platform used for managing donation flows and user interactions',
      'Improved stability of a legacy React/TypeScript codebase and extended existing functionality',
      'Implemented UI enhancements, improving usability and overall consistency of the application',
      'Performed minor backend updates in Python to support feature delivery',
    ],
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'Python',
      'Node.js',
    ],
  },
  {
    slug: 'it1',
    role: 'Full Stack Developer',
    company: 'Eltima Software',
    companyDescription: 'A global technology development company providing premium software solutions for Windows, macOS, Linux, and Android platforms.',
    period: '2013 — 2018',
    location: 'Ukraine',
    employmentType: 'Full-time',
    responsibilities: [
      'Developed and maintained company websites and product landing pages, supporting multiple software products and marketing initiatives',
      'Built frontend functionality using JavaScript and jQuery, including development of custom plugins to extend UI behavior',
      'Contributed to backend development using PHP and MySQL, supporting data-driven features and integrations',
      'Improved maintainability of legacy code by refactoring existing implementations and introducing more structured approaches',
      'Collaborated with design and marketing teams to deliver user-facing features aligned with business goals'
    ],
    skills: [
      'React',
      'JavaScript',
      'jQuery',
      'PHP',
      'Yii',
      'MySQL',
      'Photoshop'
    ],
  },
];
