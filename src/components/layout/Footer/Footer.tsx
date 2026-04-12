import Link from 'next/link';
import Container from '@/components/layout/Container/Container';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import styles from './Footer.module.css';

const links = [
  {
    href: 'https://www.linkedin.com/in/onishchenko-roman',
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/boredexill',
    label: 'X',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.copy}>© {year} Roman Onishchenko. All rights reserved.</p>

          <nav className={styles.nav} aria-label="Footer">
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.href}>
                  <TrackedLink
                    href={link.href}
                    label={link.label}
                    location="footer"
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </TrackedLink>
                </li>
              ))}

              <li>
                <Link href="/copyright" className={styles.link}>
                  Copyright
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
