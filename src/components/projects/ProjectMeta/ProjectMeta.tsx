import Chip from '@/design-system/components/Chip/Chip';
import Button from '@/design-system/components/Button/Button';
import type { ProjectEntry } from '@/data/projects';
import styles from './ProjectMeta.module.css';

type ProjectMetaProps = {
  project: ProjectEntry;
};

export default function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <aside className={styles.meta}>
      <div className={styles.group}>
        <h2 className={styles.title}>Project details</h2>

        <dl className={styles.details}>
          {project.type && (
            <div className={styles.detailItem}>
              <dt className={styles.label}>Type</dt>
              <dd className={styles.value}>{project.type}</dd>
            </div>
          )}

          {project.status && (
            <div className={styles.detailItem}>
              <dt className={styles.label}>Status</dt>
              <dd className={styles.value}>{project.status}</dd>
            </div>
          )}
        </dl>
      </div>

      <div className={styles.group}>
        <h2 className={styles.title}>Stack</h2>

        <ul className={styles.stack}>
          {project.stack.map((item) => (
            <li key={item}>
              <Chip variant="secondary">{item}</Chip>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.group}>
        <h2 className={styles.title}>Links</h2>

        <div className={styles.actions}>
          {project.links.map((link) => (
            <Button key={link.href} href={link.href} external>
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
}
