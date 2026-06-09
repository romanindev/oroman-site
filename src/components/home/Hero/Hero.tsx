import Section from '@/design-system/components/Section/Section';
import styles from './Hero.module.css';
import { HeroActions } from '@/components/home/Hero/HeroActions';

export function Hero() {
  return (
    <Section>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>Senior Software Engineer</p>

          <h1 className={styles.hero__title}>Building reliable, scalable systems</h1>

          <p className={styles.hero__description}>
            I specialize in React, TypeScript, and Node.js, with a strong full-stack mindset and a focus on performance,
            maintainability, and system reliability. Experienced with AI-assisted engineering workflows using Claude
            Code, and modern agentic development practices.
          </p>

          <div className={styles.hero__actions}>
            <HeroActions />
          </div>
        </div>
      </div>
    </Section>
  );
}
