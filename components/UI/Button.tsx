import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', variant = 'primary', ...props }, ref) => {
    const variants = {
      primary: 'btn btn-primary',
      outline: 'btn btn-outline',
      dark: 'btn btn-dark',
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
