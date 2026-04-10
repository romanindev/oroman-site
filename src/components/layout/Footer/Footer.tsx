import Link from 'next/link';
import styles from './Footer.module.css';
import Container from '@/components/layout/Container/Container';

const links = [
  {
    href: 'https://www.linkedin.com/in/onishchenko-roman',
    label: 'LinkedIn',
  },
  // {
  //   href: 'https://github.com/YOUR_GITHUB',
  //   label: 'GitHub',
  // },
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
                  <Link href={link.href} target="_blank" rel="noreferrer" className={styles.link}>
                    {link.label}
                  </Link>
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
