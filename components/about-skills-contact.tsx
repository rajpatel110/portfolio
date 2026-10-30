"use client";
import { useState } from "react";
import { ContactArrow } from "@/components/contact-arrow";

import { about, skillGroups } from "@/data/about";
import { profile } from "@/data/profile";

export function AboutSkillsContact() {

  const [copyState, setCopyState] = useState<"idle" | "copying" | "success" | "error">("idle");
  async function copyEmail() {
    setCopyState("copying");
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(profile.email);
      setCopyState("success");
    } catch { setCopyState("error"); }
  }

  return <div>
    <section id="about" className="about-section" aria-labelledby="about-title" tabIndex={-1}>
      <div className="about-aside" data-detail-reveal>
        <p className="eyebrow">02 / ABOUT</p>
        <div className="about-mark" aria-hidden="true"><span>Always<br />learning.</span><span>↗</span></div>
        <p className="about-caption">A student today.<br />A builder along the way.</p>
      </div>
      <div className="about-copy" data-detail-reveal>
        <h2 id="about-title">Curious about<br /><span>the whole stack.</span></h2>
        {about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <ul className="interest-list" aria-label="Interests">{about.interests.map(interest => <li key={interest}>{interest}</li>)}</ul>
      </div>
    </section>
    <section id="skills" className="skills-section" aria-labelledby="skills-title" tabIndex={-1}>
      <div className="skills-heading" data-detail-reveal>
        <div><p className="eyebrow">03 / SKILLS</p><h2 id="skills-title">What I’m working with.</h2></div>
        <p>Tools behind the featured projects,<br />and fundamentals I keep practising.</p>
      </div>
      <div className="skill-groups">{skillGroups.map((group, index) => <div className="skill-row" key={group.title} data-detail-reveal>
        <span className="skill-number" aria-hidden="true">0{index + 1}</span>
        <div><h3>{group.title}</h3><p>{group.context}</p></div>
        <ul aria-label={`${group.title} skills`}>{group.items.map(item => <li key={item.name}><span>{item.name}</span>{item.note && <small>{item.note}</small>}</li>)}</ul>
      </div>)}</div>
    </section>
    <section id="contact" className={`contact-section ${copyState === "success" ? "email-copied" : ""}`} aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact-top" data-detail-reveal>
        <p className="eyebrow">04 / CONTACT</p>
        <p className="contact-availability"><span aria-hidden="true" />Open to internships & entry-level full-time roles</p>
      </div>
      <div className="contact-invitation">
        <h2 id="contact-title" data-detail-reveal>Good things start<br />with a <span>hello.</span></h2>
        <ContactArrow />
      </div>
      <div className="contact-bottom" data-detail-reveal>
        <div className="email-group">
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
          <button className="copy-email" type="button" onClick={copyEmail} disabled={copyState === "copying"} aria-describedby="copy-feedback">{copyState === "success" ? "Copy again" : copyState === "copying" ? "Copying…" : "Copy email"}<span aria-hidden="true">{copyState === "success" ? "✓" : "+"}</span></button>
          <p id="copy-feedback" className="copy-feedback" role="status" aria-live="polite" aria-atomic="true">{copyState === "success" ? "Email address copied." : copyState === "error" ? "Couldn’t copy. Select the address above to copy it manually, or use the email link." : "Prefer email? My inbox is open."}</p>
        </div>
        <nav className="contact-socials" aria-label="Social profiles">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">GitHub <span aria-hidden="true">↗</span></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)">LinkedIn <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </section>
  </div>;
}
