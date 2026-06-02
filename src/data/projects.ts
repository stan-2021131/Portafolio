import type { Project } from "../types/proyecto";
import inventoryImage from "../assets/inventario.png";
import swapImage from "../assets/swap.png";
import portfolioImage from "../assets/portafolio.png";
import recommendationImage from "../assets/recomendaciones.jpeg";

export const projects: Project[] = [
  {
    id: "swap",

    title: "SWAP",

    description:
      "A platform designed to help university students exchange materials, offer services, find tutors, and connect with peers through a community-driven marketplace.",

    image: swapImage,

    keyContribution:
      "Designed and implemented recommendation systems, user-tag relationships, authentication flows, and scalable backend APIs. Developed content discovery features using Jaccard similarity to personalize recommendations based on student activity and interests.",

    github: "https://github.com/her24770/swap-backend",

    demo: "https://swap.jhgo.online/es",

    technologiesUsed: [
      "typescript",
      "nodejs",
      "express",
      "postgresql",
      "redis",
      "docker",
    ],
  },

  {
    id: "inventory-manager",

    title: "Inventory Manager",

    description:
      "A full-stack inventory management system designed to explore real-world software development practices, including role-based access control, API design, containerization, UI component documentation with Storybook, testing critical frontend logic with Vitest, and production deployment.",
    image: inventoryImage,

    keyContribution:
      "Built the entire application from scratch, including backend APIs, database modeling, role-based access control, React frontend, Dockerized infrastructure, server deployment, Cloudflare integration, and domain configuration.",

    github: "https://github.com/stan-2021131/BD1_Project2",

    demo: "https://inventario.sergiotan.online/",

    technologiesUsed: [
      "typescript",
      "nodejs",
      "express",
      "react",
      "postgresql",
      "docker",
      "vitest",
      "storybook",
    ],
  },

  {
    id: "portfolio",

    title: "Personal Portfolio",

    description:
      "A performance-focused developer portfolio designed to showcase projects, technical decision-making, and software engineering experience through a modern and maintainable architecture.",

    image: portfolioImage,

    keyContribution:
      "Designed and implemented the complete component architecture, responsive layouts, reusable UI system, and technology showcase while leveraging Astro's island architecture and performance-first philosophy.",

    github: "https://github.com/stan-2021131/Portafolio",

    demo: "https://portafolio.sergiotan.online/",

    technologiesUsed: ["astro", "typescript", "html", "css"],
  },

  {
    id: "career-recommender",

    title: "Career Recommendation System",

    description:
      "A graph-based recommendation platform that matches students with university degree programs based on interests, skills, and academic preferences.",

    image: recommendationImage,

    keyContribution:
      "Designed graph relationships in Neo4j, implemented recommendation logic, and integrated FastAPI services with a React frontend to explore real-world graph database applications.",

    github: "https://github.com/stan-2021131/Proyecto-2-Algoritmos",

    demo: "",

    technologiesUsed: ["python", "react", "typescript", "neo4j"],
  },
];
