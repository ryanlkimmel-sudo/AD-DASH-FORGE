import React from 'react';
import { cn } from '../../lib/utils';

type CardProps = React.ComponentPropsWithoutRef<'div'> & {
  variant?: 'default' | 'outline' | 'ghost' | 'hero' | 'accent';
  glow?: boolean;
};

export const Card = ({ children, className, variant = 'default', glow = false, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-sm border transition-all duration-300',
        variant === 'default' && 'bg-surface border-border',
        variant === 'outline' && 'bg-transparent border-border',
        variant === 'ghost' && 'bg-transparent border-transparent',
        variant === 'hero' && 'bg-surface border-accent/30 shadow-[0_0_30px_rgba(58,134,255,0.05)]',
        variant === 'accent' && 'bg-surface border-border border-t-accent border-t-2',
        glow && 'shadow-[0_0_20px_rgba(58,134,255,0.1)]',
        className
      )}
      {...props}
    >
      {/* Subtle grid texture for hero cards */}
      {variant === 'hero' && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:20px_20px]" />
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export const CardHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={cn('p-4 border-b border-border', className)} {...props} />
);

export const CardTitle = ({ className, ...props }: React.ComponentPropsWithoutRef<'h3'>) => (
  <h3 className={cn('font-mono text-[10px] font-bold uppercase tracking-widest text-text-secondary', className)} {...props} />
);

export const CardContent = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={cn('p-4', className)} {...props} />
);
