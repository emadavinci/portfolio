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
    githubUrl: "https://github.com/emadavinci/trello-para-portfolio",
    liveUrl: "https://trello-para-portfolio.vercel.app",
    type: "fullstack",
  },
  {
    id: "4",
    title: "Bolsones QA Suite — E2E Testing",
    description:
      "Suite de 35 tests automatizados end-to-end con Playwright y TypeScript sobre el sistema de gestión de bolsones. Cubre login por rol, protección de 10 rutas privadas, validaciones de formularios (10 casos de borde en el registro) y navegación completa de los 3 paneles (admin, voluntario, familia). Sesiones reutilizables vía storageState y pipeline de CI con GitHub Actions.",
    tags: ["Playwright", "TypeScript", "E2E Testing", "GitHub Actions", "QA"],
    githubUrl: "https://github.com/emadavinci/bolsones-qa-suite",
    type: "qa",
  },
 {
    id: "5",
    title: "Inventario PyME — API REST + Dashboard",
    description:
      "Sistema de gestión de inventario full-stack con API REST propia (Node.js, Express, Prisma, MySQL) y frontend en Next.js. Autenticación JWT con roles, movimientos de stock transaccionales (entradas, salidas, ajustes), alertas de stock bajo y CRUD completo de productos, categorías y proveedores.",
    tags: ["Node.js", "Express", "MySQL", "Prisma", "JWT", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/emadavinci/inventario-pyme",
    liveUrl: "https://inventario-pyme-git-main-emadavincis-projects.vercel.app",
    type: "fullstack",
  },
];