"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
import { projects, moreProjects, type Project } from "@/data/projects";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.repository && !project.live) return null;
  return <div className="project-links">
    {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source on GitHub (opens in new tab)`}>View source <span aria-hidden="true">↗</span></a>}
    {project.live && <span className="project-live-action"><a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} live site (opens in new tab)`}>Visit live site <span aria-hidden="true">↗</span></a>{project.liveRequirement && <small className="project-access-note">{project.liveRequirement}</small>}</span>}
    {project.image && project.enlargeImage && <a href={project.image} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} full-size preview (opens in new tab)`}>View full-size preview <span aria-hidden="true">↗</span></a>}
  </div>;
}

function ProjectImage({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (!project.image) return null;
  return <figure className="project-figure">
    <Image src={project.image} alt={project.imageAlt ?? `${project.name} screenshot`} width={project.imageWidth ?? 1280} height={project.imageHeight ?? 800} sizes={compact ? "(max-width: 760px) 90vw, 43vw" : "(max-width: 760px) 90vw, 58vw"} />
    {project.imageCaption && <figcaption>{project.imageCaption}</figcaption>}
  </figure>;
}

function ProjectVisual({ project }: { project: Project }) {
  return project.image ? <ProjectImage project={project} /> : <div className="project-type" aria-hidden="true"><span>dev<span className="dev-accent">link</span><span className="dev-period">.</span></span><span className="project-type-note">DISCOVER. CONNECT. CONVERSE.</span></div>;
}

export function SelectedWork() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 1100px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)", () => {
      const section = root.current;
      if (!section) return;
      const story = section.querySelector<HTMLElement>(".featured-story");
      const stage = section.querySelector<HTMLElement>(".project-stage");
      if (!story || !stage) return;
      const second = section.querySelector<HTMLElement>(".project-secondary");
      const secondHeading = second?.querySelector<HTMLElement>("h3");
      const stageWindow = stage.querySelector<HTMLElement>(".stage-window");
      if (!second || !secondHeading || !stageWindow) return;
      // Layout reads occur on initialization/refresh, never in a scroll handler.
      // Align the second artwork with its own heading, not the first project's stage top.
      const secondArtworkOffset = (progress: number) => {
        const headingInStory = second.getBoundingClientRect().top - story.getBoundingClientRect().top + secondHeading.offsetTop;
        const travel = Math.max(1, story.offsetHeight - stage.offsetHeight);
        return Math.max(0, headingInStory - stageWindow.offsetTop - travel * progress);
      };
      let sequence: gsap.core.Timeline | undefined;
      try {
        section.classList.add("work-enhanced");
        sequence = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: story,
            start: "top top+=90",
            // Match the actual CSS sticky travel instead of the viewport bottom.
            end: () => `+=${Math.max(1, story.offsetHeight - stage.offsetHeight)}`,
            scrub: true, invalidateOnRefresh: true,
          },
        });
        sequence
          .fromTo(".stage-progress span", { scaleX: 0 }, { scaleX: 1, duration: 1 }, 0)
          .from(".project-lead .story-number", { x: -8, duration: .14 }, 0)
          .from(".project-lead h3", { y: 12, duration: .18 }, 0)
          .from(".project-lead .story-body", { y: 14, duration: .22 }, .04)
          .to(".stage-panel-first", { xPercent: -5, scale: .97, autoAlpha: 0, duration: .12 }, .76)
          .fromTo(".stage-panel-second", { xPercent: 7, scale: .97, autoAlpha: 0 }, { xPercent: 0, scale: 1, autoAlpha: 1, duration: .12 }, .88)
          .fromTo(".stage-panel-second .stage-content", { y: () => secondArtworkOffset(.88) }, { y: () => secondArtworkOffset(1), duration: .12 }, .88)
          .to(".stage-count-track", { yPercent: -50, duration: .18 }, .8)
          .from(".project-secondary .story-number", { x: -12, duration: .18 }, .8)
          .from(".project-secondary h3", { y: 18, duration: .18 }, .8)
          .from(".project-secondary .story-body", { y: 22, duration: .18 }, .82);
      } catch {
        sequence?.revert();
        section.classList.remove("work-enhanced");
      }
      return () => {
        sequence?.scrollTrigger?.kill();
        section.classList.remove("work-enhanced");
      };
    });
    return () => media.revert();
  }, { scope: root });
  return (
    <section ref={root} id="work" className="selected-work" aria-labelledby="work-title" tabIndex={-1}>
      <div className="work-heading" data-work-reveal>
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas into<br /><span>working things.</span></h2></div>
        <p className="work-intro">Web applications and academic explorations,<br />from study planning to real-time communication.</p>
      </div>
      <div className="featured-story">
        <div className="project-stage" aria-hidden="true">
          <div className="stage-topline"><span>SELECTED / 2026</span><span className="stage-count"><span className="stage-count-track"><span>01 / 02</span><span>02 / 02</span></span></span></div>
          <div className="stage-window">
            {projects.map((project, index) => <div key={project.name} className={`stage-panel stage-panel-${index === 0 ? "first" : "second"}`}><div className="stage-content"><ProjectVisual project={project} /><p className="stage-project-label">{project.name}<span>{project.category}</span></p></div></div>)}
          </div>
          <div className="stage-progress"><span /></div>
          <p className="stage-footnote">TWO BUILDS. DIFFERENT QUESTIONS.</p>
        </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className={`project project-${index === 0 ? "lead" : "secondary"}`} key={project.name} aria-labelledby={`project-${index}`}>
            <div className="project-visual">
              <div className="project-index"><span>0{index + 1}</span><span>{project.category}</span></div>
              <ProjectVisual project={project} />
            </div>
            <div className="project-details">
              <p className="story-number" aria-hidden="true">0{index + 1} / {project.category}</p>
              <h3 id={`project-${index}`}>{project.name}<span aria-hidden="true">↗</span></h3>
              <div className="story-body">
              <p className="project-description">{project.description}</p>
              <ul className="tech-list" aria-label={`${project.name} technologies`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
              {project.previousTechnologies && <p className="project-stack-note">Previously used: {project.previousTechnologies.join(", ")}.</p>}
              {project.workflow && <p className="project-stack-note">Workflow: {project.workflow.join(" · ")}.</p>}
              <ul className="project-highlights">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
              <ProjectLinks project={project} />
              {project.live && project.liveNote && <p className="project-live-note">{project.liveNote}</p>}
            </div>
          </article>
        ))}
      </div>
      </div>
      <section className="more-projects" aria-labelledby="more-projects-title">
        <div className="more-projects-heading"><h3 id="more-projects-title">More projects<span aria-hidden="true"> ↘</span></h3></div>
        <div className="more-projects-grid">
          {moreProjects.map((project, index) => <article className="more-project" key={project.name} aria-labelledby={`more-project-${index}`} data-work-reveal>
            <div className="project-index"><span>0{projects.length + index + 1}</span><span>{project.category}</span></div>
            <ProjectImage project={project} compact />
            <h4 id={`more-project-${index}`}>{project.name}</h4>
            <p className="project-description">{project.description}</p>
            <ul className="tech-list" aria-label={`${project.name} technologies`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
            <ul className="project-highlights">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
            {project.note && <p className="compact-project-note">{project.note}</p>}
            {project.baseline && <div className="project-baseline" aria-label={project.baseline.label}>
              <p className="baseline-label">{project.baseline.label}</p>
              <p className="baseline-results">{project.baseline.results}</p>
              <p className="baseline-limitations">{project.baseline.limitations}</p>
            </div>}
            {project.details && <details className="project-research-details">
              <summary>{project.details.label}</summary>
              {project.details.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </details>}
            <ProjectLinks project={project} />
          </article>)}
        </div>
      </section>
    </section>
  );
}
