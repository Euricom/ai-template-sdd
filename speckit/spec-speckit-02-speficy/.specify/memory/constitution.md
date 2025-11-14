<!--
Sync Impact Report:
- Version change: [NEW] → 1.0.0
- Initial constitution creation
- Added sections:
  * Core Principles (5 principles)
  * Next.js Framework Standards
  * Code Quality Standards
  * Governance
- Templates requiring updates:
  ✅ plan-template.md - Constitution Check section aligns
  ✅ spec-template.md - No changes needed
  ✅ tasks-template.md - No changes needed
- Follow-up TODOs: None
-->

# Spec-SpecKit Constitution

## Core Principles

### I. Modularity & Component Isolation

Every component, utility, and service MUST be self-contained with clear, single responsibilities. Code MUST be organized into logical modules that can be understood, tested, and modified independently without affecting unrelated parts of the system.

**Rationale**: Modular code enables parallel development, easier testing, simpler debugging, and reduces cognitive load when working on specific features.

**Rules**:
- Each component/module exports a clear, minimal interface
- No circular dependencies between modules
- Shared logic extracted into reusable utilities
- Server and client code strictly separated (Next.js app directory conventions)

### II. Clean Code Standards

All code MUST prioritize readability and maintainability over cleverness. Code is read far more often than it is written, therefore clarity is paramount.

**Rationale**: Clean code reduces onboarding time, minimizes bugs, and enables faster iteration.

**Rules**:
- Descriptive naming: variables, functions, and components have self-documenting names
- Functions remain small and focused (single responsibility)
- Comments explain "why", not "what" (code explains "what")
- No magic numbers or strings - use named constants
- Consistent formatting via automated tooling (ESLint, Prettier)
- Remove dead code and unused imports immediately

### III. Next.js Best Practices (Framework Compliance)

All Next.js code MUST follow official framework conventions and leverage framework capabilities appropriately for optimal performance and developer experience.

**Rationale**: Following framework conventions ensures optimal performance, maintainability, SEO, and leverages the framework's built-in optimizations.

**Rules**:
- Use App Router (not Pages Router) for all new routes
- Server Components by default; Client Components only when needed ('use client')
- Leverage Next.js built-in optimizations: Image, Font, Link components
- Implement proper loading states (loading.tsx) and error boundaries (error.tsx)
- Use Server Actions for data mutations when appropriate
- Follow file-based routing conventions strictly
- Implement proper metadata exports for SEO
- Use dynamic imports for code splitting when beneficial
- Avoid client-side data fetching when SSR/RSC can be used
- TypeScript strict mode enabled

### IV. Type Safety & Data Validation

All code MUST be type-safe with TypeScript strict mode enabled. All external data (user input, API responses, environment variables) MUST be validated at boundaries.

**Rationale**: Type safety catches errors at compile time rather than runtime. Data validation prevents runtime errors and security vulnerabilities.

**Rules**:
- TypeScript strict mode enabled (no implicit any)
- Props, state, and function parameters fully typed
- API responses validated with schemas (Zod, Yup, or similar)
- Environment variables validated and typed
- Type guards used for runtime type narrowing
- Avoid type assertions (as) unless absolutely necessary with justification

### V. Testing & Quality Assurance

Testing requirements are determined per feature based on complexity and risk. When tests are required, they MUST be independently testable and validate user-facing behavior.

**Rationale**: Testing adds development overhead; require tests only when the value justifies the cost. When tests are needed, focus on user behavior, not implementation details.

**Rules**:
- Tests are OPTIONAL by default - include only when explicitly requested or justified by feature complexity/risk
- When tests are included, they MUST validate user stories and acceptance criteria
- Test naming follows "Given-When-Then" or "it should" conventions
- Integration tests preferred over unit tests for user-facing features
- Each user story must be independently testable
- Tests written before implementation (TDD) when explicitly requested
- Mock external dependencies (APIs, databases) in tests

## Next.js Framework Standards

**App Directory Structure**:
- `app/` - App Router pages, layouts, and route handlers
- `components/` - Reusable React components (separate server/client as needed)
- `lib/` - Utility functions, helpers, shared logic
- `types/` - Shared TypeScript types and interfaces
- `public/` - Static assets (images, fonts, etc.)
- `styles/` - Global styles, Tailwind config

**Component Organization**:
- Server Components in `components/server/` (default)
- Client Components in `components/client/` (with 'use client')
- Shared types in `components/types/`
- Each component in its own file/directory

**Performance Requirements**:
- Lighthouse score > 90 for all pages
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Use Next.js Image component for all images
- Implement proper caching strategies
- Minimize client-side JavaScript bundle size

## Code Quality Standards

**Import Organization**:
1. React/Next.js imports
2. Third-party libraries
3. Local components
4. Local utilities
5. Types
6. Styles

**File Naming Conventions**:
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase (e.g., `UserTypes.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_CONFIG.ts`)
- Next.js special files: lowercase (e.g., `page.tsx`, `layout.tsx`, `loading.tsx`)

**Error Handling**:
- Use error boundaries for component errors
- Implement proper error.tsx files in app directory
- Provide user-friendly error messages
- Log errors appropriately for debugging
- Handle async errors with try-catch or Promise.catch()

**Accessibility**:
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios meet WCAG 2.1 AA standards
- Alt text for all images

## Governance

**Amendment Process**:
- Constitution changes require documentation of rationale
- Version increments follow semantic versioning
- Breaking changes require migration guidance
- All amendments tracked in Sync Impact Report

**Compliance**:
- All feature plans MUST include Constitution Check section
- Violations require explicit justification in Complexity Tracking table
- Code reviews verify constitutional compliance
- Automated tooling enforces formatting and type safety

**Priority**:
- Constitution supersedes individual preferences or conventions
- When framework best practices conflict with other principles, framework conventions take precedence (Next.js is the foundation)
- Simplicity and clarity preferred over premature optimization

**Version**: 1.0.0 | **Ratified**: 2025-11-13 | **Last Amended**: 2025-11-13
