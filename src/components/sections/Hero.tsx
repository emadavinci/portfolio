"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
      setProgress(p);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" ref={wrapperRef} className="relative" style={{ height: "230vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* fondo 3D: partículas siempre en movimiento + objeto que se arma con el scroll */}
        <div className="absolute inset-0 opacity-90">
          <HeroCanvas progress={progress} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, var(--bg) 0%, rgba(248,247,244,0.75) 38%, rgba(248,247,244,0.15) 65%, rgba(248,247,244,0) 100%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
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
                <MagneticButton href="/proyectos" variant="solid">
                  Ver proyectos
                </MagneticButton>
                <MagneticButton href="/contacto" variant="outline">
                  Contacto
                </MagneticButton>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 z-10 flex flex-col items-center gap-3" style={{ opacity: 0.35 }}>
          <span className="text-xs tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</span>
          <div className="w-px h-12 animate-pulse" style={{ backgroundColor: "var(--text)" }} />
        </div>
      </div>
    </section>
  );
}
