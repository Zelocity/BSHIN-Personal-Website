import type { Project } from "./projecttypes";

export const personalWebsite: Project = {
  id: "personal-website",
  slug: "personal-website",

  title: "Personal Portfolio Website",

  shortDescription:
    "A responsive portfolio showcasing my experience, skills, and projects.",

  description:
    "A custom portfolio website built to present my software development, game development, educational technology, and creative work.",

  image: "/images/projects/personal-website/cover.png",

  imageAlt: "Personal portfolio website homepage",

  gallery: [
    "/images/projects/personal-website/home.png",
    "/images/projects/personal-website/projects.png",
  ],

  category: "Web",
  date: "2026 – Present",
  status: "in-progress",

  technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],

  featured: true,

  role: "Designer and frontend developer responsible for the website design, reusable components, responsive layout, and project organization.",

  problem:
    "I needed one place to present my technical experience, creative work, and personal projects.",

  solution:
    "I developed a responsive portfolio with reusable React components, configurable data, dark mode, and individual case-study pages.",

  features: [
    "Responsive layout",
    "Light and dark themes",
    "Project category filtering",
    "Individual project pages",
  ],

  challenges: [
    "Creating a consistent pixel-inspired design",
    "Supporting responsive layouts",
    "Keeping project information easy to update",
  ],

  results: [
    "Created a reusable portfolio system",
    "Built a central location for showcasing my work",
  ],

  youtubeUrl: "",

  links: [
    {
      label: "Source code",
      url: "https://github.com/your-username/portfolio",
    },
  ],
};
