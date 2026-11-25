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
  link: [
    { rel: "canonical", href: siteUrl },
  ],
})

// --- Hovering a letter repaints the page in a soft, mid-tone colour
const DEFAULT_BG = "peachpuff"
const letters = [
  { c: "D", bg: "#f7c5bb" }, // blush
  { c: "A", bg: "#f3dc9c" }, // butter
  { c: "V", bg: "#c6dfc1" }, // sage
  { c: "E", bg: "#c3d6ea" }, // powder blue
  { c: "B", bg: "#dccbe8" }, // lilac
  { c: "O", bg: "#b8e0d6" }, // mint
  { c: "K", bg: "#f2c4d6" }, // rose
  { c: "I", bg: "#e6d3b3" }, // oat
  { c: "L", bg: "#f6c9a4" }, // apricot
]
const bg = ref(DEFAULT_BG)

// --- Idle nudge: every few seconds a random letter wiggles to invite a hover.
// Stops once the visitor has hovered a letter (they've found it).
const nudged = ref(-1)
const interacted = ref(false)
let nudgeTimer = 0
let nudgeResetTimer = 0
function scheduleNudge() {
  nudgeTimer = setTimeout(() => {
    if (interacted.value) return
    let i
    do i = Math.floor(Math.random() * letters.length)
    while (i === nudged.value)
    nudged.value = i
    nudgeResetTimer = setTimeout(() => (nudged.value = -1), 500)
    scheduleNudge()
  }, 2500 + Math.random() * 3000)
}
function onLetterEnter(l) {
  bg.value = l.bg
  interacted.value = true
  nudged.value = -1
}
onMounted(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  scheduleNudge()
})
onBeforeUnmount(() => {
  clearTimeout(nudgeTimer)
  clearTimeout(nudgeResetTimer)
})

