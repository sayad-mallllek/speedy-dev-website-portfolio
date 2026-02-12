# Speedy Dev Website Portfolio

Agency website built with:
- Next.js 16 (App Router)
- Tailwind CSS
- ElysiaJS backend
- Eden client for typed API access

## Pages
- `/` Home landing page inspired by clean docs-style product sites
- `/portfolio` Portfolio of featured projects
- `/submit-proposal` Multi-step proposal submission form

## Run locally

```bash
npm install
npm run dev
```

Run backend API:

```bash
npm run backend:dev
```

The frontend expects `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:3001`).
