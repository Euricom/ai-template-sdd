# Task Breakdown: Homepage with Agent Gallery

## Overview

**Feature:** Homepage with Agent Gallery
**Total Tasks:** 15 sub-tasks across 4 task groups
**Estimated Total Effort:** 4-6 hours
**Tech Stack:** Next.js 15.5.6 (App Router), React 19.2.0, TypeScript strict mode, Tailwind CSS v4

## Task List

### Task Group 1: Component Development

**Estimated Effort:** 2-3 hours
**Dependencies:** None
**Files to Create:**
- `/components/AgentCard.tsx`
- `/components/ui/Badge.tsx` (if needed for tags)

#### Tasks

- [ ] 1.0 Complete AgentCard component
  - [ ] 1.1 Write 2-5 focused tests for AgentCard component
    - Test: Card renders with all required Agent interface props (name, description, author, tags)
    - Test: Card renders metadata correctly (viewCount, copyCount, createdAt)
    - Test: Link wraps card and points to correct `/agents/[id]` route
    - Test: Description truncates properly with line-clamp (2-3 lines)
    - Optional: Test hover state accessibility (focus-visible indicator)
    - Use Vitest and React Testing Library
    - Mock Agent data from `/lib/mock-data.ts` interface
  - [ ] 1.2 Create AgentCard component with TypeScript interface
    - Location: `/components/AgentCard.tsx`
    - Accept props: `agent: Agent` from `@/lib/mock-data`
    - Use semantic HTML: `<article>` wrapper with proper heading hierarchy
    - Import Next.js `Link` component for card wrapper
  - [ ] 1.3 Implement card structure and content hierarchy
    - Agent name: `<h2>` or `<h3>` with `text-xl font-semibold text-gray-900`
    - Description: `<p>` with `text-base text-gray-700 line-clamp-2` or `line-clamp-3`
    - Author: Display with visual distinction using `text-sm text-gray-600`
    - Tags: Render as inline badges with `lowercase` formatting (use existing kebab-case from mock data)
    - Metadata row: Show viewCount, copyCount, and createdAt with appropriate icons/labels
  - [ ] 1.4 Format createdAt date to relative format
    - Install `date-fns` or use native `Intl.RelativeTimeFormat`
    - Display as "2 months ago", "3 weeks ago", etc.
    - Keep formatting logic in component (simple utility function)
  - [ ] 1.5 Apply Tailwind CSS styling to card
    - Base: `bg-white border border-gray-200 rounded-lg p-4 sm:p-6`
    - Shadow: `shadow-sm` base, `hover:shadow-md` on hover
    - Transition: `transition-shadow duration-200`
    - Cursor: `cursor-pointer` to indicate clickability
    - Focus: `focus:ring-2 focus:ring-blue-500 focus:outline-none` for keyboard nav
    - Ensure minimum touch target size (44x44px) for mobile
  - [ ] 1.6 Implement tag Badge component (if not exists)
    - Location: `/components/ui/Badge.tsx`
    - Simple component with: `bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md`
    - Accept `children: React.ReactNode` prop
    - Reusable for other contexts
  - [ ] 1.7 Add metadata icons using inline SVG or lucide-react
    - Eye icon for viewCount
    - Copy icon for copyCount
    - Calendar/Clock icon for createdAt
    - Keep icons simple and consistent with `text-gray-500 w-4 h-4`
  - [ ] 1.8 Wrap card in Next.js Link component
    - Link href: `/agents/${agent.id}` using template literal
    - Add aria-label: `View details for ${agent.name}`
    - Prevent text selection conflicts with card click
    - Use `className` on Link to apply card styles
  - [ ] 1.9 Run AgentCard component tests
    - Execute ONLY the 2-5 tests written in task 1.1
    - Command: `pnpm test AgentCard` or equivalent Vitest command
    - Verify all tests pass before proceeding
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- AgentCard component renders correctly with all Agent interface props
- Typography hierarchy is clear (name > description > metadata)
- Tags display as badges with proper styling
- Hover and focus states work correctly for accessibility
- Link navigation to `/agents/[id]` is properly configured
- Date formats to relative time ("2 months ago")
- Component is fully typed with TypeScript (no `any` types)
- The 2-5 tests written in task 1.1 pass successfully

