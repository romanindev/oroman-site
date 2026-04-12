'use client';

import { REOPEN_EVENT } from '@/components/analytics/CookieBanner/CookieBanner';

type CookiePreferencesButtonProps = {
  className?: string;
};

export function CookiePreferencesButton({ className }: CookiePreferencesButtonProps) {
  function handleClick() {
    window.dispatchEvent(new CustomEvent(REOPEN_EVENT));
  }

  return (
    <button type="button" className={className} onClick={handleClick}>
      Cookies
    </button>
  );
}
