"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const filters = ["todos", "dev", "qa", "fullstack"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [active, setActive] = useState<Filter>("todos");
  const filtered = active === "todos" ? projects : projects.filter((p: Project) => p.type === active);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <FadeIn>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              Proyectos
            </span>
            <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Mi trabajo
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} direction="left">
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 text-xs font-medium tracking-wide uppercase border transition-all duration-200 ${
                  active === f
                    ? "bg-[var(--text)] text-[var(--bg)] border-[var(--text)]"
                    : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--text)] hover:text-[var(--text)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((project: Project, i: number) => (
          <FadeIn key={project.id} delay={i * 0.1}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-[var(--border)] p-6 hover:border-[var(--text)] transition-all duration-300 h-full">
      <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-4 block">
        {project.type}
      </span>
      <h3 className="text-xl font-light mb-3" style={{ fontFamily: "'DM Serif Display', serif" }}>
        {project.title}
      </h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: string) => (
          <span key={tag} className="text-xs px-2 py-1 bg-[var(--border)] text-[var(--muted)]">
            {tag}
          </span>
        ))}
      </div>

      {project.screenshots && (
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {project.screenshots.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="h-40 w-auto rounded-sm flex-shrink-0 border border-[var(--border)]"
            />
          ))}
        </div>
      )}

      <div className="flex gap-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Código
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">
            <ExternalLink size={14} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}