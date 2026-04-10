import Button from '@/design-system/components/Button/Button';
import Section from '@/design-system/components/Section/Section';
import SectionHeading from '@/design-system/components/SectionHeading/SectionHeading';
import Chip from '@/design-system/components/Chip/Chip';
import styles from './FeaturedProject.module.css';

const highlights = [
  'Typed responses and automatic JSON parsing',
  'Built-in retry with configurable policies',
  'Lifecycle hooks for request control and observability',
  'Structured error handling for production scenarios',
];

const techStack = [
  'TypeScript',
  'Node.js',
  'HTTP / Fetch',
  'Tsup',
  'Vitest',
  'PNPM monorepo',
];

export function FeaturedProject() {
  return (
    <Section id="projects">
      <div className={styles.featuredProject}>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Project"
          description="A closer look at projects that reflect my engineering approach, product thinking, and interest in reliability."
        />

        <article className={styles.card}>
          <div className={styles.content}>
            <div className={styles.header}>
              <p className={styles.eyebrow}>Open Source</p>
              <h3 className={styles.title}>dfsync</h3>
              <p className={styles.subtitle}>
                A lightweight and reliable HTTP client for service-to-service
                communication in Node.js and TypeScript.
              </p>
            </div>

            <div className={styles.body}>
              <p className={styles.description}>
                Built for backend services, microservices, and internal APIs,
                dfsync focuses on predictable networking behavior, consistent
                error handling, and a clear request lifecycle. It represents the
                kind of engineering work I care about: reliability,
                maintainability, and production-ready developer experience.
              </p>

              <div className={styles.meta}>
                <div className={styles.block}>
                  <h4 className={styles.blockTitle}>Key capabilities</h4>
                  <ul className={styles.list}>
                    {highlights.map((item) => (
                      <li key={item} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.block}>
                  <h4 className={styles.blockTitle}>Stack</h4>
                  <ul className={styles.tags} aria-label="Project tech stack">
                    {techStack.map((tag) => (
                      <li key={tag}>
                        <Chip>{tag}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Button
              href="https://www.npmjs.com/package/@dfsync/client"
              external
            >
              View on NPM
            </Button>
            <Button
              href="https://dfsyncjs.github.io/#/docs"
              variant="secondary"
              external
            >
              View Docs
            </Button>

            <Button
              href="https://github.com/dfsyncjs/dfsync"
              variant="secondary"
              external
            >
              View on GitHub
            </Button>
          </div>
        </article>
      </div>
    </Section>
  );
}
