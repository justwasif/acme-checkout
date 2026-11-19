type Item = { sku: string; price: number; qty: number };

const COUPONS: Record<string, { percent: number }> = {
  SAVE10: { percent: 10 },
  HALF: { percent: 50 },
};

export function cartTotal(items: Item[], couponCode?: string): number {
  // Planted bug 1: unknown coupon crashes with TypeError
  // Planted bug 2: money summed as floats
  let total = 0;
  for (const item of items) {
    total += item.price * item.qty;
  }
  if (couponCode) {
    const discount = COUPONS[couponCode].percent / 100;
    total = total * (1 - discount);
  }
  return total;
}
