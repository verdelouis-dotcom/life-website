# L.I.F.E. Website

The Longevity Initiative for Food & Education (L.I.F.E.) website shares Mediterranean-inspired habits, promotes workshops, and collects donations and sponsorship inquiries.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 after the dev server starts. No secret environment variables are required for the current local-first build.

## Production build

```bash
npm run build
npm start
```

## Deployment

Pushes to `main` trigger a Vercel deployment. Confirm the build is green in the Vercel dashboard, then smoke-test the live site.

## Forms & API routes

- `/api/workshop` logs workshop registrations (name, email, optional phone + dietary notes) and returns `{ ok: true }`.
- `/api/support` logs donation or sponsorship interest (name, email, optional amount) and returns `{ ok: true }`.
- `/api/contact` logs general messages (name, email, message) and returns `{ ok: true }`.

Extend these handlers with email, CRM, or payment integrations when phase two begins.
