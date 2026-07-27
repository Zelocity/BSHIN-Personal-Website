import type { Project } from "./projecttypes";

export const rankingVideoCompiler: Project = {
  id: "ranking-video-compiler",
  slug: "ranking-video-compiler",

  title: "Ranking Video Compiler",

  shortDescription:
    "A full-stack application for importing, organizing, and compiling short-form video clips.",

  description:
    "Ranking Video Compiler is a web application that helps users create ranked short-form video compilations. Users can import clips from supported URLs, preview and reorder them, remove unwanted clips, and combine the final sequence into one completed video.",

  image: "/images/projects/ranking-video-compiler/cover.png",

  imageAlt:
    "Ranking Video Compiler editor showing an ordered list of video clips",

  gallery: [
    "/images/projects/ranking-video-compiler/editor.png",
    "/images/projects/ranking-video-compiler/import.png",
    "/images/projects/ranking-video-compiler/output.png",
  ],

  category: "Web",

  date: "2026 – Present",

  status: "in-progress",

  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Node.js",
    "Express",
    "Python",
    "FFmpeg",
    "yt-dlp",
  ],

  featured: true,

  role: "Full-stack developer responsible for designing the interface, building the backend API, organizing project files, and developing the video-processing workflow.",

  problem:
    "Creating ranking videos manually requires downloading clips, organizing files, placing videos in the correct order, and combining them through separate editing tools.",

  solution:
    "I created a browser-based workflow that brings clip importing, previewing, reordering, deletion, file management, and video compilation into a single application.",

  features: [
    "Import short-form videos from supported URLs",
    "Preview imported clips inside the editor",
    "Reorder clips using a drag-and-drop interface",
    "Delete unwanted clips from a project",
    "Store videos inside separate job folders",
    "Compile ordered clips into one output video",
    "Preserve imported clips when the page is refreshed",
  ],

  challenges: [
    "Keeping the visual clip order synchronized with the backend compilation order",
    "Managing input and output files for separate user projects",
    "Connecting the React frontend with the Node.js and Python workflow",
    "Handling unavailable or restricted videos from external platforms",
  ],

  results: [
    "Built a working full-stack prototype for importing and organizing video clips",
    "Created a reusable job-based file-storage structure",
    "Reduced the number of manual steps needed to prepare ranking compilations",
    "Integrated frontend controls with a Python and FFmpeg media-processing pipeline",
  ],

  youtubeUrl: "",

  links: [
    {
      label: "Source code",
      url: "https://github.com/your-username/your-repository",
    },
  ],
};
