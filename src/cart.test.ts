import { describe, it, expect } from 'vitest';
import { cartTotal } from './cart';

describe('cartTotal', () => {
  it('sums items correctly', () => {
    expect(cartTotal([{ sku: 'A', price: 10, qty: 2 }])).toBe(20);
  });

  it('applies a known coupon', () => {
    expect(cartTotal([{ sku: 'A', price: 100, qty: 1 }], 'SAVE10')).toBe(90);
  });

  // Bug not covered yet: empty cart + unknown coupon, and float math
});
