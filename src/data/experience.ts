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
    company: 'N-iX',
    companyDescription: 'International IT Services Company · Swiss & UK clients under NDA',
    period: 'Aug 2021 – Apr 2026',
    location: 'Remote',
    employmentType: 'Full-time',
    responsibilities: [
      'Improved maintainability of a large React/TypeScript codebase by aligning implementation with modern frontend practices, cleaner architectural patterns, and reusable UI patterns.',
      'Migrated multiple legacy forms and UI flows to a Figma-based design system, improving UI consistency.',
      'Introduced ESLint, Prettier, and Husky into the development workflow, improving code consistency across the team and reducing formatting-related review comments.',
      'Built and extended production frontend features using React, TypeScript, and Redux Toolkit, with a focus on maintainability, testability, and long-term support.',
      'Introduced React Query to reduce duplicated data-fetching logic, improve caching, and make query invalidation more predictable across complex frontend flows.',
      'Used Claude Code as a primary AI-assisted engineering tool to support development, refactoring, documentation, and analysis of legacy code, improving delivery speed and maintainability.',
      'Participated in frontend and backend architecture decisions, contributing to API integration patterns, reliability improvements, and maintainable feature delivery.',
      'Integrated AWS services (e.g., S3, EC2) into application development and deployment workflows.',
      'Added test coverage for critical application flows, improving regression safety and release confidence.',
    ],
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Redux Toolkit',
      'React Query',
      'AWS',
      'PostgreSQL',
      'MongoDB',
      'API Integration',
      'Claude Code',
    ],
  },
  {
    slug: 'it4',
    role: 'Senior Software Engineer',
    company: 'Software Development Hub',
    companyDescription: 'CMS and analytics platform',
    period: 'Sep 2020 – Aug 2021',
    location: 'Remote',
    employmentType: 'Full-time',
    responsibilities: [
      'Contributed to the development and maintenance of a CMS platform for data collection and analysis.',
      'Built reusable UI components that reduced duplication and helped speed up feature delivery.',
      'Simplified legacy frontend flows to reduce duplication and make feature delivery faster and safer.',
    ],
    skills: ['React', 'Node.js', 'JavaScript', 'PostgreSQL'],
  },
  {
    slug: 'it3',
    role: 'Frontend Developer',
    company: "Roll'n'Code",
    companyDescription: 'Reading platform for a US client (under NDA)',
    period: 'Nov 2019 – Oct 2020',
    location: 'Ukraine',
    employmentType: 'Full-time',
    responsibilities: [
      'Maintained and improved a web-based reading platform, focusing on usability and performance of content-heavy pages.',
      'Built and maintained frontend features using React and TypeScript, improving user experience and extending core product capabilities.',
      'Optimized rendering and interaction patterns for a smoother reading experience across devices.',
      'Added unit test coverage and manually verified core user flows for stability.',
      'Helped evolve the frontend codebase toward better maintainability through incremental refactoring and more reusable UI patterns.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'JavaScript'],
  },
  {
    slug: 'it2',
    role: 'Full Stack Developer',
    company: 'RaiseNow',
    companyDescription: 'Swiss fundraising platform',
    period: 'Jul 2018 – Oct 2019',
    location: 'Remote',
    employmentType: 'Full-time',
    summary:
      'Worked on complex product features, frontend improvements, and ongoing platform evolution in a collaborative engineering environment.',
    responsibilities: [
      'Contributed to the ongoing development of a fundraising platform, supporting donation flows and user interactions.',
      'Improved the stability of a legacy React/TypeScript codebase while extending its functionality.',
      'Implemented UI enhancements, improving usability and overall consistency of the application.',
      'Contributed backend updates in Python to support feature delivery.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'JavaScript', 'Python'],
  },
  {
    slug: 'it1',
    role: 'Full Stack Developer',
    company: 'Eltima Software',
    companyDescription: 'Software product company developing solutions for Windows, macOS, Linux, and Android.',
    period: 'Jan 2013 – Jul 2018',
    location: 'Ukraine',
    employmentType: 'Full-time',
    responsibilities: [
      'Maintained company websites and product landing pages, supporting multiple software products and marketing initiatives.',
      'Built frontend functionality using JavaScript and jQuery, including development of custom plugins to extend UI behavior.',
      'Contributed to backend development using PHP and MySQL, supporting data-driven features and integrations.',
      'Improved legacy code maintainability through refactoring and more structured code patterns.',
      'Collaborated with design and marketing teams to deliver user-facing features aligned with business goals.',
    ],
    skills: ['JavaScript', 'jQuery', 'PHP', 'Yii', 'MySQL', 'Photoshop'],
  },
];
