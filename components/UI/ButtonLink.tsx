import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline' | 'dark';
}

const ButtonLink = ({ href, children, className, variant = 'primary' }: ButtonLinkProps) => {
  const variants = {
    primary: 'btn btn-primary',
    outline: 'btn btn-outline',
    dark: 'btn btn-dark',
  };

  return (
    <Link href={href} className={cn(variants[variant], className)}>
      {children}
    </Link>
  );
};

export default ButtonLink;
