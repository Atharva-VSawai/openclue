'use client';

import { useAuth } from '@/hooks/useAuth';
import DownloadCard from '@/components/dashboard/DownloadCard';
import PaymentHistory from '@/components/dashboard/PaymentHistory';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function DashboardPage() {
  const { user, hasPaid } = useAuth();

  return (
    <div className="p-6 lg:p-10 max-w-5xl">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold font-heading text-white">
            Welcome{user?.name ? `, ${user.name}` : ' back'}
          </h1>
          {hasPaid && <Badge variant="success">Pro</Badge>}
        </div>
        <p className="text-slate-400">
          {hasPaid
            ? 'Your account has full access. Download the app anytime.'
            : 'Unlock full access to AppName by completing your purchase.'}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <Card variant="default" padding="md">
          <p className="text-sm text-slate-400 mb-1">Account Status</p>
          <p className="text-xl font-bold text-white">
            {hasPaid ? 'Active' : 'Free'}
          </p>
        </Card>
        <Card variant="default" padding="md">
          <p className="text-sm text-slate-400 mb-1">Plan</p>
          <p className="text-xl font-bold text-white">
            {hasPaid ? 'Pro License' : 'No License'}
          </p>
        </Card>
        <Card variant="default" padding="md">
          <p className="text-sm text-slate-400 mb-1">Email</p>
          <p className="text-xl font-bold text-white truncate">
            {user?.email || 'Not set'}
          </p>
        </Card>
      </div>

      {/* Download Section */}
      <div className="mb-10" id="downloads">
        <h2 className="text-xl font-bold font-heading text-white mb-4">Download</h2>
        <DownloadCard />
      </div>

      {/* Payment History */}
      <div id="account">
        <h2 className="text-xl font-bold font-heading text-white mb-4">Payment History</h2>
        <PaymentHistory payments={[]} />
      </div>

      {/* Mobile sidebar nav (for small screens) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex justify-around z-50">
        <a href="/dashboard" className="flex flex-col items-center gap-1 text-indigo-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-xs">Home</span>
        </a>
        <a href="/dashboard#downloads" className="flex flex-col items-center gap-1 text-slate-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs">Download</span>
        </a>
        <a href="/dashboard#account" className="flex flex-col items-center gap-1 text-slate-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-xs">Account</span>
        </a>
      </div>
    </div>
  );
}
