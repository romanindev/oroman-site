'use client';

import { useReducer, useEffect, useSyncExternalStore } from 'react';
import { publicConfig } from '@/config/public';
import { Analytics } from '@/lib/analytics';
import Button from '@/design-system/components/Button/Button';
import Container from '@/components/layout/Container/Container';
import styles from './CookieBanner.module.css';

export const CONSENT_KEY = 'ga-consent';
export const REOPEN_EVENT = 'cookie-consent:reopen';

function getSnapshot() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return 'unavailable';
  }
}

// Server-side: return non-null so the banner never renders during SSR
function getServerSnapshot() {
  return 'server';
}

export function CookieBanner() {
  // Used only to trigger a re-render so useSyncExternalStore re-reads localStorage
  const [, forceReread] = useReducer((c: number) => c + 1, 0);
  const stored = useSyncExternalStore(() => () => {}, getSnapshot, getServerSnapshot);

  const visible = stored === null && !!publicConfig.gaId;

  useEffect(() => {
    function handleReopen() {
      try {
        localStorage.removeItem(CONSENT_KEY);
      } catch {
        // ignore
      }
      forceReread();
    }
    window.addEventListener(REOPEN_EVENT, handleReopen);
    return () => window.removeEventListener(REOPEN_EVENT, handleReopen);
  }, [forceReread]);

  function handleChoice(granted: boolean) {
    try {
      localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
    } catch {
      // ignore
    }
    Analytics.updateConsent(granted);
    forceReread();
  }

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <Container className={styles.inner}>
        <p className={styles.text}>
          This site uses analytics cookies to understand how visitors use the site. No personal data is collected.
        </p>
        <div className={styles.actions}>
          <Button variant="ghost" onClick={() => handleChoice(false)}>
            Decline
          </Button>
          <Button variant="primary" onClick={() => handleChoice(true)}>
            Accept
          </Button>
        </div>
      </Container>
    </div>
  );
}
