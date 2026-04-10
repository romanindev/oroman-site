import { ExperienceItem } from '../ExperienceItem/ExperienceItem';
import styles from './ExperienceList.module.css';
import type { ExperienceEntry } from '@/data/experience';

type ExperienceListProps = {
  items: ExperienceEntry[];
};

export function ExperienceList({ items }: ExperienceListProps) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <ExperienceItem key={item.slug} item={item} />
      ))}
    </div>
  );
}
