# Claude Code Brief — Divine Align Healing (Part 2: Home, About, Services)

Fresh build of the first three pages for **Divine Align Healing by Izzy**, a complementary therapy and reiki practice in Clophill, Bedfordshire, UK. Calm, delicate, beautiful. Start clean and follow the design system and palette below. No need to preserve prior local work.

This is a PJMJ Studios build. Match the studio stack and quality bar.

**This pass builds Home, About and Services only.** Everything else (blog, reviews page, corporate, contact page, booking) is parked for later phases, listed at the bottom.

---

## ⚠️ READ FIRST — copy source of truth

**All real copy, services, prices, hours, contact details and the booking mechanic live in `Divine-Align-Healing-Copy.md` (in the project). Read that file first and use its wording verbatim.** Only fall back to a placeholder block where the copy doc genuinely has a gap. Don't invent copy where hers exists.

Where the copy doc and anything below disagree, the copy doc wins — it's her latest word.

---

## Business

- **Divine Align Healing by Izzy** — complementary therapist and reiki master. Treatments: **Reflexology, Massage (Swedish / holistic), Reiki.** Works out of Renume Wellness in Clophill.
- **Location: Clophill, Bedfordshire, UK** (postal town Bedford, MK45 4DD). All local SEO, address and schema target Clophill / mid-Bedfordshire. Full address, hours and socials are in the copy doc — wire the real values into the footer and `LocalBusiness` schema.
- **Main call to action across the whole site: WhatsApp booking** (see the booking model below). WhatsApp number is in the copy doc; keep it env/config, and note Izzy may want it masked, so don't print the raw number in body text — confirm with Jude first.

---

## Stack (as established)

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion for motion
- Deployed on Vercel
- next/image throughout, mobile-first, fast. Strong Core Web Vitals.

---

## Content and editing model

Jude is the sole editor. No hosted CMS. All site content lives as typed, in-repo files, populated from `Divine-Align-Healing-Copy.md`.

**Placeholder blocks:** only where the copy doc has no wording yet, render a clearly visible placeholder reading **"This is where your copy will go, Izzy"** so it's easy to find and swap.

---

## Design system

### Colour palette — UPDATED per Izzy

The base stays soft: whites, creams and greens. **Terracotta is dropped.** Izzy wants **less orange, more modern and relaxing**, and leans to **nudes, beiges and espresso browns**, with **more of the lighter sage green**.

- White `#f8f5f0` — primary background
- Cream `#f0e8dd` — secondary background, alternating sections
- Nudes / beiges — warm neutral surfaces and cards (pull tones from the imagery)
- Earthy Green `#3c4e40` — primary text, dark sections, footer
- Green `#6d8450` — secondary / mid green, accents
- Sage Green `#d1d7ab` — soft accents, highlights, brushed shapes. **Use more of this than before.**
- **Espresso Brown `<GET HEX FROM WHATSAPP>`** — replaces terracotta as the warm accent and primary CTA colour. ⚠️ Izzy sent the exact dark-brown hex on WhatsApp; set it as the CTA/accent token before building. Until then, stub it as a dark espresso brown and mark it TODO.

Set all of these as Tailwind theme tokens + CSS variables. Espresso brown is the warm punctuation (buttons, small accents), used sparingly, never a large fill. Lock all text/background pairings to WCAG AA.

### Typography (lean into "thin")

- Display / headings: elegant light-weight serif (Cormorant Garamond is a great fit), light or regular weight, large and airy.
- Body: clean humanist sans, light/regular (Inter, or a soft geometric like Jost).
- Generous line height and letter spacing, hairline weights, plenty of negative space. Nothing bold or heavy.
- The hero second line "mind, body & soul" gets a **very italic** display treatment (see hero).

### "Brushed" texture direction (central to the look)

- Hand-painted brushstroke SVG shapes as section dividers and soft backing behind headings.
- Subtle ink-wash / watercolour texture accents in sage and green, low opacity.
- Hand-drawn style underlines or highlights on a few key words.
- A very subtle grain/paper texture over cream sections.
- Buttons and cards with soft, slightly organic edges, not hard rectangles.

### Motion (Framer Motion)

Calm and slow. Gentle opacity and position reveals on scroll, soft easing, nothing bouncy. Where it fits, a reveal that feels like a brushstroke wiping content in. Motion should soothe, not perform.

### Imagery

