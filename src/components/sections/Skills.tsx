"use client";
import { skills } from "@/data/skills";
import { Skill } from "@/types";
import FadeIn from "@/components/ui/FadeIn";

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & DB" },
  { key: "qa", label: "Metodologías" },
  { key: "tools", label: "Herramientas" },
] as const;

const levelColor: Record<Skill["level"], string> = {
  básico: "bg-gray-200",
  intermedio: "bg-blue-300",
  avanzado: "bg-[var(--accent)]",
};

const levelWidth: Record<Skill["level"], string> = {
  básico: "w-1/3",
  intermedio: "w-2/3",
  avanzado: "w-full",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-[var(--text)] text-[var(--bg)] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-blue-400 mb-3">
              <span className="w-8 h-px bg-blue-400" />
              Stack
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[var(--bg)]" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Tecnologías
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map(({ key, label }, i) => {
            const categorySkills = skills.filter((s: Skill) => s.category === key);
            return (
              <FadeIn key={key} delay={i * 0.1}>
                <div>
                  <h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-6">
                    {label}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {categorySkills.map((skill: Skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-light">{skill.name}</span>
                          <span className="text-xs text-gray-400">{skill.level}</span>
                        </div>
                        <div className="h-px w-full bg-gray-700">
                          <div className={`h-px ${levelColor[skill.level]} ${levelWidth[skill.level]} transition-all duration-700`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}