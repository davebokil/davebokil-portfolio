<script setup>
// Mockup homepage — psychedelic poster treatment. Route: /psych

useHead({
  title: "Dave Bokil",
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" },
  ],
  meta: [{ name: "robots", content: "noindex" }],
})

// Seeded RNG so server and client render identical markup (no hydration mismatch)
function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const rand = mulberry32(1966)
const r = (min, max) => min + rand() * (max - min)
const pick = (arr) => arr[Math.floor(rand() * arr.length)]

const C = {
  red: "#e1262c",
  green: "#8dc63f",
  yellow: "#f7d117",
  purple: "#9b86c9",
  blue: "#2f8fd8",
  pink: "#f4a6b8",
  cream: "#fdf3e1",
  orange: "#f58a1f",
}
const dotColors = [C.yellow, C.purple, C.blue, C.red, C.pink, C.cream, C.orange, C.green]

// --- Flowing bands: wide sine waves that slide one wavelength on loop (seamless)
const bands = Array.from({ length: 8 }, (_, i) => {
  const wl = r(320, 520)
  const amp = r(35, 85)
  const y0 = -80 + i * 150 + r(-30, 30)
  const pts = []
  for (let x = -1200; x <= 2200; x += 20) {
    pts.push(`${x},${(y0 + amp * Math.sin((x / wl) * Math.PI * 2)).toFixed(1)}`)
  }
  return {
    d: "M" + pts.join(" L"),
    angle: r(-28, 22),
    width: r(48, 78),
    wl,
    dur: r(14, 26),
    reverse: rand() > 0.5,
  }
})

// --- Spirals that slowly turn in the corners
function spiralPath(turns, gap) {
  const pts = []
  for (let t = 0; t <= turns * Math.PI * 2; t += 0.12) {
    const rad = 6 + (gap / (Math.PI * 2)) * t
    pts.push(`${(rad * Math.cos(t)).toFixed(1)},${(rad * Math.sin(t)).toFixed(1)}`)
  }
  return "M" + pts.join(" L")
}
const spirals = [
  { x: 90, y: 110, turns: 3.2, gap: 70, dur: 40 },
  { x: 930, y: 860, turns: 3.5, gap: 72, dur: 48 },
  { x: 960, y: 140, turns: 2.4, gap: 66, dur: 36 },
  { x: 60, y: 900, turns: 2.6, gap: 64, dur: 44 },
].map((s) => ({ ...s, d: spiralPath(s.turns, s.gap) }))

// --- Polka dots: concentric rings, ovals, bobbing and pulsing
const dots = []
let guard = 0
while (dots.length < 90 && guard++ < 2000) {
  const x = r(0, 1000)
  const y = r(0, 1000)
  // keep the centre (eye + name) clear-ish
  const dx = (x - 500) / 360
  const dy = (y - 500) / 330
  if (dx * dx + dy * dy < 1) continue
  const size = r(10, 34)
  if (dots.some((d) => Math.hypot(d.x - x, d.y - y) < d.size + size + 6)) continue
  const rings = rand() < 0.55 ? 2 : rand() < 0.5 ? 3 : 1
  const fills = []
  let prev = null
  for (let k = 0; k < rings; k++) {
    let c = pick(dotColors)
    while (c === prev) c = pick(dotColors)
    fills.push(c)
    prev = c
  }
  dots.push({
    x,
    y,
    size,
    oval: rand() < 0.3 ? r(0.55, 0.8) : 1,
    rot: r(0, 180),
    fills,
    bob: r(4, 9).toFixed(2),
    bobDelay: (-r(0, 9)).toFixed(2),
    pulse: r(2.5, 6).toFixed(2),
    pulseDelay: (-r(0, 6)).toFixed(2),
    spin: r(8, 20).toFixed(2),
    dir: rand() > 0.5 ? "normal" : "reverse",
  })
}

// --- Interaction: iris follows the cursor, background parallax
const iris = ref({ x: 0, y: 0 })
const par = ref({ x: 0, y: 0 })
let raf = 0
function onMove(e) {
  const p = e.touches ? e.touches[0] : e
  const nx = p.clientX / window.innerWidth - 0.5
  const ny = p.clientY / window.innerHeight - 0.5
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    iris.value = { x: nx * 70, y: ny * 40 }
    par.value = { x: nx * -24, y: ny * -24 }
  })
}
// --- Soundtrack: official YouTube player (full track). Browsers block audio until the
// visitor interacts, so we try to autoplay and otherwise start on the first click/tap/key.
const YT_VIDEO = "YIVpHNEPzDM" // "You're Gonna Miss Me" — 13th Floor Elevators (Topic)
const playerEl = ref(null)
const playing = ref(false)
let player = null
const GESTURES = ["pointerdown", "keydown", "touchstart"]

function startAudio() {
  if (!player || typeof player.playVideo !== "function") return
  if (player.isMuted()) player.unMute()
  player.setVolume(80)
  player.playVideo()
}
function onFirstGesture() {
  startAudio()
  GESTURES.forEach((g) => window.removeEventListener(g, onFirstGesture))
}

