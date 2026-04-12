'use client';

import Button from '@/design-system/components/Button/Button';
import { Analytics } from '@/lib/analytics';

export function HeroActions() {
  return (
    <>
      <Button
        href="/experience"
        onClick={() =>
          Analytics.trackCta({
            ctaName: 'experience',
            location: 'hero',
            linkUrl: '/experience',
            label: 'Experience',
          })
        }
      >
        Experience
      </Button>
      <Button
        href="https://www.linkedin.com/in/onishchenko-roman"
        variant="ghost"
        onClick={() =>
          Analytics.trackCta({
            ctaName: 'linkedin',
            location: 'hero',
            linkUrl: 'https://www.linkedin.com/in/onishchenko-roman',
            label: 'Connect on LinkedIn',
          })
        }
        external
      >
        Connect on LinkedIn
      </Button>
    </>
  );
}
