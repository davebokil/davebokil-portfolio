<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const pageUrl = `${siteUrl}/g-league-vote`

const title = "G-League Vote: Case Study | Dave Bokil"
const description =
  "How I designed and delivered a custom secure SMS voting platform that enabled the historic NBA G-League unionization vote, as Senior Full Stack Developer at the NBPA."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: pageUrl,
  // TODO: replace with a dedicated G-League Vote OG image once available
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
  trackEvent("case_study_cta_click", "g-league-vote", label, destination)
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
        <h1 class="casestudy__title">G-League Unionization Vote</h1>
        <p class="casestudy__dek">
          Secure SMS Voting Platform. Designed and delivered a custom secure
          voting platform that enabled the historic NBA G-League unionization
          vote, one of the most consequential digital products in NBPA history.
        </p>
        <p class="casestudy__meta">
          Role: Senior Full Stack Developer &middot; Company: NBPA &middot; 2022
        </p>

        <div class="casestudy__tags">
          <span class="casestudy__tag">Full Stack</span>
          <span class="casestudy__tag">Security</span>
          <span class="casestudy__tag">JavaScript</span>
          <span class="casestudy__tag">Twilio</span>
          <span class="casestudy__tag">Civic Tech</span>
        </div>

        <div class="casestudy__cta-row">
          <a
            class="casestudy__button"
            href="/contact"
            @click="trackCtaClick('Contact (hero)', '/contact')"
          >
            Contact
          </a>
        </div>
      </section>

      <!-- Overview -->
      <section class="casestudy__section">
        <h2>Overview</h2>
        <p>
          When G-League players moved to hold a unionization vote, the NBPA
          needed a secure, real-time digital voting system on a compressed
          timeline. Standard off-the-shelf tools couldn't meet the security or
          operational requirements. I built it from scratch.
        </p>
      </section>

      <PasswordGate page-id="g-league-vote">
      <!-- Technical Approach -->
      <section class="casestudy__section">
        <h2>Technical Approach</h2>
        <p>
          I designed and delivered a custom SMS-based secure voting platform
          using JavaScript and the Twilio API. The system enabled real-time
          voting for hundreds of G-League players across the country, with
          authentication, vote verification, and real-time tallying built to
          withstand the scrutiny of a union election.
        </p>
      </section>

      <!-- Impact -->
      <section class="casestudy__section">
        <h2>Impact</h2>
        <p>
          The platform facilitated the G-League's historic unionization vote
          successfully, a landmark moment for professional basketball labor
          rights. Described internally as one of the most consequential digital
          products in NBPA history.
        </p>
      </section>
      </PasswordGate>

      <!-- Footer CTA -->
      <section class="casestudy__footer">
        <div class="casestudy__cta-row">
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
  letter-spacing: -0.015em;
  font-size: 0.85rem;
}

.casestudy__hero {
  margin-bottom: 4rem;
}

.casestudy__eyebrow {
  text-transform: uppercase;
  letter-spacing: -0.015em;
  font-size: 0.85rem;
  opacity: 0.7;
  margin: 0 0 0.75rem;
}

.casestudy__title {
  font-family: var(--font-sans);
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 0.9;
  letter-spacing: -0.015em;
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
  letter-spacing: -0.015em;
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
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 1.4rem;
  text-transform: uppercase;
  margin: 0 0 1.25rem;
}

.casestudy p {
  margin: 0 0 1.25rem;
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
  letter-spacing: -0.015em;
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
