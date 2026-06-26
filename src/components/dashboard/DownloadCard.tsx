'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RazorpayCheckout from '@/components/payment/RazorpayCheckout';

export default function DownloadCard() {
  const { hasPaid } = useAuth();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch('/api/download');
      const data = await res.json();

      if (data.downloadUrl) {
        // In production, trigger actual download
        alert(`Download starting: ${data.fileName} v${data.version}`);
      }
    } catch {
      alert('Download failed. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  if (!hasPaid) {
    return (
      <Card variant="default" padding="lg">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold font-heading text-white mb-2">Unlock Full Access</h3>
          <p className="text-slate-400 mb-6">Purchase the app to download and get lifetime access.</p>
          <RazorpayCheckout />
        </div>
      </Card>
    );
  }

  return (
    <Card variant="glow" padding="lg">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold font-heading text-white">AppName Desktop</h3>
            <Badge variant="success">Purchased</Badge>
          </div>
          <p className="text-slate-400">Version 1.0.0 • Windows 10/11</p>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
      </div>

      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={handleDownload}
        isLoading={downloading}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download AppName
      </Button>
    </Card>
  );
}
