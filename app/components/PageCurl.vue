<script setup>
// Bottom-right page curl. The corner of the page is folded back at 45°, revealing the
// /psych page (red + the eye) underneath. Hover lifts it a bit more; dragging the corner
// peels it back, and letting go past a threshold (or a plain click) turns the page and
// navigates to `to`.
const props = defineProps({
  to: { type: String, default: "/psych" },
  bg: { type: String, default: "peachpuff" }, // colour of the page being turned
  revealBg: { type: String, default: "#e1262c" }, // colour of the page underneath
})

const IDLE = 72
const HOVER = 150
const size = ref(IDLE) // side of the folded square, in px
const vw = ref(1200)
const vh = ref(800)
const hovering = ref(false)
const dragging = ref(false)
const turning = ref(false)

// Eye sits in the middle of the revealed triangle, but never drifts past the screen centre
const eyeStyle = computed(() => {
  const s = size.value
  const w = Math.min(s * 0.72, Math.min(vw.value, vh.value) * 0.6)
  const h = w * (400 / 540)
  const cx = Math.max(vw.value / 2, vw.value - s * 0.33) - (vw.value - s)
  const cy = Math.max(vh.value / 2, vh.value - s * 0.31) - (vh.value - s)
  return { width: `${w}px`, height: `${h}px`, left: `${cx - w / 2}px`, top: `${cy - h / 2}px` }
})

function onResize() {
  vw.value = window.innerWidth
  vh.value = window.innerHeight
}

// --- Drag: the fold follows the pointer (the folded corner tip lands under the cursor)
let startX = 0
let startY = 0
let moved = false
function onDown(e) {
  if (turning.value) return
  dragging.value = true
  moved = false
  startX = e.clientX
  startY = e.clientY
  e.currentTarget.setPointerCapture(e.pointerId)
}
function onMove(e) {
  if (!dragging.value) return
  if (Math.abs(e.clientX - startX) + Math.abs(e.clientY - startY) > 6) moved = true
  const s = ((vw.value - e.clientX) + (vh.value - e.clientY)) / 2
  size.value = Math.max(IDLE, s)
}
function onUp() {
  if (!dragging.value) return
  dragging.value = false
  const threshold = Math.min(vw.value, vh.value) * 0.35
  if (!moved || size.value > threshold) turnPage()
  else size.value = hovering.value ? HOVER : IDLE
}

// --- Turn: sweep the fold across the whole screen, then go
let turnTimer = 0
function turnPage() {
  if (turning.value) return
  turning.value = true
  size.value = (vw.value + vh.value) * 1.05
  turnTimer = setTimeout(() => navigateTo(props.to), 650)
}

function onEnter() {
  hovering.value = true
  if (!dragging.value && !turning.value) size.value = HOVER
}
function onLeave() {
  hovering.value = false
  if (!dragging.value && !turning.value) size.value = IDLE
}

onMounted(() => {
  onResize()
  window.addEventListener("resize", onResize, { passive: true })
})
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize)
  clearTimeout(turnTimer)
})
</script>

<template>
  <button
    type="button"
    class="curl"
    :class="{ 'is-idle': !hovering && !dragging && !turning, 'is-dragging': dragging }"
    :style="{ '--s': `${size}px`, '--page': bg, '--reveal': revealBg }"
    aria-label="Turn the page"
    @pointerenter="onEnter"
    @pointerleave="onLeave"
    @pointerdown="onDown"
    @pointermove="onMove"
    @pointerup="onUp"
    @pointercancel="onUp"
    @keydown.enter.prevent="turnPage"
    @keydown.space.prevent="turnPage"
  >
    <!-- What's under the page -->
    <span class="curl__reveal" aria-hidden="true">
      <!-- Slot gets the positioned box style; defaults to the psych eye -->
      <slot :box-style="eyeStyle">
        <svg class="curl__eye" :style="eyeStyle" viewBox="230 270 540 400">
          <PsychEye />
        </svg>
      </slot>
    </span>
    <!-- The back of the folded-over corner -->
    <span class="curl__flap-shadow" aria-hidden="true">
      <span class="curl__flap" />
    </span>
  </button>
</template>

<style scoped>
.curl {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 50;
  width: var(--s);
  height: var(--s);
  padding: 0;
  border: 0;
  background: none;
  cursor: grab;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  transition: width 0.6s cubic-bezier(0.3, 0.7, 0.2, 1), height 0.6s cubic-bezier(0.3, 0.7, 0.2, 1);
  /* only the folded square is interactive, not the empty box around it */
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);
}

.curl.is-dragging {
  cursor: grabbing;
  transition: none;
}

/* Gentle "breathing" lift while idle so it reads as peelable */
.curl.is-idle {
  animation: breathe 3.2s ease-in-out infinite;
}
@keyframes breathe {
  0%, 100% { width: 72px; height: 72px; }
  50% { width: 92px; height: 92px; }
}

.curl:focus-visible {
  outline: 2px solid #000;
  outline-offset: -4px;
}

/* Lower-right triangle: the page underneath */
.curl__reveal {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    linear-gradient(135deg, transparent 50%, rgba(0, 0, 0, 0.35) 50%, transparent 62%),
    var(--reveal);
  clip-path: polygon(100% 0, 100% 100%, 0 100%);
}

.curl__eye {
  position: absolute;
  overflow: visible;
}

/* Upper-left triangle: the back of the page, folded over */
.curl__flap-shadow {
  position: absolute;
  inset: 0;
  filter: drop-shadow(-3px -3px 6px rgba(0, 0, 0, 0.25));
}

.curl__flap {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 35%, rgba(0, 0, 0, 0.12) 50%),
    var(--page);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  transition: background-color 0.5s ease;
}

@media (prefers-reduced-motion: reduce) {
  .curl.is-idle {
    animation: none;
  }
}
</style>
