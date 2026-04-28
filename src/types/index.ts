// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: "dev" | "qa" | "fullstack";
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "qa" | "tools";
  level: "básico" | "intermedio" | "avanzado";
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
}