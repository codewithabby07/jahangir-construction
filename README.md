# Jahangir Construction Website

Production-ready website for Jahangir Construction — construction contractor in Delhi NCR.

**Dev server:** `http://localhost:3000`

---

## Quick Start

```bash
npm install
npm run dev
```

**Production build:**
```bash
npm run build
npm run start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata + schema
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design system / tokens
│   ├── sitemap.ts              # XML sitemap
│   ├── robots.ts               # robots.txt
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   ├── ongoing/page.tsx
│   │   └── completed/page.tsx
│   ├── contact/page.tsx
│   ├── quote/
│   │   ├── page.tsx
│   │   └── QuoteFormWrapper.tsx
│   └── api/
│       ├── quote/route.ts      # Form submission API (needs email integration)
│       └── health/route.ts
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    ├── MobileContactBar.tsx
    ├── PageHero.tsx
    ├── CTASection.tsx
    ├── QuoteForm.tsx
    └── RevealOnScroll.tsx
```

---

## Adding Project Images

Project images are currently placeholders. To add real photography:

1. Add images to `public/projects/`
   - Naming: `ongoing-1.jpg`, `completed-1.jpg`, etc.
2. Update `imagePath` in:
   - `src/app/projects/ongoing/page.tsx`
   - `src/app/projects/completed/page.tsx`

**Recommended specs:** 1200×800px, JPG/WebP, 80–90% quality

---

## Connecting the Quote Form

### Option 1: Resend (Recommended)
```bash
npm install resend
```
Set `RESEND_API_KEY` in `.env.local`, then uncomment the Resend block in `src/app/api/quote/route.ts`.

### Option 2: Formspree (No backend)
Replace the API fetch in `QuoteForm.tsx` with:
```ts
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", ... });
```

See `.env.example` for all required environment variables.

---

## SEO Setup

### Google Search Console
Add verification token to `src/app/layout.tsx`:
```ts
verification: { google: "your-verification-token" },
```

### Google Business Profile
Add Google Maps embed to `src/app/contact/page.tsx` once Business Profile is live.

---

## Deployment

**Vercel (Recommended):** Push to GitHub → connect to Vercel → add env vars → deploy.

---

## Brand Colors

- Black: `#0a0a0a` | Charcoal: `#1a1a1a` | Gold: `#b8973a`
- Off-white: `#f5f2ec` | Warm white: `#faf8f5`

**Fonts:** Inter (body) + Playfair Display (accents)

---

**Contact:** +91 85956 98244 | Jahangir.construction85@gmail.com
