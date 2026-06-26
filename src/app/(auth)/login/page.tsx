import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';
import Card from '@/components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In — AppName',
  description: 'Sign in to your AppName account to access your dashboard and downloads.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-navy-900 flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-indigo-600/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-bold font-heading text-white">AppName</span>
        </Link>

        <Card variant="default" padding="lg" className="bg-slate-900/80">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold font-heading text-white mb-2">Welcome back</h1>
            <p className="text-slate-400 text-sm">Sign in to access your account</p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                Create one
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
}
