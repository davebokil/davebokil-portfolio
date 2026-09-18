const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default defineEventHandler(async (event) => {
  const { email, pageId } = await readBody(event)

  if (!email || !EMAIL_RE.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter a valid email address.' })
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'

  if (!checkGateRateLimit(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many attempts. Please try again later.' })
  }

  const config = useRuntimeConfig()

  if (!config.resendApiKey) {
    throw createError({ statusCode: 500, statusMessage: 'This isn\'t configured yet.' })
  }

  try {
    const userAgent = getRequestHeader(event, 'user-agent') || 'unknown'
    const when = new Date().toISOString()

    await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: {
        from: 'davebokil.com <onboarding@resend.dev>',
        to: 'bokild@gmail.com',
        reply_to: email,
        subject: `Access requested: ${pageId || 'unknown page'}`,
        text: `Page: ${pageId || 'unknown'}\nEmail: ${email}\nWhen: ${when}\nIP: ${ip}\nUser-Agent: ${userAgent}`,
      },
    })
  } catch (error) {
    console.error('Failed to send access-request notification email', error)
    throw createError({ statusCode: 502, statusMessage: 'Failed to send request. Please try again later.' })
  }

  return { success: true }
})
