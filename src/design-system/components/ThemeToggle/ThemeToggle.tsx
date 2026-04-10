'use client';

import IconButton from '@/design-system/components/IconButton/IconButton';
import { useThemeMode } from '@/design-system/theme';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5" />
      <path d="M12 19.5V22" />
      <path d="M2 12h2.5" />
      <path d="M19.5 12H22" />
      <path d="M4.93 4.93l1.77 1.77" />
      <path d="M17.3 17.3l1.77 1.77" />
      <path d="M17.3 6.7l1.77-1.77" />
      <path d="M4.93 19.07l1.77-1.77" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20.2 15.2A8.5 8.5 0 1 1 8.8 3.8a7 7 0 1 0 11.4 11.4Z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { mounted, isDark, toggleTheme } = useThemeMode();

  const ariaLabel = mounted
    ? isDark
      ? 'Switch to light theme'
      : 'Switch to dark theme'
    : 'Toggle theme';

  return (
    <IconButton ariaLabel={ariaLabel} onClick={toggleTheme} disabled={!mounted}>
      {mounted && isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
}
