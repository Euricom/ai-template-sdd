# spec-cc-demo

A React-based demo application for best AI practices, built with Vite, TypeScript, and TailwindCSS.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint
```

## 🛠️ Tech Stack

- [React](https://react.dev/) - UI Framework
- [Vite](https://vitejs.dev/) - Build Tool
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Routing

## Prime the AI

```
Read README.md, CLAUDE.md, ai_docs/*, and run `git ls-files` to understand this codebase.
```

## Demo

## Use claude code plan mode

Start by going to plan mode:

```code
shift-tab + shift-tab
```

```prompt
I want to create a user page, similar to the product page.
```

Continue with the plan or ask to generate a spec.md

```prompt
> Now, create a spec.md describing the plan. Save it in the specs/ folder.
```

or

```prompt
> Based on your previous plan, please create a detailed specification document
at docs/specs/spec-{YYYYMMDD}-{feature-name}.md with the following sections:

1. Feature Overview - high-level description and goals
2. Technical Requirements - functional and non-functional requirements
3. Architecture Design - component breakdown and data flow
4. Implementation Plan - phased approach with milestones
5. Testing Strategy - unit tests, integration tests, edge cases
6. Security Considerations - authentication, authorization, rate limiting
7. Database Changes - schema modifications needed
8. API Contracts - endpoint definitions with request/response formats
9. Dependencies - external libraries and internal modules
10. Acceptance Criteria - how we'll know this is complete

Make this comprehensive enough that a developer could implement
it without additional context.
```

or use custom slash command:

```prompt
> /create-spec
```

## Start with AgentOS in existing codebase

1. Install AgentOS in existing codebase

```bash
# Install AgentOS in existing codebase
~/agent-os/scripts/project-install.sh
```

2. Initialize standards/tech-stack.md

```prompt
> update @agent-os/standards/global/tech-stack.md to the current used stack
```

3. Create product roadmap & mission for future extensions

```prompt
> /agent-os:plan-product is running… base the product on the existing codebase, ask questions if not clear.
```

## Start with SpecKit in existing codebase

1. Install SpecKit in existing codebase

```bash
# Install SpecKit in existing codebase

```

2. Initialize standards/tech-stack.md

```prompt
> update @speckit/standards/global/tech-stack.md to the current used stack
```
