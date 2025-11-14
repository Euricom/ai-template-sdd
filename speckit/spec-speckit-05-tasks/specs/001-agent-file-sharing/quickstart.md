# Quickstart Guide: Claude Code Agent File Sharing Platform

**Feature**: 001-agent-file-sharing
**Date**: 2025-11-13
**Target**: Developers implementing this feature

## Overview

This quickstart guide provides practical integration scenarios and code examples for implementing the Claude Code Agent File Sharing Platform. It walks through the complete development workflow from setup to deployment.

## Prerequisites

- Node.js 18+ and pnpm 10.22.0+
- Next.js 16 project with App Router configured
- TypeScript 5.x
- Tailwind CSS v4 configured

## Setup Steps

### 1. Install Dependencies

```bash
# Install required packages
pnpm add react-markdown remark-gfm zod

# Install dev dependencies (if not already present)
pnpm add -D @types/node typescript @types/react @types/react-dom

# Install shadcn/ui (follow prompts to configure)
npx shadcn@latest init

# Add required shadcn/ui components
npx shadcn@latest add button card input textarea badge
```

### 2. Project Structure Setup

Create the following directory structure:

```bash
# Create component directories
mkdir -p src/components/client
mkdir -p src/components/server

# Create server directories
mkdir -p src/server/data
mkdir -p src/server/actions

# Create lib directories
mkdir -p src/lib/utils

# Create types directory
mkdir -p src/types
```

### 3. Copy Type Definitions

Copy contract types to source:

```bash
# From specs/001-agent-file-sharing/contracts/ to src/

# 1. Copy types to src/types/AgentFile.ts
# 2. Copy validation schemas to src/lib/validation/agentFileSchema.ts
# 3. Use server-actions.ts as reference for implementation
```

## Implementation Workflow

### Phase 1: Data Layer (Mock Data)

**File**: `src/server/data/mockAgentFiles.ts`

```typescript
import { AgentFile } from '@/types/AgentFile';

export const initialMockAgentFiles: AgentFile[] = [
  {
    id: '1',
    name: 'code-reviewer.md',
    description: 'An agent that reviews code for best practices',
    content: '# Code Reviewer Agent\n\n...',
    datePosted: '2025-11-10',
    author: 'Anonymous',
  },
  // Add 4-5 more mock files
];

let agentFilesStore: AgentFile[] = [...initialMockAgentFiles];

export function getAgentFiles(): AgentFile[] {
  return agentFilesStore;
}

export function getAgentFileById(id: string): AgentFile | undefined {
  return agentFilesStore.find(file => file.id === id);
}

export function addAgentFile(file: AgentFile): void {
  agentFilesStore.push(file);
}
```

**Test**: Import and call functions in Node REPL or test file.

---

### Phase 2: Server Actions

**File**: `src/server/actions/agentFileActions.ts`

```typescript
'use server';

import {
  getAgentFiles as getMockFiles,
  getAgentFileById as getMockFileById,
  addAgentFile
} from '@/server/data/mockAgentFiles';
import { agentFileFormSchema } from '@/lib/validation/agentFileSchema';
import type { AgentFile, AgentFileFormData } from '@/types/AgentFile';

export async function getAgentFiles() {
  try {
    const files = getMockFiles();
    return { success: true, data: files };
  } catch (error) {
    console.error('Error fetching agent files:', error);
    return { success: false, error: 'Failed to fetch agent files' };
  }
}

export async function getAgentFileById(id: string) {
  try {
    const file = getMockFileById(id);
    if (!file) {
      return { success: false, error: 'Agent file not found' };
    }
    return { success: true, data: file };
  } catch (error) {
    console.error('Error fetching agent file:', error);
    return { success: false, error: 'Failed to fetch agent file' };
  }
}

export async function postAgentFile(formData: AgentFileFormData) {
  try {
    // Validate input
    const validated = agentFileFormSchema.safeParse(formData);
    if (!validated.success) {
      return {
        success: false,
        error: 'Validation failed',
        validationErrors: validated.error.flatten().fieldErrors,
      };
    }

    // Create new agent file
    const newFile: AgentFile = {
      id: crypto.randomUUID(),
      ...validated.data,
      datePosted: new Date().toISOString().split('T')[0],
      author: 'Anonymous',
    };

    addAgentFile(newFile);

    return { success: true, data: newFile };
  } catch (error) {
    console.error('Error posting agent file:', error);
    return { success: false, error: 'Failed to post agent file' };
  }
}
```

