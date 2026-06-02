# Sergio Tan | Backend-Focused Full Stack Developer Portfolio

A modern, high-performance, single-page developer portfolio designed to present professional experience, technical decision-making, and software engineering capabilities with a minimalist, content-focused dark aesthetic.

---

## Overview

### What the Project Is

This project is a performance-first personal portfolio website built with Astro and styled using custom vanilla CSS. It serves as a centralized hub to showcase engineering principles, dynamic project portfolios, and an interactive technical skills matrix.

### Why It Was Built

Originally conceived as a course project, the codebase was refactored and elevated to a professional production-grade standard. The goal was to build a portfolio that reflects actual engineering practices—emphasizing fast load times, modular architecture, strict data-view separation, and excellent accessibility, rather than relying on generic, heavy templates.

### The Problems It Solves

- **Aesthetic vs. Performance Tradeoff**: Most modern portfolio templates ship excessive client-side JavaScript (e.g., heavy React, Next.js, or Tailwind runtimes) for simple static content. This project provides fluid interactive animations (such as the custom coordinates-based skill cards and hover-expanding details) with near-zero runtime client-side JavaScript.
- **Maintainability**: Separates content data (`src/data/*`) from presentation layouts (`src/components/*`). Adding or editing projects and technologies does not require modifying layout structures or HTML code.
- **Information Density**: Condenses professional history, technical competency details, and personal engineering philosophies (the "How I Work" workflow) into an easily scannable, single-page interface with collapsible nodes.

### Intended Audience

Technical recruiters, hiring managers, and senior software engineers looking to evaluate backend design logic, frontend execution quality, code cleanliness, and general engineering discipline.

---

## Features

- **Performance-First Design**: Powered by Astro’s static site compiler for high-speed page loads and optimized Core Web Vitals.
- **Interactive Technology Showcase**: A modular skills matrix categorized by domains (Backend, Frontend, Databases, Tools & Cloud, Mobile) featuring hover-activated custom description cards showing the developer's experience with each technology.
- **Dynamic Projects Portfolio**: An interactive project carousel with smooth, hardware-accelerated transitions, customized badges, and direct links to live demos and GitHub repositories.
- **Responsive Layout System**: A fluid CSS grid/flexbox layout that adapts seamlessly to desktop, tablet, and mobile screens.
- **Collapsing Sidebar Navigation**: A custom, CSS-driven vertical navigation drawer that expands on hover for desktop viewports and toggles via a mobile menu button on touch devices.
- **Downloadable CV Integration**: Native links to download a PDF copy of the developer's resume (`/CV/CV_SergioTan.pdf`).
- **SEO & Social Metadata**: Pre-configured meta tags, Search Engine Optimization descriptors, theme color rules, and Open Graph (OG) integration for rich previews when shared on platforms like LinkedIn or GitHub.

---

## Tech Stack

### Frontend Core: Astro (v6.4.2)

- **What it is**: A modern web framework optimized for content-driven websites.
- **Why it was chosen**: Astro was selected because of its developer-friendly component model and its focus on content delivery. Since a developer portfolio is primarily static content, heavy client-side frameworks (like Next.js) are unnecessary. Astro renders pages to static HTML at build time, yielding near-instant load speeds.
- **How it was applied**: Used to compose modular components (`.astro` files) using HTML-like syntax, scope styling locally to avoid leakage, and handle static asset resolution automatically.

### Programming Language: TypeScript (Strict mode extends)

