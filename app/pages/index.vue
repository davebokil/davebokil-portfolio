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
</script>

<template>
  <main>
    <SiteNav />
    <div class="content">
      <h1 class="content__title"><span>Dave Bokil</span></h1>
      <h2 class="content__title__em"><em>Technical Product Growth & Innovation</em></h2>
      <!-- <p class="content__text">{{ description }}</p> -->
      <p class="content__text">Currently a Product Director. <br> Formerly a Software Engineer. <br>Now <i>Director of Digital Product</i> at
        <a href="https://www.nbpa.com/" target="_blank" rel="noreferrer">National Basketball Players Association</a>.</p>
    </div>
  </main>
</template>
