<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const pageUrl = `${siteUrl}/contact`

const title = "Contact — Dave Bokil"
const description = "Get in touch with Dave Bokil."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogUrl: pageUrl,
  twitterCard: "summary",
  twitterTitle: title,
  twitterDescription: description,
})

useHead({
  link: [{ rel: "canonical", href: pageUrl }],
})

const form = reactive({ name: "", email: "", message: "" })
const status = ref("idle") // idle | sending | success | error
const errorMessage = ref("")

async function handleSubmit() {
  status.value = "sending"
  errorMessage.value = ""

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: { ...form },
    })
    status.value = "success"
    form.name = ""
    form.email = ""
    form.message = ""
  } catch (error) {
    status.value = "error"
    errorMessage.value = error?.data?.statusMessage || "Something went wrong. Please try again."
  }
}
</script>

<template>
  <main class="policy">
    <div class="policy__wrap">
      <a class="policy__back" href="/">&larr; davebokil.com</a>

      <h1 class="policy__title">Contact</h1>

      <p>
Got a question, a project in mind, or just want to say hello? Drop a message below and I'll get back to you soon.
      </p>

      <form class="policy__form" @submit.prevent="handleSubmit">
        <label class="policy__field">
          <span>Name</span>
          <input v-model="form.name" type="text" name="name" required :disabled="status === 'sending'" />
        </label>
        <label class="policy__field">
          <span>Email</span>
          <input v-model="form.email" type="email" name="email" required :disabled="status === 'sending'" />
        </label>
        <label class="policy__field">
          <span>Message</span>
          <textarea v-model="form.message" name="message" rows="5" required :disabled="status === 'sending'"></textarea>
        </label>

        <button type="submit" class="policy__submit" :disabled="status === 'sending'">
          {{ status === "sending" ? "Sending…" : "Send Message" }}
        </button>

        <p v-if="status === 'success'" class="policy__status policy__status--success">
          Thanks — your message has been sent. I'll get back to you soon.
        </p>
        <p v-if="status === 'error'" class="policy__status policy__status--error">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </main>
</template>

<style scoped>
.policy {
  min-height: 100vh;
  padding: 4rem 5vw 6rem;
  display: flex;
  justify-content: center;
}

.policy__wrap {
  width: 100%;
  max-width: 42rem;
  line-height: 1.6;
}

.policy__back {
  display: inline-block;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
}

.policy__title {
  font-family: degular, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  line-height: 0.9;
  letter-spacing: -0.05rem;
  margin: 0 0 1.5rem;
}

.policy p {
  margin: 0 0 1.25rem;
}

.policy a {
  color: var(--color-link);
  text-decoration: underline;
}

.policy a:hover {
  color: var(--color-link-hover);
}

.policy__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1.5rem 0 3rem;
}

.policy__field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.85;
}

.policy__field input,
.policy__field textarea {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 300;
  text-transform: none;
  letter-spacing: normal;
  color: var(--color-text);
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 0;
  resize: vertical;
}

.policy__field input:focus,
.policy__field textarea:focus {
  outline: none;
  border-bottom-color: var(--color-text);
}

.policy__field input:disabled,
.policy__field textarea:disabled {
  opacity: 0.5;
}

.policy__submit {
  align-self: flex-start;
  font-family: inherit;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  padding: 0.65rem 1.5rem;
  cursor: pointer;
}

.policy__submit:hover:not(:disabled) {
  border-color: var(--color-text);
}

.policy__submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.policy__status {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
}

.policy__status--success {
  opacity: 0.85;
}

.policy__status--error {
  color: #ff8a8a;
}
</style>
