# LIFE Website

The Longevity Initiative for Food & Education (LIFE) website shares fresh-ingredient cooking habits, promotes tables, and collects donations and sponsorship inquiries.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 after the dev server starts. For local testing of contact and assessment-report emails, create a `.env.local` with:

```
GMAIL_USER=your_google_workspace_email
GMAIL_APP_PASSWORD=your_google_app_password
LIFE_TO_EMAIL=verde.louis@gmail.com
NEXT_PUBLIC_DONATION_LINK=https://donorbox.org/your-campaign-slug
```

When deploying to Vercel, add the same values in Project → Settings → Environment Variables.

## Production build

```bash
npm run build
npm start
```

## Deployment

Pushes to `main` trigger a Vercel deployment. Confirm the build is green in the Vercel dashboard, then smoke-test the live site.

## Forms & API routes

- `/api/contact` receives all form submissions (table interest, hosts, support, homepage contact) and emails the details to `LIFE_TO_EMAIL` using Google Workspace SMTP. It expects JSON `{ name, email, city, message, source }` and returns `{ ok: true }` on success.
- `/api/assessment-report` emails a completed longevity assessment directly to the participant using Google Workspace SMTP. It does not subscribe the participant to a mailing list.
