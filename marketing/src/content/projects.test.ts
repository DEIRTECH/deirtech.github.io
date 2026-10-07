import assert from "node:assert/strict";
import test from "node:test";

import {
  publishedProjects,
  projects,
  selectPublishedProjects,
  type Project,
} from "./projects.ts";

test("the launch state has no published projects", () => {
  assert.deepEqual(projects, []);
  assert.deepEqual(publishedProjects, []);
});

test("selectPublishedProjects excludes draft entries", () => {
  const entries: readonly Project[] = [
    {
      slug: "approved-work",
      title: "Approved work",
      summary: "A fixture used only to verify visibility behavior.",
      services: ["Strategy"],
      year: 2026,
      image: "/project-image.png",
      status: "published",
    },
    {
      slug: "unpublished-work",
      title: "Unpublished work",
      summary: "A fixture used only to verify visibility behavior.",
      services: ["Strategy"],
      year: 2026,
      image: "/project-image.png",
      status: "draft",
    },
  ];

  assert.deepEqual(selectPublishedProjects(entries), [entries[0]]);
});
