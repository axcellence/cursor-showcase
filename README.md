# CSS Cursor Showcase

A single-page specimen of standard CSS `cursor` keywords, built with [TanStack Start](https://tanstack.com/start) (TypeScript + Vite).

Hover a tile: the illustration fades and your pointer becomes that cursor. Leave the tile and the drawing returns. On touch devices the drawings stay visible.

## Clone

```bash
git clone https://github.com/axcellence/cursor-showcase.git
cd cursor-showcase
```

Repo: [https://github.com/axcellence/cursor-showcase](https://github.com/axcellence/cursor-showcase)

## Install

```bash
pnpm install
```

npm works too (`npm install`).

## Develop

```bash
pnpm dev
```

The app serves at [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Build

```bash
pnpm build
pnpm preview
```

## Deploy (Vercel)

The Vite config includes Nitro so TanStack Start can run on Vercel.

Import the GitHub repo at [vercel.com/new](https://vercel.com/new) and select `axcellence/cursor-showcase`, or from a logged-in machine:

```bash
npx vercel login
npx vercel link
npx vercel deploy --prod
```

Vercel should detect TanStack Start. No extra build command or output directory is required.

## Stack

- TanStack Start + TanStack Router
- Vite
- Nitro (Vercel hosting)
- React 19
- TypeScript
- Tailwind CSS v4
- Biome (`pnpm check`)
