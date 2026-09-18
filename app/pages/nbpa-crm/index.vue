<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const pageUrl = `${siteUrl}/nbpa-crm`

const title = "NBPA CRM: Case Study | Dave Bokil"
const description =
  "How I led the planning, build, and rollout of NBPA's Salesforce CRM, the system of record and internal operations platform behind the NBPA Portal mobile app, as Director of Digital Product at the NBPA."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: pageUrl,
  // TODO: replace with a dedicated NBPA CRM OG image once available
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
  trackEvent("case_study_cta_click", "nbpa-crm", label, destination)
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
        <h1 class="casestudy__title">NBPA CRM</h1>
        <p class="casestudy__dek">
          The Salesforce system of record and internal operations platform behind
          NBPA Portal: the backend the mobile app reads from and writes to, and the
          day-to-day system NBPA staff use to run Player Experience, Legal, Finance,
          and Communications.
        </p>
        <p class="casestudy__meta">
          Role: Director of Digital Product &middot; Platform: Salesforce (Sales
          Cloud &amp; Experience Cloud) &middot; Launched: November 2025
        </p>

        <div class="casestudy__cta-row">
          <a
            class="casestudy__button"
            href="/nbpa-portal"
            @click="trackCtaClick('NBPA Portal Case Study (hero)', '/nbpa-portal')"
          >
            NBPA Portal Case Study
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
            <span class="casestudy__stat-value">Nov 2025</span>
            <span class="casestudy__stat-label">Launch</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">107</span>
            <span class="casestudy__stat-label">Apex Classes</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">9</span>
            <span class="casestudy__stat-label">REST Endpoints Serving the Mobile App</span>
          </div>
        </div>
      </section>

      <!-- The Opportunity -->
      <section class="casestudy__section">
        <h2>The Opportunity</h2>
        <p>
          Before Salesforce, NBPA staff tracked players, certified agents,
          contracts, and financial advisor relationships across disconnected
          spreadsheets, email threads, and undocumented institutional knowledge,
          with no shared system of record and no way to see the full picture of
          service delivered to any one player. As Director of Digital Product, I
          was tasked with building that system of record and, on top of it, a
          nine-endpoint REST API layer that could safely power a public-facing
          mobile app,
          <a href="/nbpa-portal">NBPA Portal</a>, for four different portal
          personas without ever giving the app direct access to the org.
        </p>
      </section>

      <PasswordGate page-id="nbpa-crm">
      <!-- Product Process -->
      <section class="casestudy__section">
        <h2>Product Process</h2>
        <ol class="casestudy__process">
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">01</span>
            <div>
              <h3>Discovery &amp; Requirements</h3>
              <p>
                Mapped how Player Experience, Legal, Finance, and Communications
                actually tracked players, agents, contracts, and every touch point
                delivered to a player, and scoped which of that could become
                structured Salesforce objects versus stay a manual staff process.
              </p>
            </div>
          </li>
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">02</span>
            <div>
              <h3>Design</h3>
              <p>
                Designed the data model (player, agent, financial advisor, and
                contract/change-request objects) and the Experience Cloud community
                that would host four distinct portal personas, using the same Figma
                user story map that scoped the mobile app.
              </p>
            </div>
          </li>
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">03</span>
            <div>
              <h3>Build</h3>
              <p>
                Directed the engineering team building roughly 107 Apex classes and
                a nine-endpoint REST API layer on Sales Cloud and Experience Cloud,
                plus Lightning Web Components and four embedded Vue single-page
                apps for internal staff dashboards.
              </p>
            </div>
          </li>
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">04</span>
            <div>
              <h3>Launch &amp; Rollout</h3>
              <p>
                Launched org-wide in November 2025 alongside the mobile app,
                onboarded every PA and T450 staff member, and personally ran
                training as lunch-and-learns rather than a one-off announcement.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <!-- Leadership & Team -->
      <section class="casestudy__section">
        <h2>Leadership &amp; Team</h2>
        <p>
          NBPA CRM was a real cross-functional delivery. I led the data model and
          integration decisions (which systems needed a direct Apex integration
          versus a staff workflow), the requirements gathering across Player
          Experience, Legal, Finance, and Communications, and the staff rollout and
          training. An engineer I directed implemented the Salesforce org itself:
          the Apex REST layer, the trigger-based automation, and the embedded
          Lightning/Vue admin tools described below.
        </p>
      </section>

      <!-- Key Features -->
      <section class="casestudy__section">
        <h2>Key Features</h2>
        <div class="casestudy__features">
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">01</span>
            <h3>Player, Agent &amp; Advisor System of Record</h3>
            <p>
              Player, agent, and financial-advisor records, including legal,
              banking, and representation history, live in Salesforce as the
              single source of truth the mobile app reads from and writes to.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">02</span>
            <h3>Quality Touch Point (QTP) Staff Workflow Engine</h3>
            <p>
              An internal task and checklist system tracks every service
              interaction delivered to a player, foundation setup, facility usage,
              fine arbitration, financial audits, and more, and routes it to staff
              by department.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">03</span>
            <h3>Agent Certification &amp; Infraction Pipeline</h3>
            <p>
              Agent applications (bar admissions, employment history, government
              IDs, references) and the full infraction lifecycle, auto-detected via
              Sportsradar and arbitrated by Legal, run end-to-end in Salesforce.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">04</span>
            <h3>Finance Operations</h3>
            <p>
              Live AP/AR balances and vendor sync through Sage Intacct, payee
              management through Tipalti, and digital 1099 delivery replace
              manual, per-player lookups.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">05</span>
            <h3>Communications &amp; Events</h3>
            <p>
              Mass texting through Twilio with full history on every player's
              profile, plus event registration and DocuSign e-signed waivers for
              union events.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">06</span>
            <h3>Embedded Staff Admin Tools</h3>
            <p>
              Four Vue single-page apps, a QTP dashboard, email notifications,
              player insights, and a facility scheduler, run inside Lightning pages
              through a custom Salesforce-as-a-backend bridge, giving staff
              purpose-built tools beyond standard Salesforce screens.
            </p>
          </div>
        </div>
      </section>

      <!-- System Architecture & Tech Stack -->
      <section class="casestudy__section">
        <h2>System Architecture &amp; Tech Stack</h2>
        <p>
          The mobile app and this CRM are two sides of the same system. Salesforce
          is the system of record; nine Apex REST controllers, covering players,
          agents, financial advisors, medical professionals, and a
          public/unauthenticated surface, are the only door into it from outside,
          and the mobile app authenticates as a genuine Experience Cloud portal
          user rather than through a separate token scheme. Internally, that same
          schema powers a distinct set of tools staff use directly: Lightning
          pages, trigger-based automation across roughly 114 triggers, and four
          embedded Vue single-page apps. A custom schema-to-TypeScript codegen tool
          keeps the mobile app's types and the Vue admin tools' types in sync with
          the live Salesforce schema automatically, so the two sides can't silently
          drift apart.
        </p>
        <h3>Salesforce Platform</h3>
        <div class="casestudy__tags">
          <span class="casestudy__tag">Salesforce DX</span>
          <span class="casestudy__tag">Apex REST</span>
          <span class="casestudy__tag">Experience Cloud</span>
          <span class="casestudy__tag">Lightning Web Components</span>
          <span class="casestudy__tag">Trigger-Based Automation</span>
          <span class="casestudy__tag">Vue 3 (Embedded Admin Tools)</span>
        </div>
        <h3 style="margin-top: 2rem;">Integrations</h3>
        <div class="casestudy__tags">
          <span class="casestudy__tag">DocuSign</span>
          <span class="casestudy__tag">Sage Intacct</span>
          <span class="casestudy__tag">Tipalti</span>
          <span class="casestudy__tag">Twilio</span>
          <span class="casestudy__tag">Slack</span>
          <span class="casestudy__tag">Sportsradar</span>
          <span class="casestudy__tag">Cosmic CMS</span>
          <span class="casestudy__tag">RMS (Group Licensing)</span>
        </div>
      </section>

      <!-- Design & Operations Decisions -->
      <section class="casestudy__section">
        <h2>Design &amp; Operations Decisions</h2>
        <ul>
          <li>
            <strong>Row-level access enforced in code, not sharing rules.</strong>
            Every mobile-facing REST controller deliberately runs without sharing,
            with row-level access enforced by explicit query filters instead, so
            the mobile app only ever sees the logged-in player's, agent's, or
            advisor's own records.
          </li>
          <li>
            <strong>Four Experience Cloud profiles, one org.</strong> NBPA Player,
            NBPA Agent, NBPA Financial Advisor, and NBPA Medical Professional are
            separate, auto-provisioned Salesforce profiles, so each portal persona
            only sees the metadata relevant to their role.
          </li>
          <li>
            <strong>Per-relationship permissions, not blanket access.</strong> A
            financial advisor's ability to view documents or update banking info is
            a flag on the relationship itself, grantable and revocable per player,
            not an all-or-nothing account setting.
          </li>
          <li>
            <strong>A homegrown error log, not a black box.</strong> Every
            unhandled exception in the REST layer writes a structured log record
            automatically, giving staff a queryable history instead of a silent
            failure.
          </li>
          <li>
            <strong>Department routing reuses the Role Hierarchy.</strong> Internal
            QTP staff tasks are routed by matching a task's department to a staff
            member's Salesforce role, rather than building a separate assignment
            system.
          </li>
        </ul>
      </section>

      <!-- Planning: The User Story Map -->
      <section class="casestudy__section">
        <h2>Planning: The User Story Map</h2>
        <p>
          Scoping the CRM meant mapping requirements across far more than the four
          portal personas. Legal, Finance, Player Experience, Brand Partnerships,
          Brand Comms, Crisis Management, Mental Health, Licensing, and Operations
          all fed into one Salesforce user story map, tying together players,
          agents, contracts, financial advisors, events, QTPs, waivers, and roster
          data into a single system, the same map that scoped the mobile app on
          the other side of this system.
        </p>
        <img
          class="casestudy__shot"
          src="/images/nbpa-portal/user-story-map.jpg"
          alt="Salesforce user story map, color-coded by NBPA department (Player Programs, Legal, Finance, Brand Partnerships, Brand Comms, Crisis Management, Mental Health, Licensing, Operations, and more), connecting Players, Agents, Contracts, Financial Advisors, Events, QTPs, and Roster & Data Feeds"
        />
      </section>

      <!-- Outcomes -->
      <section class="casestudy__section">
        <h2>Outcomes</h2>
        <div class="casestudy__stats" style="margin-bottom: 2rem;">
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">Nov 2025</span>
            <span class="casestudy__stat-label">Org-Wide Launch, All Staff Onboarded</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">4,200+</span>
            <span class="casestudy__stat-label">Quality Touch Points Delivered (FY26)</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">200+</span>
            <span class="casestudy__stat-label">Agent Applications Processed End-to-End</span>
          </div>
        </div>
        <p>
          Salesforce launched alongside the Portal in November 2025 as the
          organization's CRM. I planned and led the staff rollout myself, running
          training as lunch-and-learns rather than a one-off announcement. It now
          powers core workflows across Player Experience, Legal, Finance, and
          Communications, replacing siloed spreadsheets and undocumented
          individual knowledge with a shared system of record.
        </p>
        <p>
          The most significant outcome is visibility the NBPA never had before.
          Quality Touch Points are tracked org-wide, over 4,200 delivered this
          fiscal year alone, and staff can open a player's profile and see the
          full picture of service delivered to them: foundation setup, facility
          usage, fine arbitration, financial audits, and more. That's the first
          meaningful layer of institutional data in the union's history.
        </p>
        <p>
          The agent side shows the same shift. Over 200 agent applications, from
          intake through certification, have been processed end-to-end in
          Salesforce this fiscal year, and the full infraction lifecycle,
          detection through Sportsradar, arbitration by Legal, and player
          communication, now runs as one structured workflow instead of manual
          record-keeping and siloed email.
        </p>
        <p>
          On the finance side, live AP/AR balances flow in through the Sage
          Intacct integration and 1099s are delivered digitally, cutting the
          manual, per-player work that used to eat staff time every tax season.
        </p>
      </section>

      <!-- Reflections -->
      <section class="casestudy__section">
        <h2>Reflections &amp; What's Next</h2>
        <p>
          Salesforce is now the operational backbone the union didn't have before,
          and the roadmap keeps building on that foundation: a Salesforce-native AI
          agent trained on NBPA data to answer questions about contracts, QTPs,
          and market value; an Acuity integration to validate incoming financial
          data from players and advisors; a Bank of America integration to
          centralize agent-dues payments; and a Circle of Influence feature to map
          the contacts closest to each player, populated both manually and
          automatically from facility check-in data.
        </p>
      </section>
      </PasswordGate>

      <!-- Footer CTA -->
      <section class="casestudy__footer">
        <div class="casestudy__cta-row">
          <a
            class="casestudy__button"
            href="/nbpa-portal"
            @click="trackCtaClick('NBPA Portal Case Study (footer)', '/nbpa-portal')"
          >
            NBPA Portal Case Study
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
  margin: 0 0 2rem;
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

.casestudy__process {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 2rem;
}

.casestudy__process-step {
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 1rem;
  align-items: start;
}

.casestudy__process-number {
  font-family: degular, sans-serif;
  font-size: 1.5rem;
  line-height: 1.05;
  opacity: 0.5;
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

.casestudy__shot {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.casestudy__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
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

@media screen and (max-width: 52.99em) {
  .casestudy__process-step {
    grid-template-columns: 2.5rem 1fr;
  }
}
</style>
