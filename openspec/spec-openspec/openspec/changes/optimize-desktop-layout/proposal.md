# Proposal: Optimize Desktop Layout

## Summary
Redesign the bar chart application layout to be optimized for desktop/browser use with a wider viewport, better use of screen real estate, and improved visual hierarchy for larger displays.

## Motivation
The current layout is designed with mobile-first principles:
- Chart is constrained to 800px max-width
- Centered narrow layout wastes horizontal space on desktops
- Controls and color pickers are stacked vertically
- Overall design feels cramped on large monitors (1920px+ wide)

Desktop users with larger screens should have:
- Fuller utilization of screen width
- Side-by-side layout for chart and controls
- Larger, more readable chart visualization
- Better spacing and visual hierarchy

## Scope
This change will:
1. **Layout Enhancement**: Create a desktop-optimized two-column layout
2. **Chart Sizing**: Expand chart to utilize available horizontal space

### In Scope
- Wider chart viewport (up to 1200px on desktop)
- Side-by-side layout: chart on left, controls on right
- Improved spacing and padding for desktop displays
- Maintain responsive behavior for tablet/mobile

### Out of Scope
- Chart functionality changes
- New interactive features
- Data management capabilities
- Export or sharing features

## User Impact
Users on desktop browsers will see:
- Chart fills more of the screen width (60-70% of viewport)
- Controls panel on the right side (sidebar style)
- Better visual balance and less scrolling
- Mobile users maintain current responsive experience

## Dependencies
No new dependencies required - CSS-only changes.

## Implementation Phases
1. **Phase 1**: Modify layout structure with flexbox/grid
2. **Phase 2**: Adjust chart sizing and aspect ratio configuration
3. **Phase 3**: Update responsive breakpoints and mobile behavior

## Alternatives Considered
- **Keep mobile-first**: Rejected - doesn't serve desktop users well
- **Separate desktop/mobile components**: Overkill - CSS media queries sufficient
- **Full-width chart**: Too wide, reduces readability

The chosen approach balances desktop optimization while maintaining responsive mobile support.

## Success Criteria
- Chart utilizes 60-70% of viewport width on desktop (1024px+ screens)
- Controls are accessible in a right sidebar on desktop
- Layout remains fully responsive on mobile/tablet
- No horizontal scrolling on any screen size
- Maintains all existing functionality
- Passes TypeScript and ESLint checks
