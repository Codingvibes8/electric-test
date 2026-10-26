# VoltCraft Electrical — Guildford landing page

A conversion-focused, SEO-optimised landing page for a fictional Guildford electrician. Built as a production-ready Next.js App Router project with reusable components, a working quote form, local schema markup, and a premium responsive design.

**Live preview:** run `npm run dev` and open [http://localhost:3000](http://localhost:3000).

---

## Tech stack

| Tool | Version |
| --- | --- |
| Next.js (App Router, Turbopack) | 16.4.3 |
| React | 19.3.1 |
| TypeScript | 5.x |
| Tailwind CSS | 4.3.3 |
| Motion (animation) | 14.x |
| Phosphor Icons | 2.x |
| Geist Sans / Mono (self-hosted) | 1.8.2 |

No UI component library. The design system lives in `src/app/globals.css` and is composed from local components.

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Production build
npm run build
npm run start
```

The page is statically prerendered. No database is required to preview it.

### Optional email delivery for the quote form

The form works in demo mode without any environment variables: submissions validate, show a success state, and log a warning in the server console. To deliver real leads, add a [Resend](https://resend.com) API key.

Create `.env.local` in the project root:

```bash
RESEND_API_KEY=re_xxxxxxxxx
QUOTE_TO_EMAIL=hello@voltcraftelectrical.co.uk
QUOTE_FROM_EMAIL=VoltCraft Website <onboarding@resend.dev>
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | No | Enables real email delivery. Without it, the form accepts submissions in demo mode. |
| `QUOTE_TO_EMAIL` | No | Inbox that receives quote requests. Defaults to the address in `src/data/site.ts`. |
| `QUOTE_FROM_EMAIL` | No | Verified Resend sender. Use your own verified domain in production. |

For production, verify a sending domain in Resend and update `QUOTE_FROM_EMAIL`. The form validates name, phone, UK postcode, service, and consent, and includes a honeypot field for basic bot filtering.

---

## Project structure

```text
src/
├── app/
│   ├── actions/
│   │   └── sendQuote.ts          # Server action: validation + Resend delivery
│   ├── globals.css               # Tailwind v4 theme, tokens, utilities, motion
│   ├── layout.tsx                # Fonts, metadata, viewport, nav/footer shell
│   ├── page.tsx                  # Landing page composition + JSON-LD
│   ├── icon.svg                  # Favicon
│   ├── manifest.ts               # Web app manifest
│   ├── robots.ts                 # Robots.txt
│   └── sitemap.ts                # Sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky nav, announcement bar, mobile menu
│   │   ├── Footer.tsx            # Contact, map embed, Google Business card
│   │   └── MobileCallBar.tsx     # Sticky mobile call/quote bar
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustBar.tsx
│   │   ├── QuoteSection.tsx
│   │   ├── Services.tsx
│   │   ├── Showcase.tsx
│   │   ├── Benefits.tsx
│   │   ├── Gallery.tsx
│   │   ├── Coverage.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── Faq.tsx
│   │   └── FinalCta.tsx
│   └── ui/
│       ├── Accordion.tsx
│       ├── BeforeAfter.tsx
│       ├── Container.tsx
│       ├── CountUp.tsx
│       ├── Logo.tsx
│       ├── PostcodeCheck.tsx
│       ├── QuoteForm.tsx
│       ├── Reveal.tsx
│       ├── SectionHeader.tsx
│       └── StarRating.tsx
├── data/
│   └── site.ts                   # Brand, services, areas, reviews, pricing, FAQs
└── lib/
    ├── quote.ts                  # Shared quote form types
    ├── schema.ts                 # JSON-LD graph
    └── utils.ts
```

---

## Editing the site

Almost all visible content is centralised in **`src/data/site.ts`**:

- **Brand details:** name, phone, email, address, hours, rating, review count, years of experience.
- **Services:** titles, descriptions, prices, badges, icons, and card images.
- **Coverage:** towns, postcodes, and covered outward codes for the postcode checker.
- **Pricing:** guide-price plans and feature lists.
- **Reviews:** quotes, names, locations, services, and source.
- **FAQs:** questions and answers. The FAQ schema is generated from the same source, so they stay in sync.

Design tokens (colours, radii, shadows, animation) are in the `@theme` block at the top of **`src/app/globals.css`**.

### Replacing images

Assets live in `public/images/`. Replace them with real client photography, keeping the same filenames to avoid touching components:

| File | Used for |
| --- | --- |
| `hero-electrician.jpg` | Hero portrait |
| `tools.jpg` | Emergency call-out card |
| `ev-charger.jpg` | EV service card + gallery |
| `fuse-board.jpg` | Before/after "after" image + showcase background |
| `panel-night.jpg` | Before/after "before" image |
| `testing.jpg` | Showcase inset + gallery |
| `ev-install.jpg` | Gallery |
| `garden-lighting.jpg` | Gallery |
| `kitchen-lighting.jpg` | Benefits + gallery |
| `home-night.jpg` | Final CTA background |
| `og.jpg` | Open Graph / social share image (1200 × 630) |

The before/after slider is currently **illustrative**. Replace `panel-night.jpg` with a real "before" photo from the same project, and update the caption in `src/components/ui/BeforeAfter.tsx`.

---

## SEO features

- Semantic single-page structure with one `<h1>` and ordered `<h2>`/`<h3>` headings.
- Page metadata, canonical URL, Open Graph, Twitter card, and geo meta tags in `src/app/layout.tsx`.
- JSON-LD graph in `src/app/page.tsx` built by `src/lib/schema.ts`:
  - `Electrician` / `LocalBusiness` with address, geo, opening hours, area served, aggregate rating, reviews, and service catalogue.
  - `Service` offers, `Offer` pricing, `WebSite`, `WebPage`, and `FAQPage`.
- `robots.txt`, `sitemap.xml`, and web manifest generated by Next.js.
- Descriptive alt text, click-to-call phone links, and local keyword coverage in headings and body copy.
- Static prerendering with prioritised hero image for strong LCP.

**Before going live:**

1. Replace `siteUrl` in `src/data/site.ts` with the real domain.
2. Update the address, postcode, phone number, email, and geo coordinates.
3. Replace the Google Maps query in `src/components/layout/Footer.tsx` with the verified Google Business Profile embed.
4. Replace the social/OG image and the illustrative gallery photos.
5. Update the `sameAs` and `reviewUrl` links in `src/data/site.ts`.
6. Add analytics (Vercel Analytics, GA4, or Plausible) if required.

---

## Accessibility & motion

- Skip-to-content link, semantic landmarks, visible focus styles, and keyboard-operable menus, accordions, and before/after slider.
- Mobile menu traps focus and closes on `Escape`; body scroll is locked while open.
- Form labels, inline errors, `aria-invalid`, `aria-describedby`, and an `aria-live` result region.
- WCAG-conscious contrast for text and controls.
- All scroll reveals, count-ups, radar sweep, and mobile CTA entrance respect `prefers-reduced-motion`.

---

## Conversion features

- Click-to-call in the announcement bar, nav, hero, quote panel, FAQ, final CTA, and sticky mobile bar.
- Primary CTA **"Get a free quote"** consistently links to the inline form.
- Quote form above the fold on mobile (directly after the trust bar).
- Trust proof: Google/Checkatrade ratings, review count, years in business, NICEIC/Part P credentials.
- Local proof: coverage map, six towns with postcodes, postcode checker.
- Transparent guide pricing and a risk-reversal strip (written fixed price, no call-out fee, no obligation).

---

## Scripts

```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint
```

---

## Deployment

This project deploys cleanly to Vercel:

1. Push the project to a Git repository.
2. Import it into Vercel.
3. Add the optional Resend environment variables.
4. Deploy. Build command: `npm run build`. Output is handled automatically by Next.js.

For other hosts, use any platform that supports Node.js 20+ and Next.js 16.

---

## Notes

- This is a **mockup landing page** for a fictional business. Reviews, prices, project photos, and credentials are representative placeholders and should be replaced with verified client information before launch.
- The quote form's demo mode returns success without delivering email. Configure Resend before relying on it for leads.
- Google Maps is embedded via the public Maps embed URL. No API key is required for the current iframe, but a production Google Maps Embed API key is recommended for reliability and usage controls.
