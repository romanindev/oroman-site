'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';

type ThemeMode = 'light' | 'dark' | 'system';

type UseThemeModeResult = {
  theme: ThemeMode | undefined;
  resolvedTheme: 'light' | 'dark' | undefined;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  mounted: boolean;
  isDark: boolean;
};

export default function useThemeMode(): UseThemeModeResult {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useMemo(() => {
    return () => {
      const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    };
  }, [resolvedTheme, setTheme]);

  return {
    theme: theme as ThemeMode | undefined,
    resolvedTheme: resolvedTheme as 'light' | 'dark' | undefined,
    setTheme: (value: ThemeMode) => setTheme(value),
    toggleTheme,
    mounted,
    isDark: resolvedTheme === 'dark',
  };
}
