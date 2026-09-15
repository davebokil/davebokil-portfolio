<script setup>
defineProps({
  solid: { type: Boolean, default: false },
})

const { trackEvent } = useTrackEvent()

function trackMenuClick(label, destination) {
  trackEvent("menu_click", "navigation", label, destination)
}
</script>

<template>
  <div class="frame" :class="{ 'frame--solid': solid }">
    <div class="frame__links">
      <div class="frame__links__dropdown">
        <button type="button" class="frame__links__dropdown-trigger" aria-haspopup="true" @click="trackMenuClick('Recent Works (menu open)', null)">
          Recent Works
        </button>
        <div class="frame__links__submenu">
          <a class="frame__links__submenu-item" href="https://apps.apple.com/sk/app/nbpa-portal/id6748317926" target="_blank" rel="noreferrer" @click="trackMenuClick('NBPA Portal App', 'https://apps.apple.com/sk/app/nbpa-portal/id6748317926')">NBPA Portal iOS App</a>
          <a class="frame__links__submenu-item" href="http://poeltl.nbpa.com/" target="_blank" rel="noreferrer" @click="trackMenuClick('Poeltl: NBA Wordle', 'http://poeltl.nbpa.com/')">Poeltl: NBA Wordle</a>
          <a class="frame__links__submenu-item" href="https://www.hashtagsports.com/awards/shortlist-2022/nbpa-refurbishment-of-rucker-park-harlem" target="_blank" rel="noreferrer" @click="trackMenuClick('Rucker Park', 'https://www.hashtagsports.com/awards/shortlist-2022/nbpa-refurbishment-of-rucker-park-harlem')">NBPA REFURBISHMENT OF RUCKER PARK, HARLEM</a>
          <a class="frame__links__submenu-item" href="https://www.hashtagsports.com/awards/shortlist-2022/nbpa-450-gives-its-better-to-click-receive" target="_blank" rel="noreferrer" @click="trackMenuClick('Rucker Park', 'https://www.hashtagsports.com/awards/shortlist-2022/nbpa-450-gives-its-better-to-click-receive')">NBPA 450 Gives: It's Better to Click & Receive</a>
        </div>
      </div>
      <div class="frame__links__dropdown">
        <button type="button" class="frame__links__dropdown-trigger" aria-haspopup="true" @click="trackMenuClick('Side Projects (menu open)', null)">
          Other Projects 🎹
        </button>
        <div class="frame__links__submenu">
          <a class="frame__links__submenu-item" href="/reve-model-1" @click="trackMenuClick('REVE Model 1 Case Study', '/reve-model-1')">REVE Model 1 iOS App</a>
          <a class="frame__links__submenu-item" href="https://frippertripper.davebokil.com/" target="_blank" rel="noreferrer" @click="trackMenuClick('Web Based Synthesizer', 'https://frippertripper.davebokil.com/')">FripperTripper Web Synth</a>
          <a class="frame__links__submenu-item" href="https://breaks.davebokil.com/" target="_blank" rel="noreferrer" @click="trackMenuClick('Breakbeat Generator', 'https://breaks.davebokil.com/')">Breakbeat Generator</a>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/davebokil/" target="_blank" rel="noreferrer" @click="trackMenuClick('LinkedIn', 'https://www.linkedin.com/in/davebokil/')">LinkedIn</a>
      <a href="https://github.com/davebokil" target="_blank" rel="noreferrer" @click="trackMenuClick('GitHub', 'https://github.com/davebokil')">GitHub</a>
      <a href="/contact" @click="trackMenuClick('Contact', '/contact')">Contact</a>
    </div>
  </div>
</template>

<style scoped>
.frame--solid {
  background: #000;
}

@media screen and (min-width: 53em) {
  .frame--solid {
    position: static;
    height: auto;
  }
}
</style>
