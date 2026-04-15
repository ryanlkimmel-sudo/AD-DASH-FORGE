import React from 'react';
import { cn } from '../../lib/utils';

type BadgeProps = React.ComponentPropsWithoutRef<'span'> & {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
};

export const Badge = ({ children, className, variant = 'default', ...props }: BadgeProps) => {
  const variants = {
    default: 'bg-border text-text-secondary',
    success: 'bg-green/10 text-green border border-green/20',
    warning: 'bg-amber/10 text-amber border border-amber/20',
    danger: 'bg-red/10 text-red border border-red/20',
    info: 'bg-accent/10 text-accent border border-accent/20',
    outline: 'bg-transparent border border-border text-text-secondary',
    // Status specific variants
    'ready-to-scale': 'bg-green/20 text-green border border-green/40 shadow-[0_0_10px_rgba(46,204,113,0.2)]',
    'under-watch': 'bg-amber/20 text-amber border border-amber/40',
    'cooling-off': 'bg-red/10 text-red border border-red/20',
    'cheap-test': 'bg-accent/10 text-accent border border-accent/20',
  };

  // Map children string to specific status variant if applicable
  let activeVariant = variant;
  if (typeof children === 'string') {
    const statusMap: Record<string, keyof typeof variants> = {
      'Ready to Scale': 'ready-to-scale',
      'Under Watch': 'under-watch',
      'Cooling Off': 'cooling-off',
      'Cheap Test': 'cheap-test',
      'Active': 'success',
      'Completed': 'success',
      'Running': 'info',
      'Paused': 'outline',
    };
    if (statusMap[children]) {
      activeVariant = statusMap[children];
    }
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[2px] px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter whitespace-nowrap',
        variants[activeVariant as keyof typeof variants] || variants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
