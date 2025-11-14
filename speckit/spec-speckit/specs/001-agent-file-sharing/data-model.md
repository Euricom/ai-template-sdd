# Data Model: Claude Code Agent File Sharing Platform

**Feature**: 001-agent-file-sharing
**Date**: 2025-11-13
**Status**: Complete

## Overview

This document defines all entities, their attributes, relationships, and validation rules for the Claude Code Agent File Sharing Platform. Since this is a frontend-only MVP with no backend, all data is stored in-memory and managed through TypeScript types.

## Entities

### AgentFile

The core entity representing a Claude Code agent configuration file (.md file) that users can browse, view, copy, and post.

**Attributes**:

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| `id` | `string` | Yes | Unique identifier (UUID or incremental) | Unique identifier for the agent file |
| `name` | `string` | Yes | 1-100 characters, must end with `.md` | File name (e.g., "code-reviewer.md") |
| `description` | `string` | No | 0-500 characters | Brief description of what the agent does |
| `content` | `string` | Yes | Min 1 character, markdown format | Full markdown content of the agent file |
| `datePosted` | `string` | Yes | ISO 8601 date string (YYYY-MM-DD) | Date the file was posted |
| `author` | `string` | Yes | 1-50 characters | Author name (hardcoded as "Anonymous" for MVP) |
| `tags` | `string[]` | No | Array of 0-10 tags, each 1-20 characters | Optional tags for categorization (future enhancement) |

**TypeScript Definition**:

```typescript
// src/types/AgentFile.ts
export interface AgentFile {
  id: string;
  name: string;
  description: string;
  content: string;
  datePosted: string; // ISO 8601 format
  author: string;
  tags?: string[]; // Optional for future enhancement
}

export type AgentFileInput = Omit<AgentFile, 'id' | 'datePosted' | 'author'>;
```

**Validation Rules**:

```typescript
// src/lib/validation/agentFileSchema.ts
import { z } from 'zod';

export const agentFileSchema = z.object({
  name: z
    .string()
    .min(1, 'File name is required')
    .max(100, 'File name must be 100 characters or less')
    .regex(/\.md$/, 'File name must end with .md'),

  description: z
    .string()
    .max(500, 'Description must be 500 characters or less')
    .optional()
    .default(''),

  content: z
    .string()
    .min(1, 'Content is required')
    .max(50000, 'Content must be 50,000 characters or less'),
});

export type AgentFileFormData = z.infer<typeof agentFileSchema>;
```

**State Transitions**:

No complex state transitions in MVP. Agent files are either:
1. **Not Posted** → User fills form → **Posted** (added to list)
2. **Posted** → User views → **Viewed**
3. **Posted** → User copies → **Copied** (no state change, just action)

In future versions with user accounts:
- **Draft** → User saves partial progress
- **Published** → User publishes to community
- **Archived** → User or admin removes from active list

---

### PaginationState

Represents the current pagination state for the browse list.

**Attributes**:

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| `currentPage` | `number` | Yes | Integer >= 1 | Current page number |
| `pageSize` | `number` | Yes | Integer 10-20 (default: 12) | Number of items per page |
| `totalItems` | `number` | Yes | Integer >= 0 | Total number of agent files |
| `totalPages` | `number` | Yes | Calculated: Math.ceil(totalItems / pageSize) | Total number of pages |

**TypeScript Definition**:

```typescript
// src/types/Pagination.ts
export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: PaginationState;
}
```

**Calculation Logic**:

```typescript
// src/lib/utils/pagination.ts
export function calculatePagination<T>(
  items: T[],
  currentPage: number,
  pageSize: number = 12
): PaginatedResponse<T> {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Clamp currentPage to valid range
  const validPage = Math.max(1, Math.min(currentPage, totalPages || 1));

  const startIndex = (validPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = items.slice(startIndex, endIndex);

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

---

### CopyResult

Represents the result of a clipboard copy operation.

**Attributes**:

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| `success` | `boolean` | Yes | true or false | Whether the copy operation succeeded |
| `message` | `string` | No | Optional success/error message | User-facing feedback message |

**TypeScript Definition**:

```typescript
// src/types/Clipboard.ts
export interface CopyResult {
  success: boolean;
  message?: string;
}
```

**Usage Pattern**:

```typescript
// src/lib/utils/clipboard.ts
export async function copyToClipboard(text: string): Promise<CopyResult> {
  if (!navigator.clipboard) {
    return {
      success: false,
      message: 'Clipboard API not supported. Please manually select and copy the text.',
    };
  }

  try {
    await navigator.clipboard.writeText(text);
    return {
      success: true,
      message: 'Copied to clipboard!',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to copy. Please manually select and copy the text.',
    };
  }
}
```

---

## Relationships

Since this is a simple MVP with no user accounts or complex data relationships, the relationships are minimal:

```
AgentFile (1) ----< (many) Display in List
AgentFile (1) ----< (1) Display in Detail View
AgentFile (1) ----< (1) Copy Operation
User Input (1) ----< (1) New AgentFile
```

**Future Enhancements** (not in MVP):
- `User` entity with one-to-many relationship to `AgentFile`
- `Tag` entity with many-to-many relationship to `AgentFile`
- `Comment` entity with many-to-one relationship to `AgentFile`
- `Vote` entity (upvotes/downvotes) with many-to-one relationship to `AgentFile`

---

## Mock Data Structure

**Initial Dataset** (`src/server/data/mockAgentFiles.ts`):

```typescript
import { AgentFile } from '@/types/AgentFile';

