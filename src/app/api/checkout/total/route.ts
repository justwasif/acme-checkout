import { NextRequest, NextResponse } from 'next/server';
import * as Sentry from '@sentry/nextjs';
import { cartTotal } from '@/src/cart';

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cartParam = searchParams.get('cart');
  const coupon = searchParams.get('coupon') || undefined;
  const items = cartParam ? JSON.parse(cartParam) : [];
  try {
    const total = cartTotal(items, coupon);
    return NextResponse.json({ total });
  } catch (e) {
    Sentry.captureException(e);
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
