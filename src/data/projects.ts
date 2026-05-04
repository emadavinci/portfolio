import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Corazones Salesianos — Gestión de Bolsones",
    description:
      "Sistema de gestión de bolsones solidarios con autenticación, 3 tipos de roles (admin, voluntario, beneficiario), paneles diferenciados por rol y landing page.",
    tags: ["React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/diegonzz/Tesis-Bolsones",
    liveUrl: "https://heart-bolsones-volunteers.web.app/",
    type: "fullstack",
  },
  {
    id: "2",
    title: "Corazones Salesianos — App Mobile",
    description:
      "Aplicación móvil companion del sistema de gestión de bolsones. Permite a voluntarios y beneficiarios operar desde sus dispositivos con la misma lógica de roles.",
    tags: ["React Native", "Expo", "Firebase"],
    githubUrl: "https://github.com/emadavinci/MobileBolsones",
    type: "fullstack",
    screenshots: [
      "/screenshots/mobile-login.jpeg",
      "/screenshots/mobile-dashboard-voluntario.jpeg",
      "/screenshots/mobile-mensajes.jpeg",
      "/screenshots/mobile-dashboard-admin.jpeg",
      "/screenshots/mobile-asistencia.jpeg",
      "/screenshots/mobile-registro.jpeg",
    ],
  },
  {
    id: "3",
    title: "Trello Clone",
    description:
      "Clon de Trello con autenticación Google, tableros personalizables, columnas y cards con drag & drop en tiempo real. Datos persistidos en Firebase Firestore.",
    tags: ["Next.js", "TypeScript", "Firebase", "dnd-kit", "Tailwind CSS"],
    githubUrl: "https://github.com/emadavinci/trello-clone",
    liveUrl: "https://trello-para-portfolio.vercel.app",
    type: "fullstack",
  },
];