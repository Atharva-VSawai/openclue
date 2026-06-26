import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider',
        {
          'bg-white/10 text-slate-300': variant === 'default',
          'bg-electric-500/20 text-electric-300 border border-electric-500/30': variant === 'primary',
          'bg-blue-500/20 text-blue-300 border border-blue-500/30': variant === 'success',
          'bg-violet-500/20 text-violet-300 border border-violet-500/30': variant === 'warning',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
