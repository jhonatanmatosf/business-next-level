// Camada única de eventos. Pronta para plugar Google Analytics (gtag),
// Meta Pixel (fbq) e Google Tag Manager (dataLayer) sem alterar os componentes.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type TrackPayload = Record<string, string | number | boolean | undefined>;

export function track(event: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });

  window.gtag?.("event", event, payload);
  window.fbq?.("trackCustom", event, payload);
}

export const WHATSAPP_URL =
  "https://wa.me/+5524992080539?text=Ol%C3%A1%2C%20cheguei%20aqui%20atrav%C3%A9s%20da%20sua%20p%C3%A1gina%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

export function initScrollTracking() {
  if (typeof window === "undefined") return () => {};
  const fired = new Set<number>();

  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    const pct = (window.scrollY / max) * 100;
    for (const mark of [50, 75]) {
      if (pct >= mark && !fired.has(mark)) {
        fired.add(mark);
        track(`scroll_${mark}`, { percent: mark });
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}
