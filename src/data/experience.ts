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
    role: 'Senior Full-Stack Engineer',
    company: 'N-iX',
    companyDescription: 'International IT Services Company · Swiss and UK clients (under NDA)',
    period: 'Aug 2021 – Apr 2026',
    location: 'Poland',
    employmentType: 'Remote / Full-time',
    responsibilities: [
      'Led the modernization of a large React and TypeScript codebase, refactoring legacy components, improving frontend architecture, extending Redux Toolkit state management, and introducing reusable patterns.',
      'Owned end-to-end delivery of product features, from requirements analysis and technical design through frontend and backend implementation, testing, release coordination, and production validation.',
      'Drove technical and architectural decisions across frontend and backend, defining API integration patterns, data flows, error-handling strategies, and scalable solutions for business-critical functionality.',
      'Introduced React Query and improved caching/query invalidation strategies, reducing duplicate API requests by ~30%.',
      'Introduced ESLint, Prettier, and Husky across a codebase used by a ~20-engineer team, standardizing code quality checks and improving developer experience.',
      'Expanded automated test coverage across 15+ critical business flows, improving release confidence and reducing the risk of production regressions.',
      'Owned the complete onboarding of a new brand onto the platform, covering UI adaptation, backend service changes, database migrations, automated and E2E testing, release preparation, and production rollout.',
      'Applied AI-assisted engineering workflows with Claude Code for legacy code analysis, complex refactoring, technical documentation, and code review, accelerating investigation and implementation while maintaining code quality.',
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
    ],
  },
  {
    slug: 'it4',
    role: 'Senior Frontend Engineer',
    company: 'Software Development Hub (SDH)',
    period: 'Sep 2020 – Aug 2021',
    location: 'Ukraine',
    employmentType: 'Remote / Full-time',
    responsibilities: [
      'Led frontend development for a CMS platform used for data collection and analysis, coordinating feature delivery and technical decisions within a small engineering team.',
      'Designed and built reusable UI components, reducing code duplication and improving development efficiency across multiple application modules.',
      'Refactored legacy frontend flows, simplifying implementation and improving maintainability of the codebase.',
      'Collaborated closely with backend engineers, QA, and stakeholders to deliver features and validate critical business workflows.',
    ],
    skills: ['React', 'Node.js', 'JavaScript', 'PostgreSQL'],
  },
  {
    slug: 'it3',
    role: 'Frontend Developer',
    company: "Roll'n'Code",
    companyDescription: 'IT Services Company · US-based client (under NDA)',
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
    companyDescription: 'Digital fundraising and payment platform for nonprofits',
    period: 'Jul 2018 – Oct 2019',
    location: 'Ukraine',
    employmentType: 'Remote / Full-time',
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
