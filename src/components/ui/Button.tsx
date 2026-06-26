'use client';

import { cn } from '@/lib/utils';
import { forwardRef, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "children"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'relative inline-flex items-center justify-center font-semibold rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-obsidian-950 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group',
          {
            'bg-gradient-to-r from-electric-500 to-violet-500 text-white shadow-glow-primary focus:ring-electric-500':
              variant === 'primary',
            'glass border-white/20 text-white hover:bg-white/10 hover:border-white/30 focus:ring-white/50':
              variant === 'secondary',
            'text-slate-300 hover:text-white hover:bg-white/5 focus:ring-white/30':
              variant === 'ghost',
            'bg-red-600/90 text-white hover:bg-red-500 shadow-lg shadow-red-500/25 focus:ring-red-500':
              variant === 'danger',
          },
          {
            'px-4 py-2 text-sm gap-2': size === 'sm',
            'px-6 py-3 text-base gap-2': size === 'md',
            'px-8 py-4 text-lg gap-3': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {variant === 'primary' && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer group-hover:animate-none" />
        )}
        {isLoading && (
          <svg
            className="animate-spin h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
