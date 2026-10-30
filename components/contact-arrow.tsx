"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { profile } from "@/data/profile";

gsap.registerPlugin(useGSAP);

export function ContactArrow() {
  const root = useRef<HTMLAnchorElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const link = root.current;
      if (!link) return;
      const shaft = link.querySelector(".conduit-shaft");
      const head = link.querySelector(".conduit-head");
      // A short local SVG redraw, never a global or continuous loop.
      const gesture = gsap.timeline({ paused: true })
        .fromTo(shaft, { attr: { d: "M18 44 C48 44 80 44 132 44" } }, { attr: { d: "M18 56 C48 56 80 24 132 24" }, duration: .42, ease: "power2.out" })
        .fromTo(head, { strokeDashoffset: 1, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, duration: .24 }, .16);
      let hovered = false;
      const enter = () => { hovered = true; gesture.play(); };
      const leave = () => { hovered = false; if (!link.matches(":focus-visible")) gesture.reverse(); };
      const focus = () => gesture.play();
      const blur = () => { if (!hovered) gesture.reverse(); };
      const tap = () => gesture.play();
      link.addEventListener("pointerenter", enter);
      link.addEventListener("pointerleave", leave);
      link.addEventListener("focus", focus);
      link.addEventListener("blur", blur);
      link.addEventListener("pointerdown", tap, { passive: true });
      return () => {
        link.removeEventListener("pointerenter", enter);
        link.removeEventListener("pointerleave", leave);
        link.removeEventListener("focus", focus);
        link.removeEventListener("blur", blur);
        link.removeEventListener("pointerdown", tap);
        gesture.revert();
      };
    });
    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const link = root.current;
      if (!link) return;
      const x = gsap.quickTo(link, "x", { duration: .55, ease: "elastic.out(1, .55)" });
      const y = gsap.quickTo(link, "y", { duration: .55, ease: "elastic.out(1, .55)" });
      let bounds: DOMRect | undefined;
      const enter = () => { bounds = link.getBoundingClientRect(); };
      const move = (event: PointerEvent) => {
        if (!bounds) return;
        x(gsap.utils.clamp(-5, 5, ((event.clientX - bounds.left) / bounds.width - .5) * 10));
        y(gsap.utils.clamp(-4, 4, ((event.clientY - bounds.top) / bounds.height - .5) * 8));
      };
      const leave = () => { bounds = undefined; x(0); y(0); };
      link.addEventListener("pointerenter", enter);
      link.addEventListener("pointermove", move, { passive: true });
      link.addEventListener("pointerleave", leave);
      return () => {
        link.removeEventListener("pointerenter", enter);
        link.removeEventListener("pointermove", move);
        link.removeEventListener("pointerleave", leave);
        x.tween.kill(); y.tween.kill();
      };
    });
    return () => media.revert();
  }, { scope: root });
  return <a ref={root} className="contact-conduit" href={`mailto:${profile.email}`} aria-label="Start a conversation by email">
    <svg viewBox="0 0 160 80" fill="none" aria-hidden="true" focusable="false">
      <path className="conduit-shaft" d="M18 56 C48 56 80 24 132 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path className="conduit-head" d="M118 10 L132 24 L118 38" pathLength="1" strokeDasharray="1" strokeDashoffset="0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span aria-hidden="true">SAY HELLO</span>
  </a>;
}
