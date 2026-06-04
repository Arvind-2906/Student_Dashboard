# Student Dashboard

This workspace contains a Next.js 16 dashboard for tracking student courses and activity. The app uses Supabase for course data, a server-rendered dashboard page, and a small set of client components for navigation and motion-heavy UI.

## Architecture

The main page lives in `student-dashboard/src/app/page.tsx` and fetches courses directly from Supabase on the server. That keeps the data access path simple, avoids shipping the database query logic to the browser, and makes the first render depend on fresh data. The visual structure is split into focused components under `student-dashboard/src/components/`, with the dashboard composed as a bento-style grid of a hero tile, activity tile, and course cards.

## Server/Client Split

I kept the data-fetching page and layout server-side, while moving interactive pieces to client components where needed. `Sidebar.tsx` and `BentoGrid.tsx` are client components because they use state and animation (`framer-motion`). That split lets the app keep server rendering for the static shell and data loading, while still supporting animated navigation and staggered card transitions on the client.

## Challenges

The main challenge was balancing server rendering with client-only animation libraries. Framer Motion and tab state required explicit client boundaries, so the solution was to keep those components isolated instead of turning the whole dashboard into a client app. Another small challenge was keeping the Supabase environment checks strict enough to fail fast when variables are missing, without pushing that setup complexity into the page component.
