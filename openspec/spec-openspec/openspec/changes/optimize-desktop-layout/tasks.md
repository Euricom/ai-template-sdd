# Tasks: Optimize Desktop Layout

## Implementation Tasks

### 1. Update BarChart Component Structure
- [x] Add semantic wrapper divs for grid areas in BarChart.tsx
- [x] Wrap chart-header in a `<div className="controls-section">`
- [x] Wrap Bar component in a `<div className="chart-section">`
- [x] Wrap color-controls in a `<div className="sidebar-section">`
- **Validation**: Component structure matches design requirements
- **Related spec**: `layout-enhancement/spec.md`

### 2. Implement Desktop Grid Layout
- [x] Update `.bar-chart-container` CSS to use CSS Grid
- [x] Define grid-template-areas for desktop layout
- [x] Set grid-template-columns: `1fr 350px` for desktop
- [x] Add 2rem gap between grid areas
- [x] Set max-width: 1600px on container
- **Validation**: Layout displays side-by-side on screens 1024px+
- **Related spec**: `layout-enhancement/spec.md`

### 3. Configure Grid Area Assignments
- [x] Assign `.controls-section` to grid-area: controls
- [x] Assign `.chart-section` to grid-area: chart
- [x] Assign `.sidebar-section` to grid-area: sidebar
- [x] Update grid-template-areas layout structure
- **Validation**: Each section appears in correct grid position
- **Related spec**: `layout-enhancement/spec.md`

### 4. Remove Chart Width Constraints
- [x] Remove `max-width: 800px` from `.chart-wrapper`
- [x] Set `.chart-wrapper` to `width: 100%` for desktop
- [x] Add `min-height: 400px` to maintain minimum chart size
- **Validation**: Chart expands to fill container width
- **Related spec**: `chart-sizing/spec.md`

### 5. Update Chart.js Configuration
- [x] Change `maintainAspectRatio` to `false` in options
- [x] Add dynamic `aspectRatio` based on screen width
- [x] Use 2 for desktop (>=1024px), 1.5 for tablet/mobile
- [x] Implement using window.innerWidth check or CSS custom property
- **Validation**: Chart aspect ratio changes appropriately per screen size
- **Related spec**: `chart-sizing/spec.md`

### 6. Style Sidebar Section
- [x] Style `.sidebar-section` with proper padding and spacing
- [x] Ensure fixed width (350px) on desktop
- [x] Add vertical flex layout for sidebar contents
- [x] Style control buttons for sidebar layout
- [x] Update color-pickers grid for vertical sidebar layout
- **Validation**: Sidebar displays cleanly with all controls accessible
- **Related spec**: `layout-enhancement/spec.md`

### 7. Implement Tablet Responsive Layout
- [x] Add media query for 768px-1023px (tablet)
- [x] Switch to single-column grid layout
- [x] Stack sections: controls → chart → sidebar
- [x] Set grid-template-columns to `1fr`
- [x] Adjust spacing for tablet view
- **Validation**: Layout stacks properly on tablet screens
- **Related spec**: `layout-enhancement/spec.md`

### 8. Update Mobile Responsive Styles
- [x] Review mobile media query (<768px)
- [x] Ensure single-column layout is maintained
- [x] Adjust padding and spacing for mobile
- [x] Verify color-pickers grid works on mobile
- [x] Test button sizing and touch targets
- **Validation**: Mobile layout remains fully functional
- **Related spec**: `layout-enhancement/spec.md`

### 9. Update App Container Styles
- [x] Increase App.css `#root` max-width to 1600px (from 1400px)
- [x] Ensure proper centering on ultra-wide displays
- [x] Verify header remains centered and readable
- **Validation**: Content is centered with max-width on ultra-wide screens
- **Related spec**: `layout-enhancement/spec.md`

### 10. Test Responsive Behavior
- [x] Test layout at 1920px desktop width
- [x] Test layout at 1440px laptop width
- [x] Test layout at 1024px small laptop width
- [x] Test layout at 768px tablet width
- [x] Test layout at 375px mobile width
- **Validation**: All breakpoints display correctly

### 11. Test Chart Resizing
- [x] Test manual browser window resize
- [x] Verify chart resizes smoothly
- [x] Check aspect ratio changes at breakpoints
- [x] Test device orientation changes (if applicable)
- **Validation**: Chart responds correctly to all resize events
- **Related spec**: `chart-sizing/spec.md`

### 12. Final Validation
- [x] Verify no TypeScript errors (`pnpm run build`)
- [x] Verify no ESLint errors (`pnpm run lint`)
- [x] Manually test layout at multiple screen sizes in browser
- [x] Verify all existing features still work (theme toggle, legend, colors)
- **Validation**: Build succeeds, lint passes, layout looks correct

## Notes on Dependencies
- Task 1 must complete before tasks 2-3
- Task 4 depends on task 2
- Task 5 can run in parallel with tasks 2-4
- Task 6 depends on task 3
- Tasks 7-8 depend on tasks 2-6 completing
- Task 9 can run in parallel with other tasks
- Tasks 10-12 are final validation tasks

## Validation Approach
This is a simple project - validation consists of:
- TypeScript compilation checks
- ESLint code quality checks
- Manual visual testing in the browser at different screen sizes
- No unit or integration tests required
