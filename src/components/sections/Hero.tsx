"use client";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center max-w-5xl mx-auto px-6">
      <div className="max-w-2xl py-32">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-8 h-px" style={{ backgroundColor: "var(--accent)" }} />
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              Disponible para trabajar
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-6xl md:text-8xl font-normal leading-none mb-8" style={{ fontFamily: "var(--font-serif), serif" }}>
            Emanuel
            <br />
            <span style={{ color: "var(--muted)" }}>Dev & QA</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg leading-relaxed mb-12 max-w-md" style={{ color: "var(--muted)" }}>
            Desarrollo aplicaciones web modernas y aseguro su calidad.
            Especializado en{" "}
            <strong className="font-medium" style={{ color: "var(--text)" }}>TypeScript</strong>,
            React y testing automatizado.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-75"
              style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
            >
              Ver proyectos
            </Link>
            <Link
              href="#contact"
              className="px-7 py-3.5 text-sm font-medium border transition-colors hover:opacity-75"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              Contacto
            </Link>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-6 flex flex-col items-center gap-3" style={{ opacity: 0.35 }}>
        <span className="text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <div className="w-px h-12 animate-pulse" style={{ backgroundColor: "var(--text)" }} />
      </div>
    </section>
  );
}