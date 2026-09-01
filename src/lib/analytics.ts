/**
 * Analytics tracking wrapper to safely record user interactions.
 */
export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    const analyticsId = import.meta.env.VITE_ANALYTICS_ID;
    if (import.meta.env.DEV) {
      console.log(`[Analytics Track: ${eventName}]`, properties || {});
    }

    if (analyticsId && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag("event", eventName, properties);
    }
  }
}
