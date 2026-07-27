import { personalWebsite } from "./personalwebsite";
import { rankingVideoCompiler } from "./rankingvideocompiler";

export type { Project, ProjectLink, ProjectStatus } from "./projecttypes";

export const projects = [rankingVideoCompiler, personalWebsite];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];
