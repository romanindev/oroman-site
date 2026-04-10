import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export default function SectionHeading({
  title,
  eyebrow,
  description,
}: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      {eyebrow && <p className={styles.sectionHeading__eyebrow}>{eyebrow}</p>}

      <h2 className={styles.sectionHeading__title}>{title}</h2>
      {description && (
        <p className={styles.sectionHeading__description}>{description}</p>
      )}
    </div>
  );
}
