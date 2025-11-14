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
> I want to create a user page, similar to the product page, look in the openapi.json to see which api is available, and use the product page as
an example to create the user page. Ask question if not clear.
```

Continue with the plan or ask to generate a spec.md

```prompt
> Now, create a spec.md describing the plan. Save it in the specs/ folder.
```

or use custom slash command:

```prompt
>/create-spec
```

And implement the spec.md:

```prompt
> Implement the @spec.md
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
