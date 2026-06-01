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
