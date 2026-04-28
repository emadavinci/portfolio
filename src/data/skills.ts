// src/data/skills.ts
import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", category: "frontend", level: "avanzado" },
  { name: "TypeScript", category: "frontend", level: "avanzado" },
  { name: "React", category: "frontend", level: "avanzado" },
  { name: "Next.js", category: "frontend", level: "avanzado" },
  { name: "HTML5", category: "frontend", level: "avanzado" },
  { name: "CSS3", category: "frontend", level: "avanzado" },
  { name: "Tailwind CSS", category: "frontend", level: "avanzado" },
  { name: "Bootstrap", category: "frontend", level: "intermedio" },
  { name: "React Native", category: "frontend", level: "intermedio" },

  // Backend
  { name: "Node.js", category: "backend", level: "intermedio" },
  { name: "Java", category: "backend", level: "intermedio" },
  { name: "PHP", category: "backend", level: "intermedio" },
  { name: "JDBC / Servlets", category: "backend", level: "básico" },

  // Databases
  { name: "Firebase", category: "backend", level: "intermedio" },
  { name: "MySQL", category: "backend", level: "intermedio" },
  { name: "SQL Server", category: "backend", level: "intermedio" },
  { name: "Supabase", category: "backend", level: "intermedio" },

  // QA
  { name: "Scrum", category: "qa", level: "avanzado" },
  { name: "Kanban", category: "qa", level: "avanzado" },

  // Tools
  { name: "Git / GitHub", category: "tools", level: "avanzado" },
  { name: "Visual Studio Code", category: "tools", level: "avanzado" },
  { name: "Eclipse", category: "tools", level: "intermedio" },
  { name: "Expo", category: "tools", level: "intermedio" },
];