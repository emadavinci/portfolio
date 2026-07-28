import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Proyectos — Emanuel Gomez",
};

export default function ProyectosPage() {
  return <Projects />;
}
