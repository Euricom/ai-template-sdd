# Design: Optimize Desktop Layout

## Architecture Overview
Convert the current centered, mobile-first layout to a desktop-optimized two-column design that better utilizes horizontal space on larger screens.

## Current Layout Issues
```
Current (Mobile-First):
┌─────────────────────────────────────────┐
│           Header (centered)             │
├─────────────────────────────────────────┤
│                                         │
│    ┌─────────────────────────┐         │
│    │      Chart (800px)      │         │
│    │                         │         │
│    └─────────────────────────┘         │
│                                         │
│    ┌─────────────────────────┐         │
│    │    Color Controls       │         │
│    └─────────────────────────┘         │
│                                         │
└─────────────────────────────────────────┘
  Wasted space →              ← Wasted space
```

## Proposed Layout (Desktop)
```
Desktop (1024px+):
┌──────────────────────────────────────────────────┐
│              Header (full width)                 │
├─────────────────────────────────┬────────────────┤
│                                 │                │
│   Chart Area (60-70%)           │  Controls (30%)│
│   ┌─────────────────────────┐   │                │
│   │                         │   │  Theme Toggle  │
│   │     Bar Chart           │   │  Legend Toggle │
│   │     (Larger)            │   │                │
│   │                         │   │  Color Pickers │
│   └─────────────────────────┘   │  - January     │
│                                 │  - February    │
│                                 │  - March       │
│                                 │  - April       │
│                                 │  - May         │
│                                 │  - June        │
│                                 │                │
└─────────────────────────────────┴────────────────┘
```

## Layout Implementation Strategy

### Desktop Layout (1024px+)
```css
.bar-chart-container {
  display: grid;
  grid-template-areas:
    "controls controls"
    "chart sidebar";
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  max-width: 1600px;
  width: 100%;
}

.chart-header {
  grid-area: controls;
}

.chart-wrapper {
  grid-area: chart;
  max-width: none; /* Remove 800px limit */
}

.color-controls {
  grid-area: sidebar;
}
```

### Tablet Layout (768px - 1023px)
```css
@media (max-width: 1023px) {
  .bar-chart-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "controls"
      "chart"
      "sidebar";
  }

  .chart-wrapper {
    max-width: 100%;
  }
}
```

### Mobile Layout (< 768px)
Maintains current stacked layout with tighter spacing.

## Chart.js Configuration Changes

### Current Configuration
```typescript
const options = {
  responsive: true,
  maintainAspectRatio: true,  // Forces 2:1 ratio
  // ...
}
```

### Updated Configuration
```typescript
const options = {
  responsive: true,
  maintainAspectRatio: false,  // Allow flexible sizing
  aspectRatio: window.innerWidth >= 1024 ? 2 : 1.5,
  // ...
}
```

## Component Structure Changes

### BarChart Component
- Wrap chart header, chart, and controls in semantic sections
- Add CSS classes for grid positioning
- No logic changes required

### CSS Architecture
```
BarChart.css
├── Base styles (all screens)
├── Desktop layout (1024px+)
│   ├── Grid layout
│   ├── Sidebar styles
│   └── Expanded chart sizing
├── Tablet layout (768-1023px)
│   └── Stacked grid
└── Mobile layout (<768px)
    └── Compact spacing
```

## Responsive Breakpoints

| Breakpoint | Layout Strategy | Chart Width |
|------------|----------------|-------------|
| < 768px    | Stacked, mobile-first | 100% (parent) |
| 768-1023px | Stacked, tablet | 100% (parent) |
| 1024-1440px| Two-column | ~60% viewport |
| 1440px+    | Two-column, capped | Up to 1200px |

## Visual Enhancements

### Sidebar Design
- Fixed width: 350px on desktop
- Sticky positioning (optional future enhancement)
- Card-style background with subtle border
- Vertical layout with proper spacing between sections

### Chart Container
- Remove 800px max-width restriction
- Add min-height for consistent sizing
- Flexible width based on available space

## Performance Considerations
- CSS-only changes, no JavaScript overhead
- No re-renders required for layout changes
- Grid/flexbox natively performant
- Chart.js automatically handles resize events

## Accessibility
- Maintain logical tab order (left to right, top to bottom)
- Ensure controls remain keyboard accessible
- Preserve all ARIA labels
- Test with screen readers in both layouts

## Browser Support
- CSS Grid: Supported in all modern browsers
- Flexbox fallback: Not needed (Grid is sufficient)
- Target browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)

## Trade-offs

### Grid vs. Flexbox
**Decision**: Use CSS Grid

**Reasoning**:
- Better for two-dimensional layout control
- Named grid areas improve readability
- Easier to reorder for responsive design
- Native gap property for consistent spacing

### Fixed vs. Percentage Sidebar Width
**Decision**: Fixed width (350px) sidebar

**Reasoning**:
- Color pickers need minimum width to be usable
- Prevents controls from becoming too cramped
- Chart gets remaining flexible space
- Simpler to reason about layout behavior
