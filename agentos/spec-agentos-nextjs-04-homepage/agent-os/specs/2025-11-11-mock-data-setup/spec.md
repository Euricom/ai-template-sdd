# Specification: Mock Data Setup

## Goal
Create a TypeScript mock data structure with 10-15 sample Claude Code agent files to enable frontend development for Phase 1 MVP without requiring backend integration.

## User Stories
- As a Phase 1 developer, I want a realistic mock data structure so that I can build and test all UI components without waiting for backend implementation
- As a team member, I want type-safe agent data interfaces so that the code remains maintainable and can seamlessly transition to real database queries in Phase 2

## Specific Requirements

**Agent Type Interface Definition**
- Create TypeScript interface with 9 required fields: id (string), name (string), description (string), content (string), author (string), createdAt (Date or ISO string), tags (string array), viewCount (number), copyCount (number)
- Export interface from /lib/mock-data.ts for reuse across components
- Ensure strict TypeScript compliance with no optional fields
- Interface should align with future database schema design for Phase 2

**Sample Agent Data Collection**
- Generate 10-15 complete agent objects covering diverse use cases
- Each agent must have all 9 fields populated with realistic values
- Distribute agents across these categories: Code Review Agent, Documentation Generator, Test Writer, Bug Fix Assistant, Refactoring Helper, API Integration Helper
- Vary creation dates across agents to enable sorting functionality testing
- Export as const array with proper type annotation (const mockAgents: Agent[] = [...])

**Placeholder Content Strategy**
- Use markdown-formatted placeholder text for content field (not full realistic agent files)
- Keep placeholder content short but representative (3-5 paragraphs of lorem ipsum or basic instruction text)
- Include markdown formatting elements (headers, lists, code blocks) to test rendering
- Ensure content field is sufficient to demonstrate copy-to-clipboard and detail view functionality

**Author Name Implementation**
- Use 8-12 unique realistic author names with diverse cultural backgrounds
- Examples: "Sarah Chen", "Marcus Rodriguez", "Amara Okafor", "James Mitchell", "Priya Sharma", "Elena Kowalski"
- Vary author attribution across agents (some authors can have multiple agents)
- Names should sound professional and believable for community platform context

**Metadata Value Ranges**
- viewCount: Range from 45 to 850 to simulate varied popularity
- copyCount: Range from 5 to 120 to show realistic copy behavior (generally 10-20% of views)
- createdAt dates: Spread across last 3-6 months to enable chronological sorting tests
- Ensure some agents have high engagement (high views/copies) and others low engagement for testing filters

**Tags and Categorization Structure**
- Each agent should have 2-4 tags from a consistent tag vocabulary
- Primary category tags: "code-review", "documentation", "testing", "debugging", "refactoring", "api-integration"
- Secondary descriptive tags: "python", "javascript", "typescript", "react", "backend", "frontend", "automation", "ai-assisted"
- Use lowercase kebab-case for all tags for consistency
- Total unique tags across all agents: 12-16 tags

**File Location and Export Pattern**
- Place mock data file at /lib/mock-data.ts
- Export Agent interface as named export: export interface Agent { ... }
- Export mock data array as named export: export const mockAgents: Agent[] = [...]
- Add JSDoc comment above interface explaining purpose and Phase 2 migration path
- File should have no dependencies on other project files (pure data definition)

**Type Safety and Validation**
- Leverage TypeScript strict mode (already enabled in tsconfig.json)
- No use of 'any' types anywhere in the file
- Ensure all dates are consistently formatted (ISO string recommended: "2025-10-15T10:30:00Z")
- Each mock agent object should satisfy the Agent interface without type assertions

## Visual Design
No visual assets provided for this spec.

## Existing Code to Leverage

**TypeScript Configuration (tsconfig.json)**
- Strict mode is enabled which enforces type safety for the mock data interface
- Module resolution is set to "Bundler" which supports modern ES module imports
- Path alias @/* is configured, allowing imports like @/lib/mock-data
- Target is ES2023 which supports modern JavaScript features for date handling

**Next.js Metadata Pattern (app/layout.tsx)**
- Shows established pattern of using TypeScript type imports (import type { Metadata })
- Demonstrates proper typing for exported constants which should be followed for mockAgents array
- Uses Inter font from next/font/google showing preference for built-in Next.js optimizations

**Folder Structure Convention**
- /lib directory already exists and is designated for utility code and shared logic
- Follows Next.js 15 App Router conventions with clear separation of concerns
- Mock data belongs in /lib as it's shared data consumed by multiple components

## Out of Scope
- Helper functions for filtering, searching, or sorting agents (components will handle this logic)
- User rating or review system fields (explicitly excluded from Phase 1)
- User ID or authentication-related fields (no auth in Phase 1)
- Full realistic Claude Code agent markdown content (placeholder text sufficient)
- Database schema or ORM model definitions (Phase 2 concern)
- API route handlers or data fetching functions (Phase 2 concern)
- Validation functions for agent data (not needed for static mock data)
- Data transformation or normalization utilities (keep mock data simple)
- Image URLs or avatar fields for authors (not in requirements)
- Complex relational data structures like favorites or collections (future phases)
