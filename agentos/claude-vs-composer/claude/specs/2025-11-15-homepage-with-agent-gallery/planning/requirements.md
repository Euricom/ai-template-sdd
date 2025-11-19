# Spec Requirements: Phase 1 MVP - Homepage with Agent Gallery

**Author:** Peter Cosemans
**Date:** 2025-11-15

## Initial Description

Build the homepage for Agent Hub Phase 1 MVP featuring an agent gallery that displays agent file cards using mock data. This is the first user-facing feature that establishes the core browsing experience. The homepage should include a hero section and a responsive grid of agent cards showing key information from the mock data structure.

This feature implements only Item #1 from the Phase 1 roadmap: "Homepage with Agent Gallery - Display a grid of agent file cards with name, description preview, and basic metadata using static mock data."

## Requirements Discussion

### First Round Questions

**Q1:** The scope is limited to only the Homepage with Agent Gallery (Item #1 from Phase 1 roadmap), correct? Not all 8 Phase 1 features?

**Answer:** Yes, only Homepage with Agent Gallery. This is NOT implementing all 8 features - just the homepage with the agent gallery display.

**Q2:** Should we use the mock data structure as-is from /lib/mock-data.ts with fields: id, name, description, content, author, createdAt, tags, viewCount, copyCount?

**Answer:** Yes, use the mock data structure as-is from /lib/mock-data.ts. The fields are: id, name, description, content, author, createdAt, tags, viewCount, copyCount.

**Q3:** For the gallery layout, should we display cards in a responsive grid (3-4 columns desktop, 2 tablet, 1 mobile) with truncated descriptions (2-3 lines)?

**Answer:** Yes - responsive grid with 3-4 columns desktop, 2 tablet, 1 mobile. Truncated descriptions at 2-3 lines.

**Q4:** Since this is only the homepage/gallery view, the Agent Detail Page (Item #2) is out of scope, correct?

**Answer:** N/A - Agent Detail Page is not in scope for this specification.

**Q5:** Should we implement the Copy to Clipboard functionality (Item #3) on the gallery cards, or is that also out of scope?

**Answer:** N/A - Copy to Clipboard is not in scope for this specification.

**Q6:** The Agent Upload Form (Item #4) is also out of scope for this homepage feature, correct?

**Answer:** N/A - Agent Upload Form is not in scope for this specification.

**Q7:** For loading states (Item #7), should we add artificial delays (500ms-1s) to simulate async data fetching with skeleton loaders matching the card layout?

**Answer:** Yes - add artificial delays (500ms-1s) with skeleton loaders matching card layout.

**Q8:** For error states (Item #8), should we handle all error scenarios including "No agents found" empty state?

**Answer:** Yes - all error states including "No agents found" empty state.

### Existing Code to Reference

**Similar Features Identified:**

No similar existing features were identified for reference. This is a new feature being built from the existing project structure which includes:
- Basic Next.js 14+ App Router setup
- Tailwind CSS v4 configuration
- Mock data structure at `/lib/mock-data.ts`
- Placeholder homepage at `/app/page.tsx`
- Root layout at `/app/layout.tsx`

### Follow-up Questions

No follow-up questions were needed. The user provided clear and comprehensive answers to all initial questions.

## Visual Assets

### Files Provided:

- `agent-hub-home.png`: High-fidelity design mockup of the Agent Hub homepage (located at `/Users/peter/git/euricom/ai-template-sdd/agentos/agent-hub-home.png`)

### Visual Insights:

**Hero Section:**
- Vibrant gradient background (blue to pink/magenta)
- Agent Hub logo icon (document icon) on the left
- Large "Agent Hub" title in white bold text
- Descriptive tagline: "Browse and discover powerful Claude Code agents to supercharge your development workflow"
- Two statistics badges: "13 Agents" with sparkle icon and "Community Powered" with users icon

**Gallery Section:**
- "Explore Agents" heading with subtitle "Find the perfect agent for your next project"
- Clean white/light gray background
- Cards displayed in a 3-column grid layout
- Generous spacing between cards

**Agent Card Design:**
- White background with subtle border/shadow
- Agent title in bold black text at the top
- Author information with circular colored avatar initial (S, M, P) and author name
- Description text (2-3 lines) in gray color
- Tags displayed as pill-shaped badges with light gray background
- Bottom metadata row showing:
  - Eye icon with view count (782, 645, 523)
  - Copy icon with copy count (95, 78, 67)
  - Clock icon with relative time (3 months ago, 1 months ago)

**Design Specifications:**
- Fidelity level: High-fidelity mockup with specific colors, spacing, and styling
- Color palette: Blue-to-pink gradient hero, white cards, gray text, colored avatars
- Typography: Bold headings, regular body text, clean sans-serif font
- Iconography: Eye icon (views), copy icon (copies), clock icon (time), sparkle icon (count), users icon (community)
- Component patterns: Circular avatar with initials, pill-shaped tag badges, icon+number metadata display

**User Experience Patterns:**
- Clear visual hierarchy from hero to gallery
- Scannable card layout with consistent information structure
- Metadata positioned for quick scanning at card bottom
- Tags provide quick categorization
- Author attribution with visual identity (avatar)

## Requirements Summary

### Functional Requirements

**Homepage Layout:**
- Implement hero section with gradient background matching the visual design
- Display Agent Hub branding (logo icon + title)
- Show descriptive tagline about the platform's purpose
- Include statistics badges showing total agent count and "Community Powered" label
- Implement "Explore Agents" section header with subtitle

**Agent Gallery Display:**
- Fetch and display all agents from `/lib/mock-data.ts` (13 agent objects)
- Render agents in a responsive grid layout:
  - Desktop (lg): 3 columns
  - Tablet (md): 2 columns
  - Mobile (sm): 1 column
- Each agent card must display:
  - Agent name (title) in bold
  - Author name with colored circular avatar showing first initial
  - Description truncated to 2-3 lines with ellipsis
  - Tags as pill-shaped badges (display all tags from the agent object)
  - View count with eye icon
  - Copy count with copy icon
  - Relative creation time with clock icon (e.g., "3 months ago")

**Data Management:**
- Import `mockAgents` array from `/lib/mock-data.ts`
- Use all 12 agents from the mock data (corrected from "13 Agents" shown in mockup)
- Calculate relative time display from `createdAt` ISO date strings
- Display tags from the `tags` array field

**Loading States:**
- Add artificial delay (500ms-1s) when the page loads to simulate async data fetching
- Display skeleton loaders during the loading state:
  - Skeleton loaders should match the card layout structure
  - Show placeholder rectangles for title, author, description, tags, and metadata
  - Maintain the same grid layout during loading
  - Use shimmer/pulse animation effect

**Error States:**
- Handle "No agents found" empty state:
  - Display message when no agents are available
  - Provide helpful text suggesting to check back later
  - Maintain page structure (hero + empty gallery section)
- Graceful error handling for data loading failures:
  - Show error message if data cannot be loaded
  - Provide user-friendly error text
  - Maintain accessibility during error states

**Visual Design:**
- Match the high-fidelity mockup design specifications:
  - Hero gradient background (blue to pink/magenta)
  - White card backgrounds with subtle shadows/borders
  - Colored circular avatars with initials
  - Gray text for descriptions and metadata
  - Pill-shaped tag badges with light gray background
  - Proper spacing and padding matching the mockup
- Implement icons for metadata display:
  - Eye icon for view count
  - Copy/document icon for copy count
  - Clock icon for relative time
  - Sparkle icon for agent count badge
  - Users icon for community badge

### Reusability Opportunities

**Potential Reusable Components:**
- Agent Card component (will be reused in search results, filtered views)
- Tag Badge component (will be reused in detail pages, filters)
- Avatar component with initials (will be reused in author profiles)
- Skeleton Loader component (will be reused across all async data loading)
- Hero Section component (pattern for other marketing pages)
- Stats Badge component (reusable for different metrics)

**Backend Patterns:**
- Mock data import pattern established for Phase 2 database migration
- The Agent interface from mock-data.ts will be directly reused for database schema definition in Phase 2

**Styling Patterns:**
- Responsive grid layout pattern (reusable for other gallery views)
- Card component styling (reusable for other content types)
- Gradient background pattern (reusable for other hero sections)

### Scope Boundaries

**In Scope:**
- Homepage hero section with branding and statistics
- Agent gallery grid display with all 13 mock agents
- Agent card component with all required fields
- Responsive layout (mobile, tablet, desktop)
- Loading states with skeleton loaders and artificial delays
- Error states including empty state
- Visual design matching high-fidelity mockup
- Relative time calculation and display
- Tag display as badges
- Metadata display (views, copies, time) with icons

**Out of Scope:**
- Agent Detail Page (separate specification - Phase 1 Item #2)
- Copy to Clipboard functionality (separate specification - Phase 1 Item #3)
- Agent Upload Form (separate specification - Phase 1 Item #4)
- Search functionality (Phase 4)
- Filtering by tags/categories (Phase 4)
- Sorting options (Phase 4)
- Pagination (Phase 2)
- User authentication (Phase 3)
- Click navigation to detail pages (will be added with Item #2)
- Real-time data fetching (Phase 2)
- Database integration (Phase 2)

**Future Enhancements (noted for later phases):**
- Interactive filtering by tags when clicked
- Sorting by popularity, recency, or other criteria
- Search functionality across agent names/descriptions
- Pagination for larger datasets
- Real database queries replacing mock data
- User profiles and author pages
- Favorite/bookmark functionality

### Technical Considerations

**Integration Points:**
- Mock data import from `/lib/mock-data.ts` using the Agent interface
- Next.js App Router page component at `/app/page.tsx`
- Root layout integration at `/app/layout.tsx`
- Tailwind CSS v4 for all styling

**Existing System Constraints:**
- Must work with Next.js 14+ App Router architecture
- Must use TypeScript with strict mode enabled
- Must follow Tailwind CSS v4 utility-first approach
- Must adhere to component organization standards (separate UI components)
- Mock data structure cannot be modified (will be reused for database schema)

**Technology Preferences:**
- Use React Server Components by default for static content
- Use Client Components ('use client') only for interactive elements (if any in this phase)
- Follow Next.js best practices for page components and layouts
- Implement responsive design using Tailwind breakpoints (sm, md, lg, xl)
- Use CSS Grid or Flexbox for gallery layout
- Implement loading states using React Suspense patterns or conditional rendering

**Similar Code Patterns to Follow:**
- Follow existing project structure with `/app` directory for pages
- Use existing TypeScript configuration and strict typing
- Follow existing Tailwind CSS configuration and utility patterns
- Maintain consistency with root layout styling and fonts
- Use the established mock data import pattern from `/lib/mock-data.ts`

**Performance Considerations:**
- Optimize image loading for avatar circles (use colored backgrounds with text initials)
- Implement efficient grid layout rendering
- Ensure smooth loading skeleton transitions
- Minimize layout shift during loading states
- Consider lazy loading for images if added in future phases

**Accessibility Considerations:**
- Semantic HTML structure for cards and sections
- Proper heading hierarchy (h1, h2, etc.)
- Alt text for icons and visual elements
- Keyboard navigation support
- ARIA labels for icon-only elements
- Color contrast compliance for text and backgrounds
- Screen reader friendly metadata display
