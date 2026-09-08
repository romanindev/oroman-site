export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectSectionContent = {
  title: string;
  description?: string;
  items?: string[];
};

export type ProjectEntry = {
  slug: string;
  name: string;
  eyebrow?: string;
  summary: string;
  description: string;
  status?: string;
  type?: string;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  sections: ProjectSectionContent[];
};

export const projects: ProjectEntry[] = [
  {
    slug: 'dfsync',
    name: 'dfsync',
    eyebrow: 'Open Source',
    summary:
      'A reliable toolkit for service-to-service communication, designed for backend services, microservices, and internal APIs.',
    description:
      'The first package, @dfsync/client, is a lightweight HTTP client for Node.js, designed for reliable communication with retries, hooks, and built-in request observability.',
    status: 'Active',
    type: 'Open-source toolkit',
    stack: ['TypeScript', 'Node.js', 'HTTP'],
    featured: true,
    links: [
      {
        label: 'View on npm',
        href: 'https://www.npmjs.com/package/@dfsync/client',
      },
      {
        label: 'View Docs',
        href: 'https://dfsyncjs.github.io/#docs',
      },
      {
        label: 'View on GitHub',
        href: 'https://github.com/dfsyncjs/dfsync',
      },
    ],
    sections: [
      {
        title: 'Overview',
        description:
          'dfsync is an open-source toolkit designed to make service-to-service communication more predictable, reusable, and observable in production systems.',
      },
      {
        title: 'Key capabilities',
        items: [
          'Built for microservices, internal APIs, worker processes, and external integrations.',
          'A clean, predictable HTTP client setup without repeating the same boilerplate in every project.',
          'Built-in support for bearer tokens, API keys, and custom auth flows.',
          'Built-in retry policies with Retry-After support and full retry visibility.',
          'Lifecycle hooks including beforeRequest, afterResponse, onError, and onRetry.',
          'Built-in request visibility with timing, retry metadata, and lifecycle insights.',
          'Every request follows a clear, controllable lifecycle with full visibility into execution and retries.',
        ],
      },
      {
        title: 'Why I built it',
        items: [
          'To reduce repeated HTTP client setup across Node.js services.',
          'To make retries, timeouts, hooks, and authentication strategies easier to standardize.',
          'To improve request lifecycle visibility in production-oriented backend systems.',
        ],
      },
      {
        title: 'Current focus',
        items: [
          'Strengthening reliability and integration safety.',
          'Improving developer experience through clean APIs and better defaults.',
          'Expanding documentation and project positioning around service-to-service communication.',
        ],
      },
    ],
  },
  {
    slug: 'aiassistant',
    name: 'AI Debug Assistant',
    eyebrow: 'AI / Full-Stack Project',
    summary: 'A pet project focused on exploring AI-assisted debugging workflows for developers.',
    description:
      'The project uses a React and TypeScript frontend with a NestJS backend and OpenAI structured outputs. It is focused on turning error reports, stack traces, and debugging context into structured suggestions for developers.',
    status: 'Active',
    type: 'Learning / Pet project',
    stack: ['React', 'TypeScript', 'NestJS', 'OpenAI API', 'Zod', 'Docker'],
    featured: false,
    links: [
      {
        label: 'View on GitHub',
        href: 'https://github.com/romanindev/ai-debug-assistant',
      },
    ],
    sections: [
      {
        title: 'What it demonstrates',
        items: [
          'Practical AI/LLM integration in a developer tool',
          'React + TypeScript frontend architecture',
          'NestJS backend API design',
          'Structured outputs and schema validation',
          'Product thinking around developer experience',
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
