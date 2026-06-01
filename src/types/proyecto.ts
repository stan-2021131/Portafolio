import type { Technology } from "./tecnologia";

export type Project = {
  title: string;
  description: string;
  image: string;
  keyContribution: string;
  github: string;
  demo: string;
  technologiesUsed: Technology[];
};
