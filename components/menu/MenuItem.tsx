'use client';

import { FC, useContext } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MenuStateContext } from '@/components/menu/NavMenu';

interface MenuItemProps {
  label: string;
  active?: boolean;
  href: string;
  variant?: 'desktop' | 'mobile';
}

const MenuItem: FC<MenuItemProps> = ({ label, active, href, variant = 'desktop' }) => {
  const { setIsOpen } = useContext(MenuStateContext);

  if (variant === 'mobile') {
    return (
      <li>
        <Link
          href={href}
          className={cn('nav-mobile__link', active && 'nav-mobile__link--active')}
          onClick={() => setIsOpen(false)}
        >
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className={cn('nav-desktop__link', active && 'nav-desktop__link--active')}
      >
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
