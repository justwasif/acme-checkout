import { NextRequest, NextResponse } from 'next/server';
import { cartTotal } from '@/src/cart';

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cartParam = searchParams.get('cart');
  const coupon = searchParams.get('coupon') || undefined;
  const items = cartParam ? JSON.parse(cartParam) : [];
  const total = cartTotal(items, coupon);
  return NextResponse.json({ total });
}
