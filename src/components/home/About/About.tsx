import Section from '@/design-system/components/Section/Section';
import SectionHeading from '@/design-system/components/SectionHeading/SectionHeading';
import styles from './About.module.css';

export function About() {
  return (
    <Section id="about">
      <div className={styles.about}>
        <SectionHeading
          title="About"
          description="A concise introduction to how I think, build, and approach engineering."
        />

        <div className={styles.content}>
          <p className={styles.lead}>
            I’m a Senior Software Engineer with a frontend focus and a strong
            full-stack mindset. I build scalable web products with React,
            TypeScript, Node.js, and modern engineering practices.
          </p>

          <div className={styles.body}>
            <p>
              My work is centered around maintainable architecture, clean UI
              implementation, and reliable delivery. I care about systems that
              are clear to evolve, easy to reason about, and strong in
              production.
            </p>

            <p>
              This portfolio is not just a resume. It is a curated space for
              selected work, technical direction, and projects that reflect an
              engineering-first approach.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
