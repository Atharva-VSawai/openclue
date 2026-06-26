import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { phone, code } = await request.json();

    if (!phone || !code) {
      return NextResponse.json(
        { error: 'Phone and OTP code are required' },
        { status: 400 }
      );
    }

    const otpRecord = await prisma.otpRecord.findFirst({
      where: {
        phone,
        code,
        verified: false,
        expiresAt: { gte: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!otpRecord) {
      return NextResponse.json(
        { error: 'Invalid or expired OTP' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'OTP verified',
    });
  } catch (error) {
    console.error('Verify OTP error:', error);
    return NextResponse.json(
      { error: 'OTP verification failed' },
      { status: 500 }
    );
  }
}
