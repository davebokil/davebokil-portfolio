<script setup>
// The blinking psychedelic eye from /psych. Renders an SVG <g> in the 1000-unit
// coordinate space used by psych.vue (eye centred at 500,470, roughly x 230–770, y 270–670),
// so it can sit inside any <svg> — use viewBox="230 270 540 400" to frame it on its own.
const props = defineProps({
  iris: { type: Object, default: () => ({ x: 0, y: 0 }) },
  colors: {
    type: Object,
    default: () => ({
      red: "#e1262c",
      green: "#8dc63f",
      blue: "#2f8fd8",
      pink: "#f4a6b8",
      cream: "#fdf3e1",
    }),
  },
})
const clipId = `sclera-clip-${useId()}`
</script>

<template>
  <g class="eye" transform="rotate(-8 500 470)">
    <defs>
      <clipPath :id="clipId">
        <path d="M 300 470 C 400 330, 600 330, 700 470 C 600 610, 400 610, 300 470 Z" />
      </clipPath>
    </defs>
    <g class="eye__lid">
      <!-- red outer band, pink lid, sclera -->
      <path d="M 240 470 C 370 280, 630 280, 760 470 C 630 660, 370 660, 240 470 Z" :fill="props.colors.red" :stroke="props.colors.green" stroke-width="10" />
      <path d="M 265 470 C 385 305, 615 305, 735 470 C 615 635, 385 635, 265 470 Z" :fill="props.colors.pink" stroke="#1a0d0d" stroke-width="4" />
      <path d="M 300 470 C 400 330, 600 330, 700 470 C 600 610, 400 610, 300 470 Z" :fill="props.colors.cream" stroke="#1a0d0d" stroke-width="4" />

      <g :clip-path="`url(#${clipId})`">
        <g :style="{ transform: `translate(${props.iris.x}px, ${props.iris.y}px)` }" class="eye__iris">
          <circle cx="500" cy="470" r="112" :fill="props.colors.blue" stroke="#1a0d0d" stroke-width="4" />
          <circle cx="500" cy="470" r="94" :fill="props.colors.green" />
          <circle cx="500" cy="470" r="86" fill="#120a0a" />
          <g class="eye__wedge">
            <path d="M 500 470 L 500 384 A 86 86 0 0 1 586 470 Z" :fill="props.colors.green" transform="rotate(90 500 470)" />
          </g>
          <!-- tiny eye within -->
          <g transform="translate(500 470)">
            <ellipse rx="22" ry="12" :fill="props.colors.cream" stroke="#120a0a" stroke-width="2" />
            <circle r="8" :fill="props.colors.blue" />
            <circle r="3.5" fill="#120a0a" />
            <path d="M -24 -8 C -12 -30, 18 -30, 26 -10 C 14 -18, -6 -20, -24 -8 Z" :fill="props.colors.red" />
          </g>
        </g>
      </g>
    </g>
  </g>
</template>

<style scoped>
.eye__lid {
  transform-box: fill-box;
  transform-origin: center;
  animation: blink 7s infinite;
}
@keyframes blink {
  0%, 92%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(0.06); }
}
.eye__iris {
  transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.eye__wedge {
  transform-box: view-box;
  transform-origin: 500px 470px;
  animation: spin 12s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .eye__lid,
  .eye__wedge {
    animation: none;
  }
}
</style>
