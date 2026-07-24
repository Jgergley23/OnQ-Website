# Changelog

## 2026-07-24 — Favicon & social thumbnail use header logo

**What changed:** Replaced the default Next.js favicon and the OG/social thumbnail with assets generated from the header logo (`public/logo.png`).

**Why:** Browser tab icon and link previews should match the OnQ brand mark shown in the site header.

**Files touched:**
- `src/app/favicon.ico` — multi-size ICO (16/32/48) from logo
- `src/app/icon.png` — 512×512 app icon from logo
- `src/app/apple-icon.png` — 180×180 Apple touch icon from logo
- `public/og-image.png` — 1200×630 OG/Twitter image with logo centered on black

**Notes for future agents:** Layout metadata already points Open Graph/Twitter images at `/og-image.png`. Next.js file-based metadata picks up `favicon.ico`, `icon.png`, and `apple-icon.png` in `src/app/` automatically. Regenerate from `public/logo.png` if the logo file changes.
