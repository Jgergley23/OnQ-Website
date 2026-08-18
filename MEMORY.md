# OnQ Website — Project Memory

## Identity
OnQ is a balanced lifestyle membership brand—exclusive access day and night. Guests are the main homepage audience; venues get a separate page.

## Messaging
- Hero: **Access Reserved**
- Tagline: **Exclusive membership · Always on the list**
- Positioning: lifestyle membership that keeps you active day and night; exclusive members who go to events and create experiences
- Member pillars: Exclusive Access, Pop-up Events, Fast Entry
- Download CTA line: **Your next membership starts here**
- CTAs (home): Contact Us + Download the App
- CTAs (venues): Book a Demo
- App download: App Store only (no Google Play)

## Site structure
- `/` — Consumer homepage. Memberships first. Membership card visual. Consumer Contact Us. No venue revenue charts, no “Why OnQ Wins.”
- `/events` — Upcoming events list (`src/data/events.ts`). Empty until populated; shows “No upcoming events.”
- `/venues` — Venue page. Light pitch + Book a Demo. Brand Pilot / AI marketing mentioned only as demo add-on—not a full marketing product tour on the page.

## Design
- Dark nightlife aesthetic, cyan accent (`#7ee2f0`)
- Display font: Cormorant Garamond (`--font-display`) for VIP feel
- Body: Inter
- Header logo larger (`h-11` / `h-12`)
- Membership card asset: `/membership-card.png` (transparent background)

## Deploy
- Production domain: **https://onqhospitality.com**
- GitHub (production): `Jgergley23/onq-website26` — this is what Vercel auto-deploys for hospitality
- Vercel project: `onq-website26` under **jgergley23s-projects** (not Phase One CLI)
- Secondary / Phase One sandbox: GitHub `Jgergley23/OnQ-Website` → Vercel Phase One `onq-website` (onq.app) — do not treat as hospitality production
