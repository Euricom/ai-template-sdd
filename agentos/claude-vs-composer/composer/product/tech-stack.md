## Tech Stack

This document defines the technical stack for Agent Hub. This is a front-end only project using static/mock data, with no database or authentication at this stage.

### Framework & Runtime

- **Application Framework:** Next.js 15+ (App Router)
- **Language/Runtime:** TypeScript (latest version)
- **Package Manager:** pnpm 10.21.0

### Frontend

- **Build Tool:** Next.js built-in (Turbopack/Webpack)
- **JavaScript Framework:** React 19.2.0
- **CSS Framework:** Tailwind CSS v4
- **State Management:** React hooks (useState, useContext) for client-side state
- **Routing:** Next.js App Router (file-based routing)

### Data & Storage

- **Data Storage:** Static/mock data (no database at this stage)
- **File Handling:** Client-side file upload handling (mock storage)
- **Data Format:** JSON files for mock agent file data

### Development Tools

- **Test Framework:** Vitest (for unit/integration tests)
- **Linting/Formatting:** oxlint (latest version)
- **Type Checking:** TypeScript strict mode enabled

### Deployment & Infrastructure

- **Hosting:** Vercel (recommended for Next.js)
- **CI/CD:** GitHub Actions (optional for automated testing/deployment)

### Third-Party Services

- **None at this stage** - No authentication, database, or external services required for the initial front-end only implementation

### Notes

- This is a front-end only project for the initial phase
- No database or authentication will be implemented at this stage
- All data will be handled through static/mock data files
- Future phases may add backend services, database, and authentication as needed

