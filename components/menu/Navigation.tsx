'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import MenuItem from '@/components/menu/MenuItem';
import { navigation } from '@/lib/site-content';

interface NavigationProps {
  variant?: 'desktop' | 'mobile';
}

const Navigation = ({ variant = 'desktop' }: NavigationProps) => {
  const pathname = usePathname();
  const routes = useMemo(
    () =>
      navigation.map((item) => ({
        ...item,
        active: pathname === item.href,
      })),
    [pathname]
  );

  return (
    <ul className={variant === 'mobile' ? 'nav-mobile' : 'nav-desktop'}>
      {routes.map((item) => (
        <MenuItem key={item.label} {...item} variant={variant} />
      ))}
    </ul>
  );
};

export default Navigation;
