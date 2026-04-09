import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>© {currentYear} Roman. Built with Next.js.</p>
      </Container>
    </footer>
  );
}
