import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function ProjectsPage() {
  return (
    <Container className="page-section">
      <h1>Projects</h1>
      <p>Selected work, experiments, and open-source projects.</p>

      <ul className="projects-list">
        <li>
          <Link href="/projects/dfsync">dfsync</Link>
        </li>
      </ul>
    </Container>
  );
}
