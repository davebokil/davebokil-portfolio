<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const pageUrl = `${siteUrl}/nbpa-portal`
const appStoreUrl = "https://apps.apple.com/sk/app/nbpa-portal/id6748317926"
const playStoreUrl = "https://play.google.com/store/apps/details?id=com.nbpa.playerportal&hl=en_US"

const title = "NBPA Portal: Case Study | Dave Bokil"
const description =
  "How I led the planning, build, and rollout of NBPA Portal, a mobile-first self-service app for NBA players, agents, financial advisors, and the Salesforce CRM system powering it, as Director of Digital Product at the NBPA."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: pageUrl,
  // TODO: replace with a dedicated NBPA Portal OG image once available
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
  trackEvent("case_study_cta_click", "nbpa-portal", label, destination)
}
</script>

<template>
  <SiteNav solid />
  <main class="casestudy">
    <div class="casestudy__wrap">
      <a class="casestudy__back" href="/">&larr; davebokil.com</a>

      <!-- Hero -->
      <section class="casestudy__hero">
        <div class="casestudy__heading">
          <img
            class="casestudy__icon"
            src="/images/nbpa-portal/app-icon.png"
            alt="NBPA Portal app icon"
            width="88"
            height="88"
          />
          <div>
            <p class="casestudy__eyebrow">Case Study</p>
            <h1 class="casestudy__title">NBPA Portal</h1>
          </div>
        </div>
        <p class="casestudy__dek">
          A mobile-first self-service portal that gives every NBA player one place to
          access their seasonal group licensing money, manage their NBPA-certified
          agents and financial advisors, review their contracts, and get official union
          news and documents, backed by a Salesforce CRM that was developed and released in tandem.
        </p>
        <p class="casestudy__meta">
          Role: Director of Digital Product &middot; Platforms: iOS &amp; Android
          (Nov 2025), Web (Mar 2026)
        </p>

        <div class="casestudy__cta-row">
          <a
            class="casestudy__badge-link"
            :href="appStoreUrl"
            target="_blank"
            rel="noreferrer"
            @click="trackCtaClick('App Store (hero)', appStoreUrl)"
          >
            <img
              class="casestudy__badge"
              src="/images/reve-model-1/app-store-badge-white.svg"
              alt="Download on the App Store"
              width="150"
              height="50"
            />
          </a>
          <a
            class="casestudy__badge-link"
            :href="playStoreUrl"
            target="_blank"
            rel="noreferrer"
            @click="trackCtaClick('Google Play (hero)', playStoreUrl)"
          >
            <img
              class="casestudy__badge casestudy__badge--play"
              src="/images/nbpa-portal/google-play-badge.png"
              alt="Get it on Google Play"
              width="150"
              height="50"
            />
          </a>
        </div>

        <div class="casestudy__hero-shots">
          <img
            src="/images/nbpa-portal/hero-shot-login.png"
            alt="NBPA Portal login screen"
            loading="eager"
          />
          <img
            src="/images/nbpa-portal/hero-shot-financial.png"
            alt="NBPA Portal home screen with group licensing claim amount and financial info"
            loading="eager"
          />
          <img
            src="/images/nbpa-portal/hero-shot-quick-actions.png"
            alt="NBPA Portal quick actions: assign or remove agents and advisors, update info"
            loading="eager"
          />
          <img
            src="/images/nbpa-portal/hero-shot-agents.png"
            alt="NBPA Portal agents dashboard with contact info"
            loading="eager"
          />
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
            <span class="casestudy__stat-value">4</span>
            <span class="casestudy__stat-label">Portal Personas: Player, Agent, Advisor, Medical Professional</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">8</span>
            <span class="casestudy__stat-label">Backend Integrations</span>
          </div>
        </div>
      </section>

      <!-- The Opportunity -->
      <section class="casestudy__section">
        <h2>The Opportunity</h2>
        <p>
          Before this app, a player who wanted to retrieve their seasonal group
          licensing check, confirm their agent's certification, look up a contract, or
          swap a financial advisor had to go through a dated and broken website, and often times ended up having to reach out to support rather than self serve through one
          trusted, always-on channel. As Director of Digital Product, I was tasked with
          scoping and delivering a mobile-first self-service portal that put all of that
          in players' hands, along with the <a href="/nbpa-crm">Salesforce CRM system</a> to
          power it: the backend of record for players, agents, contracts, financial advisors, and
          union communications, and the system the mobile app reads from and writes to.
        </p>
      </section>

      <PasswordGate page-id="nbpa-portal">
      <!-- Product Process -->
      <section class="casestudy__section">
        <h2>Product Process</h2>
        <ol class="casestudy__process">
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">01</span>
            <div>
              <h3>Discovery &amp; Requirements</h3>
              <p>
                Mapped how licensing, agent certification, contracts, and financial
                advisor relationships actually worked across NBPA staff, players, and
                certified agents, and scoped which of that could safely move to
                self-service versus what needed staff review and dual sign-off (banking
                and personal-info changes in particular).
              </p>
            </div>
          </li>
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">02</span>
            <div>
              <h3>Design</h3>
              <p>
                Wireframed the mobile app end to end in Figma and built a user story map
                covering all four portal personas (player, agent, financial advisor,
                medical professional), used to scope the Salesforce data model and the
                build alongside the engineering team.
              </p>
            </div>
          </li>
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">03</span>
            <div>
              <h3>Build</h3>
              <p>
                Directed a cross-functional engineering team building the Expo/React
                Native mobile app and the Salesforce Experience Cloud backend in
                parallel, including the REST API layer connecting them and integrations
                with DocuSign, Sage Intacct, Tipalti, Twilio, Sportsradar, and the
                group-licensing vendor.
              </p>
            </div>
          </li>
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">04</span>
            <div>
              <h3>Launch &amp; Rollout</h3>
              <p>
                Shipped to the App Store and Google Play in November 2025 (a web
                companion followed in March 2026). As project owner, I planned the
                implementation and launch, ran Salesforce staff training personally as
                lunch-and-learns, and then traveled to onboard players directly at their home training facilities.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <!-- Leadership & Team -->
      <section class="casestudy__section">
        <h2>Leadership &amp; Team</h2>
        <p>
          NBPA Portal was a real cross-functional delivery. I led product
          strategy and requirements, the Salesforce data model and integration
          decisions (which systems needed a direct Apex integration versus a staff
          workflow), the UX direction (the Figma wireframes and user story map behind
          the app), and the launch and rollout plan. An engineering team I directed
          implemented the mobile app and the Salesforce CRM backend from that
          direction, including the metadata-driven form/list rendering system and the
          nine-endpoint REST API layer described below.
        </p>
      </section>

      <!-- Key Features -->
      <section class="casestudy__section">
        <h2>Key Features</h2>
        <div class="casestudy__features">
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">01</span>
            <h3>Seasonal Group Licensing Check</h3>
            <p>
              Players can check their group licensing status directly in the app, with
              signed licensing agreements captured in-app and synced to the NBPA's
              group-licensing vendor through a dedicated Salesforce integration.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">02</span>
            <h3>Agent Management &amp; Certification</h3>
            <p>
              A certified-agent directory (NCAA and FIBA certification status), the
              player's own Standard Player-Agent Contracts, and agent
              invite/renewal/termination flows, all backed by Salesforce as the system
              of record for NBPA agent certification.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">03</span>
            <h3>Contract Management</h3>
            <p>
              Players can view their Uniform Player Contracts by season and league
              directly in the app, pulled live from Salesforce rather than requiring a
              call to NBPA staff.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">04</span>
            <h3>Financial Advisor Management</h3>
            <p>
              Players invite or terminate a financial advisor relationship themselves,
              with granular, per-relationship permissions controlling whether that
              advisor can view documents or update information on the player's behalf.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">05</span>
            <h3>News &amp; Documents</h3>
            <p>
              A union news feed and per-season, secure document folders, with legal
              forms and event waivers captured as e-signed DocuSign documents instead of
              paper.
            </p>
          </div>
          <div class="casestudy__feature">
            <span class="casestudy__feature-number">06</span>
            <h3>Secure Change-Request Workflows</h3>
            <p>
              Changes to banking details or legal name/address go through a dual-approval
              workflow, routed to both finance and legal staff for sign-off before
              taking effect, rather than being applied directly by the player.
            </p>
          </div>
        </div>
      </section>

      <!-- System Architecture & Tech Stack -->
      <section class="casestudy__section">
        <h2>System Architecture &amp; Tech Stack</h2>
        <p>
          The mobile app talks to Salesforce through a purpose-built REST API layer
          (nine Apex REST controllers, one per portal persona plus a public/unauthenticated
          surface) sitting in front of Sales Cloud custom objects and an Experience
          Cloud community that provisions a distinct Salesforce login for each of the
          app's four personas. Rather than hand-building a form and list screen for
          every Salesforce object, the app defines a single metadata-driven rendering
          system: each object declares its fields, types, and validation once, and
          forms, lists, and record views are generated from that declaration. That same
          Salesforce schema is synced live into the mobile app's TypeScript types and
          Zod validators, and exercised with fuzz-generated test payloads on every
          build, so the two systems can't silently drift apart.
        </p>
        <h3>Mobile App</h3>
        <div class="casestudy__tags">
          <span class="casestudy__tag">Expo / React Native</span>
          <span class="casestudy__tag">TypeScript</span>
          <span class="casestudy__tag">Zustand</span>
          <span class="casestudy__tag">React Navigation</span>
          <span class="casestudy__tag">styled-components</span>
          <span class="casestudy__tag">Zod</span>
          <span class="casestudy__tag">OAuth2 / Salesforce Identity</span>
        </div>
        <h3 style="margin-top: 2rem;">Salesforce CRM &amp; Backend</h3>
        <div class="casestudy__tags">
          <span class="casestudy__tag">Salesforce DX</span>
          <span class="casestudy__tag">Apex REST</span>
          <span class="casestudy__tag">Experience Cloud</span>
          <span class="casestudy__tag">Lightning Web Components</span>
          <span class="casestudy__tag">DocuSign</span>
          <span class="casestudy__tag">Sage Intacct</span>
          <span class="casestudy__tag">Tipalti</span>
          <span class="casestudy__tag">Twilio</span>
          <span class="casestudy__tag">Sportsradar</span>
        </div>
      </section>

      <!-- Design & UX Decisions -->
      <section class="casestudy__section">
        <h2>Design &amp; UX Decisions</h2>
        <ul>
          <li>
            <strong>Four role-based experiences, one app.</strong> A player, a
            certified agent, a financial advisor, and a medical professional each see a
            distinct navigation stack and set of screens from the same codebase,
            selected by the logged-in user's Salesforce persona.
          </li>
          <li>
            <strong>Sensitive data gets extra protection.</strong> Screenshot and
            screen-recording are blocked app-wide, appropriate for an app that handles
            players' banking details and signed legal documents.
          </li>
          <li>
            <strong>Signatures, not paper.</strong> Forms that legally require a
            player's signature (financial-info changes, event waivers) capture it
            in-app and attach it to the record, rather than routing players to a
            separate paper or email process.
          </li>
          <li>
            <strong>The data model drives the UI, not the other way around.</strong>
            Adding a new Salesforce object to the app is primarily a matter of declaring
            its fields once; the form, list, and detail screens are generated from that
            declaration instead of being hand-built per object.
          </li>
        </ul>
      </section>

      <!-- Wireframes & User Story Map -->
      <section class="casestudy__section">
        <h2>Wireframes &amp; User Story Map</h2>
        <p>
          The mobile app was wireframed screen-by-screen in Figma. Scoping it meant
          mapping requirements across far more than the four portal personas: Legal,
          Finance, Player Experience, Brand Partnerships, Brand Comms, Crisis
          Management, Mental Health, Licensing, and Operations all fed into the same
          Salesforce user story map, tying together contracts, agents, financial
          advisors, events, QTPs, waivers, and roster data into one system.
        </p>
        <img
          class="casestudy__shot"
          src="/images/nbpa-portal/user-story-map.jpg"
          alt="Salesforce user story map, color-coded by NBPA department (Player Programs, Legal, Finance, Brand Partnerships, Brand Comms, Crisis Management, Mental Health, Licensing, Operations, and more), connecting Players, Agents, Contracts, Financial Advisors, Events, QTPs, and Roster & Data Feeds"
        />
        <h3>Mobile Wireframes</h3>
        <div class="casestudy__wireframes">
          <img src="/images/nbpa-portal/wireframe-home.png" alt="Figma wireframe: Home screen with group licensing claim amount, bank info, contact info, and quick actions" />
          <img src="/images/nbpa-portal/wireframe-financial.png" alt="Figma wireframe: Financial Dashboard with bank info, advisors, tax documents, player reserve, and FICRs" />
          <img src="/images/nbpa-portal/wireframe-agents.png" alt="Figma wireframe: Agents Dashboard with personal info, agents, PICRs, contracts, and fee disclosures" />
          <img src="/images/nbpa-portal/wireframe-resources.png" alt="Figma wireframe: NBPA Resources screen with union services, events, sponsorships, philanthropy, and bespoke services" />
        </div>
      </section>

      <!-- Outcomes -->
      <section class="casestudy__section">
        <h2>Outcomes</h2>

        <h3>NBPA Portal</h3>
        <div class="casestudy__stats" style="margin-bottom: 2rem;">
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">95%</span>
            <span class="casestudy__stat-label">Active Players Signed Up</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">98%</span>
            <span class="casestudy__stat-label">Certified Agents Signed Up</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">100%</span>
            <span class="casestudy__stat-label">Group Licensing Paid, a First for the NBPA</span>
          </div>
        </div>
        <p>
          Since launch, the Portal has reached a level of adoption most digital
          products never see in their first year. Most importantly, it proved that the players are capable of
          real self-service: signing contracts, adding and removing agents and
          advisors, and receiving payments. The app is user-friendly enough that some
          players downloaded it, logged in, added their banking information, and
          removed an agent entirely on their own, with no NBPA staff involved.
        </p>
        <p>
          It has replaced a fractured legacy system of spreadsheets, paper, and
          one-off outreach with real self-service. 1099 tax document delivery is the
          clearest example: a process that used to mean staff looking up each player
          individually and chasing them by text and email is now a single bulk
          upload, with players and advisors retrieving their own documents. What used
          to take staff days now takes about half a day total.
        </p>

        <h3 style="margin-top: 3rem;">Salesforce CRM</h3>
        <div class="casestudy__stats" style="margin-bottom: 2rem;">
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">Nov 2025</span>
            <span class="casestudy__stat-label">Org-Wide Launch, All Staff Onboarded</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">4</span>
            <span class="casestudy__stat-label">Departments Powered: Player Experience, Communications, Legal, Finance</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">4,200+</span>
            <span class="casestudy__stat-label">Quality Touch Points Delivered (FY26)</span>
          </div>
        </div>
        <p>
          Salesforce launched alongside the Portal in November 2025 as the
          organization's CRM. I planned and led the staff rollout myself, running
          training as lunch-and-learns rather than a one-off announcement. It now
          powers core workflows across the organization, replacing siloed spreadsheets and undocumented
          individual knowledge with a shared system of record.
        </p>
        <p>
          The most significant outcome is visibility the NBPA never had before. The system allows the union to at a glance view the services provided to each player, their movement in and out of the league, and most importantly, allows the union to be proactive rather than reactive to a player's needs. That's the
          first meaningful layer of institutional data in the union's history, and
          the foundation for understanding where players are being served well and
          where they aren't.
        </p>

      </section>

      <!-- Reflections -->
      <!-- <section class="casestudy__section">
        <h2>Reflections &amp; What's Next</h2>
        <p>
          Both platforms are now the operational backbone the union didn't have
          before, and the roadmap for each keeps building on that foundation. On the
          Portal: personalized onboarding for rookies and first-time users, push
          notifications, financial advisor audits, and a CBA Reserve Fund feature
          that's ready to launch pending membership approval. On Salesforce: a
          Salesforce-native AI agent trained on NBPA data to answer questions about
          contracts, QTPs, and market value, and a Bank of America integration to
          centralize agent-dues payments across both systems.
        </p>
      </section> -->
      </PasswordGate>

      <!-- Footer CTA -->
      <section class="casestudy__footer">
        <div class="casestudy__cta-row">
          <a
            class="casestudy__badge-link"
            :href="appStoreUrl"
            target="_blank"
            rel="noreferrer"
            @click="trackCtaClick('App Store (footer)', appStoreUrl)"
          >
            <img
              class="casestudy__badge"
              src="/images/reve-model-1/app-store-badge-white.svg"
              alt="Download on the App Store"
              width="150"
              height="50"
            />
          </a>
          <a
            class="casestudy__badge-link"
            :href="playStoreUrl"
            target="_blank"
            rel="noreferrer"
            @click="trackCtaClick('Google Play (footer)', playStoreUrl)"
          >
            <img
              class="casestudy__badge casestudy__badge--play"
              src="/images/nbpa-portal/google-play-badge.png"
              alt="Get it on Google Play"
              width="150"
              height="50"
            />
          </a>
        </div>
        <div class="casestudy__footer-links">
          <a href="/contact" @click="trackCtaClick('Contact (footer)', '/contact')">Contact</a>
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

