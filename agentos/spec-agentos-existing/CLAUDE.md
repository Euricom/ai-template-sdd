# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Production build (TypeScript + Vite)
pnpm lint         # Run ESLint
pnpm preview      # Preview production build
pnpm test:ci      # Run tests in CI mode (non-interactive)
```

## Architecture Overview

This is a React 19 + TypeScript application built with Vite, using TailwindCSS v4 and Shadcn/UI components.

### API Layer Architecture
- **Type-Safe API**: Auto-generated OpenAPI schema types in `src/api/schema.ts`
- **Resource-Based Organization**: APIs grouped by domain (`products/`, `users/`, etc.)
- **Custom HTTP Client**: Use `useApiInstance` hook - pass `ApiInstance` as first parameter to all API functions
- **DTO Mapping**: Raw API responses mapped to domain entities with proper Date objects
- **Pattern**: API functions follow naming like `getProduct(api, id)`, `createUser(api, userData)`

### Component Structure
- **App Layout**: Nested routing with `AppLayout` component and `Outlet`
- **UI Components**: Shadcn/UI components in `/ui`, custom components in `/components`
- **Theme System**: Custom ThemeContext with dark/light/system modes and localStorage persistence
- **Responsive**: Mobile-first TailwindCSS approach with `useMobile` hook

### State Management
- **Server State**: TanStack Query v5 for API data
- **Global State**: React contexts (currently Theme only)
- **Authentication**: `useAuth` hook with Bearer token support

## Code Conventions

### File Organization
- **Naming**: dash-case for files/folders, PascalCase for React components
- **Colocation**: Single-use components near their usage, reusable ones in `/components`
- **Path Aliases**: `@/*` maps to `src/*`

### API Development
- **Environment**: Requires `VITE_API_URL` and `VITE_APP_NAME` environment variables
- **API Client**: Always use `useApiInstance` hook for API calls
- **Error Handling**: ApiInstance handles common HTTP errors, API wrappers handle business logic
- **Type Safety**: All API responses use auto-generated OpenAPI types

### Testing
- **Framework**: Vitest with explicit imports
- **Files**: `.spec.ts` suffix, colocated with source files
- **Mocking**: Prefer `vi.spyOn` over `vi.mock`
- **CI**: Use `pnpm test:ci` for non-interactive test runs

## Important Files
- `src/api/schema.ts` - Auto-generated OpenAPI types (do not edit manually)
- `src/hooks/useApiInstance.ts` - HTTP client configuration
- `src/env.ts` - Environment variable validation with Zod
- `ai-docs/` - Additional development guidelines and best practices