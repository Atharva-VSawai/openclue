import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { getRazorpay } from '@/lib/razorpay';
import prisma from '@/lib/prisma';

export async function POST() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const options = {
      amount: 5900, // Rs 59 in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        userId: session.user.id,
      },
    };

    const order = await getRazorpay().orders.create(options);

    await prisma.payment.create({
      data: {
        userId: session.user.id,
        razorpayOrderId: order.id,
        amount: 5900,
        currency: 'INR',
        status: 'PENDING',
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: 5900,
      currency: 'INR',
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
