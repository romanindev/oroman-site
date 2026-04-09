import Link from 'next/link';
import Container from '../Container/Container';
import ThemeToggle from '@/design-system/components/ThemeToggle/ThemeToggle';
import styles from './Header.module.css'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.header__inner}>
        <Link href="/" className={styles.logo} aria-label="Go to homepage">
          oroman.dev
        </Link>

        <div className={styles.header__actions}>
          <nav aria-label="Primary navigation">
            <ul className={styles.nav}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.nav__link}>
                    {item.label}
                  </Link>
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
