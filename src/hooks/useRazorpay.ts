'use client';

import { useState, useCallback } from 'react';
import type { PaymentOrder, PaymentVerification } from '@/types';

export function useRazorpay() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadScript = useCallback((): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined' && window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }, []);

  const initiatePayment = useCallback(
    async (userInfo?: { name?: string; email?: string; phone?: string }) => {
      setLoading(true);
      setError(null);

      try {
        const scriptLoaded = await loadScript();
        if (!scriptLoaded) {
          throw new Error('Failed to load Razorpay SDK');
        }

        // Create order
        const res = await fetch('/api/payment/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!res.ok) {
          throw new Error('Failed to create payment order');
        }

        const order: PaymentOrder = await res.json();

        // Open Razorpay checkout
        return new Promise<boolean>((resolve) => {
          const options = {
            key: order.keyId,
            amount: order.amount,
            currency: order.currency,
            name: 'AppName',
            description: 'Desktop App - Full License',
            order_id: order.orderId,
            handler: async (response: PaymentVerification) => {
              try {
                const verifyRes = await fetch('/api/payment/verify', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(response),
                });

                if (verifyRes.ok) {
                  window.location.href = '/payment/success';
                  resolve(true);
                } else {
                  setError('Payment verification failed');
                  resolve(false);
                }
              } catch {
                setError('Payment verification failed');
                resolve(false);
              }
            },
            prefill: {
              name: userInfo?.name || 'Test User',
              email: userInfo?.email || 'test@example.com',
              contact: userInfo?.phone || '9999999999',
            },
            theme: {
              color: '#6366F1',
            },
            modal: {
              ondismiss: () => {
                setLoading(false);
                resolve(false);
              },
            },
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Payment failed');
        return false;
      } finally {
        setLoading(false);
      }
    },
    [loadScript]
  );

  return { initiatePayment, loading, error };
}