**Test**: Call Server Actions from a test page or component.

---

### Phase 3: Utility Functions

**File**: `src/lib/utils/clipboard.ts`

```typescript
export interface CopyResult {
  success: boolean;
  message?: string;
}

export async function copyToClipboard(text: string): Promise<CopyResult> {
  if (!navigator.clipboard) {
    return {
      success: false,
      message: 'Clipboard API not supported. Please manually select and copy.',
    };
  }

  try {
    await navigator.clipboard.writeText(text);
    return { success: true, message: 'Copied to clipboard!' };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to copy. Please manually select and copy the text.',
    };
  }
}
```

**File**: `src/lib/utils/pagination.ts`

```typescript
export function calculatePagination<T>(
  items: T[],
  currentPage: number,
  pageSize: number = 12
) {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const validPage = Math.max(1, Math.min(currentPage, totalPages || 1));

  const startIndex = (validPage - 1) * pageSize;
  const paginatedItems = items.slice(startIndex, startIndex + pageSize);

  return {
    items: paginatedItems,
    pagination: {
      currentPage: validPage,
      pageSize,
      totalItems,
      totalPages,
    },
  };
}
```

**File**: `src/lib/constants.ts`

```typescript
export const APP_CONFIG = {
  PAGE_SIZE: 12,
  MAX_FILE_NAME_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 500,
  MAX_CONTENT_LENGTH: 50000,
} as const;
```

**Test**: Unit test each utility function with various inputs.

---

### Phase 4: Server Components

**File**: `src/components/server/AgentFileList.tsx`

```typescript
import { AgentFile } from '@/types/AgentFile';
import AgentFileCard from './AgentFileCard';
import EmptyState from './EmptyState';

interface AgentFileListProps {
  agentFiles: AgentFile[];
}

export default function AgentFileList({ agentFiles }: AgentFileListProps) {
  if (agentFiles.length === 0) {
    return (
      <EmptyState
        title="No agent files available"
        description="Be the first to post an agent file!"
        actionLabel="Post Agent File"
        actionHref="/post"
      />
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {agentFiles.map((file) => (
        <AgentFileCard key={file.id} agentFile={file} />
      ))}
    </div>
  );
}
```

**File**: `src/components/server/AgentFileCard.tsx`

```typescript
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AgentFile } from '@/types/AgentFile';

interface AgentFileCardProps {
  agentFile: AgentFile;
}

export default function AgentFileCard({ agentFile }: AgentFileCardProps) {
  return (
    <Link href={`/agents/${agentFile.id}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <CardTitle className="truncate">{agentFile.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {agentFile.description || 'No description provided'}
          </CardDescription>
          <p className="text-xs text-muted-foreground mt-2">
            Posted: {agentFile.datePosted}
          </p>
        </CardHeader>
      </Card>
    </Link>
  );
}
```

**Test**: Render with mock data in Storybook or test page.

---

### Phase 5: Client Components

**File**: `src/components/client/CopyButton.tsx`

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { copyToClipboard } from '@/lib/utils/clipboard';

interface CopyButtonProps {
  content: string;
  label?: string;
}

export default function CopyButton({ content, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopy = async () => {
    const result = await copyToClipboard(content);

    if (result.success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setError(null);
    } else {
      setError(result.message || 'Failed to copy');
    }
  };

  return (
    <div>
      <Button onClick={handleCopy} variant={copied ? 'secondary' : 'default'}>
        {copied ? 'Copied!' : label}
      </Button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
```

**File**: `src/components/client/PaginationControls.tsx`

```typescript
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  baseUrl = '/',
}: PaginationControlsProps) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex justify-center gap-4 mt-8">
      {prevPage ? (
        <Link href={`${baseUrl}?page=${prevPage}`}>
          <Button variant="outline">Previous</Button>
        </Link>
      ) : (
        <Button variant="outline" disabled>
          Previous
        </Button>
      )}

      <span className="flex items-center px-4">
        Page {currentPage} of {totalPages}
      </span>

      {nextPage ? (
        <Link href={`${baseUrl}?page=${nextPage}`}>
          <Button variant="outline">Next</Button>
        </Link>
      ) : (
        <Button variant="outline" disabled>
          Next
        </Button>
      )}
    </div>
  );
}
```

