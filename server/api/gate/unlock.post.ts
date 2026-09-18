import { timingSafeEqual } from 'node:crypto'

function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)

  if (bufA.length !== bufB.length) {
    // Still run a comparison of equal length so mismatched lengths don't
    // return noticeably faster than a real check.
    timingSafeEqual(bufA, bufA)
    return false
  }

  return timingSafeEqual(bufA, bufB)
}

export default defineEventHandler(async (event) => {
  const { password, pageId } = await readBody(event)

  if (!password) {
    throw createError({ statusCode: 400, statusMessage: 'Password is required.' })
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'

  if (!checkGateRateLimit(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Too many attempts. Please try again later.' })
  }

  const config = useRuntimeConfig()

  if (!config.gatePassword) {
    throw createError({ statusCode: 500, statusMessage: 'This page is not configured yet.' })
  }

  if (!safeCompare(password, config.gatePassword)) {
    throw createError({ statusCode: 401, statusMessage: 'Incorrect password.' })
  }

  setCookie(event, 'gate_unlock', '1', {
    maxAge: 15552000, // ~180 days
    path: '/',
    sameSite: 'lax',
    secure: true,
  })

  if (config.resendApiKey) {
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
          subject: `Password gate unlocked: ${pageId || 'unknown page'}`,
          text: `Page: ${pageId || 'unknown'}\nWhen: ${when}\nIP: ${ip}\nUser-Agent: ${userAgent}`,
        },
      })
    } catch (error) {
      console.error('Failed to send gate-unlock notification email', error)
    }
  }

  return { success: true }
})
