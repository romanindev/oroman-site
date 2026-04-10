import styles from './ExperienceItem.module.css';
import type { ExperienceEntry } from '@/data/experience';
import Chip from '@/design-system/components/Chip/Chip';

type ExperienceItemProps = {
  item: ExperienceEntry;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className={styles.item}>
      <header className={styles.header}>
        <div className={styles.heading}>
          <p className={styles.role}>{item.role}</p>
          <h2 className={styles.company}>{item.company}</h2>

          {item.companyDescription && (
            <p className={styles.companyDescription}>{item.companyDescription}</p>
          )}
        </div>

        <div className={styles.meta}>
          <p className={styles.period}>{item.period}</p>

          {(item.location || item.employmentType) && (
            <p className={styles.metaSecondary}>
              {[item.location, item.employmentType].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>
      </header>

      <div className={styles.content}>
        {item.summary && (
          <p className={styles.summary}>{item.summary}</p>
        )}

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Responsibilities</h3>
          <ul className={styles.list}>
            {item.responsibilities.map((responsibility) => (
              <li key={responsibility} className={styles.listItem}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Technologies & Skills</h3>
          <ul className={styles.tags}>
            {item.skills.map((skill) => (
              <li key={skill}>
                <Chip>{skill}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
