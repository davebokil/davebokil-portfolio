export function useTrackEvent() {
  function trackEvent(eventName, category, label, destination) {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        event_category: category,
        event_label: label,
        destination,
      })
    }
  }

  return { trackEvent }
}
