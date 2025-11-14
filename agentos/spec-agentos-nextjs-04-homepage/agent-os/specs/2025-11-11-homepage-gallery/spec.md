# Specification: Homepage with Agent Gallery

## Goal
Create a responsive homepage that displays a grid of agent file cards, allowing users to browse available Claude Code agents with visual previews of key metadata using static mock data.

## User Stories
- As a visitor, I want to see a grid of available agent files with their names and descriptions so that I can quickly browse and discover agents that might be useful for my workflow
- As a visitor, I want to see metadata like author names and tags on each agent card so that I can assess the relevance and credibility of agents before clicking for details

## Specific Requirements

**Agent Card Component**
- Display agent name as a prominent heading using semantic HTML (h2 or h3)
- Show truncated description preview (2-3 lines max with ellipsis overflow)
- Display author name with visual distinction from other metadata
- Render tag list as inline badges with lowercase kebab-case formatting
- Show view count and copy count with appropriate icons or labels
- Display creation date in human-readable relative format (e.g., "2 months ago")
- Use semantic HTML with proper heading hierarchy and article/section elements
- Implement as a reusable component accepting Agent interface props

**Responsive Grid Layout**
- Use CSS Grid with mobile-first responsive breakpoints
- Mobile (default): Single column layout for optimal readability
- Tablet (md breakpoint ~768px): 2-column grid with appropriate gap spacing
- Desktop (lg breakpoint ~1024px): 3-column grid for efficient space usage
- Apply consistent spacing using Tailwind spacing utilities (gap-4 to gap-6)
- Set max-width container (max-w-7xl) with horizontal padding for large screens
- Use Tailwind CSS v4 utilities exclusively without custom CSS

**Card Interaction States**
- Implement hover state with subtle elevation change (shadow increase)
- Add smooth transition animations for hover effects (transition-shadow duration-200)
- Ensure entire card is clickable/tappable as a link to detail page
- Maintain minimum 44x44px touch target for mobile accessibility
- Add visible focus indicator for keyboard navigation (focus:ring-2)
- Use cursor-pointer to indicate interactivity

**Link Behavior and Navigation**
- Wrap entire card in Next.js Link component pointing to /agents/[id]
- Use dynamic routing with agent.id for detail page navigation
- Prevent default text selection behavior that conflicts with card click
- Ensure link has descriptive aria-label for screen readers
- Maintain accessible link text within card structure

**Metadata Display Priority**
- Primary: Agent name and description preview (most prominent)
- Secondary: Author name and tags (medium emphasis)
- Tertiary: View count, copy count, and creation date (subtle, lower visual weight)
- Use Tailwind typography utilities for hierarchy (text-xl, text-base, text-sm, text-gray-600)
- Group related metadata visually (counts together, tags together)

**Empty State Handling**
- Display friendly message when mockAgents array is empty or undefined
- Show "No agents available yet" message with optional call-to-action
- Center empty state message vertically and horizontally
- Use semantic HTML for empty state (not just a div with text)

**Page Structure and Layout**
- Implement in /app/page.tsx using Next.js App Router conventions
- Use main semantic HTML element for page content
- Add page heading (h1) "Agent Gallery" or "Browse Agents" above grid
- Import mockAgents from @/lib/mock-data and map to card components
- Keep all logic in server component (no client-side state needed)

**Performance Optimization**
- Use static rendering (default for server components) for 13 agent cards
- Avoid unnecessary client components or useState/useEffect
- Leverage Next.js automatic image optimization if agent thumbnails added later
- Use inline SVG or icon components for view/copy count icons
- Minimize component re-renders by keeping structure simple

## Visual Design

No visual mockups were provided. Follow these Tailwind CSS v4 design guidelines:

**Card Styling**
- White background (bg-white) with border (border border-gray-200)
- Rounded corners (rounded-lg) for modern appearance
- Padding (p-4 to p-6) for comfortable content spacing
- Shadow on base state (shadow-sm) and elevated shadow on hover (shadow-md)
- Maintain consistent card height or use min-height for uniformity

**Typography**
- Agent name: text-xl font-semibold text-gray-900
- Description: text-base text-gray-700 line-clamp-2 or line-clamp-3
- Author: text-sm text-gray-600
- Metadata: text-xs text-gray-500
- Use Inter font family (already configured in layout)

**Color System**
- Primary text: gray-900
- Secondary text: gray-700
- Metadata text: gray-500 to gray-600
- Borders: gray-200
- Tag backgrounds: gray-100 with gray-700 text or brand color if defined
- Hover states: subtle shadow increase, no background color change needed

**Spacing**
- Grid gap: gap-4 on mobile, gap-6 on desktop
- Card internal padding: p-4 to p-6
- Stack metadata with appropriate spacing (space-y-2 to space-y-4)
- Container padding: px-4 on mobile, px-6 to px-8 on desktop

## Existing Code to Leverage

**Mock Data Structure (/lib/mock-data.ts)**
- Import Agent interface and mockAgents array for type safety
- Use all Agent interface properties: id, name, description, author, createdAt, tags, viewCount, copyCount
- The content field will not be displayed on cards (only on detail page)
- Mock data contains 13 agents with realistic values across 6 categories
- Tags are already formatted in lowercase kebab-case

**Root Layout (/app/layout.tsx)**
- Inter font is already configured and applied globally
- Metadata is set with title "Agent Hub" and description
- Tailwind globals.css is imported with base/components/utilities
- HTML lang attribute is set to "en" for accessibility

**Current Homepage (/app/page.tsx)**
- Replace placeholder content entirely with agent gallery implementation
- Maintain main semantic element with proper classes
- Keep responsive padding classes pattern (p-24 can be adjusted)
- Use existing Next.js App Router structure without additional routing config

**Tailwind Configuration (tailwind.config.ts)**
- Configuration already includes app and components directories in content paths
- Use theme.extend for any custom values if needed (currently empty)
- Leverage default Tailwind v4 design tokens for colors, spacing, typography

**TypeScript Configuration**
- Strict mode enabled for type safety
- Path aliases configured (@/ points to root)
- Ensure all components use explicit typing with Agent interface

## Out of Scope
- Search functionality across agent names or descriptions (Phase 4)
- Filter or sort controls for the agent gallery (Phase 4)
- Pagination or "load more" functionality (Phase 2)
- Server-side data fetching from database (Phase 2)
- Real-time view count or copy count updates (Phase 4)
- Agent rating or star rating display (Phase 4)
- User authentication or login state (Phase 3)
- User profile links or author profile pages (Phase 3)
- Favorite or bookmark functionality (Phase 4)
- Agent thumbnail images or screenshots (future enhancement)
