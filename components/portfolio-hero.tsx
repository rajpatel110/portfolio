"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AboutSkillsContact } from "@/components/about-skills-contact";
import { SelectedWork } from "@/components/selected-work";
import { observeReveals } from "@/components/observe-reveals";
import { profile } from "@/data/profile";
gsap.registerPlugin(useGSAP);
function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}
export function PortfolioHero({ hasPortrait }: { hasPortrait: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", (context) => {
      gsap.from("[data-reveal]", { y: 26, opacity: 0, duration: .85, stagger: .1, ease: "power3.out", clearProps: "all" });
      gsap.from(".portrait-card", { rotation: 0, duration: 1.2, ease: "power3.out" });
      return root.current ? observeReveals(root.current, context) : undefined;
    });
    return () => media.revert();
  }, { scope: root });
  return <div ref={root} className="site-shell">
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="header">
      <a className="wordmark" href="#main" aria-label="Raj Patel home">raj<span>patel</span><i aria-hidden="true">.</i></a>
      <nav aria-label="Main navigation">
        <a href="#work">Selected work <span aria-hidden="true">↓</span></a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a className="nav-contact" href="#contact">Let’s talk <Arrow /></a>
      </nav>
    </header>
    <main id="main" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
          <h1 id="hero-title" data-reveal>Raj Patel<span className="title-dot">.</span></h1>
          <p className="hero-statement" data-reveal>Thoughtful interfaces.<br /><span>Full-stack developer.</span></p>
          <p className="intro" data-reveal>I’m a Computer Science & Cyber Security student, working towards becoming a full-stack developer. Curious about how things work. Even more curious about what I can build.</p>
          <div className="actions" data-reveal>
            <a className="primary-button" href={`mailto:${profile.email}`}>Let’s build something <Arrow /></a>
            <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Explore my GitHub profile (opens in new tab)">Explore my GitHub <Arrow /></a>
          </div>
          <p className="availability" data-reveal>{profile.availability}</p>
        </div>
        <div className="portrait-area" data-reveal>
          <span className="orbit-mark" aria-hidden="true">✳</span>
          <figure className="portrait-card">
            <div className="portrait-window">
              {hasPortrait ? <Image src="/images/portrait.webp" alt="Portrait of Raj Patel" fill sizes="(max-width: 760px) 85vw, (min-width: 1500px) 430px, 40vw" priority /> : <div className="portrait-placeholder" role="img" aria-label="Portrait placeholder for Raj Patel"><span className="placeholder-index">PORTRAIT / 01</span><span className="monogram" aria-hidden="true">rp<span>.</span></span><span className="placeholder-label">A face to the name.<br /><strong>Portrait coming soon.</strong></span></div>}
            </div>
            <figcaption><span>RAJ PATEL</span><span>DEVELOPER IN THE MAKING</span></figcaption>
          </figure>
          <span className="portrait-note">Always a work in progress.<svg viewBox="0 0 90 45" fill="none" aria-hidden="true"><path d="M3 7c33 30 59 28 78 7m-17 1 18-2-3 17" stroke="currentColor" strokeWidth="1.5" /></svg></span>
        </div>
      </section>
      <div className="education" data-reveal>
        <div className="education-label"><span aria-hidden="true">↳</span> THE FOUNDATION</div>
        <div><p>{profile.education}</p><span>{profile.institution}</span></div>
        <div className="graduation"><span>GRADUATING</span><p>{profile.graduation}<span className="yellow-dot" aria-hidden="true" /></p></div>
      </div>
      <SelectedWork />
      <AboutSkillsContact />
    </main>
    <footer><span>© {new Date().getFullYear()} Raj Patel</span><a href="#main">Back to top <span aria-hidden="true">↑</span></a><a href={`mailto:${profile.email}`}>Say hello <Arrow /></a></footer>
  </div>;
}
