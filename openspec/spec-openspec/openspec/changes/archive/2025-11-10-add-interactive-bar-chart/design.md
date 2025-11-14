# Design: Interactive Bar Chart Tool

## Architecture Overview
The bar chart tool will be implemented as a self-contained feature component with the following structure:

```
src/
├── components/
│   └── BarChart/
│       ├── BarChart.tsx          # Main chart component
│       ├── BarChart.css          # Chart-specific styles
│       ├── ChartControls.tsx     # Legend & color controls
│       └── types.ts              # TypeScript types
├── hooks/
│   └── useTheme.ts               # Theme management hook
├── utils/
│   └── chartColors.ts            # Theme-aware color utilities
└── App.tsx                       # Updated to include chart
```

## Component Hierarchy
```
App
└── BarChart
    ├── Bar (Chart.js component)
    └── ChartControls
        ├── ThemeToggle
        ├── LegendToggle
        └── ColorPicker (per bar)
```

## State Management
All state will be managed using React hooks (no external state library needed):

```typescript
// Main chart state
const [chartData, setChartData] = useState<ChartData>({
  labels: string[],
  datasets: [{
    label: string,
    data: number[],
    backgroundColor: string[]
  }]
})

// Theme state
const [theme, setTheme] = useState<'light' | 'dark'>('light')

// Legend visibility state
const [showLegend, setShowLegend] = useState<boolean>(true)
```

## Theme System Design

### Color Mapping Strategy
Define two color palettes that provide sufficient contrast for their respective themes:

**Light Mode Colors**:
- Background: `#ffffff`
- Text: `#333333`
- Grid lines: `rgba(0, 0, 0, 0.1)`
- Default bar colors: Vibrant saturated colors

**Dark Mode Colors**:
- Background: `#1a1a1a`
- Text: `#e0e0e0`
- Grid lines: `rgba(255, 255, 255, 0.1)`
- Default bar colors: Slightly desaturated versions of light mode colors

### Color Persistence
User-customized colors will be stored and automatically adjusted for theme:
1. Store colors in HSL format for easier brightness adjustment
2. When theme changes, adjust lightness value while preserving hue/saturation
3. Ensure WCAG AA contrast ratio in both themes

### Chart.js Options Configuration
Theme will be applied via Chart.js options:

```typescript
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: showLegend,
      labels: {
        color: theme === 'light' ? '#333' : '#e0e0e0'
      }
    }
  },
  scales: {
    x: {
      grid: { color: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' },
      ticks: { color: theme === 'light' ? '#333' : '#e0e0e0' }
    },
    y: {
      grid: { color: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' },
      ticks: { color: theme === 'light' ? '#333' : '#e0e0e0' }
    }
  }
}
```

## Color Customization UI
Each bar will have an associated color picker:
- Use native HTML5 `<input type="color">` for simplicity
- Display pickers in a row below the chart
- Label each picker with the corresponding data label
- Update chart immediately on color change

## Sample Data Structure
Initial hardcoded data:

```typescript
const initialData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'Monthly Sales',
    data: [65, 59, 80, 81, 56, 55],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)',
      'rgba(255, 159, 64, 0.8)'
    ]
  }]
}
```

## Performance Considerations
- Chart.js uses Canvas API, which is performant for this use case (6 bars)
- Theme changes trigger re-render but only update options object
- Color changes update only the backgroundColor array (minimal re-render)
- No memoization needed at this scale

## Accessibility
- Provide ARIA labels for controls
- Ensure keyboard navigation works for all interactive elements
- Maintain sufficient color contrast in both themes
- Include text alternatives for visual data

## Error Handling
- Validate color input from picker (should be automatic with HTML5 input)
- Graceful fallback if Chart.js fails to load
- Console warnings for development if data structure is invalid

## Testing Strategy
Future tests should cover:
- Chart renders with sample data
- Theme toggle updates all chart colors
- Legend toggle shows/hides legend
- Color picker updates specific bar color
- Custom colors persist through theme changes
- All components follow strict TypeScript typing

## Trade-offs

### Chart.js vs. Custom SVG
**Decision**: Use Chart.js

**Reasoning**:
- Faster development time
- Battle-tested library with good docs
- Built-in responsive behavior
- Acceptable bundle size (~200KB)
- Custom SVG would take significantly longer and increase maintenance burden

### Theme Implementation
**Decision**: React Context is overkill; use props/state

**Reasoning**:
- Single component hierarchy, no deep prop drilling
- Simpler mental model for demo project
- Easy to upgrade to Context later if needed

### Color Format
**Decision**: Store in rgba() strings initially, convert to HSL for theme adaptation

**Reasoning**:
- Chart.js expects rgba/rgb strings
- HSL makes brightness adjustment easier
- Conversion overhead is negligible for 6 colors
