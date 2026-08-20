# SeedSense Landing

The marketing site for [SeedSense by Onda](https://seedsensesoftware.com), rebuilt as a modern Next.js application from the original static HTML site.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript, static prerendering)
- [Tailwind CSS v4](https://tailwindcss.com) with a custom theme matching the original design tokens
- `next/font` for Inter + Fraunces, `next/image` for optimized images
- Jest + React Testing Library for tests, ESLint (Next + Testing Library rules) for linting

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Scripts

| Command              | Description                       |
| -------------------- | --------------------------------- |
| `npm run dev`        | Start the dev server              |
| `npm run build`      | Production build (static)         |
| `npm run start`      | Serve the production build        |
| `npm run lint`       | Run ESLint                        |
| `npm test`           | Run the Jest + RTL test suite     |
| `npm run test:watch` | Run tests in watch mode           |

## Structure

- `src/app/` — one route per page: home, `benefits`, `about`, `all-blogs`, and one route per blog post (slugs match the original site's URLs). `sitemap.ts` and `robots.ts` generate SEO files.
- `src/components/` — shared UI: `SiteHeader`, `SiteFooter`, `ContactCta` (the dark contact section repeated on every page), `Reveal` (scroll-reveal animation), homepage sections, and blog building blocks (`Article*` primitives, `FeatureGrid`, `BlogCard`, `FilterableBlogGrid`, `BlogPostLayout`).
- `src/lib/` — site constants (`site.ts`) and blog post metadata (`posts.ts`).
- `public/images`, `public/videos` — optimized assets carried over from the original site.

## Adding a blog post

1. Add its metadata to `src/lib/posts.ts` (newest first).
2. Create `src/app/<slug>/page.tsx` composing `BlogPostLayout` with the article primitives (`ArticleP`, `ArticleH2`, `ArticleList`, `ArticleFigure`, `ArticleVideo`, `FeatureGrid`, `ArticleCta`).
3. It automatically appears on `/all-blogs` and in the sitemap.

## Legacy redirects

`next.config.ts` preserves inbound links to the old static site: `/seedsense.html` and `/features.html` redirect to `/`, and any `/<page>.html` URL redirects to `/<page>`.
