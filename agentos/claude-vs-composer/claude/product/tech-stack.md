# Tech Stack

## Framework & Runtime

- **Application Framework:** Next.js 14+ (App Router)
  - Server Components for optimal performance
  - File-based routing for intuitive navigation
  - Built-in API routes for future backend integration
- **Language/Runtime:** TypeScript (latest version) / Bun (latest version)
  - TypeScript strict mode enabled for type safety
  - Bun for fast package management and runtime
- **Package Manager:** pnpm 10.21.0
  - Efficient dependency management
  - Lockfile for consistent installations

## Frontend

- **Build Tool:** Next.js built-in (Turbopack/Webpack)
  - Optimized development experience
  - Production-ready builds with automatic optimizations
- **JavaScript Framework:** React 19.2.0
  - Modern React features including Server Components
  - Concurrent rendering for improved UX
- **CSS Framework:** Tailwind CSS v4
  - Utility-first approach for rapid UI development
  - Responsive design utilities for mobile-first layouts
  - Custom configuration for Agent Hub brand colors
- **State Management:** React hooks (useState, useContext) for client-side state
  - useState for component-level state
  - useContext for sharing state across component trees
  - Server state managed through Next.js server components (Phase 2+)
- **Routing:** Next.js App Router (file-based routing)
  - App directory structure for layouts and nested routes
  - Dynamic routes for agent detail pages
  - Parallel routes for modal patterns (future)

## MVP (Phase 1) - Frontend Only

### Data Management
- **Mock Data:** Static TypeScript objects/arrays
  - Type-safe mock agent data structures
  - Simulated API responses for realistic UX
  - Located in `/lib/mock-data.ts` for easy replacement

### Component Architecture
- **UI Components:** React Server Components (default) and Client Components (for interactivity)
  - Server Components for static content and initial renders
  - Client Components for forms, copy buttons, and interactive elements
- **Code Formatting:** Syntax highlighting for agent file content display
  - Consider: `react-syntax-highlighter` or `prism-react-renderer`
  - Markdown formatting for descriptions

## Future Phases (2-4)

### Database & Storage
- **Database:** SQLite (Phase 2)
  - Lightweight, serverless database
  - Easy local development
  - Suitable for moderate scale
- **ORM/Query Builder:** Drizzle (Phase 2)
  - Type-safe database queries
  - Schema migrations
  - Excellent TypeScript integration

### Authentication & User Management
- **Authentication:** Clerk (Phase 3)
  - Drop-in authentication components
  - Session management
  - User profile management
  - Social login support

### Communication & Monitoring
- **Email:** SendGrid (Phase 4)
  - Transactional emails for notifications
  - Welcome emails and updates
- **Monitoring:** Sentry (Phase 4+)
  - Error tracking and reporting
  - Performance monitoring
  - User session replay

## Testing & Quality

- **Test Framework:** Vitest (for unit/integration tests)
  - Fast test execution
  - Compatible with Next.js and React
  - Component testing with React Testing Library
- **Linting/Formatting:** oxlint (latest version)
  - Fast, modern linting
  - Consistent code style enforcement
- **Type Checking:** TypeScript strict mode enabled
  - Catch errors at compile time
  - Improved IDE autocomplete

## Deployment & Infrastructure

- **Hosting:** Vercel (recommended for Next.js)
  - Optimized for Next.js applications
  - Automatic deployments from Git
  - Edge network for fast global delivery
  - Preview deployments for PRs
- **CI/CD:** GitHub Actions (optional for automated testing/deployment)
  - Automated test runs on PRs
  - Lint and type checking in CI
  - Automated deployment workflows

## Development Tools

- **Version Control:** Git
- **Code Editor:** VS Code recommended with extensions:
  - Oxc (for linting)
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features

## Architecture Decisions

### Why Next.js App Router?
- Modern React patterns with Server Components
- Built-in optimizations (image optimization, font optimization)
- Seamless path to add backend API routes in Phase 2
- Great developer experience with fast refresh

### Why Tailwind CSS?
- Rapid UI development with utility classes
- Responsive design made simple
- Easy to maintain consistent design system
- Small bundle size with purging

### Why SQLite + Drizzle for Phase 2?
- Zero configuration database setup
- Type-safe queries align with TypeScript-first approach
- Easy migration path to PostgreSQL if needed at scale
- Drizzle provides excellent DX and performance

### Why Clerk for Phase 3?
- Fastest path to production-ready authentication
- Pre-built UI components match modern standards
- Handles security best practices
- Scales with application growth

## Performance Considerations

- **Code Splitting:** Automatic with Next.js App Router
- **Image Optimization:** Next.js Image component for agent avatars and thumbnails
- **Font Optimization:** Next.js font optimization with `next/font`
- **Static Generation:** Use static generation where possible for agent gallery
- **Incremental Static Regeneration:** For frequently updated agent listings (Phase 2+)

## Security Considerations

- **Input Sanitization:** Sanitize user-provided content in Phase 2+
- **CSRF Protection:** Built into Next.js API routes
- **XSS Prevention:** React's automatic escaping + sanitization for markdown
- **Rate Limiting:** Implement in Phase 2 for API routes
- **Content Security Policy:** Configure in Phase 3+
