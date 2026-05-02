import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/utils';

interface GlassContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'light' | 'dark';
}

export function GlassContainer({ children, variant = 'light', className, ...props }: GlassContainerProps) {
  return (
    <div 
      className={cn(
        variant === 'light' ? 'glass' : 'glass-dark',
        'rounded-3xl p-6 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
