'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import SocialLoginButtons from '@/components/auth/SocialLoginButtons';
import OTPInput from '@/components/auth/OTPInput';

type AuthTab = 'email' | 'phone';

export default function LoginForm() {
  const router = useRouter();
  const [tab, setTab] = useState<AuthTab>('email');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Email
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Phone
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else {
        router.push('/dashboard');
      }
    } catch {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();
      if (data.success) {
        setOtpSent(true);
        if (data.devOtp) {
          console.log('Dev OTP:', data.devOtp);
        }
      } else {
        setError(data.error || 'Failed to send OTP');
      }
    } catch {
      setError('Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleOTPComplete = async (code: string) => {
    setLoading(true);
    setError('');

    try {
      const result = await signIn('otp', {
        phone,
        code,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid OTP');
      } else {
        router.push('/dashboard');
      }
    } catch {
      setError('Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Social Login */}
      <SocialLoginButtons />

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-slate-900 text-slate-400">or continue with</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white/5 rounded-xl p-1">
        {(['email', 'phone'] as AuthTab[]).map((t) => (
          <button
            key={t}
            onClick={() => { setTab(t); setError(''); setOtpSent(false); }}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
              tab === t
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t === 'email' ? 'Email' : 'Phone'}
          </button>
        ))}
      </div>

      {/* Email Form */}
      {tab === 'email' && (
        <form onSubmit={handleEmailLogin} className="space-y-4">
          <Input
            id="login-email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="login-password"
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={loading}>
            Sign In
          </Button>
        </form>
      )}

      {/* Phone Form */}
      {tab === 'phone' && (
        <div className="space-y-4">
          {!otpSent ? (
            <>
              <Input
                id="login-phone"
                label="Phone Number"
                type="tel"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                required
              />
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={loading}
                onClick={handleSendOTP}
                disabled={phone.length !== 10}
              >
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <p className="text-center text-sm text-slate-400">
                Enter the 6-digit code sent to +91 {phone}
              </p>
              <OTPInput onComplete={handleOTPComplete} />
              <button
                onClick={() => setOtpSent(false)}
                className="text-sm text-indigo-400 hover:text-indigo-300 mx-auto block"
              >
                Change number
              </button>
            </>
          )}
        </div>
      )}

      {error && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
          {error}
        </div>
      )}
    </div>
  );
}