**Test**: Test interactivity in browser (click, copy, etc.).

---

### Phase 6: App Router Pages

**File**: `app/page.tsx` (Browse List - US1)

```typescript
import { getAgentFiles } from '@/server/actions/agentFileActions';
import AgentFileList from '@/components/server/AgentFileList';
import PaginationControls from '@/components/client/PaginationControls';
import { calculatePagination } from '@/lib/utils/pagination';

interface HomePageProps {
  searchParams: { page?: string };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const result = await getAgentFiles();

  if (!result.success) {
    return <div>Error: {result.error}</div>;
  }

  const currentPage = Number(searchParams.page) || 1;
  const { items, pagination } = calculatePagination(result.data!, currentPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Agent Files</h1>
      <AgentFileList agentFiles={items} />
      <PaginationControls
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
      />
    </div>
  );
}
```

**File**: `app/agents/[id]/page.tsx` (Detail View - US2)

```typescript
import { notFound } from 'next/navigation';
import { getAgentFileById } from '@/server/actions/agentFileActions';
import CopyButton from '@/components/client/CopyButton';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AgentDetailPageProps {
  params: { id: string };
}

export default async function AgentDetailPage({ params }: AgentDetailPageProps) {
  const result = await getAgentFileById(params.id);

  if (!result.success || !result.data) {
    notFound();
  }

  const { data: agentFile } = result;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">{agentFile.name}</h1>
      <p className="text-muted-foreground mb-2">
        {agentFile.description || 'No description provided'}
      </p>
      <p className="text-sm text-muted-foreground mb-6">
        Posted: {agentFile.datePosted} by {agentFile.author}
      </p>

      <CopyButton content={agentFile.content} label="Copy to Clipboard" />

      <div className="mt-8 prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {agentFile.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
```

**File**: `app/post/page.tsx` (Post Form - US4)

```typescript
import PostAgentFileForm from '@/components/client/PostAgentFileForm';

export default function PostPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">Post Agent File</h1>
      <PostAgentFileForm />
    </div>
  );
}
```

**Test**: Navigate through pages in browser, test all flows.

---

## Testing Scenarios

### User Story 1: Browse Agent Files (P1)

1. Navigate to `/` (home page)
2. Verify list of agent files displays
3. Verify pagination controls appear if >12 items
4. Click "Next" to navigate to page 2
5. Verify URL updates to `/?page=2`
6. Click "Previous" to return to page 1

### User Story 2: View Agent File Details (P1)

1. From browse list, click on an agent file card
2. Verify navigation to `/agents/[id]`
3. Verify file name, description, date, and content display
4. Verify markdown renders correctly
5. Click back button to return to list

### User Story 3: Copy Agent File Content (P1)

1. On detail page, click "Copy to Clipboard" button
2. Verify button changes to "Copied!" for 2 seconds
3. Open another application and paste (Ctrl/Cmd+V)
4. Verify content pastes correctly with markdown formatting
5. Test error handling: deny clipboard permissions → verify error message

### User Story 4: Post New Agent Files (P2)

1. Navigate to `/post`
2. Fill out form (name, description, content)
3. Submit form
4. Verify validation errors if fields are invalid
5. Verify success message and redirect to posted file
6. Verify new file appears in browse list

---

## Common Issues & Solutions

### Issue: shadcn/ui components not found

**Solution**: Run `npx shadcn@latest init` and follow prompts to configure.

### Issue: Module not found errors

**Solution**: Ensure path alias `@/*` is configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: Clipboard API not working

**Solution**: Ensure app runs on HTTPS or localhost. Clipboard API requires secure context.

### Issue: Server Actions not working

**Solution**: Ensure `'use server'` directive is at the top of the file.

---

## Next Steps

After completing implementation:
1. Run `/speckit.tasks` to generate task checklist
2. Use `/speckit.implement` to execute tasks
3. Test all user stories manually
4. Run `pnpm build` to verify production build
5. Deploy to Vercel or similar platform

## Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [shadcn/ui Components](https://ui.shadcn.com)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [Zod Validation](https://zod.dev)
