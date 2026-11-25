# davebokil-portfolio

Personal portfolio website of Dave Bokil, built with Vue and Nuxt. Live at [davebokil.com](https://davebokil.com).

## Setup

```bash
npm install
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run generate # static site generation
npm run format   # prettier
```

### Environment variables

Server routes read these through Nuxt runtime config:

| Variable | Used by |
|----------|---------|
| `NUXT_RESEND_API_KEY` | Contact form and REVE Model 1 support form (sent via Resend) |
| `NUXT_GATE_PASSWORD` | Password gate on the protected case studies |

## Pages

| Route | What it is |
|-------|------------|
| `/` | Homepage: full-width **DAVEBOKIL** wordmark on a peachpuff canvas. Hovering each letter recolours the page; letters wiggle on hover and idly nudge until first interaction. Bottom-right page curl turns to `/psych`. |
| `/psych` | Psychedelic poster take on the homepage: animated bands, spirals, a blinking eye that follows the cursor, and a YouTube soundtrack player. Page curl turns back home. Not indexed. |
| `/nbpa-portal`, `/nbpa-crm`, `/poeltl`, `/g-league-vote` | Case studies behind `PasswordGate` |
| `/reve-model-1` | REVE Model 1 iOS app case study, plus `/support` and `/privacy-policy` |
| `/contact` | Contact form |

## Structure

```
app/
  assets/css/main.css      global styles, nav frame, shared typography
  components/
    SiteNav.vue            top navigation (Portfolio / Fun Stuff dropdowns)
    PageCurl.vue           draggable page-curl transition between pages
    PsychEye.vue           the /psych eye, shared with the homepage curl
    PasswordGate.vue       gate for protected case studies
  composables/useTrackEvent.js   GA event helper
  pages/                   routes (see above)
server/
  api/                     contact, support and gate endpoints
  utils/gateRateLimit.ts   rate limiting for the password gate
public/images/             case-study and OG images
```

## Design notes

- **Typography:** Inter (Google Fonts, loaded in `nuxt.config.ts`) is the only typeface, exposed as `--font-sans` in `main.css`. It uses two weights: Black (900) for the wordmark and page titles, Regular (400) for everything else. All text is tracked at −0.015em.
- **Homepage wordmark and tagline** are sized in JS so the visible letters span exactly edge to edge. The script measures each line's first and last letters on a canvas to allow for the font's built-in side spacing.
- **PageCurl** takes `to`, `bg` (the turning page's colour) and `reveal-bg` (the page underneath). A slot sets what peeks out from under the corner and defaults to the eye. Dragging past about 35% of the viewport, clicking, or pressing Enter/Space turns the page.
- Motion respects `prefers-reduced-motion`.
