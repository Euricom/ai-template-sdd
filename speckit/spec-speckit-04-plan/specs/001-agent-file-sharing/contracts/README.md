# Contracts Directory

This directory contains type contracts, validation schemas, and API specifications for the Claude Code Agent File Sharing Platform.

## Overview

Contracts define the "API" between different parts of the application. They establish strict type-safe interfaces that all components must adhere to, ensuring consistency and catching errors at compile-time.

## Files

### `types.ts`

Core TypeScript type definitions for all entities and component props.

**Contains**:
- `AgentFile` - Main entity representing an agent file
- `PaginationState` - Pagination metadata
- `CopyResult` - Clipboard operation result
- `AgentFileFormData` - Form input data
- Component prop types (`AgentFileDisplayProps`, `PaginationControlsProps`, etc.)

**Usage**:
```typescript
import { AgentFile, PaginationState } from '@/types/AgentFile';
// or from contracts:
import { AgentFile } from '@/specs/001-agent-file-sharing/contracts/types';
```

### `validation-schemas.ts`

Zod validation schemas for user input and form data.

**Contains**:
- `agentFileFormSchema` - Validates agent file form input
- `paginationParamsSchema` - Validates pagination parameters
- `searchQuerySchema` - Validates search queries (future)
- Helper functions: `safeValidate()`, `formatValidationErrors()`
- `VALIDATION_LIMITS` - Validation constants

**Usage**:
```typescript
import { agentFileFormSchema, safeValidate } from '@/lib/validation/agentFileSchema';

const result = safeValidate(agentFileFormSchema, formData);
if (!result.success) {
  const errors = formatValidationErrors(result.errors);
}
```

### `server-actions.ts`

Contract specifications for Next.js Server Actions (function signatures).

**Contains**:
- `GetAgentFilesAction` - Fetch all agent files
- `GetAgentFileByIdAction` - Fetch single agent file by ID
- `PostAgentFileAction` - Create new agent file
- Implementation guidelines and usage examples

**Usage**:
```typescript
// Implementation must satisfy contract:
import { GetAgentFilesAction } from '@/specs/001-agent-file-sharing/contracts/server-actions';

export const getAgentFiles: GetAgentFilesAction = async () => {
  // implementation
};
```

## Design Principles

### 1. Type Safety First

All data entering or leaving the system is typed with TypeScript and validated with Zod:
- External input (forms, URL params) → Zod validation → TypeScript types
- Internal components → TypeScript types only
- Mock data store → TypeScript types

### 2. Single Source of Truth

Types are defined once in `types.ts` and reused everywhere. Zod schemas infer their types from validation rules:

```typescript
export const agentFileFormSchema = z.object({
  name: z.string().min(1).max(100),
  // ...
});

export type AgentFileFormData = z.infer<typeof agentFileFormSchema>;
```

### 3. Contract-First Development

Contracts are written before implementation. This ensures:
- Clear API boundaries
- Consistent return types
- Easier testing (mock based on contract)
- Self-documenting code (contract serves as documentation)

### 4. Validation at Boundaries

Validation occurs at system boundaries (user input, external APIs):
- Form submissions → validate with `agentFileFormSchema`
- URL parameters → validate with `paginationParamsSchema`
- Internal function calls → rely on TypeScript types (already validated)

## Integration with Source Code

Contracts in this directory will be copied/imported into the actual source code:

```
specs/001-agent-file-sharing/contracts/  → Design phase (this directory)
src/types/                               → Implementation phase (actual code)
src/lib/validation/                      → Implementation phase (actual code)
src/server/actions/                      → Implementation phase (actual code)
```

Implementation process:
1. **Design Phase** (now): Define contracts in `specs/001-agent-file-sharing/contracts/`
2. **Implementation Phase** (next): Copy contracts to `src/` and implement logic
3. **Validation Phase**: Ensure implementations satisfy contracts

## Future Enhancements

Contracts include placeholders for future features:
- Search/filter agent files
- Update/delete agent files
- User authentication
- Tags and categorization
- Comments and voting

These are marked as "Future" and excluded from MVP implementation but included in contracts for planning purposes.

## Testing

Contracts make testing easier:

```typescript
// Mock implementation based on contract
const mockGetAgentFiles: GetAgentFilesAction = async () => ({
  success: true,
  data: [/* mock data */],
});

// Test component with mock
<AgentFileList agentFiles={mockGetAgentFiles.data} />
```

## Version History

- **v1.0.0** (2025-11-13): Initial contracts for MVP
  - AgentFile entity
  - Pagination types
  - Form validation schemas
  - Server Action contracts
