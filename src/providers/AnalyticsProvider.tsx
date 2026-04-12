'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/lib/useAnalytics';
import { publicConfig } from '@/config/public';
import { Analytics, GA4Provider } from '@/lib/analytics';

export function AnalyticsProvider() {
  useEffect(() => {
    if (!publicConfig.gaId) return;

    Analytics.init(new GA4Provider());
  }, []);

  useAnalytics();

  return null;
}
