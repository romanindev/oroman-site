import Link from 'next/link';
import Container from './Container';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
];

export default function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link href="/" className="site-logo" aria-label="Go to homepage">
          oroman.dev
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="site-nav__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
