import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'AppName — Professional Desktop Tool | Ship Faster, Build Better',
  description:
    'Get the professional desktop app that supercharges your development workflow. Available for ₹59 one-time or free on GitHub. Secure payment, instant download, lifetime access.',
  keywords: ['desktop app', 'developer tool', 'productivity', 'windows app'],
  openGraph: {
    title: 'AppName — Professional Desktop Tool',
    description:
      'Ship Faster. Build Better. The professional desktop tool for ₹59 or free on GitHub.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppName — Professional Desktop Tool',
    description:
      'Ship Faster. Build Better. The professional desktop tool for ₹59 or free on GitHub.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
