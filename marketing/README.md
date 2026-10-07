# Deirtech marketing site

The marketing site is a small React, TypeScript, and Vite application.

## Local development

Run these commands from `marketing/`:

```sh
npm ci
npm run dev
```

For the local quality checks and a production preview:

```sh
npm test
npm run lint
npm run build
npm run preview -- --host 127.0.0.1
```

## Editing content

- Edit public-facing site copy, navigation, optional contact CTA, and section labels in `src/content/site.ts`.
- Add approved work in `src/content/projects.ts`. Only items with `status: "published"` appear on the page; when there are no published entries, both the Work navigation item and the Work section remain hidden.
- Keep the Deirtech design tokens and component styles in `src/App.css`, with global typography and accessibility defaults in `src/index.css`.
- Approved wordmark and arc artwork live under `public/assets/`. Geist and Geist Mono are bundled locally through Fontsource packages.
- Canonical, social-sharing, and crawl metadata use `https://deirtech.com/` as the production URL.

Do not invent client work, results, testimonials, contact details, or other public claims. Keep all future case-study facts in the content modules instead of embedding them in layout components.

## Deployment boundary

This site is already published by an existing Netlify integration. Its project settings, repository connection, build settings, environment variables, domain, and DNS are managed outside this repository and must not be changed as part of normal site work.

Local implementation, committing, pushing, the Netlify deployment, and public verification are separate steps. A push or deploy requires explicit approval; after an approved deployment, verify the live site independently before describing it as published.
