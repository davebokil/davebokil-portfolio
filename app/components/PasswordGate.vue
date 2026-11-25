<script setup>
const props = defineProps({
  pageId: { type: String, required: true },
})

const unlocked = useCookie('gate_unlock', { maxAge: 15552000 })
const { trackEvent } = useTrackEvent()

const password = ref('')
const submitting = ref(false)
const errorMessage = ref('')
const hasTrackedView = ref(false)

const accessEmail = ref('')
const requestingAccess = ref(false)
const accessError = ref('')
const accessRequested = ref(false)

onMounted(() => {
  if (!unlocked.value && !hasTrackedView.value) {
    hasTrackedView.value = true
    trackEvent('gate_view', props.pageId, null, null)
  }
})

async function handleUnlock() {
  submitting.value = true
  errorMessage.value = ''

  try {
    await $fetch('/api/gate/unlock', {
      method: 'POST',
      body: { password: password.value, pageId: props.pageId },
    })
    unlocked.value = '1'
    password.value = ''
    trackEvent('gate_unlock', props.pageId, 'success', null)
  } catch (error) {
    errorMessage.value = error?.data?.statusMessage || 'Something went wrong. Please try again.'
    trackEvent('gate_attempt', props.pageId, 'fail', null)
  } finally {
    submitting.value = false
  }
}

async function handleRequestAccess() {
  requestingAccess.value = true
  accessError.value = ''

  try {
    await $fetch('/api/gate/request-access', {
      method: 'POST',
      body: { email: accessEmail.value, pageId: props.pageId },
    })
    accessRequested.value = true
    trackEvent('gate_access_request', props.pageId, null, null)
  } catch (error) {
    accessError.value = error?.data?.statusMessage || 'Something went wrong. Please try again.'
  } finally {
    requestingAccess.value = false
  }
}
</script>

<template>
  <div class="gate" :class="{ 'gate--locked': !unlocked }">
    <div class="gate__content" :aria-hidden="!unlocked">
      <slot />
    </div>

    <div v-if="!unlocked" class="gate__overlay">
      <div class="gate__card">
        <form @submit.prevent="handleUnlock">
          <p class="gate__eyebrow">Want to keep reading?</p>
          <h3 class="gate__title">Enter the password to continue</h3>
          <p class="gate__copy">The rest of this case study is password-protected.</p>

          <input
            v-model="password"
            type="password"
            class="gate__input"
            placeholder="Password"
            autocomplete="off"
            :disabled="submitting"
          />

          <button type="submit" class="gate__submit" :disabled="submitting || !password">
            {{ submitting ? 'Checking…' : 'Unlock' }}
          </button>

          <p v-if="errorMessage" class="gate__error">{{ errorMessage }}</p>
        </form>

        <form class="gate__access" @submit.prevent="handleRequestAccess">
          <template v-if="!accessRequested">
            <p class="gate__access-label">Need access? Enter your email address.</p>
            <div class="gate__access-row">
              <input
                v-model="accessEmail"
                type="email"
                class="gate__input gate__input--inline"
                placeholder="you@email.com"
                autocomplete="email"
                :disabled="requestingAccess"
              />
              <button
                type="submit"
                class="gate__submit gate__submit--inline"
                :disabled="requestingAccess || !accessEmail"
              >
                {{ requestingAccess ? 'Sending…' : 'Request' }}
              </button>
            </div>
            <p v-if="accessError" class="gate__error">{{ accessError }}</p>
          </template>
          <p v-else class="gate__access-sent">Thanks — I'll be in touch.</p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gate {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
}

.gate__content {
  grid-column: 1;
  grid-row: 1;
}

.gate--locked .gate__content {
  filter: blur(18px);
  user-select: none;
  pointer-events: none;
}

.gate__overlay {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
  position: sticky;
  top: 30vh;
  z-index: 10;
  display: flex;
  justify-content: center;
}

.gate__card {
  width: 100%;
  max-width: 26rem;
  background: rgba(0, 0, 0, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.6);
}

.gate__eyebrow {
  text-transform: uppercase;
  letter-spacing: -0.015em;
  font-size: 0.8rem;
  opacity: 0.7;
  margin: 0;
}

.gate__title {
  font-family: var(--font-sans);
  font-weight: 900;
  font-size: 1.3rem;
  margin: 0.25rem 0;
}

.gate__copy {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0 0 0.75rem;
}

.gate__input {
  width: 100%;
  font-family: inherit;
  font-size: 1rem;
  color: var(--color-text);
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 0;
  text-align: center;
  margin-bottom: 1.25rem;
}

.gate__input:focus {
  outline: none;
  border-bottom-color: var(--color-text);
}

.gate__input:disabled {
  opacity: 0.5;
}

.gate__submit {
  font-family: inherit;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: -0.015em;
  color: var(--color-text);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.65rem 1.75rem;
  cursor: pointer;
}

.gate__submit:hover:not(:disabled) {
  border-color: var(--color-text);
}

.gate__submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.gate__error {
  color: #ff8a8a;
  font-size: 0.85rem;
  margin: 0.75rem 0 0;
}

.gate__access {
  width: 100%;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.gate__access-label {
  font-size: 0.85rem;
  opacity: 0.8;
  margin: 0 0 0.75rem;
}

.gate__access-row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.gate__input--inline {
  margin-bottom: 0;
  text-align: left;
}

.gate__submit--inline {
  padding: 0.5rem 1rem;
  flex-shrink: 0;
}

.gate__access-sent {
  font-size: 0.85rem;
  opacity: 0.8;
  margin: 0;
}
</style>
