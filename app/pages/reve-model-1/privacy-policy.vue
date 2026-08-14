<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const pageUrl = `${siteUrl}/reve-model-1/privacy-policy`

const title = "Privacy Policy — REVE Model 1"
const description = "REVE Model 1 does not collect, store, or share any personal data. All sound synthesis and audio processing happen entirely on your device."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: pageUrl,
  twitterCard: "summary",
  twitterTitle: title,
  twitterDescription: description,
})

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
})
</script>

<template>
  <main class="policy">
    <div class="policy__wrap">
      <a class="policy__back" href="/">&larr; davebokil.com</a>

      <h1 class="policy__title">Privacy Policy</h1>
      <p class="policy__meta">REVE Model 1&nbsp;&middot;&nbsp;Effective date: August 14, 2026</p>

      <p>
        This Privacy Policy explains how REVE Model 1 ("the App," "we," "us") handles information
        when you use our musical synthesizer application with echo effect, available on the Apple
        App Store and at our website (together, the "Services").
      </p>

      <p>
        <strong>In short: REVE Model 1 does not collect, store, or share any personal data.</strong>
        All sound synthesis and audio processing happen entirely on your device.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        REVE Model 1 does not require you to create an account, log in, or provide any personal
        information to use the App. We do not collect, transmit, or store:
      </p>
      <ul>
        <li>Names, email addresses, or contact information</li>
        <li>Audio you play, record, or generate within the App</li>
        <li>Location data</li>
        <li>Contacts, photos, or files from your device</li>
        <li>Usage analytics, behavioral tracking, or advertising identifiers</li>
      </ul>

      <h2>2. Audio &amp; Device Permissions</h2>
      <p>
        If the App requests microphone access (for example, to feed live input into the echo
        effect), that audio is processed entirely on your device in real time and is never
        recorded, transmitted to us, or shared with any third party. You can grant or revoke
        microphone access at any time in your device's Settings.
      </p>

      <h2>3. Third-Party Services</h2>
      <p>
        REVE Model 1 does not integrate any third-party analytics, advertising, or
        data-collection SDKs. We do not share information with third parties because we do not
        collect any in the first place.
      </p>

      <h2>4. Platform-Provided Data</h2>
      <p>
        Apple (via the App Store) and our web hosting provider may automatically collect limited
        technical data — such as anonymized crash logs, download counts, or aggregate usage
        statistics — as part of operating their platforms. This data is governed by Apple's own
        privacy policy and, where applicable, our hosting provider's policy, not by us. We do not
        have access to personally identifying information through these channels.
      </p>

      <h2>5. Children's Privacy</h2>
      <p>
        REVE Model 1 is not directed at children under 13, and we do not knowingly collect
        personal information from anyone, including children. Because the App collects no
        personal data at all, this applies equally to users of all ages.
      </p>

      <h2>6. Data Security</h2>
      <p>
        Because REVE Model 1 does not collect or store personal data on our servers, there is no
        user data for us to secure or that could be exposed in a breach. Any audio processing
        occurs locally on your device.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Under regulations such as the GDPR and CCPA, individuals generally have rights to access,
        correct, or delete personal data held about them. Since we do not collect or hold any
        personal data, there is no data associated with you for us to provide, correct, or
        delete.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time, for example to reflect new features.
        Any changes will be posted on this page with a revised effective date. Continued use of
        the App after changes take effect constitutes acceptance of the updated policy.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
        <a href="mailto:bokild@gmail.com">bokild@gmail.com</a>
      </p>
    </div>
  </main>
</template>

<style scoped>
.policy {
  min-height: 100vh;
  padding: 4rem 5vw 6rem;
  display: flex;
  justify-content: center;
}

.policy__wrap {
  width: 100%;
  max-width: 42rem;
  line-height: 1.6;
}

.policy__back {
  display: inline-block;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
}

.policy__title {
  font-family: degular, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  line-height: 0.9;
  letter-spacing: -0.05rem;
  margin: 0 0 0.75rem;
}

.policy__meta {
  opacity: 0.7;
  margin: 0 0 3rem;
}

.policy h2 {
  font-family: degular, sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  margin: 2.5rem 0 0.75rem;
}

.policy p {
  margin: 0 0 1.25rem;
}

.policy ul {
  margin: 0 0 1.25rem;
  padding-left: 1.25rem;
}

.policy li {
  margin: 0.35rem 0;
}

.policy a {
  color: var(--color-link);
  text-decoration: underline;
}

.policy a:hover {
  color: var(--color-link-hover);
}
</style>
