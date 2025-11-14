# Project Context

## Purpose
This is a demo/learning project built with React, TypeScript, and Vite. It serves as an exploration of modern React development patterns and the OpenSpec change management workflow.

## Tech Stack
- **Runtime**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite (rolldown-vite 7.2.2)
- **Package Manager**: pnpm 10.21.0
- **Linting**: ESLint 9.x with TypeScript ESLint and React Hooks plugin
- **Testing**: Vitest + React Testing Library (planned)

## Project Conventions

### Code Style
- **Functional components only**: Use functional components with hooks; no class components
- **Named exports preferred**: Prefer named exports over default exports for better refactoring and IDE support
- **Strict typing**: Avoid `any` types; use strict TypeScript configurations
- **ESLint configuration**: Follow the recommended TypeScript and React Hooks rules
- **Module resolution**: Uses ES modules (`"type": "module"` in package.json)

### Architecture Patterns
- **Component-based architecture**: Simple, flat component structure with React hooks for state management
- **Co-located styles**: CSS files are placed alongside their corresponding components
- **Public assets**: Static assets live in the `public/` directory

### Testing Strategy
- **Framework**: Vitest + React Testing Library
- **Unit tests**: Test components in isolation with focus on behavior over implementation
- **Test location**: Tests should be co-located with components (e.g., `Component.test.tsx`)
- **Coverage**: Aim for meaningful coverage of critical paths and user interactions

### Git Workflow
- **OpenSpec workflow**: Use the OpenSpec change management system for planning and tracking changes
- **Commit conventions**: Follow the OpenSpec proposal → apply → archive workflow
- **Change tracking**: All significant changes should have corresponding OpenSpec documents

## Domain Context
This project uses the OpenSpec system for managing changes:
- Proposals are created in `openspec/changes/` directory
- Each change follows a lifecycle: proposal → applied → archived
- See `openspec/AGENTS.md` for detailed workflow instructions

## Important Constraints
- Uses rolldown-vite (Vite 7.x with Rolldown bundler) via package overrides
- React 19.2 may have breaking changes from earlier versions
- ESLint 9.x uses flat config format (not legacy eslintrc)

## External Dependencies
- No external services or APIs currently configured
- Self-contained development environment with Vite dev server
