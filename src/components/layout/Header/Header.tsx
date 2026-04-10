'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Container from '../Container/Container';
import ThemeToggle from '@/design-system/components/ThemeToggle/ThemeToggle';
import styles from './Header.module.css'

const navigation = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const handleScrollToTop = () => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <Container className={styles.header__inner}>
        {isHomePage ? (
          <button
            onClick={handleScrollToTop}
            className={styles.logo}
            aria-label="Scroll to top"
            type="button"
          >
            oroman.dev (WIP)
          </button>
        ) : (
          <Link href="/" className={styles.logo}>
            oroman.dev (WIP)
          </Link>
        )}

        <div className={styles.header__actions}>
          <nav aria-label="Primary navigation">
            <ul className={styles.nav}>
              <li>
                {isHomePage ? (
                  <button
                    onClick={handleScrollToTop}
                    className={styles.nav__link}
                    type="button"
                  >
                    Home
                  </button>
                ) : (
                  <Link href="/" className={styles.nav__link}>
                    Home
                  </Link>
                )}
              </li>
              {navigation.map((item) => (
                <li key={item.href}>
                  {isHomePage ? (
                    <a href={item.href} className={styles.nav__link}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={styles.nav__link}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
