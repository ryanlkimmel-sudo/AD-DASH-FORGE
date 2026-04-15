import React from 'react';
import { cn } from '../../lib/utils';

interface SignalIndicatorProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SignalIndicator = ({ value, size = 'md', className }: SignalIndicatorProps) => {
  const getColor = (val: number) => {
    if (val >= 80) return 'bg-green';
    if (val >= 60) return 'bg-accent';
    if (val >= 40) return 'bg-amber';
    return 'bg-red';
  };

  const getGlow = (val: number) => {
    if (val >= 80) return 'shadow-[0_0_10px_theme(colors.green)]';
    if (val >= 60) return 'shadow-[0_0_10px_theme(colors.accent)]';
    if (val >= 40) return 'shadow-[0_0_10px_theme(colors.amber)]';
    return 'shadow-[0_0_10px_theme(colors.red)]';
  };

  const sizes = {
    sm: 'h-1 w-12',
    md: 'h-1.5 w-20',
    lg: 'h-2 w-32',
  };

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn('bg-border rounded-full overflow-hidden relative', sizes[size])}>
        <div 
          className={cn(
            'h-full rounded-full transition-all duration-1000 ease-out',
            getColor(value),
            value >= 60 && getGlow(value)
          )}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className={cn(
        'font-mono font-bold tracking-tighter',
        size === 'sm' ? 'text-[10px]' : 'text-xs',
        value >= 80 ? 'text-green' : value >= 60 ? 'text-accent' : value >= 40 ? 'text-amber' : 'text-red'
      )}>
        {value.toFixed(0)}%
      </span>
    </div>
  );
};
