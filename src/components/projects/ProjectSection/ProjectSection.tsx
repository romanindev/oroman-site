import styles from './ProjectSection.module.css';

type ProjectSectionProps = {
  title: string;
  description?: string;
  items?: string[];
};

export default function ProjectSection({
  title,
  description,
  items,
}: ProjectSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {description && <p className={styles.description}>{description}</p>}
      </div>

      {items && items.length > 0 && (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
