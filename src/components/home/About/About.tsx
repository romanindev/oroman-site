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
            I’m a Senior Software Engineer with 12+ years of commercial experience, focused mainly on frontend
            engineering with React and TypeScript, while also working across Node.js APIs, integrations, cloud services,
            and system design.
          </p>

          <div className={styles.body}>
            <p>I also hold an MSc in Computer Science, specializing in Software Engineering.</p>
            <p>
              I’m comfortable working with legacy codebases, introducing better engineering practices step by step, and
              using modern AI-assisted tools to support codebase analysis, refactoring, documentation, and delivery.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
