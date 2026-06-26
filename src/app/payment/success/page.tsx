import PaymentSuccessCard from '@/components/payment/PaymentSuccessCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Successful — AppName',
  description: 'Your payment was successful. Welcome to AppName Pro!',
};

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-navy-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-600/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />

      <PaymentSuccessCard />
    </main>
  );
}
