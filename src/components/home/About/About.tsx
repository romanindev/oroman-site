import Section from '@/design-system/components/Section/Section';
import SectionHeading from '@/design-system/components/SectionHeading/SectionHeading';
import styles from './About.module.css';

export function About() {
  return (
    <Section id="about">
      <div className={styles.about}>
        <SectionHeading
          eyebrow="About"
          title="Engineering mindset with strong frontend depth"
          description="I work across front-end and full-stack development to build products that are easy to maintain."
        />

        <div className={styles.content}>
          <p className={styles.lead}>
            I’m a Senior Software Engineer with a frontend focus and a strong full-stack mindset. I build scalable and
            reliable web systems using React, TypeScript, and Node.js, with a strong focus on architecture and long-term
            maintainability.
          </p>

          <div className={styles.body}>
            <p>My work focuses on maintainable architecture, clean UI implementation, and reliable delivery.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
