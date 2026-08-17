# Changelog

## 2026-08-16 — Sitewide Q cyan color pass

**What changed:** Tuned the design system to the logo Q cyan (`#6DDDEB`) across backgrounds, glass surfaces, borders, buttons, section washes, header/footer, and forms.

**Why:** Site felt too flat black; needed more brand blue throughout.

**Files touched:** `src/app/globals.css`, `Button.tsx`, `Header.tsx`, `Footer.tsx`, `Hero.tsx`, `GuestPillars.tsx`, `Memberships.tsx`, `VenueTeaser.tsx`, `DownloadSection.tsx`, `ConsumerContact.tsx`, `ConsultationForm.tsx`

## 2026-08-16 — 3D iPhone mockup for home screen

**What changed:** Rebuilt `PhoneMockup` as a real 3D device (tilted perspective, bezel, side edge, Dynamic Island, glass specular, depth shadow). Download section now shows the OnQ home screen with the 3D treatment.

**Why:** Flat screenshot-in-rounded-rect didn’t feel dimensional enough.

**Files touched:** `src/components/ui/PhoneMockup.tsx`, `src/app/globals.css`, `src/components/DownloadSection.tsx`

## 2026-08-16 — Hero redo + shiny turquoise card

**What changed:** Rebuilt the hero from scratch (removed water treatment). Clean split: slogan left, 3D-tilted membership card right with turquoise glow and animated shine. Regenerated `/membership-card.png` as a shinier turquoise metallic card.

**Why:** Previous water hero didn’t land; card needed a stronger turquoise VIP look.

**Files touched:** `src/components/Hero.tsx`, `src/app/globals.css`, `public/membership-card.png`

## 2026-08-16 — Hero: slogan + card on water

**What changed:** Hero is a clear two-panel layout—slogan/CTAs on one side, membership card floating over a water surface with reflection and ripples on the other.

**Why:** Stronger first-viewport composition and premium membership visual.

**Files touched:** `src/components/Hero.tsx`, `src/app/globals.css`

## 2026-08-16 — Membership-first lifestyle brand refresh

**What changed:** Repositioned the consumer homepage around exclusive lifestyle membership. Added membership card asset (black bg removed), larger header logo, VIP display font (Cormorant Garamond), memberships at the top, Exclusive Access / Pop-up Events / Fast Entry, consumer + venue contact forms, “Your next membership starts here,” and a lighter venues page that mentions Brand Pilot only as a demo add-on. Removed revenue charts and Why OnQ Wins from the live page flow.

**Why:** Align site with membership-led brand messaging and keep venue sales on a separate tab/page.

**Files touched:**
- `public/membership-card.png`
- `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`
- `src/components/Hero.tsx`, `Memberships.tsx`, `GuestPillars.tsx`, `Header.tsx`, `Footer.tsx`, `DownloadSection.tsx`, `ConsumerContact.tsx`, `VenuePitch.tsx`, `VenueTeaser.tsx`, `ConsultationForm.tsx`
- `MEMORY.md`

## 2026-08-06 — Access Reserved + Always on the list

**What changed:** Hero and site copy now lead with “Access Reserved” and the tagline “Always on the list.”

**Why:** New brand messaging for the guest homepage.

**Files touched:** `src/components/Hero.tsx`, `src/components/Footer.tsx`, `src/app/layout.tsx`, `MEMORY.md`

## 2026-08-05 — Remove black bezels from app screenshots

**What changed:** Cropped phone device frames / black outline bezels out of all `public/screenshots/*.png` assets and removed the inset ring overlay on `PhoneMockup`. Originals backed up in `public/screenshots/_original/`.

**Why:** App mockups showed thick black outline lines between the purple device frame and the screen.

**Files touched:** `public/screenshots/*.png`, `src/components/ui/PhoneMockup.tsx`

## 2026-08-05 — Guest homepage + separate venues meeting page

**What changed:** Split the site into a guest-first homepage and a dedicated `/venues` page focused on booking a meeting. Home pushes memberships, tickets, and VIP booking. Venues page stays light on product detail; marketing is framed as an optional extra.

**Why:** Marketing wants users on the main page and venues sold via meetings—not a full product giveaway.

**Files touched:**
- `src/app/page.tsx` — guest-only homepage composition
- `src/app/venues/page.tsx` — new venues page
- `src/components/Hero.tsx` — user-focused hero + download CTA
- `src/components/GuestPillars.tsx` — new Tickets / VIP / Memberships section
- `src/components/Memberships.tsx` — rewritten for guests
- `src/components/VenueTeaser.tsx` — light home teaser linking to `/venues`
- `src/components/VenuePitch.tsx` — outcomes-led venues pitch
- `src/components/Header.tsx` / `Footer.tsx` — dual-page nav
- `src/components/ConsultationForm.tsx` — meeting language
- `src/components/ConsumerExperience.tsx` — section id/copy tweak
- `src/app/layout.tsx` — metadata copy
- `MEMORY.md` — project structure notes

**Notes for future agents:** Unused older sections (`VenueGrowth`, `AIMarketing`, `ComparisonTable`, `TwoSidedMarketplace`) remain in `src/components` but are not mounted. Do not put deep venue ops detail on `/venues`.

## 2026-07-24 — Favicon & social thumbnail use header logo

**What changed:** Replaced the default Next.js favicon and the OG/social thumbnail with assets generated from the header logo (`public/logo.png`).

**Why:** Browser tab icon and link previews should match the OnQ brand mark shown in the site header.

**Files touched:**
- `src/app/favicon.ico` — multi-size ICO (16/32/48) from logo
- `src/app/icon.png` — 512×512 app icon from logo
- `src/app/apple-icon.png` — 180×180 Apple touch icon from logo
- `public/og-image.png` — 1200×630 OG/Twitter image with logo centered on black

**Notes for future agents:** Layout metadata already points Open Graph/Twitter images at `/og-image.png`. Next.js file-based metadata picks up `favicon.ico`, `icon.png`, and `apple-icon.png` in `src/app/` automatically. Regenerate from `public/logo.png` if the logo file changes.
