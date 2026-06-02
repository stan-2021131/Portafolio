import type { ImageMetadata } from "astro";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: ImageMetadata;
  keyContribution: string;
  github: string;
  demo?: string;
  technologiesUsed: string[];
};
