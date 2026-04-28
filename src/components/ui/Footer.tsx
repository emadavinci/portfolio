// src/components/ui/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Emanuel. Todos los derechos reservados.
        </p>
        <p className="text-sm text-[var(--muted)]">
          Hecho con Next.js + TypeScript
        </p>
      </div>
    </footer>
  );
}