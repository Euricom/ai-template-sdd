# Task Breakdown: Mock Data Setup

## Overview
Total Tasks: 11 main tasks organized into 3 strategic groups
Estimated Total Time: 2-3 hours

## Task List

### Type Definitions Layer

#### Task Group 1: TypeScript Interface Definition
**Dependencies:** None
**Estimated Time:** 20-30 minutes

- [x] 1.0 Create TypeScript Agent interface
  - [x] 1.1 Create `/lib/mock-data.ts` file
    - File should be located at absolute path: `/Users/peter/git/temp/spec-agentos-t1/lib/mock-data.ts`
    - Initialize with proper TypeScript syntax
    - Ensure file has no external dependencies (pure data definition)
  - [x] 1.2 Define Agent interface with all 9 required fields
    - `id: string` - Unique identifier for each agent
    - `name: string` - Agent file name (clear, descriptive)
    - `description: string` - Brief description of agent's purpose
    - `content: string` - Full markdown content (placeholder text)
    - `author: string` - Realistic author name
    - `createdAt: string` - ISO 8601 date format (e.g., "2025-10-15T10:30:00Z")
    - `tags: string[]` - Array of 2-4 category tags
    - `viewCount: number` - Simulated view count (45-850)
    - `copyCount: number` - Simulated copy count (5-120)
    - Use TypeScript strict mode compliance (no optional fields, no 'any' types)
  - [x] 1.3 Add JSDoc documentation to interface
    - Explain purpose: "Agent interface for Phase 1 MVP with mock data"
    - Note Phase 2 migration path: "This interface will be reused for database schema in Phase 2"
    - Document each field with inline comments where clarification needed
  - [x] 1.4 Export interface as named export
    - Use: `export interface Agent { ... }`
    - Ensure export follows Next.js conventions

**Acceptance Criteria:**
- Agent interface defined with exactly 9 required fields
- All fields use proper TypeScript types (no 'any')
- JSDoc comments explain purpose and migration path
- Interface exported as named export
- File has no external dependencies

---

### Data Generation Layer

#### Task Group 2: Mock Agent Data Creation
**Dependencies:** Task Group 1 (Agent interface must exist)
**Estimated Time:** 60-90 minutes

