'use client';

import { useRazorpay } from '@/hooks/useRazorpay';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';

interface RazorpayCheckoutProps {
  className?: string;
}

export default function RazorpayCheckout({ className }: RazorpayCheckoutProps) {
  const { initiatePayment, loading, error } = useRazorpay();
  const { user } = useAuth();

  const handleClick = () => {
    initiatePayment({
      name: user?.name || undefined,
      email: user?.email || undefined,
    });
  };

  return (
    <div className={className}>
      <Button
        variant="primary"
        size="lg"
        className="w-full animate-pulse-glow"
        onClick={handleClick}
        isLoading={loading}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        Pay ₹59 — Get Instant Access
      </Button>
      {error && (
        <p className="mt-2 text-sm text-red-400 text-center">{error}</p>
      )}
    </div>
  );
}
