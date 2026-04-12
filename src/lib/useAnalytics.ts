'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { publicConfig } from '@/config/public';
import { Analytics } from '@/lib/analytics';

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!publicConfig.gaId) return;

    Analytics.trackPageView(pathname);
  }, [pathname]);
}
