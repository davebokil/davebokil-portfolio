<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const title = "Dave Bokil - Technical Product Growth, Innovation, and Strategy"
const description =
  "Dave Bokil is a Product leader with over a decade of experience taking technical products from 0 to 1 and managing interconnected portfolios across engineering, design, and cross-functional stakeholders. He brings rare fluency across both the technical and business dimensions of product, from hands-on API architecture to executive stakeholder communication."
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
</script>

<template>
  <main>
    <div class="frame">
      <div class="frame__links">
        <a href="https://www.linkedin.com/in/davebokil/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/davebokil" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://frippertripper.davebokil.com/" target="_blank" rel="noreferrer">Frippertripper</a>
        <a href="https://breaks.davebokil.com/" target="_blank" rel="noreferrer">Breaks</a>
        <a href="mailto:bokild@gmail.com">Contact</a>
      </div>
    </div>
    <div class="content">
      <h1 class="content__title"><span>Dave Bokil</span></h1>
      <h2 class="content__title__em"><em>Product Development & Innovation</em></h2>
      <p class="content__text">{{ description }}</p>
      <p class="content__text">
        He is currently Director of Digital Products at the
        <a href="https://www.nbpa.com/" target="_blank" rel="noreferrer">National Basketball Player's Association</a>
      </p>
    </div>
  </main>
</template>
