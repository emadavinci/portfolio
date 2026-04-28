"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#f8f7f4] border-b border-[#e2e2e2] shadow-sm" : "bg-transparent"
    }`}>
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#hero" className="text-lg tracking-tight font-normal" style={{ fontFamily: "var(--font-serif), serif" }}>
          Emanuel Gomez<span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm hover:opacity-60 transition-opacity" style={{ color: "var(--muted)" }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)} aria-label="Menú">
          <span className={`block w-5 h-0.5 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} style={{ backgroundColor: "var(--text)" }} />
          <span className={`block w-5 h-0.5 transition-all ${open ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--text)" }} />
          <span className={`block w-5 h-0.5 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} style={{ backgroundColor: "var(--text)" }} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm transition-opacity hover:opacity-60" style={{ color: "var(--muted)" }} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}