import Container from '../Container/Container';
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__inner}>
        <p>© {currentYear} Roman. Built with Next.js.</p>
      </Container>
    </footer>
  );
}
