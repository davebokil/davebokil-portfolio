<script setup>
const description =
  "Dave Bokil is a Product leader with over a decade of experience taking technical products from 0 to 1 and managing interconnected portfolios across engineering, design, and cross-functional stakeholders. He brings rare fluency across both the technical and business dimensions of product, from hands-on API architecture to executive stakeholder communication."

useSeoMeta({
  title: "Dave Bokil - Technical Product Growth, Innovation, and Strategy ",
  description,
})
</script>

<template>
  <main>
    <div class="frame">
      <div class="frame__links">
        <a href="https://www.linkedin.com/in/davebokil/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/davebokil" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:bokild@gmail.com">Contact</a>
      </div>
    </div>
    <div class="content">
      <h2 class="content__title"><span>Dave Bokil</span></h2>
      <h3 class="content__title__em"><em>Product Development & Innovation</em></h3>
      <h3>{{ description }}</h3>
      <h3>
        He is currently Director of Digital Products at the
        <a href="https://www.nbpa.com/" target="_blank" rel="noreferrer">National Basketball Player's Association</a>
      </h3>
    </div>
  </main>
</template>
