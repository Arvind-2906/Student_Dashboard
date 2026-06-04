# Student Dashboard

This workspace contains a Next.js dashboard for tracking student courses and activity. The app uses Supabase for course data, a server-rendered dashboard page, and a small set of client components for navigation and motion-heavy UI.

## Architecture

The dashboard is server-rendered by Next.js and fetches course data from Supabase on the server for fast, fresh first renders. UI is composed from focused components under `student-dashboard/src/components/` and rendered as a bento-style grid (hero, activity, course cards).

```mermaid
flowchart LR
	User[User / Browser] -->|HTTP request| NextServer[Next.js Server (Server Components)]
	NextServer -->|queries| Supabase[(Supabase)]
	NextServer -->|renders| Browser[Browser]
	Browser -->|hydrates client parts| ClientComponents[Client Components\n(Sidebar, BentoGrid)]
	ClientComponents -->|state & animation| Browser
```

## Server/Client Split

I kept the data-fetching page and layout server-side, while moving interactive pieces to client components where needed. `Sidebar.tsx` and `BentoGrid.tsx` are client components because they use state and animation (`framer-motion`). That split lets the app keep server rendering for the static shell and data loading, while still supporting animated navigation and staggered card transitions on the client.

## Challenges

The main challenge was balancing server rendering with client-only animation libraries. Framer Motion and tab state required explicit client boundaries, so the solution was to keep those components isolated instead of turning the whole dashboard into a client app. Another small challenge was keeping the Supabase environment checks strict enough to fail fast when variables are missing, without pushing that setup complexity into the page component.
