'use client';

import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
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
    <motion.div
      className={cn(
        'rounded-2xl border transition-colors duration-300 transform-style-3d',
        {
          'glass border-white/5': variant === 'default',
          'glass-strong border-electric-500/30 shadow-glow-primary hover:shadow-glow-secondary hover:border-violet-500/50':
            variant === 'glow',
          'bg-obsidian-800/80 border-white/5 backdrop-blur-xl shadow-3d-elevated':
            variant === 'elevated',
        },
        {
          'p-4': padding === 'sm',
          'p-6 md:p-8': padding === 'md',
          'p-8 md:p-10': padding === 'lg',
        },
        className
      )}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
