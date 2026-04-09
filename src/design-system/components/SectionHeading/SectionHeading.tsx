import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  title: string;
  description?: string;
};

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <h2 className={styles.sectionHeading__title}>{title}</h2>
      {description && (
        <p className={styles.sectionHeading__description}>{description}</p>
      )}
    </div>
  );
}
