import type { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

/**
 * Edge-compatible auth config used by middleware.
 * DB-dependent logic (authorize callbacks) is in auth.ts.
 */
export default {
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    Credentials({
      id: 'credentials',
      name: 'Email & Password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      // authorize is defined in auth.ts to keep this file edge-compatible
      authorize: async () => null,
    }),
    Credentials({
      id: 'otp',
      name: 'Phone OTP',
      credentials: {
        phone: { label: 'Phone', type: 'tel' },
        code: { label: 'OTP', type: 'text' },
      },
      authorize: async () => null,
    }),
  ],
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthConfig;
