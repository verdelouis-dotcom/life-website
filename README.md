# L.I.F.E. Website

The Longevity Initiative for Food & Education (L.I.F.E.) website shares Mediterranean-inspired habits, promotes workshops, and collects donations and sponsorship inquiries.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 after the dev server starts. For local testing of emails, create a `.env.local` with:

```
RESEND_API_KEY=your_resend_key
LIFE_TO_EMAIL=verde.louis@gmail.com
LIFE_FROM_EMAIL=info@longevityinitiativeforfoodandeducation.com
```

When deploying to Vercel, add the same values in Project → Settings → Environment Variables. If `LIFE_FROM_EMAIL` is not available or the domain is unverified, the app automatically falls back to `onboarding@resend.dev`.

## Production build

```bash
npm run build
npm start
```

## Deployment

Pushes to `main` trigger a Vercel deployment. Confirm the build is green in the Vercel dashboard, then smoke-test the live site.

## Forms & API routes

- `/api/contact` receives all form submissions (workshop interest, hosts, support, homepage contact) and emails the details to `LIFE_TO_EMAIL` using Resend. It expects JSON `{ name, email, city, message, source }` and returns `{ ok: true }` on success.
