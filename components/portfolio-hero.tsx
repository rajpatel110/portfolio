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
      // Base markup stays visible. Only this timeline owns the hero entrance.
      const entrance = gsap.timeline({ defaults: { ease: "power3.out", clearProps: "transform,opacity" } });
      try {
        entrance
          .from(".hero-copy .eyebrow", { y: 10, opacity: 0, duration: .4 }, 0)
          .from(".hero-name-inner", { yPercent: 115, duration: .85 }, .04)
          .from(".portrait-card", { y: 30, rotation: 9, opacity: 0, duration: 1.05 }, .08)
          .from(".hero-statement", { y: 18, opacity: 0, duration: .6 }, .34)
          .from(".hero-copy .intro", { y: 14, opacity: 0, duration: .55 }, .46)
          .from(".hero-copy .actions a", { y: 12, opacity: 0, duration: .45, stagger: .08 }, .58)
          .from(".hero-copy .availability", { y: 8, opacity: 0, duration: .4 }, .76)
          .from(".portrait-note, .orbit-mark", { y: 10, opacity: 0, duration: .4 }, .72);
      } catch {
        entrance.revert();
      }
      const hero = root.current?.querySelector(".hero");
      const showFocusedContent = () => entrance.progress(1);
      hero?.addEventListener("focusin", showFocusedContent);
      const disconnect = root.current ? observeReveals(root.current, context) : undefined;
      return () => {
        hero?.removeEventListener("focusin", showFocusedContent);
        disconnect?.();
      };
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
        <a href={profile.certifications} target="_blank" rel="noopener noreferrer" aria-label="Certifications on Google Drive (opens in new tab)">Certifications <Arrow /></a>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume on Google Drive (opens in new tab)">Resume <Arrow /></a>
        <a className="nav-contact" href="#contact">Let’s talk <Arrow /></a>
      </nav>
    </header>
    <main id="main" tabIndex={-1}>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
          <h1 id="hero-title"><span className="hero-name-mask"><span className="hero-name-inner">Raj Patel<span className="title-dot">.</span></span></span></h1>
          <p className="hero-statement">Thoughtful interfaces.<br /><span>Full-stack developer.</span></p>
          <p className="intro">I’m a Computer Science & Cyber Security student, working towards becoming a full-stack developer. Curious about how things work. Even more curious about what I can build.</p>
          <div className="actions">
            <a className="primary-button" href={`mailto:${profile.email}`}>Let’s build something <Arrow /></a>
            <a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Explore my GitHub profile (opens in new tab)">Explore my GitHub <Arrow /></a>
          </div>
          <p className="availability">{profile.availability}</p>
        </div>
        <div className="portrait-area">
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
      <div className="education">
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
