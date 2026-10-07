import assert from "node:assert/strict";
import test from "node:test";

import { buildNavigation, siteContent } from "./site.ts";

test("buildNavigation hides work until published projects exist", () => {
  assert.equal(
    buildNavigation(false).some((item) => item.href === "#work"),
    false,
  );
  assert.equal(
    buildNavigation(true).some((item) => item.href === "#work"),
    true,
  );
});

test("site content reflects the approved Deirtech positioning", () => {
  assert.equal(siteContent.homeHref, "/");
  assert.equal(
    new URL(siteContent.homeHref, "http://localhost:5173/%0A").href,
    "http://localhost:5173/",
  );
  assert.equal(siteContent.hero.eyebrow, "Product Engineering & AI");
  assert.deepEqual(siteContent.hero.title, [
    "Complex systems. Clear execution.",
    "Built to ship.",
  ]);
  assert.equal(siteContent.hero.description, "From architecture to production.");
  assert.equal(siteContent.hero.ctaLabel, "Start a project");
  assert.equal(siteContent.hero.ctaHref, "mailto:contact@deirtech.com");
  assert.equal(siteContent.contact?.ctaLabel, "Start a project");
  assert.equal(
    siteContent.contact?.ctaHref,
    "mailto:contact@deirtech.com",
  );
  assert.equal(siteContent.services.eyebrow, "What we do");
  assert.match(siteContent.services.description, /^We /);
  assert.doesNotMatch(JSON.stringify(siteContent), /\bI\b/);
  assert.deepEqual(
    siteContent.services.items.map((service) => service.title),
    [
      "Product Engineering",
      "AI & Automation",
      "Architecture & Modernization",
    ],
  );
});
