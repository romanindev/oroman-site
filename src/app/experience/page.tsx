import type { Metadata } from 'next';

import Container from '@/components/layout/Container/Container';
import SectionHeading from '@/design-system/components/SectionHeading/SectionHeading';
import { ExperienceList } from '@/components/experience/ExperienceList';
import { experienceEntries } from '@/data/experience';
import styles from './page.module.css';


export const metadata: Metadata = {
  title: 'Experience | Roman',
  description:
    'Professional experience across frontend engineering, full-stack delivery, and production-ready web systems.',
};

export default function ExperiencePage() {
  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.hero}>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience shaped by frontend depth and full-stack delivery"
            description="A curated view of roles, responsibilities, and engineering work across product development, maintainable architecture, and production-ready systems."
          />
        </div>

        <ExperienceList items={experienceEntries} />
      </Container>
    </div>
  );
}