export const initialMockAgentFiles: AgentFile[] = [
  {
    id: '1',
    name: 'code-reviewer.md',
    description: 'An agent that reviews code for best practices, potential bugs, and style issues',
    content: `# Code Reviewer Agent

## Purpose
This agent specializes in reviewing code for best practices, identifying potential bugs, and ensuring consistent style.

## Usage
Invoke this agent when you want comprehensive code review feedback on your pull requests or commits.

## Capabilities
- Static analysis
- Style checking
- Security vulnerability detection
- Performance optimization suggestions`,
    datePosted: '2025-11-10',
    author: 'Anonymous',
  },
  {
    id: '2',
    name: 'test-generator.md',
    description: 'Generates comprehensive unit tests for your code',
    content: `# Test Generator Agent

## Purpose
Automatically generates unit tests with high coverage for your codebase.

## Usage
Point this agent at your source files to generate corresponding test files.

## Capabilities
- Unit test generation
- Edge case identification
- Mock data creation
- Test coverage analysis`,
    datePosted: '2025-11-09',
    author: 'Anonymous',
  },
  {
    id: '3',
    name: 'documentation-writer.md',
    description: 'Creates clear and comprehensive documentation for your code',
    content: `# Documentation Writer Agent

## Purpose
Generates clear, comprehensive documentation for functions, classes, and modules.

## Usage
Use this agent to automatically document your codebase with JSDoc, docstrings, or markdown files.

## Capabilities
- Function documentation
- API documentation
- README generation
- Code comment suggestions`,
    datePosted: '2025-11-08',
    author: 'Anonymous',
  },
  {
    id: '4',
    name: 'refactoring-assistant.md',
    description: 'Suggests and implements code refactorings to improve maintainability',
    content: `# Refactoring Assistant Agent

## Purpose
Identifies code smells and suggests refactorings to improve code quality and maintainability.

## Usage
Run this agent on legacy code or complex functions that need simplification.

## Capabilities
- Code smell detection
- Extract method refactoring
- Simplify conditional logic
- Remove duplication`,
    datePosted: '2025-11-07',
    author: 'Anonymous',
  },
  {
    id: '5',
    name: 'bug-finder.md',
    description: 'Analyzes code to find potential bugs and edge cases',
    content: `# Bug Finder Agent

## Purpose
Proactively identifies potential bugs, edge cases, and error-prone code patterns.

## Usage
Use this agent for pre-deployment checks or when debugging difficult issues.

## Capabilities
- Null pointer detection
- Off-by-one errors
- Race condition identification
- Type mismatch detection`,
    datePosted: '2025-11-06',
    author: 'Anonymous',
  },
];

// In-memory store for runtime additions
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

export function resetAgentFiles(): void {
  agentFilesStore = [...initialMockAgentFiles];
}
```

---

## Edge Cases and Handling

### Empty Description

**Scenario**: Agent file has empty or missing description (FR-012a)

**Handling**:
- Display: Show placeholder text "No description provided"
- Validation: Allow empty description (optional field)
- UI: Gray italicized text for placeholder

### Extremely Long Content

**Scenario**: Agent file content exceeds 10,000 characters

**Handling**:
- Validation: Set max limit of 50,000 characters in form
- Display: Use scrollable container with max-height
- Performance: No special handling needed (modern browsers handle large text well)

### Malformed Markdown

**Scenario**: User enters invalid markdown or special characters

**Handling**:
- Rendering: `react-markdown` handles malformed markdown gracefully (renders as plain text)
- Security: `react-markdown` sanitizes HTML by default (XSS protection)
- Validation: No markdown validation needed (any text is valid markdown)

### No Files Available

**Scenario**: Mock data store is empty (FR-012)

**Handling**:
- Display: Show empty state component with message "No agent files available yet. Be the first to post one!"
- Action: Provide prominent link/button to post new file

### Invalid Page Number

**Scenario**: User navigates to `?page=999` or `?page=0`

**Handling**:
- Validation: Clamp page number to valid range [1, totalPages]
- Redirect: Not needed, just show clamped page
- UI: Disable next/previous buttons at boundaries

---

## Summary

The data model is intentionally simple for the MVP:
- **Primary entity**: `AgentFile` with 7 attributes
- **Supporting types**: `PaginationState`, `CopyResult`
- **Storage**: In-memory TypeScript array
- **Validation**: Zod schemas for form inputs
- **Relationships**: None (future: User, Tag, Comment, Vote)

All entities are fully type-safe with TypeScript, validated with Zod, and designed for easy replacement with real API calls in future iterations.
