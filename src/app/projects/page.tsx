import type { Metadata } from 'next';

import Container from '@/components/layout/Container/Container';
import SectionHeading from '@/design-system/components/SectionHeading/SectionHeading';
import ProjectCard from '@/components/projects/ProjectCard/ProjectCard';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects that reflect my engineering approach, product thinking, and interest in reliability.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.wrapper}>
          <div>
            <div className={styles.hero}>
              <SectionHeading
                eyebrow="Projects"
                title="Selected work and open-source projects"
                description="A focused view of projects that reflect how I approach engineering, architecture, and production-ready delivery."
              />
            </div>

            <div className={styles.list}>
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
