# Specification: Homepage with Agent Gallery

**Author:** Peter Cosemans
**Date:** 2025-11-15

## Goal

Build the Agent Hub homepage featuring a hero section with branding and a responsive gallery that displays agent cards using mock data from `/lib/mock-data.ts`. This establishes the core browsing experience for Phase 1 MVP.

## User Stories

- As a developer, I want to browse available Claude Code agents so that I can discover tools to enhance my workflow
- As a visitor, I want to see agent details at a glance (name, author, description, tags, stats) so that I can quickly evaluate which agents are useful for my needs

## Specific Requirements

**Hero Section with Branding**
- Display Agent Hub logo icon (document/file icon) and "Agent Hub" title in large white bold text
- Show tagline: "Browse and discover powerful Claude Code agents to supercharge your development workflow"
- Implement vibrant gradient background transitioning from blue to pink/magenta matching the mockup
- Include two statistics badges: "13 Agents" with sparkle icon and "Community Powered" with users icon
- Use semantic HTML with proper heading hierarchy (h1 for title)

**Gallery Section Layout**
- Display "Explore Agents" heading with subtitle "Find the perfect agent for your next project"
- Render all 12 agents from `mockAgents` array in `/lib/mock-data.ts`
- Implement responsive CSS Grid layout: 3 columns on desktop (lg), 2 columns on tablet (md), 1 column on mobile (sm)
- Apply consistent spacing between cards and generous padding around sections

**Agent Card Component**
- Display agent name as bold heading at top of card
- Show author information with circular colored avatar containing first initial and author name
- Truncate description to 2-3 lines with ellipsis overflow
- Render all tags from agent's `tags` array as pill-shaped badges with light gray background
- Display metadata row at bottom: eye icon + view count, copy icon + copy count, clock icon + relative time
- Use white background with subtle border/shadow for card styling

**Data Management and Display**
- Import `mockAgents` and `Agent` type from `/lib/mock-data.ts`
- Calculate and display relative time from `createdAt` ISO date strings (e.g., "3 months ago", "1 months ago")
- Generate colored avatar circles with first letter of author name
- Use view counts, copy counts, and tags exactly as provided in mock data

**Loading State with Artificial Delay**
- Add artificial delay between 500ms-1000ms when page loads to simulate async data fetching
- Display skeleton loaders during loading that match card layout structure
- Show placeholder rectangles for title, author avatar, description, tags, and metadata
- Apply shimmer/pulse animation effect to skeleton elements
- Maintain same grid layout structure during loading state

**Error State and Empty State Handling**
- Handle "No agents found" scenario when mock data array is empty
- Display helpful message suggesting to check back later
- Handle data loading failures with user-friendly error message
- Maintain page structure (hero section + gallery section) during error states
- Ensure proper accessibility with ARIA labels and semantic HTML during errors

**Visual Design Matching Mockup**
- Implement blue-to-pink gradient for hero background
- Use white cards with subtle shadows/borders on light gray background
- Generate colored circular avatars (use different colors per author)
- Style description and metadata text in gray color
- Create pill-shaped tag badges with light gray background and dark text
- Include icons: eye (views), copy/document (copies), clock (time), sparkle (agent count), users (community)

**Responsive Design and Accessibility**
- Follow mobile-first approach starting with single column layout
- Use Tailwind CSS breakpoints (sm, md, lg) for responsive grid
- Ensure minimum 44x44px touch targets for mobile users
- Implement proper color contrast for WCAG compliance
- Add ARIA labels for icon-only elements and metadata displays
- Ensure keyboard navigation support for all interactive elements

## Visual Design

**`planning/visuals/agent-hub-home.png`**
- Hero section spans full width with blue-to-pink gradient background
- Logo icon positioned left of "Agent Hub" title in white bold text
- Statistics badges displayed horizontally below tagline with sparkle and users icons
- Gallery section has clean white/light gray background contrasting with hero
- Cards arranged in 3-column grid with consistent spacing and alignment
- Each card shows title, circular avatar with initial, author name, description, tag pills, and metadata row
- Metadata icons (eye, copy, clock) aligned horizontally at card bottom with corresponding counts

## Existing Code to Leverage

**Mock Data Structure in `/lib/mock-data.ts`**
- Use existing `Agent` interface with fields: id, name, description, content, author, createdAt, tags, viewCount, copyCount
- Import `mockAgents` array containing 12 agent objects with realistic data
- This interface will be reused for database schema in Phase 2, so maintain structure exactly as-is
- Tags are already in lowercase kebab-case format (code-review, python, react, etc.)

**Next.js App Router Setup in `/app/page.tsx` and `/app/layout.tsx`**
- Replace placeholder homepage component with new hero and gallery implementation
- Use existing Inter font from root layout for consistent typography
- Follow established pattern of using React Server Components by default
- Maintain existing metadata structure (title, description) in layout

**Tailwind CSS v4 Configuration**
- Use configured Tailwind with content paths for app and components directories
- Leverage Tailwind utility classes for all styling (gradient backgrounds, grid layouts, spacing)
- Follow existing pattern of utility-first CSS approach without custom CSS files
- Use Tailwind's built-in responsive breakpoints (sm, md, lg)

**TypeScript Strict Mode Configuration**
- Follow existing strict TypeScript configuration for all new components
- Import and use the `Agent` type from mock-data.ts for type safety
- Define prop interfaces for reusable components (AgentCard, TagBadge, etc.)

**Component Organization Pattern**
- Create reusable components in `/components` directory (AgentCard, TagBadge, Avatar, SkeletonCard)
- Follow single responsibility principle with small, focused components
- Use clear, descriptive component names following project conventions

## Out of Scope

- Clicking on agent cards to navigate to detail pages (Phase 1 Item #2)
- Copy to Clipboard functionality on agent cards (Phase 1 Item #3)
- Agent Upload Form (Phase 1 Item #4)
- Search functionality for filtering agents (Phase 4)
- Tag-based filtering or sorting options (Phase 4)
- Pagination for agent list (Phase 2)
- User authentication or profiles (Phase 3)
- Real-time data fetching from database (Phase 2)
- Database integration replacing mock data (Phase 2)
- Favorite or bookmark functionality (future enhancement)
- View count or copy count tracking/incrementing (future enhancement)
