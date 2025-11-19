# Spec Requirements: Mock Data Setup

## Initial Description
Mock data setup for Agent Hub Phase 1 MVP

This is for Agent Hub - a Next.js application where users can post their Claude Code agent files (.md files) and browse files posted by others. This is Phase 1 (MVP) which is frontend-only with mock data.

The initial project setup (Phase 0) has been completed with Next.js 15.5.6, React 19.2.0, TypeScript strict mode, Tailwind CSS v4, and oxlint. The folder structure includes /app, /components, /lib, and /public directories.

## Requirements Discussion

### First Round Questions

**Q1: Agent Data Structure** - Should the mock data include fields like id, name, description, and the full agent file content (markdown)? Should we also include author name, creation date, and tags array for categorization?

**Answer:** YES - Include: id, name, description, content (full markdown), author name, createdAt, and tags array. Also include viewCount and copyCount for future phases.

**Q2: Sample Data Volume** - How many sample agents should we include in the mock data? I'm thinking 10-15 agents would provide enough variety for testing the gallery view without overwhelming the initial load.

**Answer:** 10-15 sample agents

**Q3: Agent Categories/Types** - Should the sample agents represent diverse use cases? For example: code review agents, documentation generators, test writers, bug fix assistants, refactoring helpers, and API integration helpers.

**Answer:** YES - Include diverse categories like "Code Review Agent", "Documentation Generator", "Test Writer", "Bug Fix Assistant", "Refactoring Helper", and "API Integration Helper"

**Q4: Content Realism** - For the agent file content field, should we use realistic full agent markdown content, or is placeholder text acceptable for Phase 1?

**Answer:** Placeholder text is acceptable (not full realistic agent file content)

**Q5: Author Information** - Should we use realistic author names (like "Sarah Chen" or "Marcus Rodriguez") or generic ones (like "User 1", "User 2")? I'm thinking realistic names would make the mock data more believable.

**Answer:** Realistic author names (like "Sarah Chen" or "Marcus Rodriguez")

**Q6: Utility Functions** - Should the mock data file include helper functions for filtering or searching agents, or keep it as a simple data export that components will handle?

**Answer:** Simple array - no helper functions, let components handle filtering

**Q7: Metadata Fields** - Should we include metadata like createdAt dates for sorting, viewCount/copyCount for displaying popularity, or ratings for future features?

**Answer:** YES - Include createdAt dates for sorting, include viewCount and copyCount with sample numbers. NO ratings for now.

**Q8: Exclusions** - Are there any specific fields or features you definitely DON'T want in the mock data at this stage?

**Answer:** None - no specific exclusions

### Existing Code to Reference

No similar existing features identified for reference.

### Follow-up Questions

No follow-up questions were needed.

## Visual Assets

### Files Provided:
No visual assets provided.

### Visual Insights:
No visual assets provided.

## Requirements Summary

### Functional Requirements

**TypeScript Interface for Agent Type:**
- `id`: Unique identifier (string or number)
- `name`: Agent file name (string)
- `description`: Brief description of what the agent does (string)
- `content`: Full markdown content of the agent file (string, placeholder text acceptable)
- `author`: Author name (string, realistic names like "Sarah Chen" or "Marcus Rodriguez")
- `createdAt`: Creation timestamp (Date or ISO string)
- `tags`: Array of category tags (string array)
- `viewCount`: Number of views (number, sample data)
- `copyCount`: Number of copies (number, sample data)

**Sample Data Requirements:**
- Total agents: 10-15 sample agents
- Diverse categories represented:
  - Code Review Agent
  - Documentation Generator
  - Test Writer
  - Bug Fix Assistant
  - Refactoring Helper
  - API Integration Helper
- Each agent should have realistic author names
- Each agent should have sample viewCount and copyCount numbers
- Creation dates should vary to enable sorting functionality

**Data Structure and Export:**
- Simple TypeScript array export
- No helper functions or utilities in the mock data file
- Components will handle filtering, searching, and sorting
- Located at `/lib/mock-data.ts` for easy replacement in Phase 2

**Content Approach:**
- Placeholder text is acceptable for agent file content field
- Content should be formatted as markdown
- Descriptions should be meaningful and reflect the agent's purpose
- Names should clearly indicate the agent's function

**Author Name Patterns:**
- Use realistic, diverse names (e.g., "Sarah Chen", "Marcus Rodriguez", "Amara Okafor", "James Mitchell")
- Vary authors across the sample agents
- Names should sound professional and believable

### Reusability Opportunities

No existing similar features identified for code reuse.

### Scope Boundaries

**In Scope:**
- TypeScript interface definition for Agent type
- 10-15 sample agent objects with all required fields
- Mock data file at `/lib/mock-data.ts`
- Placeholder markdown content for agent files
- Realistic author names and varied creation dates
- Sample viewCount and copyCount numbers
- Tags array for categorization (diverse categories)
- Simple array export for easy component consumption

**Out of Scope:**
- Helper functions for filtering/searching (components handle this)
- Ratings system (not included in Phase 1)
- User ID or user object references (no auth in Phase 1)
- Real agent file content (placeholder text used instead)
- Database integration (Phase 2)
- API routes or server actions (Phase 2)

### Technical Considerations

**TypeScript Requirements:**
- Strict mode enabled (already configured)
- Export TypeScript interface/type for Agent
- Export const array of Agent objects
- Ensure type safety for all fields

**Integration Points:**
- Mock data will be consumed by Phase 1 features:
  - Homepage with Agent Gallery
  - Agent File Detail Page
  - Copy to Clipboard Functionality
  - Agent Upload Form (for display reference)

**Framework Constraints:**
- Next.js 15.5.6 with App Router
- React 19.2.0
- TypeScript strict mode
- No external dependencies for mock data (pure TypeScript)

**Data Format:**
- createdAt: Use ISO string format or JavaScript Date objects
- tags: Array of strings, typically 2-4 tags per agent
- viewCount and copyCount: Reasonable sample numbers (e.g., 50-500 for views, 10-100 for copies)

**Future Migration Path:**
- Simple array structure allows easy replacement with database queries in Phase 2
- Agent interface can be reused for database schema definition
- No refactoring of consuming components required when switching to real data
