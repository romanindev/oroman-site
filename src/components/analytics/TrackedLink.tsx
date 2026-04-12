'use client';

import Link from 'next/link';
import { Analytics } from '@/lib/analytics';

type Props = React.ComponentProps<typeof Link> & {
  label: string;
  location: string;
};

export function TrackedLink({ label, location, onClick, ...linkProps }: Props) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }

    Analytics.track('nav_click', {
      link: label,
      location,
    });
  };

  return <Link {...linkProps} onClick={handleClick} />;
}
