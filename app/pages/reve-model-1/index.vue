<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const pageUrl = `${siteUrl}/reve-model-1`
const appStoreUrl = "https://apps.apple.com/sk/app/reve-model-1/id6799227993"

const title = "REVE Model 1: Case Study | Dave Bokil"
const description =
  "How I ported REVE Model 1, a monophonic analog-style synth and echo machine, from a browser synth into a hand-rolled native iOS DSP engine, solo, shipping a TestFlight-ready build in about 27.5 hours using AI coding agents."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: pageUrl,
  // TODO: replace with a dedicated REVE Model 1 OG image once available
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
  trackEvent("case_study_cta_click", "reve-model-1", label, destination)
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
            src="/images/reve-model-1/app-icon.png"
            alt="REVE Model 1 app icon"
            width="88"
            height="88"
          />
          <div>
            <p class="casestudy__eyebrow">Case Study</p>
            <h1 class="casestudy__title">REVE Model 1</h1>
          </div>
        </div>
        <p class="casestudy__dek">
          "A synth and echo machine": a monophonic analog-style synthesizer, ported from an
          existing browser synth into a hand-rolled native iOS DSP engine, solo, using AI coding
          agents end-to-end.
        </p>
        <p class="casestudy__meta">
          Role: Founder, Product Designer &amp; Engineer &middot; Platform: iOS 17+
          &amp; AUv3 &middot; Launched: August 30, 2026
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
            class="casestudy__button"
            href="/reve-model-1/support"
            @click="trackCtaClick('Support (hero)', '/reve-model-1/support')"
          >
            Support
          </a>
          <a
            class="casestudy__button"
            href="/reve-model-1/privacy-policy"
            @click="trackCtaClick('Privacy Policy (hero)', '/reve-model-1/privacy-policy')"
          >
            Privacy Policy
          </a>
        </div>

        <div class="casestudy__hero-shots">
          <img src="/images/reve-model-1/screenshot-1.png" alt="REVE Model 1: VCO, source mixer, and filter panel" loading="eager" />
          <img src="/images/reve-model-1/screenshot-2.png" alt="REVE Model 1: arpeggiator and controller panel" loading="eager" />
          <img src="/images/reve-model-1/screenshot-3.png" alt="REVE Model 1: echo and limiter FX rack" loading="eager" />
        </div>
      </section>

      <!-- At a Glance -->
      <section class="casestudy__section">
        <div class="casestudy__stats">
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">~27.5 hrs</span>
            <span class="casestudy__stat-label">Initial Commit &rarr; Shippable Build</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">0</span>
            <span class="casestudy__stat-label">Third-Party Dependencies</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">Live</span>
            <span class="casestudy__stat-label">App Store &amp; AUv3</span>
          </div>
        </div>
      </section>

      <!-- The Opportunity -->
      <section class="casestudy__section">
        <h2>The Opportunity</h2>
        <p>
          I hold a Master's degree in Music Technology from NYU, and digital signal processing has
          always been the intersection where my technical and creative interests meet. I had
          already built
          <a href="https://frippertripper.davebokil.com/" target="_blank" rel="noreferrer">FripperTripper</a>,
          a browser-based synth using the Web Audio API. REVE Model 1 started as a question: could
          one person, using AI coding agents, port that synth into a real, hand-rolled native iOS
          audio engine (not a thin wrapper around someone else's DSP library) and ship it to the
          App Store solo?
        </p>
        <p>
          That meant writing the entire signal chain (oscillators, filter, envelopes, delay,
          limiter) from scratch in pure Swift, with only a thin layer of AVFoundation at the very
          edge to get audio in and out of the device. No AudioKit, no third-party DSP library, no
          dependencies at all.
        </p>
      </section>

      <!-- Product Process -->
      <section class="casestudy__section">
        <h2>Product Process</h2>
        <ol class="casestudy__process">
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">01</span>
            <div>
              <h3>Concept &amp; Reference</h3>
              <p>
                Used an existing web synth I'd already built as the reference implementation, and
                scoped what a "real" native port meant: a fully hand-rolled DSP engine, not a
                thin AVAudioEngine skin over someone else's library.
              </p>
            </div>
          </li>
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">02</span>
            <div>
              <h3>Design</h3>
              <p>
                Designed a paged front-panel layout with a visible page selector (not swipe-only),
                a non-modal keyboard drawer so both hands can stay on the controls while a note
                rings out, and a glissando keyboard gesture built for live playing.
              </p>
            </div>
          </li>
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">03</span>
            <div>
              <h3>Build</h3>
              <p>
                Wrote the full signal chain (VCO, ladder filter, envelope, LFO, arpeggiator, echo,
                limiter) as a pure-Swift, Foundation-only DSP core in Swift 6, wrapped in a single
                thin <code>AVAudioSourceNode</code>, with zero third-party dependencies.
              </p>
            </div>
          </li>
          <li class="casestudy__process-step">
            <span class="casestudy__process-number">04</span>
            <div>
              <h3>Launch &amp; Iterate</h3>
              <p>
                Shipped the first release, renamed the app to REVE Model 1 shortly after, then
                iterated post-launch: a 100-patch factory preset bank, iPad layout support, and an
                AUv3 plugin extension so the same engine runs inside AUM, Logic Pro for iPad,
                Cubasis, and GarageBand.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <!-- AI-Native Product Development -->
      <section class="casestudy__section">
        <h2>AI-Native Product Development</h2>
        <p>
          REVE Model 1 was a deliberate stress test of AI-agent-assisted product development, not
          "using AI" as a talking point, but actually wiring agents into the work across
          engineering, design, QA, and launch, and owning the judgment calls that go with it.
          The evidence is in the repo itself, not just the pitch:
        </p>
        <ul class="casestudy__ai-list">
          <li>
            <strong>Velocity as a signal.</strong> Git history shows the entire native engine,
            including the VCO, filter, envelope, LFO, arpeggiator, delay, limiter, a full SwiftUI
            control surface, and a working preset system, went from initial commit to a
            shippable, TestFlight-ready build in about 27.5 hours.
          </li>
          <li>
            <strong>Agents plan, not just generate.</strong> Before the AUv3 plugin extension was
            built, the repo already contains a written implementation plan that cites specific
            file and line numbers as verified grounding facts, flags dead code found by direct
            inspection, and lays out numbered stages with a verification step at each one. The
            shipped extension matches that plan closely, down to the manufacturer and subtype
            codes it proposed.
          </li>
          <li>
            <strong>Troubleshooting, not just code review.</strong> Two real production issues,
            a silent audio-quality regression from the OS not consistently re-granting the
            requested sample rate on session reactivation, and a crash traced to a scene-phase
            transition tearing down the delay buffer mid-render, were root-caused and fixed, not
            just patched over.
          </li>
        </ul>
        <p>
          <strong>Working with non-determinism:</strong> the harder product skill wasn't
          prompting. It was deciding when to trust agent output outright, when to verify it, and
          when to override it. That evaluation loop, run consistently across engineering, design,
          and troubleshooting decisions, is the actual muscle behind "AI fluency": operating at
          the level of prompting, evals, and agents, not just talking about AI as a topic.
        </p>
        <!-- TODO: name the specific AI coding agent(s)/tools used, once decided what's shareable -->
      </section>

      <!-- Key Features -->
      <section class="casestudy__section">
        <h2>Key Features</h2>
        <div class="casestudy__features">
          <div class="casestudy__feature">
            <img
              class="casestudy__shot"
              src="/images/reve-model-1/vco-filter.png"
              alt="REVE Model 1 VCO, source mixer, and filter panel"
            />
            <h3>Analog-Style Voice Architecture</h3>
            <p>
              A monophonic, last-note-priority voice (SH-101-style) with a VCO (saw, pulse, sub,
              noise), a 4-pole ladder filter, one ADSR driving filter/PWM/VCA, and an LFO with
              pitch-mod routing.
            </p>
          </div>
          <div class="casestudy__feature">
            <img
              class="casestudy__shot"
              src="/images/reve-model-1/echo-limiter.png"
              alt="REVE Model 1 echo and limiter FX rack"
            />
            <h3>Echo &amp; Limiter FX Rack</h3>
            <p>
              A hand-rolled circular-buffer delay with adjustable repeats and time, plus a
              feed-forward peak-limiter with a live gain-reduction meter to keep the echo from
              blowing out.
            </p>
          </div>
          <div class="casestudy__feature">
            <img
              class="casestudy__shot"
              src="/images/reve-model-1/keyboard.png"
              alt="REVE Model 1 on-screen keyboard drawer with octave range and Hold controls"
            />
            <h3>Live-Performance Keyboard</h3>
            <p>
              A single continuous drag gesture spans the on-screen keys for real glissando, with a
              Hold/latch mode so both hands stay free for the front-panel knobs.
            </p>
          </div>
          <div class="casestudy__feature">
            <img
              class="casestudy__shot"
              src="/images/reve-model-1/auv3-host.png"
              alt="REVE Model 1 running as an AUv3 plugin inside a host app"
            />
            <h3>AUv3 Plugin</h3>
            <p>
              The same engine runs as an Audio Unit instrument inside AUM, Logic Pro for iPad,
              Cubasis, and GarageBand, with MIDI input and full session save/restore.
            </p>
          </div>
          <div class="casestudy__feature">
            <img
              class="casestudy__shot"
              src="/images/reve-model-1/app-store-listing.png"
              alt="REVE Model 1 App Store listing"
            />
            <h3>Fully On-Device</h3>
            <p>
              No network calls, no third-party SDKs, no tracking. The privacy manifest declares
              zero data collection, and everything runs locally on the device.
            </p>
          </div>
        </div>
      </section>

      <!-- Design & UX Decisions -->
      <section class="casestudy__section">
        <h2>Design &amp; UX Decisions</h2>
        <p>
          Every interface decision was weighed against a single question: does this help someone
          play, or does it get in the way? That bias shaped several specific choices.
        </p>
        <ul>
          <li>
            <strong>No onboarding, no about screen.</strong> An about screen was built, then
            removed, so the app launches straight into the playable front panel instead.
          </li>
          <li>
            <strong>Paged, not scrolled.</strong> The full control set doesn't fit one phone screen
            at a usable size, so it's split into three tappable pages with a visible selector,
            rather than a deep scroll or swipe-only paging that's harder to discover.
          </li>
          <li>
            <strong>A non-modal keyboard.</strong> The on-screen keyboard lives in a slide-up
            drawer instead of a sheet, so a held note and a knob sweep can happen at the same
            time, which is core to how the instrument is actually played.
          </li>
          <li>
            <strong>Brand color sampled from the icon.</strong> The UI accent color was pulled
            directly from the app icon artwork rather than a stock system color, and the whole
            app is forced into dark mode.
          </li>
          <li>
            <strong>Bugs fixed at the root, not the symptom.</strong> A sample-rate renegotiation
            issue was silently making the audio duller on session reactivation with no error
            thrown, and a scene-phase race was tearing down the delay buffer mid-render during a
            reported crash. Both were traced to their actual cause and fixed.
          </li>
        </ul>
        <img
          class="casestudy__shot"
          src="/images/reve-model-1/design-process.png"
          alt="REVE Model 1 VCO/Filter panel, wireframe compared to shipped UI"
        />
      </section>

      <!-- Video Gallery -->
      <section class="casestudy__section">
        <h2>Video Gallery</h2>
        <div class="casestudy__video-gallery">
          <div class="casestudy__video">
            <span class="casestudy__video-badge">Coming Soon</span>
            <span class="casestudy__video-play">&#9658;</span>
            <!-- <span>[Add YouTube Short: quick demo / first 30 seconds]</span> -->
          </div>
          <div class="casestudy__video">
            <span class="casestudy__video-badge">Coming Soon</span>
            <span class="casestudy__video-play">&#9658;</span>
            <!-- <span>[Add YouTube Short: sound design walkthrough]</span> -->
          </div>
          <div class="casestudy__video">
            <span class="casestudy__video-badge">Coming Soon</span>
            <span class="casestudy__video-play">&#9658;</span>
            <!-- <span>[Add YouTube Short: echo/delay in action]</span> -->
          </div>
          <div class="casestudy__video">
            <span class="casestudy__video-badge">Coming Soon</span>
            <span class="casestudy__video-play">&#9658;</span>
            <!-- <span>[Add YouTube Short: AUv3 running in GarageBand]</span> -->
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="casestudy__section">
        <h2>Tech Stack</h2>
        <div class="casestudy__tags">
          <span class="casestudy__tag">Swift 6</span>
          <span class="casestudy__tag">SwiftUI</span>
          <span class="casestudy__tag">Hand-Rolled DSP Engine</span>
          <span class="casestudy__tag">AVAudioEngine</span>
          <span class="casestudy__tag">AUv3</span>
          <span class="casestudy__tag">XcodeGen</span>
          <span class="casestudy__tag">AI Coding Agents</span>
        </div>
      </section>

      <!-- Outcomes: commented out until real App Store Connect data is available.
      <section class="casestudy__section">
        <h2>Outcomes</h2>
        <div class="casestudy__stats">
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">[Illustrative] 2,400+</span>
            <span class="casestudy__stat-label">Downloads (first 90 days)</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">[Illustrative] 4.8★</span>
            <span class="casestudy__stat-label">App Store Rating</span>
          </div>
          <div class="casestudy__stat">
            <span class="casestudy__stat-value">[Illustrative] TBD</span>
            <span class="casestudy__stat-label">Category Feature</span>
          </div>
        </div>
        <p class="casestudy__disclaimer">
          Figures above are placeholder/illustrative pending real App Store Connect data.
        </p>
      </section>
      -->

      <!-- Reflections -->
      <section class="casestudy__section">
        <h2>Reflections &amp; What's Next</h2>
        <p>
          Shipping solo, with AI agents doing real engineering work (not just scaffolding), proved
          the model holds up on a real, App-Store-approved product, and the post-launch iterations
          (a 100-preset factory bank, iPad support, and the AUv3 plugin) show it holds up for
          ongoing product work too, not just a single sprint. Next up: [preset sharing/import],
          [standalone MIDI support], and [Android exploration], prioritized against real user
          feedback once usage data is in.
        </p>
      </section>

      <!-- Footer CTA -->
      <section class="casestudy__footer">
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
        <div class="casestudy__footer-links">
          <a href="/reve-model-1/support" @click="trackCtaClick('Support (footer)', '/reve-model-1/support')">Support</a>
          <a href="/reve-model-1/privacy-policy" @click="trackCtaClick('Privacy Policy (footer)', '/reve-model-1/privacy-policy')">Privacy Policy</a>
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
  max-width: 64rem;
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
  grid-template-columns: repeat(3, minmax(9rem, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
  max-width: 64rem;
}

.casestudy__hero-shots img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

@media screen and (max-width: 40em) {
  .casestudy__hero-shots {
    grid-template-columns: repeat(2, minmax(7rem, 1fr));
  }

  .casestudy__hero-shots img:last-child {
    display: none;
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

.casestudy__highlight {
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.04);
  padding: 2rem;
}

.casestudy__highlight h2 {
  margin-top: 0;
}

.casestudy__ai-list {
  padding-left: 1.25rem;
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

.casestudy__shot {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.casestudy__video-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: 1.5rem;
  max-width: 50rem;
}

.casestudy__video {
  position: relative;
  aspect-ratio: 9 / 16;
  border: 1px dashed rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.6;
  padding: 1rem;
}

.casestudy__video-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.65rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  opacity: 0.8;
}

.casestudy__video-play {
  font-size: 1.75rem;
  opacity: 0.7;
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

.casestudy__disclaimer {
  font-size: 0.85rem;
  font-style: italic;
  opacity: 0.6;
  margin-top: 1rem;
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
