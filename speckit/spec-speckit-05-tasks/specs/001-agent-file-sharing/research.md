# Research: Claude Code Agent File Sharing Platform

**Feature**: 001-agent-file-sharing
**Date**: 2025-11-13
**Status**: Complete

## Overview

This document captures technical research and decisions made during the planning phase for the Claude Code Agent File Sharing Platform. The goal is to resolve all "NEEDS CLARIFICATION" items from the Technical Context and establish best practices for the chosen tech stack.

## Research Areas

### 1. Next.js 16 App Router with Server Components

**Decision**: Use Server Components by default, Client Components only where interactive features require it

**Rationale**:
- Server Components are the default in Next.js App Router and provide better performance (zero JS bundle for non-interactive components)
- Browse list and detail pages are primarily static content display → perfect for Server Components
- Only interactive features (copy button, form inputs, pagination controls) need Client Components
- Follows React 19 and Next.js 16 best practices

**Implementation Pattern**:
- `app/page.tsx` → Server Component (fetches mock data, renders list)
- `app/agents/[id]/page.tsx` → Server Component (fetches single agent file, renders detail)
- `src/components/client/CopyButton.tsx` → Client Component (needs clipboard API access)
- `src/components/client/PaginationControls.tsx` → Client Component (needs state for current page)
- `src/components/client/PostAgentFileForm.tsx` → Client Component (needs form state, validation)

**Alternatives Considered**:
- Make everything Client Components: Rejected - unnecessary bundle size, loses Server Component benefits
- Use Pages Router: Rejected - App Router is the modern approach, Server Components unavailable in Pages Router

**References**:
- Next.js App Router docs: https://nextjs.org/docs/app
- React Server Components: https://react.dev/reference/rsc/server-components

---

### 2. Clipboard API with Fallback Error Handling

**Decision**: Use modern Clipboard API (`navigator.clipboard.writeText()`) with try-catch error handling

**Rationale**:
- Clipboard API is supported in last 2 versions of all target browsers (Chrome, Firefox, Safari, Edge)
- Provides async promise-based interface
- Requires HTTPS or localhost (Next.js dev server uses localhost)
- Graceful error handling for permission denials or unsupported browsers per spec requirement (FR-013)

**Implementation Pattern**:
```typescript
async function copyToClipboard(text: string): Promise<{ success: boolean; error?: string }> {
  try {
    await navigator.clipboard.writeText(text);
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: 'Failed to copy. Please manually select and copy the text.'
    };
  }
}
```

**Alternatives Considered**:
- `document.execCommand('copy')`: Deprecated, not recommended for new projects
- Manual selection with `document.createRange()`: More complex, Clipboard API preferred when available

**References**:
- MDN Clipboard API: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
- Browser support: https://caniuse.com/mdn-api_clipboard_writetext

---

### 3. Markdown Rendering

**Decision**: Use `react-markdown` library with `remark-gfm` for GitHub-flavored markdown

**Rationale**:
- Most popular React markdown renderer (5M+ weekly downloads)
- Safe by default (sanitizes HTML, prevents XSS)
- Supports GitHub-flavored markdown (tables, strikethrough, task lists) which is common in agent files
- Lightweight and well-maintained
- Works with Server Components

**Implementation Pattern**:
```typescript
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

<ReactMarkdown remarkPlugins={[remarkGfm]}>
  {agentFileContent}
</ReactMarkdown>
```

**Alternatives Considered**:
- `marked`: More low-level, requires manual React integration
- `markdown-it`: Similar to marked, more complex setup
- `@next/mdx`: Overkill for runtime rendering, better for build-time MDX

**References**:
- react-markdown: https://github.com/remarkjs/react-markdown
- remark-gfm: https://github.com/remarkjs/remark-gfm

---

### 4. Form Validation with Zod

**Decision**: Use Zod for schema validation of form inputs

**Rationale**:
- TypeScript-first schema validation
- Excellent TypeScript integration (infer types from schemas)
- Simple API for defining validation rules
- Works well with Server Actions
- Lightweight (12KB gzipped)

**Implementation Pattern**:
```typescript
import { z } from 'zod';

export const agentFileSchema = z.object({
  name: z.string().min(1, 'File name is required').max(100, 'Name too long'),
  description: z.string().min(1, 'Description is required').max(500, 'Description too long'),
  content: z.string().min(1, 'Content is required'),
});

export type AgentFileInput = z.infer<typeof agentFileSchema>;
```

**Alternatives Considered**:
- React Hook Form with yup: More complex, overkill for simple form
- Manual validation: Error-prone, less type-safe
- Native HTML5 validation: Not sufficient for complex rules, poor UX

**References**:
- Zod: https://zod.dev
- Next.js with Zod: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

---

### 5. Tailwind CSS v4 with shadcn/ui

**Decision**: Use Tailwind CSS v4 for styling, shadcn/ui for pre-built component primitives

