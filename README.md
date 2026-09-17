# NODAYSIDLE portfolio

Cinematic portfolio of NODAYSIDLE apps with real GitHub Release downloads.

Near-black void, scroll-snap worlds (Capture / Create / Clean / Listen), sticky world labels, full-bleed product chapters, hall-of-fame filmstrip. Display: Oswald. Body: IBM Plex Sans / Mono. Respects `prefers-reduced-motion`.

Not a card grid. Not a SpaceX five-chapter clone. Not a refresh of `nodaysidle-project-pages`.

## Scripts

```bash
npm install
npm run dev      # local Vite server
npm run build   # production → dist/
npm run preview # serve dist/
```

## Deploy

`vercel.json` includes SPA rewrites. **Do not push or deploy from this agent** — files stay on disk; parent handles PR + Vercel when ready.

## Stack

- Vite 8
- React 19
- `@vitejs/plugin-react`
