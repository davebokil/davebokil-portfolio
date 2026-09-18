const MAX_ATTEMPTS = 20
const WINDOW_MS = 10 * 60 * 1000 // 10 minutes

const attemptsByIp = new Map<string, { count: number; resetAt: number }>()

// Best-effort, in-memory per-IP limiter. Resets on process restart and isn't shared
// across multiple instances — that's fine here, it only needs to stop trivial spam.
export function checkGateRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = attemptsByIp.get(ip)

  if (!entry || now > entry.resetAt) {
    attemptsByIp.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }

  entry.count += 1
  return entry.count <= MAX_ATTEMPTS
}