**Reference Patterns:**
- Follow component structure patterns from `/agent-os/standards/frontend/components.md`
- Use Tailwind utilities exclusively per `/agent-os/standards/frontend/css.md`
- Ensure mobile-first responsive approach per `/agent-os/standards/frontend/responsive.md`

---

### Task Group 2: Homepage Implementation

**Estimated Effort:** 1-1.5 hours
**Dependencies:** Task Group 1 (AgentCard component)
**Files to Modify:**
- `/app/page.tsx` (replace existing placeholder)

#### Tasks

- [ ] 2.0 Complete homepage implementation
  - [ ] 2.1 Write 2-4 focused tests for homepage
    - Test: Page renders with all 13 mock agents from mockAgents array
    - Test: Page displays "Agent Gallery" or "Browse Agents" h1 heading
    - Test: Grid layout renders with proper structure
    - Optional: Test empty state when mockAgents is empty array
    - Use Vitest and React Testing Library
    - Mock `/lib/mock-data` exports if needed
  - [ ] 2.2 Import dependencies in /app/page.tsx
    - Import `mockAgents` and `Agent` type from `@/lib/mock-data`
    - Import `AgentCard` component from `@/components/AgentCard`
    - Keep as Server Component (no `"use client"` directive)
  - [ ] 2.3 Replace placeholder content with gallery structure
    - Remove existing placeholder `<div>` content
    - Keep `<main>` wrapper with updated classes
    - Add page heading: `<h1>` with "Agent Gallery" or "Browse Agents"
    - Structure: heading -> grid container -> mapped AgentCard components
  - [ ] 2.4 Implement responsive grid layout with Tailwind
    - Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12`
    - Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6`
    - Mobile (default): 1 column
    - Tablet (md: 768px+): 2 columns
    - Desktop (lg: 1024px+): 3 columns
    - Gap spacing: `gap-4` mobile, `gap-6` desktop
  - [ ] 2.5 Map mockAgents array to AgentCard components
    - Use `mockAgents.map((agent) => <AgentCard key={agent.id} agent={agent} />)`
    - Ensure unique `key` prop using `agent.id`
    - Pass entire `agent` object as prop to AgentCard
  - [ ] 2.6 Implement empty state handling
    - Conditional render: `{mockAgents.length === 0 ? <EmptyState /> : <Grid />}`
    - Empty state: Centered message "No agents available yet"
    - Use semantic HTML: `<div className="text-center py-12">`
    - Style: `text-gray-600 text-lg`
  - [ ] 2.7 Apply typography to page heading
    - Heading: `<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">`
    - Responsive text sizing: `text-3xl` mobile, `text-4xl` desktop
    - Spacing: `mb-6` mobile, `mb-8` desktop
  - [ ] 2.8 Run homepage tests
    - Execute ONLY the 2-4 tests written in task 2.1
    - Command: `pnpm test page` or equivalent Vitest command
    - Verify page renders correctly with all agents
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- Homepage renders all 13 agents from mockAgents array
- Page heading is semantic `<h1>` and properly styled
- Grid layout is responsive (1/2/3 columns at different breakpoints)
- Empty state displays when mockAgents array is empty
- Page remains as Server Component (optimal for static content)
- No TypeScript errors or warnings
- The 2-4 tests written in task 2.1 pass successfully

**Reference Patterns:**
- Follow Next.js App Router conventions from `/agent-os/standards/global/tech-stack.md`
- Use mobile-first responsive design per `/agent-os/standards/frontend/responsive.md`

---

### Task Group 3: Styling and Responsive Design

**Estimated Effort:** 1-1.5 hours
**Dependencies:** Task Groups 1 and 2
**Files to Modify:**
- `/components/AgentCard.tsx` (refinements)
- `/app/page.tsx` (spacing refinements)

