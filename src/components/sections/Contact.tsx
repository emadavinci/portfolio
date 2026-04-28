"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Mail } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log(data);
    setSent(true);
    setLoading(false);
    reset();
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <FadeIn>
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--accent)] mb-3">
            <span className="w-8 h-px bg-[var(--accent)]" />
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Hablemos
          </h2>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-16">
        <FadeIn delay={0.1}>
          <div>
            <p className="text-[var(--muted)] leading-relaxed mb-10">
              Estoy disponible para proyectos freelance, posiciones full-time y
              oportunidades de QA. Si tenés algo en mente, escribime.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:emanuelrodulfo2005@gmail.com" className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                <Mail size={16} />
                emanuelrodulfo2005@gmail.com
              </a>
              <a href="https://github.com/emadavinci" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                github.com/emadavinci
              </a>
              <a href="https://www.linkedin.com/in/emanuel-gomez-a38846341/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                linkedin.com/in/emanuel-gomez
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="left">
          <div>
            {sent ? (
              <div className="border border-[var(--border)] p-8 text-center">
                <p className="text-2xl mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>
                  ¡Mensaje enviado!
                </p>
                <p className="text-sm text-[var(--muted)]">Te respondo a la brevedad.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-xs text-[var(--accent)] hover:underline">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div>
                  <input
                    {...register("name", { required: "El nombre es obligatorio" })}
                    placeholder="Nombre"
                    className="w-full border-b border-[var(--border)] bg-transparent py-3 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--text)] transition-colors"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    {...register("email", { required: "El email es obligatorio", pattern: { value: /^\S+@\S+$/, message: "Email inválido" } })}
                    placeholder="Email"
                    type="email"
                    className="w-full border-b border-[var(--border)] bg-transparent py-3 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--text)] transition-colors"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <textarea
                    {...register("message", { required: "El mensaje es obligatorio" })}
                    placeholder="Mensaje"
                    rows={4}
                    className="w-full border-b border-[var(--border)] bg-transparent py-3 text-sm outline-none placeholder:text-[var(--muted)] focus:border-[var(--text)] transition-colors resize-none"
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-50"
                >
                  {loading ? "Enviando..." : (<><span>Enviar mensaje</span><Send size={14} /></>)}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}