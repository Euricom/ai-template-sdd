# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Development Commands

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Production build (TypeScript + Vite)
pnpm lint         # Run ESLint
pnpm preview      # Preview production build
```

## Architecture Overview

This is a minimal React 19 + Vite starter template using:
- **React 19.2.0**: UI framework with React DOM
- **Vite (Rolldown)**: Build tool using `rolldown-vite@7.2.2` for faster builds
- **TypeScript 5.9**: Type safety with strict configuration
- **ESLint**: Linting with react-hooks and react-refresh plugins

**Entry points:**
- `src/main.tsx` - Application entry point, renders App component with StrictMode
- `src/App.tsx` - Root component
- `index.html` - HTML template with root div

**Build configuration:**
- `vite.config.ts` - Vite configuration with React plugin
- `tsconfig.json` - TypeScript base config
- `tsconfig.app.json` - TypeScript config for application code
- `tsconfig.node.json` - TypeScript config for Node/build scripts

**Build Tool Notes:**
This project uses `rolldown-vite` (a Rust-based Vite alternative) instead of standard Vite for improved build performance. This is configured via the `overrides` field in package.json.

# Coding Style Guide

## General Guidelines

- Keep the code simple and readable.
- Use Prettier for code formatting.

## File Naming and Organization

- Files and folder follow the dash-casing (e.g `src/coding-style.md`)
- React components use PascalCasing (e.g. `src/components/Button.tsx`)
- Colocate files in the folder where they're used unless they can be used across the app
- If a component can be used in many places, place it in the `src/components` folder
- When using Shadcn UI, components go in `src/components/ui`, all other components in `src/components/`

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

**Note:** Vitest is not yet installed in this project. When adding tests, install Vitest and add test scripts to package.json.

When implementing tests:
- Use Vitest as the unit testing framework.
- Import testing functions (e.g., `test`, `describe`) explicitly instead of relying on the global Vitest API.
- Name unit test files with the `.spec.ts` suffix (or `.spec.tsx` for components).
- Keep unit test files in the same directory as their corresponding source files, rather than in a separate `__tests__` directory.
- Isolate dependencies by using mocking and stubbing where necessary. Prefer `vi.spyOn` over `vi.mock` for more targeted mocking.
- Run tests with `pnpm run test:ci` for single runs (avoid interactive mode).
