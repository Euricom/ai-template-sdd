# Tech Stack

This document defines all technology choices for the Claude Code Agent Hub application. Since this is a Next.js frontend-only project (Phase 1 MVP with static/mock data), the tech stack differs from the standard full-stack configuration.

## Framework & Runtime

- **Application Framework:** Next.js 14+ (App Router)
- **Language/Runtime:** TypeScript 5.9.3 / Node.js (latest LTS)
- **Package Manager:** pnpm 10.21.0

## Frontend

- **Build Tool:** Next.js built-in (Turbopack/Webpack)
- **JavaScript Framework:** React 19.2.0
- **CSS Framework:** Custom CSS (or CSS Modules)
- **UI Components:** Custom components
- **State Management:** React hooks (useState, useContext) for client-side state
- **Routing:** Next.js App Router (file-based routing)

## Data Layer (Phase 1 - Static/Mock)

- **Data Storage:** In-memory mock data (TypeScript constants)
- **Data Persistence:** None (static data resets on page refresh)
- **API Layer:** Next.js API routes (optional, for form handling simulation)

## Testing & Quality

- **Test Framework:** Vitest (for unit/integration tests)
- **Linting/Formatting:** ESLint 9.39.1, TypeScript ESLint 8.46.3
- **Type Checking:** TypeScript strict mode enabled

## Deployment & Infrastructure

- **Hosting:** Vercel (recommended for Next.js)
- **CI/CD:** GitHub Actions (optional for automated testing/deployment)

## Browser Features

- **Clipboard API:** Navigator.clipboard for copy-to-clipboard functionality
- **Local Storage:** Optional for persisting user preferences (not required for MVP)

## Future Considerations (Post-MVP)

When transitioning from static/mock data to a full application:

- **Database:** MySQL with Drizzle ORM (per standard tech stack)
- **Authentication:** Clerk (per standard tech stack)
- **Backend Framework:** Potentially migrate to Hono + React (per standard tech stack) or continue with Next.js full-stack
- **Email:** SendGrid (per standard tech stack)
- **Monitoring:** SendGrid or alternative monitoring solution

## Development Tools

- **Version Control:** Git
- **Code Editor:** VS Code (recommended with ESLint/Prettier extensions)
- **Browser DevTools:** Chrome/Firefox DevTools for debugging

## Notes

- This stack prioritizes rapid MVP development with Next.js static generation
- No backend services, database, or authentication required for Phase 1
- All data is mock/static and lives in the frontend codebase
- Future phases may introduce backend services following the standard tech stack patterns