function loadYouTubeApi() {
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT)
  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve(window.YT)
    }
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      document.head.appendChild(tag)
    }
  })
}

onMounted(async () => {
  window.addEventListener("pointermove", onMove, { passive: true })
  GESTURES.forEach((g) => window.addEventListener(g, onFirstGesture, { passive: true }))

  const YT = await loadYouTubeApi()
  if (!playerEl.value) return
  player = new YT.Player(playerEl.value, {
    videoId: YT_VIDEO,
    width: "100%",
    height: "100%",
    playerVars: { autoplay: 1, playsinline: 1, rel: 0, loop: 1, playlist: YT_VIDEO },
    events: {
      onReady: () => startAudio(), // works only if the browser already allows sound
      onStateChange: (e) => {
        playing.value = e.data === YT.PlayerState.PLAYING && !player.isMuted()
      },
    },
  })
})
onBeforeUnmount(() => {
  window.removeEventListener("pointermove", onMove)
  GESTURES.forEach((g) => window.removeEventListener(g, onFirstGesture))
  cancelAnimationFrame(raf)
  player?.destroy?.()
})
</script>

<template>
  <main class="psych">
    <SiteNav />

    <!-- Background: bands, spirals, dots (fills viewport) -->
    <svg
      class="psych__bg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      :style="{ transform: `translate(${par.x}px, ${par.y}px) scale(1.06)` }"
    >
      <rect x="-200" y="-200" width="1400" height="1400" :fill="C.red" />

      <g v-for="(b, i) in bands" :key="'b' + i" :transform="`rotate(${b.angle} 500 500)`">
        <g
          class="band"
          :style="{
            '--wl': `${-b.wl}px`,
            animationDuration: `${b.dur}s`,
            animationDirection: b.reverse ? 'reverse' : 'normal',
          }"
        >
          <path :d="b.d" fill="none" :stroke="C.green" :stroke-width="b.width" stroke-linecap="round" />
          <path :d="b.d" fill="none" :stroke="C.red" :stroke-width="b.width * 0.16" stroke-linecap="round" />
        </g>
      </g>

      <g v-for="(s, i) in spirals" :key="'s' + i" :transform="`translate(${s.x} ${s.y})`">
        <g class="spiral" :style="{ animationDuration: `${s.dur}s` }">
          <path :d="s.d" fill="none" :stroke="C.green" stroke-width="40" stroke-linecap="round" />
          <path :d="s.d" fill="none" :stroke="C.red" stroke-width="7" stroke-linecap="round" />
        </g>
      </g>

      <g v-for="(d, i) in dots" :key="'d' + i" :transform="`translate(${d.x} ${d.y})`">
        <g class="dot-bob" :style="{ animationDuration: `${d.bob}s`, animationDelay: `${d.bobDelay}s` }">
          <g
            class="dot-pulse"
            :style="{ animationDuration: `${d.pulse}s`, animationDelay: `${d.pulseDelay}s` }"
          >
            <g
              class="dot-spin"
              :style="{ animationDuration: `${d.spin}s`, animationDirection: d.dir }"
            >
              <ellipse
                v-for="(f, k) in d.fills"
                :key="k"
                cx="0"
                cy="0"
                :rx="d.size * (1 - k * 0.32)"
                :ry="d.size * d.oval * (1 - k * 0.32)"
                :fill="f"
                :transform="`rotate(${d.rot})`"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>

    <!-- Foreground: eye + name (always fully visible) -->
    <svg class="psych__fg" viewBox="0 0 1000 860" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="psych-title">
      <title id="psych-title">Dave Bokil</title>
      <defs>
        <path id="arc-top" d="M 140 400 C 190 90, 810 90, 860 400" />
        <path id="arc-bottom" d="M 120 540 C 200 880, 800 880, 880 540" />

        <filter id="melt" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="13" result="noise">
            <animate attributeName="baseFrequency" dur="9s" repeatCount="indefinite"
              values="0.012 0.02; 0.018 0.012; 0.012 0.02" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <!-- Name -->
      <g class="name" filter="url(#melt)">
        <text class="name__halo">
          <textPath href="#arc-top" startOffset="50%" text-anchor="middle">DAVE</textPath>
        </text>
        <text class="name__halo">
          <textPath href="#arc-bottom" startOffset="50%" text-anchor="middle">BOKIL</textPath>
        </text>
        <text class="name__text">
          <textPath href="#arc-top" startOffset="50%" text-anchor="middle">DAVE</textPath>
        </text>
        <text class="name__text">
          <textPath href="#arc-bottom" startOffset="50%" text-anchor="middle">BOKIL</textPath>
        </text>
      </g>

      <!-- Eye (shared with the homepage page-curl) -->
      <PsychEye :iris="iris" :colors="C" />
    </svg>

    <!-- Page curl back to the homepage: peachpuff + the wordmark underneath -->
    <PageCurl to="/" bg="#e1262c" reveal-bg="peachpuff">
      <template #default="{ boxStyle }">
        <span class="curl-home" :style="boxStyle">
          <span class="curl-home__word" :style="{ fontSize: `calc(${boxStyle.width} * 0.27)` }">DAVE<br />BOKIL</span>
        </span>
      </template>
    </PageCurl>

    <!-- Soundtrack: official YouTube player (must stay visible per YouTube's terms) -->
    <div class="psych__player">
      <div class="psych__player-video"><div ref="playerEl" /></div>
      <p class="psych__player-label">
        <span v-if="playing">♪ Now playing</span>
        <span v-else>♪ Click anywhere for sound</span>
        <small>You're Gonna Miss Me · 13th Floor Elevators</small>
      </p>
    </div>
  </main>
</template>

<style scoped>
.psych {
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  background: #e1262c;
}

.psych__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.psych__fg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 4vh 16px 10vh;
  box-sizing: border-box;
  pointer-events: none;
}

