# Shital Gurav Makeup Studio — Next.js

Next.js App Router site with Tailwind CSS and shadcn/ui.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:6000](http://localhost:6000).

Assets live in `public/uploads/` (copied from the legacy static site).

### Gallery pagination

The portfolio is static content (no backend API). `/gallery` uses **client-side pagination** with URL state:

- Query params: `category`, `q`, `sort`, `page`, `limit`
- Metadata: `total`, `totalPages`, `currentPage`, `limit`, `hasNextPage`, `hasPreviousPage` (see `lib/pagination.ts`)
- Filters/search/sort reset `page` to 1; page size is preserved in the URL when changed

## Deploy on Vercel

1. Connect this repository.
2. Set **Root Directory** to `web`.
3. Deploy (default Next.js build).

## Static export (cPanel / public_html)

In `next.config.ts`, uncomment:

```ts
output: "export",
trailingSlash: true, // optional
```

Then:

```bash
npm run build
```

Upload the contents of `web/out/` to your host document root. Keep `uploads/` alongside HTML output.

`images.unoptimized` is already enabled for static export compatibility.

## QA checklist

- [ ] Intro skip and auto-exit
- [ ] Header navigation (desktop + mobile Sheet) on all routes
- [ ] Home anchor `/#hair-styling`
- [ ] Gallery filters and lightbox dialog
- [ ] Booking form opens pre-filled WhatsApp
- [ ] Contact cards, map iframe, floating actions
- [ ] Legacy hash URLs redirect (`/#about-page` → `/about`) via `HashRedirect`

## Legacy site

The original static build remains in the repo root (`index.html`, etc.) until you cut over the domain.
