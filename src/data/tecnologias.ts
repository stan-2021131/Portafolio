import type { Technology, Category } from "../types/tecnologia";

// Skill level scale:
// 1 = Basic familiarity
// 2 = Beginner
// 3 = Intermediate
// 4 = Advanced
// 5 = Expert

export const technologies: Technology[] = [
  {
    id: "nodejs",
    name: "Node.js",
    icon: "logos:nodejs-icon",
    category: "Backend",
    level: 4,
    color: "#3C873A",
    description:
      "Used to build REST APIs, backend services, and web applications. Its ecosystem and flexibility make it one of my preferred backend platforms.",
    position: { x: 3, y: 30 },
  },
  {
    id: "express",
    name: "Express",
    icon: "logos:express",
    category: "Backend",
    level: 3,
    color: "#ffffff",
    description:
      "My preferred Node.js framework for API development. It provides a simple and maintainable foundation for backend applications.",
    position: { x: 5, y: 73 },
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "logos:typescript-icon",
    category: "Backend",
    level: 4,
    color: "#3178C6",
    description:
      "One of my most-used languages. I use it in both frontend and backend projects to improve maintainability, readability, and type safety.",
    position: { x: 45, y: 15 },
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "logos:javascript",
    category: "Frontend",
    level: 4,
    color: "#F7DF1E",
    description:
      "The foundation of modern web development. I use it to build interactive user interfaces and dynamic web applications.",
    position: { x: 15, y: 30 },
  },
  {
    id: "python",
    name: "Python",
    icon: "logos:python",
    category: "Backend",
    level: 2,
    color: "#3776AB",
    description:
      "Used for scripting, automation, lightweight APIs, and data-related tasks. Its simplicity and versatility make it a valuable tool.",
    position: { x: 35, y: 85 },
  },
  {
    id: "java",
    name: "Java",
    icon: "logos:java",
    category: "Backend",
    level: 3,
    color: "#ED8B00",
    description:
      "The language that helped me understand object-oriented programming fundamentals. I use it for desktop applications and backend development.",
    position: { x: 50, y: 60 },
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    icon: "logos:spring-icon",
    category: "Backend",
    level: 2,
    color: "#6DB33F",
    description:
      "Used to develop Java-based backend services and REST APIs. It introduced me to enterprise application architecture and dependency injection.",
    position: { x: 40, y: 45 },
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "logos:postgresql",
    category: "Database",
    level: 4,
    color: "#336791",
    description:
      "My preferred relational database. I value its reliability, scalability, and support for complex data models.",
    position: { x: 5, y: 30 },
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "logos:mysql",
    category: "Database",
    level: 3,
    color: "#00758F",
    description:
      "The first relational database system I used. It remains a solid choice for small and medium-sized business applications.",
    position: { x: 50, y: 50 },
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: "logos:mongodb-icon",
    category: "Database",
    level: 3,
    color: "#47A248",
    description:
      "My preferred NoSQL database thanks to its flexibility and cloud deployment capabilities through MongoDB Atlas.",
    position: { x: 10, y: 75 },
  },
  {
    id: "neo4j",
    name: "Neo4j",
    icon: "logos:neo4j",
    category: "Database",
    level: 2,
    color: "#008CC1",
    description:
      "Graph database used in a recommendation engine project where relationships and weighted connections played a key role.",
    position: { x: 40, y: 15 },
  },
  {
    id: "react",
    name: "React",
    icon: "logos:react",
    category: "Frontend",
    level: 4,
    color: "#61DAFB",
    description:
      "Component-based frontend library used in most of my academic and personal projects. Its reusable architecture makes development more efficient.",
    position: { x: 55, y: 70 },
  },
  {
    id: "astro",
    name: "Astro",
    icon: "logos:astro-icon",
    category: "Frontend",
    level: 3,
    color: "#FF5D01",
    description:
      "Used to build fast, content-focused websites with minimal JavaScript and excellent performance.",
    position: { x: 40, y: 15 },
  },
  {
    id: "html",
    name: "HTML",
    icon: "logos:html-5",
    category: "Frontend",
    level: 3,
    color: "#E34F26",
    description:
      "The standard markup language of the web. Essential for creating accessible and well-structured user interfaces.",
    position: { x: 60, y: 43 },
  },
  {
    id: "css",
    name: "CSS",
    icon: "logos:css-3",
    category: "Frontend",
    level: 2,
    color: "#1572B6",
    description:
      "The standard styling language of the web. I often prefer writing custom CSS for flexibility and fine-grained control.",
    position: { x: 15, y: 85 },
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: "logos:bootstrap",
    category: "Frontend",
    level: 2,
    color: "#7952B3",
    description:
      "Useful for quickly building interfaces and prototypes, although I prefer more customized solutions for larger projects.",
    position: { x: 7, y: 55 },
  },
  {
    id: "kotlin",
    name: "Kotlin",
    icon: "logos:kotlin-icon",
    category: "Mobile",
    level: 2,
    color: "#7F52FF",
    description:
      "Modern language for native Android development. I have built a few mobile applications with it and continue learning the ecosystem.",
    position: { x: 30, y: 35 },
  },
  {
    id: "docker",
    name: "Docker",
    icon: "logos:docker-icon",
    category: "Tools & Cloud",
    level: 3,
    color: "#2496ED",
    description:
      "Used in most of my projects to create reproducible environments, simplify deployments, and improve portability.",
    position: { x: 35, y: 27 },
  },
  {
    id: "git",
    name: "Git",
    icon: "logos:git-icon",
    category: "Tools & Cloud",
    level: 4,
    color: "#F05032",
    description:
      "Version control system used across all my projects. It helps me manage changes, collaborate efficiently, and maintain a clean workflow.",
    position: { x: 50, y: 55 },
  },
  {
    id: "github",
    name: "GitHub",
    icon: "logos:github-icon",
    category: "Tools & Cloud",
    level: 4,
    color: "#ffffff",
    description:
      "Platform where I manage repositories, collaborate on projects, and maintain public portfolios and documentation.",
    position: { x: 10, y: 70 },
  },
  {
    id: "google-cloud",
    name: "Google Cloud",
    icon: "logos:google-cloud",
    category: "Tools & Cloud",
    level: 3,
    color: "#4285F4",
    description:
      "Cloud platform used to deploy and host web applications and services in real-world environments.",
    position: { x: 5, y: 15 },
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    icon: "logos:cloudflare-icon",
    category: "Tools & Cloud",
    level: 2,
    color: "#F38020",
    description:
      "Used for DNS management, traffic optimization, and adding security layers to deployed applications.",
    position: { x: 10, y: 40 },
  },
  {
    id: "linux",
    name: "Linux / Ubuntu",
    icon: "logos:ubuntu",
    category: "Tools & Cloud",
    level: 2,
    color: "#E95420",
    description:
      "Operating system I use for server administration, development environments, and deployment workflows.",
    position: { x: 30, y: 85 },
  },
];

export function groupTechnologies(
  technologies: Technology[],
): Record<Category, Technology[]> {
  return technologies.reduce<Record<Category, Technology[]>>(
    (acc, tech) => {
      acc[tech.category].push(tech);
      return acc;
    },
    {
      Backend: [],
      Frontend: [],
      Database: [],
      Mobile: [],
      "Tools & Cloud": [],
    },
  );
}
