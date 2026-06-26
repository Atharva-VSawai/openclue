import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glow' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  className,
  variant = 'default',
  padding = 'md',
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        {
          'bg-white/5 border-white/10 backdrop-blur-xl': variant === 'default',
          'bg-white/5 border-indigo-500/30 backdrop-blur-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 hover:border-indigo-500/50':
            variant === 'glow',
          'bg-slate-800/80 border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-1':
            variant === 'elevated',
        },
        {
          'p-4': padding === 'sm',
          'p-6 md:p-8': padding === 'md',
          'p-8 md:p-10': padding === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
