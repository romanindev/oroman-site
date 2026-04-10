import Button from '@/design-system/components/Button/Button';
import Section from '@/design-system/components/Section/Section';
import SectionHeading from '@/design-system/components/SectionHeading/SectionHeading';
import Chip from '@/design-system/components/Chip/Chip';
import styles from './FeaturedProject.module.css';

const highlights = [
  'Built for microservices, internal APIs, worker processes, and external integrations',
  'A clean, predictable HTTP client setup without repeating the same boilerplate in every project',
  'Built-in support for bearer tokens, API keys, and custom auth flows',
  'Built-in retry policies with Retry-After support and full retry visibility',
  'Lifecycle hooks including beforeRequest, afterResponse, onError, and onRetry',
  'Built-in request visibility with timing, retry metadata, and lifecycle insights',
  'Every request follows a clear, controllable lifecycle with full visibility into execution and retries',
];

const techStack = [
  'TypeScript',
  'Node.js',
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
                Reliable toolkit for service-to-service communication. Built for backend services, microservices, and internal APIs.
              </p>
            </div>

            <div className={styles.body}>
              <p className={styles.description}>
                The first package, <strong>@dfsync/client</strong>, is a lightweight HTTP client built for reliable communication with retries, hooks, and built-in request observability in Node.js.
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
