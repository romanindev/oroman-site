'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Image src="/logo.png" alt="logo" width={52} height={52} priority />;
  }

  const src = resolvedTheme === 'dark' ? '/logo-dark.png' : '/logo.png';

  return <Image src={src} alt="logo" width={52} height={52} priority />;
}