#### Tasks

- [ ] 3.0 Complete styling and responsive polish
  - [ ] 3.1 Write 2-3 focused responsive design tests
    - Test: Card maintains readable line-height and spacing on mobile viewports
    - Test: Grid switches to 2-column layout at md breakpoint (768px)
    - Test: Grid switches to 3-column layout at lg breakpoint (1024px)
    - Use Vitest with viewport mocking or visual regression testing
    - Focus on critical responsive breakpoints only
  - [ ] 3.2 Refine AgentCard mobile styling
    - Verify card padding: `p-4` on mobile is comfortable for touch
    - Check minimum touch target: Ensure entire card is at least 44x44px tappable area
    - Test description truncation: Confirm `line-clamp-2` or `line-clamp-3` works properly
    - Adjust font sizes if needed for mobile readability (minimum 16px for body text)
  - [ ] 3.3 Refine AgentCard tablet/desktop styling
    - Increase card padding on larger screens: `sm:p-6` for more breathing room
    - Verify hover shadow transition is smooth: `transition-shadow duration-200`
    - Test card height consistency across grid (ensure uniform card heights or graceful variable heights)
  - [ ] 3.4 Polish tag Badge styling
    - Ensure tags wrap gracefully: `flex-wrap` on tag container
    - Spacing between tags: `gap-2` using flexbox gap
    - Truncate long tag names if necessary: `max-w-[120px] truncate`
  - [ ] 3.5 Refine metadata display layout
    - Group metadata items: Use flexbox with `gap-3` or `gap-4`
    - Icon alignment: `flex items-center gap-1` for icon + text pairs
    - Responsive metadata: Stack vertically on mobile if needed, horizontal on desktop
  - [ ] 3.6 Polish page-level spacing and layout
    - Verify container max-width: `max-w-7xl` provides good content width
    - Check vertical spacing: `py-8 sm:py-12` for comfortable page padding
    - Test horizontal padding: `px-4 sm:px-6 lg:px-8` prevents edge bleeding
  - [ ] 3.7 Test focus indicators for keyboard navigation
    - Tab through cards and verify focus ring: `focus:ring-2 focus:ring-blue-500`
    - Ensure focus indicator is visible against all backgrounds
    - Test focus order is logical (top-to-bottom, left-to-right)
  - [ ] 3.8 Manual cross-device testing
    - Test on mobile viewport (375px width - iPhone SE)
    - Test on tablet viewport (768px width - iPad)
    - Test on desktop viewport (1440px width - standard laptop)
    - Verify grid layout, card sizing, and readability at all breakpoints
    - Use browser DevTools responsive mode for testing
  - [ ] 3.9 Run responsive design tests
    - Execute ONLY the 2-3 tests written in task 3.1
    - Command: `pnpm test responsive` or equivalent
    - Verify responsive breakpoints work correctly
    - Do NOT run entire test suite at this stage

**Acceptance Criteria:**
- Cards are fully responsive with comfortable spacing at all breakpoints
- Grid layout adapts correctly: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- Touch targets meet 44x44px minimum for mobile accessibility
- Hover and focus states are visually clear and smooth
- Typography is readable across all device sizes (minimum 16px body text)
- Tags wrap gracefully without breaking layout
- Metadata displays clearly without visual clutter
- The 2-3 tests written in task 3.1 pass successfully

**Reference Patterns:**
- Follow responsive breakpoints from `/agent-os/standards/frontend/responsive.md`
- Ensure mobile-first approach per `/agent-os/standards/frontend/responsive.md`
- Use Tailwind utilities exclusively per `/agent-os/standards/frontend/css.md`

---

### Task Group 4: Testing and Verification

**Estimated Effort:** 30 minutes - 1 hour
**Dependencies:** Task Groups 1, 2, and 3
**Files:** Review and run tests across all components

#### Tasks

