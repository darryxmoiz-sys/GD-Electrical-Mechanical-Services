# GD Electrical & Mechanical Services — Marketing Site

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion marketing
site for GD Electrical & Mechanical Services, a marine electrical and
mechanical engineering business based in Torpoint, UK.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

> Note: `next/font/google` fetches Fraunces, IBM Plex Sans and IBM Plex Mono
> from Google Fonts at build time, so an internet connection is required to
> build (this is normal, and works out of the box on Vercel).

## Deploy to Vercel

1. Push this project to a GitHub repo (or drag-and-drop the folder into the
   Vercel dashboard).
2. Import the repo in Vercel — no special configuration is needed, Vercel
   detects Next.js automatically.
3. Set the production domain to `gdemservices.com` once DNS is pointed at
   Vercel.

## Replacing placeholder images

All imagery in `/public/images` is a generated placeholder (branded plate
graphics in the site's palette) so the project builds and looks intentional
out of the box. Swap in real photography using the same filenames:

- `hero-bg.jpg` — homepage hero background
- `flybywire-mayflower.jpg`, `dc-solar-millbrook.jpg`,
  `anchor-capstan-looe.jpg`, `cctv-blackrose-sutton.jpg`,
  `restoration-blackdog.jpg`, `seatrials-swiftsure-polruan.jpg` — the six
  flagship project photos
- `gareth-portrait.jpg` — About page portrait
- `og-image.jpg` — social share image (1200×630)

## Wiring up the contact form

`components/ContactForm.tsx` currently simulates a submission (see the
comment inside `handleSubmit`). To go live, replace that block with a call to
a real backend — e.g. a Next.js API route (`app/api/contact/route.ts`) that
sends the enquiry via Resend, SendGrid, or another email service, or a
third-party form endpoint.

## Design system

The visual identity is documented in full in the project handoff notes
(palette: Abyss / Chart Paper / Brass / Verdigris / Safety Orange / Steel;
type: Fraunces + IBM Plex Sans + IBM Plex Mono). Tokens live in
`tailwind.config.ts`; shared content lives in `lib/data.ts` so copy changes
don't require touching component code.

## Project structure

```
app/                Route segments (home, services, projects, about, contact)
components/          Header, Footer, Hero, ProjectCard, ContactForm, etc.
lib/data.ts          Services, projects, partners, contact details
public/images/       Placeholder imagery + grain texture
```
