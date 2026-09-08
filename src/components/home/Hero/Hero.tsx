import Section from '@/design-system/components/Section/Section';
import styles from './Hero.module.css';
import { HeroActions } from '@/components/home/Hero/HeroActions';

export function Hero() {
  return (
    <Section>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <p className={styles.hero__eyebrow}>Senior Frontend / Full-Stack Engineer</p>

          <h1 className={styles.hero__title}>Building reliable, scalable systems</h1>

          <p className={styles.hero__description}>
            I specialize in React, TypeScript, and Node.js, with a strong full-stack mindset and a focus on performance,
            maintainability, and system reliability. I use AI-assisted engineering workflows for code analysis,
            refactoring, documentation, and reviews, while expanding hands-on experience with LLM, RAG, and agentic AI
            integrations.
          </p>

          <div className={styles.hero__actions}>
            <HeroActions />
          </div>
        </div>
      </div>
    </Section>
  );
}
