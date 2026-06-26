import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { hasPaid: true },
    });

    if (!user?.hasPaid) {
      return NextResponse.json(
        { error: 'Payment required to download' },
        { status: 403 }
      );
    }

    // In production, return a signed download URL or stream the file
    return NextResponse.json({
      downloadUrl: '/downloads/AppName-Setup.exe',
      version: '1.0.0',
      fileName: 'AppName-Setup.exe',
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Download failed' },
      { status: 500 }
    );
  }
}
