# Divine Align Healing

Marketing site for Divine Align Healing — Izzy's reiki practice in Bedford.
Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

**Iteration 1 scope:** Home, Header, Footer, About, and the Blog (listing +
post template). Services, Corporate wellbeing, Reviews and Contact pages
follow in a later iteration — see `docs/Izzy-WebsiteBrief and Build.rtf` for
the full brief.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Editing content

Jude is the sole editor. There's no hosted CMS:

- **Everything except the blog** — business info, services, testimonials,
  page copy — lives as typed files under `src/content/`. Edit directly and
  redeploy.
- **The blog** is edited through a local admin UI at
  [`/keystatic`](http://localhost:3000/keystatic) (only available when
  running `npm run dev` locally). Posts save as real `.mdx` files into
  `content/blog/`, committed to git and deployed by Vercel like any other
  change.

## Placeholder content

Every page currently ships with placeholder copy and a couple of stand-in
blog posts, clearly flagged with `PLACEHOLDER COPY` comments in
`src/content/**` and the sample posts in `content/blog/`. Swap the strings,
the components don't need to change.

## Google reviews

Curated testimonials live in `src/content/testimonials.ts`. The live
aggregate rating (`src/lib/google-reviews.ts`) is wired but disabled —
flip `siteConfig.googlePlacesEnabled` on and set `GOOGLE_MAPS_API_KEY` /
`GOOGLE_PLACE_ID` once those are available.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- Framer Motion for scroll reveals
- Keystatic (local mode) for the blog only
- `next-mdx-remote` for rendering blog post MDX
- Deployed on Vercel
