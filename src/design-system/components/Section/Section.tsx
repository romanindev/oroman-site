import clsx from 'clsx';
import Container from '@/components/layout/Container/Container';
import styles from './Section.module.css';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      <Container className={styles.section__inner}>{children}</Container>
    </section>
  );
}
