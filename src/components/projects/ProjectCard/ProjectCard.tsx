import Link from 'next/link';

import Chip from '@/design-system/components/Chip/Chip';
import Button from '@/design-system/components/Button/Button';
import type { ProjectEntry } from '@/data/projects';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: ProjectEntry;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <header className={styles.header}>
          {project.eyebrow && <p className={styles.eyebrow}>{project.eyebrow}</p>}

          <h2 className={styles.title}>{project.name}</h2>
          <p className={styles.summary}>{project.summary}</p>
        </header>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.meta}>
          {project.type && (
            <div className={styles.metaBlock}>
              <h3 className={styles.metaTitle}>Type</h3>
              <p className={styles.metaText}>{project.type}</p>
            </div>
          )}

          {project.status && (
            <div className={styles.metaBlock}>
              <h3 className={styles.metaTitle}>Status</h3>
              <p className={styles.metaText}>{project.status}</p>
            </div>
          )}
        </div>

        <div className={styles.stackBlock}>
          <h3 className={styles.metaTitle}>Stack</h3>

          <ul className={styles.stack}>
            {project.stack.map((item) => (
              <li key={item}>
                <Chip variant="secondary">{item}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.actions}>
        <Button href={`/projects/${project.slug}`}>View project</Button>
      </div>
    </article>
  );
}
