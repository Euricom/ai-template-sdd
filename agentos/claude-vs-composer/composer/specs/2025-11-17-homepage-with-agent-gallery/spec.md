# Specification: Homepage with Agent Gallery

## Goal
Create a responsive homepage that displays a gallery of agent file cards in a grid layout, featuring a gradient header section and comprehensive card information including author details, tags, and stats using mock data.

## User Stories
- As a user, I want to browse available Claude Code agents on the homepage so that I can discover useful agent configurations for my projects
- As a user, I want to see key information about each agent (name, description, author, tags, stats) on the homepage cards so that I can quickly evaluate which agents are relevant to my needs

## Specific Requirements

**Gradient Header Section**
- Create prominent header with gradient background transitioning from purple to pink/red
- Display "Agent Hub" title with document icon in large white bold text
- Include subtitle text about browsing Claude Code agents in smaller white text
- Show metadata badges: "13 Agents" with star icon and "Community Powered" with group icon
- Use white text/icons for all header content to contrast with gradient background

**Agent Gallery Grid Layout**
- Implement responsive grid: 1 column on mobile (320px-768px), 2 columns on tablet (768px-1024px), 3-4 columns on desktop (1024px+)
- Use Tailwind CSS grid utilities for responsive breakpoints
- Ensure cards maintain consistent spacing and alignment across all screen sizes
- Cards should be scrollable when content exceeds viewport height

**Agent Card Component**
- Create white cards with rounded corners and subtle shadow for elevation
- Display agent title in bold black text at the top
- Show author information: circular avatar with single letter initial (purple background) and full name
- Include truncated description paragraph (concise summary, ~100-150 characters)
- Display tags row with pill-shaped tags (light gray backgrounds, black text)
- Show bottom metadata row with three stats: views (eye icon), saves/uses (document icon), and time ago (clock icon)
- Make entire card clickable to navigate to `/agents/[id]` detail page
- Add hover state for better interactivity feedback

**Mock Data Structure**
- Create JSON file in `/lib` directory with array of agent objects
- Each agent object contains: `id`, `name`, `description`, `content`, `created_at`, `author` (name, avatar initial), `tags` (array), `views`, `saves`, `created_at` (for time ago calculation)
- Include at least 6-10 sample agents with varied data for realistic gallery display
- Use descriptive agent names and realistic descriptions matching Claude Code agent use cases

**Loading State**
- Implement skeleton loader cards that match the card layout structure
- Simulate brief loading delay (200-500ms) to demonstrate async data fetching UX
- Show skeleton cards during loading, then transition to actual cards
- Use subtle animation for loading state transition

**Empty State**
- Display friendly message "No agents available yet" when mock data array is empty
- Include call-to-action text/link encouraging users to upload the first agent
- Style empty state to match overall design aesthetic with appropriate spacing

**Content Section**
- Add "Explore Agents" section title in large bold black text below header
- Include subtitle "Find the perfect agent for your next project" in smaller black text
- Use clean white background for content section contrasting with gradient header
- Ensure proper spacing between header and gallery sections

**Navigation Integration**
- Include header navigation linking to upload page (for future implementation)
- Ensure homepage integrates with existing Next.js App Router structure
- Maintain consistent navigation patterns with other pages

## Visual Design

**`planning/visuals/homepage-mockup.png`**
- Gradient header spans full width with purple-to-pink/red transition
- Header contains title, subtitle, and two metadata badges in white
- Content section uses white background with section title and subtitle
- Cards arranged in 3-column grid on desktop with scrollable gallery
- Each card shows title, author avatar+name, description, tags row, and stats row
- Cards use rounded corners, subtle shadows, and consistent spacing
- Tags displayed as pill-shaped elements with light gray backgrounds
- Stats row uses icons (eye, document, clock) with numbers/text
- Overall design emphasizes clean, modern aesthetic with clear visual hierarchy

## Existing Code to Leverage

**Next.js App Router Page Structure**
- Follow existing pattern from `app/page.tsx` for page component structure
- Use default export function pattern matching current homepage placeholder
- Maintain consistency with `app/layout.tsx` root layout structure
- Leverage Next.js metadata export pattern from root layout

**Tailwind CSS Styling Patterns**
- Use Tailwind utility classes following existing `app/globals.css` setup
- Apply responsive breakpoints using Tailwind's mobile-first approach
- Follow Tailwind v4 conventions for gradient backgrounds and spacing utilities
- Maintain consistent with existing page styling patterns (flex, min-h-screen, etc.)

**TypeScript Type Definitions**
- Define TypeScript interfaces for agent data structure matching mock JSON
- Use strict TypeScript typing following project's TypeScript configuration
- Create reusable types that can be shared with future agent detail page

## Out of Scope
- Pagination system (deferred to Phase 2 when real data is implemented)
- Real data persistence or database integration (Phase 2)
- User authentication and real author accounts (Phase 3)
- Tag filtering or search functionality (Phase 4)
- Real-time stats/metrics tracking (Phase 2+)
- Author profile pages or author detail views (Phase 3)
- Tag management or tag creation interface (Phase 4)
- Advanced card interactions like quick copy or hover previews
- Card sorting or filtering options
- Infinite scroll or lazy loading (Phase 2)

