import AuthGuard from '@/components/auth/AuthGuard';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard — AppName',
  description: 'Manage your AppName account, downloads, and payment history.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-navy-900 flex">
        <DashboardSidebar />
        <main className="flex-1 min-h-screen">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