- [ ] 4.0 Complete testing and verification
  - [ ] 4.1 Review existing tests from Task Groups 1-3
    - Review 2-5 tests from AgentCard component (Task 1.1)
    - Review 2-4 tests from homepage implementation (Task 2.1)
    - Review 2-3 tests from responsive design (Task 3.1)
    - Total existing tests: approximately 6-12 tests
    - Ensure tests are focused on critical user workflows only
  - [ ] 4.2 Analyze test coverage gaps for this feature
    - Identify critical user workflows lacking coverage:
      - End-to-end: User clicks card and navigates to detail page
      - Integration: Homepage fetches mock data and renders all cards
      - Accessibility: Keyboard navigation through card grid works
    - Focus ONLY on gaps related to Agent Gallery feature
    - Do NOT assess application-wide test coverage
    - Prioritize integration tests over additional unit tests
  - [ ] 4.3 Write up to 5 additional strategic tests maximum
    - Add maximum of 5 new integration/e2e tests to fill critical gaps
    - Example tests to consider:
      - Integration: Full page render with 13 agents displays correctly
      - Navigation: Clicking AgentCard navigates to correct `/agents/[id]` route
      - Accessibility: Screen reader announces card content correctly
      - Edge case: Empty state renders when mockAgents is empty
      - Performance: Page renders within acceptable time with 13 cards
    - Do NOT write exhaustive coverage for all scenarios
    - Skip edge cases, performance tests unless business-critical
    - Use Vitest + React Testing Library for consistency
  - [ ] 4.4 Run feature-specific tests only
    - Run ONLY tests related to Agent Gallery feature
    - Command: `pnpm test AgentCard page responsive` or filter by file pattern
    - Expected total: approximately 11-17 tests maximum
    - Do NOT run entire application test suite
    - Verify all critical workflows pass
  - [ ] 4.5 Manual browser testing checklist
    - [ ] Open `http://localhost:3000` in browser
    - [ ] Verify all 13 agent cards render correctly
    - [ ] Click on multiple cards, verify navigation to `/agents/[id]` (placeholder detail page expected)
    - [ ] Test keyboard navigation: Tab through cards, press Enter to navigate
    - [ ] Test mobile viewport: Switch to 375px width, verify 1-column layout
    - [ ] Test tablet viewport: Switch to 768px width, verify 2-column layout
    - [ ] Test desktop viewport: Switch to 1440px width, verify 3-column layout
    - [ ] Verify hover states work on desktop (shadow elevation)
    - [ ] Check empty state: Temporarily set `mockAgents = []`, verify empty message displays
  - [ ] 4.6 TypeScript compilation check
    - Run: `pnpm tsc --noEmit` to verify no type errors
    - Fix any TypeScript strict mode violations
    - Ensure no `any` types remain in code
  - [ ] 4.7 Lint and format code
    - Run: `pnpm lint` (using oxlint per tech stack)
    - Fix any linting errors or warnings
    - Ensure consistent code style across all new/modified files
  - [ ] 4.8 Accessibility audit with browser DevTools
    - Run Lighthouse accessibility audit on homepage
    - Target: 95+ accessibility score
    - Fix critical issues: missing alt text, poor contrast, missing ARIA labels
    - Verify semantic HTML structure (heading hierarchy, landmarks)

**Acceptance Criteria:**
- All feature-specific tests pass (approximately 11-17 tests total)
- Critical user workflows are covered: render, navigation, responsive layout
- No more than 5 additional tests added for gap filling
- Manual testing checklist completed successfully
- TypeScript compilation succeeds with no errors
- Linting passes with no warnings
- Lighthouse accessibility score is 95+ on homepage
- Feature is ready for code review and QA

**Reference Patterns:**
- Follow test writing guidelines from `/agent-os/standards/testing/test-writing.md`
- Focus on core user flows, defer edge case testing
- Test behavior not implementation

---

## Execution Order

**Recommended implementation sequence:**

1. **Task Group 1: Component Development** (2-3 hours)
   - Build and test AgentCard component with all required props and styling
   - Create reusable Badge component for tags
   - Ensure component is fully typed and accessible

