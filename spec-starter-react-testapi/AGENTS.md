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

# Coding Style Guide

## General Guidelines

- Keep the code simple and readable.
- Use Prettier for code formatting.

## File Naming and Organization

- Files and folder follow the dash-casing (e.g `src/coding-style.md`)
- React components use PascalCasing (e.g. `src/components/Button.tsx`)
- Colocate files in the folder where they're used unless they can be used across the app
- If a component can be used in many places, place it in the `src/components` folder
- Shadcn components are in `src/components/ui`, all other components are in `src/components/`

## JavaScript

- Use `const` and `let` instead of `var`.
- Prefer arrow functions for anonymous functions.
- Use template literals for string concatenation.
- Always use semicolons.
- Follow the Prettier configuration for formatting.

# Fundamentals principles

## Fundamentals

- Write clean simple, readable code
- Implement feature in the simplest possible way
- Keep files small and focused (<200 lines)
- Test after every meaningful change
- Focus and core functionality before optimization
- Use clear, consistent naming
- Think thoroughly before coding, Write 2-3 reasoning paragraphs
- ALWAYS write simple, clean and modular code
- Use clear and easy-to-understand language, write in short sentences

## Error fixing

- DO NOT JUMP TO CONCLUSIONS. Consider multiple possible causes between deciding
- Explain the problem in plain English
- Make minimal necessary changes, changing a few lines of code as possible
- In case of strange errors, ask the user to perform a Perplexity web search to the latest up-to-date information.

## Building Process

- Verify each new feature works by telling the user how to test it.
- DO NOT write complicated and confusing code. Opt for the simple & modular approach
- When not sure what to do, tell the user to perform a web search

## Comments

- ALWAYS try to add more helpful and explanatory comments into our codebase
- NEVER delete old comments - unless they are obviously wrong / Obsolete
- Include LOTS of explanatory comments in your code. ALWAYS write well documented code.
- Document all changes and their reasoning IN THE COMMENTS YOU WRITING
- When writing comments, use clear and easy-to-understand language, with short sentences.

# Unit testing

- Use Vitest as the unit testing framework.
- Import testing functions (e.g., `test`, `describe`) explicitly instead of relying on the global Vitest API.
- Name unit test files with the `.spec.ts` suffix (or `.spec.js` for JavaScript).
- Keep unit test files in the same directory as their corresponding source files, rather than in a separate `__tests__` directory.
- Isolate dependencies by using mocking and stubbing where necessary. Prefer `vi.spyOn` over `vi.mock` for more targeted mocking.
- DON'T run unit test with `pnpm test` or `npm run test`, it will required user input to continue. Use `pnpm run test:ci` instead for a single run.
