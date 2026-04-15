import React from 'react';
import { cn } from '../../lib/utils';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
};

export const Button = ({ children, className, variant = 'primary', size = 'md', ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-accent text-white hover:opacity-90 shadow-[0_0_10px_rgba(58,134,255,0.2)]',
    secondary: 'bg-surface-light text-text-primary hover:bg-border',
    outline: 'bg-transparent border border-border text-text-secondary hover:text-text-primary hover:bg-surface',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface',
    danger: 'bg-red/10 text-red border border-red/20 hover:bg-red/20',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-[11px] uppercase tracking-wider font-bold',
    md: 'px-4 py-2 text-xs uppercase tracking-wider font-bold',
    lg: 'px-6 py-3 text-sm uppercase tracking-wider font-bold',
    icon: 'p-2',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-[2px] transition-all active:scale-[0.98] disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
