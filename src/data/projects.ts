import type { Project } from "../types/proyecto";

export const projects: Project[] = [
  {
    id: "swap",

    title: "SWAP",

    description:
      "A platform designed to help university students exchange materials, offer services, find tutors, and connect with peers through a community-driven marketplace.",

    image: "/projects/swap.png",

    keyContribution:
      "Designed and implemented recommendation systems, user-tag relationships, authentication flows, and scalable backend APIs. Developed content discovery features using Jaccard similarity to personalize recommendations based on student activity and interests.",

    github: "",

    demo: "",

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
      "A full-stack inventory management system designed to explore real-world software development practices, including role-based access control, API design, containerization, and production deployment.",

    image: "/projects/inventory-manager.png",

    keyContribution:
      "Built the entire application from scratch, including backend APIs, database modeling, role-based access control, React frontend, Dockerized infrastructure, server deployment, Cloudflare integration, and domain configuration.",

    github: "",

    demo: "",

    technologiesUsed: [
      "typescript",
      "nodejs",
      "express",
      "react",
      "postgresql",
      "docker",
    ],
  },

  {
    id: "portfolio",

    title: "Personal Portfolio",

    description:
      "A performance-focused developer portfolio designed to showcase projects, technical decision-making, and software engineering experience through a modern and maintainable architecture.",

    image: "/projects/portfolio.png",

    keyContribution:
      "Designed and implemented the complete component architecture, responsive layouts, reusable UI system, and technology showcase while leveraging Astro's island architecture and performance-first philosophy.",

    github: "",

    demo: "",

    technologiesUsed: ["astro", "typescript", "html", "css"],
  },

  {
    id: "career-recommender",

    title: "Career Recommendation System",

    description:
      "A graph-based recommendation platform that matches students with university degree programs based on interests, skills, and academic preferences.",

    image: "/projects/career-recommender.png",

    keyContribution:
      "Designed graph relationships in Neo4j, implemented recommendation logic, and integrated FastAPI services with a React frontend to explore real-world graph database applications.",

    github: "",

    demo: "",

    technologiesUsed: ["python", "react", "typescript", "neo4j"],
  },
];
