'use client';

import { useThemeMode } from '@/design-system/theme';
import styles from './ThemeToggle.module.css'

export default function ThemeToggle() {
  const { mounted, isDark, toggleTheme } = useThemeMode();

  if (!mounted) {
    return (
      <button
        type="button"
        className={styles.toggle}
        aria-label="Toggle theme"
        disabled
      >
        Theme
      </button>
    );
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={toggleTheme}
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
