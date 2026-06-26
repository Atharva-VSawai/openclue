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
          'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30': variant === 'primary',
          'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30': variant === 'success',
          'bg-amber-500/20 text-amber-300 border border-amber-500/30': variant === 'warning',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
