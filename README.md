# Bright-Byte Website

Official website for Bright-Byte, built with Vite + React + TypeScript.

Live domain: `https://bright-byte.co`

## Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- EmailJS (contact form)

## Getting Started

Requirements:

- Node.js 18+ (Node 18 is used in CI)
- npm

Install and run:

```bash
npm install
npm run dev
```

The app starts on `http://localhost:8080`.

## Scripts

- `npm run dev`: Start local development server
- `npm run build`: Production build to `dist/`
- `npm run build:dev`: Development-mode build
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint

## Environment Variables

Set these for EmailJS contact form support:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

You can define them in `.env.local` for local development.

## Deployment

This repo is configured for GitHub Pages via:

- `.github/workflows/deploy.yml`

Deployment triggers on push to `main` or `master`.  
The workflow builds the app and publishes `dist/` with custom domain `bright-byte.co`.

## Project Structure

```text
src/
  components/      Reusable UI sections and shared components
  pages/           Route-level pages
  lib/             Content/data models (services, portfolio, etc.)
  context/         Global context providers
  hooks/           Custom React hooks
  utils/           Utilities (analytics, helpers)
  config/          Config modules (EmailJS, etc.)
```

## Notes

- SEO tags are managed via `index.html` and `src/components/SeoManager.tsx`.
- Cookie consent gates analytics initialization.
- Static assets are served from `public/`.
