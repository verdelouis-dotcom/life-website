# L.I.F.E. Website

The Longevity Initiative for Food & Education (L.I.F.E.) website shares Mediterranean-inspired habits, promotes workshops, and collects donations and sponsorship inquiries.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 after the dev server starts. Environment variables live in `.env.local`; copy the example below and update with your secrets:

```
RESEND_API_KEY=...
LIFE_TO_EMAIL=...
LIFE_FROM_EMAIL=...
STRIPE_SECRET_KEY=...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Deployment

Pushes to `main` trigger a Vercel deployment. Confirm the build is green in the Vercel dashboard, then smoke-test the live site.

## Testing donation and sponsor flows

- `/api/donate` creates a Stripe Checkout session; set `STRIPE_SECRET_KEY` before testing.
- `/api/sponsor`, `/api/workshop`, `/api/contact`, and `/api/subscribe` send email through Resend; set `RESEND_API_KEY`, `LIFE_TO_EMAIL`, and `LIFE_FROM_EMAIL` for live messages.
