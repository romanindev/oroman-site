import Container from '@/components/layout/Container/Container';
import Section from '@/design-system/components/Section/Section';
import SectionHeading from '@/design-system/components/SectionHeading/SectionHeading';
import styles from './page.module.css';

export default function CopyrightPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Copyright"
          description="Information about content usage, ownership, and open-source work."
        />

        <div className={styles.content}>
          <p>© {new Date().getFullYear()} Roman Onishchenko. All rights reserved.</p>

          <p>
            All content on this website, including text, code examples, and design, is the intellectual property of
            Roman Onishchenko unless otherwise stated.
          </p>

          <p>
            You may view and reference the content for personal and educational purposes. Reproduction, redistribution,
            or commercial use is not permitted without explicit permission.
          </p>

          <p>
            This website may include links to open-source projects, including{' '}
            <a href="https://github.com/dfsyncjs/dfsync" target="_blank" rel="noreferrer">
              dfsync
            </a>
            . These projects are licensed separately under their respective open-source licenses.
          </p>

          <p>
            If you would like to reference or use any part of this work, or have questions regarding usage, please reach
            out via LinkedIn.
          </p>
        </div>
      </Container>
    </Section>
  );
}
