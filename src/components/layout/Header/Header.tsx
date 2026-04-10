'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Container from '../Container/Container';
import ThemeToggle from '@/design-system/components/ThemeToggle/ThemeToggle';
import IconButton from '@/design-system/components/IconButton/IconButton';
import styles from './Header.module.css';

const navigation = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [openMenuPath, setOpenMenuPath] = useState<string | null>(null);
  const isMenuOpen = openMenuPath === pathname;

  const toggleMenu = () => {
    setOpenMenuPath((current) => (current === pathname ? null : pathname));
  };

  const closeMenu = () => {
    setOpenMenuPath(null);
  };

  const handleScrollToTop = () => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const Logo = <Image className={styles.logo} src="/logo.png" alt="logo" width={52} height={52} />;

  const renderNavLink = (item: { href: string; label: string }, className: string) => {
    const isHomeAnchor = item.href.startsWith('/#');

    if (isHomeAnchor && isHomePage) {
      return (
        <a href={item.href.replace('/', '')} className={className} onClick={closeMenu}>
          {item.label}
        </a>
      );
    }

    return (
      <Link href={item.href} className={className} onClick={closeMenu}>
        {item.label}
      </Link>
    );
  };

  return (
    <header className={styles.header}>
      <Container className={styles.header__inner}>
        {isHomePage ? (
          <button type="button" onClick={handleScrollToTop} className={styles.logo} aria-label="Scroll to top">
            {Logo}
          </button>
        ) : (
          <Link href="/" className={styles.logo}>
            {Logo}
          </Link>
        )}

        <div className={styles.controls}>
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            <ul className={styles.desktopNavList}>
              <li>
                {isHomePage ? (
                  <button type="button" onClick={handleScrollToTop} className={styles.desktopNavLink}>
                    Home
                  </button>
                ) : (
                  <Link href="/" className={styles.desktopNavLink}>
                    Home
                  </Link>
                )}
              </li>

              {navigation.map((item) => (
                <li key={item.href}>{renderNavLink(item, styles.desktopNavLink)}</li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />

          <IconButton
            className={styles.mobileMenuButton}
            ariaLabel={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            ariaExpanded={isMenuOpen}
            ariaControls="mobile-navigation"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </Container>

      <div id="mobile-navigation" className={`${styles.mobilePanel} ${isMenuOpen ? styles['mobilePanel--open'] : ''}`}>
        <Container>
          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileNavList}>
              <li>
                {isHomePage ? (
                  <button type="button" onClick={handleScrollToTop} className={styles.mobileNavLink}>
                    Home
                  </button>
                ) : (
                  <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>
                    Home
                  </Link>
                )}
              </li>

              {navigation.map((item) => (
                <li key={item.href}>{renderNavLink(item, styles.mobileNavLink)}</li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
}
