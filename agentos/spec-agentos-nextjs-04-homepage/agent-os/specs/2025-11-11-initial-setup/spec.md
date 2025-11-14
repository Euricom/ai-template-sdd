# Specification: Initial Setup

## Goal
Establish the foundational Next.js 14+ project structure with TypeScript, Tailwind CSS v4, and all required Phase 1 dependencies and configurations to enable rapid development of Agent Hub's MVP features.

## User Stories
- As a developer, I want a fully configured Next.js project with TypeScript strict mode so that I can start building features immediately with type safety
- As a developer, I want a pre-defined folder structure for Phase 1 features so that I know where to place components, pages, and utilities following established conventions

## Specific Requirements

**Next.js 14+ Project Initialization with App Router**
- Initialize Next.js 14+ project using App Router architecture (not Pages Router)
- Configure for React 19.2.0 as specified in tech stack
- Enable Server Components as default rendering strategy
- Set up file-based routing structure in /app directory
- Configure for Bun runtime compatibility
- Ensure automatic code splitting and fast refresh are functional

**TypeScript Strict Mode Configuration**
- Enable TypeScript strict mode in tsconfig.json for maximum type safety
- Configure path aliases for clean imports (e.g., @ alias pointing to src or root)
- Set up Next.js specific compiler options (jsx: preserve, module: esnext, moduleResolution: bundler)
- Include proper lib declarations for DOM and ES2023
- Configure incremental compilation for faster builds

**Tailwind CSS v4 Setup**
- Install Tailwind CSS v4 with @tailwindcss/postcss package (v4 uses different setup than v3)
- Create tailwind.config.ts with base configuration for content paths
- Set up PostCSS configuration for Tailwind v4 processing
- Create global CSS file with Tailwind directives (@tailwind base, components, utilities)
- Import global CSS in root layout component

**Package Manager and Runtime Configuration**
- Use pnpm 10.21.0 as package manager (already configured in existing package.json)
- Maintain packageManager field in package.json for consistency
- Configure for Bun runtime compatibility
- Set up .npmrc if needed for pnpm-specific settings
- Ensure lockfile (pnpm-lock.yaml) is committed

**oxlint Setup for Code Quality**
- Install oxlint as development dependency
- Create oxlint.config.json with appropriate linting rules for TypeScript and React
- Configure lint script in package.json
- Set up rules compatible with Next.js App Router patterns
- Configure to lint .ts, .tsx, .js, .jsx files

**Phase 1 Dependencies in package.json**
- next (14.0.0 or higher)
- react (19.2.0 exactly as specified)
- react-dom (19.2.0 exactly as specified)
- typescript (latest stable)
- tailwindcss (v4.x)
- @tailwindcss/postcss (v4.x)
- oxlint (latest)
- @types/node, @types/react, @types/react-dom for TypeScript support
- Exclude testing dependencies (Vitest, React Testing Library) per requirements
- Exclude UI component libraries (to be added as needed in feature specs)

**Root Folder Structure Creation**
- /app - Next.js App Router directory with layout.tsx, page.tsx, and error.tsx
- /app/agents/[id] - Dynamic route directory for agent detail pages (empty page.tsx placeholder)
- /app/upload - Upload form page directory (empty page.tsx placeholder)
- /components - Reusable components directory
- /components/ui - UI component library subdirectory (empty, no components yet per requirements)
- /public - Static assets directory (create empty)
- /lib - Utilities and shared code directory (exclude mock-data.ts per user request)
- Do NOT create /lib/mock-data.ts - explicitly excluded from this spec

**Root Layout Component Implementation**
- Create /app/layout.tsx with proper TypeScript types
- Set up HTML document structure with html and body tags
- Configure font loading using next/font (Inter or system font stack)
- Import global Tailwind CSS file
- Add proper metadata using Next.js metadata API (title, description)
- Use Server Component by default (no "use client" directive)
- Include proper viewport and charset configuration

**Homepage Placeholder Component**
- Create /app/page.tsx with minimal placeholder content
- Use Server Component (no "use client")
- Display simple text indicating "Agent Hub - Coming Soon" or similar
- Include proper TypeScript types for page component
- Add basic Tailwind styling to verify CSS setup works

**Standard Project Configuration Files**
- .gitignore with Next.js standard ignores (node_modules, .next, .env*, etc.)
- README.md with project overview, tech stack summary, setup instructions, and development commands
- .env.example for environment variable template (empty for Phase 1)
- Add development scripts to package.json (dev, build, start, lint)
- Configure next.config.ts (or .js) for any necessary Next.js settings

**Out of Scope**
- Mock data file (/lib/mock-data.ts) - explicitly excluded per user request
- Testing framework setup (Vitest, React Testing Library)
- UI components (navigation header, footer, buttons, cards)
- Backend API routes in /app/api
- Database configuration (SQLite, Drizzle)
- Authentication setup (Clerk)
- Deployment configuration files (Vercel, Docker)
- CI/CD pipeline configuration (GitHub Actions)
- Actual implementation of gallery, detail pages, or upload form functionality
- Environment variables for third-party services
- Error monitoring setup (Sentry)
- Email service configuration (SendGrid)
- Any populated content beyond basic placeholders

## Visual Design
No visual assets provided for this setup specification.

## Existing Code to Leverage

**package.json configuration**
- Current package.json at /Users/peter/git/temp/spec-agentos-t1/package.json has packageManager field configured for pnpm 10.21.0
- Maintain this packageManager field in the new Next.js package.json
- Keep the project private flag and use semantic versioning starting at 0.1.0 or 1.0.0

**TypeScript configuration pattern**
- Existing tsconfig.json uses project references pattern with separate app and node configurations
- For Next.js setup, follow Next.js recommended TypeScript configuration instead
- Use single tsconfig.json or follow Next.js defaults rather than project references approach

**Directory structure approach**
- Current project has /src directory but Next.js App Router typically uses root-level /app
- Place /app, /components, /lib, /public at project root (not inside /src)
- Keep agent-os folder structure as-is for documentation and specs
- Maintain clear separation between product documentation and application code
