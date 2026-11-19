# acme-checkout

Demo app with a planted bug for the Error to Fix pipeline.

## Endpoints

- `GET /api/checkout/total?cart=[{sku,price,qty}]&coupon=CODE`

## Trigger the error

```bash
npm run trigger-error
```

This hits the endpoint with an empty cart and unknown coupon, causing:

```
TypeError: Cannot read properties of undefined (reading 'percent')
```

## Tests

```bash
npm test
```

