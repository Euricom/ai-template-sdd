# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **spec-speckit**, a Next.js 16 project with TypeScript and Tailwind CSS v4, designed to work with a sophisticated feature specification and implementation workflow system. The project contains `.specify/` and `.claude/` directories that house a complete workflow automation system for turning feature descriptions into implementation plans and executable tasks.

**Package Manager**: pnpm (v10.22.0+)

## Common Commands

### Development
```bash
pnpm dev          # Start Next.js development server on http://localhost:3000
pnpm build        # Build production application
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Workflow System Commands

The project includes custom slash commands in `.claude/commands/` for managing feature specifications:

- `/speckit.specify` - Create feature specification from natural language description
- `/speckit.clarify` - Identify underspecified areas and ask clarification questions
- `/speckit.plan` - Generate implementation plan with tech stack and architecture
- `/speckit.tasks` - Generate dependency-ordered, executable task list
- `/speckit.implement` - Execute the implementation plan task-by-task
- `/speckit.constitution` - Create/update project constitution defining principles
- `/speckit.checklist` - Generate custom checklists for feature validation
- `/speckit.analyze` - Cross-artifact consistency analysis

## Architecture

### Specification Workflow System

The `.specify/` directory contains a complete workflow automation framework:

**Templates** (`.specify/templates/`):
- `spec-template.md` - Technology-agnostic feature specifications with prioritized user stories
- `plan-template.md` - Implementation plans with tech stack, architecture, and design decisions
- `tasks-template.md` - Executable task lists organized by user story with dependency management
- `checklist-template.md` - Quality validation checklists
- `agent-file-template.md` - AI agent context files

**Scripts** (`.specify/scripts/bash/`):
- `create-new-feature.sh` - Creates new feature branches following `###-feature-name` pattern
- `setup-plan.sh` - Initializes planning phase with proper directory structure
- `check-prerequisites.sh` - Validates workflow prerequisites and available documents
- `update-agent-context.sh` - Maintains agent-specific context files (.claude/, .cursor/)
- `common.sh` - Shared utilities for all scripts

**Memory** (`.specify/memory/`):
- `constitution.md` - Project principles and governance rules (versioned template with placeholders)

### Feature Branch Workflow

Features follow a structured branching and directory pattern:

1. **Branch naming**: `###-feature-name` (e.g., `001-user-auth`, `002-payment-integration`)
2. **Feature directories**: `specs/###-feature-name/` containing:
   - `spec.md` - What and why (user requirements, acceptance criteria)
   - `plan.md` - How (tech stack, architecture, file structure)
   - `tasks.md` - Execution (dependency-ordered task checklist)
   - `research.md` - Technical decisions and alternatives considered
   - `data-model.md` - Entity definitions and relationships
   - `contracts/` - API specifications (OpenAPI/GraphQL schemas)
   - `quickstart.md` - Integration scenarios
   - `checklists/` - Quality validation checklists

3. **Workflow progression**:
   - Feature description → `/speckit.specify` → `spec.md` (user stories with priorities)
   - Optional: `/speckit.clarify` → Resolve ambiguities
   - `spec.md` → `/speckit.plan` → `plan.md` + design artifacts
   - `plan.md` → `/speckit.tasks` → `tasks.md` (organized by user story)
   - `tasks.md` → `/speckit.implement` → Implementation

### Key Workflow Principles

**User Story Organization**:
- Specifications use **prioritized user stories** (P1, P2, P3, etc.)
- Each story must be **independently testable** (MVP-first approach)
- Tasks are organized by user story for incremental delivery
- Higher priority stories implemented first

**Task Structure**:
- Tasks follow strict format: `- [ ] [T###] [P] [US#] Description with file paths`
- `[P]` marker indicates parallelizable tasks
- `[US#]` marker maps tasks to user stories (US1, US2, etc.)
- Phases: Setup → Foundational → User Story 1 → User Story 2 → ... → Polish

**Constitution-Driven Development**:
- `constitution.md` defines non-negotiable project principles (version 1.0.0)
- Core principles: Modularity, Clean Code, Next.js Best Practices, Type Safety, Testing (optional)
- All implementations must comply with constitutional requirements
- Plans include "Constitution Check" sections validating adherence
- Constitution is versioned (semantic versioning)
- Next.js framework conventions take precedence when conflicts arise

## Next.js Structure

**Directory layout**:
- `app/` - Next.js App Router (layout, pages, routes)
- `public/` - Static assets
- Path alias: `@/*` maps to project root

**Key files**:
- `app/layout.tsx` - Root layout with Geist fonts, metadata
- `app/page.tsx` - Home page component
- `tsconfig.json` - TypeScript configuration (target: ES2017, strict mode)
- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS v4 configuration
- `postcss.config.mjs` - PostCSS with Tailwind

## Important Patterns

### Script Execution
All `.specify/scripts/bash/*.sh` scripts:
- Accept `--json` flag for machine-readable output
- Output structured JSON containing file paths and metadata
- Must be run from repository root
- Handle single quotes in arguments with escape syntax: `'I'\''m example'` or use double quotes

### Agent Context Management
The project maintains agent-specific context files:
- `.claude/commands/*.md` - Claude Code slash commands
- `.cursor/rules/` or `.cursorrules` - Cursor-specific rules
- Updated via `update-agent-context.sh` when tech stack changes

### Feature Isolation
- Each feature gets its own branch and `specs/###-feature-name/` directory
- Features are designed to be independently implementable
- User stories within features can be implemented incrementally (MVP-first)

## Working with the Workflow System

When implementing features:

1. **Always use the workflow scripts** - Don't manually create feature branches or directories
2. **Respect the command order** - specify → clarify (optional) → plan → tasks → implement
3. **Read script output JSON** - Scripts output structured data; parse it to get paths
4. **Check prerequisites** - Use `check-prerequisites.sh --json` to validate readiness
5. **Follow task format strictly** - Tasks must use checkbox format with IDs and story labels
6. **Validate against constitution** - Ensure implementations comply with project principles
7. **Organize by user story** - Group tasks by the user story they serve (US1, US2, etc.)
8. **Implement incrementally** - Start with highest priority story (P1), deliver working MVP

## Notes

- This is a fresh Next.js project with minimal customization
- The workflow system is the primary value - it orchestrates feature development from idea to implementation
- Scripts expect bash shell (macOS/Linux); may need WSL on Windows
- All workflow artifacts are markdown files designed for both human and AI consumption
