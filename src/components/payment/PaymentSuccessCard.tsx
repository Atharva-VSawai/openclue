'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function PaymentSuccessCard() {
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Confetti particles */}
      {confetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-fade-in"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#a78bfa'][i % 5],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <Card variant="glow" padding="lg" className="max-w-md w-full text-center animate-fade-in-up">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold font-heading text-white mb-3">
          Payment Successful!
        </h1>
        <p className="text-slate-400 mb-8">
          Thank you for your purchase. Your full access to AppName is now unlocked.
        </p>

        <div className="bg-white/5 rounded-xl p-4 mb-8 border border-white/10">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Amount Paid</span>
            <span className="text-2xl font-bold text-emerald-400">₹59</span>
          </div>
          <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
            <span className="text-slate-400">Product</span>
            <span className="text-white font-medium">AppName — Full License</span>
          </div>
        </div>

        <div className="space-y-3">
          <Link href="/dashboard" className="block">
            <Button variant="primary" size="lg" className="w-full">
              Go to Dashboard
            </Button>
          </Link>
          <Link href="/" className="block">
            <Button variant="ghost" size="md" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
