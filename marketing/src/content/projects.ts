export type ProjectStatus = "draft" | "published";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  services: readonly string[];
  year: number;
  image: string;
  href?: string;
  status: ProjectStatus;
}

export const projects: readonly Project[] = [];

export function selectPublishedProjects(
  entries: readonly Project[],
): readonly Project[] {
  return entries.filter((project) => project.status === "published");
}

export const publishedProjects = selectPublishedProjects(projects);
