import clsx from 'clsx';
import Section from '@/design-system/components/Section/Section';
import SectionHeading from '@/design-system/components/SectionHeading/SectionHeading';
import styles from './Skills.module.css';

const skillsExploring = {
  title: 'Currently expanding my stack',
  items: ['NestJS', 'Kubernetes', 'Terraform'],
};

const skillGroups = [
  {
    title: 'Engineering',
    description: 'Designing scalable systems and building reliable service-to-service communication.',
    items: [
      'System design',
      'API design (REST, HTTP)',
      'Service-to-service communication',
      'Error handling & reliability',
      'Performance optimization',
      'Clean architecture',
      'AI-assisted development workflows',
    ],
  },
  {
    title: 'Frontend',
    description: 'Building modern interfaces with strong focus on architecture and user experience.',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Redux Toolkit',
      'React Query',
      'Jest, Vitest',
      'Playwright',
      'MUI, Styled Components',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    description: 'Developing backend services with attention to data flow and system stability.',
    items: [
      'Node.js',
      'API design (REST)',
      'Express',
      'Authentication & authorization',
      'PostgreSQL',
      'MongoDB',
      'GraphQL',
      'Python',
    ],
  },
  {
    title: 'Infrastructure',
    description: 'Using cloud and delivery tools to support scalable systems.',
    items: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'CI/CD', 'Code quality (ESLint, Prettier, Husky)'],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <div className={styles.skills}>
        <SectionHeading
          eyebrow="Expertise"
          title="Core technologies and engineering areas"
          description="A focused view of the technologies, practices, and systems I use to build modern web products."
        />

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article key={group.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{group.title}</h3>
                <p className={styles.cardDescription}>{group.description}</p>
              </div>

              <ul className={styles.list}>
                {group.items.map((item, index) => (
                  <li key={item} className={clsx(styles.listItem, index < 2 && styles.listItemStrong)}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <article className={styles.exploringCard}>
          <div>
            <h3 className={styles.exploringTitle}>{skillsExploring.title}</h3>
            <p className={styles.exploringDescription}>
              Technologies I’m currently integrating into my full-stack workflow.
            </p>
          </div>

          <ul className={styles.exploringList}>
            {skillsExploring.items.map((item) => (
              <li key={item} className={styles.exploringItem}>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
