<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const pageUrl = `${siteUrl}/poeltl`
const poeltlUrl = "https://poeltl.nbpa.com"

const title = "Poeltl: Case Study | Dave Bokil"
const description =
  "How I led the full product relaunch of Poeltl, an NBPA-acquired daily NBA guessing game, scaling it to nearly 900K monthly page views across 190+ countries, as Director of Digital Product at the NBPA."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: pageUrl,
  // TODO: replace with a dedicated Poeltl OG image once available
  ogImage: `${siteUrl}/images/og-image.jpg`,
  ogImageWidth: 1536,
  ogImageHeight: 1024,
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/images/og-image.jpg`,
})

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
})

const { trackEvent } = useTrackEvent()

function trackCtaClick(label, destination) {
  trackEvent("case_study_cta_click", "poeltl", label, destination)
}
</script>

<template>
  <SiteNav solid />
  <main class="casestudy">
    <div class="casestudy__wrap">
      <a class="casestudy__back" href="/">&larr; davebokil.com</a>

      <!-- Hero -->
      <section class="casestudy__hero">
        <p class="casestudy__eyebrow">Case Study</p>
        <h1 class="casestudy__title">Poeltl</h1>
        <p class="casestudy__dek">
          Daily NBA Guessing Game. Led the full product relaunch of Poeltl, an
          NBPA-acquired daily NBA guessing game, scaling it to nearly 900K monthly
          page views across 190+ countries.
        </p>
        <p class="casestudy__meta">
          Role: Director of Digital Product &middot; Company: NBPA &middot; 2024&ndash;2025
        </p>

        <div class="casestudy__tags">
          <span class="casestudy__tag">Product</span>
          <span class="casestudy__tag">Gaming</span>
          <span class="casestudy__tag">Web App</span>
          <span class="casestudy__tag">Monetization</span>
        </div>

        <div class="casestudy__cta-row">
          <a
            class="casestudy__button"
            :href="poeltlUrl"
            target="_blank"
            rel="noreferrer"
            @click="trackCtaClick('Play Poeltl (hero)', poeltlUrl)"
          >
            Play Poeltl
          </a>
          <a
            class="casestudy__button"
            href="/contact"
            @click="trackCtaClick('Contact (hero)', '/contact')"
          >
            Contact
          </a>
        </div>
      </section>

      <!-- At a Glance -->
      <section class="casestudy__section">
        <div class="casestudy__stats">
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">365K</span>
            <span class="casestudy__stat-label">Games / Month</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">895K</span>
            <span class="casestudy__stat-label">Page Views / Month</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">190+</span>
            <span class="casestudy__stat-label">Countries</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">$30K</span>
            <span class="casestudy__stat-label">Ad Revenue (2025)</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">14K</span>
            <span class="casestudy__stat-label">Email Subscribers</span>
          </div>
        </div>
      </section>

      <!-- Overview -->
      <section class="casestudy__section">
        <h2>Overview</h2>
        <p>
          Poeltl started as an indie NBA guessing game that built a cult
          following under the Dunktown podcast brand. After the NBPA acquired it,
          I led the product relaunch from the ground up. The mandate was clear:
          evolve a cult-favorite game into a fully branded NBPA product with
          modern infrastructure, new features, and a sustainable revenue model.
        </p>
      </section>

      <PasswordGate page-id="poeltl">
      <!-- What I Did -->
      <section class="casestudy__section">
        <h2>What I Did</h2>
        <p>
          I defined the full requirements roadmap and directed engineering across
          five major workstreams: a complete visual rebrand, an admin portal for
          daily player management, a nightly NBA roster sync, a new "Flashback"
          replay mode, and Google Ad Manager monetization. Every feature was
          spec'd in Figma and prioritized against retention and revenue goals.
        </p>
      </section>

      <!-- Key Features -->
      <section class="casestudy__section">
        <h2>Key Features</h2>
        <div class="casestudy__features">
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">01</span>
            <h3>Admin Portal for Daily Player Management</h3>
            <p>
              A Microsoft-SSO-gated internal portal where staff manage the
              day-to-day game. Mystery players are auto-scheduled a month or two
              ahead by a rotation algorithm that favors whichever players have
              been used least, and staff can override any day by hand. Editing
              today's player republishes the homepage instantly, no redeploy
              required.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">02</span>
            <h3>Nightly NBA Roster Sync</h3>
            <p>
              A nightly job re-scrapes current rosters and player bios and diffs
              them against the database, adding, updating, or retiring players
              automatically. A field-level override system means a manual
              correction staff make in the portal always wins over the next
              scrape, so the automation never silently overwrites a human fix.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">03</span>
            <h3>Flashback Replay Mode</h3>
            <p>
              A dedicated route lets players replay any past day's puzzle back to
              the game's February 2024 launch, with its own guess-tracking session
              and rate limit, explicitly excluded from stats and streaks.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">04</span>
            <h3>Google Ad Manager Monetization</h3>
            <p>
              A full Google Ad Manager integration, not a simple AdSense
              drop-in, with side-rail, sticky-footer, and full-screen interstitial
              placements, plus the consent-management and content-security-policy
              work that comes with running third-party ad tags responsibly.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">05</span>
            <h3>Visual Rebrand</h3>
            <p>
              Retired the game's original Dunktown-era branding for a fully
              NBPA-branded identity, from the logo and color system down to the
              player silhouettes served through a headless CMS image pipeline.
            </p>
          </div>
        </div>
      </section>

      <!-- System Architecture & Tech Stack -->
      <section class="casestudy__section">
        <h2>System Architecture &amp; Tech Stack</h2>
        <p>
          Poeltl runs as a single TypeScript monolith, a custom in-house MVC
          framework (deliberately not Next.js, since anonymous session state
          doesn't fit a serverless model well) that server-renders React and
          serves both the game and the admin portal from one Express app. Game
          state is fully anonymous by default: a Postgres row keyed to a session
          id tracks games played, streaks, and win distribution with no account
          required, and players can optionally opt in with an email address. The
          homepage is pre-rendered to static HTML and player/team data is held in
          an in-memory cache, so a guess never has to round-trip to Postgres on
          the hot path, the core strategy behind handling hundreds of thousands
          of monthly plays.
        </p>
        <div class="casestudy__tags">
          <span class="casestudy__tag">TypeScript</span>
          <span class="casestudy__tag">Node.js / Express</span>
          <span class="casestudy__tag">React (SSR)</span>
          <span class="casestudy__tag">PostgreSQL</span>
          <span class="casestudy__tag">Knex.js</span>
          <span class="casestudy__tag">Redis</span>
          <span class="casestudy__tag">Passport.js (Microsoft SSO)</span>
          <span class="casestudy__tag">Cosmic CMS</span>
        </div>
      </section>

      <!-- Notable Engineering Decisions -->
      <section class="casestudy__section">
        <h2>Notable Engineering Decisions</h2>
        <ul>
          <li>
            <strong>Manual edits always win.</strong> The nightly roster scraper
            tracks which fields staff have manually corrected and skips
            overwriting them until the scraped value and the correction agree
            again.
          </li>
          <li>
            <strong>Wordle-style hints, seven dimensions deep.</strong> Every
            guess is scored server-side against the mystery player across
            height, age, jersey number, position, team, division, and
            conference, each graded exact, close, or far rather than a flat
            right-or-wrong.
          </li>
          <li>
            <strong>Two rate limiters, not one.</strong> The live daily game and
            the Flashback replay mode are rate-limited independently, so replay
            traffic can't starve the main game's limits or vice versa.
          </li>
          <li>
            <strong>Instant publish, no redeploy.</strong> Changing today's
            mystery player from the admin portal re-triggers the homepage's
            static pre-render immediately, so the fix is live in seconds.
          </li>
        </ul>
      </section>

      <!-- Impact -->
      <section class="casestudy__section">
        <h2>Impact</h2>
        <p>
          The relaunched game scaled to 365,000 games played and 895,000 page
          views per month, across 190+ countries. The built audience of 14,000
          email subscribers became a direct marketing channel for the NBPA, and
          Google Ad Manager monetization generated $30,000 in ad revenue in 2025 alone.
        </p>
      </section>
      </PasswordGate>

      <!-- Footer CTA -->
      <section class="casestudy__footer">
        <div class="casestudy__cta-row">
          <a
            class="casestudy__button"
            :href="poeltlUrl"
            target="_blank"
            rel="noreferrer"
            @click="trackCtaClick('Play Poeltl (footer)', poeltlUrl)"
          >
            Play Poeltl
          </a>
          <a
            class="casestudy__button"
            href="/contact"
            @click="trackCtaClick('Contact (footer)', '/contact')"
          >
            Contact
          </a>
        </div>
        <a class="casestudy__back" href="/">&larr; davebokil.com</a>
      </section>
    </div>
  </main>
</template>

<style scoped>
.casestudy__wrap {
  width: 100%;
  max-width: 64rem;
  line-height: 1.6;
}

.casestudy__back {
  display: inline-block;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
}

.casestudy__hero {
  margin-bottom: 4rem;
}

.casestudy__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
  opacity: 0.7;
  margin: 0 0 0.75rem;
}

.casestudy__title {
  font-family: degular, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 0.9;
  letter-spacing: -0.05rem;
  margin: 0 0 1rem;
}

.casestudy__dek {
  font-size: 1.15rem;
  max-width: 42rem;
  margin: 0 0 1rem;
}

.casestudy__meta {
  opacity: 0.7;
  margin: 0 0 1.5rem;
}

.casestudy__cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.casestudy__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.65rem 1.5rem;
  cursor: pointer;
}

.casestudy__button:hover {
  border-color: var(--color-text);
  color: var(--color-text);
}

.casestudy__section {
  margin: 4rem 0;
}

.casestudy h2 {
  font-family: degular, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0 0 1.25rem;
}

.casestudy h3 {
  font-family: degular, sans-serif;
  font-weight: 400;
  font-size: 1.05rem;
  margin: 0 0 0.4rem;
}

.casestudy p {
  margin: 0 0 1.25rem;
}

.casestudy strong {
  font-weight: 700;
  color: var(--color-text);
}

.casestudy ul {
  margin: 0 0 1.25rem;
  padding-left: 1.25rem;
}

.casestudy li {
  margin: 0.35rem 0;
}

.casestudy__features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem 2.5rem;
}

@media screen and (min-width: 40em) {
  .casestudy__features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 60em) {
  .casestudy__features {
    grid-template-columns: repeat(3, 1fr);
  }
}

.casestudy__feature-number {
  display: block;
  font-family: degular, sans-serif;
  font-weight: 400;
  font-size: 2.25rem;
  line-height: 1;
  opacity: 0.35;
  margin-bottom: 0.75rem;
}

.casestudy a {
  color: var(--color-link);
  text-decoration: underline;
}

.casestudy a:hover {
  color: var(--color-link-hover);
}

.casestudy a.casestudy__button {
  text-decoration: none;
  color: var(--color-text);
}

.casestudy a.casestudy__button:hover {
  color: var(--color-text);
}

.casestudy__footer a {
  text-decoration: none;
}

.casestudy__footer a:hover {
  text-decoration: underline;
}

.casestudy__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1.5rem;
}

.casestudy__stat {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.casestudy__stat-value {
  font-family: degular, sans-serif;
  font-weight: 400;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
}

.casestudy__stat-label {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.75rem;
  opacity: 0.7;
}

.casestudy__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.casestudy__tag {
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0.35rem 0.9rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.casestudy__footer {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.casestudy__footer .casestudy__back {
  margin: 0;
}
</style>
