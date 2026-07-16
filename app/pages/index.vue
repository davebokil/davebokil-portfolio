<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const title = "Dave Bokil - Technical Product Growth, Innovation, and Strategy"
const description =
"Digital product and transformation leader with 10+ years of experience driving complex, multi-workstream initiatives across CRM, mobile, web, and enterprise platforms. I specialize in turning organizational needs into scalable digital systems, establishing delivery governance, and aligning cross-functional teams around shared outcomes."
  // "Dave Bokil is a Product leader with over a decade of experience taking technical products from 0 to 1 and managing interconnected portfolios across engineering, design, and cross-functional stakeholders. He brings rare fluency across both the technical and business dimensions of product, from hands-on API architecture to executive stakeholder communication."
const ogImage = `${siteUrl}/images/og-image.jpg`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: siteUrl,
  ogImage,
  ogImageWidth: 1536,
  ogImageHeight: 1024,
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: "canonical", href: siteUrl }],
})

function trackMenuClick(label, destination) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "menu_click", {
      event_category: "navigation",
      event_label: label,
      destination,
    })
  }
}
</script>

<template>
  <main>
    <div class="frame">
      <div class="frame__links">
        <a href="https://www.linkedin.com/in/davebokil/" target="_blank" rel="noreferrer" @click="trackMenuClick('LinkedIn', 'https://www.linkedin.com/in/davebokil/')">LinkedIn</a>
        <a href="https://github.com/davebokil" target="_blank" rel="noreferrer" @click="trackMenuClick('GitHub', 'https://github.com/davebokil')">GitHub</a>
        <div class="frame__links__dropdown">
          <button type="button" class="frame__links__dropdown-trigger" aria-haspopup="true" @click="trackMenuClick('Recent Works (menu open)', null)">
            Recent Works
          </button>
          <div class="frame__links__submenu">
            <a class="frame__links__submenu-item" href="https://apps.apple.com/sk/app/nbpa-portal/id6748317926" target="_blank" rel="noreferrer" @click="trackMenuClick('NBPA Portal App', 'https://apps.apple.com/sk/app/nbpa-portal/id6748317926')">NBPA Portal App</a>
            <a class="frame__links__submenu-item" href="https://www.plyrsuntd.com/" target="_blank" rel="noreferrer" @click="trackMenuClick('PLYRS UNTD', 'https://www.plyrsuntd.com/')">PLYRS UNTD</a>
            <a class="frame__links__submenu-item" href="http://poeltl.nbpa.com/" target="_blank" rel="noreferrer" @click="trackMenuClick('Poeltl: NBA Wordle', 'http://poeltl.nbpa.com/')">Poeltl: NBA Wordle</a>
            <a class="frame__links__submenu-item" href="http://nbpa.com/rucker" target="_blank" rel="noreferrer" @click="trackMenuClick('Rucker Park', 'http://nbpa.com/rucker')">Rucker Park</a>
          </div>
        </div>
        <div class="frame__links__dropdown">
          <button type="button" class="frame__links__dropdown-trigger" aria-haspopup="true" @click="trackMenuClick('Side Projects (menu open)', null)">
            Side Projects 🎹
          </button>
          <div class="frame__links__submenu">
            <a class="frame__links__submenu-item" href="https://frippertripper.davebokil.com/" target="_blank" rel="noreferrer" @click="trackMenuClick('Web Based Synthesizer', 'https://frippertripper.davebokil.com/')">Web Based Synthesizer</a>
            <a class="frame__links__submenu-item" href="https://breaks.davebokil.com/" target="_blank" rel="noreferrer" @click="trackMenuClick('Breakbeat Generator', 'https://breaks.davebokil.com/')">Breakbeat Generator</a>
          </div>
        </div>
        <a href="mailto:bokild@gmail.com" @click="trackMenuClick('Contact', 'mailto:bokild@gmail.com')">Contact</a>
      </div>
    </div>
    <div class="content">
      <h1 class="content__title"><span>Dave Bokil</span></h1>
      <h2 class="content__title__em"><em>Digital Product Development & Innovation</em></h2>
      <p class="content__text">{{ description }}</p>
      <p class="content__text">
        I am currently Director of Digital Products at the
        <a href="https://www.nbpa.com/" target="_blank" rel="noreferrer">National Basketball Players Association</a>
      </p>
    </div>
  </main>
</template>
