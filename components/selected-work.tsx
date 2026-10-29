"use client";

import Image from "next/image";
import { projects, moreProjects, type Project } from "@/data/projects";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.repository && !project.live) return null;
  return <div className="project-links">
    {project.repository && <a href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source on GitHub (opens in new tab)`}>View source <span aria-hidden="true">↗</span></a>}
    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} live site (opens in new tab)`}>Visit live site <span aria-hidden="true">↗</span></a>}
  </div>;
}

function ProjectImage({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (!project.image) return null;
  return <figure className="project-figure">
    <Image src={project.image} alt={project.imageAlt ?? `${project.name} screenshot`} width={1280} height={800} sizes={compact ? "(max-width: 760px) 90vw, 43vw" : "(max-width: 760px) 90vw, 58vw"} />
    {project.imageCaption && <figcaption>{project.imageCaption}</figcaption>}
  </figure>;
}

export function SelectedWork() {
  return (
    <section id="work" className="selected-work" aria-labelledby="work-title" tabIndex={-1}>
      <div className="work-heading" data-work-reveal>
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Ideas into<br /><span>working things.</span></h2></div>
        <p className="work-intro">Web applications and academic explorations,<br />from study planning to real-time communication.</p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className={`project project-${index === 0 ? "lead" : "secondary"}`} key={project.name} aria-labelledby={`project-${index}`} data-work-reveal>
            <div className="project-visual">
              <div className="project-index"><span>0{index + 1}</span><span>{project.category}</span></div>
              {project.image ? <ProjectImage project={project} /> : <div className="project-type" aria-hidden="true"><span>dev<span className="dev-accent">link</span><span className="dev-period">.</span></span><span className="project-type-note">DISCOVER. CONNECT. CONVERSE.</span></div>}
            </div>
            <div className="project-details">
              <h3 id={`project-${index}`}>{project.name}<span aria-hidden="true">↗</span></h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-list" aria-label={`${project.name} technologies`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
              {project.previousTechnologies && <p className="project-stack-note">Previously used: {project.previousTechnologies.join(", ")}.</p>}
              {project.workflow && <p className="project-stack-note">Workflow: {project.workflow.join(" · ")}.</p>}
              <ul className="project-highlights">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
              <ProjectLinks project={project} />
              {project.live && project.liveNote && <p className="project-live-note">{project.liveNote}</p>}
            </div>
          </article>
        ))}
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
