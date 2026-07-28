"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

export default function MagneticButton({ href, children, variant = "solid" }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.35, y: relY * 0.55 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const solidStyle = { backgroundColor: "var(--text)", color: "var(--bg)" };
  const outlineStyle = {
    borderColor: "var(--border)",
    color: "var(--text)",
    borderWidth: 1,
    borderStyle: "solid" as const,
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Link
        href={href}
        className={`group relative inline-flex items-center overflow-hidden px-7 py-3.5 text-sm font-medium transition-colors duration-300 ${
          variant === "outline" ? "hover:!text-[var(--bg)]" : ""
        }`}
        style={variant === "solid" ? solidStyle : outlineStyle}
      >
        {variant === "outline" && (
          <span
            className="absolute inset-0 -translate-x-full bg-[var(--text)] transition-transform duration-300 ease-out group-hover:translate-x-0"
            aria-hidden
          />
        )}
        <span className="relative z-10">{children}</span>
        {variant === "solid" && (
          <span
            className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 ease-out group-hover:translate-x-full"
            aria-hidden
          />
        )}
      </Link>
    </motion.div>
  );
}