- **What it is**: A strongly typed superset of JavaScript.
- **Why it was chosen**: Standardizes data modeling, ensures compile-time safety, and prevents runtime exceptions when mapping static data arrays to UI components.
- **How it was applied**: Extends `"astro/tsconfigs/strict"` to define rigid interfaces for schemas (e.g., [Project](file:///c:/Git/Portafolio/src/types/proyecto.ts) and [Technology](file:///c:/Git/Portafolio/src/types/tecnologia.ts)), ensuring the static datasets strictly match configuration specifications.

### Styling: Scoped Vanilla CSS

- **What it is**: Standard Cascading Style Sheets without external utility frameworks.
- **Why it was chosen**: TailwindCSS or CSS-in-JS frameworks add build complexity or runtime overhead. Scoped vanilla CSS gives granular layout control and allows micro-interactions via hardware-accelerated transitions (`transform`, `opacity`, `max-height`) without additional stylesheet bloat.
- **How it was applied**: Implemented a design token system using CSS variables in `:root` for typography, spacing, border-radii, and a custom dark mode palette. Individual components contain `<style>` blocks that Astro automatically scopes to prevent collisions.

### Tooling & Icons: Astro-Icon & Iconify

- **What it is**: An integration that allows loading SVG icons on demand from open-source icon packs.
- **Why it was chosen**: Avoids bundling unused SVG files, drastically reducing the final HTML bundle size.
- **How it was applied**: Integrated using `astro-icon/components` to dynamically fetch type-safe logos and Material Design Icons (e.g., `mdi:home`, `logos:nodejs-icon`) based on data strings defined in static configurations.

### Deployment Infrastructure: Cloudflare & Google Cloud Platform (GCP)

- **What it is**: DNS routing, edge caching, and server deployment architecture.
- **Why it was chosen**: Cloudflare provides fast Global CDN distribution, free SSL termination, and protection against traffic spikes. Google Cloud provides high-availability hosting for backend services and demo projects.
- **How it was applied**: Serves static pages at edge locations with optimized DNS routing, pointing custom subdomains to static builds and live backends.

---

## Architecture & Design Decisions

### 1. Framework Selection

Astro was chosen because it focuses heavily on content delivery and makes project construction highly intuitive. Many modern developers default to React SPAs, which require client-side hydration, client-side routing, and complex build setups. Astro provides a clean middle ground: component-driven development similar to React, but outputting raw HTML. When client-side JS is needed, it is injected in minimal amounts via scoped `<script>` elements.

### 2. File and Directory Organization

The project structure divides logic into clear domain boundaries:

- **`src/components/`**: Exclusively houses presentation markup and styling. It separates page-level sections (e.g., `Hero.astro`, `About.astro`) from modular visual building blocks (e.g., `ProjectCard.astro`, `TechnologyTag.astro`).
- **`src/data/`**: Acts as a static data layer. Data structures are decoupled from the layout, so modifying a project or adding a skill does not require code changes in components.
- **`src/styles/`**: Segmented stylesheets manage separation of concerns: variables, resets, core typography, and reusable buttons are imported systematically through `global.css`.

### 3. Component Reusability

Granular UI elements are extracted into parameters-driven components. For instance:

- `SidebarLink.astro` dynamically resolves links, classes, and Icons.
- `ProjectTag.astro` and `TechnologyTag.astro` accept custom styling variables (like `--tech-color`), enabling dynamic themes for individual items based on their brand identity (e.g., green borders for Node.js, blue for TypeScript) using CSS `color-mix`.

### 4. Interactive Tech Stack Showcase

The tech stack matrix utilizes an innovative, CSS-driven layout:

- Category containers (`CategoryCard.astro`) dynamically compute heights based on the item count (`technologies.length * 50 + 120`).
- Individual tags are absolutely positioned using coordinates (`position: { x, y }`) defined in the database array.
- Micro-interactions are handled entirely by CSS: hovering over a technology tag smoothly transitions its width (`max-width: 180px` to `420px`), scales its border-radius, expands details (`max-height: 0` to `300px`), and triggers an underlying drop-shadow glow using the technology's custom brand color.

### 5. Performance Considerations

- **Static Compilation**: The entire website builds into flat HTML and CSS files. The browser loads pre-compiled layouts instantly without database queries.
- **Resource Optimization**: Native Astro `<Image />` tags convert image assets (`.png`, `.jpg`, `.jpeg`) into optimized `.webp` formats at build time. Dimensions are declared on compile, preventing Cumulative Layout Shift (CLS).
- **GPU-Accelerated Animations**: Transitions rely on properties that do not trigger reflows (e.g., `transform`, `opacity`), ensuring animations stay locked at 60 FPS even on low-end mobile devices.

### 6. Accessibility (a11y)

- **Semantic Outlines**: Uses HTML5 structures (`<main>`, `<aside>`, `<nav>`, `<section>`).
- **Screen Reader Support**: Navigation elements contain explicit `aria-label` declarations.
- **Contrast Ratios**: The theme adheres to dark-mode parameters with accessible background-to-text ratios.
- **Responsive Sizing**: Media queries adapt elements smoothly, preventing text overflow and keeping targets clickable on touchscreens.

### 7. Scalability & Extensibility

The type-safe structure allows the portfolio to scale as the author's career grows:

- **Scalable Data Schema**: New projects can be added to `src/data/projects.ts` using the strict `Project` interface, which automatically formats layout, tags, links, and grid alignment.
- **Modular Sections**: Additional pages or sections can be incorporated into `src/pages/index.astro` by importing new components, requiring no changes to the global `Layout.astro`.

---

## Project Structure

```text
Portafolio/
├── public/
│   ├── CV/
│   │   └── CV_SergioTan.pdf    # Downloadable resume
│   ├── favicon.ico             # Legacy browser icon
│   ├── favicon.svg             # Modern vector icon
│   └── preview.png             # Open Graph preview image (social share cards)
├── src/
│   ├── assets/                 # Background and project image assets
│   ├── components/             # Reusable Astro components
│   │   ├── Projects/           # Subsystem for project showcases
│   │   │   ├── ProjectCard.astro
│   │   │   ├── ProjectCarrusel.astro
│   │   │   ├── ProjectTag.astro
│   │   │   └── Projects.astro
│   │   ├── Techstack/          # Subsystem for tech stack mapping
│   │   │   ├── CategoryCard.astro
│   │   │   ├── TechnologyTag.astro
│   │   │   └── Techstack.astro
│   │   ├── About.astro         # Developer background and stats
│   │   ├── Hero.astro          # Landing section with main titles
│   │   ├── HowWork.astro       # Architectural principles/philosophy section
│   │   ├── LookingAhead.astro  # Future targets and goals section
│   │   ├── Sidebar.astro       # Hover-expanding primary navigation
│   │   ├── SidebarLink.astro   # Iconified menu link component
│   │   └── WorkStep.astro      # Sub-component for development workflow
│   ├── data/                   # Type-safe datasets for direct UI mapping
│   │   ├── projects.ts         # Centralized project definitions
│   │   └── tecnologias.ts      # Skill metrics, categorization, and details
│   ├── layouts/                # Global layout wrappers
│   │   └── Layout.astro        # Base HTML document configuration
│   ├── pages/                  # Static file-based routing entrypoints
│   │   └── index.astro         # Portfolio homepage
│   ├── styles/                 # Cascading Style Sheets module folder
│   │   ├── buttons.css         # Button variants
│   │   ├── global.css          # Main entrypoint style loader
│   │   ├── reset.css           # Browser style normalization
│   │   ├── typography.css      # Font families and weights
│   │   └── variables.css       # Core design tokens
│   └── types/                  # Strict Type definitions
│       ├── proyecto.ts         # Schema for a portfolio Project
│       └── tecnologia.ts       # Schema for a Technology skill tag
├── astro.config.mjs            # Astro integration configuration
├── package.json                # Project script manager and dependencies
├── tsconfig.json               # TypeScript strict configuration
└── README.md                   # Technical documentation
```

---

## Installation

Follow these steps to set up the project locally:

### Requirements

- **Node.js**: Version `22.12.0` or higher (configured in `engines`).
- **NPM**: Package manager (installed natively with Node.js).

### 1. Clone the Repository

```bash
git clone https://github.com/stan-2021131/Portafolio.git
cd Portafolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Currently, this portfolio is a static-compiled client-side application and does not require local `.env` variables. All static assets and data links are configured directly inside TypeScript models.

_(Note: If you integrate a contact form service or analytics tracking IDs in the future, configure them as environment variables inside an `.env` file in the root directory)._

---

## Development

To spin up a local development server with Hot Module Replacement (HMR) and live linting:

```bash
npm run dev
```

By default, the development server will run at:

- **Local URL**: [http://localhost:4321/](http://localhost:4321/)
- **Network access**: Run `npm run dev -- --host` to expose the server to your local network.

---

## Build

To compile a highly optimized, static production bundle:

```bash
npm run build
```

This command invokes the Astro compiler to compile all components, optimize images, bundle stylesheets, and output static HTML/CSS files into the directory:

- **Build Output**: [dist/](file:///c:/Git/Portafolio/dist)

To preview the built production bundle locally before deploying it:

```bash
npm run preview
```

This starts a lightweight local server at [http://localhost:4321/](http://localhost:4321/) reading directly from the `dist/` directory to simulate a live server environment.

---

## Deployment

This portfolio is configured for automated deployment. The production version is compiled statically and is live at the following address:

👉 **[https://portafolio.sergiotan.online](https://portafolio.sergiotan.online)**

### Basic Deployment Procedure

Since the build command outputs pure static assets (`dist/`), the website can be hosted on any static hosting provider. Here is the general workflow:

1. **Build the assets**: Run `npm run build` to generate the `dist` directory.
2. **Point DNS records**: Configure your domain registrar (e.g. Cloudflare) to route traffic to your static provider (such as Cloudflare Pages, Netlify, Vercel, or a Google Cloud Storage bucket).
3. **Deploy the directory**: Upload the contents of the `dist/` folder to the target provider.

---

## Future Improvements

Below are planned engineering enhancements to expand the system architecture and features:

- **Theme Toggle**: Implement a client-side theme switcher utilizing local storage persistence to toggle between light and dark modes.
- **Dynamic Writing Section (Blog)**: Integrate Astro's native content collections to render MDX/Markdown files, allowing the publication of technical articles.

- **Contact Form Integration**: Integrate a serverless function endpoint (e.g., Cloudflare Workers or AWS Lambda) to receive contact messages securely.

---

## Author

**Sergio Tan**  
_Backend-Focused Full Stack Developer_

- **LinkedIn**: [https://www.linkedin.com/in/sergio-tan/](https://www.linkedin.com/in/sergio-tan/)
- **GitHub**: [https://github.com/stan-2021131](https://github.com/stan-2021131)
- **Email**: [sergiocoromac@gmail.com](mailto:sergiocoromac@gmail.com)