.casestudy__heading {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.casestudy__icon {
  border-radius: 22%;
  flex-shrink: 0;
  width: clamp(3.5rem, 8vw, 5.5rem);
  height: clamp(3.5rem, 8vw, 5.5rem);
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

.casestudy__badge-link {
  display: inline-flex;
  align-items: center;
}

.casestudy__badge {
  display: block;
  height: 50px;
  width: auto;
}

.casestudy__badge--play {
  width: 150px;
  height: 50px;
  object-fit: contain;
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

.casestudy__placeholder {
  border: 1px dashed rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  aspect-ratio: 16 / 9;
  font-size: 0.8rem;
  opacity: 0.6;
  padding: 1rem;
}

.casestudy__hero-shots {
  display: grid;
  grid-template-columns: repeat(4, minmax(7rem, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
  max-width: 64rem;
}

.casestudy__hero-shots .casestudy__placeholder {
  aspect-ratio: auto;
  height: 100%;
  border-radius: 8px;
}

.casestudy__hero-shots img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12);
}

@media screen and (max-width: 40em) {
  .casestudy__hero-shots {
    grid-template-columns: repeat(2, minmax(7rem, 1fr));
  }
}

.casestudy__wireframes {
  display: grid;
  grid-template-columns: repeat(4, minmax(8rem, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
  align-items: start;
}

.casestudy__wireframes img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12);
}

@media screen and (max-width: 40em) {
  .casestudy__wireframes {
    grid-template-columns: repeat(2, minmax(7rem, 1fr));
  }
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

.casestudy__feature .casestudy__placeholder {
  margin-bottom: 1rem;
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

.casestudy__footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
}

@media screen and (max-width: 52.99em) {
  .casestudy__process-step {
    grid-template-columns: 2.5rem 1fr;
  }
}
</style>
