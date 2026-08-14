export default defineEventHandler(async (event) => {
  const { name, email, message } = await readBody(event)

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'Name, email, and message are required.' })
  }

  const config = useRuntimeConfig()

  if (!config.resendApiKey) {
    throw createError({ statusCode: 500, statusMessage: 'Contact form is not configured yet.' })
  }

  try {
    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: {
        from: 'davebokil.com Contact Form <onboarding@resend.dev>',
        to: 'bokild@gmail.com',
        reply_to: email,
        subject: `New contact form message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      },
    })
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Failed to send message. Please try again later.' })
  }

  return { success: true }
})
