# Agent Hub

Browse and share Claude Code agents. Agent Hub is a platform where users can post their Claude Code agent files (.md files) and discover agents posted by others.

## Phase 1 - MVP

This is Phase 1 (MVP) which is a frontend-only application with mock data. No backend or database persistence yet.

## Tech Stack

- **Framework:** Next.js 15.5+ (App Router)
- **UI Library:** React 19.2.0
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Package Manager:** pnpm 10.21.0
- **Runtime:** Bun (compatible)
- **Linting:** oxlint

## Prerequisites

- Node.js 18+ or Bun
- pnpm 10.21.0

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run oxlint for code quality checks

## Project Structure

```
/app                    - Next.js App Router pages
  /agents/[id]          - Dynamic route for agent detail pages
  /upload               - Upload form page
  layout.tsx            - Root layout component
  page.tsx              - Homepage
  error.tsx             - Error boundary
  globals.css           - Global styles with Tailwind directives
/components             - Reusable React components
  /ui                   - UI component library
/lib                    - Utilities and shared code
/public                 - Static assets
/agent-os               - Project documentation and specifications
```

## Documentation

For detailed specifications and feature requirements, see the `agent-os/specs/` directory.

## Features (Phase 1)

- Homepage with agent gallery (upcoming)
- Agent detail pages (upcoming)
- Upload form (upcoming)
- Copy to clipboard functionality (upcoming)
- Responsive design (upcoming)

## Contributing

Contribution guidelines coming soon.

## License

[To be determined]
