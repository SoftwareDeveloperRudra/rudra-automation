/**
 * Analytics tracking wrapper to safely record user interactions.
 */
export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Track: ${eventName}]`, properties || {});
    }

    if (analyticsId && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag("event", eventName, properties);
    }
  }
}