// --- Fit the wordmark and tagline exactly to the viewport width
const wordmark = ref(null)
const tagline = ref(null)
// Fonts leave a little empty space (side bearing) beside the first and last letters,
// so fitting the text box alone leaves visible gaps at the edges. Measure the actual
// ink of the first/last glyphs with a canvas and fit the ink to the width instead.
let measureCtx = null
function inkGaps(el) {
  const text = el.textContent.trim()
  if (!text) return { left: 0, right: 0 }
  const cs = getComputedStyle(el)
  measureCtx ||= document.createElement("canvas").getContext("2d")
  measureCtx.font = `${cs.fontStyle} ${cs.fontWeight} 100px ${cs.fontFamily}`
  const first = measureCtx.measureText(text[0])
  const last = measureCtx.measureText(text[text.length - 1])
  return {
    left: -first.actualBoundingBoxLeft, // empty space before the first glyph's ink
    right: last.width - last.actualBoundingBoxRight, // empty space after the last glyph's ink
  }
}
function fitToWidth(el, fill = 1) {
  if (!el) return
  el.style.marginLeft = "0px"
  el.style.fontSize = "100px"
  const gaps = inkGaps(el)
  const inkWidth = el.scrollWidth - gaps.left - gaps.right
  const scale = (el.parentElement.clientWidth * fill) / inkWidth
  el.style.fontSize = `${100 * scale}px`
  el.style.marginLeft = `${-gaps.left * scale}px` // pull the first glyph's ink flush left
}
function fitAll() {
  fitToWidth(wordmark.value)
  fitToWidth(tagline.value, 0.97) // italic: a touch narrower so the slant doesn't crowd the edge
}
onMounted(async () => {
  fitAll()
  await document.fonts?.ready
  fitAll()
  window.addEventListener("resize", fitAll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener("resize", fitAll))
</script>

<template>
  <main class="home" :style="{ backgroundColor: bg }">
    <SiteNav />
    <div class="wordmark-wrap">
      <h1 ref="wordmark" class="wordmark" aria-label="Dave Bokil">
        <span
          v-for="(l, i) in letters"
          :key="i"
          class="wordmark__letter"
          :class="{ 'is-nudged': nudged === i }"
          aria-hidden="true"
          @pointerenter="onLetterEnter(l)"
        >{{ l.c }}</span>
      </h1>
    </div>
    <div class="content">
      <!-- <h2 ref="tagline" class="content__title__em"><em>Technical Product Owner</em></h2> -->
      <!-- <p class="content__text">{{ description }}</p> -->
      <p class="content__text">Formerly a Software Engineer. <br>Currently <i>Director of Digital Products</i> at the
        <a href="https://www.nbpa.com/" target="_blank" rel="noreferrer">National Basketball Players Association</a>.</p>
    </div>
    <PageCurl to="/psych" :bg="bg" />
  </main>
</template>

<style scoped>
/* Peachpuff canvas (recoloured by the wordmark letters), black type, one massive wordmark as the floor of the page */
.home {
  min-height: 100vh;
  min-height: 100dvh; /* mobile: match the visible screen so the page doesn't scroll under the browser bar */
  overflow-x: clip; /* trailing side bearing of the last glyph may extend past the edge */
  display: flex;
  flex-direction: column;
  background-color: peachpuff;
  transition: background-color 0.5s ease;
  color: #000;
}

/* --- Type hierarchy (per brief): 900 is reserved for the wordmark; everything below is 400,
   tracked -0.015em. Three steps: wordmark (shout) > tagline (full-width 400) > bio (31px heading).
   Spacing uses the 20px element gap. */
.content {
  flex: none;
  width: auto; /* main.css sets 100vw, which includes the scrollbar and overflows */
  justify-content: flex-start;
  min-height: 0;
  padding: 20px 0 40px;
}

.content__title__em {
  font-family: inherit;
  font-size: 3.3vw; /* pre-JS estimate; sized in JS to span the full width */
  line-height: 1;
  letter-spacing: -0.015em;
  text-transform: none;
  white-space: nowrap;
  max-width: none;
  margin: 0 0 20px;
}

.content__title__em,
.content__title__em em {
  font-style: italic;
  font-weight: 400;
}

.content__text {
  color: #000;
  font-weight: 400;
  font-size: clamp(19px, 2.15vw, 31px);
  line-height: 1.2;
  letter-spacing: -0.015em;
  margin: 0;
}

/* Keep the two-weight binary: no italics or bold in the body copy */
.content__text i {
  font-style: normal;
}

.content a {
  color: #000;
  font-style: normal;
  font-weight: 400;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.12em;
}

.content a:hover {
  color: #555;
}

/* Wordmark: Inter Black, sized in JS to span the full viewport width */
.wordmark-wrap {
  margin-top: auto; /* push wordmark + text to the bottom of the viewport */
  width: 100%;
  overflow: hidden;
}

.wordmark {
  display: inline-block;
  margin: 0;
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: 14.5vw; /* pre-JS estimate */
  line-height: 0.8;
  letter-spacing: -0.015em;
  white-space: nowrap;
  color: #000;
  padding-bottom: 0.02em;
}

/* Each letter wiggles a little on hover to hint that it does something */
.wordmark__letter {
  display: inline-block;
  cursor: default;
  transform-origin: 50% 80%;
}

.wordmark__letter:hover,
.wordmark__letter.is-nudged {
  animation: wiggle 0.45s ease-in-out;
}

@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0) translateY(0);
  }
  20% {
    transform: rotate(-4deg) translateY(-1%);
  }
  40% {
    transform: rotate(3deg);
  }
  60% {
    transform: rotate(-2deg);
  }
  80% {
    transform: rotate(1deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wordmark__letter:hover,
  .wordmark__letter.is-nudged {
    animation: none;
  }
}

/* Nav: black on the light background */
.home :deep(.frame a),
.home :deep(.frame__links__dropdown-trigger) {
  color: #000;
}

.home :deep(.frame a:hover),
.home :deep(.frame__links__dropdown-trigger:hover) {
  color: #555;
}

.home :deep(.frame__links__submenu::before),
.home :deep(.frame__links__submenu-item::after),
.home :deep(.frame__links__submenu-item::before) {
  background: rgba(0, 0, 0, 0.5);
}
</style>
