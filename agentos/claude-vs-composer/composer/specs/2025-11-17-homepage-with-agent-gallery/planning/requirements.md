# Spec Requirements: Homepage with Agent Gallery

## Initial Description
Homepage with Agent Gallery

## Requirements Discussion

### First Round Questions

**Q1:** I'm assuming a responsive grid layout (e.g., 1 column on mobile, 2 on tablet, 3-4 on desktop) using Tailwind CSS grid utilities. Is that correct, or do you prefer a different layout pattern?
**Answer:** yes, responsive

**Q2:** I'm thinking each card should display the agent name, a truncated description preview (e.g., first 100-150 characters), and basic metadata like creation date. Should we also include any other information on the cards (e.g., file size, tags, author name)?
**Answer:** yes

**Q3:** I'm assuming clicking a card navigates to `/agents/[id]` to view the full agent file details. Is that correct, or should cards have additional actions (e.g., quick copy button, hover preview)?
**Answer:** yes

**Q4:** I'm assuming we'll create a JSON file with an array of agent objects containing `id`, `name`, `description`, `content`, and `created_at` fields. Should this be stored in `/lib` or `/public`, and do you have a preferred structure?
**Answer:** in lib

**Q5:** I'm assuming if no agents exist, we'll show a friendly empty state message like "No agents available yet" with a call-to-action to upload the first one. Is that correct?
**Answer:** yes

**Q6:** Since we're using mock data, I'm assuming we'll simulate a brief loading state (e.g., skeleton cards) to demonstrate future async data fetching UX. Should we include this, or skip it for now?
**Answer:** yes

**Q7:** I'm assuming the homepage will include a header with navigation to the upload page and possibly a site title/logo. Should this header be part of this spec, or is it handled separately?
**Answer:** yes

**Q8:** For Phase 1 with mock data, I'm assuming we'll show all agents on one page without pagination (pagination comes in Phase 2). Is that correct, or should we include basic pagination even with mock data?
**Answer:** no pagination

### Existing Code to Reference

No similar existing features identified for reference.

### Follow-up Questions

**Follow-up 1:** The mockup shows a prominent gradient header section with "Agent Hub" title, subtitle, and metadata ("13 Agents", "Community Powered"). Should this header section be included as part of this spec, or is it handled separately?
**Answer:** yes

**Follow-up 2:** The mockup shows author avatars and names (e.g., "Sarah Chen", "Marcus Rodriguez") on each card. Since user accounts/ownership come in Phase 3, should we include mock author data (names/avatars) for Phase 1, or skip author info until Phase 3?
**Answer:** yes

**Follow-up 3:** The mockup shows tags like `code-review`, `python`, `backend` on each card. The roadmap mentions tags in Phase 4. Should we include mock tags on cards for Phase 1, or skip tags until Phase 4?
**Answer:** yes

**Follow-up 4:** The mockup shows stats like "782 views", "95 uses", and "3 months ago" on each card. Should we include these mock stats in Phase 1, or skip them until Phase 2 when we have real data?
**Answer:** yes

## Visual Assets

### Files Provided:
- `homepage-mockup.png`: High-fidelity mockup showing complete homepage design with gradient header and agent card gallery

### Visual Insights:
- **Header Section:** Prominent gradient background (purple to pink/red) with "Agent Hub" title, subtitle about browsing Claude Code agents, and metadata badges showing "13 Agents" and "Community Powered"
- **Content Section:** Clean white background with "Explore Agents" section title and subtitle "Find the perfect agent for your next project"
- **Card Design:** White cards with rounded corners and subtle shadows in a responsive grid layout
- **Card Content Structure:** Each card displays:
  - Agent title (bold, black text)
  - Author information with circular avatar (single letter) and full name
  - Description paragraph (concise summary)
  - Tags row (pill-shaped tags with light gray backgrounds)
  - Bottom metadata row with three stats: views (eye icon), saves/uses (document icon), and time ago (clock icon)
- **Layout:** Grid shows 3 cards horizontally with more cards visible below (scrollable gallery)
- **Fidelity Level:** High-fidelity mockup with complete design specifications

## Requirements Summary

### Functional Requirements
- Responsive grid layout (1 column mobile, 2 tablet, 3-4 desktop) using Tailwind CSS
- Display agent cards with name, truncated description preview, and metadata
- Click cards to navigate to `/agents/[id]` detail page
- Include header section with gradient background, title, subtitle, and metadata badges
- Show author information (avatar with initial, full name) on each card using mock data
- Display tags/categories on each card using mock data
- Show stats/metrics (views, saves/uses, time ago) on each card using mock data
- Empty state message when no agents available with call-to-action
- Simulated loading state with skeleton cards
- Mock data stored in JSON file in `/lib` directory
- No pagination (show all agents on single page)

### Reusability Opportunities
- No similar existing features identified for reference
- Will need to create new components for agent cards and gallery layout

### Scope Boundaries
**In Scope:**
- Homepage layout with gradient header section
- Agent gallery grid with responsive design
- Agent cards with all specified content (name, description, author, tags, stats)
- Mock data structure and loading
- Empty state handling
- Loading state simulation
- Navigation to agent detail pages

**Out of Scope:**
- Pagination (deferred to Phase 2)
- Real data persistence (Phase 2)
- User authentication and real author data (Phase 3)
- Tag filtering/search (Phase 4)
- Real stats/metrics tracking (Phase 2+)

### Technical Considerations
- Use Next.js App Router for page structure
- Tailwind CSS v4 for styling and responsive utilities
- TypeScript for type safety
- Mock data in JSON format stored in `/lib` directory
- React hooks for client-side state management
- Skeleton loaders for loading state UX
- Follow existing component standards (single responsibility, reusability, composability)
- Ensure accessibility compliance per frontend standards

