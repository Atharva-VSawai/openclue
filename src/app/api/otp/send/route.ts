import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { generateOTP } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json();

    if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    const code = generateOTP();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

    await prisma.otpRecord.create({
      data: {
        phone,
        code,
        expiresAt,
      },
    });

    // TODO: Send OTP via SMS gateway (Twilio, MSG91, etc.)
    // For development, log the OTP
    console.log(`[DEV] OTP for ${phone}: ${code}`);

    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully',
      // Remove in production:
      ...(process.env.NODE_ENV === 'development' && { devOtp: code }),
    });
  } catch (error) {
    console.error('Send OTP error:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}