**Rationale**:
- Tailwind v4 is already configured in the project
- shadcn/ui provides accessible, customizable UI components (Button, Card, Input, Textarea, etc.)
- shadcn/ui components are copied into the project (not a dependency), allowing full customization
- Components built on Radix UI primitives (excellent accessibility)
- Follows React Server Component patterns

**Implementation Pattern**:
```bash
# Install shadcn/ui CLI and add components
npx shadcn@latest init
npx shadcn@latest add button card input textarea
```

**Components needed**:
- Button (copy button, form submit, navigation)
- Card (agent file cards in list)
- Input (file name in form)
- Textarea (description and content in form)
- Badge (optional: for tags/metadata)

**Alternatives Considered**:
- Plain Tailwind without component library: More work, reinventing accessibility patterns
- Material UI / Chakra UI: Heavier dependencies, not aligned with Tailwind workflow
- Build everything custom: Time-consuming, accessibility concerns

**References**:
- shadcn/ui: https://ui.shadcn.com
- Tailwind CSS v4: https://tailwindcss.com

---

### 6. Mock Data Management

**Decision**: Store mock data in `src/server/data/mockAgentFiles.ts` as a TypeScript module, use client-side Context API for state management

**Rationale**:
- No backend/database requirement per spec
- TypeScript module provides type safety
- Can be easily replaced with real API calls later
- Context API sufficient for simple state management (no need for Redux/Zustand)
- Server Actions can mutate mock data during session (stored in memory)

**Implementation Pattern**:
```typescript
// src/server/data/mockAgentFiles.ts
import { AgentFile } from '@/types/AgentFile';

export const mockAgentFiles: AgentFile[] = [
  {
    id: '1',
    name: 'code-reviewer.md',
    description: 'Agent that reviews code for best practices',
    content: '# Code Reviewer Agent\n\n...',
    datePosted: '2025-11-10',
    author: 'Anonymous',
  },
  // ... more mock files
];

// For mutations, use a simple in-memory array
let agentFilesStore = [...mockAgentFiles];

export function addAgentFile(file: AgentFile) {
  agentFilesStore.push(file);
}

export function getAgentFiles() {
  return agentFilesStore;
}
```

**Alternatives Considered**:
- localStorage: Requires client-side, harder to test, not SSR-friendly
- JSON file: Harder to mutate, requires file system operations
- Real database: Out of scope for MVP

**References**:
- Next.js Server Actions: https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

---

### 7. Pagination Implementation

**Decision**: Use URL query parameters (`?page=1`) for pagination state with Server Components

**Rationale**:
- URL-based pagination allows bookmarking specific pages
- SEO-friendly (each page has unique URL)
- Works seamlessly with Server Components (read from searchParams)
- Browser back/forward navigation works automatically
- No client-side state management needed for page number

**Implementation Pattern**:
```typescript
// app/page.tsx (Server Component)
export default function HomePage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1;
  const PAGE_SIZE = 12;

  const allFiles = getAgentFiles();
  const totalPages = Math.ceil(allFiles.length / PAGE_SIZE);
  const paginatedFiles = allFiles.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return <AgentFileList files={paginatedFiles} currentPage={currentPage} totalPages={totalPages} />;
}
```

**Alternatives Considered**:
- Client-side state (useState): Loses URL benefits, not bookmarkable
- Infinite scroll: Different UX, more complex, not requested in spec
- Load all data at once: Poor performance with many items (100+ edge case)

**References**:
- Next.js searchParams: https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional

---

## Summary of Technical Decisions

| Technology | Decision | Rationale |
|------------|----------|-----------|
| Framework | Next.js 16 App Router | Modern, Server Components, performance |
| Component Strategy | Server Components default | Better performance, smaller bundle |
| UI Library | shadcn/ui + Tailwind v4 | Accessible, customizable, already configured |
| Markdown Rendering | react-markdown + remark-gfm | Safe, popular, GFM support |
| Form Validation | Zod | Type-safe, simple API, TS integration |
| Clipboard | Navigator Clipboard API | Modern, supported in target browsers |
| Pagination | URL query parameters | Bookmarkable, SEO-friendly, SSR-compatible |
| State Management | Context API (minimal) | Sufficient for simple needs |
| Mock Data | TypeScript module in src/server/ | Type-safe, easy to replace |

## Dependencies to Add

```json
{
  "dependencies": {
    "react-markdown": "^9.0.0",
    "remark-gfm": "^4.0.0",
    "zod": "^3.23.0"
  },
  "devDependencies": {
    "@types/react-markdown": "^9.0.0"
  }
}
```

## Next Steps

Proceed to Phase 1: Design & Contracts
- Generate data-model.md (entity definitions)
- Generate contracts/ (type specifications, API shapes)
- Generate quickstart.md (integration guide)
- Update agent context files with new tech stack
