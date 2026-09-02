import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
}

const Container = ({ children, className, as: Tag = 'div' }: ContainerProps) => {
  return <Tag className={cn('container', className)}>{children}</Tag>;
};

export default Container;