/* --- Band flow --- */
.band {
  animation: flow linear infinite;
}
@keyframes flow {
  from { transform: translateX(0); }
  to { transform: translateX(var(--wl)); }
}

.spiral {
  animation: spin linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* --- Dots --- */
.dot-bob,
.dot-pulse,
.dot-spin {
  transform-box: fill-box;
  transform-origin: center;
}
.dot-bob {
  animation: bob ease-in-out infinite alternate;
}
.dot-pulse {
  animation: pulse ease-in-out infinite alternate;
}
.dot-spin {
  animation: spin linear infinite;
}
@keyframes bob {
  0% { transform: translate(0, 0); }
  50% { transform: translate(6px, -10px); }
  100% { transform: translate(-5px, 6px); }
}
@keyframes pulse {
  from { transform: scale(0.88); }
  to { transform: scale(1.12); }
}

/* --- Name --- */
.name__halo,
.name__text {
  font-family: "Shrikhand", "Cooper Black", serif;
  font-size: 190px;
  letter-spacing: 4px;
  stroke-linejoin: round;
}
.name__halo {
  fill: #8dc63f;
  stroke: #8dc63f;
  stroke-width: 56px;
}
.name__text {
  fill: #e1262c;
  stroke: #120a0a;
  stroke-width: 4px;
  paint-order: stroke fill;
}

/* --- Page curl back home: the homepage wordmark peeking out --- */
.curl-home {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.curl-home__word {
  font-family: var(--font-sans);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.015em;
  color: #000;
  text-align: left;
}

/* --- Player --- */
.psych__player {
  position: absolute;
  left: 16px;
  bottom: 16px;
  width: 200px;
  background: #120a0a;
  border: 3px solid #8dc63f;
  border-radius: 18px;
  box-shadow: 4px 4px 0 #120a0a;
  overflow: hidden;
  z-index: 10;
}
.psych__player-video {
  width: 200px;
  height: 200px;
}
.psych__player-video :deep(iframe) {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
.psych__player-label {
  margin: 0;
  padding: 0.55rem 0.75rem 0.65rem;
  font-family: "Shrikhand", "Cooper Black", serif;
  font-size: 0.95rem;
  line-height: 1.2;
  color: #f7d117;
}
.psych__player-label small {
  display: block;
  margin-top: 0.15rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 0.7rem;
  color: #fdf3e1;
  opacity: 0.85;
}

/* --- Nav: restyled to match the poster lettering --- */
.psych :deep(.frame) {
  z-index: 1000;
}
.psych :deep(.frame__links a),
.psych :deep(.frame__links__dropdown-trigger) {
  font-family: "Shrikhand", "Cooper Black", serif;
  font-weight: 400;
  font-size: 1.15rem;
  letter-spacing: 0.5px;
  color: #f7d117;
  transition: color 0.15s ease;
}
.psych :deep(.frame__links a:hover),
.psych :deep(.frame__links a:focus),
.psych :deep(.frame__links__dropdown-trigger:hover),
.psych :deep(.frame__links__dropdown-trigger:focus) {
  color: #8dc63f;
}
/* Dark panel behind the dropdowns so they stay readable over the dots */
.psych :deep(.frame__links__submenu) {
  margin-top: 0.75rem;
  padding: 1rem 1.25rem;
  background: #120a0a;
  border-radius: 18px;
}
.psych :deep(.frame__links__dropdown:hover .frame__links__submenu),
.psych :deep(.frame__links__dropdown:focus-within .frame__links__submenu) {
  max-height: 40rem;
}
.psych :deep(.frame__links__submenu::before),
.psych :deep(.frame__links__submenu-item::before),
.psych :deep(.frame__links__submenu-item::after) {
  display: none;
}
.psych :deep(.frame__links__submenu-item) {
  font-size: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .band,
  .spiral,
  .dot-bob,
  .dot-pulse,
  .dot-spin {
    animation: none;
  }
  .name {
    filter: none;
  }
}
</style>
