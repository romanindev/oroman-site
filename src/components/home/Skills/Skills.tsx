import Section from '@/design-system/components/Section/Section';
import SectionHeading from '@/design-system/components/SectionHeading/SectionHeading';
import styles from './Skills.module.css';

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'CSS Modules',
      'Tailwind CSS',
      'Redux Toolkit',
      'React Query',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
      'Mongoose',
      'Authentication',
      'API integration',
    ],
  },
  {
    title: 'Architecture & Delivery',
    items: [
      'Scalable frontend architecture',
      'Design systems',
      'Performance optimization',
      'Maintainability',
      'Testing strategy',
      'CI/CD',
      'GitOps mindset',
      'Production readiness',
    ],
  },
  {
    title: 'Tooling',
    items: [
      'GitHub Actions',
      'CircleCI',
      'Docker',
      'Vercel',
      'ESLint',
      'Prettier',
      'Husky',
      'PNPM',
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <div className={styles.skills}>
        <SectionHeading
          eyebrow="Skills"
          title="Core technologies and areas I work with"
          description="A focused view of the technologies, practices, and systems I use to build modern web products."
        />

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article key={group.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>

              <ul className={styles.list}>
                {group.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