Supplied in the project folder (plenty already in place, she's added more). Use those. Only add or source more where there's a genuine gap, mark any placeholder clearly.

---

## Booking model (important — build this properly)

Izzy explicitly does **not** want visitors put off by "enquire". Use the word **"Book"** everywhere. There is **no online booking system**; booking runs through WhatsApp:

1. **Per-treatment Book button.** Every treatment (on Home teaser and Services) has a **Book** button that opens **WhatsApp click-to-chat with a pre-filled message** naming that treatment:
   > "Hi, I'd like to book in for **[treatment name]**. Please send me your availability, thanks!"
   Build this as a reusable helper: WhatsApp deep link (`https://wa.me/<number>?text=<url-encoded message>`), treatment name injected per button, number from env/config.
2. **Free consultation area.** A warm "book a free complementary therapy consultation" section where a visitor leaves their **number** and Izzy texts them back to arrange a call about the right treatment. Simple lead-capture (name + number), delivered to Izzy. Label it as free and low-pressure.

---

## Homepage layout (steer from a site she likes)

Izzy loves **elysiumgrove.co.uk** because the homepage surfaces everything important fast — **reviews, treatments, book, why choose us, our story**. Make sure the home page gets a visitor to all of those quickly, high on the page, without hunting.

### Hero (full bleed)

- Eyebrow: Clophill, Bedfordshire, UK
- Headline over two lines: "Your local space for" on line one, line break, then "mind, body & soul" on line two in a **very italic** display treatment.
- Subhead: "Complementary therapist and reiki master"
- Services strip: Reflexology | Massage | Reiki
- Two CTAs: primary **"Book a free consultation"** (espresso brown) opening the WhatsApp consultation flow, and secondary "Learn more" linking to About.

### Then, down the page (order tuned to what she likes seeing first)

- **Short intro / five-second pitch:** use her pitch from the copy doc ("held, healed and heard…").
- **Services teaser:** the three treatments as cards (Reflexology, Massage, Reiki), each with a **Book** button (WhatsApp per-treatment flow) and a link through to the Services page.
- **Why choose us:** her three differentiators from the copy doc.
- **Reviews / testimonials:** her strongest asset, give it presence. Curated testimonials, a star rating, and a "Read all reviews on Google" button linking to `https://maps.google.com/?cid=10103428655800774869` (works now). Live rating via Places API parked to a later phase.
- **Our story teaser:** a short pull from her story with a link to About.
- **Follow along:** prominent Instagram and Facebook links (her best traction), handle and follow buttons. Real URLs in the copy doc.
- **Gallery:** heading "Gallery of work", tagline "Healing at a glimpse", a tasteful image grid from the folder.
- **Free consultation band:** a big, warm, full-width band headed **"Elevate your wellbeing"** with the free-consultation lead capture / WhatsApp CTA directly beneath it.
- Footer.

### About Izzy

- Her story, approach and credentials from the copy doc — big trust driver, give it room to breathe. Space for a portrait.
- A "Book a free consultation" CTA.

### Services

- Each treatment and package as its own row/card, grouped **Treatments** then **Packages**, with **real names, durations and prices from the copy doc**.
- Each has a short description slot (placeholder only if the copy doc has none) and a **Book** button running the WhatsApp per-treatment flow.
- Answer the common pre-booking questions here implicitly: prices are visible, booking is one tap, and the consultation route handles "what do you recommend?".

---

## Global

- **Header:** wordmark/logo, nav (Home, About, Services) and a WhatsApp Book CTA.
- **Footer:** location (Clophill, Bedfordshire), opening hours, Instagram and Facebook links, WhatsApp. Real values from the copy doc.
- WhatsApp booking wherever the CTA appears (number env/config, may be masked in display).

---

## SEO and performance

- Next.js Metadata API on every page, sensible titles/descriptions.
- Local SEO targeting complementary therapy and reiki in Clophill / mid-Bedfordshire.
- `LocalBusiness` JSON-LD with real address, geo and opening hours from the copy doc.
- `sitemap.xml` and `robots.txt`.
- Fast, accessible (AA), semantic HTML, mobile-first.

---

## Placeholders / supplied later (do not block on these)

- Espresso-brown CTA hex (from WhatsApp).
- Any body copy the copy doc doesn't yet cover, as "This is where your copy will go, Izzy" blocks.
- Confirmation on whether the WhatsApp number is displayed or masked.
- Any extra photography.
- Domain (Jude to sort).

---

## Next phases (parked, keep room in the architecture)

Full detail for these lives in the master brief (1.0):

- **Blog + local Keystatic CMS** (git-based, local mode, Jude-run, free).
- **Reviews page + live Google Places API** aggregate rating and count (env-flagged, `AggregateRating` schema). The profile link above works in the meantime.
- **Corporate wellbeing page** (B2B, workplace wellbeing).
- **Contact page + enquiry form** fallback. WhatsApp + the consultation form handle contact for now.
- **Online booking**, **Deep Tissue Massage** (new service after 16 Oct), and **gift vouchers / e-commerce.**

---

## Build approach

Fresh scaffold. Read `Divine-Align-Healing-Copy.md` first. Set up the design tokens and typography so the whole build inherits the calm, thin, brushed system. Componentise (hero, section wrapper, brushstroke divider, treatment card, gallery grid, testimonial card, why-choose-us block, social block, WhatsApp Book button helper, consultation lead-capture, closing CTA band). Use clearly-labelled placeholder blocks only where copy is genuinely missing. Commit in sensible steps.
