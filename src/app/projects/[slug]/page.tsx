import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Container from '@/components/layout/Container/Container';
import ProjectMeta from '@/components/projects/ProjectMeta/ProjectMeta';
import ProjectSection from '@/components/projects/ProjectSection/ProjectSection';
import { getProjectBySlug, projects } from '@/data/projects';
import styles from './page.module.css';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project not found | Roman',
    };
  }

  return {
    title: `${project.name} | Projects | Roman`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.hero}>
          {project.eyebrow && <p className={styles.eyebrow}>{project.eyebrow}</p>}

          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.summary}>{project.summary}</p>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.content}>
            {project.sections.map((section) => (
              <ProjectSection
                key={section.title}
                title={section.title}
                description={section.description}
                items={section.items}
              />
            ))}
          </div>

          <ProjectMeta project={project} />
        </div>
      </Container>
    </div>
  );
}
