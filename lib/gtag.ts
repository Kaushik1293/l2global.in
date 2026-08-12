type GtagFn = (...args: unknown[]) => void;

// Wraps window.gtag safely — gtag is loaded via a plain <script> in app/layout.tsx
// and may not exist yet during hydration or if a user has consent/ad-blockers set.
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as typeof window & { gtag?: GtagFn }).gtag;
  gtag?.("event", name, params);
}