2. **Task Group 2: Homepage Implementation** (1-1.5 hours)
   - Replace placeholder homepage with agent gallery grid
   - Map mockAgents to AgentCard components
   - Implement responsive grid layout with Tailwind

3. **Task Group 3: Styling and Responsive Design** (1-1.5 hours)
   - Polish card styling and responsive behavior
   - Test across multiple viewport sizes
   - Refine hover, focus, and interaction states

4. **Task Group 4: Testing and Verification** (30 min - 1 hour)
   - Run all feature tests and fill critical coverage gaps
   - Perform manual browser and accessibility testing
   - Verify TypeScript and linting compliance

**Total Estimated Time:** 4-6 hours

---

## Key Constraints and Standards Compliance

**Testing Approach:**
- Write 2-8 focused tests per task group during development (tasks x.1)
- Test ONLY critical behaviors, not exhaustive coverage
- Run only newly written tests after each group (tasks x.9), NOT entire suite
- Add maximum 5 additional tests in Task Group 4 to fill strategic gaps
- Follow minimalist testing approach per `/agent-os/standards/testing/test-writing.md`

**Component Standards:**
- Single responsibility: AgentCard displays one agent, Badge displays one tag
- Reusability: Components accept typed props and work in any context
- Clear interface: Explicit TypeScript interfaces with no `any` types
- Per `/agent-os/standards/frontend/components.md`

**Styling Standards:**
- Use Tailwind CSS v4 utilities exclusively, no custom CSS
- Mobile-first responsive design with standard breakpoints
- Maintain design system tokens (gray scale, spacing scale)
- Per `/agent-os/standards/frontend/css.md` and `/agent-os/standards/frontend/responsive.md`

**Tech Stack Compliance:**
- Next.js 15.5.6 App Router (Server Components by default)
- React 19.2.0 with TypeScript strict mode
- Tailwind CSS v4 for styling
- Vitest for testing
- Per `/agent-os/standards/global/tech-stack.md`

---

## Files Created/Modified

**New Files:**
- `/components/AgentCard.tsx` - Main agent card component
- `/components/ui/Badge.tsx` - Reusable tag badge component
- `/components/AgentCard.test.tsx` - AgentCard tests (if separate test files)
- `/app/page.test.tsx` - Homepage tests (if separate test files)

**Modified Files:**
- `/app/page.tsx` - Replace placeholder with agent gallery

**Reference Files (no changes):**
- `/lib/mock-data.ts` - Source of Agent interface and mockAgents data
- `/app/layout.tsx` - Provides Inter font and global styles
- `/components/ui/` - May contain existing UI primitives to leverage

---

## Success Metrics

**Functional:**
- All 13 agents from mockAgents render correctly on homepage
- Grid layout is responsive (1/2/3 columns) across all devices
- Card navigation to `/agents/[id]` works correctly
- Empty state displays when no agents available

**Quality:**
- TypeScript strict mode with no errors or `any` types
- 11-17 focused tests pass covering critical workflows
- Lighthouse accessibility score 95+
- Lint passes with oxlint with no warnings

**User Experience:**
- Cards are readable and tappable on mobile (44x44px minimum)
- Hover and focus states are clear and smooth
- Typography hierarchy is evident (name > description > metadata)
- Page loads quickly as static Server Component

---

## Notes

- **Detail Page Navigation:** Cards link to `/agents/[id]` routes. Detail page implementation is out of scope for this spec. Links will work but navigate to 404 until detail pages are built in a future spec.

- **Icons:** Use inline SVG or install `lucide-react` for view/copy/date icons. Keep icons simple and consistent.

- **Date Formatting:** For relative date display ("2 months ago"), consider `date-fns` library or native `Intl.RelativeTimeFormat` API. Choose based on bundle size preference.

- **Empty State:** Simple text-based empty state is sufficient for MVP. Can be enhanced with illustrations or call-to-action buttons in future iterations.

- **Performance:** Using Server Components (default) ensures optimal performance. All 13 cards render on server, no client-side JavaScript needed for static content.
