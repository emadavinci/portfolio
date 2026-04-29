"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { ExternalLink, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
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

      <div className="grid md:grid-cols-2 gap-6 items-start">
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
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? project.screenshots!.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === project.screenshots!.length - 1 ? 0 : i + 1));

  return (
    <>
      <div className="border border-[var(--border)] p-6 hover:border-[var(--text)] transition-all duration-300 flex flex-col">
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

        {/* Preview de la primera screenshot */}
        {project.screenshots && (
          <div
            className="relative mb-6 cursor-pointer group overflow-hidden"
            onClick={() => { setCurrentIndex(0); setModalOpen(true); }}
          >
            <img
              src={project.screenshots[0]}
              alt="Preview"
              className="w-32 h-auto rounded-sm border border-[var(--border)] group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-medium bg-[var(--text)] text-[var(--bg)] px-3 py-1.5 flex items-center gap-1.5">
                <Images size={12} />
                Ver {project.screenshots.length} fotos
              </span>
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-auto">
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

      {/* Modal */}
      {modalOpen && project.screenshots && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setModalOpen(false)}
        >
          <div className="relative max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-0 text-white opacity-70 hover:opacity-100 transition-opacity"
            >
              <X size={24} />
            </button>

            <img
              src={project.screenshots[currentIndex]}
              alt={`Screenshot ${currentIndex + 1}`}
              className="w-full rounded-sm"
            />

            <div className="flex items-center justify-between mt-4">
              <button onClick={prev} className="text-white opacity-70 hover:opacity-100 transition-opacity">
                <ChevronLeft size={28} />
              </button>
              <span className="text-white text-xs opacity-50">
                {currentIndex + 1} / {project.screenshots.length}
              </span>
              <button onClick={next} className="text-white opacity-70 hover:opacity-100 transition-opacity">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}