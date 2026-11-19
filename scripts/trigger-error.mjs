// Hit the checkout endpoint with a failing input so the error reaches Sentry
const BASE = process.env.DEMO_BASE || 'http://localhost:3000';

async function trigger() {
  // Empty cart + unknown coupon => TypeError: Cannot read properties of undefined (reading 'percent')
  const url = `${BASE}/api/checkout/total?cart=${encodeURIComponent(JSON.stringify([]))}&coupon=BOGUS`;
  console.log('Triggering error:', url);
  try {
    const res = await fetch(url);
    const body = await res.json().catch(() => ({}));
    console.log(res.status, body);
  } catch (e) {
    console.error('Network error (expected if server is down):', e.message);
    process.exit(1);
  }
}

trigger();