- [x] 2.0 Generate diverse sample agents
  - [x] 2.1 Create 10-15 agent objects with diverse categories
    - Target: 12-13 agents for good variety without overwhelming
    - Ensure each agent object satisfies Agent interface
    - No type assertions needed (type safety enforced)
  - [x] 2.2 Distribute agents across 6 primary categories
    - Code Review Agent (2-3 agents)
    - Documentation Generator (2 agents)
    - Test Writer (2 agents)
    - Bug Fix Assistant (2 agents)
    - Refactoring Helper (1-2 agents)
    - API Integration Helper (1-2 agents)
    - Ensure category variety for realistic browsing experience
  - [x] 2.3 Create realistic diverse author names (8-12 unique authors)
    - Examples: "Sarah Chen", "Marcus Rodriguez", "Amara Okafor", "James Mitchell", "Priya Sharma", "Elena Kowalski", "Yuki Tanaka", "Rafael Santos"
    - Use culturally diverse names for inclusive platform feel
    - Vary author attribution (some authors have multiple agents)
    - Names should sound professional and believable
  - [x] 2.4 Write placeholder markdown content for each agent
    - Content length: 3-5 paragraphs of text
    - Include markdown formatting elements:
      - Headers (## and ###)
      - Bulleted lists (- item)
      - Code blocks (```language ... ```)
      - Bold and italic text
    - Use lorem ipsum or basic instruction-style placeholder text
    - Keep content short but representative for testing
    - NO full realistic agent file content needed
  - [x] 2.5 Create consistent tag vocabulary (12-16 unique tags)
    - Primary category tags (use these for all agents):
      - "code-review", "documentation", "testing", "debugging", "refactoring", "api-integration"
    - Secondary descriptive tags (distribute across agents):
      - "python", "javascript", "typescript", "react", "backend", "frontend", "automation", "ai-assisted", "node", "api"
    - Use lowercase kebab-case for all tags
    - Each agent should have 2-4 tags total
  - [x] 2.6 Assign tags to each agent (2-4 tags per agent)
    - Include 1 primary category tag (matching the agent's category)
    - Add 1-3 secondary descriptive tags
    - Ensure tag distribution makes sense (e.g., React tags for frontend agents)
  - [x] 2.7 Set varied creation dates (spread across 3-6 months)
    - Use ISO 8601 string format: "2025-10-15T10:30:00Z"
    - Range: approximately August 2025 to November 2025
    - Vary dates to enable chronological sorting tests
    - Some agents should be recent, others older
  - [x] 2.8 Assign realistic metadata values
    - viewCount: Range from 45 to 850
      - Create some "popular" agents (600-850 views)
      - Create some "moderate" agents (200-500 views)
      - Create some "new/niche" agents (45-150 views)
    - copyCount: Range from 5 to 120
      - Generally 10-20% of viewCount for realism
      - Popular agents should have proportionally higher copies
    - Ensure variety for testing filters and sorting
  - [x] 2.9 Verify each agent object completeness
    - Check all 9 fields are populated for each agent
    - Confirm no missing or undefined values
    - Ensure data types match Agent interface exactly
    - Validate date strings are properly formatted ISO 8601

**Acceptance Criteria:**
- 10-15 complete agent objects created (target 12-13)
- All 6 primary categories represented with appropriate distribution
- 8-12 unique realistic author names used
- Each agent has 3-5 paragraphs of markdown placeholder content
- 12-16 unique tags in lowercase kebab-case across all agents
- Each agent has 2-4 tags (1 primary category + 1-3 descriptive)
- Creation dates spread across 3-6 months in ISO 8601 format
- viewCount values range from 45-850 with variety
- copyCount values range from 5-120 (roughly 10-20% of views)
- Every agent satisfies Agent interface without type errors

---

### Export & Verification Layer

#### Task Group 3: Data Export and Validation
**Dependencies:** Task Group 2 (mock agents must be created)
**Estimated Time:** 20-30 minutes

- [x] 3.0 Export and validate mock data
  - [x] 3.1 Export mock agents array with proper typing
    - Use: `export const mockAgents: Agent[] = [...]`
    - Ensure array is properly typed (TypeScript infers correct type)
    - Follow Next.js export conventions
    - Array should be a const export for immutability
  - [x] 3.2 Verify TypeScript strict mode compliance
    - Run: `cd /Users/peter/git/temp/spec-agentos-t1 && pnpm tsc --noEmit`
    - Fix any TypeScript errors if they appear
    - Ensure no 'any' types used anywhere
    - Confirm all fields satisfy interface requirements
    - NO type assertions (as Agent) should be needed
  - [x] 3.3 Test import in a Next.js context (optional verification)
    - Option 1: Create temporary test file to import and log mock data
    - Option 2: Import in existing page component and verify in browser
    - Confirm: `import { Agent, mockAgents } from '@/lib/mock-data'` works
    - Verify path alias '@/' resolves correctly
  - [x] 3.4 Manual data quality review
    - Scan all agent names for clarity and appropriateness
    - Check descriptions are meaningful and varied
    - Verify content has proper markdown formatting
    - Confirm author names are diverse and professional
    - Validate tags make sense for each agent's purpose
    - Check dates are chronologically sensible
    - Ensure view/copy counts follow realistic patterns
  - [x] 3.5 Document usage in code comments (top of file)
    - Add file header comment explaining:
      - Purpose: "Mock data for Agent Hub Phase 1 MVP"
      - Usage: "Import with: import { Agent, mockAgents } from '@/lib/mock-data'"
      - Migration: "In Phase 2, replace imports with database queries"
    - Keep comments concise and actionable

**Acceptance Criteria:**
- mockAgents array exported as `const mockAgents: Agent[] = [...]`
- TypeScript compilation succeeds with no errors (`pnpm tsc --noEmit`)
- Import statement works with path alias: `import { Agent, mockAgents } from '@/lib/mock-data'`
- All agent data passes manual quality review
- File header includes usage documentation
- No type assertions or workarounds needed
- File is production-ready for Phase 1 development

---

## Execution Order

Recommended implementation sequence:

1. **Task Group 1** (Type Definitions Layer)
   - Start here: Interface defines the structure for all subsequent work
   - Creates the contract that mock data must satisfy
   - Enables type-safe development immediately

2. **Task Group 2** (Data Generation Layer)
   - Depends on: Task Group 1 (interface must exist first)
   - Most time-consuming: Creating diverse, realistic sample data
   - Focus on quality and variety for realistic frontend testing

3. **Task Group 3** (Export & Verification Layer)
   - Depends on: Task Group 2 (data must be created first)
   - Final validation ensures production-readiness
   - TypeScript compilation confirms type safety

---

## Integration Notes

This mock data file will be consumed by Phase 1 features:

- **Homepage with Agent Gallery**: Display grid of mockAgents array
- **Agent File Detail Page**: Show individual agent by id lookup
- **Copy to Clipboard**: Copy agent.content field to clipboard
- **Agent Upload Form**: Reference mock data structure for form fields

In Phase 2, imports will seamlessly transition from:
```typescript
import { mockAgents } from '@/lib/mock-data'
```

To database queries:
```typescript
const agents = await db.query.agents.findMany()
```

The Agent interface will be reused for database schema definition.

---

## Quality Checklist

Before marking complete, verify:

- [x] TypeScript strict mode compliance (no errors from `pnpm tsc --noEmit`)
- [x] All 9 interface fields defined correctly
- [x] 10-15 agents created (target 12-13)
- [x] All 6 categories represented
- [x] 8-12 unique diverse author names
- [x] 12-16 unique tags in kebab-case
- [x] Each agent has 2-4 tags
- [x] Dates in ISO 8601 format spanning 3-6 months
- [x] viewCount range: 45-850
- [x] copyCount range: 5-120
- [x] Markdown content includes headers, lists, and code blocks
- [x] File exports Agent interface and mockAgents array
- [x] JSDoc comments explain purpose and migration path
- [x] File has zero external dependencies
- [x] Import works with @/ path alias
- [x] Manual review confirms data quality and variety
