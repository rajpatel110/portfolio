
import gsap from "gsap";

const selector = "[data-work-reveal], [data-detail-reveal]";

/** One-shot native visibility detection; no per-scroll JS or offscreen transforms. */
export function observeReveals(root: HTMLElement, context: gsap.Context) {
  if (!("IntersectionObserver" in window)) return () => {};
  const pending = new Set(root.querySelectorAll<HTMLElement>(selector));
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target as HTMLElement;
      observer.unobserve(element);
      pending.delete(element);
      const hashTarget = document.getElementById(window.location.hash.slice(1));
      const isAnchor = hashTarget && hashTarget.id !== "main" && (hashTarget.contains(element) || element.contains(hashTarget));
      if (element.contains(document.activeElement) || isAnchor) continue;
      // Record async-created tweens in the existing matchMedia context for cleanup.
      context.add(() => {
        gsap.from(element, { y: 20, duration: 0.65, ease: "power2.out", force3D: false, clearProps: "transform" });
      });
    }
    if (!pending.size) observer.disconnect();
  }, { rootMargin: "0px 0px -24px 0px", threshold: 0 });
  for (const element of pending) observer.observe(element);
  return () => observer.disconnect();
}
